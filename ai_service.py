from pathlib import Path
import sys
import types

import torch
import numpy as np
from PIL import Image

# Compatibility fix for older BasicSR with newer torchvision
import torchvision.transforms.functional as functional

functional_tensor = types.ModuleType(
    "torchvision.transforms.functional_tensor"
)
functional_tensor.rgb_to_grayscale = functional.rgb_to_grayscale
sys.modules["torchvision.transforms.functional_tensor"] = functional_tensor

from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer


# Model file
MODEL_PATH = Path("RealESRGAN_x4plus.pth")


# Build the Real-ESRGAN network
model = RRDBNet(
    num_in_ch=3,
    num_out_ch=3,
    num_feat=64,
    num_block=23,
    num_grow_ch=32,
    scale=4
)


# Load the model
upsampler = RealESRGANer(
    scale=4,
    model_path=str(MODEL_PATH),
    model=model,
    tile=0,
    pre_pad=0,
    half=False
)


def enhance_image(input_path: str, output_path: str):

    input_path = Path(input_path)
    output_path = Path(output_path)

    print(f"AI input: {input_path}")

    # Open PNG
    image = Image.open(input_path).convert("RGB")

    # Convert PIL image → NumPy array
    image_array = np.array(image)

    # Run Real-ESRGAN
    output, _ = upsampler.enhance(
        image_array,
        outscale=4
    )

    # Convert NumPy array → PNG
    output_image = Image.fromarray(output)

    output_image.save(output_path)

    print(f"AI output: {output_path}")

    return output_path