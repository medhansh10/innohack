import torch
import numpy as np
from PIL import Image
from basicsr.archs.rrdbnet_arch import RRDBNet
from realesrgan import RealESRGANer

# Specify model path and load state dictionary [01:29]
model_path = 'RealESRGAN_x4plus.pth'
state_dict = torch.load(model_path, map_location=torch.device('cpu'))['params_ema']

# Define the RRDBNet architecture [01:50]
model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
model.load_state_dict(state_dict, strict=True)

# Initialize the RealESRGANer upsampler [03:06]
upsampler = RealESRGANer(
    scale=4,
    model_path=model_path,
    model=model,
    tile=0,
    pre_pad=0,
    half=False
)

# Load input array directly from .npy [04:21]
img = np.load('image.npy')

# Upscale the image [04:34]
output, _ = upsampler.enhance(img, outscale=4)

# Convert back to an image and save [04:47]
output_img = Image.fromarray(output)
output_img.save('output.png')