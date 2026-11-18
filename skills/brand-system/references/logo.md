# Phase 3 · Logo

## What the logo has to survive

| Context | Size | Check |
|---|---|---|
| Browser tab favicon | 16 and 32 px | readable shape and silhouette, not detail. Build a pixel-hinted favicon on a 16/32 grid if the master has thin parts |
| Nav bar | 24–32 px tall lockup | the wordmark stays crisp; the mark doesn't overpower the word |
| App icon | 1024 master, seen at 60 px | sits on a tile, with optical centring and no text |
| Social avatar | circle crop, 400 px | survives the circle mask |
| One colour | print, emboss, merch | no gradient or second colour needed to read |
| Reversed | light on dark | no weight change needed, or a dark variant exists |

## Exploration (≥3 directions, ideally 5–8 quick ones)

- Spread across families:
  - wordmark only
  - letter or monogram
  - abstract symbol drawn from the brand idea
  - symbol + wordmark combination
  - a "system" mark that can animate
- Draw each one as a quick SVG in code on a grid (Python writing `<rect>`/`<path>`). Don't polish yet.
- Put them all on one sheet, and run `scripts/sizetest.py img/logo-sizetest.png logo/sketch-*.svg`.
- Crit each one in writing:
  - **Story:** does it tell the brand idea in one sentence?
  - **16 px:** does it survive?
  - **Distinctiveness:** does it look like a famous mark, or like the reference brand?
  - **Ownability:** could a competitor have drawn it tomorrow?
  - **Motion:** can it move as the signature motion?

Kill rules (each kills a direction):
- detailed illustration
- an ASCII-art or pixel picture used as the logo
- hairlines that vanish at 32 px
- gradients that carry the meaning
- generic AI sparkles, brains or nodes
- initials in a circle
- anything you'd mistake for a reference brand

## Refinement of the ★ pick

- **Construction.** Put it on a stated grid (for example a 60-unit grid with 4/8/16/32 squares). Write the geometry down in branding.md.
- **Optical corrections.** Overshoot round shapes about 1–3 %. Thin horizontals slightly. Centre optically in tiles, not mathematically.
- **Wordmark.** Set it in a real OFL font, with real kerning from HarfBuzz and outlined paths (`scripts/wordmark.py`), so the SVG never depends on an installed font. Adjust tracking for the size it is mostly seen at; display sizes usually want −2 to −5 %. Decide the case (lowercase reads friendlier and more modern; caps read institutional) and say why.
- **Lockup.** Fix the relationship between mark and wordmark: the mark's height relative to x-height or cap height, and the gap as a ratio of the mark height. Make horizontal and stacked versions if the brand needs both.
- **Small sizes.** Make a separate `favicon.svg` on a pixel grid (whole pixels at 16 and 32). Use `prefers-color-scheme` inside the SVG so it follows the browser theme.
- **Colour versions:** primary on light, primary on dark, one colour, and reversed on the accent (rarely).

## Usage rules (in branding.md)

- Clear space as a unit of the mark itself (for example "the 16 square on every side").
- Minimum sizes: lockup in px, mark in px.
- Which file to use at which size.
- A "never" list: rotate, add a gradient, round the corners, change ratios, recolour the accent part, set the word in another font, put it on a busy photo without a plate.

## Deliverables in `logo/`

- `<brand>-lockup{,-dark,-mono}.svg`
- `<brand>-mark{,-dark,-mono}.svg`
- `<brand>-wordmark{,-dark}.svg`
- `favicon.svg`, `favicon-light.svg`, `favicon-dark.svg`, `favicon-{16,32,48}.png`
- `apple-touch-icon-180.png`, `app-icon.svg`, `app-icon-1024.png`
- `avatar.svg`, `avatar-400.png`

Every PNG is exported by a script (`scripts/svg2png.py`), never by hand.

## Show it in context (on the page)

- the nav bar, light and dark
- a browser tab strip with the favicon next to other real-looking tabs
- an app icon on a home-screen grid
- the avatar in a social profile header
- a business card

Optional: the logo build animation (a frame strip plus mp4), which follows the brand's motion rules.
