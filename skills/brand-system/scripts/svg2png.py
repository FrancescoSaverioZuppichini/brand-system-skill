# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow", "resvg-py"]
# ///
# [Agent] Exact-size PNG export with resvg: the same renderer every time, no browser antialiasing.
# usage: uv run svg2png.py in.svg out.png WIDTH [HEIGHT]
# With HEIGHT the art keeps its aspect ratio and is centred on a transparent WIDTH x HEIGHT canvas.
import io, sys
import resvg_py
from PIL import Image

src, out, width, *height = sys.argv[1:]
png = resvg_py.svg_to_bytes(svg_path=src, width=int(width))
image = Image.open(io.BytesIO(bytes(png))).convert("RGBA")
if height:
    box = (int(width), int(height[0]))
    image.thumbnail(box)
    canvas = Image.new("RGBA", box)
    canvas.paste(image, ((box[0] - image.width) // 2, (box[1] - image.height) // 2))
    image = canvas
image.save(out)
print(out, "%dx%d" % image.size)
