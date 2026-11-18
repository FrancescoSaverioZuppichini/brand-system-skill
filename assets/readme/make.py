# /// script
# dependencies = ["pillow"]
# ///
# [Agent] Rebuilds the README images that are made from the atlas (hero.gif, styles.jpg, layouts.jpg, landings.jpg).
# Run it after the atlas changes: uv run assets/readme/make.py
# The two brand boards (Tostato, Franco) are copies of real runs and are not rebuilt here.
import pathlib, re, subprocess, tempfile, urllib.request
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "assets/readme"
ATLAS = ROOT / "atlas"
LAYOUTS = ATLAS / "layouts"
HERO = """swiss art-deco devtool-dark riso baroque y2k terminal memphis luxury vaporwave bauhaus ukiyo-e neobrutalism
broadsheet glassmorphism pixel art-nouveau cyberpunk japandi pop-art blueprint web1 constructivism clay-3d
type-blackletter synthwave editorial retro-os psychedelic collage""".split()
INK, PAPER, MUTE = (17, 17, 17), (245, 245, 245), (150, 150, 150)


def mono(size):
    f = pathlib.Path(tempfile.gettempdir()) / "DMMono-Regular.ttf"
    if not f.exists():
        urllib.request.urlretrieve("https://raw.githubusercontent.com/google/fonts/main/ofl/dmmono/DMMono-Regular.ttf", f)
    return ImageFont.truetype(str(f), size)


def styles():
    # [Agent] Family order comes from the anchors in styles.md, so the mosaic reads family by family like the catalogue.
    slugs = re.findall(r'<a id="([^"]+)"></a>', (ROOT / "skills/brand-system/references/styles.md").read_text())
    return [s for s in slugs if (ATLAS / f"{s}.jpg").exists()]


def hero():
    W, H, BAR = 800, 500, 44
    font, total = mono(17), len(styles())
    tmp = pathlib.Path(tempfile.mkdtemp())
    for i, s in enumerate(HERO):
        f = Image.new("RGB", (W, H + BAR), INK)
        f.paste(Image.open(ATLAS / f"{s}.jpg").convert("RGB").resize((W, H), Image.LANCZOS))
        d = ImageDraw.Draw(f)
        d.text((18, H + 12), s, font=font, fill=PAPER)
        right = f"same page · {total} styles"
        d.text((W - 18 - d.textlength(right, font=font), H + 12), right, font=font, fill=MUTE)
        f.save(tmp / f"f{i:03d}.png")
    # [Agent] One palette per frame: the styles share almost no colours, so a global palette muddies every frame.
    # No dithering keeps flat UI flat and the file under 5 MB.
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", "2.2", "-i", str(tmp / "f%03d.png"),
                    "-filter_complex", "split[a][b];[a]palettegen=stats_mode=single[p];[b][p]paletteuse=new=1:dither=none",
                    "-loop", "0", str(OUT / "hero.gif")], check=True)


def grid(tiles, cols, cw, ch, label, out, bg):
    rows = -(-len(tiles) // cols)
    sheet = Image.new("RGB", (cols * cw, rows * ch), bg)
    for i, im in enumerate(tiles):
        sheet.paste(im, ((i % cols) * cw, (i // cols) * ch))
    # [Agent] The empty cells of the last row carry the count instead of staying blank.
    spare = rows * cols - len(tiles)
    if spare:
        x0, y0 = (len(tiles) % cols) * cw, (rows - 1) * ch
        d = ImageDraw.Draw(sheet)
        d.rectangle((x0, y0, cols * cw, rows * ch), fill=INK)
        # [Agent] Largest size that still fits the spare cells, capped so a long row doesn't get a giant label.
        size = 48
        while size > 12 and d.textlength(label, font=mono(size)) > spare * cw - 44:
            size -= 2
        font = mono(size)
        d.text((x0 + 22, y0 + ch // 2), label, font=font, fill=PAPER, anchor="lm")
    sheet.save(out, quality=82, optimize=True, progressive=True)


def fit(path, w, h, bg):
    im = Image.open(path).convert("RGB")
    # [Agent] Crop only what exists: PIL pads a crop past the bottom edge with black.
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    im = im.crop((0, 0, w, min(h, im.height)))
    tile = Image.new("RGB", (w, h), bg)
    tile.paste(im)
    return tile


def styles_mosaic():
    tiles = [Image.open(ATLAS / f"{s}.jpg").convert("RGB").resize((200, 125), Image.LANCZOS) for s in styles()]
    grid(tiles, 12, 200, 125, f"{len(tiles)} styles · 8 families", OUT / "styles.jpg", INK)


def layouts_mosaic():
    files = sorted(p for p in LAYOUTS.glob("*/*.png") if p.parent.name not in ("sheets", "landings"))
    sections = len({p.parent.name for p in files})
    tiles = [fit(p, 200, 100, (235, 235, 237)) for p in files]
    grid(tiles, 12, 200, 100, f"{len(tiles)} layouts · {sections} sections · 1440 + 390", OUT / "layouts.jpg", INK)


def landings():
    files = sorted((LAYOUTS / "landings").glob("*.png"))
    W, H, PAD, TOP = 340, 1100, 24, 56
    font = mono(20)
    sheet = Image.new("RGB", (len(files) * (W + PAD) + PAD, H + TOP + PAD), (235, 235, 237))
    d = ImageDraw.Draw(sheet)
    for i, p in enumerate(files):
        x = PAD + i * (W + PAD)
        sheet.paste(fit(p, W, H, (255, 255, 255)), (x, TOP))
        d.text((x, TOP // 2 + 2), p.stem.replace("-", " "), font=font, fill=INK, anchor="lm")
    sheet.save(OUT / "landings.jpg", quality=84, optimize=True, progressive=True)


if __name__ == "__main__":
    hero(); styles_mosaic(); layouts_mosaic(); landings()
    for p in sorted(OUT.glob("*")):
        print(f"{p.stat().st_size // 1024:>6} KB  {p.name}")
