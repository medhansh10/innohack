from pathlib import Path
import zipfile


def extract_pds4(zip_path: str, output_dir: str = "pds4_data"):
    """
    Extract a PDS4 ZIP file and find matching .img + .xml pairs.
    """

    zip_path = Path(zip_path)
    output_dir = Path(output_dir)

    output_dir.mkdir(parents=True, exist_ok=True)

    # Extract everything from the ZIP
    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(output_dir)

    # Find files
    # Find files (case-insensitive)
    img_files = [p for p in output_dir.rglob("*") if p.suffix.lower() in [".img", ".raw"]]
    xml_files = [p for p in output_dir.rglob("*") if p.suffix.lower() == ".xml"]
    png_files = [p for p in output_dir.rglob("*") if p.suffix.lower() in [".png", ".tif", ".tiff", ".jpg", ".jpeg"]]

    # Create lookup of XML files by filename stem
    xml_lookup = {
        xml.stem.lower(): xml
        for xml in xml_files
    }

    # Match IMG files with XML files having the same base filename
    matched_pairs = []

    for img in img_files:
        matching_xml = xml_lookup.get(img.stem.lower())
        if matching_xml:
            matched_pairs.append({
                "img": img,
                "xml": matching_xml
            })

    # Fallback: If no exact stem match, match the first IMG/RAW or primary XML found
    if not matched_pairs and img_files and xml_files:
        target_xml = next((x for x in xml_files if "_d_img_" in x.name.lower() or "data" in str(x).lower()), xml_files[0])
        matched_pairs.append({
            "img": img_files[0],
            "xml": target_xml
        })

    return {
        "img_files": img_files,
        "xml_files": xml_files,
        "png_files": png_files,
        "matched_pairs": matched_pairs,
    }