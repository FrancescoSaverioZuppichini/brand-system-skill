# [Agent] Outlined wordmark from an OFL font: HarfBuzz shapes the text (real kerning and contextual forms), fontTools
# draws the glyph outlines, tracking is added by hand. Outlines mean the SVG never depends on an installed font.
# usage: uv run --with fonttools --with uharfbuzz python wordmark.py FONT.ttf "text" out.svg [--wght 600] [--wdth 100] [--track -0.04] [--fill currentColor]
import argparse, io, uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

ap = argparse.ArgumentParser()
ap.add_argument("font"); ap.add_argument("text"); ap.add_argument("out")
ap.add_argument("--wght", type=float); ap.add_argument("--wdth", type=float)
ap.add_argument("--track", type=float, default=0.0, help="em units, e.g. -0.04 for -4 %%")
ap.add_argument("--fill", default="currentColor")
a = ap.parse_args()

ft = TTFont(a.font)
axes = {k: v for k, v in (("wght", a.wght), ("wdth", a.wdth)) if v is not None}
if "fvar" in ft and axes:
    ft = instantiateVariableFont(ft, axes)
# [Agent] HarfBuzz must shape the same instance we draw, so feed it the instanced font from memory.
buf_bytes = io.BytesIO(); ft.save(buf_bytes)
face = hb.Face(hb.Blob(buf_bytes.getvalue())); font = hb.Font(face)
buf = hb.Buffer(); buf.add_str(a.text); buf.guess_segment_properties()
hb.shape(font, buf, {"kern": True})

upm, gs, order = face.upem, ft.getGlyphSet(), ft.getGlyphOrder()
x, paths, bounds = 0.0, [], BoundsPen(gs)
for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
    name = order[info.codepoint]
    t = (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset)  # font units are y-up, SVG is y-down
    pen = SVGPathPen(gs)
    gs[name].draw(TransformPen(pen, t)); gs[name].draw(TransformPen(bounds, t))
    paths.append(pen.getCommands())
    x += pos.x_advance + a.track * upm
x0, y0, x1, y1 = bounds.bounds
w, h = x1 - x0, y1 - y0
svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.1f} {y0:.1f} {w:.1f} {h:.1f}" fill="{a.fill}">'
       f'<path d="{" ".join(paths)}"/></svg>\n')
open(a.out, "w").write(svg)
os2 = ft["OS/2"]
print(f"{a.out}: {w:.0f}x{h:.0f} units, upm {upm}, x-height {os2.sxHeight}, cap {os2.sCapHeight} (y-down: baseline at 0)")
