# Phase 4 · Logo

## What it has to survive

Each row the brief needs becomes a board on the page. Compose several contexts into one image: wide, short strips letterbox in the review cards.

| Context | Size | Check |
|---|---|---|
| Browser tab | 16 and 32 px | a readable silhouette, not detail; a separate pixel favicon is normal |
| Nav bar | 24–32 px tall lockup | the wordmark stays crisp; the mark doesn't overpower it |
| App icon | 1024 master, seen at 60 px on a home-screen grid | optically centred on its tile, no text |
| Avatar | 400 px circle crop, in a profile header | survives the mask |
| One colour, reversed | any | reads with no second colour; a `-mono-reversed` file exists |
| Minimum size | the stated minimum | the lockup still reads |
| Sign at 5 and 10 m | lockup height on the sign, rendered at px ≈ 1900 × height ÷ distance (a ~96 dpi screen at 50 cm; 30 cm at 10 m ≈ 57 px) | the word reads |
| Stamp or bag print | one ink, 30–40 mm, on the real stock | no tints or hairlines; counters don't fill in |
| Embroidery | about 60 mm on a cap or apron | no line under 1 mm, no text under 5 mm, 1–2 thread colours |

## Exploration (≥3 directions, ideally 5–8 quick ones, in `logo/sketches/`)

- **Spread across families:** wordmark only, a letter or monogram, an abstract symbol from the brand idea, symbol + wordmark, a "system" mark that can animate. Variants of one idea count as one direction.
- **Draw each in code on a grid:** a script writing `<rect>` and `<path>`, colours from colors.json. Real-font letters and words come from wordmark.py (`--split` when one glyph takes another colour; read the `.json` sidecar). A hand-drawn mark is traced with potrace.
- **Size test** every sketch into `img/sizetest-sketches.png` (`light.svg:dark.svg` pairs where the art needs a dark version). That sheet is the sketch sheet on the page.
- **Crit each in writing:** story (the idea in one sentence?), 16 px, one colour (a band *behind* a letter often turns into a chequerboard), ownability (could a competitor draw it tomorrow?), motion (can it move as the signature motion?).

**Kill rules:** an ASCII or pixel *picture* used as the logo; hairlines that vanish at 32 px; gradients that carry the meaning; generic AI sparkles, brains or nodes; anything you'd mistake for a reference brand. A single letter, initials in a circle or shield, or a detailed illustration survives only when the shape itself carries the idea and reads in one colour at 16 px, e.g. a T whose arm has cracked off, for a roaster's "first crack".

**Look-alike check (the gate):** search `<shape> logo <category>`, crop the 4–6 nearest marks from screenshots (research or image search) onto one sheet next to yours (page only, never brand assets), and write one line on why yours is distinct. Not a legal clearance; say so.

## Refining the ★

- **Construction:** a stated grid (e.g. 64 units with 4/8/16/32 squares), written in branding.md.
- **Optical corrections:** overshoot round shapes 1–3 %, thin the horizontals slightly. To centre in a tile, move the shape about halfway from the box centre toward its area centroid, then check at 60 px.
- **Wordmark:** wordmark.py from a real OFL font (HarfBuzz kerning, outlined paths; `--axis` pins any axis, opsz defaults to the display cut). Track for the size it is mostly seen at: display −2 to −5 % (`--track -0.03`). Choose the case on purpose: lowercase reads friendlier, caps institutional.
- **Lockup:** align the mark with the sidecar (baseline, x-height, cap height); fix its height to the x- or cap height and the gap as a ratio of the mark. Horizontal and stacked if needed. A mark that is the initial stutters ("T Tostato"): let it replace the first letter, use mark and wordmark separately, or say why you accept it.
- **Pixel favicon:** `<rect>`s by hand on a 16-unit grid, whole pixels only; a clean 2× at 32 unless detail is needed. `favicon.svg` follows `prefers-color-scheme` and is the one HTML links; `favicon-light.svg` and `favicon-dark.svg` serve the size test and exports.
- **An accent that fails on one theme** (yellow on light): the mark is ink-only there and carries the accent on the other. A usage rule, not a recolour.

## Usage rules (branding.md § Logo)

Clear space as a unit of the mark ("the 16 square on every side"); minimum sizes in px and in mm; which file at which size; never rotate, add a gradient, round the corners, change ratios, recolour the accent part, set the word in another font, or put it on a busy photo without a plate.

## Files in `logo/` (every PNG exported by svg2png.py)

- `<slug>-{lockup,mark}{,-dark,-mono,-mono-reversed}.svg`, `<slug>-wordmark{,-dark}.svg`
- `favicon.svg`, `favicon-light.svg`, `favicon-dark.svg`, `favicon-{16,32,48}.png`
- `app-icon.svg`, `app-icon-1024.png`, `apple-touch-icon-180.png`, `avatar.svg`, `avatar-400.png`
- plus the final size test in `img/sizetest.png`, and optionally the logo's build animation as a frame strip
