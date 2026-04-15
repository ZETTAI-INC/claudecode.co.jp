from PIL import Image
import sys
import glob

def remove_white_bg(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        # Check if the pixel is mostly white
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            new_data.append((255, 255, 255, 0)) # Make it transparent
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(output_path, "PNG")

files = glob.glob("/Users/a1/claudecode.co.jp/public/img/recommend/recommend0*.png")
for f in files:
    if "_t.png" not in f:
        out = f.replace(".png", "_t.png")
        remove_white_bg(f, out)
        print(f"Processed {f} to {out}")
