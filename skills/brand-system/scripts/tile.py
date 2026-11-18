# [Agent] A tall screenshot (a 390 px page is often 10,000+ px) gets shrunk to mush when you open it. This cuts it into
# columns side by side, so one image shows the whole page at a readable scale.
# usage: uv run --with pillow python tile.py tall.png out.png [column_height_px=2400]
import sys
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
ch = int(sys.argv[3]) if len(sys.argv) > 3 else 2400
im = Image.open(src).convert("RGB")
w, h = im.size
n = -(-h // ch)
gap = 24
sheet = Image.new("RGB", (n * w + (n - 1) * gap, min(h, ch)), (128, 128, 128))
for i in range(n):
    sheet.paste(im.crop((0, i * ch, w, min(h, (i + 1) * ch))), (i * (w + gap), 0))
sheet.save(out)
print(out, sheet.size, f"{n} columns")
