from pathlib import Path
import numpy as np
from PIL import Image

from ai_service import enhance_image


TILES_DIR = Path("tiles")

# ---------------------------------------------------------
# CHANGE ONLY THIS NUMBER
# ---------------------------------------------------------

NUM_TILES = 90


def npy_to_png(npy_path, png_path):

    tile = np.load(npy_path)

    Image.fromarray(tile).save(
        png_path
    )


def process_tiles():

    npy_files = sorted(
        TILES_DIR.glob("tile_*.npy")
    )

    if not npy_files:
        print("No NPY tiles found.")
        return

    total = min(
        NUM_TILES,
        len(npy_files)
    )

    print(
        f"Total tiles available: {len(npy_files)}"
    )

    print(
        f"Processing: {total} tiles"
    )

    for index, npy_path in enumerate(
        npy_files[:total]
    ):

        print()
        print(
            f"Processing tile "
            f"{index + 1}/{total}"
        )

        png_path = (
            TILES_DIR /
            f"{npy_path.stem}.png"
        )

        enhanced_path = (
            TILES_DIR /
            f"{npy_path.stem}_enhanced.png"
        )

        # NPY → PNG
        npy_to_png(
            npy_path,
            png_path
        )

        # PNG → Real-ESRGAN
        enhance_image(
            str(png_path),
            str(enhanced_path)
        )

        print(
            f"Enhanced: {enhanced_path}"
        )

    print()
    print(
        f"Completed {total} tiles."
    )


if __name__ == "__main__":
    process_tiles()