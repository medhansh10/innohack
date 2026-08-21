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
DEMO_TILES = 45


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


def process_demo_tiles():

    npy_files = sorted(TILES_DIR.glob("tile_*.npy"))

    total = min(DEMO_TILES, len(npy_files))

    print(f"Processing {total} tiles for demo...")

    processed_tiles = []

    for index, npy_path in enumerate(npy_files[:DEMO_TILES]):

        print()
        print(f"Processing tile {index + 1}/{total}")

        tile = np.load(npy_path)

        png_path = TILES_DIR / f"{npy_path.stem}.png"
        enhanced_path = TILES_DIR / f"{npy_path.stem}_enhanced.png"

        # NPY → PNG
        Image.fromarray(tile).save(png_path)

        print(f"AI input: {png_path}")

        # PNG → Real-ESRGAN
        enhance_image(
            str(png_path),
            str(enhanced_path)
        )

        processed_tiles.append(enhanced_path)

        print(f"Enhanced: {enhanced_path}")

    return processed_tiles


def stitch_demo_tiles():

    enhanced_tiles = []

    for i in range(DEMO_TILES):

        tile_path = TILES_DIR / f"tile_{i:05d}_enhanced.png"

        if not tile_path.exists():
            raise FileNotFoundError(
                f"Missing enhanced tile: {tile_path}"
            )

        image = np.array(
            Image.open(tile_path).convert("RGB")
        )

        enhanced_tiles.append(image)

    # The first 10 tiles are from the first row
    positions = []

    for i in range(DEMO_TILES):

        x = i * STEP
        y = 0

        positions.append((y, x))

    output_height = TILE_SIZE
    output_width = (
        positions[-1][1] + TILE_SIZE
    )

    print(
        f"Stitched demo size: "
        f"{output_width} x {output_height}"
    )

    canvas = np.zeros(
        (output_height, output_width, 3),
        dtype=np.float32
    )

    weights = np.zeros(
        (output_height, output_width, 1),
        dtype=np.float32
    )

    for tile, (y, x) in zip(
        enhanced_tiles,
        positions
    ):

        h, w = tile.shape[:2]

        # Make sure the tile fits inside the canvas
        h = min(h, output_height - y)
        w = min(w, output_width - x)

        tile = tile[:h, :w]

        weight = np.ones(
            (h, w, 1),
            dtype=np.float32
        )

        # Blend horizontal overlap
        if x > 0:

            blend_width = min(OVERLAP, w)

            for i in range(blend_width):

                weight[:, i, 0] = (
                    (i + 1) / blend_width
                )

        canvas[
            y:y + h,
            x:x + w
        ] += tile.astype(np.float32) * weight

        weights[
            y:y + h,
            x:x + w
        ] += weight

    canvas = canvas / np.maximum(
        weights,
        1e-8
    )

    canvas = np.clip(
        canvas,
        0,
        255
    ).astype(np.uint8)

    stitched_path = OUTPUT_DIR / "stitched_demo.png"

    Image.fromarray(canvas).save(
        stitched_path
    )

    print(
        f"Stitched demo saved to: {stitched_path}"
    )

    return stitched_path


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
    # 5b. Generate original preview PNG
    # ---------------------------------------------------------

    original_preview_path = OUTPUT_DIR / "original_preview.png"

    try:
        npy_data = np.load(npy_path)
        image_height, image_width = npy_data.shape[:2]

        # Normalize to 0-255 for preview
        preview = npy_data.copy()
        if preview.dtype != np.uint8:
            p_min, p_max = np.percentile(preview, [2, 98])
            preview = np.clip((preview - p_min) / max(p_max - p_min, 1e-8) * 255, 0, 255).astype(np.uint8)

        Image.fromarray(preview).save(original_preview_path)
        print(f"Original preview saved: {original_preview_path}")
    except Exception as e:
        print(f"Warning: could not generate original preview: {e}")
        original_preview_path = None
        # Still try to get dimensions from the NPY
        try:
            npy_data = np.load(npy_path)
            image_height, image_width = npy_data.shape[:2]
        except Exception:
            image_height, image_width = 0, 0

    # ---------------------------------------------------------
    # 6. Create tiles
    # ---------------------------------------------------------

    total_tiles = create_tiles(
        npy_path
    )

    # ---------------------------------------------------------
    # 7. Process first N tiles
    # ---------------------------------------------------------

    try:
        processed_tiles = process_demo_tiles()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI enhancement failed: {e}"
        )

    # ---------------------------------------------------------
    # 8. Stitch the enhanced tiles
    # ---------------------------------------------------------

    try:
        stitched_path = stitch_demo_tiles()
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