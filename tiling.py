from pathlib import Path
import numpy as np


def create_tiles(
    input_npy: str,
    output_dir: str = "tiles",
    tile_size: int = 512,
    overlap: int = 64
):
    """
    Split a large .npy satellite image into overlapping tiles.
    """

    input_path = Path(input_npy)
    output_path = Path(output_dir)

    output_path.mkdir(parents=True, exist_ok=True)

    # Load the converted image
    image = np.load(input_path)

    height, width = image.shape[:2]

    print(f"Input image shape: {image.shape}")
    print(f"Tile size: {tile_size}")
    print(f"Overlap: {overlap}")

    if overlap >= tile_size:
        raise ValueError("Overlap must be smaller than tile size.")

    step = tile_size - overlap

    tile_number = 0

    for y in range(0, height, step):

        for x in range(0, width, step):

            # Tile boundaries
            y_end = min(y + tile_size, height)
            x_end = min(x + tile_size, width)

            tile = image[y:y_end, x:x_end]

            # Ignore extremely small edge tiles
            if tile.shape[0] < 64 or tile.shape[1] < 64:
                continue

            tile_filename = output_path / f"tile_{tile_number:05d}.npy"

            np.save(tile_filename, tile)

            tile_number += 1

    print(f"Created {tile_number} tiles.")
    print(f"Tiles saved to: {output_path}")


if __name__ == "__main__":

    create_tiles(
        input_npy="outputs/converted/converted_image.npy",
        output_dir="tiles",
        tile_size=512,
        overlap=64
    )