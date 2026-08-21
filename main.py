import sys
import time
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import shutil
import subprocess
import numpy as np
from PIL import Image

from pds4_processor import extract_pds4
from ai_service import enhance_image


app = FastAPI(
    title="Satellite Image Enhancement API",
    description="Backend for AI-based satellite image enhancement",
    version="1.0.0"
)

# --------------- CORS ---------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_DIR = Path("uploads")
OUTPUT_DIR = Path("outputs")
TILES_DIR = Path("tiles")

UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
TILES_DIR.mkdir(exist_ok=True)

# --------------- Serve output images ---------------
app.mount("/outputs", StaticFiles(directory=str(OUTPUT_DIR)), name="outputs")


TILE_SIZE = 512
OVERLAP = 64
STEP = TILE_SIZE - OVERLAP
DEMO_GRID_ROWS = 2
DEMO_GRID_COLS = 2
DEMO_TILES = DEMO_GRID_ROWS * DEMO_GRID_COLS  # 4 tiles for fast, high-res 2D patch


@app.get("/")
def home():
    return {
        "message": "Satellite Image Enhancement Backend is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


def find_best_feature_region(image: np.ndarray, patch_w: int, patch_h: int):
    """
    Scans the satellite swath to find the most illuminated and feature-rich
    lunar terrain region with good contrast and mean brightness.
    """
    h, w = image.shape[:2]
    best_score = -1.0
    best_y, best_x = 0, 0

    step_y = max(1000, h // 60)
    step_x = max(1, (w - patch_w) // 4)

    for y in range(0, max(1, h - patch_h), step_y):
        for x in range(0, max(1, w - patch_w), step_x):
            patch = image[y:y + patch_h, x:x + patch_w]
            mean = float(patch.mean())
            std = float(patch.std())

            # Favor patches with healthy illumination (50-200) and strong terrain variance
            if 35 < mean < 230 and std > 5:
                score = std * (1.0 - abs(mean - 130.0) / 140.0)
                if score > best_score:
                    best_score = score
                    best_y, best_x = y, x

    if best_score <= 0:
        # Fallback to middle of swath
        best_y = max(0, (h - patch_h) // 2)
        best_x = max(0, (w - patch_w) // 2)

    print(f"Optimal lunar feature region selected at y={best_y}, x={best_x} (score={best_score:.2f})")
    return best_y, best_x


def create_tiles(input_npy: Path):

    image = np.load(input_npy)

    height, width = image.shape[:2]

    print(f"NPY image shape: {image.shape}")
    print(f"Creating tiles with size {TILE_SIZE} and overlap {OVERLAP}")

    tile_number = 0

    for y in range(0, height, STEP):

        for x in range(0, width, STEP):

            y_end = min(y + TILE_SIZE, height)
            x_end = min(x + TILE_SIZE, width)

            tile = image[y:y_end, x:x_end]

            if tile.shape[0] < 64 or tile.shape[1] < 64:
                continue

            tile_path = TILES_DIR / f"tile_{tile_number:05d}.npy"

            np.save(tile_path, tile)

            tile_number += 1

    print(f"Created {tile_number} tiles.")

    return tile_number


def process_demo_tiles(npy_path: Path):
    """
    Selects the optimal 2D patch of illuminated lunar terrain, applies adaptive contrast stretch,
    and enhances them with Real-ESRGAN.
    """
    image = np.load(npy_path)
    patch_w = (DEMO_GRID_COLS - 1) * STEP + TILE_SIZE
    patch_h = (DEMO_GRID_ROWS - 1) * STEP + TILE_SIZE

    best_y, best_x = find_best_feature_region(image, patch_w, patch_h)

    processed_tiles = []
    tile_idx = 0

    for r in range(DEMO_GRID_ROWS):
        for c in range(DEMO_GRID_COLS):
            y0 = best_y + r * STEP
            x0 = best_x + c * STEP
            y1 = min(image.shape[0], y0 + TILE_SIZE)
            x1 = min(image.shape[1], x0 + TILE_SIZE)

            raw_tile = image[y0:y1, x0:x1].copy()

            # Dynamic range contrast stretch for visibility
            p1, p99 = np.percentile(raw_tile, [1, 99])
            stretched = np.clip(
                (raw_tile.astype(float) - p1) / max(p99 - p1, 1e-5) * 255.0,
                0,
                255
            ).astype(np.uint8)

            png_path = TILES_DIR / f"tile_{tile_idx:05d}.png"
            enhanced_path = TILES_DIR / f"tile_{tile_idx:05d}_enhanced.png"

            Image.fromarray(stretched).save(png_path)
            print(f"AI input: {png_path}")

            enhance_image(str(png_path), str(enhanced_path))
            processed_tiles.append(enhanced_path)
            print(f"Enhanced: {enhanced_path}")

            tile_idx += 1

    return processed_tiles, best_y, best_x


def stitch_demo_tiles(npy_path: Path, best_y: int, best_x: int):
    """
    Stitches a 2D patch of enhanced tiles AND extracts the matching original crop
    so both original_preview.png and stitched_demo.png have identical coverage, high contrast, and aspect ratio.
    """
    enhanced_tiles = []
    num_to_stitch = min(DEMO_TILES, len(list(TILES_DIR.glob("tile_*_enhanced.png"))))

    for i in range(num_to_stitch):
        tile_path = TILES_DIR / f"tile_{i:05d}_enhanced.png"
        if not tile_path.exists():
            break

        image = np.array(Image.open(tile_path).convert("RGB"))
        enhanced_tiles.append(image)

    if not enhanced_tiles:
        raise FileNotFoundError("No enhanced tiles found to stitch.")

    # Determine tile dimensions after enhancement (e.g. 4x upscale)
    enh_h, enh_w = enhanced_tiles[0].shape[:2]
    upscale_factor = enh_w / TILE_SIZE
    enh_overlap = int(round(OVERLAP * upscale_factor))
    enh_step = enh_w - enh_overlap

    cols = min(DEMO_GRID_COLS, len(enhanced_tiles))
    rows = int(np.ceil(len(enhanced_tiles) / cols))

    output_width = (cols - 1) * enh_step + enh_w
    output_height = (rows - 1) * enh_step + enh_h

    canvas = np.zeros((output_height, output_width, 3), dtype=np.float32)
    weights = np.zeros((output_height, output_width, 1), dtype=np.float32)

    for idx, tile in enumerate(enhanced_tiles):
        r = idx // cols
        c = idx % cols
        y = r * enh_step
        x = c * enh_step

        h, w = tile.shape[:2]
        h = min(h, output_height - y)
        w = min(w, output_width - x)
        tile = tile[:h, :w]

        weight = np.ones((h, w, 1), dtype=np.float32)
        if c > 0 and enh_overlap > 0:
            blend_w = min(enh_overlap, w)
            for i in range(blend_w):
                weight[:, i, 0] *= ((i + 1) / blend_w)
        if r > 0 and enh_overlap > 0:
            blend_h = min(enh_overlap, h)
            for j in range(blend_h):
                weight[j, :, 0] *= ((j + 1) / blend_h)

        canvas[y:y + h, x:x + w] += tile.astype(np.float32) * weight
        weights[y:y + h, x:x + w] += weight

    canvas = canvas / np.maximum(weights, 1e-8)
    canvas = np.clip(canvas, 0, 255).astype(np.uint8)

    stitched_img = Image.fromarray(canvas)
    max_dim = 1536
    if max(stitched_img.size) > max_dim:
        stitched_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

    stitched_path = OUTPUT_DIR / "stitched_demo.png"
    stitched_img.save(stitched_path, "PNG", optimize=True)
    print(f"Stitched demo saved to: {stitched_path} ({stitched_img.size})")

    # Generate matched original preview with contrast stretch
    raw_data = np.load(npy_path)
    orig_crop_w = min(raw_data.shape[1] - best_x, (cols - 1) * STEP + TILE_SIZE)
    orig_crop_h = min(raw_data.shape[0] - best_y, (rows - 1) * STEP + TILE_SIZE)

    raw_crop = raw_data[best_y:best_y + orig_crop_h, best_x:best_x + orig_crop_w].copy()
    p1, p99 = np.percentile(raw_crop, [1, 99])
    raw_stretched = np.clip(
        (raw_crop.astype(float) - p1) / max(p99 - p1, 1e-5) * 255.0,
        0,
        255
    ).astype(np.uint8)

    raw_img = Image.fromarray(raw_stretched).convert("RGB")
    raw_img = raw_img.resize(stitched_img.size, Image.Resampling.LANCZOS)

    original_preview_path = OUTPUT_DIR / "original_preview.png"
    raw_img.save(original_preview_path, "PNG", optimize=True)
    print(f"Matched original preview saved to: {original_preview_path} ({raw_img.size})")

    return stitched_path, original_preview_path


@app.post("/upload-pds4")
async def upload_pds4(
    file: UploadFile = File(...)
):

    start_time = time.time()

    # ---------------------------------------------------------
    # 1. Save uploaded ZIP
    # ---------------------------------------------------------

    zip_path = UPLOAD_DIR / file.filename

    with zip_path.open("wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    print(f"Uploaded ZIP: {zip_path}")

    # ---------------------------------------------------------
    # 2. Extract PDS4
    # ---------------------------------------------------------

    try:
        result = extract_pds4(
            str(zip_path)
        )
    except Exception as e:
        raise HTTPException(
            status_code=422,
            detail=f"Failed to extract PDS4 archive: {e}"
        )

    matched_pairs = result["matched_pairs"]

    if not matched_pairs:

        raise HTTPException(
            status_code=422,
            detail="No matching IMG + XML pair was found in the uploaded archive."
        )

    # ---------------------------------------------------------
    # 3. Select matching IMG + XML
    # ---------------------------------------------------------

    pair = matched_pairs[0]

    img_path = pair["img"]
    xml_path = pair["xml"]

    print(f"Selected IMG: {img_path}")
    print(f"Selected XML: {xml_path}")

    # ---------------------------------------------------------
    # 4. IMG + XML → NPY
    # ---------------------------------------------------------

    conversion_output = (
        OUTPUT_DIR / "converted"
    )

    conversion_output.mkdir(
        parents=True,
        exist_ok=True
    )

    output_prefix = (
        conversion_output / "converted_image"
    )

    command = [
        sys.executable,
        "ImgToPng.py",
        "--img",
        str(img_path),
        "--xml",
        str(xml_path),
        "--out",
        str(output_prefix)
    ]

    print("Running IMG → NPY conversion...")

    conversion_result = subprocess.run(
        command,
        capture_output=True,
        text=True
    )

    if conversion_result.returncode != 0:

        raise HTTPException(
            status_code=500,
            detail=f"IMG to NPY conversion failed: {conversion_result.stderr[:500]}"
        )

    print(conversion_result.stdout)

    # ---------------------------------------------------------
    # 5. Find NPY
    # ---------------------------------------------------------

    npy_path = Path(
        str(output_prefix) + ".npy"
    )

    if not npy_path.exists():

        raise HTTPException(
            status_code=500,
            detail="NPY conversion completed but the output file was not found."
        )

    # ---------------------------------------------------------
    # 5b. Get image dimensions
    # ---------------------------------------------------------

    try:
        npy_data = np.load(npy_path)
        image_height, image_width = int(npy_data.shape[0]), int(npy_data.shape[1])
    except Exception:
        image_height, image_width = 0, 0

    # ---------------------------------------------------------
    # 6. Create tiles
    # ---------------------------------------------------------

    total_tiles = create_tiles(
        npy_path
    )

    # ---------------------------------------------------------
    # 7. Process optimal illuminated tiles
    # ---------------------------------------------------------

    try:
        processed_tiles, best_y, best_x = process_demo_tiles(npy_path)
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI enhancement failed: {e}"
        )

    # ---------------------------------------------------------
    # 8. Stitch the enhanced tiles & generate matched original preview
    # ---------------------------------------------------------

    try:
        stitched_path, original_preview_path = stitch_demo_tiles(npy_path, best_y, best_x)
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Tile stitching failed: {e}"
        )

    elapsed = round(time.time() - start_time, 2)

    # ---------------------------------------------------------
    # 9. Return result
    # ---------------------------------------------------------

    # Return friendly, browser-accessible paths for frontend use (all under /outputs)
    return {
        "message": "PDS4 image processed successfully.",
        "filename": file.filename,
        # Expose only basenames for uploaded/selected source files
        "selected_img": Path(img_path).name,
        "selected_xml": Path(xml_path).name,
        # Converted NPY lives under outputs/converted
        "converted_npy": f"outputs/{Path(npy_path).name}",
        "total_tiles": total_tiles,
        "processed_tiles": len(processed_tiles),
        # Stitched and preview images served from the /outputs static mount
        "stitched_demo": f"outputs/{Path(stitched_path).name}",
        "original_preview": (f"outputs/{Path(original_preview_path).name}" if original_preview_path else None),
        "image_width": image_width,
        "image_height": image_height,
        "processing_time_seconds": elapsed,
    }