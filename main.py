import sys
from fastapi import FastAPI, UploadFile, File
from pathlib import Path
import shutil
import subprocess

from pds4_processor import extract_pds4
from ai_service import enhance_image


app = FastAPI(
    title="Satellite Image Enhancement API",
    description="Backend for AI-based satellite image enhancement",
    version="1.0.0"
)


UPLOAD_DIR = Path("uploads")
OUTPUT_DIR = Path("outputs")

UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)


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


@app.post("/upload-pds4")
async def upload_pds4(file: UploadFile = File(...)):

    # ---------------------------------------------------------
    # 1. Save uploaded PDS4 ZIP
    # ---------------------------------------------------------

    zip_path = UPLOAD_DIR / file.filename

    with zip_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # ---------------------------------------------------------
    # 2. Extract PDS4 ZIP
    # ---------------------------------------------------------

    result = extract_pds4(str(zip_path))

    matched_pairs = result["matched_pairs"]

    if not matched_pairs:
        return {
            "message": "No matching IMG + XML pair was found.",
            "filename": file.filename,
            "img_files": [str(path) for path in result["img_files"]],
            "xml_files": [str(path) for path in result["xml_files"]]
        }

    # ---------------------------------------------------------
    # 3. Select the first matching IMG + XML pair
    # ---------------------------------------------------------

    pair = matched_pairs[0]

    img_path = pair["img"]
    xml_path = pair["xml"]

    print(f"Selected IMG: {img_path}")
    print(f"Selected XML: {xml_path}")

    # ---------------------------------------------------------
    # 4. Convert IMG + XML → PNG
    # ---------------------------------------------------------

    conversion_output = OUTPUT_DIR / "converted"

    conversion_output.mkdir(
        parents=True,
        exist_ok=True
    )

    output_prefix = conversion_output / "converted_image"

    command = [
        sys.executable,
        "ImgToPng.py",
        "--img",
        str(img_path),
        "--xml",
        str(xml_path),
        "--out",
        str(output_prefix),
        "--full-png"
    ]

    print("Running IMG → PNG conversion...")

    conversion_result = subprocess.run(
        command,
        capture_output=True,
        text=True
    )

    # Check whether conversion failed
    if conversion_result.returncode != 0:

        print("IMG → PNG conversion failed.")
        print(conversion_result.stdout)
        print(conversion_result.stderr)

        return {
            "message": "IMG to PNG conversion failed.",
            "converter_output": conversion_result.stdout,
            "converter_error": conversion_result.stderr
        }

    print(conversion_result.stdout)

    # ImgToPng.py creates <prefix>_full.png when --full-png is used
    png_path = Path(str(output_prefix) + "_full.png")

    if not png_path.exists():

        return {
            "message": "Conversion completed, but output PNG was not found.",
            "expected_output": str(png_path),
            "converter_output": conversion_result.stdout
        }

    # ---------------------------------------------------------
    # 5. Send converted PNG to Real-ESRGAN
    # ---------------------------------------------------------

    enhanced_path = OUTPUT_DIR / "enhanced.png"

    print(f"Sending image to AI: {png_path}")

    enhance_image(
        str(png_path),
        str(enhanced_path)
    )

    # ---------------------------------------------------------
    # 6. Return result
    # ---------------------------------------------------------

    return {
        "message": "PDS4 processed successfully",
        "filename": file.filename,

        "selected_img": str(img_path),
        "selected_xml": str(xml_path),

        "converted_png": str(png_path),
        "enhanced_png": str(enhanced_path),

        "total_img_files": len(result["img_files"]),
        "total_xml_files": len(result["xml_files"]),
        "matched_pairs": len(matched_pairs)
    }