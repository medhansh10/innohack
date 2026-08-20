from pathlib import Path
import numpy as np
from PIL import Image

from ai_service import enhance_image


TILES_DIR = Path("tiles")
MAX_TILES = 10   # Test only 10 tiles first


def npy_to_png(npy_path, png_path):
    tile = np.load(npy_path)

    image = Image.fromarray(tile)
    image.save(png_path)


def process_tiles():
    npy_files = sorted(TILES_DIR.glob("tile_*.npy"))

    print(f"Total tiles found: {len(npy_files)}")
    print(f"Processing first {min(MAX_TILES, len(npy_files))} tiles...")

    for index, npy_path in enumerate(npy_files[:MAX_TILES]):

        print()
        print(f"Processing tile {index + 1}/{min(MAX_TILES, len(npy_files))}")
        print(f"Input: {npy_path}")

        png_path = TILES_DIR / f"{npy_path.stem}.png"
        enhanced_path = TILES_DIR / f"{npy_path.stem}_enhanced.png"

        # Convert NPY → PNG
        npy_to_png(npy_path, png_path)

        # PNG → Real-ESRGAN → Enhanced PNG
        enhance_image(
            str(png_path),
            str(enhanced_path)
        )

        print(f"Enhanced: {enhanced_path}")

    print()
    print("Batch test completed!")


if __name__ == "__main__":
    process_tiles()