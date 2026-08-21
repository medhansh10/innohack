"""
confidence_pipeline.py
-----------------------
Companion module for main.py. Does NOT modify how Real-ESRGAN runs -- you keep
using your existing RealESRGANer exactly as-is. This module takes the LR input
array and the SR output array your upsampler already produced, plus the PDS4
XML (and optionally the .oat file) for that scene, and produces a CONFIDENCE
MAP that blends the enhanced output back toward the original wherever physics
+ the raw pixel data both say "don't trust invented detail here."

No pixel values are ever fabricated from the Hapke prediction -- the model's
output is only ever blended DOWN toward real measured data, never up/replaced
with a synthesized value. That's the safety property that matters for this
project: confidence can only make you more conservative, never less faithful.

Two independent signals combine into the confidence map:
  1. Scene-level geometric risk from Hapke (via hapke_model.py) -- high
     incidence angle => globally lower trust ceiling for the whole scene.
  2. Pixel-level shadow detection on the actual LR image -- genuinely dark
     regions get individually downweighted, regardless of scene average.

confidence_map = pixel_shadow_confidence * scene_geometric_multiplier

Usage (inside your existing main.py, after upsampler.enhance()):

    from confidence_pipeline import enhance_with_confidence

    result = enhance_with_confidence(
        lr_array=img,                 # the same numpy array you passed to upsampler.enhance()
        sr_array=output,               # the same numpy array upsampler.enhance() returned
        xml_path="scene_label.xml",
        oat_path="scene.oat",          # optional but preferred, see hapke_model.py
    )

    Image.fromarray(result["blended"]).save("output_confidence_blended.png")
    Image.fromarray(result["confidence_heatmap"]).save("confidence_heatmap.png")
    print(result["report_text"])
"""

import numpy as np
from PIL import Image
from datetime import datetime
import xml.etree.ElementTree as ET

from hapke_model import (
    parse_pds4_geometry,
    geometry_from_oat,
    parse_oat_file,
    hapke_reflectance,
    HapkeParams,
    DEFAULT_PARAMS,
)

_PDS_NS = {"pds": "http://pds.nasa.gov/pds4/pds/v1"}


# ---------------------------------------------------------------------------
# 1. Pixel-level shadow / low-signal detection (works directly on the LR image)
# ---------------------------------------------------------------------------

def compute_pixel_shadow_confidence(lr_array: np.ndarray, dark_percentile: float = 15.0) -> np.ndarray:
    """
    Returns a confidence map in [0, 1], same H x W as lr_array, from raw pixel
    brightness alone. Genuinely dark pixels (likely real shadow, low real
    signal for the SR model to have worked from) get pushed toward 0.

    dark_percentile: pixels at/below this brightness percentile in the scene
    are treated as the "risk floor" -- tune this per-instrument if you find
    it too aggressive or too lax once you look at real output.
    """
    gray = lr_array.mean(axis=2) if lr_array.ndim == 3 else lr_array.astype(np.float32)
    gray_norm = gray / 255.0

    floor = np.percentile(gray_norm, dark_percentile)
    floor = max(floor, 1e-3)  # avoid div-by-zero on near-black scenes

    confidence = np.clip(gray_norm / floor, 0.0, 1.0)
    return confidence.astype(np.float32)


# ---------------------------------------------------------------------------
# 2. Scene-level geometric risk from Hapke (reuses hapke_model.py)
#    -- Kept as a fallback for when no .oat file is available, and for the
#       scene-level summary line in the report.
# ---------------------------------------------------------------------------

def geometric_risk_multiplier(xml_path: str, oat_path: str = None,
                               params: HapkeParams = DEFAULT_PARAMS) -> dict:
    """
    Returns a single scalar multiplier in (0, 1] for the whole scene, derived
    from Hapke geometry -- this sets a "trust ceiling": even the brightest,
    least-shadowed pixel in a high-incidence-angle scene doesn't get full
    confidence, because grazing illumination makes the WHOLE scene more prone
    to SR over-interpreting subtle shading as texture.
    """
    geom = geometry_from_oat(oat_path, xml_path) if oat_path else parse_pds4_geometry(xml_path)

    r = None
    if None not in (geom.incidence_deg, geom.emission_deg, geom.phase_deg):
        r = hapke_reflectance(geom.incidence_deg, geom.emission_deg, geom.phase_deg, params)

    i = geom.incidence_deg if geom.incidence_deg is not None else 0.0
    if i >= 80:
        multiplier, label = 0.4, "HIGH RISK"
    elif i >= 65:
        multiplier, label = 0.7, "MODERATE RISK"
    else:
        multiplier, label = 1.0, "LOW RISK"

    return {
        "multiplier": multiplier,
        "risk_label": label,
        "geometry": geom,
        "predicted_reflectance": r,
    }


# ---------------------------------------------------------------------------
# 2b. Per-region (row-wise) geometric risk, from .oat time interpolation
#
#     OHRC is a pushbroom sensor: each row (scan line) of the image was
#     captured at a slightly different moment as the spacecraft moved. The
#     .oat file gives measured incidence/emission/phase at ~512ms intervals
#     across the whole capture window. By mapping "time since scan start" to
#     "row position in the image" (via the XML's start/stop time and total
#     line count), we can interpolate a genuinely different confidence value
#     PER ROW -- e.g. rows captured near the start of the scan vs. the end
#     can have measurably different incidence angle if the scene spans
#     enough time/ground track.
#
#     Caveat, stated plainly: across-track (column-wise) geometry is NOT
#     resolved this way -- OHRC's swath is narrow enough that incidence is
#     treated as constant across a row. If you later get access to a local
#     slope/DEM layer, per-pixel (not just per-row) incidence becomes
#     possible and this function should be extended, not replaced.
# ---------------------------------------------------------------------------

def _parse_oat_time(time_str: str) -> datetime:
    """Parses the 7-field UTC time string in .oat records: 'YYYY MM DD HH MM SS MS'."""
    year, month, day, hour, minute, sec, millisec = map(int, time_str.split())
    return datetime(year, month, day, hour, minute, sec, millisec * 1000)


def _parse_scene_time_and_lines(xml_path: str):
    """Reads start/stop imaging time and total line count from the PDS4 label."""
    tree = ET.parse(xml_path)
    root = tree.getroot()

    start_el = root.find(".//pds:Time_Coordinates/pds:start_date_time", _PDS_NS)
    stop_el = root.find(".//pds:Time_Coordinates/pds:stop_date_time", _PDS_NS)
    start_dt = datetime.fromisoformat(start_el.text.strip().replace("Z", "+00:00")) if start_el is not None else None
    stop_dt = datetime.fromisoformat(stop_el.text.strip().replace("Z", "+00:00")) if stop_el is not None else None

    num_lines = None
    for axis in root.findall(".//pds:Axis_Array", _PDS_NS):
        name_el = axis.find("pds:axis_name", _PDS_NS)
        elements_el = axis.find("pds:elements", _PDS_NS)
        if name_el is not None and elements_el is not None and name_el.text.strip().lower() == "line":
            num_lines = int(elements_el.text.strip())

    return start_dt, stop_dt, num_lines


def incidence_to_confidence(i_deg: float) -> float:
    """
    Smooth mapping from incidence angle to a confidence ceiling: full trust
    below 50 deg, linearly dropping to a floor of 0.2 by 90 deg (grazing).
    Tune the breakpoints once you've looked at real output vs. real risk.
    """
    if i_deg <= 50:
        return 1.0
    if i_deg >= 90:
        return 0.2
    return 1.0 - 0.8 * (i_deg - 50) / 40.0


def build_row_confidence_profile(xml_path: str, oat_path: str, num_image_rows: int,
                                  row_range: tuple = None) -> np.ndarray:
    """
    Returns a 1D array of length num_image_rows, one confidence multiplier per
    image row, built by interpolating .oat incidence angle against time-to-row
    position.

    row_range: (start_line, total_scene_lines) if the array you're processing
    is a CROP of the full scene, not the whole thing -- lets you map crop rows
    back into the scene's true scan-line coordinates. Defaults to assuming
    num_image_rows spans the FULL scene proportionally (i.e. you passed the
    whole extracted image, just possibly resized).
    """
    start_dt, stop_dt, total_lines = _parse_scene_time_and_lines(xml_path)
    if start_dt is None or stop_dt is None or total_lines is None:
        raise ValueError("Could not read start/stop time or line count from XML; check the label structure.")

    total_duration = (stop_dt - start_dt).total_seconds()
    records = parse_oat_file(oat_path)

    line_positions, incidences = [], []
    for rec in records:
        t = _parse_oat_time(rec["time_utc"])
        delta = (t - start_dt).total_seconds()
        line_pos = (delta / total_duration) * total_lines
        line_positions.append(line_pos)
        incidences.append(float(rec["solar_zenith_angle"]))  # == incidence angle

    # sort by line position for np.interp
    order = np.argsort(line_positions)
    line_positions = np.array(line_positions)[order]
    incidences = np.array(incidences)[order]

    if row_range is None:
        query_lines = np.linspace(0, total_lines - 1, num_image_rows)
    else:
        crop_start, crop_total_lines = row_range
        query_lines = crop_start + np.linspace(0, crop_total_lines - 1, num_image_rows) * (crop_total_lines / total_lines) * total_lines / crop_total_lines
        # simplifies to: crop_start + linspace(0, crop_total_lines-1, num_image_rows)
        query_lines = crop_start + np.linspace(0, crop_total_lines - 1, num_image_rows)

    interpolated_incidence = np.interp(query_lines, line_positions, incidences,
                                        left=incidences[0], right=incidences[-1])

    confidence_profile = np.array([incidence_to_confidence(i) for i in interpolated_incidence], dtype=np.float32)
    return confidence_profile


# ---------------------------------------------------------------------------
# 3. Combine + blend
# ---------------------------------------------------------------------------

def build_confidence_map(lr_array: np.ndarray, xml_path: str, oat_path: str = None,
                          params: HapkeParams = DEFAULT_PARAMS,
                          dark_percentile: float = 15.0, row_range: tuple = None) -> tuple:
    pixel_conf = compute_pixel_shadow_confidence(lr_array, dark_percentile)
    num_rows = lr_array.shape[0]

    if oat_path:
        row_profile = build_row_confidence_profile(xml_path, oat_path, num_rows, row_range)
        geometric_component = row_profile[:, None]  # broadcast across columns
        risk = geometric_risk_multiplier(xml_path, oat_path, params)  # for the summary line only
        risk["per_row"] = True
    else:
        risk = geometric_risk_multiplier(xml_path, oat_path, params)
        geometric_component = risk["multiplier"]  # flat scalar fallback
        risk["per_row"] = False

    confidence_map = pixel_conf * geometric_component
    confidence_map = np.clip(confidence_map, 0.0, 1.0).astype(np.float32)
    return confidence_map, risk


def blend_with_confidence(sr_array: np.ndarray, lr_array: np.ndarray,
                           confidence_map: np.ndarray) -> tuple:
    """
    sr_array: the SR output from upsampler.enhance() -- shape (H*scale, W*scale, C)
    lr_array: the original input you fed to upsampler.enhance() -- shape (H, W, C)
    confidence_map: shape (H, W), values in [0, 1]

    Upsamples confidence_map to SR resolution (bilinear), upsamples the LR
    image to SR resolution with plain bicubic (NOT the network, so it's a
    faithful "safe fallback"), and blends:

        blended = sr * confidence + bicubic_upscaled_lr * (1 - confidence)

    Where confidence is high, you get full network output. Where it's low,
    the result degrades gracefully toward a conventional upscale instead of
    the network's (possibly invented) detail.
    """
    h, w = sr_array.shape[:2]

    conf_img = Image.fromarray((confidence_map * 255).astype(np.uint8))
    conf_up = np.asarray(conf_img.resize((w, h), Image.BILINEAR)).astype(np.float32) / 255.0

    lr_img = Image.fromarray(lr_array)
    lr_up = np.asarray(lr_img.resize((w, h), Image.BICUBIC)).astype(np.float32)

    sr_f = sr_array.astype(np.float32)

    if sr_f.ndim == 3:
        conf_up_b = conf_up[..., None]
    else:
        conf_up_b = conf_up

    blended = sr_f * conf_up_b + lr_up * (1.0 - conf_up_b)
    blended = np.clip(blended, 0, 255).astype(np.uint8)

    heatmap = (conf_up * 255).astype(np.uint8)  # single-channel, for visualization
    return blended, heatmap


# ---------------------------------------------------------------------------
# 4. Top-level entry point
# ---------------------------------------------------------------------------

def enhance_with_confidence(lr_array: np.ndarray, sr_array: np.ndarray,
                             xml_path: str, oat_path: str = None,
                             params: HapkeParams = DEFAULT_PARAMS,
                             dark_percentile: float = 15.0) -> dict:
    """
    Call this AFTER upsampler.enhance() in your main.py. Does not re-run the
    model -- just combines its output with the confidence signal.
    """
    confidence_map, risk = build_confidence_map(lr_array, xml_path, oat_path, params, dark_percentile)
    blended, heatmap = blend_with_confidence(sr_array, lr_array, confidence_map)

    pct_low_conf = float((confidence_map < 0.5).mean() * 100)

    report_lines = [
        f"Scene geometric risk: {risk['risk_label']} "
        f"(incidence={risk['geometry'].incidence_deg}, "
        f"scene trust ceiling multiplier={risk['multiplier']})",
        f"Predicted Hapke reflectance: {risk['predicted_reflectance']}",
        f"{pct_low_conf:.1f}% of the frame fell below 0.5 confidence "
        f"(SR output blended toward conventional upscale in these regions).",
    ]

    return {
        "blended": blended,
        "confidence_heatmap": heatmap,
        "confidence_map_raw": confidence_map,  # low-res (H, W) 0..1, before upsampling
        "risk": risk,
        "report_text": "\n".join(report_lines),
    }


if __name__ == "__main__":
    # Smoke test with synthetic data -- run this to confirm the pipeline wiring
    # works before plugging in your real upsampler output.
    import sys

    lr = np.random.randint(0, 255, (100, 100, 3), dtype=np.uint8)
    lr[:40, :] = lr[:40, :] // 6  # simulate a shadowed band across the top of the frame
    sr = np.random.randint(0, 255, (400, 400, 3), dtype=np.uint8)  # pretend 4x SR output

    xml_path = sys.argv[1] if len(sys.argv) > 1 else None
    oat_path = sys.argv[2] if len(sys.argv) > 2 else None

    if xml_path:
        result = enhance_with_confidence(lr, sr, xml_path, oat_path)
        print(result["report_text"])
        print("blended shape:", result["blended"].shape)
        print("heatmap shape:", result["confidence_heatmap"].shape)
    else:
        print("Smoke test only ran shape/import checks (no XML path given).")
        conf = compute_pixel_shadow_confidence(lr)
        print("pixel confidence map shape:", conf.shape, "min/max:", conf.min(), conf.max())