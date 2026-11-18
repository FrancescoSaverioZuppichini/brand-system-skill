# Phase 5 · System

This phase finalises what phase 3 made provisional. Each block below is a heading in branding.md § System that opens with one line tying it to the vibe, the idea or the recipe.

## Colour

`src/colors-in.json`: pigments as `[L, C, H, "what it is"]`, roles per theme, and the pairs to check.

```json
{
  "tokens": {"flour": [0.975, 0.008, 85, "page background"],
             "crumb": [0.995, 0.004, 85, "cards and popovers"],
             "rye":   [0.860, 0.012, 75, "hairlines, inputs"],
             "proof": [0.940, 0.010, 80, "secondary and muted surfaces"],
             "crust": [0.220, 0.012, 55, "text, logo"],
             "malt":  [0.460, 0.015, 60, "muted text"],
             "ember": [0.520, 0.160, 38, "the one accent: primary actions, focus"],
             "char":  [0.500, 0.180, 25, "destructive"],
             "oven":  [0.170, 0.008, 55, "dark background"],
             "hearth":[0.215, 0.010, 55, "dark cards"],
             "ash":   [0.330, 0.010, 60, "dark hairlines and surfaces"],
             "oat":   [0.780, 0.015, 80, "muted text on dark"],
             "glow":  [0.680, 0.150, 45, "the accent on dark"]},
  "roles": {"light": {"background": "flour", "foreground": "crust", "card": "crumb", "card-foreground": "crust",
                      "popover": "crumb", "popover-foreground": "crust", "primary": "ember", "primary-foreground": "flour",
                      "secondary": "proof", "secondary-foreground": "crust", "muted": "proof", "muted-foreground": "malt",
                      "accent": "proof", "accent-foreground": "crust", "destructive": "char", "border": "rye",
                      "input": "rye", "ring": "ember"},
            "dark":  {"background": "oven", "foreground": "flour", "card": "hearth", "card-foreground": "flour",
                      "popover": "hearth", "popover-foreground": "flour", "primary": "glow", "primary-foreground": "oven",
                      "secondary": "ash", "secondary-foreground": "flour", "muted": "ash", "muted-foreground": "oat",
                      "accent": "ash", "accent-foreground": "flour", "destructive": "char", "border": "ash",
                      "input": "ash", "ring": "glow"}},
  "default": "light",
  "pairs": [["crust", "flour", "body text"], ["malt", "flour", "muted text"], ["crust", "crumb", "text on cards"],
            ["flour", "ember", "label on primary"], ["crust", "proof", "text on secondary"],
            ["ember", "flour", "focus ring", "ui"], ["rye", "flour", "hairline", "decorative"],
            ["flour", "oven", "body text, dark"], ["oat", "oven", "muted text, dark"], ["flour", "hearth", "text on cards, dark"],
            ["oven", "glow", "label on primary, dark"], ["flour", "ash", "text on secondary, dark"],
            ["glow", "oven", "focus ring, dark", "ui"]]
}
```

- **Roles are shadcn/ui's variables**, so the tokens paste straight into a Tailwind 4 + shadcn app: `background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `border`, `input`, `ring`; add `chart-1`…`chart-5` when data is shown and `sidebar-*` for app shells. In shadcn `accent` is the quiet hover surface, not the brand accent: the brand's one accent is usually `primary`. palette.py warns on a missing role. Product code uses roles only (`bg-background`, `text-muted-foreground`, `var(--primary)`).
- **Required pairs:** every `*-foreground` on its surface, plus `foreground` and `muted-foreground` on `background` (palette.py fails without them); `ring` on `background` as `ui`; status colours on `card` when they exist.
- **Pair kinds:** `text` (the default) needs 4.5:1, `large` and `ui` need 3:1, `decorative` never fails. A failing pair prints the lightness at which it would pass; a colour outside sRGB prints its maximum chroma, and `--fit` clamps it.
- **Outputs:** `colors.css` is the colour block of tokens.css (pigments, the default theme's roles, the other theme under `[data-theme=…]` on any element, a media query for unpinned pages, and a Tailwind 4 `@theme inline` block so `bg-background`, `text-primary` and the rest exist as utilities). `colors.md` is the table for branding.md and the page.

How to choose:
- **Pigments, then roles.** Name pigments after the brand's world, never after a role: a pigment called `ok` makes `--ok: var(--ok)`, and palette.py rejects it.
- **Neutrals carry temperature.** Never pure #000 or #fff: warm (hue 60–85) or cool (220–260) at chroma 0.004–0.015 give the brand its air before any accent shows.
- **One accent meaning per screen:** the primary action, the live state, or the mark's seed. The signature device may repeat, about three times per viewport and never as decoration. Two accent colours need a written reason.
- **Data and status.** A data scale (heat, categories, charts) is a separate labelled scale, used only where data is shown; for data-heavy products take the chart rules from the `dataviz` skill when it is installed. Status colours are small chips or dots next to a word and a glyph, never large fills.
- **Themes** follow brief.md. Accents usually need +0.10 to +0.16 L on dark; the table decides. A light-only surface keeps roles under `light` only.

## Type

- **Licence:** OFL only, files plus `OFL.txt` in `fonts/` (Tools § Fonts). Production pages may load the Google Fonts CSS URL.
- **Roles:** words (display and text), data (a mono or tabular digits) for numbers, ids and labels, an optional display face. At most two families plus a mono; `styles.md` lists fitting fonts per style.
- **Criteria:** character at display size, x-height and readability at 13–15 px, tabular figures, weight range (ideally variable, with opsz for serifs), language coverage for the market. Avoid unexamined defaults (Inter, Roboto, Poppins, Montserrat, Space Grotesk) unless you can say why they win here.
- **Tabular check** in a fontTools script: the font has a `tnum` GSUB feature, or `{f['hmtx'][f.getBestCmap()[ord(d)]][0] for d in '0123456789'}` has one value.
- **Real copy at real sizes** (the headline, a table row, a price, a label) in a rendered specimen.
- **Scale table:** role · family · weight · size/line-height on desktop and mobile · tracking, for display, h1, h2, h3, body-l, body, small, label, data. Negative tracking on big sizes, positive on small-caps labels.
- **Rules** in words, e.g. "every number is mono", "headlines at 500, never bold".

## Space, radii, depth, icons

- **Space:** a 4 px base and the ten steps in tokens.css below. Gutters 32 px on desktop, 16 on mobile; a max content width and a column grid for marketing pages.
- **Radii** per element type (photographs, chips, controls, cards), each with a reason from the idea or the recipe.
- **Depth:** borders or shadows, per the recipe; say which and where.
- **Icons:** one library (Lucide, Phosphor or Tabler; Tools § Icons) with its stroke width, caps, joins and sizes. At most one filled brand glyph.

## Signature components (3–5)

Where the brand idea lives inside the product or on the pack; they matter more than the colour of a button. E.g. an order slip whose bake time is a rubber stamp, not a printed line. Specify each exactly: sizes, colours, states.

## Imagery

- Framing (aspect ratios per use, eye line, crops), light and grade (and what is banned), presentation, and what is never shown. Rights: habit 10.
- **Photography the brand needs but can't render** (food, interiors, people): write a shot list in branding.md (subject, framing, light, where it's used) for a photographer. On mocks use labelled placeholder frames ("photo: loaf on the board, top light"), your own illustration, or public-domain still lifes from the cultural root (commons.py).

## Motion

- Easing tokens and durations, with a stance on bounce and spring, per the recipe.
- One signature motion: the idea in time, e.g. a status that stamps in with a two-frame ink spread over 160 ms.
- `prefers-reduced-motion` shows a *designed* static state, never a blank or half-drawn one.
- Record the motion as a frame strip, and an mp4 when it helps (shoot.sh strip). A brand with no screen surface writes `n/a: <reason>`.

## Voice

- 3–4 principles, e.g. "Plain, exact, unhurried. Numbers over adjectives."
- A say / don't say table of at least 7 rows, drawn from the category cliché.
- CTAs, vocabulary (use / avoid), and microcopy for an empty state, an error, a success and a destructive confirm.
- **Languages:** which language in each market, and which local words stay untranslated as product vocabulary. Mocks use the market's main language, or English plus one local sample line; say which.

## Print (when surfaces include packaging, signage or print)

- **Inks:** 1–2 spot inks or CMYK, each named after the pigment it stands for.
- **Stock:** white, kraft or other, added as a pigment with each ink on it as a pair, so palette.py checks colour on the real stock (kraft darkens and dulls ink).
- **Nearest CMYK or Pantone** for each ink, marked as an approximation to confirm with the printer.
- **A one-ink version** of the lockup and of each key artwork.

## tokens.css

```css
@import "src/colors.css";            /* generated by palette.py, never edited by hand */
@font-face { … }                     /* local fonts/ files */
:root {
  --font-sans: …; --font-mono: …;
  --text-display: 500 clamp(48px, 7vw, 96px)/0.95 var(--font-sans); --track-display: -0.04em;
  /* … h1 → data, as in the scale table */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 24px;
  --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px; --space-10: 128px;
  --radius-chip: 3px; --radius-control: 6px; --radius-card: 10px;
  --ease: cubic-bezier(0.2, 0, 0, 1); --dur-1: 120ms; --dur-2: 200ms; --dur-3: 320ms;
}
@media (prefers-reduced-motion: reduce) { :root { --dur-1: 0ms; --dur-2: 0ms; --dur-3: 0ms; } }
```

Map Tailwind's config to these variables only if the site uses Tailwind.
