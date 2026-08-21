from pathlib import Path
import math
import numpy as np
from PIL import Image


# =========================================================
# SETTINGS
# =========================================================

TILES_DIR = Path("tiles")
OUTPUT_DIR = Path("outputs")

# Change ONLY this
NUM_TILES = 90

# Original tile settings
ORIGINAL_TILE_SIZE = 512
ORIGINAL_OVERLAP = 64

# Real-ESRGAN scale
UPSCALE = 4

# Enhanced tile settings
ENHANCED_TILE_SIZE = ORIGINAL_TILE_SIZE * UPSCALE
ENHANCED_OVERLAP = ORIGINAL_OVERLAP * UPSCALE
ENHANCED_STEP = ENHANCED_TILE_SIZE - ENHANCED_OVERLAP


# =========================================================
# FIND BEST GRID
# =========================================================

def find_grid(num_tiles):
    """
    Find a sensible rows x columns arrangement.

    The grid is chosen so that:
        rows * columns >= num_tiles

    We prefer a layout that is reasonably rectangular,
    rather than forcing a square.
    """

    best_rows = 1
    best_cols = num_tiles
    best_score = float("inf")

    for rows in range(1, num_tiles + 1):

        cols = math.ceil(num_tiles / rows)

        # Penalize very thin layouts
        ratio = max(rows, cols) / min(rows, cols)

        # Prefer layouts close to square
        score = abs(rows - cols) + ratio * 0.01

        if score < best_score:

            best_score = score
            best_rows = rows
            best_cols = cols

    return best_rows, best_cols


# =========================================================
# LOAD TILES
# =========================================================

def get_tiles():

    files = sorted(
        TILES_DIR.glob("tile_*_enhanced.png")
    )

    if not files:

        raise FileNotFoundError(
            f"No enhanced tiles found in {TILES_DIR}"
        )

    # Use only requested number
    files = files[:NUM_TILES]

    return files


# =========================================================
# STITCH
# =========================================================

def stitch_tiles():

    enhanced_files = get_tiles()

    num_tiles = len(enhanced_files)

    print()
    print("=" * 70)
    print("TILE STITCHING")
    print("=" * 70)
    print(f"Tiles found : {num_tiles}")

    # -----------------------------------------------------
    # Determine grid automatically
    # -----------------------------------------------------

    rows, cols = find_grid(num_tiles)

    print(f"Grid        : {rows} rows × {cols} columns")

    # -----------------------------------------------------
    # Read first tile
    # -----------------------------------------------------

    first_tile = np.array(
        Image.open(
            enhanced_files[0]
        ).convert("RGB"),
        dtype=np.float32
    )

    tile_h, tile_w = first_tile.shape[:2]

    print(
        f"Tile size   : {tile_w} × {tile_h}"
    )

    # -----------------------------------------------------
    # Actual overlap
    # -----------------------------------------------------

    overlap_x = min(
        ENHANCED_OVERLAP,
        tile_w - 1
    )

    overlap_y = min(
        ENHANCED_OVERLAP,
        tile_h - 1
    )

    step_x = tile_w - overlap_x
    step_y = tile_h - overlap_y

    print(
        f"Overlap     : {overlap_x} × {overlap_y}"
    )

    print(
        f"Step        : {step_x} × {step_y}"
    )

    # -----------------------------------------------------
    # Calculate output dimensions
    # -----------------------------------------------------

    output_width = (
        (cols - 1) * step_x
        + tile_w
    )

    output_height = (
        (rows - 1) * step_y
        + tile_h
    )

    print(
        f"Output size : "
        f"{output_width} × {output_height}"
    )

    print("=" * 70)
    print()

    # -----------------------------------------------------
    # Canvas
    # -----------------------------------------------------

    canvas = np.zeros(
        (
            output_height,
            output_width,
            3
        ),
        dtype=np.float32
    )

    weights = np.zeros(
        (
            output_height,
            output_width,
            1
        ),
        dtype=np.float32
    )

    # =====================================================
    # PLACE EACH TILE
    # =====================================================

    for index, tile_path in enumerate(enhanced_files):

        # -------------------------------------------------
        # Determine row / column
        # -------------------------------------------------

        row = index // cols
        col = index % cols

        # -------------------------------------------------
        # Position
        # -------------------------------------------------

        x = col * step_x
        y = row * step_y

        # -------------------------------------------------
        # Load tile
        # -------------------------------------------------

        tile = np.array(
            Image.open(
                tile_path
            ).convert("RGB"),
            dtype=np.float32
        )

        h, w = tile.shape[:2]

        # -------------------------------------------------
        # Make sure tile fits
        # -------------------------------------------------

        max_h = min(
            h,
            output_height - y
        )

        max_w = min(
            w,
            output_width - x
        )

        tile = tile[
            :max_h,
            :max_w
        ]

        h, w = tile.shape[:2]

        # -------------------------------------------------
        # Create blending weight
        # -------------------------------------------------

        weight = np.ones(
            (
                h,
                w,
                1
            ),
            dtype=np.float32
        )

        # -------------------------------------------------
        # Horizontal blending
        # -------------------------------------------------

        if col > 0:

            overlap = min(
                overlap_x,
                w
            )

            if overlap > 0:

                fade = np.linspace(
                    0.0,
                    1.0,
                    overlap,
                    dtype=np.float32
                )

                weight[
                    :,
                    :overlap,
                    0
                ] *= fade

        # -------------------------------------------------
        # Vertical blending
        # -------------------------------------------------

        if row > 0:

            overlap = min(
                overlap_y,
                h
            )

            if overlap > 0:

                fade = np.linspace(
                    0.0,
                    1.0,
                    overlap,
                    dtype=np.float32
                )

                weight[
                    :overlap,
                    :,
                    0
                ] *= fade[:, None]

        # -------------------------------------------------
        # Add tile
        # -------------------------------------------------

        canvas[
            y:y + h,
            x:x + w
        ] += (
            tile * weight
        )

        weights[
            y:y + h,
            x:x + w
        ] += weight

        print(
            f"[{index + 1:03d}/{num_tiles:03d}] "
            f"{tile_path.name:<30} "
            f"row={row:<3} "
            f"col={col:<3} "
            f"x={x:<6} "
            f"y={y:<6}"
        )

    # =====================================================
    # NORMALIZE
    # =====================================================

    canvas = (
        canvas /
        np.maximum(
            weights,
            1e-8
        )
    )

    canvas = np.clip(
        canvas,
        0,
        255
    ).astype(np.uint8)

    # =====================================================
    # SAVE
    # =====================================================

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True
    )

    output_path = (
        OUTPUT_DIR /
        f"stitched_{num_tiles}_tiles_x4.png"
    )

    Image.fromarray(
        canvas
    ).save(
        output_path
    )

    # =====================================================
    # DONE
    # =====================================================

    print()
    print("=" * 70)
    print("STITCHING COMPLETE")
    print("=" * 70)
    print(f"Tiles used  : {num_tiles}")
    print(f"Grid        : {rows} × {cols}")
    print(
        f"Output size : "
        f"{output_width} × {output_height}"
    )
    print(
        f"Saved to    : "
        f"{output_path}"
    )
    print("=" * 70)


# =========================================================
# MAIN
# =========================================================

if __name__ == "__main__":
    stitch_tiles()