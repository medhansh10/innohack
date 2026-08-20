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
    img_files = list(output_dir.rglob("*.img"))
    xml_files = list(output_dir.rglob("*.xml"))
    png_files = list(output_dir.rglob("*.png"))

    # Create lookup of XML files by filename
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

    return {
        "img_files": img_files,
        "xml_files": xml_files,
        "png_files": png_files,
        "matched_pairs": matched_pairs,
    }