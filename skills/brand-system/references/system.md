# Phase 4 · System

`branding.md` follows this order. Every section opens with one line tying it back to the vibe or the brand idea.

1. Strategy
2. Logo
3. Colour
4. Type
5. Space, radii, grid, icons
6. Signature components
7. Imagery
8. Motion
9. Voice
10. Files

## Colour

- **Pigments, then roles.** Name the raw colours after the brand's world (for example *carta*, *nerofumo*, *sanguigna*). Map them to roles, because product code only ever uses roles:
  - surfaces: `bg`, `surface`, `sunken`, `border`
  - text: `text`, `text-2`, `text-3`
  - actions: `primary`, `on-primary`, `accent`, `on-accent`
  - status: `ok`, `warn`, `error`
  - `focus`
- **OKLCH first, hex for tools.** Lightness steps stay perceptually even, and hue drift is visible in the numbers.
- **Neutrals carry temperature.** Never use pure #000 or #fff. Warm (hue 60–85) or cool (220–260) neutrals at chroma 0.004–0.015 give the brand its air before any accent shows up.
- **One accent, used sparingly.** A rule of thumb: neutrals cover about 95 % of every surface, and there is one accent thing per screen (the primary action, the live state, the mark's seed). Two accents is a decision that needs a reason.
- **Status colours are functional.** Use them as small chips or dots next to a word, never as large fills, and pair them with a glyph so colour isn't the only signal.
- **Light and dark** are both specified, each with its own accent tuning: accents usually need +0.12 to +0.16 L on dark. Say which one is the default and why. Product tools often default to dark; marketing sites often to light.
- **Contrast is computed, never eyeballed.** Run `scripts/palette.py` with every real text pair. Body and secondary text must be ≥ 4.5:1, large text and UI glyphs ≥ 3:1. Pairs below that are marked decorative (for example hairlines).
- **On the page,** show live swatches with inline styles if MDX renders them, the contrast table, and the palette applied to a real screen. Swatches alone prove nothing.

## Type

- **Licence.** Google Fonts, OFL only. Download the files into `fonts/` with `OFL.txt`, and give the production `<link>` URL too.
- **Pick by role:**
  - words: a sans or serif, used for display and text
  - data: a mono, or a sans with tabular figures, for numbers, ids and labels
  - optionally a display face
  At most two families plus a mono.
- **Selection criteria:**
  - character at display size
  - x-height and readability at 13–15 px
  - tabular figures
  - a weight range, ideally variable
  - language coverage
  - how it sits next to the logo
- **Avoid unexamined defaults** (Inter, Roboto, Poppins, Montserrat, Space Grotesk) unless you can say why it beats the alternatives for this brand.
- **Test with real copy** at real sizes: the headline, a table row, a price, a label. Render a specimen and look at it.
- **Scale table:** role · family · weight · size/line-height on desktop and mobile · tracking. Cover display, h1, h2, h3, body-l, body, small, label and data. Use negative tracking on big sizes and positive tracking on small caps labels.
- **Write the rules:** for example "every number is mono", "headlines at 500, never bold", "labels in caps +12 %".

## Space, radii, grid, icons

- **Space.** A 4 px base and a named scale (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128). Gutters: 32 desktop, 16 mobile. Set a max content width and a column grid for marketing pages.
- **Radii.** Set per element type (0 for photographs, a small value for chips, a middle one for controls, larger for cards and panels), with a reason tied to the idea, for example "prints are never rounded".
- **Borders over shadows** for UI. Shadows only on physical mocks.
- **Icons.** Use one library (Lucide, Phosphor or Tabler), with the stroke width, caps, joins and sizes stated. There may be one brand glyph (the only filled shape) used for live state, bullets or the cursor.

## Signature components (3–5)

These are the components where the brand idea lives inside the product, and they matter more than the colour of a button.

Examples:
- a progress bar whose leading edge dissolves ▓▒░
- frame states (picked = 2 px frame; cut = greyscale with a reason tag "✕ hands"; rendering = noise; queued = dither)
- one mono tag on an image
- a live dot that steps instead of pulsing

Specify each one exactly: sizes, colours, states.

## Imagery direction

- **Framing:** aspect ratios per use, eye line, crop rules.
- **Light and grade:** one key light or window light, the grading recipe, and what is banned (teal-orange, beauty filters, plastic skin).
- **Presentation:** for example "prints, not cards", with square corners, a hairline and a mono caption.
- **Content rules:** what is on-brand and what is never shown on brand surfaces.
- **Sourcing for the kit itself:**
  - your own renders, or public-domain or licensed works from the brand's cultural root, credited in `CREDITS.md`
  - no AI-generated people unless the user explicitly asks
  - each image once per page
  - a hero source gets the full brand treatment
  - rotating sets are allowed, with a reduced-motion fallback

## Motion

- **Easing tokens and durations** (for example `cubic-bezier(0.2,0,0,1)`, 120 / 200 / 320 ms), with a stated stance on bounce and spring, which is usually "no".
- **One signature motion** that is the brand idea in time (for example "the resolve": noise → 4 mosaic steps → image, `steps(4)` over 480 ms).
- **The logo build** (optional).
- **`prefers-reduced-motion`:** everything is instant or static.

## Voice

- 3–4 principles, for example "Plain, exact, unhurried. Numbers over adjectives."
- A **say / don't say** table of at least 7 rows drawn from the category cliché in the strategy.
- CTAs, vocabulary (use / avoid), and microcopy for an empty state, an error, a success and a destructive confirm.
- Where foreign or "flavour" words are allowed (names of tokens: yes; decoration in copy: no).

## tokens.css

Generate it from `src/colors.json` (made by `scripts/palette.py`) plus a small script you write for the rest. Order:

1. `@font-face`
2. `:root` pigments (OKLCH, hex and role in a comment)
3. roles
4. type tokens (`--text-h1: 500 52px/1.05 var(--font-sans)` plus tracking)
5. space, radii, motion
6. a dark theme under `[data-theme="dark"]` and `@media (prefers-color-scheme: dark)` (or the reverse if dark is the default)
7. the reduced-motion override

Add a tiny `tw.js` that maps Tailwind's config to these variables, if the site uses Tailwind.
