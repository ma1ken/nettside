from PIL import Image
import os, glob
files = sorted(glob.glob(r"frontend/src/Images/unimate/extracted/*"))
for f in files:
    im = Image.open(f)
    print(os.path.basename(f), im.size)
