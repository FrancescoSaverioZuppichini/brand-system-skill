#!/usr/bin/env python3
# [Agent] Wireframes for every layout variant in skills/brand-system/references/layouts.md, as SVG, stdlib only.
# A variant is a small tree of boxes (Sec, Row, Col, Text, Img…). The same tree is measured and drawn twice, at 1440
# and at 390, so the mobile frame shows the real reflow (rows stack, grids scroll, tables turn into lists, floats
# become sheets) instead of a shrunk desktop. Text is a character count, so headlines wrap into more lines on mobile.
# usage: python3 make.py → <section>/<id>.svg, sheets/<section>.svg, landings/<name>.svg next to this file
from __future__ import annotations

import math
from dataclasses import dataclass
from pathlib import Path
from typing import Protocol

OUT = Path(__file__).parent
FRAME = {"desk": 1440, "mob": 390, "gap": 72, "pad": 32, "label": 44, "min_scale": 0.5, "min_h": 900}
PAGE = {"max": 1200, "gutter": 120, "mgutter": 16}
SHEET = {"cell": 1960, "cols": 2, "gap": 96, "caption": 72}
MONO = "Menlo, 'DejaVu Sans Mono', monospace"
SANS = "Helvetica, Arial, sans-serif"
JITTER = (1.0, 0.95, 0.98, 0.93)
SERIES = (0.30, 0.42, 0.37, 0.55, 0.47, 0.62, 0.56, 0.74, 0.68, 0.83)


@dataclass(frozen=True)
class Ink:
    bg: str
    tint: str
    text: str
    head: str
    glyph: str
    block: str
    border: str
    btn: str
    btn_text: str


LIGHT = Ink("#ffffff", "#f4f4f5", "#d4d4d8", "#52525b", "#a1a1aa", "#e4e4e7", "#d4d4d8", "#27272a", "#a1a1aa")
DARK = Ink("#27272a", "#3f3f46", "#5b5b63", "#e4e4e7", "#8b8b93", "#3f3f46", "#52525b", "#f4f4f5", "#71717a")
PHOTO = Ink("#52525b", "#63636b", "#a1a1aa", "#fafafa", "#d4d4d8", "#63636b", "#8b8b93", "#fafafa", "#71717a")
# [Agent] One shared gradient for the darkening scrim under text on photos, defined once per file.
SCRIM = ('<defs><linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1"><stop offset=".3" stop-color="#000" stop-opacity="0"/>'
         '<stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient></defs>')
CANVAS = {"bg": "#ebebee", "label": "#71717a", "frame": "#c4c4c8", "code": "#18181b"}

# [Agent] Type as (bar thickness, line pitch, width of one character), at 1440 then at 390. Bars are thinner than the
# font size on purpose: they stand for the x-height, which is what the eye reads as a line of text.
TYPE = {
    "mega": ((84, 108, 56), (44, 54, 28)),
    "display": ((50, 74, 33), (32, 44, 20)),
    "h1": ((36, 56, 24), (26, 38, 16)),
    "h2": ((24, 40, 16), (20, 32, 13)),
    "h3": ((11, 26, 10), (11, 26, 10)),
    "body": ((8, 24, 8.4), (8, 24, 8.2)),
    "small": ((6, 18, 7), (6, 18, 7)),
    "label": ((7, 20, 7.5), (7, 20, 7.5)),
}
HEADS = {"mega", "display", "h1", "h2", "h3"}


@dataclass(frozen=True)
class Ctx:
    ink: Ink = LIGHT
    m: bool = False
    align: str = "left"


class Node(Protocol):
    def h(self, w: float, c: Ctx) -> float: ...
    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str: ...


# ---------- SVG primitives ----------

def num(v: float) -> str:
    return f"{v:.1f}".removesuffix(".0")


def rect(x: float, y: float, w: float, h: float, fill: str = "none", stroke: str = "none", rx: float = 0,
         sw: float = 1.5, dash: str = "", op: float = 1) -> str:
    extra = (f' stroke-dasharray="{dash}"' if dash else "") + (f' opacity="{op}"' if op < 1 else "")
    return (f'<rect x="{num(x)}" y="{num(y)}" width="{num(max(w, 0))}" height="{num(max(h, 0))}" rx="{num(rx)}" '
            f'fill="{fill}" stroke="{stroke}" stroke-width="{num(sw)}"{extra}/>')


def circle(cx: float, cy: float, r: float, fill: str = "none", stroke: str = "none", sw: float = 1.5) -> str:
    return f'<circle cx="{num(cx)}" cy="{num(cy)}" r="{num(r)}" fill="{fill}" stroke="{stroke}" stroke-width="{num(sw)}"/>'


def line(x1: float, y1: float, x2: float, y2: float, stroke: str, sw: float = 1.5, dash: str = "") -> str:
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return (f'<line x1="{num(x1)}" y1="{num(y1)}" x2="{num(x2)}" y2="{num(y2)}" stroke="{stroke}" '
            f'stroke-width="{num(sw)}" stroke-linecap="round"{d}/>')


def path(d: str, fill: str = "none", stroke: str = "none", sw: float = 2) -> str:
    return (f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{num(sw)}" '
            f'stroke-linecap="round" stroke-linejoin="round"/>')


def text(x: float, y: float, s: str, size: float, fill: str, anchor: str = "start", family: str = MONO,
         weight: int = 400) -> str:
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return (f'<text x="{num(x)}" y="{num(y)}" font-family="{family}" font-size="{num(size)}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}">{s}</text>')


def bar(x: float, y: float, w: float, t: float, fill: str) -> str:
    return rect(x, y, w, t, fill, rx=min(t / 2, 5))


def place(x: float, w: float, cw: float, align: str) -> float:
    return x + (w - cw) / 2 if align == "center" else x + w - cw if align == "right" else x


# ---------- glyphs ----------

def check(x: float, y: float, s: float, colour: str) -> str:
    return path(f"M{num(x)} {num(y + s * .55)} L{num(x + s * .38)} {num(y + s * .9)} L{num(x + s)} {num(y + s * .12)}",
                stroke=colour, sw=2.2)


def cross(x: float, y: float, s: float, colour: str) -> str:
    return line(x, y, x + s, y + s, colour, 2) + line(x + s, y, x, y + s, colour, 2)


def plus(cx: float, cy: float, s: float, colour: str) -> str:
    return line(cx - s, cy, cx + s, cy, colour, 2) + line(cx, cy - s, cx, cy + s, colour, 2)


def chevron(cx: float, cy: float, s: float, colour: str, way: str = "right") -> str:
    pts = {"right": ((-.5, -1), (.5, 0), (-.5, 1)), "left": ((.5, -1), (-.5, 0), (.5, 1)),
           "down": ((-1, -.5), (0, .5), (1, -.5)), "up": ((-1, .5), (0, -.5), (1, .5))}[way]
    d = " L".join(f"{num(cx + dx * s)} {num(cy + dy * s)}" for dx, dy in pts)
    return path("M" + d, stroke=colour, sw=2)


def arrow(cx: float, cy: float, colour: str, way: str = "right") -> str:
    if way == "down":
        return line(cx, cy - 8, cx, cy + 8, colour, 2) + chevron(cx, cy + 4, 5, colour, "down")
    return line(cx - 8, cy, cx + 8, cy, colour, 2) + chevron(cx + 5, cy, 5, colour, "right")


def burger(x: float, y: float, colour: str) -> str:
    return "".join(line(x, y + i * 7, x + 22, y + i * 7, colour, 2.2) for i in range(3))


def lens(cx: float, cy: float, r: float, colour: str) -> str:
    return circle(cx, cy, r, stroke=colour, sw=2) + line(cx + r * .7, cy + r * .7, cx + r * 1.5, cy + r * 1.5, colour, 2.2)


def star(cx: float, cy: float, r: float, colour: str) -> str:
    pts = []
    for i in range(10):
        a = math.pi / 2 + i * math.pi / 5
        rr = r if i % 2 == 0 else r * .45
        pts.append(f"{num(cx + rr * math.cos(a))} {num(cy - rr * math.sin(a))}")
    return f'<polygon points="{" ".join(pts)}" fill="{colour}"/>'


def more(cx: float, cy: float, colour: str) -> str:
    return "".join(circle(cx + dx, cy, 2.2, colour) for dx in (-7, 0, 7))


def mountain(cx: float, cy: float, s: float, colour: str) -> str:
    big = f"M{num(cx - s)} {num(cy + s * .6)} L{num(cx - s * .25)} {num(cy - s * .45)} L{num(cx + s * .45)} {num(cy + s * .6)} Z"
    small = f"M{num(cx)} {num(cy + s * .6)} L{num(cx + s * .5)} {num(cy)} L{num(cx + s)} {num(cy + s * .6)} Z"
    return path(big, fill=colour) + path(small, fill=colour) + circle(cx + s * .55, cy - s * .5, s * .17, colour)


def play(cx: float, cy: float, r: float) -> str:
    tri = f"M{num(cx - r * .3)} {num(cy - r * .45)} L{num(cx + r * .5)} {num(cy)} L{num(cx - r * .3)} {num(cy + r * .45)} Z"
    return circle(cx, cy, r, "#ffffff") + path(tri, fill="#27272a")


def button(x: float, y: float, w: float, kind: str, ink: Ink, h: float = 48) -> str:
    if kind == "link":
        return bar(x, y + h / 2 - 4, w - 24, 8, ink.head) + arrow(x + w - 10, y + h / 2, ink.head)
    if kind == "store":
        return (rect(x, y, w, h, ink.btn, rx=10) + rect(x + 14, y + h / 2 - 10, 20, 20, ink.btn_text, rx=5)
                + bar(x + 44, y + h / 2 - 9, w * .3, 5, ink.btn_text) + bar(x + 44, y + h / 2 + 2, w - 64, 8, ink.btn_text))
    filled = kind == "primary"
    label = min(w * .5, 88)
    return (rect(x, y, w, h, ink.btn if filled else "none", ink.btn if filled else ink.head, rx=h / 2)
            + bar(x + (w - label) / 2, y + h / 2 - 4, label, 8, ink.btn_text if filled else ink.head))


# ---------- image kinds ----------

def draw_photo(x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    return rect(x, y, w, h, ink.block, rx=rx) + mountain(x + w / 2, y + h / 2, min(w, h) * .16, ink.text)


def draw_shot(x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    top = min(28, h * .09)
    side = w * .18
    out = rect(x, y, w, h, ink.bg, rx=rx) + rect(x, y + top, side, h - top, ink.tint)
    out += "".join(circle(x + 14 + i * 12, y + top / 2, 3.5, ink.text) for i in range(3))
    pitch = max(16, h * .075)
    out += "".join(bar(x + 12, y + top + 16 + i * pitch * .8, side * (.7 if i else .5), 6, ink.glyph if i == 1 else ink.text)
                   for i in range(min(7, int((h - top - 24) / (pitch * .8)))))
    cx, cw = x + side + w * .03, w - side - w * .06
    out += bar(cx, y + top + 16, cw * .3, 10, ink.head)
    ky = y + top + 40
    kh = h * .17
    if h > 160:
        out += "".join(rect(cx + i * (cw + 12) / 3, ky, (cw - 24) / 3, kh, "none", ink.border, rx=6)
                       + bar(cx + i * (cw + 12) / 3 + 10, ky + kh * .55, cw * .12, 8, ink.head) for i in range(3))
        ky += kh + 16
    rows = int((y + h - ky - 10) // pitch)
    for i in range(max(rows, 0)):
        ry = ky + i * pitch
        out += line(cx, ry + pitch - 2, cx + cw, ry + pitch - 2, ink.tint, 1)
        out += bar(cx, ry + pitch / 2 - 4, cw * (.22 + .06 * (i % 3)), 7, ink.text)
        out += bar(cx + cw * .5, ry + pitch / 2 - 3, cw * .14, 6, ink.text)
        out += rect(cx + cw * .78, ry + pitch / 2 - 7, cw * .12, 14, ink.tint, rx=7)
    return out + line(x, y + top, x + w, y + top, ink.border, 1) + rect(x, y, w, h, "none", ink.border, rx=rx)


def draw_code(x: float, y: float, w: float, h: float, rx: float) -> str:
    out = rect(x, y, w, h, CANVAS["code"], rx=rx)
    out += "".join(circle(x + 18 + i * 14, y + 18, 4, "#3f3f46") for i in range(3))
    shape = ((0, .34, "#a1a1aa"), (0, .5, "#52525b"), (1, .42, "#71717a"), (1, .28, "#52525b"), (2, .36, "#71717a"),
             (1, .2, "#52525b"), (0, .12, "#52525b"), (0, .45, "#a1a1aa"), (1, .3, "#52525b"), (0, .22, "#71717a"))
    n = int((h - 60) // 24)
    for i in range(max(n, 0)):
        indent, frac, colour = shape[i % len(shape)]
        out += bar(x + 28 + indent * 28, y + 48 + i * 24, (w - 56) * frac, 8, colour)
    return out


def draw_map(x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    out = rect(x, y, w, h, ink.block, rx=rx)
    for fx, fy, gx, gy in ((0, .3, 1, .45), (0, .8, 1, .62), (.25, 0, .4, 1), (.7, 0, .62, 1), (0, .05, .55, 1)):
        out += line(x + fx * w, y + fy * h, x + gx * w, y + gy * h, ink.bg, 5)
    cx, cy = x + w * .5, y + h * .44
    return out + path(f"M{num(cx)} {num(cy + 22)} L{num(cx - 11)} {num(cy + 2)} A13 13 0 1 1 {num(cx + 11)} {num(cy + 2)} Z",
                      fill=ink.head) + circle(cx, cy - 4, 4.5, ink.block)


def draw_compare(x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    out = rect(x, y, w, h, ink.block, rx=rx) + rect(x + w / 2, y, w / 2, h, ink.tint, rx=rx)
    out += mountain(x + w * .25, y + h / 2, min(w, h) * .12, ink.glyph) + mountain(x + w * .75, y + h / 2, min(w, h) * .12, ink.text)
    return (out + line(x + w / 2, y, x + w / 2, y + h, ink.head, 3) + circle(x + w / 2, y + h / 2, 20, ink.bg, ink.head, 2)
            + chevron(x + w / 2 - 6, y + h / 2, 4, ink.head, "left") + chevron(x + w / 2 + 6, y + h / 2, 4, ink.head))


def draw_doc(x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    out = rect(x, y, w, h, ink.bg, ink.border, rx=rx) + bar(x + w * .1, y + h * .1, w * .5, 12, ink.head)
    out += rect(x + w * .1, y + h * .1 + 28, w * .8, h * .28, ink.block, rx=6)
    ly = y + h * .1 + 40 + h * .28
    while ly < y + h - 24:
        out += bar(x + w * .1, ly, w * .8 * JITTER[int(ly) % 4], 6, ink.text)
        ly += 18
    return out


def draw_img(kind: str, x: float, y: float, w: float, h: float, ink: Ink, rx: float) -> str:
    match kind:
        case "shot":
            return draw_shot(x, y, w, h, ink, rx)
        case "code":
            return draw_code(x, y, w, h, rx)
        case "map":
            return draw_map(x, y, w, h, ink, rx)
        case "compare":
            return draw_compare(x, y, w, h, ink, rx)
        case "doc":
            return draw_doc(x, y, w, h, ink, rx)
        case "video":
            return draw_photo(x, y, w, h, ink, rx) + play(x + w / 2, y + h / 2, min(36, h * .14))
        case "blank":
            return rect(x, y, w, h, ink.block, rx=rx)
    return draw_photo(x, y, w, h, ink, rx)


PINS = ((.32, .3), (.72, .22), (.56, .68), (.22, .76), (.84, .6))


def draw_pins(x: float, y: float, w: float, h: float, n: int, ink: Ink) -> str:
    return "".join(circle(x + px * w, y + py * h, 15, ink.btn) + text(x + px * w, y + py * h + 5, str(i + 1), 14, ink.bg, "middle")
                   for i, (px, py) in enumerate(PINS[:n]))


def spark(x: float, y: float, w: float, h: float, colour: str) -> str:
    pts = " L".join(f"{num(x + i * w / (len(SERIES) - 1))} {num(y + h * (1 - v))}" for i, v in enumerate(SERIES))
    return path("M" + pts, stroke=colour, sw=2.5)


def draw_chart(x: float, y: float, w: float, h: float, kind: str, ink: Ink) -> str:
    out = "".join(line(x, y + h * f, x + w, y + h * f, ink.tint, 1) for f in (.25, .5, .75))
    out += line(x, y + h, x + w, y + h, ink.border, 1)
    if kind == "bars":
        bw = w / len(SERIES)
        return out + "".join(rect(x + i * bw + bw * .2, y + h * (1 - v), bw * .6, h * v, ink.head if i == 7 else ink.text, rx=3)
                             for i, v in enumerate(SERIES))
    if kind == "area":
        pts = " L".join(f"{num(x + i * w / (len(SERIES) - 1))} {num(y + h * (1 - v))}" for i, v in enumerate(SERIES))
        out += path(f"M{pts} L{num(x + w)} {num(y + h)} L{num(x)} {num(y + h)} Z", fill=ink.tint)
    return out + spark(x, y, w, h, ink.head)


# ---------- leaves ----------

@dataclass(frozen=True)
class Text:
    chars: int = 90
    size: str = "body"
    maxw: float = 0
    align: str = ""

    def widths(self, w: float, c: Ctx) -> list[float]:
        cw = TYPE[self.size][c.m][2]
        avail = min(w, self.maxw or w)
        total = self.chars * cw
        if total <= avail:
            return [total]
        full = [avail * JITTER[i % 4] for i in range(math.ceil(total / (avail * .96)) - 1)]
        return full + [min(max(total - sum(full), avail * .3), avail * .9)]

    def h(self, w: float, c: Ctx) -> float:
        return len(self.widths(w, c)) * TYPE[self.size][c.m][1]

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        t, pitch, _ = TYPE[self.size][c.m]
        colour = c.ink.head if self.size in HEADS else c.ink.glyph if self.size == "label" else c.ink.text
        widths = self.widths(w, c)
        block = max(widths)
        x0 = place(x, w, block, self.align or c.align)
        return "".join(bar(place(x0, block, lw, self.align or c.align), y + i * pitch + (pitch - t) / 2, lw, t, colour)
                       for i, lw in enumerate(widths))


@dataclass(frozen=True)
class Btn:
    kind: str = "primary"
    w: float = 152

    def h(self, w: float, c: Ctx) -> float:
        return 48

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        bw = w if c.m and self.kind != "link" else min(self.w or w, w)
        return button(place(x, w, bw, c.align), y, bw, self.kind, c.ink)


@dataclass(frozen=True)
class Btns:
    n: int = 2
    kinds: tuple[str, ...] = ("primary", "secondary", "link")
    ws: tuple[float, ...] = (164, 148, 132)

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 48 + (self.n - 1) * 12 if c.m else 48

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if c.m:
            return "".join(button(x, y + i * 60, w, self.kinds[i], c.ink) for i in range(self.n))
        total = sum(self.ws[:self.n]) + 12 * (self.n - 1)
        bx = place(x, w, total, c.align)
        out = ""
        for i in range(self.n):
            out += button(bx, y, self.ws[i], self.kinds[i], c.ink)
            bx += self.ws[i] + 12
        return out


@dataclass(frozen=True)
class Img:
    ratio: float = .6
    kind: str = "photo"
    mratio: float = 0
    pins: int = 0
    rx: float = 12
    maxw: float = 0

    def h(self, w: float, c: Ctx) -> float:
        return min(w, self.maxw or w) * (self.mratio if c.m and self.mratio else self.ratio)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        iw = min(w, self.maxw or w)
        ih = self.h(w, c)
        ix = place(x, w, iw, c.align)
        return draw_img(self.kind, ix, y, iw, ih, c.ink, self.rx) + draw_pins(ix, y, iw, ih, self.pins, c.ink)


@dataclass(frozen=True)
class Chart:
    kind: str = "line"
    ratio: float = .4
    mratio: float = 0

    def h(self, w: float, c: Ctx) -> float:
        return w * (self.mratio if c.m and self.mratio else self.ratio)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ch = self.h(w, c)
        return "".join(bar(x, y + 8 + i * ch * .25, 22, 5, c.ink.text) for i in range(4)) + draw_chart(x + 36, y + 10, w - 36, ch - 20, self.kind, c.ink)


@dataclass(frozen=True)
class Phone:
    w: float = 240
    mw: float = 170
    screen: str = "list"

    def h(self, w: float, c: Ctx) -> float:
        return (self.mw if c.m else self.w) * 2.04

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        pw = self.mw if c.m else self.w
        ph = pw * 2.04
        px = place(x, w, pw, c.align)
        ink = c.ink
        out = rect(px, y, pw, ph, ink.bg, ink.head, rx=pw * .14, sw=3) + rect(px + pw * .38, y + 10, pw * .24, 8, ink.head, rx=4)
        sx, sw_ = px + 14, pw - 28
        out += bar(sx, y + 42, sw_ * .5, 12, ink.head)
        if self.screen == "photo":
            out += draw_photo(sx, y + 66, sw_, ph * .42, ink, 10)
            ry = y + 82 + ph * .42
        else:
            out += rect(sx, y + 66, sw_, ph * .16, ink.tint, rx=10) + bar(sx + 12, y + 66 + ph * .1, sw_ * .35, 14, ink.head)
            ry = y + 82 + ph * .16
        while ry < y + ph - 70:
            out += circle(sx + 12, ry + 12, 12, ink.block) + bar(sx + 32, ry + 5, sw_ * .5, 6, ink.head) + bar(sx + 32, ry + 15, sw_ * .35, 5, ink.text)
            ry += 36
        out += line(px + 4, y + ph - 52, px + pw - 4, y + ph - 52, ink.border, 1)
        return out + "".join(rect(px + pw * (i + .5) / 4 - 9, y + ph - 40, 18, 18, "none", ink.head if i == 0 else ink.glyph, rx=5) for i in range(4))


@dataclass(frozen=True)
class Icon:
    s: float = 32
    round: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return self.s

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ix = place(x, w, self.s, c.align)
        return rect(ix, y, self.s, self.s, "none", c.ink.glyph, rx=self.s / 2 if self.round else self.s * .22, sw=2)


@dataclass(frozen=True)
class Avatar:
    d: float = 44

    def h(self, w: float, c: Ctx) -> float:
        return self.d

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        cx = place(x, w, self.d, c.align) + self.d / 2
        return circle(cx, y + self.d / 2, self.d / 2, c.ink.text) + circle(cx, y + self.d * .4, self.d * .16, c.ink.bg)


@dataclass(frozen=True)
class Avatars:
    n: int = 5
    d: float = 32

    def h(self, w: float, c: Ctx) -> float:
        return self.d

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        step = self.d * .7
        x0 = place(x, w, self.d + step * (self.n - 1), c.align)
        return "".join(circle(x0 + i * step + self.d / 2, y + self.d / 2, self.d / 2, c.ink.text, c.ink.bg, 2.5) for i in range(self.n))


@dataclass(frozen=True)
class Logo:
    s: float = 28

    def h(self, w: float, c: Ctx) -> float:
        return self.s

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        lx = place(x, w, self.s * 3.8, c.align)
        return rect(lx, y, self.s, self.s, c.ink.head, rx=self.s * .25) + bar(lx + self.s * 1.3, y + self.s * .3, self.s * 2.5, self.s * .4, c.ink.head)


def mark(cx: float, cy: float, colour: str) -> str:
    return circle(cx - 40, cy, 11, colour) + bar(cx - 22, cy - 6, 70, 12, colour)


@dataclass(frozen=True)
class Marks:
    n: int = 6
    mcols: int = 3
    wrap: bool = True
    offset: float = 0

    def rows(self, c: Ctx) -> int:
        return math.ceil(self.n / self.mcols) if c.m and self.wrap else 1

    def h(self, w: float, c: Ctx) -> float:
        return self.rows(c) * 56 - 16

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if not self.wrap:
            return "".join(mark(x + self.offset + 70 + i * 210, y + 20, c.ink.glyph) for i in range(self.n))
        if self.n == 1:
            return mark(place(x, w, 100, c.align) + 52, y + 20, c.ink.glyph)
        cols = self.mcols if c.m else self.n
        cw = w / cols
        return "".join(mark(x + cw * (i % cols) + cw / 2 + (0 if not c.m else 10), y + 20 + 56 * (i // cols), c.ink.glyph)
                       for i in range(self.n))


@dataclass(frozen=True)
class Stat:
    w: float = 128
    label: float = 150

    def h(self, w: float, c: Ctx) -> float:
        return 66 if c.m else 76

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        t = 30 if c.m else 40
        sw_ = self.w * (.8 if c.m else 1)
        return (bar(place(x, w, sw_, c.align), y, sw_, t, c.ink.head)
                + bar(place(x, w, self.label, c.align), y + t + 16, self.label, 7, c.ink.glyph))


@dataclass(frozen=True)
class Price:
    def h(self, w: float, c: Ctx) -> float:
        return 92

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return (bar(x, y, 96, 11, c.ink.head) + bar(x, y + 34, 112, 38, c.ink.head) + bar(x + 124, y + 58, 40, 7, c.ink.glyph)
                + bar(x, y + 86, 150, 6, c.ink.text))


@dataclass(frozen=True)
class Num:
    i: int = 1
    kind: str = "circle"

    def h(self, w: float, c: Ctx) -> float:
        return 56 if self.kind == "big" else 36

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if self.kind == "big":
            return text(place(x, w, 64, c.align), y + 44, f"0{self.i}", 48, c.ink.head)
        cx = place(x, w, 36, c.align) + 18
        return circle(cx, y + 18, 17, "none", c.ink.head) + text(cx, y + 23, str(self.i), 15, c.ink.head, "middle")


@dataclass(frozen=True)
class Quote:
    def h(self, w: float, c: Ctx) -> float:
        return 48

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return text(place(x, w, 44, c.align), y + 70, "“", 104, c.ink.head, family="Georgia, serif")


@dataclass(frozen=True)
class Stars:
    n: int = 5

    def h(self, w: float, c: Ctx) -> float:
        return 18

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        x0 = place(x, w, self.n * 22 + 64, c.align)
        return "".join(star(x0 + 9 + i * 22, y + 9, 9, c.ink.head) for i in range(self.n)) + bar(x0 + self.n * 22 + 10, y + 6, 54, 6, c.ink.glyph)


@dataclass(frozen=True)
class Badge:
    w: float = 132
    filled: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return 28

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        bx = place(x, w, self.w, c.align)
        fill, ink = (c.ink.btn, c.ink.btn_text) if self.filled else (c.ink.tint, c.ink.glyph)
        return rect(bx, y, self.w, 28, fill, c.ink.border if not self.filled else "none", rx=14, sw=1) + bar(bx + 14, y + 11, self.w - 28, 6, ink)


@dataclass(frozen=True)
class Chips:
    n: int = 5
    w: float = 96
    active: int = -1

    def layout(self, w: float) -> list[tuple[float, int]]:
        out, cx, row = [], 0.0, 0
        for i in range(self.n):
            cw = self.w * (1, .8, 1.2, .9)[i % 4]
            if cx + cw > w and cx > 0:
                cx, row = 0.0, row + 1
            out.append((cw, row))
            cx += cw + 10
        return out

    def h(self, w: float, c: Ctx) -> float:
        return (self.layout(w)[-1][1] + 1) * 46 - 10

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        rows: dict[int, list[tuple[int, float]]] = {}
        for i, (cw, row) in enumerate(self.layout(w)):
            rows.setdefault(row, []).append((i, cw))
        out = ""
        for row, items in rows.items():
            cx = place(x, w, sum(cw for _, cw in items) + 10 * (len(items) - 1), c.align)
            for i, cw in items:
                on = i == self.active
                out += rect(cx, y + row * 46, cw, 36, c.ink.btn if on else "none", c.ink.btn if on else c.ink.border, rx=18)
                out += bar(cx + 16, y + row * 46 + 15, cw - 32, 6, c.ink.btn_text if on else c.ink.glyph)
                cx += cw + 10
        return out


@dataclass(frozen=True)
class Note:
    label: str

    def h(self, w: float, c: Ctx) -> float:
        return 28

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        nw = len(self.label) * 8 + 26
        nx = place(x, w, nw, c.align)
        return rect(nx, y, nw, 28, "none", c.ink.glyph, rx=14, sw=1.2, dash="4 3") + text(nx + 13, y + 18.5, self.label, 13, c.ink.glyph)


@dataclass(frozen=True)
class Dots:
    n: int = 4
    active: int = 0

    def h(self, w: float, c: Ctx) -> float:
        return 10

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        x0 = place(x, w, self.n * 18 + 14, c.align)
        out, cx = "", x0
        for i in range(self.n):
            dw = 26 if i == self.active else 9
            out += rect(cx, y, dw, 9, c.ink.head if i == self.active else c.ink.text, rx=4.5)
            cx += dw + 9
        return out


@dataclass(frozen=True)
class Arrows:
    def h(self, w: float, c: Ctx) -> float:
        return 44

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        x0 = place(x, w, 100, c.align)
        return (circle(x0 + 22, y + 22, 21, "none", c.ink.head) + chevron(x0 + 20, y + 22, 6, c.ink.head, "left")
                + circle(x0 + 78, y + 22, 21, c.ink.btn) + chevron(x0 + 80, y + 22, 6, c.ink.btn_text))


@dataclass(frozen=True)
class Toggle:
    labels: tuple[str, str] = ("Monthly", "Yearly -20%")

    def h(self, w: float, c: Ctx) -> float:
        return 44

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        tx = place(x, w, 280, c.align)
        return (rect(tx, y, 280, 44, c.ink.tint, rx=22) + rect(tx + 4, y + 4, 120, 36, c.ink.bg, c.ink.border, rx=18, sw=1)
                + text(tx + 64, y + 27, self.labels[0], 13, c.ink.head, "middle") + text(tx + 200, y + 27, self.labels[1], 13, c.ink.glyph, "middle"))


@dataclass(frozen=True)
class Tabs:
    n: int = 4
    active: int = 0
    kind: str = "line"

    def h(self, w: float, c: Ctx) -> float:
        return 96 if self.kind == "kpi" else 44

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        if self.kind == "kpi":
            tw = w / self.n
            out = ""
            for i in range(self.n):
                on = i == self.active
                out += rect(x + i * tw, y, tw, 96, ink.bg if on else ink.tint, ink.border, sw=1)
                out += line(x + i * tw, y, x + (i + 1) * tw, y, ink.head, 3) if on else ""
                out += bar(x + i * tw + 20, y + 22, tw * .35, 6, ink.glyph) + bar(x + i * tw + 20, y + 44, tw * .4, 24, ink.head if on else ink.glyph)
            return out
        if self.kind == "pill":
            tw = min(132, (w - 8) / self.n)
            tx = place(x, w, tw * self.n + 8, c.align)
            out = rect(tx, y, tw * self.n + 8, 44, ink.tint, rx=22)
            out += rect(tx + 4 + self.active * tw, y + 4, tw, 36, ink.bg, ink.border, rx=18, sw=1)
            return out + "".join(bar(tx + 4 + i * tw + tw * .25, y + 19, tw * .5, 6, ink.head if i == self.active else ink.glyph) for i in range(self.n))
        out = line(x, y + 43, x + w, y + 43, ink.border, 1)
        tx = place(x, w, self.n * 104, c.align) if c.align == "center" else x
        for i in range(self.n):
            on = i == self.active
            out += bar(tx + i * 104, y + 16, 72, 7, ink.head if on else ink.glyph)
            out += line(tx + i * 104, y + 43, tx + i * 104 + 72, y + 43, ink.head, 3) if on else ""
        return out


@dataclass(frozen=True)
class Menu:
    n: int = 6
    active: int = 0
    groups: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 36 + (self.n // 4) * 28 * self.groups

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out, cy = "", y
        for i in range(self.n):
            if self.groups and i and i % 4 == 0:
                out += bar(x + 12, cy + 14, 60, 6, c.ink.glyph)
                cy += 28
            if i == self.active:
                out += rect(x, cy, w, 32, c.ink.tint, rx=8)
            out += bar(x + 12, cy + 12, min(w - 24, w * (.5, .7, .45, .62, .55)[i % 5]), 7, c.ink.head if i == self.active else c.ink.glyph)
            cy += 36
        return out


@dataclass(frozen=True)
class Field:
    kind: str = "text"
    label: bool = True
    w: float = 0
    big: bool = False

    def box_h(self) -> float:
        return {"area": 112, "otp": 60}.get(self.kind, 60 if self.big else 48)

    def h(self, w: float, c: Ctx) -> float:
        if self.kind in ("check", "switch"):
            return 28
        return self.box_h() + (26 if self.label and self.kind not in ("search", "code", "otp") else 0)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        fw = min(self.w or w, w)
        fx = place(x, w, fw, c.align)
        if self.kind == "check":
            return rect(fx, y + 5, 18, 18, "none", ink.head, rx=4) + bar(fx + 30, y + 10, fw * .5, 7, ink.glyph)
        if self.kind == "switch" and fw < 100:
            return rect(fx + fw - 48, y + 2, 48, 26, ink.btn, rx=13) + circle(fx + fw - 15, y + 15, 9, ink.bg)
        if self.kind == "switch":
            return bar(fx, y + 10, fw * .35, 8, ink.head) + rect(fx + fw - 48, y + 2, 48, 26, ink.btn, rx=13) + circle(fx + fw - 15, y + 15, 9, ink.bg)
        out = ""
        if self.label and self.kind not in ("search", "code", "otp"):
            out += bar(fx, y + 4, 84, 7, ink.glyph)
            y += 26
        bh = self.box_h()
        if self.kind == "otp":
            bw = min(52, (fw - 50) / 6)
            ox = place(fx, fw, bw * 6 + 50, c.align)
            return "".join(rect(ox + i * (bw + 10), y, bw, bh, ink.bg, ink.head if i == 2 else ink.border, rx=8) for i in range(6))
        if self.kind == "code":
            return (rect(fx, y, fw, bh, CANVAS["code"], rx=10) + text(fx + 18, y + bh / 2 + 5, "$", 15, "#a1a1aa")
                    + bar(fx + 40, y + bh / 2 - 4, fw * .5, 8, "#71717a") + rect(fx + fw - 34, y + bh / 2 - 9, 14, 16, "none", "#a1a1aa", rx=3)
                    + rect(fx + fw - 29, y + bh / 2 - 5, 14, 16, CANVAS["code"], "#a1a1aa", rx=3))
        out += rect(fx, y, fw, bh, ink.bg, ink.border if self.kind != "search" or not self.big else ink.head, rx=bh / 2 if self.big else 8)
        tx = fx + 16
        if self.kind == "search":
            out += lens(fx + 24, y + bh / 2 - 2, 7, ink.glyph)
            tx = fx + 46
        out += bar(tx, y + bh / 2 - 4 if self.kind != "area" else y + 18, fw * .35, 7, ink.text)
        if self.kind == "select":
            out += chevron(fx + fw - 22, y + bh / 2, 5, ink.glyph, "down")
        if self.kind == "search" and self.big:
            out += button(fx + fw - 140, y + 6, 134, "primary", ink, bh - 12)
        elif self.kind == "search" and fw > 220:
            out += text(fx + fw - 16, y + bh / 2 + 5, "⌘K", 13, ink.glyph, "end")
        return out


@dataclass(frozen=True)
class Checks:
    n: int = 4
    chars: int = 34
    mark: str = "check"

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 32

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out = ""
        for i in range(self.n):
            cy = y + i * 32
            out += cross(x + 2, cy + 9, 11, c.ink.glyph) if self.mark == "cross" else check(x, cy + 8, 15, c.ink.head)
            out += bar(x + 28, cy + 12, min(w - 28, self.chars * 8.4 * JITTER[(i + 1) % 4]), 7, c.ink.text)
        return out


@dataclass(frozen=True)
class Acc:
    n: int = 5
    open: int = 0
    chars: int = 46

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 72 + (80 if self.open >= 0 else 0)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out, cy = "", y
        for i in range(self.n):
            out += line(x, cy, x + w, cy, c.ink.border, 1)
            out += bar(x, cy + 31, min(w - 60, self.chars * 9 * JITTER[i % 4]), 10, c.ink.head)
            out += line(x + w - 22, cy + 36, x + w - 6, cy + 36, c.ink.head, 2) if i == self.open else plus(x + w - 14, cy + 36, 8, c.ink.head)
            cy += 72
            if i == self.open:
                out += Text(150).draw(x, cy - 8, w - 60, 72, c)
                cy += 80
        return out + line(x, cy, x + w, cy, c.ink.border, 1)


@dataclass(frozen=True)
class Rule:
    label: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return 20 if self.label else 1

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if not self.label:
            return line(x, y, x + w, y, c.ink.border, 1)
        return line(x, y + 10, x + w / 2 - 24, y + 10, c.ink.border, 1) + bar(x + w / 2 - 10, y + 7, 20, 6, c.ink.glyph) + line(x + w / 2 + 24, y + 10, x + w, y + 10, c.ink.border, 1)


@dataclass(frozen=True)
class Gap:
    d: float = 24
    m: float = -1

    def h(self, w: float, c: Ctx) -> float:
        return self.m if c.m and self.m >= 0 else self.d

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return ""


@dataclass(frozen=True)
class Kpi:
    def h(self, w: float, c: Ctx) -> float:
        return 128

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = rect(x, y, w, h, ink.bg, ink.border, rx=10) + bar(x + 20, y + 22, 90, 6, ink.glyph) + bar(x + 20, y + 46, 104, 26, ink.head)
        out += rect(x + 20, y + 88, 54, 22, ink.tint, rx=11) + bar(x + 30, y + 96, 34, 6, ink.head)
        return out + (spark(x + w * .55, y + 62, w * .45 - 20, 46, ink.head) if w > 220 else "")


@dataclass(frozen=True)
class Rows:
    n: int = 6
    avatar: bool = False
    thumb: bool = False
    status: bool = True
    active: int = -1
    action: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 64

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = ""
        for i in range(self.n):
            ry = y + i * 64
            if i == self.active:
                out += rect(x, ry, w, 64, ink.tint, rx=8)
            out += line(x, ry + 64, x + w, ry + 64, ink.tint if i == self.active else ink.border, 1)
            nx = x + 12
            if self.avatar:
                out += circle(nx + 18, ry + 32, 18, ink.text)
                nx += 50
            if self.thumb:
                out += rect(nx, ry + 12, 56, 40, ink.block, rx=6)
                nx += 70
            out += bar(nx, ry + 20, min(w * .3, 180) * JITTER[i % 4], 9, ink.head) + bar(nx, ry + 38, min(w * .4, 240) * JITTER[(i + 2) % 4], 6, ink.text)
            if not c.m and w > 640:
                out += bar(x + w * .52, ry + 29, w * .1, 7, ink.text)
            if self.status:
                out += rect(x + w - (150 if not c.m else 96), ry + 20, 72, 24, ink.tint, ink.border, rx=12, sw=1)
            if self.action and not c.m:
                out += button(x + w - 64 - 12, ry + 16, 64, "secondary", ink, 32)
            elif not c.m:
                out += more(x + w - 24, ry + 32, ink.glyph)
        return out


@dataclass(frozen=True)
class Table:
    rows: int = 8
    cols: int = 5
    check: bool = False

    def h(self, w: float, c: Ctx) -> float:
        return self.rows * 64 if c.m else 44 + self.rows * 52

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if c.m:
            return Rows(self.rows).draw(x, y, w, h, c)
        ink = c.ink
        first = w * .3
        cw = (w - first - 48) / (self.cols - 1)
        out = rect(x, y, w, 44, ink.tint, rx=8)
        lead = 40 if self.check else 0
        out += bar(x + 16 + lead, y + 19, 70, 6, ink.glyph) + "".join(bar(x + first + i * cw, y + 19, 56, 6, ink.glyph) for i in range(self.cols - 1))
        for r in range(self.rows):
            ry = y + 44 + r * 52
            out += line(x, ry + 52, x + w, ry + 52, ink.border, 1)
            if self.check:
                on = r in (1, 2, 4)
                out += rect(x + 16, ry + 17, 18, 18, ink.btn if on else "none", ink.head, rx=4)
            out += bar(x + 16 + lead, ry + 22, (first - 40 - lead) * JITTER[r % 4], 8, ink.head)
            for i in range(self.cols - 1):
                if i == self.cols - 3:
                    out += rect(x + first + i * cw, ry + 14, 76, 24, ink.tint, ink.border, rx=12, sw=1)
                else:
                    out += bar(x + first + i * cw, ry + 23, cw * (.6, .45, .7)[(r + i) % 3], 7, ink.text)
            out += more(x + w - 24, ry + 26, ink.glyph)
        return out


@dataclass(frozen=True)
class Compare:
    rows: int = 8
    cols: int = 3
    hl: int = 1
    head: str = "plan"

    def h(self, w: float, c: Ctx) -> float:
        return 64 + self.rows * 48 if c.m else (176 if self.head == "plan" else 72) + self.rows * 48

    def cell(self, r: int, i: int) -> str:
        return "check" if (r + i * 2) % 5 < 3 + (i == self.hl) else "dash" if (r + i) % 3 else "bar"

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        if c.m:
            out = Tabs(self.cols, self.hl, "pill").draw(x, y, w, 44, replace_align(c, "center"))
            for r in range(self.rows):
                ry = y + 64 + r * 48
                out += line(x, ry + 48, x + w, ry + 48, ink.border, 1) + bar(x, ry + 20, w * .5 * JITTER[r % 4], 7, ink.text)
                out += self.glyph(self.cell(r, self.hl), x + w - 30, ry + 16, ink)
            return out
        top = 176 if self.head == "plan" else 72
        label = w * .34
        cw = (w - label) / self.cols
        out = rect(x + label + self.hl * cw, y, cw, h, ink.tint, rx=12)
        for i in range(self.cols):
            cx = x + label + i * cw + 24
            if self.head == "plan":
                out += bar(cx, y + 24, 80, 10, ink.head) + bar(cx, y + 50, 96, 30, ink.head) + button(cx, y + 104, cw - 48, "primary" if i == self.hl else "secondary", ink, 44)
            else:
                out += Logo().draw(cx, y + 22, cw, 28, c)
        for r in range(self.rows):
            ry = y + top + r * 48
            out += line(x, ry, x + w, ry, ink.border, 1) + bar(x, ry + 20, label * .6 * JITTER[r % 4], 7, ink.text)
            out += "".join(self.glyph(self.cell(r, i), x + label + i * cw + 24, ry + 16, ink) for i in range(self.cols))
        return out

    def glyph(self, kind: str, x: float, y: float, ink: Ink) -> str:
        if kind == "check":
            return check(x, y, 16, ink.head)
        return line(x, y + 8, x + 14, y + 8, ink.glyph, 2) if kind == "dash" else bar(x, y + 5, 60, 6, ink.glyph)


@dataclass(frozen=True)
class Todo:
    n: int = 5
    done: int = 2

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 64

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = ""
        for i in range(self.n):
            ry = y + i * 64
            out += line(x, ry + 64, x + w, ry + 64, ink.border, 1)
            if i < self.done:
                out += circle(x + 14, ry + 32, 13, ink.btn) + check(x + 8, ry + 26, 12, ink.bg)
            else:
                out += circle(x + 14, ry + 32, 13, "none", ink.glyph)
            out += bar(x + 44, ry + 22, w * .4 * JITTER[i % 4], 9, ink.text if i < self.done else ink.head) + bar(x + 44, ry + 38, w * .3, 6, ink.text)
            if i == self.done and w > 300:
                out += button(x + w - 110, ry + 14, 110, "primary", ink, 36)
            elif i > self.done:
                out += chevron(x + w - 12, ry + 32, 5, ink.glyph)
        return out


@dataclass(frozen=True)
class KV:
    n: int = 5

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 40

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return "".join(line(x, y + i * 40 + 40, x + w, y + i * 40 + 40, c.ink.border, 1) + bar(x, y + i * 40 + 17, w * .28, 6, c.ink.glyph)
                       + bar(x + w * .45, y + i * 40 + 16, w * .4 * JITTER[i % 4], 8, c.ink.head) for i in range(self.n))


@dataclass(frozen=True)
class Timeline:
    n: int = 4
    small: bool = False

    def pitch(self) -> float:
        return 64 if self.small else 112

    def h(self, w: float, c: Ctx) -> float:
        return self.n * self.pitch()

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink, p = c.ink, self.pitch()
        out = line(x + 14, y + 14, x + 14, y + (self.n - 1) * p + 14, ink.border, 2)
        for i in range(self.n):
            iy = y + i * p
            out += circle(x + 14, iy + 14, 9 if not self.small else 6, ink.btn if i == 0 else ink.bg, ink.head, 2)
            if self.small:
                out += bar(x + 40, iy + 6, w * .5 * JITTER[i % 4], 8, ink.head) + bar(x + 40, iy + 24, w * .25, 6, ink.text)
            else:
                out += bar(x + 44, iy + 8, w * .4 * JITTER[i % 4], 11, ink.head) + Text(110).draw(x + 44, iy + 30, w - 44, 72, c)
        return out


@dataclass(frozen=True)
class Stepper:
    n: int = 3
    active: int = 1

    def h(self, w: float, c: Ctx) -> float:
        return 64

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        span = min(w, self.n * 220)
        x0 = place(x, w, span, c.align)
        step = span / self.n
        out = ""
        for i in range(self.n):
            cx = x0 + step * i + step / 2
            if i < self.n - 1:
                out += line(cx + 20, y + 16, cx + step - 20, y + 16, ink.head if i < self.active else ink.border, 2)
            if i < self.active:
                out += circle(cx, y + 16, 15, ink.btn) + check(cx - 6, y + 10, 12, ink.bg)
            else:
                out += circle(cx, y + 16, 15, ink.bg, ink.head if i == self.active else ink.border, 2) + text(cx, y + 21, str(i + 1), 13, ink.head if i == self.active else ink.glyph, "middle")
            out += bar(cx - step * .25, y + 46, step * .5, 7, ink.head if i == self.active else ink.glyph)
        return out


@dataclass(frozen=True)
class Legend:
    n: int = 3
    start: int = 1

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 112 - 24

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = ""
        for i in range(self.n):
            iy = y + i * 112
            out += circle(x + 15, iy + 15, 15, ink.btn) + text(x + 15, iy + 20, str(i + self.start), 14, ink.bg, "middle")
            out += bar(x + 46, iy + 10, (w - 46) * .6, 10, ink.head) + Text(80).draw(x + 46, iy + 30, w - 46, 60, c)
        return out


QUOTE_LINES = (3, 5, 2, 4, 3, 6, 2, 4, 3, 5)
PHOTO_RATIOS = (1.25, .8, 1.0, 1.4, .75, 1.1, .9, 1.3, .8, 1.0)


@dataclass(frozen=True)
class Masonry:
    n: int = 9
    cols: int = 3
    kind: str = "quote"

    def item_h(self, i: int, cw: float) -> float:
        return cw * PHOTO_RATIOS[i % 10] if self.kind == "photo" else 48 + QUOTE_LINES[i % 10] * 24 + 76

    def place_items(self, w: float, c: Ctx) -> list[tuple[int, float, float, float]]:
        cols = 1 if c.m else self.cols
        cw = (w - 24 * (cols - 1)) / cols
        tops = [0.0] * cols
        out = []
        for i in range(3 if c.m else self.n):
            col = tops.index(min(tops))
            out.append((i, col * (cw + 24), tops[col], cw))
            tops[col] += self.item_h(i, cw) + 24
        return out

    def h(self, w: float, c: Ctx) -> float:
        return max(top + self.item_h(i, cw) for i, _, top, cw in self.place_items(w, c))

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out = ""
        for i, ox, oy, cw in self.place_items(w, c):
            ih = self.item_h(i, cw)
            if self.kind == "photo":
                out += draw_photo(x + ox, y + oy, cw, ih, c.ink, 10)
                continue
            out += rect(x + ox, y + oy, cw, ih, c.ink.bg, c.ink.border, rx=12)
            out += Stars().draw(x + ox + 24, y + oy + 24, cw, 18, c) + Text(QUOTE_LINES[i % 10] * 32).draw(x + ox + 24, y + oy + 56, cw - 48, ih, c)
            py = y + oy + ih - 60
            out += circle(x + ox + 44, py + 18, 18, c.ink.text) + bar(x + ox + 72, py + 8, 100, 8, c.ink.head) + bar(x + ox + 72, py + 24, 70, 6, c.ink.text)
        return out


@dataclass(frozen=True)
class Agenda:
    tracks: int = 3
    slots: int = 6

    def h(self, w: float, c: Ctx) -> float:
        return 64 + self.slots * 76 if c.m else 48 + self.slots * 76

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        if c.m:
            out = Tabs(self.tracks, 0, "pill").draw(x, y, w, 44, c)
            for s in range(self.slots):
                sy = y + 64 + s * 76
                out += bar(x, sy + 12, 44, 7, ink.glyph) + rect(x + 64, sy, w - 64, 64, ink.tint, rx=8) + bar(x + 78, sy + 18, (w - 100) * .7, 9, ink.head) + bar(x + 78, sy + 38, (w - 100) * .4, 6, ink.glyph)
            return out
        tw = (w - 80) / self.tracks
        out = "".join(bar(x + 80 + t * tw + 8, y + 12, tw * .4, 9, ink.head) for t in range(self.tracks))
        out += "".join(bar(x, y + 48 + s * 76 + 10, 44, 7, ink.glyph) + line(x + 80, y + 48 + s * 76, x + w, y + 48 + s * 76, ink.border, 1) for s in range(self.slots))
        spans = ((0, 1), (1, 2), (3, 1), (4, 2), (0, 2), (2, 1), (3, 2), (5, 1), (0, 1), (1, 1), (2, 2), (4, 1))
        for t in range(self.tracks):
            for s, n in spans[t * 4:(t + 1) * 4]:
                if s + n <= self.slots:
                    sy = y + 48 + s * 76 + 6
                    out += rect(x + 80 + t * tw + 8, sy, tw - 16, n * 76 - 12, ink.tint, ink.border, rx=8, sw=1)
                    out += bar(x + 80 + t * tw + 22, sy + 16, (tw - 44) * .7, 9, ink.head) + bar(x + 80 + t * tw + 22, sy + 36, (tw - 44) * .45, 6, ink.glyph)
        return out


@dataclass(frozen=True)
class Flow:
    n: int = 3

    def h(self, w: float, c: Ctx) -> float:
        return self.n * 120 + (self.n - 1) * 40 if c.m else 120

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = ""
        for i in range(self.n):
            if c.m:
                bx, by, bw = x, y + i * 160, w
            else:
                bw = (w - 80 * (self.n - 1)) / self.n
                bx, by = x + i * (bw + 80), y
            out += rect(bx, by, bw, 120, ink.bg, ink.head if i == self.n - 1 else ink.border, rx=12) + Icon(28).draw(bx + 20, by + 20, 28, 28, c)
            out += bar(bx + 20, by + 64, bw * .5, 10, ink.head) + bar(bx + 20, by + 86, bw * .7, 6, ink.text)
            if i < self.n - 1:
                out += arrow(bx + bw / 2, by + 140, ink.head, "down") if c.m else arrow(bx + bw + 40, by + 60, ink.head)
        return out


@dataclass(frozen=True)
class Icons:
    n: int = 4
    s: float = 24

    def h(self, w: float, c: Ctx) -> float:
        return self.s

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        x0 = place(x, w, self.n * (self.s + 14) - 14, c.align)
        return "".join(rect(x0 + i * (self.s + 14), y, self.s, self.s, "none", c.ink.glyph, rx=self.s * .25, sw=1.8) for i in range(self.n))


@dataclass(frozen=True)
class Links:
    n: int = 5
    inline: bool = False

    def rows(self, c: Ctx) -> list[range]:
        half = math.ceil(self.n / 2)
        return [range(half), range(half, self.n)] if c.m and self.n > 4 else [range(self.n)]

    def h(self, w: float, c: Ctx) -> float:
        return len(self.rows(c)) * 28 - 16 if self.inline else 36 + self.n * 30

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if self.inline:
            out = ""
            for r, idx in enumerate(self.rows(c)):
                ws = [(60, 92, 76, 104, 68, 84)[i % 6] * (.8 if c.m else 1) for i in idx]
                gap = 24 if c.m else 36
                lx = place(x, w, sum(ws) + gap * (len(ws) - 1), c.align)
                out += "".join(bar(lx + sum(ws[:i]) + gap * i, y + 2 + r * 28, ws[i], 7, c.ink.glyph) for i in range(len(ws)))
            return out
        return bar(x, y + 4, 72, 9, c.ink.head) + "".join(bar(x, y + 44 + i * 30, (60, 92, 76, 104, 68, 84)[i % 6], 7, c.ink.glyph) for i in range(self.n))


@dataclass(frozen=True)
class Wordmark:
    def h(self, w: float, c: Ctx) -> float:
        return w * .17

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        wh = w * .17
        out = rect(x, y, wh, wh, c.ink.head, rx=wh * .22)
        cx = x + wh * 1.15
        for fw in (.6, .52, .66, .44, .58):
            out += rect(cx, y + wh * .12, wh * fw, wh * .88, c.ink.head, rx=wh * .1)
            cx += wh * fw + wh * .1
        return out


@dataclass(frozen=True)
class Progress:
    f: float = .62

    def h(self, w: float, c: Ctx) -> float:
        return 44

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return (bar(x, y + 4, w * .3, 7, c.ink.head) + bar(x + w - 90, y + 4, 90, 7, c.ink.glyph)
                + rect(x, y + 28, w, 10, c.ink.tint, rx=5) + rect(x, y + 28, w * self.f, 10, c.ink.btn, rx=5))


@dataclass(frozen=True)
class Slider:
    f: float = .4

    def h(self, w: float, c: Ctx) -> float:
        return 72

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return (bar(x, y + 4, w * .3, 8, c.ink.head) + bar(x + w - 70, y + 2, 70, 12, c.ink.head)
                + rect(x, y + 46, w, 8, c.ink.tint, rx=4) + rect(x, y + 46, w * self.f, 8, c.ink.btn, rx=4) + circle(x + w * self.f, y + 50, 13, c.ink.bg, c.ink.head, 2.5))


@dataclass(frozen=True)
class Bar:
    kind: str = "announce"

    def h(self, w: float, c: Ctx) -> float:
        return 44

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        if self.kind == "utility":
            if c.m:
                return bar(x + w / 2 - 80, y + 19, 160, 6, ink.glyph)
            out = "".join(circle(x + i * 170 + 6, y + 22, 6, "none", ink.glyph) + bar(x + i * 170 + 20, y + 19, 120, 6, ink.glyph) for i in range(3))
            return out + bar(x + w - 200, y + 19, 80, 6, ink.glyph) + bar(x + w - 100, y + 19, 100, 6, ink.glyph)
        bw = 220 if c.m else 420
        bx = x + (w - bw) / 2
        return rect(bx - 66, y + 10, 52, 24, ink.btn, rx=12) + bar(bx, y + 18, bw, 8, ink.head) + arrow(bx + bw + 24, y + 22, ink.head)


@dataclass(frozen=True)
class Nav:
    kind: str = "standard"
    links: int = 4

    def h(self, w: float, c: Ctx) -> float:
        if self.kind == "mega":
            return 64 + 420 if c.m else 72 + 312
        return 64 if c.m else 72

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        c = Ctx(c.ink, c.m, "left")
        return self.mobile(x, y, w, c.ink, c) if c.m else self.desk(x, y, w, c.ink, c)

    def links_at(self, x: float, y: float, n: int, ink: Ink, chevrons: bool = False) -> str:
        out = ""
        for i in range(n):
            lw = (56, 72, 48, 64, 60)[i % 5]
            out += bar(x, y - 3, lw, 7, ink.head if i == 0 and chevrons else ink.glyph)
            out += chevron(x + lw + 10, y, 3.5, ink.glyph, "down") if chevrons and i < 2 else ""
            x += lw + (40 if chevrons and i < 2 else 30)
        return out

    def desk(self, x: float, y: float, w: float, ink: Ink, c: Ctx) -> str:
        mid = y + 36
        out = ""
        right = button(x + w - 128, mid - 20, 128, "primary", ink, 40)
        if self.kind == "minimal":
            return Logo().draw(x, mid - 14, w, 28, c) + right
        if self.kind == "centered":
            out += self.links_at(x, mid, 3, ink) + Logo().draw(x, mid - 14, w, 28, replace_align(c, "center"))
            return out + self.links_at(x + w - 128 - 230, mid, 2, ink) + right
        out += Logo().draw(x, mid - 14, w, 28, c) + right + button(x + w - 128 - 108, mid - 20, 96, "secondary", ink, 40)
        if self.kind == "search":
            out += rect(x + 180, mid - 20, 340, 40, ink.tint, ink.border, rx=8) + lens(x + 200, mid - 2, 6, ink.glyph)
            out += bar(x + 222, mid - 3, 120, 6, ink.text) + text(x + 506, mid + 5, "⌘K", 13, ink.glyph, "end")
            return out + self.links_at(x + 560, mid, 3, ink)
        out += self.links_at(x + w / 2 - 170, mid, self.links, ink, chevrons=self.kind == "mega")
        if self.kind == "mega":
            py = y + 72
            out += rect(x - 24, py, w + 48, 296, ink.bg, ink.border, rx=14)
            for col in range(3):
                for row in range(3):
                    ix, iy = x + col * 260, py + 32 + row * 84
                    out += Icon(28).draw(ix, iy, 28, 28, c) + bar(ix + 44, iy + 4, 120, 9, ink.head) + bar(ix + 44, iy + 24, 170, 6, ink.text)
            out += draw_photo(x + 800, py + 32, w - 824, 160, ink, 10) + bar(x + 800, py + 212, 200, 10, ink.head) + bar(x + 800, py + 234, 260, 6, ink.text)
        return out

    def mobile(self, x: float, y: float, w: float, ink: Ink, c: Ctx) -> str:
        mid = y + 32
        if self.kind == "centered":
            return burger(x, mid - 7, ink.head) + Logo(24).draw(x, mid - 12, w, 24, replace_align(c, "center")) + circle(x + w - 12, mid, 11, "none", ink.head, 2)
        out = Logo(24).draw(x, mid - 12, w, 24, c)
        if self.kind == "minimal":
            return out + button(x + w - 104, mid - 18, 104, "primary", ink, 36)
        if self.kind == "search":
            out += lens(x + w - 70, mid - 2, 7, ink.head)
        out += burger(x + w - 22, mid - 7, ink.head)
        if self.kind == "mega":
            out = Logo(24).draw(x, mid - 12, w, 24, c) + cross(x + w - 18, mid - 8, 16, ink.head)
            for i in range(5):
                ry = y + 72 + i * 56
                out += line(x, ry + 56, x + w, ry + 56, ink.border, 1) + bar(x, ry + 24, (110, 90, 70, 100, 80)[i], 9, ink.head)
                out += chevron(x + w - 10, ry + 28, 5, ink.glyph, "down" if i < 2 else "right")
            out += button(x, y + 372, w, "secondary", ink) + button(x, y + 432, w, "primary", ink)
        return out


# ---------- containers ----------

def replace_align(c: Ctx, align: str) -> Ctx:
    return Ctx(c.ink, c.m, align) if align else c


def visible(k: Node, c: Ctx) -> bool:
    return not ((isinstance(k, Desk) and c.m) or (isinstance(k, Mob) and not c.m))


class Desk:
    def __init__(self, kid: Node):
        self.kid = kid

    def h(self, w: float, c: Ctx) -> float:
        return 0 if c.m else self.kid.h(w, c)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return "" if c.m else self.kid.draw(x, y, w, h, c)


class Mob:
    def __init__(self, kid: Node):
        self.kid = kid

    def h(self, w: float, c: Ctx) -> float:
        return self.kid.h(w, c) if c.m else 0

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return self.kid.draw(x, y, w, h, c) if c.m else ""


class Fixed:
    def __init__(self, w: float, kid: Node, mw: float = 0):
        self.w, self.kid, self.mw = w, kid, mw

    def h(self, w: float, c: Ctx) -> float:
        return self.kid.h(w, c)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        return self.kid.draw(x, y, w, h, c)


class Col:
    def __init__(self, *kids: Node, gap: float = 16, align: str = "", pad: float = -1, box: bool = False, fill: str = "",
                 rx: float = 12, mgap: float = -1, maxw: float = 0, minh: float = 0, mflat: bool = False,
                 strong: bool = False, op: float = 1):
        self.kids, self.gap, self.align, self.box, self.fill, self.rx = kids, gap, align, box, fill, rx
        self.pad, self.mgap, self.maxw, self.minh, self.mflat, self.strong, self.op = pad, mgap, maxw, minh, mflat, strong, op

    def framed(self, c: Ctx) -> bool:
        return bool(self.box or self.fill) and not (c.m and self.mflat)

    def inner(self, c: Ctx) -> Ctx:
        return Ctx(DARK if self.fill == "dark" else c.ink, c.m, self.align or c.align)

    def padding(self, c: Ctx) -> float:
        if c.m and self.mflat:
            return 0
        if self.pad >= 0:
            return min(self.pad, 20) if c.m and self.pad > 20 else self.pad
        return (20 if c.m else 28) if self.framed(c) else 0

    def spacing(self, c: Ctx) -> float:
        return self.mgap if c.m and self.mgap >= 0 else self.gap

    def width(self, w: float) -> float:
        return min(w, self.maxw or w)

    def heights(self, w: float, c: Ctx) -> list[tuple[Node, float]]:
        ic, p = self.inner(c), self.padding(c)
        pairs = [(k, k.h(self.width(w) - 2 * p, ic)) for k in self.kids if visible(k, ic)]
        return [(k, v) for k, v in pairs if v > 0]

    def h(self, w: float, c: Ctx) -> float:
        pairs = self.heights(w, c)
        total = sum(v for _, v in pairs) + self.spacing(c) * max(len(pairs) - 1, 0) + 2 * self.padding(c)
        return total if c.m else max(total, self.minh)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ic, p = self.inner(c), self.padding(c)
        cw = self.width(w)
        x = place(x, w, cw, c.align)
        out = ""
        if self.framed(c):
            fill = {"tint": c.ink.tint, "bg": c.ink.bg, "block": c.ink.block, "dark": DARK.bg}.get(self.fill, "none")
            stroke = c.ink.head if self.strong else c.ink.border if self.box else "none"
            out += rect(x, y, cw, h, fill, stroke, rx=self.rx, sw=2 if self.strong else 1.5)
        cy = y + p
        for k, kh in self.heights(w, c):
            out += k.draw(x + p, cy, cw - 2 * p, kh, ic)
            cy += kh + self.spacing(c)
        return out if self.op >= 1 else f'<g opacity="{self.op}">{out}</g>'


class Row:
    def __init__(self, *kids: Node, ws: tuple[float, ...] = (), gap: float = 48, valign: str = "top", m: str = "stack",
                 mrev: bool = False, mgap: float = 24):
        self.kids, self.ws, self.gap, self.valign, self.m, self.mrev, self.mgap = kids, ws, gap, valign, m, mrev, mgap

    def shown(self, c: Ctx) -> list[tuple[Node, float]]:
        ws = self.ws or (1,) * len(self.kids)
        pairs = [(k, wt) for k, wt in zip(self.kids, ws) if visible(k, c)]
        return pairs[::-1] if c.m and self.mrev else pairs

    def as_col(self, c: Ctx) -> Col:
        return Col(*(k for k, _ in self.shown(c)), gap=self.mgap)

    def widths(self, w: float, c: Ctx) -> list[float]:
        pairs = self.shown(c)
        if c.m and self.m == "scroll":
            return [w * .82] * len(pairs)
        fixed = [k.mw or k.w if isinstance(k, Fixed) and c.m else k.w if isinstance(k, Fixed) else 0 for k, _ in pairs]
        gap = self.mgap if c.m else self.gap
        free = w - sum(fixed) - gap * (len(pairs) - 1)
        flex = sum(wt for (k, wt) in pairs if not isinstance(k, Fixed)) or 1
        return [fw or free * wt / flex for fw, (k, wt) in zip(fixed, pairs)]

    def h(self, w: float, c: Ctx) -> float:
        if c.m and self.m == "stack":
            return self.as_col(c).h(w, c)
        return max((k.h(kw, c) for (k, _), kw in zip(self.shown(c), self.widths(w, c))), default=0)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        if c.m and self.m == "stack":
            return self.as_col(c).draw(x, y, w, h, c)
        gap = 16 if c.m and self.m == "scroll" else self.mgap if c.m else self.gap
        out, cx = "", x
        for (k, _), kw in zip(self.shown(c), self.widths(w, c)):
            kh = k.h(kw, c)
            dy = {"center": (h - kh) / 2, "bottom": h - kh}.get(self.valign, 0)
            out += k.draw(cx, y + dy, kw, h if self.valign == "top" else kh, c)
            cx += kw + gap
        return out


class Grid:
    def __init__(self, *kids: Node, cols: int = 3, mcols: int = 1, gap: float = 24, m: str = "wrap"):
        self.kids, self.cols, self.mcols, self.gap, self.m = kids, cols, mcols, gap, m

    def rows(self, c: Ctx) -> list[Row]:
        kids = [k for k in self.kids if visible(k, c)]
        if c.m and self.m == "scroll":
            return [Row(*kids, m="scroll")]
        n = self.mcols if c.m else self.cols
        groups = [kids[i:i + n] for i in range(0, len(kids), n)]
        return [Row(*g, *[Gap(0)] * (n - len(g)), gap=self.gap, mgap=16 if self.mcols > 1 else self.gap, m="keep") for g in groups]

    def h(self, w: float, c: Ctx) -> float:
        rows = self.rows(c)
        return sum(r.h(w, c) for r in rows) + self.gap * (len(rows) - 1)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out, cy = "", y
        for r in self.rows(c):
            rh = r.h(w, c)
            out += r.draw(x, cy, w, rh, c)
            cy += rh + self.gap
        return out


SEC_BG = {"bg": LIGHT.bg, "tint": LIGHT.tint, "dark": DARK.bg}


class Sec:
    def __init__(self, *kids: Node, bg: str = "bg", pad: float = 96, mpad: float = 56, gap: float = 48, mgap: float = 32,
                 align: str = "", narrow: float = 0, full: bool = False, h: float = 0, mh: float = 0, border: bool = False,
                 op: float = 1):
        self.col = Col(*kids, gap=gap, mgap=mgap, align=align)
        self.bg, self.pad, self.mpad, self.narrow, self.full = bg, pad, mpad, narrow, full
        self.min_h, self.min_mh, self.border, self.op = h, mh, border, op

    def inner(self, c: Ctx) -> Ctx:
        return Ctx(DARK if self.bg == "dark" else LIGHT, c.m, c.align)

    def box(self, w: float, c: Ctx) -> tuple[float, float]:
        if self.full and not c.m:
            return 0, w
        if c.m:
            return PAGE["mgutter"], w - 2 * PAGE["mgutter"]
        cw = min(self.narrow or PAGE["max"], w - 2 * PAGE["gutter"])
        return (w - cw) / 2, cw

    def h(self, w: float, c: Ctx) -> float:
        _, cw = self.box(w, c)
        p = self.mpad if c.m else self.pad
        return max(self.col.h(cw, self.inner(c)) + 2 * p, self.min_mh if c.m else self.min_h)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ox, cw = self.box(w, c)
        ic = self.inner(c)
        content = self.col.h(cw, ic)
        out = rect(x, y, w, h, SEC_BG[self.bg])
        out += self.col.draw(x + ox, y + (h - content) / 2, cw, content, ic)
        out += line(x, y + h, x + w, y + h, LIGHT.border, 1) if self.border else ""
        return out if self.op >= 1 else f'<g opacity="{self.op}">{out}</g>'


class Layer:
    def __init__(self, front: Node, kind: str = "photo", h: float = 780, mh: float = 720, valign: str = "center",
                 nav: bool = True, align: str = ""):
        self.front, self.kind, self.min_h, self.min_mh = front, kind, h, mh
        self.valign, self.nav, self.align = valign, nav, align

    def h(self, w: float, c: Ctx) -> float:
        return self.min_mh if c.m else self.min_h

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ic = Ctx(PHOTO, c.m, self.align)
        out = rect(x, y, w, h, PHOTO.bg) + mountain(x + w * .68, y + h * .45, min(w, h) * .2, PHOTO.tint)
        out += f'<rect x="{num(x)}" y="{num(y)}" width="{num(w)}" height="{num(h)}" fill="url(#scrim)"/>'
        if self.kind == "video":
            px, py = x + w - (36 if c.m else 96), y + h - (40 if c.m else 64)
            out += circle(px, py, 20, "none", PHOTO.head, 2) + bar(px - 6, py - 8, 4, 16, PHOTO.head) + bar(px + 2, py - 8, 4, 16, PHOTO.head)
        gutter = PAGE["mgutter"] if c.m else (w - min(PAGE["max"], w - 2 * PAGE["gutter"])) / 2
        cw = w - 2 * gutter
        if self.nav:
            out += Nav().draw(x + gutter, y, cw, 72, ic)
        fh = self.front.h(cw, ic)
        top = {"bottom": h - fh - (56 if c.m else 96), "center": (h - fh) / 2 + 24}[self.valign]
        return out + self.front.draw(x + gutter, y + top, cw, fh, ic)


class Float:
    def __init__(self, kid: Node, x: float = .5, y: float = .5, w: float = 480, anchor: str = "center", m: str = "same",
                 tall: bool = False):
        self.kid, self.x, self.y, self.w, self.anchor, self.m, self.tall = kid, x, y, w, anchor, m, tall

    def box(self, bx: float, by: float, bw: float, bh: float, c: Ctx) -> tuple[float, float, float, float] | None:
        if c.m and self.m == "hide":
            return None
        if c.m and self.m == "full":
            return bx, by, bw, bh
        if c.m and self.m == "sheet":
            fh = min(self.kid.h(bw, c), bh * .8)
            return bx, by + bh - fh, bw, fh
        if self.anchor == "full":
            return bx, by, bw, bh
        fw = min(self.w, bw - 32)
        fh = bh if self.tall and not c.m else self.kid.h(fw, c)
        if c.m and self.anchor == "br":
            return bx + 16, by + bh - fh - 92, bw - 32, self.kid.h(bw - 32, c)
        if c.m:
            return bx + (bw - fw) / 2, by + max(16, min(self.y * bh - fh / 2, bh - fh - 16)), fw, fh
        if self.anchor == "br":
            return bx + bw - fw - 24, by + bh - fh - 24, fw, fh
        if self.anchor == "right":
            return bx + bw - fw, by, fw, fh
        if self.anchor == "tl":
            return bx + self.x * bw, by + self.y * bh, fw, fh
        return bx + self.x * bw - fw / 2, by + self.y * bh - fh / 2, fw, fh


class Over:
    def __init__(self, base: Node, *floats: Float, dim: bool | str = False):
        self.base, self.floats, self.dim = base, floats, dim

    def h(self, w: float, c: Ctx) -> float:
        return self.base.h(w, c)

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        out = self.base.draw(x, y, w, h, c)
        out += rect(x, y, w, h, "#18181b", op=.4) if self.dim is True or (self.dim == "mobile" and c.m) else ""
        for f in self.floats:
            b = f.box(x, y, w, h, c)
            if b:
                fx, fy, fw, fh = b
                out += rect(fx + 4, fy + 10, fw, fh, "#000000", rx=14, op=.08) + f.kid.draw(fx, fy, fw, fh, Ctx(LIGHT, c.m, c.align))
                out += bar(fx + fw / 2 - 22, fy + 8, 44, 5, LIGHT.glyph) if c.m and f.m == "sheet" else ""
        return out


def draw_sidebar(x: float, y: float, w: float, h: float, ink: Ink, active: int) -> str:
    out = rect(x, y, w, h, ink.tint) + line(x + w, y, x + w, y + h, ink.border, 1) + Logo(26).draw(x + 20, y + 20, w, 26, Ctx())
    for i in range(8):
        iy = y + 80 + i * 40 + (28 if i >= 5 else 0)
        if i == 5:
            out += bar(x + 20, iy - 22, 60, 6, ink.glyph)
        if i == active:
            out += rect(x + 10, iy - 10, w - 20, 34, ink.bg, ink.border, rx=8, sw=1)
        out += rect(x + 22, iy, 14, 14, "none", ink.head if i == active else ink.glyph, rx=4, sw=1.8)
        out += bar(x + 48, iy + 4, (84, 100, 64, 92, 76, 70, 96, 60)[i], 7, ink.head if i == active else ink.glyph)
    ay = y + h - 72
    return out + rect(x + 10, ay, w - 20, 56, ink.bg, ink.border, rx=10, sw=1) + circle(x + 38, ay + 28, 15, ink.text) + bar(x + 62, ay + 18, 90, 8, ink.head) + bar(x + 62, ay + 32, 110, 6, ink.text) + chevron(x + w - 30, ay + 28, 4, ink.glyph, "down")


def draw_topbar(x: float, y: float, w: float, ink: Ink) -> str:
    out = line(x, y + 60, x + w, y + 60, ink.border, 1) + bar(x + 32, y + 27, 70, 7, ink.glyph) + text(x + 114, y + 35, "/", 15, ink.glyph) + bar(x + 130, y + 27, 96, 7, ink.head)
    return out + rect(x + w - 450, y + 12, 280, 36, ink.tint, ink.border, rx=8, sw=1) + lens(x + w - 430, y + 28, 6, ink.glyph) + text(x + w - 186, y + 35, "⌘K", 13, ink.glyph, "end") + button(x + w - 152, y + 12, 120, "primary", ink, 36)


def draw_topnav(x: float, y: float, w: float, ink: Ink) -> str:
    out = line(x, y + 64, x + w, y + 64, ink.border, 1) + Logo(26).draw(x + 32, y + 19, w, 26, Ctx())
    for i in range(5):
        lx = x + 220 + i * 110
        out += bar(lx, y + 29, 70, 7, ink.head if i == 1 else ink.glyph) + (line(lx, y + 63, lx + 70, y + 63, ink.head, 3) if i == 1 else "")
    return out + lens(x + w - 100, y + 30, 7, ink.glyph) + circle(x + w - 50, y + 32, 16, ink.text)


def draw_rail(x: float, y: float, h: float, ink: Ink) -> str:
    out = rect(x, y, 64, h, ink.btn) + rect(x + 18, y + 18, 28, 28, ink.bg, rx=7)
    out += "".join(rect(x + 22, y + 84 + i * 52, 20, 20, ink.bg if i == 1 else "none", ink.glyph if i != 1 else "none", rx=5, sw=1.8) for i in range(6))
    out += circle(x + 32, y + h - 40, 15, ink.glyph)
    out += rect(x + 64, y, 232, h, ink.tint) + line(x + 296, y, x + 296, y + h, ink.border, 1) + bar(x + 84, y + 28, 110, 11, ink.head)
    return out + Menu(9, 2).draw(x + 76, y + 70, 208, 330, Ctx())


def draw_tabbar(x: float, y: float, w: float, ink: Ink) -> str:
    out = rect(x, y, w, 76, ink.bg) + line(x, y, x + w, y, ink.border, 1)
    for i in range(4):
        cx = x + w * (i + .5) / 4
        on = i == 0
        out += rect(cx - 11, y + 14, 22, 22, ink.btn if on else "none", ink.glyph if not on else "none", rx=6, sw=1.8) + bar(cx - 18, y + 46, 36, 6, ink.head if on else ink.glyph)
    return out


class App:
    def __init__(self, *body: Node, nav: str = "side", mnav: str = "burger", h: float = 900, mh: float = 844, gap: float = 24,
                 pad: float = 32, active: int = 1, narrow: float = 0, back: bool = False):
        self.body = Col(*body, gap=gap, mgap=16)
        self.nav, self.mnav, self.min_h, self.min_mh, self.padding, self.active, self.narrow = nav, mnav, h, mh, pad, active, narrow
        self.back = back

    def h(self, w: float, c: Ctx) -> float:
        return self.min_mh if c.m else self.min_h

    def draw(self, x: float, y: float, w: float, h: float, c: Ctx) -> str:
        ink = c.ink
        out = rect(x, y, w, h, ink.bg)
        if c.m:
            top = 0
            if self.nav != "none":
                top = 56
                out += line(x, y + 56, x + w, y + 56, ink.border, 1) + bar(x + 52, y + 24, 110, 10, ink.head) + circle(x + w - 30, y + 28, 14, ink.text)
                out += chevron(x + 24, y + 28, 7, ink.head, "left") if self.back else burger(x + 16, y + 21, ink.head)
            p = 0 if self.padding == 0 else 16
            out += self.body.draw(x + p, y + top + p, w - 2 * p, self.body.h(w - 2 * p, c), c)
            if self.mnav == "tabs":
                out += draw_tabbar(x, y + h - 76, w, ink)
            if self.mnav == "bar":
                out += rect(x, y + h - 88, w, 88, ink.bg) + line(x, y + h - 88, x + w, y + h - 88, ink.border, 1) + button(x + 16, y + h - 72, w - 32, "primary", ink)
            return out
        mx, mw, top = x, w, 0
        if self.nav == "side":
            out += draw_sidebar(x, y, 248, h, ink, self.active)
            mx, mw = x + 248, w - 248
        if self.nav == "rail":
            out += draw_rail(x, y, h, ink)
            mx, mw = x + 296, w - 296
        if self.nav in ("side", "rail"):
            out += draw_topbar(mx, y, mw, ink)
            top = 60
        if self.nav == "top":
            out += draw_topnav(x, y, w, ink)
            top = 64
        p = self.padding
        bw = min(mw - 2 * p, self.narrow or (PAGE["max"] if self.nav == "top" else mw))
        bx = mx + (mw - bw) / 2
        return out + self.body.draw(bx, y + top + p, bw, self.body.h(bw, c), c)


# ---------- catalogue ----------
# [Agent] Small builders for content blocks that repeat across sections (a heading block, a plan card, a person).
# Each variant below is one node tree; its id is the file name and the anchor used in layouts.md.

def head(center: bool = False, title: int = 34, sub: int = 110, size: str = "h2") -> Col:
    return Col(Text(16, "label"), Text(title, size, maxw=760), *([Text(sub, maxw=600)] if sub else []), gap=14,
               align="center" if center else "")


def copy(title: int = 34, sub: int = 120, size: str = "display", center: bool = False) -> Col:
    return Col(Text(title, size, maxw=900 if center else 0), Text(sub, maxw=600), Gap(8), Btns(), gap=20,
               align="center" if center else "")


def person(center: bool = False) -> Node:
    row = Row(Fixed(40, Avatar(40)), Col(Text(14, "h3"), Text(22, "small"), gap=2), gap=12, valign="center", m="keep")
    return Col(row, maxw=220) if center else row


def proof() -> Row:
    return Row(Fixed(110, Avatars(4)), Stars(), gap=16, valign="center", m="keep")


def quote_card(chars: int = 150, stars: bool = False) -> Col:
    return Col(*([Stars()] if stars else []), Text(chars), Gap(4), person(), box=True, fill="bg", gap=16)


def plan(featured: bool = False, n: int = 5) -> Col:
    return Col(*([Badge(110, True)] if featured else []), Price(), Btn("primary" if featured else "secondary", 0), Rule(),
               Checks(n, 24), box=True, fill="dark" if featured else "bg", gap=20)


def post(ratio: float = .6) -> Col:
    return Col(Img(ratio), Text(12, "label"), Text(44, "h3"), Text(90, "small"), gap=10)


def member() -> Col:
    return Col(Img(1.1), Text(14, "h3"), Text(20, "small"), gap=8)


def step(i: int, chars: int = 90, kind: str = "circle") -> Col:
    return Col(Num(i, kind), Text(22, "h3"), Text(chars), gap=12)


def mini(chart: bool = False) -> Col:
    return Col(Text(12, "label"), Text(16, "h3"), Chart("bars", .4) if chart else Progress(.7), box=True, fill="bg", gap=10, pad=18)


def right(node: Node) -> Col:
    return Col(node, align="right")


def ruled(*kids: Node) -> list[Node]:
    out: list[Node] = []
    for k in kids:
        out += [Rule(), k]
    return out + [Rule()]


def title_row(chars: int = 14, action: Node | None = None) -> Row:
    return Row(Text(chars, "h2"), right(action or Btn("primary", 140)), valign="center", m="keep")


def ghost() -> list[Node]:
    return [title_row(), Table(7, 5)]


def facets() -> Col:
    return Col(*[Col(Text(10, "h3"), Field("check"), Field("check"), Field("check"), gap=10) for _ in range(3)], gap=28)


def tile(*kids: Node) -> Col:
    return Col(Text(20, "h3"), Text(60), *kids, box=True, fill="tint", gap=12)


def plan_row(featured: bool) -> Row:
    return Row(Col(Text(14, "h3"), Text(70, "small"), gap=8), Price(), Checks(3, 22), Col(Btn("primary" if featured else "secondary", 0)),
               ws=(2, 1.4, 2, 1.2), gap=40, valign="center")


def case(flip: bool) -> Row:
    story = Col(Text(30, "h2"), Text(140), Row(Stat(), Stat(), m="keep"), Btn("link", 160))
    return Row(*((story, Img(.72)) if flip else (Img(.72), story)), gap=80, valign="center", mrev=flip)


def option(on: bool) -> Col:
    return Col(Icon(), Text(16, "h3"), Text(40, "small"), box=True, gap=10, strong=on)


def nav(kind: str = "standard") -> Sec:
    return Sec(Nav(kind), pad=0, mpad=0, border=True)


def strip(kind: str) -> Sec:
    return Sec(Bar(kind), pad=0, mpad=0, bg="tint")


def auth(*kids: Node, card: bool = True, bg: str = "tint") -> Sec:
    return Sec(Col(*kids, box=card, fill="bg" if card else "", gap=18, maxw=440, align="center", mflat=True, pad=40),
               align="center", bg=bg, h=900, mh=844, mpad=32)


GHOST = Sec(Img(.16, "blank", mratio=.45), pad=32, mpad=20, op=.35)


@dataclass(frozen=True)
class Variant:
    id: str
    name: str
    node: Node
    phone: bool = False
    lead: bool = True


def navs() -> list[Variant]:
    return [
        Variant("standard", "Standard bar", nav()),
        Variant("centered-logo", "Centred logo", nav("centered")),
        Variant("minimal", "Logo + one action", nav("minimal")),
        Variant("search", "With search (docs, dev tools)", nav("search")),
        Variant("mega", "Mega menu, open", nav("mega")),
        Variant("announcement", "Announcement bar + bar", Col(strip("announce"), nav(), gap=0)),
        Variant("utility", "Utility bar + bar (local, shop)", Col(strip("utility"), nav(), gap=0)),
    ]


def heroes() -> list[Variant]:
    side = Img(2.8, "photo", mratio=.62)
    return [
        Variant("centered", "Centred stack", Sec(Badge(150), copy(center=True), Gap(8), Avatars(5), align="center", h=680, mh=600, gap=20)),
        Variant("shot-below", "Product screenshot below", Sec(copy(center=True), Img(.58, "shot", mratio=1.1), align="center", pad=88, gap=64)),
        Variant("split", "Split: text + product", Sec(Row(Col(copy(26), Gap(8), proof()), Img(.82, "shot", mratio=.9), ws=(5, 6), gap=64, valign="center"), h=760)),
        Variant("split-floating", "Split + floating detail cards", Sec(Row(copy(26), Over(Img(.8, "shot", mratio=.9), Float(mini(), -.07, .62, 230, "tl", "hide"), Float(mini(True), .64, -.07, 250, "tl", "hide")), ws=(5, 6), gap=88, valign="center"), h=780)),
        Variant("full-bleed", "Full-bleed photo", Layer(Col(Text(28, "display", maxw=760), Text(110, maxw=520), Gap(8), Btns(), gap=20), valign="bottom", h=820, mh=760), lead=False),
        Variant("video", "Video background", Layer(Col(Text(30, "display", maxw=900), Text(100, maxw=560), Gap(8), Btns(), gap=20, align="center"), kind="video", align="center"), lead=False),
        Variant("editorial", "Editorial big type", Sec(Text(40, "mega"), Row(Text(130, maxw=480), right(Btns()), valign="bottom", gap=64), Img(.34, "photo", mratio=.75), gap=40, pad=72)),
        Variant("bento", "Bento hero", Sec(copy(30, center=True), Col(Row(Img(.62, "shot"), Col(Kpi(), Img(.55, "photo"), gap=24), ws=(2, 1), gap=24), Row(Col(Chart("area", .42), box=True), Col(Checks(4, 22), box=True, fill="tint"), Img(.6, "map"), gap=24, m="scroll"), gap=24), align="center", gap=56)),
        Variant("carousel", "Rotating slides", Sec(Col(Text(30, "h1", maxw=800), Text(90, maxw=560), align="center", gap=16), Row(side, Img(.56, "photo", mratio=.62), side, ws=(1, 5, 1), gap=24, m="scroll"), Col(Dots(4, 1), Note("auto-advances · pause button"), align="center", gap=16), gap=40)),
        Variant("terminal", "Terminal / code", Sec(Row(Col(Badge(170), Text(24, "display"), Text(110, maxw=520), Gap(8), Row(Fixed(164, Btn("primary", 164)), Field("code", label=False, w=330), gap=12), gap=20), Img(.7, "code", mratio=.6), ws=(1, 1), gap=64, valign="center"), h=760)),
        Variant("form", "Form in the hero", Sec(Row(Col(Text(26, "display"), Text(110, maxw=520), Checks(3)), Col(Text(20, "h3"), Field(), Field(), Field("select"), Btn("primary", 0), Text(40, "small"), box=True, fill="bg", gap=16), ws=(6, 5), gap=80, valign="center"), bg="tint", h=760)),
        Variant("phone", "App: phone screens", Sec(Row(Col(Text(24, "display"), Text(100, maxw=480), Gap(8), Row(Fixed(170, Btn("store", 170)), Fixed(170, Btn("store", 170)), gap=12, m="keep"), Gap(8), proof(), gap=20), Row(Col(Phone(250, 160), align="center"), Col(Phone(250, 160, "photo"), align="center"), gap=24, m="keep"), gap=64, valign="center"), h=760)),
        Variant("search", "Search-first (marketplace)", Sec(Col(Text(30, "display", maxw=900), Text(90, maxw=560), align="center", gap=20), Col(Field("search", label=False, big=True), Chips(6, 104), gap=20, align="center", maxw=760), Row(*[Col(Img(.75), Text(14, "h3"), gap=10) for _ in range(4)], gap=24, m="scroll"), align="center", bg="tint", gap=40)),
    ]


def logos() -> list[Variant]:
    cell = Col(Marks(1, 1), box=True, pad=28, rx=0, align="center")
    return [
        Variant("row", "Single row", Sec(Text(40, "label"), Marks(6), align="center", pad=56, gap=28)),
        Variant("grid", "Bordered grid", Sec(Row(Col(Text(26, "h2"), Text(90), Btn("link", 150)), Grid(*[cell] * 8, cols=4, mcols=2, gap=0), ws=(1, 2), gap=64, valign="center"))),
        Variant("marquee", "Moving marquee", Sec(Text(40, "label"), Marks(9, wrap=False), Marks(9, wrap=False, offset=-110), Note("loops · static if reduced motion"), align="center", full=True, pad=56, gap=24)),
        Variant("quote", "Logos + one quote", Sec(Row(Col(Quote(), Text(90, "h2"), person()), Grid(*[cell] * 6, cols=2, mcols=2, gap=0), gap=80, valign="center"))),
        Variant("ratings", "Ratings strip", Sec(Grid(*[Col(Stars(), Text(18, "small"), gap=8) for _ in range(3)], Col(Avatars(6), Text(30, "small"), gap=8), cols=4, mcols=2, gap=32), pad=48, bg="tint")),
        Variant("result-cards", "Logo + result cards", Sec(head(), Grid(*[Col(Marks(1, 1), Stat(), Text(60, "small"), Btn("link", 130), box=True, gap=16) for _ in range(4)], cols=4, m="scroll"))),
    ]


def stats() -> list[Variant]:
    return [
        Variant("row", "Inline row", Sec(Grid(*[Col(Stat(), align="center") for _ in range(4)], cols=4, mcols=2, gap=24), pad=72)),
        Variant("ruled", "Ruled, left-aligned", Sec(Text(34, "h2", maxw=640), Grid(*[Col(Rule(), Stat(), Text(60, "small"), gap=20) for _ in range(4)], cols=4, mcols=2))),
        Variant("split", "Story + 2×2 numbers", Sec(Row(Col(Text(16, "label"), Text(34, "h2"), Text(200)), Grid(*[Col(Stat(), box=True, fill="tint")] * 4, cols=2, mcols=2, gap=16), gap=80, valign="center"))),
        Variant("big", "One big number", Sec(Text(5, "mega"), Text(80, "h2", maxw=760), Text(30, "small"), align="center", bg="dark", gap=24)),
        Variant("trend", "Numbers with trend", Sec(head(), Grid(*[Col(Text(14, "label"), Stat(), Chart("area", .32), box=True) for _ in range(3)], cols=3))),
    ]


def features() -> list[Variant]:
    text_block = Col(Text(16, "label"), Text(30, "h2"), Text(140), Checks(3))
    sticky = Row(Col(*[k for i in range(3) for k in (step(i + 1, 140), Gap(140))]), Col(Note("sticky: swaps as each step passes"), Img(.9, "shot"), gap=16), gap=80)
    return [
        Variant("alternating", "Alternating rows", Sec(head(center=True), Row(Img(.72, "shot"), text_block, gap=80, valign="center"), Row(text_block, Img(.72, "shot"), gap=80, valign="center", mrev=True), gap=96, mgap=48)),
        Variant("bento", "Bento grid", Sec(head(center=True), Col(Row(tile(Img(.45, "shot")), tile(Chart("bars", .6)), ws=(2, 1), gap=24), Row(tile(Img(.62)), tile(Field("search", label=False), Rows(2, status=False)), tile(Img(.62, "map")), gap=24), gap=24))),
        Variant("tabs", "Tabs + one big screenshot", Sec(head(center=True), Col(Tabs(4, 0, "pill"), Img(.56, "shot", mratio=1.0), Text(100, maxw=640), align="center", gap=28))),
        Variant("sticky", "Sticky scroll-telling", Sec(head(), Desk(sticky), Mob(Col(*[k for i in range(3) for k in (step(i + 1), Img(.7, "shot"))], gap=24)))),
        Variant("icon-grid", "Icon grid (slop tell)", Sec(head(), Grid(*[Col(Icon(), Text(20, "h3"), Text(80), gap=12) for _ in range(6)], cols=3, gap=48))),
        Variant("ui-cards", "Cards with real UI crops", Sec(head(), Grid(*[Col(Img(.66, "shot"), Text(20, "h3"), Text(80), box=True, fill="tint") for _ in range(3)], cols=3, m="scroll"))),
        Variant("numbered-shot", "Screenshot + numbered points", Sec(head(center=True), Img(.5, "shot", pins=3, mratio=.9), Grid(*[step(i + 1) for i in range(3)], cols=3), gap=56)),
        Variant("accordion", "Accordion + changing visual", Sec(Row(Col(Text(16, "label"), Text(30, "h2"), Mob(Img(.7, "shot")), Gap(8), Acc(4, 0, 34)), Desk(Img(.9, "shot")), ws=(5, 6), gap=80, valign="center"))),
        Variant("old-new", "Old way vs new way", Sec(head(center=True), Row(Col(Text(16, "h3"), Checks(5, 30, "cross"), box=True, fill="tint"), Col(Text(16, "h3"), Checks(5, 30), box=True, fill="dark"), gap=24), narrow=1000)),
    ]


def showcase() -> list[Variant]:
    return [
        Variant("annotated", "Annotated screenshot", Sec(head(center=True), Row(Img(.66, "shot", pins=3, mratio=.9), Fixed(300, Legend(3)), gap=56, valign="center"))),
        Variant("side-notes", "Notes on both sides", Sec(head(center=True), Desk(Row(Fixed(250, Legend(2)), Img(.8, "shot", pins=4), Fixed(250, Legend(2, 3)), gap=40, valign="center")), Mob(Col(Img(.9, "shot", pins=4), Legend(4), gap=24)))),
        Variant("before-after", "Before / after slider", Sec(head(center=True), Img(.5, "compare", mratio=.9), Note("drag · arrow keys move it"), align="center")),
        Variant("devices", "Desktop + phone", Sec(head(center=True), Desk(Over(Img(.56, "shot"), Float(Phone(220), .86, .62, 220))), Mob(Col(Phone(240, 220), align="center")))),
        Variant("live-demo", "Live demo embed", Sec(head(center=True), Col(Row(Field(label=False), Fixed(150, Btn("primary", 150)), gap=12, mgap=12), Img(.42, "shot", mratio=.9), box=True, fill="tint", gap=20), Note("works without signup"), align="center")),
        Variant("crops", "Full shot + zoomed crops", Sec(head(), Img(.48, "shot", mratio=.8), Grid(*[Col(Img(.7, "shot"), Text(30, "small"), gap=10) for _ in range(3)], cols=3, m="scroll"), gap=32)),
    ]


def steps() -> list[Variant]:
    return [
        Variant("three", "Three steps in a row", Sec(head(center=True), Grid(*[Col(Img(.62, "shot"), Num(i + 1), Text(22, "h3"), Text(90), gap=14) for i in range(3)], cols=3, gap=40))),
        Variant("timeline", "Vertical timeline", Sec(Row(Col(Text(16, "label"), Text(30, "h2"), Text(120), Btn("secondary")), Timeline(4), ws=(2, 3), gap=80))),
        Variant("code", "Steps with code", Sec(head(), Col(*[Row(step(i + 1), Img(.3, "code", mratio=.5), ws=(2, 3), gap=56, valign="center") for i in range(3)], gap=40))),
        Variant("stepper", "Stepper + one panel", Sec(head(center=True), Col(Stepper(3, 1), align="center"), Row(Col(Text(22, "h3"), Text(140), Checks(3)), Img(.62, "shot"), gap=64, valign="center"))),
        Variant("numbers", "Big numerals, no images", Sec(head(), Grid(*[Col(Num(i + 1, "big"), Rule(), Text(22, "h3"), Text(110), gap=16) for i in range(3)], cols=3, gap=48))),
    ]


def testimonials() -> list[Variant]:
    return [
        Variant("single", "One big quote", Sec(Quote(), Text(160, "h2", maxw=900), person(center=True), align="center", gap=28)),
        Variant("wall", "Wall of quotes", Sec(head(center=True), Masonry(9, 3), Mob(Btn("secondary")))),
        Variant("carousel", "Card carousel", Sec(Row(Text(30, "h2"), Desk(right(Arrows())), valign="bottom"), Row(*[quote_card(160, True) for _ in range(3)], gap=24, m="scroll"), Col(Dots(5, 0), align="center"))),
        Variant("case-studies", "Case-study cards", Sec(head(), Grid(*[Col(Img(.56), Marks(1, 1), Stat(), Text(70, "small"), Btn("link", 140), box=True, gap=16) for _ in range(3)], cols=3, m="scroll"))),
        Variant("video", "Video + quote", Sec(Row(Img(.62, "video"), Col(Quote(), Text(110, "h2"), person(), Marks(1, 1)), gap=64, valign="center"))),
        Variant("photo-split", "Photo + quote split", Sec(Row(Img(1.0, mratio=.8), Col(Stars(), Text(120, "h2"), person(), Rule(), Row(Stat(), Stat(), m="keep")), gap=80, valign="center"), bg="tint")),
    ]


def pricing() -> list[Variant]:
    enterprise = Col(Text(12, "h3"), Text(14, "h2"), Text(60, "small"), Btn("secondary", 0), Rule(), Checks(5, 24), box=True, gap=20)
    return [
        Variant("three", "Three cards, middle featured", Sec(head(center=True), Grid(plan(), plan(True), plan(), cols=3))),
        Variant("toggle", "Monthly / yearly toggle", Sec(head(center=True), Col(Toggle(), align="center"), Grid(plan(), plan(True), plan(), cols=3), gap=32)),
        Variant("two", "Two cards", Sec(head(center=True), Grid(plan(n=6), plan(True, 6), cols=2), narrow=920)),
        Variant("four", "Four with Enterprise", Sec(head(center=True), Grid(plan(n=4), plan(n=5), plan(True, 6), enterprise, cols=4))),
        Variant("calculator", "Usage calculator", Sec(head(center=True), Row(Col(Slider(.35), Slider(.6), Text(16, "label"), Chips(3, 110, 1), box=True, gap=24), Col(Price(), Text(80, "small"), Btn("primary", 0), Rule(), Checks(3, 24), box=True, fill="dark", gap=20), ws=(3, 2), gap=24))),
        Variant("table", "Comparison table", Sec(head(center=True), Compare(9, 3, 1))),
        Variant("enterprise", "Enterprise band", Sec(Row(Col(Text(16, "label"), Text(30, "h2"), Text(140)), Col(Checks(4, 30), Btns()), gap=80, valign="center"), bg="dark")),
        Variant("single", "One plan", Sec(Col(Badge(120), Price(), Text(90), Grid(Checks(4, 24), Checks(4, 24), cols=2, mcols=1, gap=0), Btn("primary", 0), Text(40, "small"), box=True, gap=24, maxw=640), align="center")),
        Variant("rows", "Stacked plan rows", Sec(head(), Col(*ruled(*[plan_row(i == 1) for i in range(3)]), gap=28))),
    ]


def faq() -> list[Variant]:
    return [
        Variant("accordion", "Centred accordion", Sec(Col(Text(30, "h2"), Text(80), align="center", gap=14), Acc(6, 0), narrow=800)),
        Variant("two-col", "Heading left, accordion right", Sec(Row(Col(Text(16, "label"), Text(24, "h2"), Text(90), Btn("link", 160)), Acc(6, 0), ws=(1, 2), gap=80))),
        Variant("categories", "Categorised", Sec(head(center=True), Col(Field("search", label=False), maxw=560), Row(Fixed(240, Desk(Menu(5, 0))), Col(Mob(Chips(5, 90, 0)), Acc(5, 0), gap=24), gap=56), align="center", gap=40)),
        Variant("grid", "Answers in a grid", Sec(head(), Grid(*[Col(Text(40, "h3"), Text(160), gap=12) for _ in range(6)], cols=2, gap=48))),
        Variant("with-contact", "Accordion + contact card", Sec(Text(30, "h2"), Row(Acc(5, 0), Fixed(340, Col(Col(Avatars(3), Text(24, "h3"), Text(80), Btn("secondary", 0), box=True, fill="tint", gap=16))), gap=56))),
    ]


def trust() -> list[Variant]:
    return [
        Variant("badges", "Certifications + claims", Sec(Row(Col(Text(16, "label"), Text(30, "h2"), Text(140), Btn("link", 180)), Grid(*[Col(Icon(48, True), Text(14, "h3"), Text(40, "small"), box=True, gap=12)] * 4, cols=2, mcols=2, gap=16), gap=80, valign="center"))),
        Variant("claims", "Plain claims list", Sec(Row(Col(Text(16, "label"), Text(36, "h2")), Col(*ruled(*[Col(Text(30, "h3"), Text(120), gap=10) for _ in range(4)]), gap=24), ws=(2, 3), gap=80))),
        Variant("data-flow", "Where your data goes", Sec(head(center=True), Flow(3), Col(Text(90, "small"), align="center"))),
    ]


def ctas() -> list[Variant]:
    return [
        Variant("centered", "Centred", Sec(Text(30, "h1", maxw=800), Text(90, maxw=520), Btns(), align="center", bg="tint", gap=20)),
        Variant("split", "Line left, buttons right", Sec(Row(Col(Text(30, "h2"), Text(80)), right(Btns()), valign="center", gap=64), bg="dark", pad=72)),
        Variant("inline-form", "Inline email form", Sec(Text(30, "h2", maxw=700), Text(80, maxw=500), Col(Row(Field(label=False), Fixed(150, Btn("primary", 150)), gap=12, mgap=12), maxw=520), Text(40, "small"), align="center", gap=20)),
        Variant("card-visual", "Card with product crop", Sec(Col(Row(Col(Text(28, "h2"), Text(100), Gap(8), Btns()), Img(.62, "shot", mratio=.7), gap=56, valign="center"), fill="tint", pad=56, rx=24))),
        Variant("big-type", "Big closing line", Sec(Text(30, "mega"), Btn("primary", 180), bg="dark", gap=40, pad=120)),
    ]


def newsletters() -> list[Variant]:
    form = Row(Field(label=False), Fixed(140, Btn("primary", 140)), gap=12, mgap=12)
    return [
        Variant("inline", "One-line strip", Sec(Row(Col(Text(26, "h3"), Text(70, "small"), gap=8), form, gap=64, valign="center"), pad=48, border=True)),
        Variant("card", "Centred card", Sec(Col(Text(26, "h2"), Text(90), form, Text(44, "small"), box=True, gap=18, maxw=640, align="center"), align="center", bg="tint")),
        Variant("split-image", "Split with image", Sec(Row(Img(.8), Col(Text(16, "label"), Text(28, "h2"), Text(110), Field(), Btn("primary", 160), Text(40, "small")), gap=80, valign="center"))),
        Variant("issue", "Form + past issue", Sec(Row(Col(Text(28, "h2"), Checks(4), Field(label=False), Btn("primary", 160)), Col(Img(1.1, "doc", maxw=420), align="center"), gap=80, valign="center"))),
    ]


def team() -> list[Variant]:
    return [
        Variant("grid", "Photo grid", Sec(head(), Grid(*[member() for _ in range(8)], cols=4, mcols=2, gap=32))),
        Variant("list", "Compact list, no photos", Sec(head(), Grid(*[Col(Rule(), Text(16, "h3"), Text(24, "small"), gap=10) for _ in range(9)], cols=3, gap=32))),
        Variant("founder", "Founder letter", Sec(Row(Img(1.25, mratio=.9), Col(Text(16, "label"), Text(30, "h2"), Text(260), Text(200), Text(14, "h3"), Text(24, "small")), gap=80, valign="center"))),
        Variant("hiring", "Avatar cluster + hiring", Sec(Avatars(9, 44), Text(30, "h2", maxw=700), Text(100, maxw=520), Btn("primary", 180), align="center", gap=20)),
        Variant("filter", "Filterable grid", Sec(Text(26, "h2"), Chips(6, 96, 0), Grid(*[member() for _ in range(8)], cols=4, mcols=2, gap=32), gap=32)),
    ]


def blog() -> list[Variant]:
    listing = Row(Fixed(160, Text(12, "small")), Col(Text(52, "h3"), Text(130, "small"), gap=8), gap=32, mgap=8)
    toc = Fixed(220, Desk(Col(Note("sticky"), Menu(6, 1), gap=16)))
    aside = Fixed(240, Desk(Col(Col(Text(20, "h3"), Text(60, "small"), Field(label=False), Btn("primary", 0), box=True, fill="tint", gap=12))))
    return [
        Variant("featured", "Featured post + grid", Sec(Row(Img(.62), Col(Badge(100), Text(40, "h2"), Text(140), person()), gap=56, valign="center"), Grid(post(), post(), post(), cols=3, m="scroll"))),
        Variant("list", "Dated list", Sec(Text(20, "h1"), Col(*ruled(*[listing] * 5), gap=24), narrow=880)),
        Variant("sidebar", "Grid + sidebar", Sec(Mob(Chips(5, 90, 0)), Row(Grid(*[post()] * 4, cols=2, gap=32), Fixed(300, Desk(Col(Field("search", label=False), Menu(6, 0), Col(Text(20, "h3"), Field(label=False), Btn("primary", 0), box=True, fill="tint", gap=14), gap=28))), gap=56))),
        Variant("magazine", "Magazine front", Sec(Row(Col(Img(.66), Text(40, "h1"), Text(140)), Col(*[Row(Fixed(120, Img(.75)), Col(Text(12, "label"), Text(40, "h3"), gap=8), gap=16, valign="center", m="keep")] * 4, gap=24), ws=(3, 2), gap=48), Grid(*[post(.66)] * 4, cols=4, m="scroll"))),
        Variant("article", "Article", Sec(Badge(100), Text(60, "h1"), person(), Img(.5), Text(400), Text(300), Text(30, "h2"), Text(350), Col(Quote(), Text(100, "h2"), gap=8), Text(300), narrow=720, gap=28)),
        Variant("article-toc", "Article + sticky contents", Sec(Row(toc, Col(Mob(Field("select")), Text(60, "h1"), person(), Img(.5), Text(400), Text(30, "h2"), Text(300), gap=24), aside, gap=48))),
    ]


def portfolio() -> list[Variant]:
    screen = Layer(Col(Text(20, "h1"), Text(40, "small"), gap=12), valign="bottom", nav=False, h=720, mh=560)
    return [
        Variant("grid", "Uniform grid", Sec(head(), Grid(*[Col(Img(.75), Text(20, "h3"), Text(30, "small"), gap=10)] * 6, cols=3, gap=32))),
        Variant("masonry", "Masonry", Sec(head(), Masonry(10, 3, "photo"))),
        Variant("featured", "Asymmetric, one featured", Sec(Row(Img(1.02), Col(Img(.74), Img(.74), gap=24), ws=(3, 2), gap=24), Row(Img(.7), Img(.7), Img(.7), gap=24, m="scroll"), gap=24)),
        Variant("case-rows", "Alternating case studies", Sec(case(False), case(True), gap=96)),
        Variant("full-bleed", "One project per screen", Col(screen, screen, gap=0)),
        Variant("scroller", "Horizontal scroller", Sec(Row(Text(26, "h2"), Desk(right(Arrows())), valign="bottom"), Row(*[Col(Img(1.2), Text(20, "h3"), gap=10)] * 3, Col(Img(3.0, mratio=1.2), Text(8, "h3"), gap=10), ws=(1, 1, 1, .4), gap=24, m="scroll"), Note("scrolls sideways · drag, arrows or keys"))),
    ]


def events() -> list[Variant]:
    slot = Row(Fixed(120, Text(10, "label")), Col(Text(40, "h3"), Text(30, "small"), gap=8), Fixed(120, Badge(100)), gap=32, mgap=8)
    return [
        Variant("ruled", "Ruled timetable", Sec(head(), Col(*ruled(*[slot] * 5), gap=20), narrow=960)),
        Variant("day-tabs", "Day tabs", Sec(head(center=True), Col(Tabs(3, 0, "pill"), align="center"), Col(*ruled(*[slot] * 4), gap=20), narrow=960)),
        Variant("tracks", "Multi-track grid", Sec(head(), Agenda(3, 6))),
        Variant("day-cards", "Days as panels", Sec(head(), Grid(*[Col(Text(10, "h3"), Text(20, "small"), Rule(), *[Col(Text(8, "label"), Text(30, "h3"), gap=6)] * 4, box=True, gap=16)] * 3, cols=3, m="scroll"))),
    ]


def contact() -> list[Variant]:
    line_item = Row(Fixed(32, Icon(32)), Col(Text(10, "h3"), Text(24, "small"), gap=4), gap=16, m="keep", valign="center")
    return [
        Variant("centered", "Centred form", Sec(Col(Text(24, "h2"), Text(90), align="center", gap=14), Field(), Field(), Field("area"), Btn("primary", 0), Text(50, "small"), narrow=600, gap=20)),
        Variant("split", "Details left, form right", Sec(Row(Col(Text(16, "label"), Text(26, "h2"), Text(120), Gap(8), line_item, line_item, line_item, gap=20), Col(Grid(Field(), Field(), cols=2, gap=16), Field(), Field("select"), Field("area"), Btn("primary", 0), box=True, gap=18), ws=(2, 3), gap=80))),
        Variant("map", "Map + address and hours", Sec(Row(Img(.8, "map"), Col(Text(20, "h2"), Text(60), KV(4), Btns()), gap=64, valign="center"))),
        Variant("routes", "Routes by need", Sec(head(center=True), Grid(*[Col(Icon(), Text(14, "h3"), Text(80), Btn("link", 150), box=True, gap=14)] * 3, cols=3))),
        Variant("help-hub", "Help hub", Sec(Text(26, "h1", maxw=700), Col(Field("search", label=False, big=True), maxw=640), Chips(5, 110), Grid(*[Col(Text(18, "h3"), Text(70, "small"), Btn("link", 140), box=True, fill="bg", gap=12, align="left")] * 3, cols=3), align="center", bg="tint", gap=28)),
    ]


def footers() -> list[Variant]:
    return [
        Variant("mega", "Mega footer", Sec(Row(Col(Logo(), Text(80, "small"), Row(Field(label=False), Fixed(120, Btn("primary", 120)), gap=8, mgap=12), gap=20), Grid(*[Links(5)] * 4, cols=4, mcols=2, gap=32), ws=(2, 3), gap=80), Rule(), Row(Text(40, "small"), right(Icons(4)), valign="center", m="keep"), bg="tint", pad=72, gap=40)),
        Variant("minimal", "One line", Sec(Row(Logo(), Links(4, True), right(Icons(3)), valign="center", gap=32, mgap=20), pad=36, mpad=32)),
        Variant("centered", "Centred stack", Sec(Logo(), Links(5, True), Icons(4), Text(40, "small"), align="center", gap=28, pad=64)),
        Variant("wordmark", "Giant wordmark", Sec(Grid(*[Links(4)] * 4, cols=4, mcols=2), Wordmark(), Row(Text(40, "small"), right(Icons(4)), valign="center", m="keep"), bg="dark", gap=48)),
        Variant("local", "Address, hours, map", Sec(Row(Col(Logo(), Text(60, "small"), Text(20, "h3"), Text(24, "small"), gap=14), Col(Text(10, "h3"), KV(5), gap=8), Img(.6, "map"), gap=56), Rule(), Text(60, "small"), bg="tint", pad=64, gap=32)),
    ]


def pages() -> list[tuple[str, str, list[Variant]]]:
    entry = Row(Fixed(180, Col(Text(12, "small"), Badge(80), gap=10)), Col(Text(40, "h2"), Img(.5, "shot"), Text(220), Checks(3)), gap=48, mgap=12)
    compact = Row(Fixed(110, Text(10, "small")), Fixed(90, Badge(76)), Text(90), gap=24, valign="center", mgap=8)
    docs_cards = Grid(*[Col(Icon(), Text(16, "h3"), Text(70, "small"), Btn("link", 120), box=True, gap=12)] * 6, cols=3)
    return [
        ("changelog", "Changelog", [
            Variant("dated", "Dated entries", Sec(Text(20, "h1"), *ruled(entry, entry), narrow=1000, gap=40)),
            Variant("cards", "Entry cards", Sec(Text(20, "h1"), Col(*[Row(Img(.62, "shot"), Col(Badge(90), Text(36, "h3"), Text(120), Btn("link", 130), gap=12), gap=40, valign="center")] * 3, gap=32))),
            Variant("compact", "Compact typed list", Sec(Text(20, "h1"), Col(*ruled(*[compact] * 7), gap=14), narrow=960)),
        ]),
        ("docs", "Docs landing", [
            Variant("search-first", "Search-first docs home", Col(Sec(Text(20, "h1"), Col(Field("search", label=False), maxw=640), Chips(5, 100), align="center", bg="tint", gap=24), Sec(docs_cards), gap=0)),
            Variant("three-pane", "Three-pane docs page", App(Row(Fixed(240, Desk(Menu(14, 3, True))), Col(Mob(Field("select", label=False)), Text(10, "small"), Text(30, "h1"), Text(300), Img(.3, "code", mratio=.6), Text(24, "h2"), Text(260), gap=20), Fixed(200, Desk(Col(Text(12, "label"), Menu(5, 1), gap=12))), gap=48), nav="top", h=980)),
            Variant("quickstart", "Quickstart by stack", Sec(head(), Tabs(4, 0, "pill"), Img(.28, "code", mratio=.6), Grid(*[Col(Text(18, "h3"), Text(70, "small"), Btn("link", 130), box=True, gap=12)] * 3, cols=3), gap=28)),
        ]),
        ("careers", "Careers", [
            Variant("roles", "Values + open roles", Col(Sec(Row(Col(Text(16, "label"), Text(28, "h1"), Text(140), Btn("primary", 170)), Img(.7), gap=64, valign="center")), Sec(Text(14, "h2"), Grid(*[Col(Text(20, "h3"), Text(100), gap=10)] * 3, cols=3), Text(18, "h2"), *[Col(Text(12, "h3"), Rows(2, status=False, action=True), gap=8)] * 2, gap=32, bg="tint"), gap=0)),
            Variant("table", "Searchable roles table", Sec(Text(20, "h1"), Row(Field("search", label=False), Field("select", label=False), Field("select", label=False), ws=(2, 1, 1), gap=12, mgap=12), Table(8, 4), gap=24)),
            Variant("role", "Role page + apply card", Sec(Row(Col(Text(10, "small"), Text(30, "h1"), Chips(3, 110), Text(260), Text(18, "h2"), Checks(5, 40), Text(18, "h2"), Checks(4, 40)), Fixed(340, Col(Col(Text(20, "h3"), Text(60, "small"), Btn("primary", 0), Rule(), KV(4), box=True, gap=16))), gap=64))),
        ]),
        ("not-found", "404", [
            Variant("centered", "Centred message", Sec(Text(3, "mega"), Text(30, "h2"), Text(80), Btns(), align="center", h=720, mh=640, gap=20)),
            Variant("search", "Search + popular pages", Sec(Text(26, "h1"), Text(90), Field("search", label=False), Text(14, "label"), Rows(4, status=False), narrow=640, gap=20)),
            Variant("links", "Split with useful links", Sec(Row(Col(Text(3, "mega"), Text(24, "h2"), Text(80), Btn("primary", 160)), Grid(*[Col(Icon(), Text(16, "h3"), Text(50, "small"), box=True, gap=12)] * 4, cols=2, gap=16), gap=80, valign="center"), h=720)),
        ]),
        ("legal", "Legal / privacy", [
            Variant("toc", "Sticky contents + text", Sec(Row(Fixed(260, Desk(Col(Note("sticky"), Menu(10, 2), gap=16))), Col(Mob(Field("select")), Text(20, "h1"), Text(30, "small"), Text(400), Text(26, "h2"), Text(500), Text(26, "h2"), Text(400), gap=24), gap=64), narrow=1100)),
            Variant("summary", "Plain-words summary first", Sec(Text(20, "h1"), Text(30, "small"), Col(Text(20, "h3"), Checks(5, 50), box=True, fill="tint", gap=16), Text(26, "h2"), Text(400), Text(26, "h2"), Text(300), narrow=760, gap=24)),
        ]),
        ("waitlist", "Waitlist", [
            Variant("centered", "Centred email capture", Sec(Logo(), Text(28, "display", maxw=900), Text(100, maxw=520), Col(Row(Field(label=False), Fixed(150, Btn("primary", 150)), gap=12, mgap=12), maxw=520), Col(Avatars(4), Text(24, "small"), align="center", gap=8), align="center", h=760, gap=24)),
            Variant("split", "Form + product preview", Sec(Row(Col(Badge(130), Text(26, "display"), Text(110), Row(Field(label=False), Fixed(150, Btn("primary", 150)), gap=12, mgap=12), Text(30, "small"), gap=20), Img(.75, "shot"), ws=(5, 6), gap=64, valign="center"), h=760)),
            Variant("position", "After signup: your place", Sec(Col(Text(16, "label"), Text(6, "mega"), Text(90), Field("code"), Grid(*[Btn("secondary", 0)] * 3, cols=3, mcols=3, gap=12), Progress(.4), box=True, gap=20, maxw=600, align="center"), align="center", bg="tint", h=760)),
        ]),
        ("vs", "Comparison “vs” page", [
            Variant("table", "Us vs them table", Sec(Col(Text(24, "display", maxw=900), Text(100, maxw=600), Btns(), align="center", gap=20), Compare(8, 2, 0, "logo"))),
            Variant("switch", "Switching guide", Sec(Row(Col(Text(16, "label"), Text(30, "h2"), Text(140), Btn("primary", 180)), Timeline(3), ws=(2, 3), gap=80), quote_card(160), gap=56)),
            Variant("columns", "Side-by-side columns", Sec(head(center=True), Row(Col(Logo(), Text(20, "h3"), Checks(5, 30, "cross"), box=True, fill="tint", gap=18), Col(Logo(), Text(20, "h3"), Checks(5, 30), box=True, fill="dark", gap=18), gap=24), Col(Text(90, "small"), align="center"), narrow=1000)),
        ]),
    ]


def app() -> list[tuple[str, str, list[Variant]]]:
    actions = right(Btns(2, ("secondary", "primary"), (110, 140)))
    field_rows = [Row(Col(Text(16, "h3"), Text(50, "small"), gap=6), Field(label=False), gap=40, valign="center") for _ in range(3)]
    pref = Row(Col(Text(26, "h3"), Text(70, "small"), gap=6), Fixed(60, Field("switch", w=60), mw=60), gap=24, valign="center", m="keep")
    toast = Col(Row(Fixed(28, Icon(24)), Col(Text(24, "h3"), Text(30, "small"), gap=4), Fixed(70, Btn("link", 70)), gap=12, m="keep", valign="center"), box=True, fill="bg", pad=16)
    return [
        ("login", "Login", [
            Variant("card", "Centred card", auth(Logo(), Text(20, "h2"), Field(), Field(), Btn("primary", 0), Rule(True), Btn("secondary", 0), Text(40, "small"))),
            Variant("split", "Form + brand panel", Sec(Row(Col(Col(Logo(), Gap(32), Text(20, "h1"), Text(60), Field(), Field(), Btn("primary", 0), Text(40, "small"), gap=18, maxw=400, align="left"), align="center"), Desk(Img(1.25, rx=0)), valign="center", gap=0), full=True, pad=0, mpad=32, h=900, mh=844)),
            Variant("sso", "SSO first", auth(Logo(), Text(22, "h2"), Text(60, "small"), Btn("secondary", 0), Btn("secondary", 0), Btn("secondary", 0), Rule(True), Field(), Btn("primary", 0), Text(50, "small"), card=False, bg="bg")),
            Variant("code", "One-time code", auth(Logo(), Text(20, "h2"), Text(70), Field("otp"), Btn("primary", 0), Text(40, "small"))),
        ]),
        ("register", "Register", [
            Variant("card", "Centred card", auth(Logo(), Text(22, "h2"), Field(), Field(), Field(), Field("check"), Btn("primary", 0), Text(40, "small"))),
            Variant("split-proof", "Form + proof panel", Sec(Row(Col(Col(Logo(), Gap(24), Text(20, "h1"), Field(), Field(), Field(), Btn("primary", 0), Text(40, "small"), gap=18, maxw=400, align="left"), align="center"), Desk(Col(Gap(120), quote_card(160), Checks(3, 34), Marks(3, 3), fill="tint", pad=64, gap=28, rx=0, minh=900)), valign="center", gap=0), full=True, pad=0, mpad=32, h=900, mh=844)),
            Variant("steps", "Multi-step signup", auth(Logo(), Stepper(3, 0), Text(22, "h2"), Field(), Field(), Field("select"), Btns(2, ("secondary", "primary")), card=False, bg="bg")),
        ]),
        ("onboarding", "Onboarding", [
            Variant("checklist", "Setup checklist", App(Text(24, "h2"), Row(Col(Progress(.4), Todo(5, 2), box=True, gap=20), Fixed(320, Col(Img(.56, "video"), Text(20, "h3"), Text(70, "small"), box=True, gap=12)), gap=24))),
            Variant("wizard", "One question per screen", Sec(Desk(Row(Logo(), Col(Stepper(4, 1), align="center"), right(Btn("link", 80)), valign="center")), Mob(Stepper(4, 1)), Col(Text(30, "h1", maxw=640), Text(80, maxw=520), align="center", gap=14), Grid(option(False), option(True), option(False), option(False), cols=2, gap=16), Row(Btn("secondary", 120), right(Btn("primary", 140)), m="keep"), narrow=760, pad=32, h=900, mh=844, gap=48)),
            Variant("templates", "Start from a template", App(title_row(20, Btn("secondary", 150)), Chips(5, 96, 0), Grid(*[Col(Img(.62, "shot"), Text(18, "h3"), Text(40, "small"), gap=10)] * 6, cols=3, gap=24), h=980)),
        ]),
        ("shell", "App shell", [
            Variant("sidebar", "Sidebar", App(*ghost())),
            Variant("topbar", "Top bar", App(*ghost(), nav="top")),
            Variant("rail", "Icon rail + list", App(*ghost(), nav="rail")),
            Variant("three-pane", "List + inspector", App(Row(Col(Field("search", label=False), Rows(9, avatar=True, active=1), gap=16), Fixed(380, Desk(Col(Text(20, "h3"), KV(5), Rule(), Text(120), Btns(), box=True, gap=16))), gap=24))),
            Variant("palette", "Command palette (⌘K)", Over(App(*ghost()), Float(Col(Field("search", label=False), Text(10, "label"), Rows(3, status=False), Text(10, "label"), Rows(2, status=False), box=True, fill="bg", gap=12, pad=16), .5, .38, 640, m="full"), dim=True)),
        ]),
        ("dashboard", "Dashboard", [
            Variant("kpis", "KPIs + trend + attention", App(title_row(14, Field("select", label=False, w=200)), Grid(Kpi(), Kpi(), Kpi(), cols=3, m="scroll"), Row(Col(Text(16, "h3"), Chart("area", .42), box=True, gap=16), Col(Text(18, "h3"), Rows(4, action=True, status=False), box=True, gap=8), ws=(3, 2), gap=24))),
            Variant("attention", "Needs-you first", App(Text(20, "h2"), Col(Text(24, "h3"), Rows(3, action=True, status=False), box=True, fill="tint", gap=8), Grid(Col(Text(14, "h3"), Chart("line", .45), box=True, gap=12), Col(Text(14, "h3"), Chart("bars", .45), box=True, gap=12), cols=2, gap=24))),
            Variant("breakdown", "Metric tabs + breakdown", App(title_row(14, Tabs(3, 0, "pill")), Tabs(4, 0, "kpi"), Chart("area", .28, mratio=.6), Table(4, 4))),
            Variant("feed", "Activity feed + side stats", App(Row(Col(Text(14, "h2"), Timeline(9, small=True), gap=20), Fixed(340, Col(*[Col(Text(12, "label"), Stat(100, 100), Chart("line", .25), gap=8)] * 3, box=True, gap=24)), gap=32))),
        ]),
        ("list", "List / table", [
            Variant("table", "Data table", App(title_row(), Row(Field("search", label=False), Chips(3, 96), right(Btn("secondary", 120)), ws=(2, 2, 1), gap=16, valign="center", mgap=12), Table(9, 5), Row(Text(20, "small"), right(Arrows()), valign="center", m="keep"))),
            Variant("bulk", "Selection + bulk bar", Over(App(Text(14, "h2"), Table(11, 5, check=True)), Float(Col(Row(Text(14, "small"), Btn("secondary", 110), Btn("secondary", 110), Btn("primary", 110), m="keep", gap=12, valign="center"), fill="dark", pad=14, rx=30), .58, .9, 620, m="sheet"))),
            Variant("cards", "Card grid", App(title_row(14, Tabs(2, 0, "pill")), Grid(*[Col(Img(.56, "shot"), Text(20, "h3"), Text(30, "small"), Row(Badge(80), right(Avatar(28)), m="keep", valign="center"), box=True, gap=10, pad=16)] * 6, cols=3))),
            Variant("kanban", "Board (kanban)", App(Text(14, "h2"), Row(*[Col(Text(10, "h3"), *[Col(Text(30, "h3"), Text(40, "small"), Row(Badge(70), right(Avatar(24)), m="keep", valign="center"), box=True, fill="bg", gap=10, pad=14)] * n, fill="tint", gap=12, pad=12) for n in (3, 2, 4, 1)], gap=16, m="scroll"))),
            Variant("grouped", "Grouped list", App(Text(14, "h2"), *[Col(Text(10, "label"), Rows(n, avatar=True), gap=4) for n in (2, 3, 2)], narrow=900)),
        ]),
        ("detail", "Detail / inspector", [
            Variant("master-detail", "List + detail", App(Row(Fixed(380, Col(Field("search", label=False), Rows(9, active=2, status=False), gap=12)), Desk(Col(Row(Text(20, "h2"), right(Btns()), valign="center"), Tabs(3), Text(300), Chart("line", .3), gap=24)), gap=32))),
            Variant("inspector", "Table + inspector panel", App(Row(Table(10, 4), Fixed(340, Desk(Col(Text(20, "h3"), Field(), Field("select"), Rule(), KV(4), Btn("primary", 0), box=True, gap=16))), gap=24))),
            Variant("page", "Full record page", App(Text(20, "small"), Row(Col(Text(26, "h2"), Row(Fixed(100, Badge(90)), Badge(110), m="keep", gap=8), gap=12), right(Btns()), valign="center"), Tabs(4), Row(Col(Chart("area", .35), Table(4, 4), gap=24), Fixed(300, Col(Text(10, "label"), KV(6), box=True, gap=12)), gap=32))),
            Variant("activity", "Record + activity log", App(Row(Col(Text(26, "h2"), KV(6), Btns(), gap=20), Col(Text(14, "h3"), Timeline(5, small=True), Field("area", label=False), gap=16, box=True), gap=40))),
        ]),
        ("form", "Creation flow / form", [
            Variant("modal", "Modal form", Over(App(*ghost()), Float(Col(Text(20, "h3"), Field(), Field(), Field("select"), Acc(1, -1, 20), Row(Gap(0), actions), box=True, fill="bg", gap=16), w=560, m="full"), dim=True)),
            Variant("page", "Sectioned page form", App(Text(18, "h2"), *[Row(Fixed(280, Col(Text(16, "h3"), Text(70, "small"), gap=8)), Col(*fields, box=True, gap=16), gap=48) for fields in ([Field(), Field()], [Field("select"), Field("area")], [Field("switch"), Field("switch")])], Row(Gap(0), actions), narrow=1000, h=1080)),
            Variant("stepper", "Multi-step form", App(Stepper(4, 1), Col(Text(22, "h2"), Text(80), Grid(Field(), Field(), cols=2, gap=16), Field("select"), Field("area"), gap=20, box=True), Row(Btn("secondary", 120), right(Btn("primary", 140)), m="keep"), nav="top", narrow=760)),
            Variant("preview", "Form + live preview", App(Text(18, "h2"), Row(Col(Field(), Field(), Grid(Field("select"), Field(), cols=2, gap=16), Field("area"), Acc(1, -1, 20), Btn("primary", 0), gap=18), Col(Text(10, "label"), Img(.62, "shot"), Text(40, "h3"), Text(80, "small"), fill="tint", gap=14), gap=32))),
        ]),
        ("settings", "Settings", [
            Variant("side-nav", "Settings nav + sections", App(Text(14, "h2"), Row(Fixed(220, Desk(Menu(8, 0, True))), Col(Mob(Field("select", label=False)), Col(Text(16, "h3"), Field(), Field(), Row(Fixed(64, Avatar(56)), Btn("secondary", 140), m="keep", valign="center"), box=True, gap=16), Col(Text(16, "h3"), Field("switch"), Field("switch"), box=True, gap=16), gap=24), gap=40))),
            Variant("tabs", "Tabbed settings", App(Text(14, "h2"), Tabs(5), Col(*field_rows, box=True, gap=24), Col(Text(14, "h3"), Row(Text(60, "small"), right(Btn("secondary", 140)), valign="center"), box=True, gap=12, strong=True), narrow=1000)),
            Variant("toggles", "Preference rows", App(Text(14, "h2"), Col(*ruled(*[pref] * 6), gap=20), narrow=820)),
        ]),
        ("billing", "Billing / usage", [
            Variant("tabs", "Plan · usage · invoices", App(Text(14, "h2"), Tabs(3), Row(Col(Text(10, "label"), Price(), Checks(3, 24), Btn("secondary", 150), box=True, gap=14), Col(Text(14, "h3"), Row(Fixed(56, Icon(40)), Col(Text(16, "h3"), Text(20, "small"), gap=6), m="keep", valign="center"), Text(30, "small"), Btn("link", 150), box=True, gap=14), gap=24), Text(10, "h3"), Table(4, 4), h=1000)),
            Variant("usage", "Usage against limits", App(title_row(14, Field("select", label=False, w=200)), Col(Progress(.82), Progress(.45), Progress(.2), box=True, gap=20), Col(Text(14, "h3"), Chart("bars", .28, mratio=.6), box=True, gap=12), Text(40, "small"))),
            Variant("upgrade", "Current plan → next plan", App(Text(14, "h2"), Row(Col(Text(10, "label"), Price(), Checks(4, 24), box=True, gap=16), Col(Text(10, "label"), Price(), Checks(4, 24), Btn("primary", 0), box=True, fill="dark", gap=16), gap=24), Text(60, "small"), narrow=900)),
        ]),
        ("empty", "Empty states", [
            Variant("first-run", "First run: preview + one action", App(Gap(60, 24), Col(Img(.42, "shot", maxw=520), Text(30, "h2"), Text(100, maxw=440), Btns(), align="center", gap=18))),
            Variant("no-results", "No results", App(Row(Field("search", label=False), Chips(2, 110, 0), gap=16, valign="center", mgap=12), Gap(60, 24), Col(Icon(40), Text(24, "h3"), Text(70, maxw=420), Btn("secondary", 160), align="center", gap=14))),
            Variant("sample", "Sample data + import", App(Col(Row(Col(Text(30, "h3"), Text(80, "small"), gap=6), right(Btn("primary", 150)), valign="center", mgap=12), fill="tint", pad=20, strong=True), Col(Table(6, 5), op=.5))),
        ]),
        ("overlays", "Modals / drawers", [
            Variant("confirm", "Confirm dialog", Over(App(*ghost()), Float(Col(Text(20, "h3"), Text(110), Row(Gap(0), right(Btns(2, ("secondary", "primary"), (110, 130)))), box=True, fill="bg", gap=16), w=460), dim=True)),
            Variant("drawer", "Side drawer", Over(App(*ghost()), Float(Col(Text(18, "h3"), Field(), Field("select"), Field("area"), Field("check"), Gap(200), actions, fill="bg", gap=16, rx=0), anchor="right", w=460, tall=True, m="full"), dim=True)),
            Variant("sheet", "Menu → bottom sheet", Over(App(*ghost()), Float(Col(Menu(5, -1), box=True, fill="bg", pad=8, mgap=0), .74, .16, 240, "tl", "sheet"), dim="mobile")),
            Variant("fullscreen", "Full-screen task", Over(App(*ghost()), Float(Col(Row(Text(14, "h3"), Col(Stepper(3, 1), align="center"), right(Btn("primary", 120)), valign="center", m="keep"), Rule(), Row(Fixed(260, Desk(Menu(6, 1))), Img(.5, "doc", maxw=760), gap=32), fill="bg", pad=24, gap=16, rx=0), anchor="full"))),
        ]),
        ("notifications", "Notifications / inbox", [
            Variant("popover", "Bell popover", Over(App(*ghost()), Float(Col(Row(Text(14, "h3"), right(Text(14, "small")), valign="center", m="keep"), Tabs(2), Rows(4, avatar=True, status=False), box=True, fill="bg", gap=12, pad=16), .62, .075, 400, "tl", "full"))),
            Variant("inbox", "Inbox: list + message", App(Row(Fixed(400, Col(Tabs(3), Rows(9, avatar=True, active=0, status=False), gap=8)), Desk(Col(Row(person(), right(Btns()), valign="center"), Rule(), Text(400), Text(200), gap=24)), gap=32))),
            Variant("toasts", "Toasts", Over(App(*ghost()), Float(Col(toast, toast, gap=10), anchor="br", w=380))),
        ]),
        ("search", "Search / results", [
            Variant("instant", "Instant results under the field", Over(App(Text(14, "h2"), Field("search", label=False), Table(6, 4), nav="top"), Float(Col(Text(10, "label"), Rows(3, thumb=True, status=False), Text(10, "label"), Rows(2, status=False), box=True, fill="bg", pad=14, gap=8), .083, .245, 760, "tl", "full"))),
            Variant("facets", "Results + facets", App(Row(Fixed(240, Desk(facets())), Col(Row(Text(20, "small"), right(Field("select", label=False, w=200)), valign="center", m="keep"), Mob(Btn("secondary", 0)), Rows(7, thumb=True), gap=12), gap=40), nav="top")),
            Variant("page", "Grouped results page", App(Field("search", label=False), Tabs(4), Text(14, "small"), *[Col(Text(10, "label"), Text(50, "h3"), Text(160, "small"), gap=8)] * 4, nav="top", narrow=760)),
        ]),
        ("mobile", "Mobile tab-bar app", [
            Variant("home", "Home with tab bar", App(Text(20, "h2"), Kpi(), Text(10, "h3"), Rows(5, avatar=True, status=False), mnav="tabs"), phone=True),
            Variant("feed", "Feed", App(Chips(4, 80, 0), *[Col(Img(.62), Text(30, "h3"), Text(50, "small"), gap=8)] * 3, mnav="tabs"), phone=True),
            Variant("detail", "Detail + sticky action", App(Img(.75), Text(26, "h2"), Stars(), Chips(3, 90), Text(200), KV(3), mnav="bar", back=True), phone=True),
        ]),
        ("commerce", "Shop", [
            Variant("category", "Category grid + filters", Sec(Text(10, "small"), Text(16, "h1"), Row(Fixed(240, Desk(facets())), Col(Row(Text(14, "small"), right(Field("select", label=False, w=200)), valign="center", m="keep"), Mob(Btn("secondary", 0)), Grid(*[Col(Img(1.0), Text(24, "h3"), Text(8, "label"), gap=8)] * 6, cols=3, mcols=2, gap=24), gap=20), gap=40), gap=16, pad=48)),
            Variant("product", "Product page", Sec(Row(Col(Img(1.0), Grid(*[Img(1.0)] * 4, cols=4, mcols=4, gap=12), gap=12), Col(Text(14, "small"), Text(30, "h1"), Stars(), Price(), Chips(4, 64, 1), Btn("primary", 0), Checks(2, 30), Acc(3, -1, 20), gap=18), gap=64), pad=48)),
            Variant("cart", "Cart + summary", Sec(Text(10, "h1"), Row(Col(*ruled(*[Row(Fixed(96, Img(1.0), mw=72), Col(Text(24, "h3"), Text(20, "small"), Row(Fixed(110, Field("select", label=False)), Text(6, "h3"), m="keep", valign="center", gap=16), gap=8), gap=20, m="keep")] * 3), gap=20), Fixed(380, Col(Text(10, "h3"), KV(4), Row(Text(8, "h3"), right(Text(6, "h2")), m="keep", valign="center"), Btn("primary", 0), Text(40, "small"), box=True, gap=16)), gap=48), pad=48)),
            Variant("checkout", "One-page checkout", Sec(Row(Col(Mob(Col(Row(Text(20, "h3"), right(Text(6, "h3")), m="keep"), fill="tint", pad=16)), Text(10, "h2"), Field(), Text(10, "h2"), Grid(Field(), Field(), cols=2, gap=16), Field(), Grid(Field(), Field(), Field(), cols=3, gap=16), Text(10, "h2"), Tabs(3, 0, "pill"), Field(), Grid(Field(), Field(), cols=2, mcols=2, gap=16), Btn("primary", 0), gap=16), Fixed(400, Desk(Col(Col(*[Row(Fixed(64, Img(1.0)), Col(Text(20, "h3"), Text(14, "small"), gap=6), right(Text(5, "h3")), m="keep", gap=16, valign="center")] * 3, Rule(), KV(3), box=True, fill="tint", gap=16)))), gap=64), pad=48)),
            Variant("tracking", "Order tracking", Sec(Text(16, "h2"), Text(30, "small"), Stepper(4, 2), Row(Img(.62, "map"), Timeline(4, small=True), gap=40), Rows(2, thumb=True, status=False), narrow=1000, gap=28)),
        ]),
    ]


CATALOGUE: dict[str, tuple[str, list[Variant]]] = {
    "nav": ("Nav / header", navs()),
    "hero": ("Hero", heroes()),
    "logos": ("Logo wall / social proof", logos()),
    "stats": ("Stats band", stats()),
    "features": ("Features", features()),
    "showcase": ("Product showcase", showcase()),
    "steps": ("How it works", steps()),
    "testimonials": ("Testimonials", testimonials()),
    "pricing": ("Pricing", pricing()),
    "faq": ("FAQ", faq()),
    "trust": ("Trust / security", trust()),
    "cta": ("CTA band", ctas()),
    "newsletter": ("Newsletter", newsletters()),
    "team": ("Team", team()),
    "blog": ("Blog index / article", blog()),
    "portfolio": ("Portfolio / gallery", portfolio()),
    "events": ("Event schedule", events()),
    "contact": ("Contact", contact()),
    "footer": ("Footer", footers()),
    **{key: (title, vs) for key, title, vs in pages()},
    **{key: (title, vs) for key, title, vs in app()},
}
LEADS: dict[str, Node] = {"hero": nav()}
TAILS: dict[str, Node] = {"nav": GHOST}
LANDINGS: dict[str, list[tuple[str, str]]] = {
    "dev-tool": [("nav", "search"), ("hero", "terminal"), ("logos", "row"), ("steps", "code"), ("showcase", "annotated"), ("features", "tabs"),
                 ("trust", "data-flow"), ("pricing", "table"), ("faq", "two-col"), ("cta", "inline-form"), ("footer", "mega")],
    "consumer-subscription": [("hero", "full-bleed"), ("logos", "ratings"), ("steps", "three"), ("showcase", "devices"), ("features", "old-new"),
                              ("testimonials", "photo-split"), ("pricing", "toggle"), ("faq", "accordion"), ("cta", "big-type"), ("footer", "centered")],
    "agency-saas": [("nav", "announcement"), ("hero", "shot-below"), ("logos", "marquee"), ("steps", "stepper"), ("showcase", "annotated"),
                    ("features", "bento"), ("trust", "badges"), ("testimonials", "case-studies"), ("pricing", "four"), ("faq", "categories"),
                    ("cta", "card-visual"), ("footer", "mega")],
    "marketplace": [("nav", "search"), ("hero", "search"), ("logos", "ratings"), ("portfolio", "grid"), ("steps", "numbers"),
                    ("testimonials", "carousel"), ("trust", "claims"), ("cta", "split"), ("faq", "grid"), ("footer", "mega")],
    "local-business": [("hero", "full-bleed"), ("logos", "ratings"), ("portfolio", "case-rows"), ("testimonials", "single"), ("pricing", "rows"),
                       ("portfolio", "masonry"), ("faq", "grid"), ("contact", "map"), ("footer", "local")],
}


# ---------- render ----------

def frame(node: Node, m: bool, cid: str) -> tuple[str, float]:
    w = FRAME["mob"] if m else FRAME["desk"]
    c = Ctx(m=m)
    h = node.h(w, c)
    clip = f'<clipPath id="{cid}"><rect width="{w}" height="{num(h)}"/></clipPath>'
    body = f'<g clip-path="url(#{cid})">{rect(0, 0, w, h, LIGHT.bg)}{node.draw(0, 0, w, h, c)}</g>'
    return clip + body + rect(0, 0, w, h, "none", CANVAS["frame"], sw=1.5), h


def compose(node: Node, cid: str, phone: bool = False) -> tuple[str, float, float]:
    pad, top = FRAME["pad"], FRAME["label"]
    mob, hm = frame(node, True, cid + "-m")
    if phone:
        body = text(pad, top - 14, "390", 20, CANVAS["label"]) + f'<g transform="translate({pad} {top})">{mob}</g>'
        return body, FRAME["mob"] + 2 * pad, hm + top + pad
    desk, hd = frame(node, False, cid + "-d")
    # [Agent] Mobile pages run 2-3x taller than desktop. Show the 390 frame at full size while it fits in the desktop
    # height (or 900 px for short sections), otherwise shrink it, never below half, so its bars stay readable.
    room = max(hd, FRAME["min_h"])
    s = 1.0 if hm <= room else max(FRAME["min_scale"], room / hm)
    mx = pad + FRAME["desk"] + FRAME["gap"]
    body = (text(pad, top - 14, "1440", 20, CANVAS["label"]) + f'<g transform="translate({pad} {top})">{desk}</g>'
            + text(mx, top - 14, "390" if s == 1 else f"390 · shown at {round(s * 100)}%", 20, CANVAS["label"])
            + f'<g transform="translate({mx} {top}) scale({num(s) if s < 1 else 1})">{mob}</g>')
    return body, mx + FRAME["mob"] * s + pad, max(hd, hm * s) + top + pad


def svg(body: str, w: float, h: float) -> str:
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{num(w)}" height="{num(h)}" viewBox="0 0 {num(w)} {num(h)}">'
            f'{SCRIM}{rect(0, 0, w, h, CANVAS["bg"])}{body}</svg>\n')


def variant_node(section: str, v: Variant) -> Node:
    lead = [LEADS[section]] if v.lead and section in LEADS else []
    return Col(*lead, v.node, *([TAILS[section]] if section in TAILS else []), gap=0)


def sheet(section: str, title: str, variants: list[Variant]) -> tuple[str, float, float]:
    cell, gap, cap, cols = SHEET["cell"], SHEET["gap"], SHEET["caption"], SHEET["cols"]
    out, y = text(gap, gap + 40, f"{title} · {len(variants)} variants", 56, "#27272a", family=SANS, weight=700), gap + 96
    for r in range(0, len(variants), cols):
        row_h = 0.0
        for i, v in enumerate(variants[r:r + cols]):
            body, vw, vh = compose(variant_node(section, v), f"s-{section}-{v.id}", v.phone)
            # [Agent] Phone-only screens are a third as wide as a desktop pair, so they get blown up to stay legible.
            k = min(1.8 if v.phone else 1.0, cell / vw)
            x = gap + i * (cell + gap)
            out += text(x, y + 44, v.name, 40, "#27272a", family=SANS, weight=600) + text(x + cell, y + 44, f"{section}/{v.id}", 28, CANVAS["label"], "end")
            out += f'<g transform="translate({num(x)} {num(y + cap)}) scale({num(k)})">{body}</g>'
            row_h = max(row_h, vh * k + cap)
        y += row_h + gap
    return out, gap + cols * (cell + gap), y


def main() -> None:
    for section, (title, variants) in CATALOGUE.items():
        folder = OUT / section
        folder.mkdir(exist_ok=True)
        for v in variants:
            (folder / f"{v.id}.svg").write_text(svg(*compose(variant_node(section, v), f"{section}-{v.id}", v.phone)))
        (OUT / "sheets").mkdir(exist_ok=True)
        (OUT / "sheets" / f"{section}.svg").write_text(svg(*sheet(section, title, variants)))
    index = {(s, v.id): v for s, (_, vs) in CATALOGUE.items() for v in vs}
    (OUT / "landings").mkdir(exist_ok=True)
    for name, parts in LANDINGS.items():
        node = Col(*(index[p].node for p in parts), gap=0)
        (OUT / "landings" / f"{name}.svg").write_text(svg(*compose(node, f"l-{name}")))
    print(f"{sum(len(vs) for _, vs in CATALOGUE.values())} variants in {len(CATALOGUE)} sections, {len(LANDINGS)} landings")


if __name__ == "__main__":
    main()
