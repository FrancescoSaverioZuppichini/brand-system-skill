# Phase 4 · Logo

## What the logo has to survive

| Context | Size | Check |
|---|---|---|
| Browser tab favicon | 16 and 32 px | a readable silhouette, not detail. A separate pixel favicon is normal (see below) |
| Nav bar | 24–32 px tall lockup | the wordmark stays crisp; the mark doesn't overpower the word |
| App icon | 1024 master, seen at 60 px | on a tile, optically centred, no text |
| Social avatar | circle crop, 400 px | survives the circle mask |
| One colour | print, emboss, merch | reads with no second colour |
| Reversed | light on dark | a `-mono-reversed` file exists and reads |

## Exploration (≥3 directions, ideally 5–8 quick ones, in `logo/sketches/`)

- **Spread across families:**
  - wordmark only
  - a letter or monogram
  - an abstract symbol from the brand idea
  - symbol + wordmark
  - a "system" mark that can animate

  Variants of one idea count as one direction.
- **Draw each one in code on a grid** (Python writing `<rect>` and `<path>`). For a real-font letter, run `wordmark.py FONT "F" sketch.svg --split` and read its `.json` sidecar for the baseline and cap height.
- **Run the size test:** `sizetest.py img/logo-sketches.png logo/sketches/*.svg`. Use `light.svg:dark.svg` pairs where the art needs a dark version. Use the size-test sheet as the sketch sheet on the page.
- **Crit each one in writing:**
  - **Story:** does it tell the brand idea in one sentence?
  - **16 px:** does it survive?
  - **One colour:** does it read? (A band *behind* a letter often turns into a chequerboard in one colour.)
  - **Ownability:** could a competitor have drawn it tomorrow?
  - **Motion:** can it move as the signature motion?

**Kill rules.** Each of these kills a direction:
- a detailed illustration
- an ASCII-art or pixel *picture* used as the logo
- hairlines that vanish at 32 px
- gradients that carry the meaning
- generic AI sparkles, brains or nodes
- initials in a circle or shield
- anything you'd mistake for a reference brand

**A letter is fine when the letterform itself carries the idea:** a T whose arm has cracked off for a roaster's "first crack"; an F with a highlighter swipe for a "gloss" app.

**Look-alike check (the gate).** Search `<letter or shape> logo <category>` and similar marks in the category. Put the 4–6 nearest known marks next to yours on one sheet and write one line on why yours is distinct. This is not a legal clearance; say so.

## Refinement of the ★ pick

- **Construction.** A stated grid (e.g. a 64-unit grid with 4/8/16/32 squares), written down in branding.md.
- **Optical corrections.** Overshoot round shapes about 1–3 %. Thin horizontals slightly. For optical centring in a tile, compute the shape's area centroid and move it about halfway from the box centre toward the centroid, then check by eye at 60 px.
- **Wordmark.** A real OFL font, with HarfBuzz kerning and outlined paths: `wordmark.py`. `--axis` pins any axis; opsz defaults to the display cut. Use `--split` when one glyph takes another colour (a violet full stop). Track for the size it is mostly seen at (display: −2 to −5 %). Choose the case on purpose: lowercase reads friendlier and modern, caps read institutional.
- **Lockup.** Align the mark to the wordmark using the sidecar JSON (baseline, x-height, cap height). Fix the mark's height relative to x-height or cap height, and the gap as a ratio of the mark's height. Make horizontal and stacked versions if needed.
  - **Mark = the initial:** "T Tostato" stutters. Either let the mark replace the first letter, use the wordmark alone in running contexts and the mark alone where space is small, or accept it and say why.
- **Pixel favicon.** Draw it by hand as `<rect>`s on a 16-unit grid, whole pixels only. At 32 px a clean 2× is fine unless detail is needed. `favicon.svg` follows `prefers-color-scheme` and is the one the HTML links. `favicon-light.svg` and `favicon-dark.svg` are the explicit variants for the size test and for exports.
- **Accent parts that can't live on both themes.** If the accent fails on light (e.g. yellow at 1.2:1), the mark is ink-only on light and carries the accent on dark only. Write this down; it is a usage rule, not a recolour.

## Usage rules (in branding.md)

- **Clear space:** a unit of the mark itself ("the 16 square on every side").
- **Minimum sizes:** lockup and mark, in px and in mm for print. Show the lockup at that minimum on the page.
- **Which file at which size.**
- **Never:** rotate, add a gradient, round the corners, change ratios, recolour the accent part, set the word in another font, put it on a busy photo without a plate.

## Deliverables in `logo/`

- `<brand>-lockup{,-dark,-mono,-mono-reversed}.svg`
- `<brand>-mark{,-dark,-mono,-mono-reversed}.svg`
- `<brand>-wordmark{,-dark}.svg`
- `favicon.svg`, `favicon-light.svg`, `favicon-dark.svg`, `favicon-{16,32,48}.png`
- `apple-touch-icon-180.png`, `app-icon.svg`, `app-icon-1024.png`
- `avatar.svg`, `avatar-400.png`

Every PNG is exported by a script (`svg2png.py`), never by hand.

## Show it in context (on the page)

- the nav bar, light and dark
- a browser tab strip with the favicon next to other tabs
- an app icon on a home-screen grid
- the avatar in a social profile header
- the lockup at its minimum size

The business card belongs to Applications, not here. A wide, short mock (a 1200×90 nav bar) letterboxes in the review app's cards, so compose several contexts into one board image. Optional: the logo build animation as a frame strip plus mp4.
