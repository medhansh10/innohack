import os
import numpy as np
from PIL import Image

def convert_jpg_to_npy(input_path: str = "image.jpg", output_path: str = "image.npy"):
    # Check if the input file exists
    if not os.path.exists(input_path):
        raise FileNotFoundError(f"Input file '{input_path}' not found.")

    # Open image and convert to RGB (handles RGBA, grayscale, or palette images safely)
    with Image.open(input_path) as img:
        img_rgb = img.convert("RGB")
        img_array = np.array(img_rgb)

    # Save as .npy file
    np.save(output_path, img_array)
    print(f"Successfully saved '{output_path}' with shape {img_array.shape} and dtype {img_array.dtype}.")

if __name__ == "__main__":
    convert_jpg_to_npy()