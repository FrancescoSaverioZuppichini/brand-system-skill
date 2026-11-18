# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow>=10.1", "resvg-py"]
# ///
# [Agent] Logo size test: each SVG at real pixel heights on light and dark, then 16 and 32 px zoomed
# nearest-neighbour, so the sheet shows the exact pixels a browser tab shows. Dark art: pass
# light.svg:dark.svg, or keep a sibling <name>-dark.svg.
# usage: uv run sizetest.py out.png mark.svg lockup.svg favicon-light.svg:favicon-dark.svg
import io, re, sys
from pathlib import Path
import resvg_py
from PIL import Image, ImageDraw, ImageFont

LIGHT, DARK = "#f6f4ef", "#11100f"
SIZES, ZOOM, GAP = [16, 24, 32, 64, 128], 128, 16

def find_dark(light: Path) -> Path:
    for name in (light.stem + "-dark.svg", light.stem.replace("-light", "-dark") + ".svg"):
        if name != light.name and (light.parent / name).exists():
            return light.parent / name
    return light

def get_aspect(svg: str) -> float:
    box = re.search(r'viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)', svg)
    return float(box[1]) / float(box[2]) if box else 1.0

def rasterize(svg: str, height: int, bg: str) -> Image.Image:
    width = max(1, round(height * get_aspect(svg)))
    png = resvg_py.svg_to_bytes(svg_string=svg, width=width, height=height, background=bg)
    return Image.open(io.BytesIO(bytes(png))).convert("RGB")

def draw_strip(svg: str, bg: str, width: int) -> Image.Image:
    strip, x = Image.new("RGB", (width, ZOOM + 16), bg), 8
    for px in SIZES:
        logo = rasterize(svg, px, bg)
        strip.paste(logo, (x, 8 + ZOOM - px))
        x += logo.width + 10
    return strip

def draw_zoom(svg: str, bg: str, px: int) -> Image.Image:
    # [Agent] Wide art is cropped, never squashed, so the zoom keeps the exact pixels of the logo.
    logo = rasterize(svg, px, bg)
    zoomed = logo.resize((logo.width * ZOOM // px, ZOOM), Image.Resampling.NEAREST)
    return zoomed.crop((0, 0, min(zoomed.width, ZOOM * 3), ZOOM))

def draw_row(light: Path, dark: Path, strip_width: int) -> Image.Image:
    svgs = [(LIGHT, light.read_text()), (DARK, dark.read_text())]
    tiles = [draw_strip(svg, bg, strip_width) for bg, svg in svgs]
    tiles += [draw_zoom(svg, bg, px) for px in (16, 32) for bg, svg in svgs]
    row = Image.new("RGB", (sum(t.width + GAP for t in tiles) + GAP, ZOOM + 62), LIGHT)
    label = light.stem if dark == light else f"{light.stem}  (dark: {dark.name})"
    ImageDraw.Draw(row).text((GAP, 10), label, fill="#282828", font=ImageFont.load_default(size=14))
    x = GAP
    for tile in tiles:
        row.paste(tile, (x, 34 + (ZOOM + 16 - tile.height) // 2))
        x += tile.width + GAP
    return row

def main() -> None:
    if len(sys.argv) < 3:
        sys.exit("usage: sizetest.py out.png mark.svg [lockup.svg] [light.svg:dark.svg ...]")
    pairs = []
    for arg in sys.argv[2:]:
        light, _, dark = arg.partition(":")
        pairs.append((Path(light), Path(dark) if dark else find_dark(Path(light))))
    widest = max(get_aspect(light.read_text()) for light, _ in pairs)
    strip_width = int(sum(SIZES) * widest) + 10 * len(SIZES) + 8
    rows = [draw_row(light, dark, strip_width) for light, dark in pairs]
    sheet = Image.new("RGB", (max(r.width for r in rows), sum(r.height for r in rows)), LIGHT)
    for i, row in enumerate(rows):
        sheet.paste(row, (0, i * row.height))
    sheet.save(sys.argv[1])
    print(sys.argv[1], sheet.size)

if __name__ == "__main__":
    main()
