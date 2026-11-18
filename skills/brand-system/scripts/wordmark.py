# [Agent] Outlined wordmark (or a single letter for a monogram sketch) from an OFL font: HarfBuzz shapes the text (real
# kerning, contextual forms), fontTools draws the outlines, tracking is added by hand. Outlines mean the SVG never
# depends on an installed font. A JSON sidecar gives the baseline, x-height and cap height in the SVG's own units, so a
# lockup script can align a mark to them without re-parsing paths.
#
# usage: uv run --with fonttools --with uharfbuzz python wordmark.py FONT.ttf "text" out.svg
#          [--axis wght=600 --axis opsz=72 ...] [--track -0.04] [--fill "#1A1614"] [--split]
#   --axis   pins any variable axis (wght, wdth, opsz, SOFT, WONK, ...). An unpinned opsz is set to its maximum, the
#            display cut, because a wordmark is display type; other unpinned axes keep the font's default.
#   --split  one <path id="g0"...> per glyph, so one letter or the full stop can take another colour.
import argparse, io, json, uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

ap = argparse.ArgumentParser()
ap.add_argument("font"); ap.add_argument("text"); ap.add_argument("out")
ap.add_argument("--axis", action="append", default=[], help="tag=value, repeatable")
ap.add_argument("--track", type=float, default=0.0, help="em units, e.g. -0.04 for -4 %%")
ap.add_argument("--fill", default="currentColor")
ap.add_argument("--split", action="store_true")
a = ap.parse_args()

ft = TTFont(a.font)
pins = {k: float(v) for k, v in (s.split("=") for s in a.axis)}
if "fvar" in ft:
    axes = {ax.axisTag: ax for ax in ft["fvar"].axes}
    if "opsz" in axes and "opsz" not in pins:
        pins["opsz"] = axes["opsz"].maxValue
    unknown = set(pins) - set(axes)
    if unknown:
        raise SystemExit(f"font has no axis {sorted(unknown)}; it has {sorted(axes)}")
    if pins:
        ft = instantiateVariableFont(ft, pins)
# [Agent] HarfBuzz must shape the same instance we draw, so feed it the instanced font from memory.
buf_bytes = io.BytesIO(); ft.save(buf_bytes)
face = hb.Face(hb.Blob(buf_bytes.getvalue())); font = hb.Font(face)
buf = hb.Buffer(); buf.add_str(a.text); buf.guess_segment_properties()
hb.shape(font, buf, {"kern": True})

upm, gs, order = face.upem, ft.getGlyphSet(), ft.getGlyphOrder()
x, paths, bounds = 0.0, [], BoundsPen(gs)
for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
    name = order[info.codepoint]
    t = (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset)  # font units are y-up, SVG is y-down: baseline at y=0
    pen = SVGPathPen(gs)
    gs[name].draw(TransformPen(pen, t)); gs[name].draw(TransformPen(bounds, t))
    paths.append(pen.getCommands())
    x += pos.x_advance + a.track * upm
x0, y0, x1, y1 = bounds.bounds
w, h = x1 - x0, y1 - y0
body = "".join(f'<path id="g{i}" d="{d}"/>' for i, d in enumerate(paths) if d) if a.split else f'<path d="{" ".join(paths)}"/>'
open(a.out, "w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.1f} {y0:.1f} {w:.1f} {h:.1f}" fill="{a.fill}">{body}</svg>\n')
os2 = ft["OS/2"]
meta = {"viewBox": [round(x0, 1), round(y0, 1), round(w, 1), round(h, 1)], "baseline_y": 0, "upm": upm,
        "x_height_y": -os2.sxHeight, "cap_height_y": -os2.sCapHeight, "advance": round(x, 1), "axes": pins, "glyphs": len(paths)}
json.dump(meta, open(a.out.rsplit(".", 1)[0] + ".json", "w"), indent=1)
print(f"{a.out}: {w:.0f}x{h:.0f} units, baseline y=0, x-height y={-os2.sxHeight}, cap y={-os2.sCapHeight}, axes {pins or 'static'}")
