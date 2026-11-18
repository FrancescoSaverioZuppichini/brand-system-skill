# [Agent] Logo size test: each SVG at real pixel heights on light and dark, then 16 and 32 px blown up with
# nearest-neighbour so the sheet shows exactly the pixels a browser tab shows. Non-square art (wordmarks, lockups) is
# rendered by height with its own aspect ratio, so the nav-bar sizes (24-32 px tall) are tested too.
# Dark variant: pass "light.svg:dark.svg", or keep a sibling "<name>-dark.svg" (or "-light" → "-dark"); otherwise
# the same file is shown on dark too, and you will see whether it disappears.
# usage: uv run --with resvg-py --with pillow python sizetest.py out.png mark.svg lockup.svg favicon-light.svg:favicon-dark.svg
import io, re, sys, pathlib, resvg_py
from PIL import Image, ImageDraw, ImageFont

LIGHT, DARK = (246, 244, 239), (17, 16, 15)
SIZES, MAG = [16, 24, 32, 64, 128], 128

def aspect(svg):
    vb = re.search(r'viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)', svg)
    return float(vb[1]) / float(vb[2]) if vb else 1.0

def raster(path, h):
    svg = path.read_text()
    w = max(1, round(h * aspect(svg)))
    return Image.open(io.BytesIO(bytes(resvg_py.svg_to_bytes(svg_string=svg, width=w, height=h)))).convert("RGBA")

def dark_of(f):
    for cand in (f.with_name(f.stem + "-dark.svg"), f.with_name(f.stem.replace("-light", "-dark") + ".svg")):
        if cand != f and cand.exists():
            return cand
    return f

def main(out, specs):
    font = ImageFont.load_default(size=14)
    rows = []
    for s in specs:
        a, _, b = s.partition(":")
        f = pathlib.Path(a)
        rows.append((f, pathlib.Path(b) if b else dark_of(f)))
    ar = max(aspect(f.read_text()) for f, _ in rows)
    strip = int(sum(SIZES) * ar + 10 * len(SIZES))
    width = 16 + 2 * (strip + 30) + 4 * (int(MAG * min(ar, 3)) + 10)
    rowh = MAG + 62
    im = Image.new("RGB", (width, rowh * len(rows)), LIGHT)
    d = ImageDraw.Draw(im)
    for i, (f, fd) in enumerate(rows):
        y, x = i * rowh, 16
        d.text((16, y + 10), f.stem + ("" if fd == f else f"  (dark: {fd.name})"), fill=(40, 40, 40), font=font)
        for bg, src in ((LIGHT, f), (DARK, fd)):
            d.rectangle([x - 8, y + 34, x + strip, y + 34 + MAG + 16], fill=bg)
            for px in SIZES:
                r = raster(src, px)
                im.paste(r, (x, y + 42 + MAG - px), r)
                x += r.width + 10
            x = x + 30 if x > 16 + strip else 16 + strip + 30
        for px in (16, 32):
            for bg, src in ((LIGHT, f), (DARK, fd)):
                r = raster(src, px)
                tile = Image.new("RGBA", r.size, bg + (255,))
                tile.alpha_composite(r)
                scale = MAG // px
                tile = tile.resize((min(r.width * scale, MAG * 3), MAG), Image.Resampling.NEAREST)
                im.paste(tile, (x, y + 42))
                x += tile.width + 10
        rows_w = x
    im = im.crop((0, 0, max(rows_w, im.width // 2), im.height)) if rows_w < im.width else im
    im.save(out)
    print(out, im.size)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("usage: sizetest.py out.png mark.svg [lockup.svg] [light.svg:dark.svg ...]")
    main(sys.argv[1], sys.argv[2:])
