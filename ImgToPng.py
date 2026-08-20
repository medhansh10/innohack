"""
img_to_png.py
Standalone converter: PDS4 .img (raw instrument data) + .xml (label) -> PNG

WHY THIS EXISTS:
The .img file is raw binary DN (digital number) values -- it has no header
that a normal image viewer or Real-ESRGAN can understand on its own. The
.xml label tells you how to interpret those raw bytes (image dimensions,
bit depth, byte order). This script reads the XML, uses it to correctly
parse the .img, stretches the values into a normal 8-bit range, and saves
a real PNG you can then feed into Real-ESRGAN.

It does NOT touch the browse PNG (b_brw_*.png) that ISRO ships alongside --
that one is already compressed/stretched by ISRO and isn't used here.

-----------------------------------------------------------------------------
HOW YOUR FILES NEED TO BE ARRANGED
-----------------------------------------------------------------------------
Just two files, and they must be the MATCHING pair (same product ID):

    some_folder/
    ├── ch2_ohr_ncp_20260103T1005176450_d_img_d18.img   <- --img points here
    └── ch2_ohr_ncp_20260103T1005176450_d_img_d18.xml   <- --xml points here

Both must have the SAME base name up to "_d_img_d18" -- if you point --img
at an OHRC file and --xml at a TMC file (or the browse XML instead of the
data XML), the dimensions/dtype won't match and you'll get garbled output
or a crash. They don't need to be in the same directory as this script --
you pass full/relative paths as arguments.

-----------------------------------------------------------------------------
USAGE
-----------------------------------------------------------------------------
    pip install numpy pillow lxml gdal --break-system-packages

    python img_to_png.py \
        --img ch2_ohr_ncp_20260103T1005176450_d_img_d18.img \
        --xml ch2_ohr_ncp_20260103T1005176450_d_img_d18.xml \
        --out ohrc_output.png

    (GDAL is optional but recommended -- the script falls back to a manual
    binary read using the XML if GDAL isn't installed or can't parse the
    label, but GDAL handles more edge cases correctly when it works.)

-----------------------------------------------------------------------------
OUTPUT
-----------------------------------------------------------------------------
    ohrc_output.png   <- 8-bit, percentile-stretched, ready for Real-ESRGAN
                          (if the image is large, tile it before feeding to
                          the model -- see the earlier tiling script)
"""

import argparse
import numpy as np
from PIL import Image

try:
    from osgeo import gdal
    gdal.UseExceptions()
    HAS_GDAL = True
except ImportError:
    HAS_GDAL = False

try:
    from lxml import etree
except ImportError:
    import xml.etree.ElementTree as etree


def _strip_ns(tag):
    """PDS4 XML tags are namespaced (e.g. '{http://...}Axis_Array'); this
    strips the namespace so we can match on the plain tag name."""
    return tag.split("}")[-1] if "}" in tag else tag


def parse_pds4_label(xml_path):
    """
    Reads the .xml label and pulls out exactly what's needed to interpret
    the raw .img binary: image dimensions, data type, byte order, offset.

    PDS4 labels can vary slightly between instrument teams, so this
    searches by element name rather than assuming a fixed schema. If it
    can't find what it needs, it raises an error telling you exactly what
    it DID find, so you can compare against your actual XML and adjust
    the tag names / dtype_map below if needed.
    """
    tree = etree.parse(xml_path)
    root = tree.getroot()

    fields = {}
    for elem in root.iter():
        tag = _strip_ns(elem.tag)

        # Axis_Array elements have no direct text of their own (their info
        # lives in child tags), so this must be checked BEFORE the
        # text-based checks below, or it gets skipped entirely.
        if tag == "Axis_Array":
            axis_name, length = None, None
            for child in elem:
                ctag = _strip_ns(child.tag)
                if ctag == "axis_name":
                    axis_name = child.text.strip()
                elif ctag == "elements":
                    length = int(child.text.strip())
            if axis_name and length:
                fields[axis_name.lower()] = length
            continue

        text = (elem.text or "").strip()
        if not text:
            continue

        if tag == "data_type":
            fields["data_type"] = text
        elif tag == "offset":
            fields["offset"] = int(text)

    if "line" not in fields or "sample" not in fields:
        raise ValueError(
            f"Could not find Line/Sample dimensions in {xml_path}.\n"
            f"Fields found so far: {fields}\n"
            f"Open the XML and search for <Axis_Array> blocks with "
            f"<axis_name>Line</axis_name> / <axis_name>Sample</axis_name> "
            f"and <elements>NNN</elements> -- if the tag names differ, "
            f"paste me the XML and I'll fix this function to match."
        )

    # Maps PDS4's data_type string to a numpy dtype + byte order.
    # If your XML reports a data_type not listed here, add it -- check
    # readme.txt in your download for the bit depth of this product level.
    dtype_map = {
        "UnsignedByte":     ("uint8",   "="),
        "UnsignedLSB2":     ("uint16",  "<"),
        "UnsignedMSB2":     ("uint16",  ">"),
        "SignedLSB2":       ("int16",   "<"),
        "SignedMSB2":       ("int16",   ">"),
        "IEEE754LSBSingle": ("float32", "<"),
        "IEEE754MSBSingle": ("float32", ">"),
    }
    raw_dtype = fields.get("data_type", "UnsignedByte")
    np_dtype, byte_order = dtype_map.get(raw_dtype, ("uint8", "="))

    return {
        "lines": fields["line"],
        "samples": fields["sample"],
        "dtype": np_dtype,
        "byte_order": byte_order,
        "offset": fields.get("offset", 0),
        "raw_data_type": raw_dtype,
    }


def read_img(img_path, xml_path):
    """Returns a 2D numpy array of raw DN values from the .img file."""

    # Try GDAL first -- it natively understands many PDS4 labels and
    # handles quirks (byte swapping, headers) automatically when it works.
    if HAS_GDAL:
        try:
            ds = gdal.Open(img_path)
            if ds is not None:
                arr = ds.ReadAsArray()
                if arr is not None:
                    print(f"[read_img] Loaded via GDAL: shape={arr.shape}, dtype={arr.dtype}")
                    return arr
        except Exception as e:
            print(f"[read_img] GDAL failed ({e}); falling back to manual parse.")
    else:
        print("[read_img] GDAL not installed; using manual parse.")

    # Manual fallback: read raw bytes using dimensions/dtype from the XML.
    meta = parse_pds4_label(xml_path)
    print(f"[read_img] XML metadata: {meta}")

    dtype = np.dtype(meta["dtype"]).newbyteorder(meta["byte_order"])
    count = meta["lines"] * meta["samples"]

    with open(img_path, "rb") as f:
        f.seek(meta["offset"])
        arr = np.fromfile(f, dtype=dtype, count=count)

    if arr.size != count:
        raise ValueError(
            f"Read {arr.size} values but expected {count} "
            f"({meta['lines']} lines x {meta['samples']} samples).\n"
            f"This usually means the offset or data_type parsed from the "
            f"XML is wrong -- check readme.txt for this product's exact "
            f"format against dtype_map in parse_pds4_label()."
        )

    return arr.reshape((meta["lines"], meta["samples"]))


def percentile_stretch(arr, low=2, high=98, sample_size=5_000_000):
    """
    Converts raw DN values to 8-bit using a percentile stretch (not
    min-max), because planetary imagery has long tails -- deep shadow
    pixels and occasional saturated pixels -- that would otherwise crush
    the real surface detail into a narrow band of the output range.

    On large frames (OHRC strips can be 1B+ pixels), computing percentiles
    over the FULL array is slow since it requires a sort/partition. Instead
    we estimate the percentiles from a random sample -- statistically this
    converges fast (a few million samples is plenty for a stable 2nd/98th
    percentile estimate) and is dramatically faster with no meaningful
    accuracy loss for stretching purposes.
    """
    flat = arr.reshape(-1)
    if flat.size > sample_size:
        # replace=True is important here: replace=False on an array this
        # size makes numpy build a full permutation internally, which can
        # need several GB of RAM just for the index list. With billions of
        # pixels, sampling WITH replacement has a negligible chance of any
        # duplicate mattering, and uses a fraction of the memory.
        idx = np.random.randint(0, flat.size, size=sample_size)
        sample = flat[idx].astype(np.float32)
    else:
        sample = flat.astype(np.float32)

    p_low, p_high = np.percentile(sample, (low, high))
    if p_high <= p_low:
        p_high = p_low + 1

    # Apply the stretch in row-chunks rather than converting the whole
    # array to float32 at once -- on a 1B+ pixel image, a full float32
    # copy can be several GB, which is where the earlier version ran out
    # of memory. Chunking keeps peak memory to one chunk's worth instead.
    out = np.empty(arr.shape, dtype=np.uint8)
    chunk_rows = max(1, 50_000_000 // max(arr.shape[1], 1))  # ~50M elements per chunk
    for start in range(0, arr.shape[0], chunk_rows):
        end = min(start + chunk_rows, arr.shape[0])
        chunk = arr[start:end].astype(np.float32)
        chunk = np.clip((chunk - p_low) / (p_high - p_low) * 255.0, 0, 255)
        out[start:end] = chunk.astype(np.uint8)

    return out


def main():
    ap = argparse.ArgumentParser(description="Convert PDS4 .img + .xml into data ready for tiling/Real-ESRGAN.")
    ap.add_argument("--img", required=True, help="Path to the .img file (the real data, NOT the browse PNG)")
    ap.add_argument("--xml", required=True, help="Path to the MATCHING .xml label for that .img")
    ap.add_argument("--out", required=True, help="Output path prefix, e.g. ohrc_output (no extension)")
    ap.add_argument("--low", type=float, default=2.0, help="Lower stretch percentile (default 2)")
    ap.add_argument("--high", type=float, default=98.0, help="Upper stretch percentile (default 98)")
    ap.add_argument("--preview-width", type=int, default=2000,
                     help="Width in pixels of the small downsampled preview PNG (default 2000). "
                          "This is just for you to visually check the result -- NOT the file you feed to Real-ESRGAN.")
    ap.add_argument("--full-png", action="store_true",
                     help="Also save a full-resolution PNG. SLOW and large on big frames (can take 1+ minute "
                          "and produce a 1GB+ file) -- normally unnecessary since you'll tile the .npy output "
                          "anyway. Only use this if you specifically need a full-res single image file.")
    args = ap.parse_args()

    print(f"Reading raw data from: {args.img}")
    print(f"Using label:           {args.xml}")
    raw = read_img(args.img, args.xml)
    print(f"Raw array: shape={raw.shape}, dtype={raw.dtype}, min={raw.min()}, max={raw.max()}")

    print(f"Applying percentile stretch ({args.low}-{args.high})...")
    stretched = percentile_stretch(raw, args.low, args.high)
    print(f"Stretched: min={stretched.min()}, max={stretched.max()}, mean={stretched.mean():.1f}")

    # Save as .npy: this is fast (no compression), lossless, and is the
    # actual input the tiling script should read -- there's no need to
    # round-trip through a full-resolution PNG just to tile it afterwards.
    npy_path = args.out + ".npy"
    np.save(npy_path, stretched)
    print(f"Saved (fast, lossless): {npy_path}   <- feed this into the tiling script next")

    # Small downsampled preview so you can actually look at it without
    # waiting on a full-res PNG encode.
    h, w = stretched.shape
    scale = args.preview_width / w
    preview_h = max(1, int(h * scale))
    preview = Image.fromarray(stretched).resize((args.preview_width, preview_h), Image.BILINEAR)
    preview_path = args.out + "_preview.png"
    preview.save(preview_path)
    print(f"Saved (for visual check only, downsampled to {args.preview_width}px wide): {preview_path}")

    if args.full_png:
        print("Saving full-resolution PNG (--full-png was set) -- this will be slow on a large frame...")
        full_path = args.out + "_full.png"
        Image.fromarray(stretched).save(full_path)
        print(f"Saved: {full_path}")

    print("\nDone. Next step: tile the .npy file into patches before running Real-ESRGAN "
          "(feeding a 101075x12000 image directly into the model will exceed your VRAM).")


if __name__ == "__main__":
    main()