import sys
from fastapi import FastAPI, UploadFile, File
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


UPLOAD_DIR = Path("uploads")
OUTPUT_DIR = Path("outputs")
TILES_DIR = Path("tiles")

UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
TILES_DIR.mkdir(exist_ok=True)


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

    result = extract_pds4(
        str(zip_path)
    )

    matched_pairs = result["matched_pairs"]

    if not matched_pairs:

        return {
            "message": "No matching IMG + XML pair was found.",
            "filename": file.filename,
            "img_files": [
                str(path)
                for path in result["img_files"]
            ],
            "xml_files": [
                str(path)
                for path in result["xml_files"]
            ]
        }

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

        return {
            "message": "IMG to NPY conversion failed.",
            "converter_output": conversion_result.stdout,
            "converter_error": conversion_result.stderr
        }

    print(conversion_result.stdout)

    # ---------------------------------------------------------
    # 5. Find NPY
    # ---------------------------------------------------------

    npy_path = Path(
        str(output_prefix) + ".npy"
    )

    if not npy_path.exists():

        return {
            "message": "NPY conversion completed but file was not found.",
            "expected_npy": str(npy_path)
        }

    # ---------------------------------------------------------
    # 6. Create tiles
    # ---------------------------------------------------------

    total_tiles = create_tiles(
        npy_path
    )

    # ---------------------------------------------------------
    # 7. Process first 10 tiles
    # ---------------------------------------------------------

    processed_tiles = process_demo_tiles()

    # ---------------------------------------------------------
    # 8. Stitch the 10 enhanced tiles
    # ---------------------------------------------------------

    stitched_path = stitch_demo_tiles()

    # ---------------------------------------------------------
    # 9. Return result
    # ---------------------------------------------------------

    return {

        "message": "PDS4 image processed successfully.",

        "filename": file.filename,

        "selected_img": str(img_path),

        "selected_xml": str(xml_path),

        "converted_npy": str(npy_path),

        "total_tiles": total_tiles,

        "processed_tiles": len(processed_tiles),

        "stitched_demo": str(stitched_path)
    }