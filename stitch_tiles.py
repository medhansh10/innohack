from pathlib import Path
import numpy as np
from PIL import Image


TILES_DIR = Path("tiles")
OUTPUT_PATH = Path("outputs/stitched_demo.png")

ORIGINAL_TILE_SIZE = 512
ORIGINAL_OVERLAP = 64
SCALE = 4

NUM_TILES = 10


def stitch_tiles():

    enhanced_tiles = []

    # ---------------------------------------------------------
    # 1. Load enhanced tiles
    # ---------------------------------------------------------

    for i in range(NUM_TILES):

        tile_path = TILES_DIR / f"tile_{i:05d}_enhanced.png"

        if not tile_path.exists():
            raise FileNotFoundError(
                f"Enhanced tile not found: {tile_path}"
            )

        image = np.array(
            Image.open(tile_path).convert("RGB")
        )

        enhanced_tiles.append(image)

        print(
            f"Loaded: {tile_path} "
            f"({image.shape[1]} x {image.shape[0]})"
        )

    # ---------------------------------------------------------
    # 2. Determine scale and tile dimensions
    # ---------------------------------------------------------

    enhanced_height, enhanced_width = enhanced_tiles[0].shape[:2]

    scale = enhanced_width // ORIGINAL_TILE_SIZE

    enhanced_step = (
        ORIGINAL_TILE_SIZE - ORIGINAL_OVERLAP
    ) * scale

    print(f"Enhancement scale: {scale}x")
    print(f"Enhanced tile size: {enhanced_width} x {enhanced_height}")
    print(f"Enhanced tile step: {enhanced_step}")

    # ---------------------------------------------------------
    # 3. Calculate output dimensions
    # ---------------------------------------------------------

    output_height = enhanced_height

    output_width = (
        (NUM_TILES - 1) * enhanced_step
        + enhanced_width
    )

    print(
        f"Output size: "
        f"{output_width} x {output_height}"
    )

    # ---------------------------------------------------------
    # 4. Create canvas
    # ---------------------------------------------------------

    canvas = np.zeros(
        (output_height, output_width, 3),
        dtype=np.float32
    )

    weights = np.zeros(
        (output_height, output_width, 1),
        dtype=np.float32
    )

    # ---------------------------------------------------------
    # 5. Blend tiles
    # ---------------------------------------------------------

    for index, tile in enumerate(enhanced_tiles):

        x = index * enhanced_step
        y = 0

        h, w = tile.shape[:2]

        weight = np.ones(
            (h, w, 1),
            dtype=np.float32
        )

        # Blend horizontal overlap
        if index > 0:

            overlap_width = (
                ORIGINAL_OVERLAP * scale
            )

            for i in range(overlap_width):

                weight[:, i, 0] = (
                    (i + 1) / overlap_width
                )

        canvas[
            y:y + h,
            x:x + w
        ] += tile.astype(np.float32) * weight

        weights[
            y:y + h,
            x:x + w
        ] += weight

    # ---------------------------------------------------------
    # 6. Normalize
    # ---------------------------------------------------------

    canvas = canvas / np.maximum(
        weights,
        1e-8
    )

    canvas = np.clip(
        canvas,
        0,
        255
    ).astype(np.uint8)

    # ---------------------------------------------------------
    # 7. Save
    # ---------------------------------------------------------

    OUTPUT_PATH.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    Image.fromarray(canvas).save(
        OUTPUT_PATH
    )

    print()
    print(
        f"Stitched image saved to: "
        f"{OUTPUT_PATH}"
    )


if __name__ == "__main__":
    stitch_tiles()