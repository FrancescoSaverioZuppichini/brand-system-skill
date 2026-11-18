# [Agent] Logo size test: each SVG at real pixel sizes on light and dark, then 16 and 32 px blown up with
# nearest-neighbour so the sheet shows exactly the pixels a browser tab shows. A sibling "<name>-dark.svg" is used
# on the dark background when it exists; otherwise the same file is shown there (and you'll see if it disappears).
# usage: uv run --with resvg-py --with pillow python sizetest.py out.png mark-a.svg mark-b.svg ...
import io, sys, pathlib, resvg_py
from PIL import Image, ImageDraw, ImageFont

LIGHT, DARK = (246, 244, 239), (17, 16, 15)
SIZES, MAG = [16, 24, 32, 64, 128], 128

def raster(path, px):
    data = resvg_py.svg_to_bytes(svg_string=path.read_text(), width=px, height=px)
    return Image.open(io.BytesIO(bytes(data))).convert("RGBA")

def main(out, files):
    font = ImageFont.load_default(size=14)
    rowh, width = 190, 16 + 2 * (sum(SIZES) + 10 * len(SIZES) + 30) + 4 * (MAG + 10)
    im = Image.new("RGB", (width, rowh * len(files)), LIGHT)
    d = ImageDraw.Draw(im)
    for i, f in enumerate(map(pathlib.Path, files)):
        dark = f.with_name(f.stem + "-dark.svg")
        variants = [(LIGHT, f), (DARK, dark if dark.exists() else f)]
        y, x = i * rowh, 16
        d.text((16, y + 10), f.stem, fill=(40, 40, 40), font=font)
        for bg, src in variants:
            d.rectangle([x - 8, y + 34, x + sum(SIZES) + 10 * len(SIZES), y + 34 + MAG + 16], fill=bg)
            for px in SIZES:
                r = raster(src, px)
                im.paste(r, (x, y + 42 + MAG - px), r)
                x += px + 10
            x += 30
        for px in (16, 32):
            for bg, src in variants:
                tile = Image.new("RGBA", (px, px), bg + (255,))
                tile.alpha_composite(raster(src, px))
                im.paste(tile.resize((MAG, MAG), Image.Resampling.NEAREST), (x, y + 42))
                x += MAG + 10
    im.save(out)
    print(out, im.size)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("usage: sizetest.py out.png mark.svg [mark2.svg ...]")
    main(sys.argv[1], sys.argv[2:])
