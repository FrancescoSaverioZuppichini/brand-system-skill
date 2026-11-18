# Phase 5 · System

This phase finalises what phase 3 made provisional. `branding.md` follows this order, and every section opens with one line tying it to the vibe, the brand idea or the style recipe:

1. Strategy
2. Direction
3. Logo
4. Colour
5. Type
6. Space, radii, grid, icons
7. Signature components
8. Imagery
9. Motion
10. Voice
11. Files

Strategy and research live in branding.md §1 in short form; the page shows the long form with pictures. Don't keep two diverging copies: when you change one, change the other.

## Colour

**palette.py input** (`src/colors-in.json`):

```json
{
  "tokens":  {"carta":    [0.975, 0.007, 85, "page background, warm paper"],
              "nerofumo": [0.205, 0.008, 60, "lamp black: text, logo, primary buttons"],
              "notte":    [0.165, 0.006, 60, "dark background"],
              "biacca":   [0.950, 0.008, 85, "text on dark"],
              "sanguigna":[0.545, 0.150, 37, "red chalk: the one accent"]},
  "roles":   {"light": {"bg": "carta", "text": "nerofumo", "accent": "sanguigna"},
              "dark":  {"bg": "notte", "text": "biacca",   "accent": "sanguigna"}},
  "default": "light",
  "pairs":   [["nerofumo", "carta", "body text"],
              ["carta", "sanguigna", "label on accent button", "large"],
              ["linea", "carta", "hairline", "decorative"]]
}
```

Run `python3 $S/palette.py src/colors-in.json src/colors.json --css src/colors.css --md src/colors.md`.
- **Pair kinds:** `text` (the default) needs 4.5:1; `large` and `ui` need 3:1; `decorative` never fails.
- **Failures:** a failing pair prints the lightness at which it would pass. A colour outside sRGB prints its maximum chroma; `--fit` clamps it for you.
- **Outputs:** `colors.css` is the colour block of tokens.css (pigments, the default theme's roles, the other theme under `[data-theme=…]` on any element, plus a media query for unpinned pages). `colors.md` is the table for branding.md and the page.

**How to choose colour:**
- **Pigments, then roles.** Name the pigments after the brand's world (*carta*, *nerofumo*, *sanguigna*), never after a role. A pigment called `ok` makes `--ok: var(--ok)` point at itself, and palette.py rejects that. Product code uses roles only:
  - surfaces: `bg`, `surface`, `sunken`, `border`
  - text: `text`, `text-2`, `text-3`
  - actions: `primary`, `on-primary`, `accent`, `on-accent`
  - status: `ok`, `warn`, `error`
  - `focus`
- **Neutrals carry temperature.** Never use pure #000 or #fff. Warm neutrals (hue 60–85) or cool ones (220–260) at chroma 0.004–0.015 give the brand its air before any accent shows.
- **One accent *meaning* per screen.** The accent marks one thing: the primary action, the live state, or the mark's seed.
  - The signature device may repeat (a highlighter on key words, the ramp on progress bars), but sparingly: about three per viewport, and never as decoration.
  - Two accent colours need a written reason.
- **Data scales are not accents.** A roast ladder, a heat scale or a category colour set is a separate, labelled scale, used only where data is shown.
- **Status colours** are small chips or dots next to a word, never large fills, and always paired with a glyph.
- **Light and dark.**
  - Accents usually need +0.10 to +0.16 L on dark; the contrast table decides.
  - State which theme is the default and why. Product tools often default to dark; marketing sites often to light.
  - Make dark opt-in on a light-only brief: put roles only under `light`, or keep `default` light. Screenshots are taken in light by default.
- **On the page:**
  - live swatches, as lowercase JSX `<div style={{background: "oklch(…)"}}>` (these render in the artifacts app), or a PNG swatch sheet
  - the `colors.md` tables
  - the palette applied to a real screen

## Type

- **Licence.** Only OFL fonts. Download TTFs + `OFL.txt` from `github.com/google/fonts/tree/main/ofl/<family>` (use the raw file URLs) into `fonts/`. Production pages may use the Google Fonts CSS URL.
- **Pick by role:**
  - words (sans or serif, for display and text)
  - data (a mono, or a face with tabular digits) for numbers, ids and labels
  - an optional display face

  At most two families plus a mono. The style recipe narrows the field (`styles.md` lists fitting fonts per style).
- **Criteria:**
  - character at display size
  - x-height and readability at 13–15 px
  - tabular figures
  - weight range (ideally variable, with opsz for serifs)
  - language coverage for the market
- **Avoid unexamined defaults** (Inter, Roboto, Poppins, Montserrat, Space Grotesk) unless you can say why they beat the alternatives for this brand.
- **Tabular check:** the font has a `tnum` GSUB feature, or digits 0–9 already share one advance width. Check in fontTools: `{f['hmtx'][f.getBestCmap()[ord(d)]][0] for d in '0123456789'}` has one value.
- **Test with real copy** at real sizes (the headline, a table row, a price, a label). Render a specimen and look at it.
- **Scale table:** role · family · weight · size/line-height on desktop and mobile · tracking. Cover display, h1, h2, h3, body-l, body, small, label and data. Use negative tracking on big sizes and positive tracking on small caps labels.
- **Write the rules,** e.g. "every number is mono", "headlines at 500, never bold", "labels in caps +12 %".

## Space, radii, grid, icons

- **Space.** A 4 px base and a named scale (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128). Gutters: 32 desktop, 16 mobile. A max content width and a column grid for marketing pages.
- **Radii.** Set per element type (0 for photographs, a small value for chips, more for controls, cards and panels), with a reason tied to the idea or the style recipe.
- **Depth.** Borders or shadows per the style recipe. Dev-tool and editorial styles use borders; skeuomorphic and clay styles use shadows. State which, and where.
- **Icons.** One library: Lucide (ISC), Phosphor (MIT) or Tabler (MIT). Single SVGs come from `unpkg.com/lucide-static/icons/<name>.svg`. State the stroke width, caps, joins and sizes. There may be one brand glyph (the only filled shape) for live state, bullets or the cursor.

## Signature components (3–5)

These are the components where the brand idea lives inside the product, and they matter more than the colour of a button.

Examples:
- a progress bar whose leading edge dissolves ▓▒░
- frame states (picked = 2 px frame; cut = greyscale with a reason "✕ hands"; rendering = noise; queued = dither)
- "the gloss" (a local term in mono, then its plain meaning on a highlighter)
- a live dot that steps instead of pulsing

Specify each one exactly: sizes, colours, states.

## Imagery direction

- **Framing:** aspect ratios per use, eye line, crop rules.
- **Light and grade:** a recipe, and what is banned (e.g. teal-orange, beauty filters).
- **Presentation:** e.g. "prints, not cards": square corners, a hairline, a mono caption.
- **Content rules:** what is on-brand and what is never shown on brand surfaces.
- **Sourcing for the kit:** habit 10 in SKILL.md (own renders; public domain via `commons.py`; credits; once per surface; full treatment of famous images; rotation with a reduced-motion fallback).

## Motion

- **Easing tokens and durations** (e.g. `cubic-bezier(0.2,0,0,1)`, 120 / 200 / 320 ms), with a stated stance on bounce and spring, per the style recipe.
- **One signature motion:** the brand idea in time, e.g. "the resolve": noise → 4 mosaic steps → image, `steps(4)` over 480 ms.
- **`prefers-reduced-motion`:** shows a *designed* static state, never a blank or half-drawn one. Screenshots run in reduced motion by default, so a missing fallback shows up in them. Record the motion itself as a frame strip (and an mp4 when useful).

## Voice

- 3–4 principles, e.g. "Plain, exact, unhurried. Numbers over adjectives."
- A say / don't say table of at least 7 rows drawn from the category cliché.
- CTAs, vocabulary (use / avoid), and microcopy for an empty state, an error, a success and a destructive confirm.
- **Languages:** which language the brand speaks in each market, and which local words stay untranslated as product vocabulary (roast names, tax terms). Mocks use the market's main language, or English plus one local sample line; say which.

## tokens.css

```css
@import "src/colors.css";            /* or paste it: generated by palette.py, never edited by hand */
@font-face { … }                     /* local fonts/ files */
:root {
  --font-sans: …; --font-mono: …;
  --text-display: 500 clamp(48px, 7vw, 96px)/0.95 var(--font-sans); --track-display: -0.04em;
  /* … h1 → data, as in the scale table */
  --space-1: 4px; … --space-32: 128px;
  --radius-chip: 3px; --radius-control: 6px; --radius-card: 10px;
  --ease: cubic-bezier(0.2, 0, 0, 1); --dur-1: 120ms; --dur-2: 200ms; --dur-3: 320ms;
}
@media (prefers-reduced-motion: reduce) { :root { --dur-1: 0ms; --dur-2: 0ms; --dur-3: 0ms; } }
```

Add a tiny `tw.js` mapping Tailwind's config to these variables only if the site uses Tailwind. A Tailwind/shadcn class table, like a reference brand's, is a deliverable only when the product's stack is Tailwind.
