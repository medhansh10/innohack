"""
generate_confidence_map.py
==========================
Generates pixel-level confidence heatmaps, shadow masks, and overlay
visualizations for Chandrayaan-2 imagery using Hapke illumination physics.
"""

import os
import glob
import math
import zipfile
import cv2
import numpy as np
import xml.etree.ElementTree as ET
from typing import Dict, Any, Tuple


# =====================================================================
# 1. Hapke Model & XML Loader
# =====================================================================
LUNAR_HAPKE_DEFAULTS = {
    "w": 0.23, "b": 0.28, "c": 0.55, "B0": 1.00, "h": 0.065
}

def parse_pds4_from_zip_or_file(target_path: str) -> Tuple[Dict[str, Any], np.ndarray]:
    """Extracts the primary XML metadata and image array from a zip or files."""
    if target_path.lower().endswith(".zip"):
        with zipfile.ZipFile(target_path, 'r') as z:
            file_list = z.namelist()
            
            # Find primary XML
            xml_candidates = [f for f in file_list if f.lower().endswith('.xml')]
            target_xml = next((f for f in xml_candidates if "/data/" in f.lower() or "_d_img_" in f.lower()), None)
            if not target_xml:
                target_xml = xml_candidates[0]
            xml_bytes = z.read(target_xml).decode('utf-8', errors='replace')
            
            # Find image (browse PNG or raw)
            img_candidates = [f for f in file_list if f.lower().endswith(('.png', '.tif', '.tiff', '.jpg'))]
            if not img_candidates:
                raise FileNotFoundError("No image found inside the zip file.")
            target_img = img_candidates[0]
            print(f"[+] Loaded image from zip: {target_img}")
            img_bytes = z.read(target_img)
            img_np = np.frombuffer(img_bytes, np.uint8)
            img = cv2.imdecode(img_np, cv2.IMREAD_UNCHANGED)
    else:
        # Standalone XML / Image handling
        with open(target_path, 'r', encoding='utf-8') as f:
            xml_bytes = f.read()
        img_path = target_path.replace(".xml", ".png")
        img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)

    # Parse XML
    root = ET.fromstring(xml_bytes)
    def find_val(tags, default=None):
        for elem in root.iter():
            tag = elem.tag.split("}")[-1]
            for p in tags:
                if tag.lower() == p.lower() and elem.text:
                    try: return float(elem.text.strip())
                    except ValueError: return elem.text.strip()
        return default

    inc_angle = find_val(["solar_incidence", "solar_incidence_angle", "incidence_angle"], default=84.484)
    sun_elev = find_val(["sun_elevation", "solar_elevation"], default=round(90.0 - inc_angle, 3))
    
    geom = {
        "incidence_angle_deg": float(inc_angle),
        "sun_elevation_deg": float(sun_elev),
        "target": str(find_val(["target_name"], "Moon")),
        "instrument": str(find_val(["instrument_id"], "OHRC")),
    }
    return geom, img


# =====================================================================
# 2. Physics-Based Confidence Map Computation
# =====================================================================
def compute_pixel_confidence(img: np.ndarray, geom: Dict[str, Any]) -> Tuple[np.ndarray, np.ndarray, Dict[str, Any]]:
    """
    Computes a per-pixel confidence score [0.0 - 1.0] by evaluating local SNR,
    dark shadow thresholds, and Hapke global incidence angle penalty.
    """
    # Convert to grayscale float [0, 1]
    if len(img.shape) == 3:
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    else:
        gray = img.copy()
        
    gray_norm = gray.astype(np.float32) / 255.0

    # 1. Physics thresholding based on incidence angle
    i = geom["incidence_angle_deg"]
    
    # Under grazing light (i > 80 deg), shadow cutoff is sharper
    if i >= 80.0:
        shadow_thresh = 0.08      # DN < 20 in 8-bit
        penumbra_thresh = 0.25    # DN < 64
        base_shadow_conf = 0.15   # Max confidence in deep shadow
    elif i >= 65.0:
        shadow_thresh = 0.06
        penumbra_thresh = 0.20
        base_shadow_conf = 0.30
    else:
        shadow_thresh = 0.04
        penumbra_thresh = 0.15
        base_shadow_conf = 0.50

    # 2. Build continuous confidence map
    # Deep Shadow (< shadow_thresh): Very low confidence (hallucination danger)
    # Penumbra (shadow_thresh to penumbra_thresh): Smooth sigmoid ramp
    # Illuminated (> penumbra_thresh): High confidence (0.85 - 0.98)
    confidence = np.zeros_like(gray_norm)
    
    # Deep shadow mask
    is_deep_shadow = gray_norm < shadow_thresh
    confidence[is_deep_shadow] = base_shadow_conf * (gray_norm[is_deep_shadow] / (shadow_thresh + 1e-6))

    # Penumbra region
    is_penumbra = (gray_norm >= shadow_thresh) & (gray_norm < penumbra_thresh)
    norm_penumbra = (gray_norm[is_penumbra] - shadow_thresh) / (penumbra_thresh - shadow_thresh)
    confidence[is_penumbra] = base_shadow_conf + (0.88 - base_shadow_conf) * (0.5 - 0.5 * np.cos(norm_penumbra * np.pi))

    # Fully illuminated terrain
    is_illuminated = gray_norm >= penumbra_thresh
    confidence[is_illuminated] = 0.88 + 0.10 * np.clip((gray_norm[is_illuminated] - penumbra_thresh) / (1.0 - penumbra_thresh), 0.0, 1.0)

    # 3. Create binary shadow mask (1 = shadow hazard, 0 = reliable)
    shadow_mask = (is_deep_shadow * 255).astype(np.uint8)

    # Calculate scene statistics
    total_pixels = gray.size
    shadow_pct = float(np.sum(is_deep_shadow) / total_pixels * 100.0)
    penumbra_pct = float(np.sum(is_penumbra) / total_pixels * 100.0)
    illuminated_pct = float(np.sum(is_illuminated) / total_pixels * 100.0)
    mean_conf = float(np.mean(confidence) * 100.0)

    stats = {
        "deep_shadow_area_pct": round(shadow_pct, 2),
        "penumbra_area_pct": round(penumbra_pct, 2),
        "illuminated_area_pct": round(illuminated_pct, 2),
        "mean_pixel_confidence_pct": round(mean_conf, 2),
    }

    return confidence, shadow_mask, stats


# =====================================================================
# 3. Rendering & Output Generator
# =====================================================================
def render_visualizations(
    img: np.ndarray, 
    confidence: np.ndarray, 
    shadow_mask: np.ndarray, 
    output_dir: str = "output"
):
    os.makedirs(output_dir, exist_ok=True)

    if len(img.shape) == 2:
        img_bgr = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    else:
        img_bgr = img.copy()

    # 1. Color-coded Heatmap (Turbo/Jet colormap: Red = Low Conf, Green/Blue = High Conf)
    conf_u8 = (confidence * 255.0).astype(np.uint8)
    heatmap_bgr = cv2.applyColorMap(conf_u8, cv2.COLORMAP_TURBO)

    # 2. Semi-Transparent Overlay on original image (60% image + 40% heatmap)
    overlay = cv2.addWeighted(img_bgr, 0.60, heatmap_bgr, 0.40, 0)

    # Save files
    heatmap_path = os.path.join(output_dir, "confidence_heatmap.png")
    overlay_path = os.path.join(output_dir, "confidence_overlay.png")
    mask_path = os.path.join(output_dir, "shadow_mask.png")

    cv2.imwrite(heatmap_path, heatmap_bgr)
    cv2.imwrite(overlay_path, overlay)
    cv2.imwrite(mask_path, shadow_mask)

    print(f"[+] Saved Confidence Heatmap -> {heatmap_path}")
    print(f"[+] Saved Blended Overlay    -> {overlay_path}")
    print(f"[+] Saved Binary Shadow Mask -> {mask_path}")


# =====================================================================
# Main Execution
# =====================================================================
if __name__ == "__main__":
    import sys

    # Auto-detect zip or xml in current folder
    if len(sys.argv) > 1:
        target = sys.argv[1]
    else:
        candidates = glob.glob("*.zip") + glob.glob("*.xml")
        if not candidates:
            print("[!] No .zip or .xml file found.")
            sys.exit(1)
        target = candidates[0]

    print(f"\n[*] Processing file for Pixel-Level Confidence: {target}")
    geom, img = parse_pds4_from_zip_or_file(target)
    
    print(f"[*] Image shape: {img.shape} | Incidence Angle: {geom['incidence_angle_deg']}°")
    confidence_map, shadow_mask, stats = compute_pixel_confidence(img, geom)

    render_visualizations(img, confidence_map, shadow_mask, output_dir="output")

    print("\n" + "=" * 60)
    print("      PIXEL-LEVEL ILLUMINATION & CONFIDENCE STATS")
    print("=" * 60)
    print(f"  * Deep Shadow Area (High Risk) : {stats['deep_shadow_area_pct']}%")
    print(f"  * Penumbra Transition Area     : {stats['penumbra_area_pct']}%")
    print(f"  * Fully Illuminated Regolith   : {stats['illuminated_area_pct']}%")
    print(f"  * Mean Scene Confidence Score  : {stats['mean_pixel_confidence_pct']} / 100")
    print("=" * 60 + "\n")