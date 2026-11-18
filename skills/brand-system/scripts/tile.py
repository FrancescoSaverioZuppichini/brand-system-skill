# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow"]
# ///
# [Agent] A tall screenshot (a 390 px page is often 10,000+ px) shrinks to mush when opened; this cuts it into columns
# side by side, so one image shows the whole page at a readable scale.
# usage: uv run tile.py tall.png out.png [column_height_px=2400]
import sys
from PIL import Image

def tile(page: Image.Image, height: int, gap: int = 24) -> Image.Image:
    tops = range(0, page.height, height)
    sheet = Image.new("RGB", (len(tops) * (page.width + gap) - gap, min(page.height, height)), "gray")
    for i, top in enumerate(tops):
        sheet.paste(page.crop((0, top, page.width, min(page.height, top + height))), (i * (page.width + gap), 0))
    return sheet

def main() -> None:
    src, out, *height = sys.argv[1:]
    page, column = Image.open(src).convert("RGB"), int(height[0]) if height else 2400
    sheet = tile(page, column)
    sheet.save(out)
    print(out, sheet.size, f"{len(range(0, page.height, column))} columns")

if __name__ == "__main__": main()
