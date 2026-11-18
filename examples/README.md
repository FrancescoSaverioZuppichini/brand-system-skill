# Examples: the catalogues as shadcn/ui

Every layout variant in [`layouts.md`](../skills/brand-system/references/layouts.md) is a real block here, and every
style in [`styles.md`](../skills/brand-system/references/styles.md) is a theme, so any block renders in any style.
Bun + Vite + React 19 + Tailwind 4 + shadcn/ui (new-york, Radix, Lucide).

## Run it

```sh
bun install
bun dev            # http://localhost:5173
bun run typecheck
bun run format     # Biome
```

- `/` is the gallery: pick a style and a block (or a specimen, or a landing); each preview is an iframe at full width
  next to a 390 px one, so the mobile frame uses the real breakpoints.
- `/block/<section>/<variant>?style=<slug>`: one block, e.g. `/block/hero/split?style=swiss`.
- `/specimen/<slug>`: the 800 × 500 atlas specimen of a style (the `nav/minimal` block, hero copy, a button and one
  number card).
- `/landing/<name>?style=<slug>`: the five landings from layouts.md § Composing a landing, built from the blocks.

## How it is built

```
src/blocks/<section>/<variant>.tsx   one block per layouts.md variant; the file path is its id ("hero/split")
src/styles/<slug>.json               the style's colours, in the skill's colors-in.json format (palette.py checks it)
src/styles/<slug>.ts                 fonts, radius, border, shadow, heading treatment, specimen css, decor
src/styles/decor/<slug>.tsx          CSS/SVG art behind the specimen, for the styles whose identity needs it
src/demo/                            the shared story (content.ts) and product UI drawn as components
src/theme.ts                         turns a style into CSS variables on <html>
src/pages/                           the gallery and the specimen
scripts/shoot.ts                     the atlas screenshots
```

A style is data. `theme.ts` sets each pigment of `<slug>.json` as a variable (`--gold`), points the shadcn roles at
them (`--primary: var(--gold)`), and sets the fonts, `--radius`, `--border-width`, `--shadow` and the heading
treatment. `index.css` maps those to Tailwind (`bg-primary`, `font-heading`, `rounded-lg`, `shadow-sm`), so the
shadcn components and every block restyle with no per-style code.

## Add a style

1. Write `src/styles/<slug>.json` from the style's token sketch: pigments named for the style's world (`[L, C, H,
   "what it is"]`), the 18 shadcn roles plus `chart-1`…`chart-5` under `roles.light` (or `roles.dark` with
   `"default": "dark"`), and the contrast pairs. The format is in `references/system.md` § Colour.
2. Check it: `uv run ../skills/brand-system/scripts/palette.py src/styles/<slug>.json /dev/null`. It must print no
   PROBLEMS (text pairs 4.5:1, focus ring 3:1, every colour inside sRGB).
3. Write `src/styles/<slug>.ts` (`satisfies Style`): the Google Fonts (OFL) query, radius, border width, shadow,
   heading weight/case/tracking, and `specimen: "start" | "center"`.
4. Art-direct the specimen with `css`: rules nested under the style's root that target the specimen's parts
   (`[data-part=frame|nav|body|copy|kicker|headline|accent|sub|button|card|label|number|caption|chart]`) or shadcn
   slots (`[data-slot=button]`). Pigments are variables, so `color: var(--gold)` works.
5. If the style needs art (a frame, a grid, a texture), add `src/styles/decor/<slug>.tsx`: CSS and inline SVG only, no
   image files; `decor/grain.tsx` is the shared paper grain.
6. Shoot it and compare: `bun scripts/shoot.ts specimens <slug>`.

## Add a block

1. Create `src/blocks/<section>/<variant>.tsx` with a default export and no props. The id must match the variant's id
   in layouts.md; the gallery and the shooter find it by its path.
2. Compose shadcn components from `@/components/ui` (add missing ones with `bunx --bun shadcn@latest add <name>`, then
   fix the import if the CLI writes `from "cn"`: it must be `@/lib/utils`).
3. Tell Keep's story from `@/demo/content`, and draw product UI with `@/demo` (`AppWindow`, `ProjectsTable`,
   `AreaChart`, `Sparkline`, `Bars`, `Photo`, `Phone`, `Code`, `Logo`, `CustomerLogo`).
4. Colours only through roles (`bg-card`, `text-muted-foreground`, `bg-chart-2`); headings only get a size and leading,
   because the style sets their family, weight, case and tracking.
5. Lay it out mobile-first and check both 390 and 1440: `bun scripts/shoot.ts blocks <section>/<variant>`.

## Re-shoot

```sh
bun scripts/shoot.ts specimens [slug…]     # atlas/<slug>.jpg, 800×500, under 120 KB
bun scripts/shoot.ts blocks [section|id…]  # atlas/blocks/<section>/<variant>.jpg (1440) and <variant>-390.jpg
bun scripts/shoot.ts sheets [section…]     # atlas/blocks/sheets/<section>.jpg, every variant of a section
bun scripts/shoot.ts landings [name…]      # atlas/blocks/landings/<name>.jpg
```

The shooter starts its own Vite server and drives the installed Google Chrome (playwright-core). It waits for the
network, then fails with `FONTS MISSING` when text is set in a family that never loaded, and warns with `OVERFLOW`
when a page is wider than its viewport. `--style=<slug>` shoots blocks in another style (default `shadcn`);
`--out=<dir>` writes somewhere other than `atlas/`.
