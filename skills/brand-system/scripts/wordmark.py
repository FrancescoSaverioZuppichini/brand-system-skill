# /// script
# requires-python = ">=3.10"
# dependencies = ["fonttools", "uharfbuzz"]
# ///
# [Agent] Outlined wordmark (or one letter) from an OFL font: HarfBuzz shapes it with real kerning and fontTools draws the
# outlines, so the SVG needs no installed font. The .json sidecar gives baseline, x-height and cap height in SVG units.
# usage: uv run wordmark.py FONT.ttf "text" out.svg [--axis wght=600] [--track -0.04] [--fill "#1A1614"] [--split]
import argparse, io, json
from pathlib import Path
from typing import Any
import uharfbuzz as hb
from fontTools.pens import boundsPen, svgPathPen, transformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

def pin_axes(font: TTFont, axis: list[str]) -> dict[str, float]:
    # [Agent] A wordmark is display type, so an unpinned opsz goes to its maximum: the display cut.
    pins = {tag: float(value) for tag, value in (a.split("=") for a in axis)}
    axes = {ax.axisTag: ax for ax in font["fvar"].axes} if "fvar" in font else {}
    if "opsz" in axes:
        pins.setdefault("opsz", axes["opsz"].maxValue)
    if unknown := set(pins) - set(axes):
        raise SystemExit(f"font has no axis {sorted(unknown)}; it has {sorted(axes)}")
    return pins

def outline(font: TTFont, text: str, track: float) -> tuple[list[str], Any, float]:
    # [Agent] HarfBuzz shapes the instance we draw (saved to memory, not the file). Font units are y-up and SVG is y-down,
    # so each glyph is flipped, which puts the baseline at y=0.
    data, buf = io.BytesIO(), hb.Buffer()
    font.save(data)
    face = hb.Face(hb.Blob(data.getvalue()))
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(hb.Font(face), buf, {"kern": True})
    glyphs, x, paths = font.getGlyphSet(), 0.0, []
    bounds = boundsPen.BoundsPen(glyphs)
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        glyph, pen = glyphs[font.getGlyphName(info.codepoint)], svgPathPen.SVGPathPen(glyphs)
        flip = (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset)
        glyph.draw(transformPen.TransformPen(pen, flip))
        glyph.draw(transformPen.TransformPen(bounds, flip))
        paths.append(pen.getCommands())
        x += pos.x_advance + track * face.upem
    return paths, bounds.bounds, x

def main() -> None:
    ap = argparse.ArgumentParser()
    for name in ("font", "text", "out"):
        ap.add_argument(name)
    ap.add_argument("--axis", action="append", default=[], help="tag=value, repeatable: pins any variable axis")
    ap.add_argument("--track", type=float, default=0.0, help="em units, e.g. -0.04 for -4 %%")
    ap.add_argument("--fill", default="currentColor")
    ap.add_argument("--split", action="store_true", help="one <path id=gN> per glyph, so one glyph can take another colour")
    a = ap.parse_args()
    font = TTFont(a.font)
    pins = pin_axes(font, a.axis)
    font = instantiateVariableFont(font, pins) if pins else font
    paths, (x0, y0, x1, y1), advance = outline(font, a.text, a.track)
    w, h = x1 - x0, y1 - y0
    # [Agent] fontTools fills its tables at runtime, so their fields are invisible to the type checker.
    head: Any = font["head"]
    os2: Any = font["OS/2"]
    body = "".join(f'<path id="g{i}" d="{d}"/>' for i, d in enumerate(paths) if d) if a.split else f'<path d="{" ".join(paths)}"/>'
    Path(a.out).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.1f} {y0:.1f} {w:.1f} {h:.1f}" fill="{a.fill}">{body}</svg>\n')
    meta = {"viewBox": [round(x0, 1), round(y0, 1), round(w, 1), round(h, 1)], "baseline_y": 0, "upm": head.unitsPerEm,
            "x_height_y": -os2.sxHeight, "cap_height_y": -os2.sCapHeight, "advance": round(advance, 1), "axes": pins, "glyphs": len(paths)}
    Path(a.out).with_suffix(".json").write_text(json.dumps(meta, indent=1))
    print(f"{a.out}: {w:.0f}x{h:.0f} units, baseline y=0, x-height y={-os2.sxHeight}, cap y={-os2.sCapHeight}, axes {pins or 'static'}")

if __name__ == "__main__": main()
