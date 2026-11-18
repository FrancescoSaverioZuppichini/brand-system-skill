# Phase 3 · Direction

One section a stranger could read and then predict your logo, palette and headline from.

## Vibe and idea

- **Vibe:** one metaphor sentence plus its senses: material, light, era, pace (sound only if the brand has one). E.g. "a night bakery that runs on a stopwatch".
- **Vibe test:** derive one colour, one typeface, one motion and one word from it (oven black, stencilled numerals, motion in ticks, "batch"). If you can't, rewrite it.
- **Brand idea:** the single device only this brand can own, from what it does, the name and the vibe. It becomes the logo's story, the signature component and the signature motion. One line, e.g. for a finance app "every official money word shown twice: the term, then its plain meaning on a highlighter".
- **Cultural root** (optional): the world the brand borrows imagery and vocabulary from, e.g. stamps and ledgers for a tax app. Without one, your own renders are fine.

## What the brand is NOT

Concrete things to ban, visual and verbal. The client's dislikes from brief.md come first, verbatim. Then the parts of the category cliché and of the slop list for your type (`product.md` § Slop tells) that tempt this brand, and what your own first draft did, e.g. "bank navy with shields".

## Style recipe

Pick it with `style-picking.md` from `styles.md` (base + one device from a second family; habit 2 for taste versus cliché), e.g. "Swiss timetable base + rubber-stamp device + public-domain botanical plates". The justification against the cliché goes in branding.md § Direction.

## Three directions, the pick, then palette and type

1. **Directions:** three cheap directions from three angles, each the same small piece of the #1 surface in `surfaces:` (a hero, a bag front, a sign band), as `src/html/direction-{a,b,c}.html` with its colours inline and its fonts from the Google Fonts CSS link (no download yet), shot into `img/`. Then stop for the user's pick (SKILL.md § The pick).
2. **Palette (after the pick):** write `src/colors-in.json` for the chosen direction (format in `system.md` § Colour) and run palette.py. Phase 5 finalises it; everything reads colors.json, so later changes are cheap.
3. **Fonts (after the pick):** download the chosen OFL families into `fonts/` (Tools § Fonts); the logo needs them next.

## Moodboard from your own renders

4–6 tiles made with PIL, SVG or HTML: a type specimen, colour fields in context, a texture or material, a composition, the motif in motion as a frame strip. Public-domain art from the cultural root may appear, credited. Then check the contact sheet against the NOT list and write one line per item on the page: seen / not seen. A first moodboard often drifts into the cliché it bans; redo it before the logo.
