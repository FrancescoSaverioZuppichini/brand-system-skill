# [Agent] Exact-size PNG export with resvg (the same renderer every time, no browser antialiasing surprises).
# usage: uv run --with resvg-py --with pillow python svg2png.py in.svg out.png WIDTH [HEIGHT]
import io, sys, pathlib, resvg_py
from PIL import Image
src, out, w = sys.argv[1], sys.argv[2], int(sys.argv[3])
# [Agent] With only a width, resvg keeps the SVG's own aspect ratio; passing a height too forces that box.
size = {"width": w, "height": int(sys.argv[4])} if len(sys.argv) > 4 else {"width": w}
im = Image.open(io.BytesIO(bytes(resvg_py.svg_to_bytes(svg_string=pathlib.Path(src).read_text(), **size))))
im.save(out)
print(out, "%dx%d" % im.size)
