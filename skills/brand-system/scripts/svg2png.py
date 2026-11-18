# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow", "resvg-py"]
# ///
# [Agent] Exact-size PNG export with resvg: the same renderer every time, no browser antialiasing.
# usage: uv run svg2png.py in.svg out.png WIDTH [HEIGHT]
import io, sys
import resvg_py
from PIL import Image

src, out, width, *height = sys.argv[1:]
box_height = int(height[0]) if height else None
png = resvg_py.svg_to_bytes(svg_path=src, width=int(width), height=box_height)
image = Image.open(io.BytesIO(bytes(png)))
image.save(out)
print(out, "%dx%d" % image.size)
