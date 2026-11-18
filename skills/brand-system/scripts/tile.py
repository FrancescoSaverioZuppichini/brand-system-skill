# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow"]
# ///
# [Agent] A tall screenshot (a 390 px page is often 10,000+ px) shrinks to mush when opened; this
# cuts it into columns side by side, so one image shows the whole page at a readable scale.
# usage: uv run tile.py tall.png out.png [column_height_px=2400]
import sys
from PIL import Image

GAP = 24

src, out, *height = sys.argv[1:]
page, column = Image.open(src).convert("RGB"), int(height[0]) if height else 2400
tops = range(0, page.height, column)
sheet = Image.new("RGB", (len(tops) * (page.width + GAP) - GAP, min(page.height, column)), "gray")
for i, top in enumerate(tops):
    piece = page.crop((0, top, page.width, min(page.height, top + column)))
    sheet.paste(piece, (i * (page.width + GAP), 0))
sheet.save(out)
print(out, sheet.size, f"{len(tops)} columns")
