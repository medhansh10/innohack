from pathlib import Path
import numpy as np


INPUT_NPY = Path("outputs/converted/converted_image.npy")
TILES_DIR = Path("tiles")

TILE_SIZE = 512
OVERLAP = 64
STEP = TILE_SIZE - OVERLAP


def create_tiles():

    image = np.load(INPUT_NPY)

    height, width = image.shape[:2]

    print(f"Input image shape: {image.shape}")
    print(f"Tile size: {TILE_SIZE}")
    print(f"Overlap: {OVERLAP}")
    print(f"Step: {STEP}")

    TILES_DIR.mkdir(
        parents=True,
        exist_ok=True
    )

    # Remove old tile files
    for old_file in TILES_DIR.glob("tile_*"):
        old_file.unlink()

    tile_number = 0

    # ---------------------------------------------------------
    # Scan the ORIGINAL image from top to bottom, left to right
    # ---------------------------------------------------------

    for row, y in enumerate(range(0, height, STEP)):

        for col, x in enumerate(range(0, width, STEP)):

            y_end = min(
                y + TILE_SIZE,
                height
            )

            x_end = min(
                x + TILE_SIZE,
                width
            )

            tile = image[
                y:y_end,
                x:x_end
            ]

            # Ignore extremely small edge pieces
            if tile.shape[0] < 64 or tile.shape[1] < 64:
                continue

            tile_path = (
                TILES_DIR /
                f"tile_{tile_number:05d}.npy"
            )

            np.save(
                tile_path,
                tile
            )

            # Save the ORIGINAL position
            position_path = (
                TILES_DIR /
                f"tile_{tile_number:05d}.txt"
            )

            with position_path.open(
                "w",
                encoding="utf-8"
            ) as f:

                f.write(f"row={row}\n")
                f.write(f"col={col}\n")
                f.write(f"x={x}\n")
                f.write(f"y={y}\n")
                f.write(f"width={tile.shape[1]}\n")
                f.write(f"height={tile.shape[0]}\n")

            tile_number += 1

    print()
    print(f"Created {tile_number} tiles.")
    print(f"Tiles saved to: {TILES_DIR}")


if __name__ == "__main__":
    create_tiles()