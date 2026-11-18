# Picking a style

How to choose a style direction in phase 3 (Direction). The catalogue is `styles.md` (141 styles in 8 families, each with a specimen); this file is the method. The output is one line, the **style recipe**, plus three hero specimens that prove it. The rule behind everything here: **the strategy picks the style, not taste.** A style you like that the strategy can't defend is a guess.

## Contents

1. [The axes a style varies on](#1-the-axes-a-style-varies-on)
2. [Placing the brand on the axes](#2-placing-the-brand-on-the-axes)
3. [The method: cliché → base → device → recipe](#3-the-method-cliché--base--device--recipe)
4. [Mixing rules](#4-mixing-rules)
5. [Fit matrix](#5-fit-matrix)
6. [Trend lifecycle](#6-trend-lifecycle)
7. [Accessibility and performance cost](#7-accessibility-and-performance-cost)
8. [The test before committing](#8-the-test-before-committing)
9. [Briefing parallel designers](#briefing-parallel-designers)

## 1. The axes a style varies on

Names like "Swiss" or "Memphis" are shorthand. Underneath, every style is a position on nine axes. Thinking in axes lets you compare styles that share nothing on the surface, and lets you move away from a cliché on purpose instead of at random.

| Axis | Low end (1) | High end (5) | Low examples | High examples |
|---|---|---|---|---|
| **Temperature** | cool: blue-grey neutrals, grotesk, hard light | warm: cream, earth, serif or rounded, soft light | `swiss`, `devtool-dark`, `hud` | `japandi`, `wellness`, `mid-century` |
| **Density** | sparse: one idea per screen, wide margins | packed: many elements, small type | `minimalism`, `luxury`, `layout-manifesto` | `enterprise-dense`, `broadsheet`, `maximalism` |
| **Era** | timeless or classical | trend-of-now | `type-oldstyle`, `renaissance`, `swiss` | `aurora`, `apple-hig` (Liquid Glass), `neobrutalism` |
| **Formality** | casual, personal, joking | institutional, ceremonial | `zine`, `doodle`, `creator` | `civic`, `professional-services`, `corporate-modernism` |
| **Ornament** | none: function only | decoration everywhere | `web-brutalism`, `civic`, `minimalism` | `baroque`, `victorian`, `islamic-geometric` |
| **Contrast** | low: tints, beiges, soft greys | high: black/white, saturated, huge scale jumps | `japandi`, `neumorphism`, `beauty` | `brutalist-print`, `constructivism`, `sports` |
| **Tactility** | screen-native: flat, pixels, light | physical: paper, ink, grain, material, depth | `flat`, `metro`, `terminal` | `letterpress`, `skeuomorphism`, `riso` |
| **Motion energy** | still | constant, bouncy, cinematic | `motion-none`, `editorial` | `motion-spring`, `type-kinetic`, `motion-generative` |
| **Ornament budget** | the brand can afford one decorative move per screen | the brand can produce and maintain lots of art | a 2-person startup | a fashion house with a photo studio |

The last axis is not a property of the style but of the client: how much image-making, illustration and motion the team can actually produce and keep consistent. A style whose ornament exceeds the budget decays into its cheapest version within six months (maximalism becomes clutter, editorial without photography becomes empty, mascot-led without an illustrator becomes clip art).

## 2. Placing the brand on the axes

Score the brand 1–5 on each axis from the strategy outputs, never from taste. Write the scores and the reason next to each.

| Strategy output | Moves these axes | How |
|---|---|---|
| **Buyer persona** (their fears) | formality, contrast, era | Buyers who fear risk (money, health, legal) need formality ≥ 3 and a slow era. Buyers who fear being boring need energy and contrast. |
| **Daily user** (hours in the product) | density, motion energy | Eight hours a day means density ≥ 3 and motion ≤ 2 in the product, whatever the marketing does. |
| **Personality** (3–5 adjectives) | temperature, formality, energy | "Exact" → cool, low ornament. "Warm" → temperature ≥ 4. "Playful" → energy ≥ 3, formality ≤ 2. Each adjective's "doesn't mean" line caps the axis. |
| **Category cliché** | all | Score the cliché too. The brand moves away from it on 2–3 axes, not all nine: move on all and you lose the category's trust cues. |
| **The gap** | the 2–3 axes you move | The gap sentence names what nobody owns ("nobody sells production to the owner"); translate it into the axes that say it (production → density and formality up, energy down). |
| **Price point** | ornament, density, contrast | Higher price → lower density, more space, ornament either near 0 (modernist luxury) or very high (baroque luxury); never the middle. Low price → higher density and contrast, clear prices. |
| **Channels** | contrast, energy, era | Social-first needs contrast and energy at thumbnail size. Enterprise sales decks need formality. App stores need an icon that survives 60 px. |
| **Lifespan** | era | A brand for ten years sits on slow styles (section 6). A three-month campaign can use a fast one. |
| **Vibe sentence** | temperature, tactility, era | Its materials, light and era map straight onto these. "A Milanese production house that runs on a terminal" → warm-neutral, tactile paper + screen-native mono, timeless with one current device. |

Then sketch both profiles side by side:

```
               cliché  brand   move
temperature      2       4      ↑ warm (vibe: atelier)
density          3       3      =
era              5       2      ↓ slow (buyer fears a tool that dies)
formality        2       4      ↑ (buyer is the owner, not the creator)
ornament         4       2      ↓
contrast         4       4      =
tactility        1       3      ↑ (paper and ink)
motion energy    4       2      ↓ one signature motion only
ornament budget  -       2      small team: one device, not a world
```

Now search `styles.md` for styles whose profile is close to the brand column. That is your candidate list for the base.

## 3. The method: cliché → base → device → recipe

### Step 1 · Map the category's dominant style (the cliché)

Look at the 6–10 competitors from the strategy research and name the style most of them share, using the catalogue's names: "category = `aurora` + `glassmorphism` + `alegria` people". Most categories are a family-4 block (fintech, beauty, wellness, b2b-saas) plus one or two UI trends. Write it into the NOT list with concrete items (purple gradients, floating phone mocks, sparkles).

Also list the category's **trust cues**: what a buyer must see to believe you're a real player. Fintech: numbers, security language, calm. Health: clinicians, plain language, accessibility. Dev tools: real code, docs, speed. Cues are not the style; you can keep them while changing the style.

### Step 2 · Choose a base style that contrasts with the cliché but keeps the trust cues

The base owns type, colour, radius, depth rule and layout. Pick it from the candidates in section 2, then check:

- It differs from the cliché on 2–3 axes, visibly in a thumbnail.
- It can carry every trust cue (a terminal base can carry "real code"; it can't carry "clinicians you can trust").
- It survives the product screen, not just the hero: test it on a table, a form and an empty state.
- It matches the price point and the ornament budget.

Good bases are usually slow styles (section 6): `swiss`, `editorial`, `corporate-modernism`, `type-mono`-led, `japanese-ma`, `civic`, `technical-manual`, `minimalism`, `scandinavian`. Fast styles make poor bases and good accents.

### Step 3 · Add one signature device from a second family

The device is where the brand idea lives: one recognisable move from another family, used in the logo story, one signature component and the signature motion. Examples:

| Device | From | Used as |
|---|---|---|
| ASCII resolve (░▒▓█ ramp) | `ascii-art` + `motion-stepped` | progress, loading, image reveal |
| Duotone in the two brand colours | `duotone` | every photograph |
| Engraved hatching | `engraving` | illustrations, empty states, certificates |
| Riso overprint | `riso` | campaign art, social tiles |
| Bayer dither | `dithered` | image placeholders, hover states |
| Split-flap counter | `motion-stepped` + `wayfinding` | every number that changes |
| Hard offset shadow | `neobrutalism` | the primary button only |
| A painted public-domain source | `painterly`, `renaissance` | the hero image, treated fully |

One device. If you want a second, it has to be the same idea in another medium (the ASCII ramp as both the progress bar and the loading motion is one device).

### Step 4 · Write the style recipe in one line

`<base> base + <device> device [+ <imagery> imagery] [· <motion> motion]`

Examples:
- "Swiss editorial base + ASCII resolve device + Renaissance imagery · stepped motion" (an AI image-production tool for agencies; cliché = aurora + glass + neon).
- "Broadsheet base + engraving device + documentary photography · no-motion" (a bank for freelancers; cliché = navy + lime + floating phone).
- "Bauhaus base + pixel device · spring motion" (a coding app for kids; cliché = chunky-green Duolingo clones).
- "Japanese-ma base + riso device + editorial photography" (a ceramics marketplace; cliché = beige Japandi with sage).
- "Technical-manual base + split-flap device · stepped motion" (an EV-charging network; cliché = dark studio with wide caps).

Put the recipe at the top of the Direction section on the review page and in `branding.md`, with one sentence each on why the base and why the device. Everything after phase 3 cites it.

## 4. Mixing rules

1. **One base family + one accent family. Never three.** Layout and motion languages don't count toward the limit (every brand has one of each), but they must agree with the base. An imagery style counts as the device unless the device is already a component; then the imagery must come from the base's own world.
2. **The base owns the system.** Type, colour roles, radius and the depth rule come from the base. The device may add one colour (the overprint ink, the duotone pair) and one component; it may not add a font family or a second depth rule.
3. **One depth rule.** Borders, shadows, glass, bevels or overprint: pick one. Glass cards with neobrutal shadows, or neumorphic buttons in a Swiss grid, read as broken.
4. **One display voice.** Two expressive faces from different families (a didone and a pixel font) fight unless the clash is the idea and is used once.
5. **Eras clash on purpose only.** An anachronism can be the brand idea ("Renaissance painting rendered in a terminal"), but then it's the device, executed fully, and everything else is quiet.
6. **The device appears in three places, no more:** the logo story, one signature component and the signature motion. Everywhere else is the base.
7. **The product stays on the base.** Devices live in marketing, empty states and moments. A dashboard full of the device is a theme park.

Pairs that work and pairs that don't:

| Works | Why |
|---|---|
| `swiss` + `ascii-art`, `dithered`, `duotone` | a strict grid gives a texture device room |
| `editorial` + `painterly`, `engraving`, `collage` | the page frames the image like a magazine |
| `devtool-dark` + `terminal` or `motion-stepped` | same world, adds an idea |
| `scandinavian` + `flat-vector` or `mascot` | warmth plus a voice |
| `technical-manual` + `blueprint` or `type-mono` | the object speaks |
| `japanese-ma` + `riso` or `line-art` | restraint with one handmade note |

| Clashes | Why |
|---|---|
| `glassmorphism` + `neobrutalism` | two depth rules |
| `luxury` + `doodle` | formality 5 vs 1 with no idea joining them |
| `civic` + `aurora` | accessibility-first base, contrast-hostile device |
| `maximalism` + anything | maximalism is already several families; it takes no device |
| `alegria` + anything | name it in the NOT list instead |

## 5. Fit matrix

The **cliché** is what most of the category already looks like. **Recommended bases** stand apart from it while keeping the trust cues. **Good devices** pair with those bases. **Risky** means it can work but usually fails; **avoid** means the strategy almost never supports it.

| Category | Cliché | Recommended bases | Good devices | Risky | Avoid |
|---|---|---|---|---|---|
| Dev tools, infra | `devtool-dark`, `layout-centred-hero` + glow, `layout-bento` | `swiss`, `technical-manual`, `editorial`, light `type-mono` | `ascii-art`, `dithered`, `terminal`, `motion-stepped` | `web-brutalism`, `pixel` | `glassmorphism`, `alegria`, `claymorphism` |
| B2B SaaS | `b2b-saas` + `shadcn` + `layout-bento` | `corporate-modernism`, `swiss`, `editorial`, `scandinavian` | `isometric`, `duotone`, `engraving`, `doodle` | `neobrutalism`, `mesh-gradient` | `alegria`, `aurora` as the whole look |
| Fintech, banking | `fintech` (navy + lime + phone) | `broadsheet`, `editorial`, `corporate-modernism`, `swiss` | `engraving`, `type-mono` figures, `wayfinding` | `neobrutalism` (for youth), `pixel` | `web3`, `glassmorphism`, `anti-design` |
| Crypto, web3 | `web3`, `aurora`, `glassmorphism` | `swiss`, `fintech`, `editorial`, `technical-manual` | `generative`, `dithered`, `terminal` | `pixel`, `y2k` | `alegria` |
| AI products | `aurora` + sparkles, or `ai-lab` | `editorial`, `swiss`, `japanese-ma`, `technical-manual` | `ascii-art`, `painterly`, `collage`, `generative` | `surrealism`, `holographic` | `hud` robots, `alegria`, `aurora` as identity |
| Healthcare, clinical | `healthcare` (teal + stock smile) | `civic`, `scandinavian`, `type-humanist`, `editorial` | `line-art`, `documentary`, `wayfinding` | `wellness` (reads unscientific) | `cyberpunk`, `anti-design`, `glitch` |
| Wellness | `wellness` (sage + arch + terracotta) | `japanese-ma`, `editorial`, `scandinavian`, `swiss` | `riso`, `engraving` (botanical), `line-art` | `blob`, `holographic` | `gaming`, `hud` |
| Beauty | `beauty` (blush + serif + dewy skin) | `technical-manual` (clinical), `swiss`, `editorial`, `art-nouveau` | `engraving`, `studio-product`, `duotone` | `y2k`, `holographic` | `enterprise-dense` |
| Luxury, fashion | `luxury` (tracked caps sans, "blanding") | `type-didone`, `editorial`, `baroque`, `art-deco`, `brutalist-print` | `editorial-photo`, `painterly`, `collage` | `anti-design` (only with real cultural capital) | `flat`, `kids`, `alegria` |
| Food and drink | `food-craft` (wonky serif + badges) | `swiss`, `mid-century`, `japanese-ma`, `broadsheet` | `riso`, `letterpress`, `halftone`, `type-display` | `maximalism` | `devtool-dark`, `enterprise-dense` |
| Kids, education | `kids` (chunky green, rounded) | `bauhaus`, `scandinavian`, `de-stijl`, `editorial` (for parents) | `pixel`, `mascot`, `doodle`, `riso` | `claymorphism`, `memphis` | `cyberpunk`, `luxury`, `nightlife` |
| Games | `gaming` (dark, neon, chamfers) | `pixel`, `ukiyo-e`, `medieval`, `editorial`, `retro-os` | `dithered`, `painterly`, `glitch` | `cyberpunk` | `civic`, `corporate-modernism` |
| Civic, NGO | `civic` (GOV.UK pattern) | `civic`, `wayfinding`, `swiss` (keep it) | `documentary`, `type-humanist`, `line-art` | `editorial` (watch density) | anything with flashing, glass or low contrast |
| Media, publishing | `editorial` (Substack serif) | `broadsheet`, `brutalist-print`, `swiss`, `postmodern` | `duotone`, `halftone`, `collage`, `engraving` | `maximalism` | `shadcn`, `material` |
| Culture, museums | `brutalist-print`, `swiss` | `new-wave`, `postmodern`, `constructivism`, `art-nouveau` (by root) | `type-kinetic`, `generative`, `riso` | `anti-design` | `b2b-saas`, `alegria` |
| Hardware, devices | `minimalism` + `studio-product` | `technical-manual`, `swiss`, `retro-futurism` | `blueprint`, `dithered`, `motion-stepped` | `skeuomorphism` | `alegria`, `flat-vector` |
| Mobility, automotive | `automotive` (dark studio, wide caps) | `wayfinding`, `technical-manual`, `streamline`, `scandinavian` | `motion-stepped` (split-flap), `blueprint`, `documentary` | `retro-futurism` | `kids`, `doodle` |
| Outdoor | `outdoor` (topo lines, orange) | `swiss`, `japanese-ma`, `technical-manual` | `engraving`, `documentary`, `riso` | `blueprint` | `glassmorphism`, `aurora` |
| Hospitality, travel | `japandi` beige or `luxury` | `mid-century`, `art-deco`, `googie`, `editorial` | `editorial-photo`, `letterpress`, `riso` | `maximalism` | `enterprise-dense`, `terminal` |
| Creator, personal | `creator` (thumbnail faces, stickers) | `editorial`, `zine`, `web-brutalism`, `layout-index` | `doodle`, `collage`, `type-handwritten` | `neobrutalism` | `corporate-modernism` |
| Nightlife, adult | `nightlife` (red neon, lips) | `art-deco`, `brutalist-print`, `type-didone`, `editorial` | `editorial-photo` (flash), `duotone`, `grunge` | `synthwave` | `kids`, `civic`, `alegria` |
| Professional services | `professional-services` (navy + serif) | `swiss`, `editorial`, `corporate-modernism`, `broadsheet` | `engraving`, `type-mono` figures, `documentary` | `neobrutalism` (challengers only) | `y2k`, `memphis` |
| E-commerce DTC | `beauty`/`food-craft` + `layout-catalogue` | `swiss`, `editorial`, `scandinavian` | `studio-product`, `duotone`, `type-display` | `maximalism` | `enterprise-dense` |

## 6. Trend lifecycle

Styles age at different speeds. The fast ones are fine for a campaign and dangerous as a base.

| Speed | Styles | Typical life as "current" |
|---|---|---|
| **Fast (1–3 years)** | `glassmorphism`, `neumorphism`, `claymorphism`, `alegria`, `aurora`, `holographic`, `blob`, `y2k`, `web3`, `neobrutalism`, `clay-3d`, Liquid Glass imitations (`apple-hig`), "dopamine" `maximalism`, `layout-bento` as the whole page | peaks within a year of first Dribbble/Behance wave, then marks the year it was made |
| **Medium (3–7 years)** | `flat`, `material` (per version), `shadcn`, `devtool-dark`, `mesh-gradient`, `beauty` clean-girl, `wellness` sage, `food-craft` wonky serif, `isometric`, `flat-vector`, `type-geometric` (Circular-alikes) | becomes "the default" of a category, then reads as the previous generation |
| **Slow (10+ years)** | `swiss`, `editorial`, `type-mono`, `corporate-modernism`, `wayfinding`, `civic`, `minimalism` (sameness risk), `japanese-ma`, `technical-manual`, `documentary`, `type-oldstyle`, `type-serif-editorial`, `letterpress` (if restrained) | doesn't mark a year; risk is invisibility, not dating |
| **Cyclical revivals** | `y2k`, `frutiger-aero`, `grunge`, `retro-os`, `web1`, `vaporwave`, `synthwave`, `memphis`, `psychedelic` | come back on a roughly 20–30-year nostalgia cycle, peak for 1–2 years, leave again |

Rules:
- **Product UI sits on slow styles.** Users live there for years; re-skinning a product every trend cycle costs real money and breaks habits.
- **Marketing may borrow a fast style** for one campaign, as an accent, with an end date.
- **A slow base + a fast device** is the safest way to look current: when the device dates, you swap the device, not the brand.
- **Check the date stamp.** Ask: "If I saw this in five years, would I know the year it was made?" If yes, the style is the fast part; make sure it is the replaceable part.

## 7. Accessibility and performance cost

Every style has a price. Note it in the recipe's rationale and plan the mitigation before you commit.

| Styles | Accessibility risk | Performance cost | Mitigation |
|---|---|---|---|
| `glassmorphism`, `apple-hig` (Liquid Glass), `fluent` acrylic | text contrast depends on what's behind the glass; often fails AA | `backdrop-filter` is GPU-heavy, janky on low-end Android | glass only on chrome over known backgrounds; solid fallback under `prefers-reduced-transparency` |
| `neumorphism` | controls under 3:1 against the surface (WCAG 1.4.11); invisible focus and disabled states | low | don't use it for real UI |
| `aurora`, `mesh-gradient`, `holographic` | gradient text and text over bright regions fail AA | large blurred layers and WebGL cost GPU and battery | text on solid plates; static image fallback; pause off-screen |
| `psychedelic`, `glitch`, `cyberpunk`, `synthwave` | flashing above 3 per second (2.3.1); vibrating colours; low legibility | animated filters | no flashing; reduced-motion static version |
| `type-kinetic`, `motion-scroll`, `layout-long-scroll`, `motion-cinematic` | moving text is hard to read (2.2.2); parallax triggers vestibular issues (2.3.3); scroll-jacking breaks keyboard use | main-thread scroll handlers | CSS scroll timelines; never hijack scroll; reduced motion = static |
| `spatial`, `clay-3d`, `generative`, `motion-generative` | motion sickness; content hidden in canvas | real-time 3D/canvas: CPU/GPU, battery, bundle size | static poster frame; render on demand; DOM text, not canvas text |
| `pixel`, `type-handwritten`, `type-blackletter`, `type-display`, `retro-os` | low legibility at body size; dyslexia | extra font files | keep these to display sizes; body in a text face |
| `dithered`, `halftone`, `riso`, `grunge`, `zine`, `islamic-geometric` | texture or pattern behind text kills contrast | noise textures and large SVG patterns weigh bytes | text on plain fields; small tiled SVG, not big PNGs |
| `luxury`, `type-didone`, `japandi`, `beauty`, `japanese-ma` | tiny tracked caps, hairlines and beige-on-beige fail AA | heavy photography | ≥ 4.5:1 on all text; labels ≥ 12 px; responsive images |
| `enterprise-dense`, `broadsheet`, `technical-manual` | small text, small targets | low | 13–14 px minimum for UI text; 24 px minimum targets (2.5.8) |
| `ascii-art`, `terminal` | screen readers read character soup | low | `aria-hidden` on art plus real alt text |
| `civic`, `swiss`, `type-humanist`, `wayfinding`, `motion-none` | lowest risk | lowest cost | the baseline to measure the others against |

## 8. The test before committing

Never pick from the catalogue alone. Render, then decide.

1. **Pick three candidates.** Three recipes that differ on at least two axes each (not three shades of one idea). Usually: one close to the category (keeps every trust cue), one in the middle, one far from it.
2. **Render the same two things in each:** the hero (eyebrow, headline, subline, button) and one real product card (the core object with a number and a state). Start from the atlas specimens (`atlas/specimens/<slug>.html`) of your bases and add the device. Same copy, same content, same size (1440 × 900 hero, 390 px mobile card).
3. **Put them next to the cliché.** One row: three competitor screenshots (as links or your own redraws, never their files), then your three candidates.
4. **Score with the strategy, not with taste.** For each candidate, 0–2 points per line:

| Question | Evidence |
|---|---|
| Does it stand apart from the cliché in a thumbnail? | the row from step 3, viewed at 25 % |
| Does it keep every trust cue from step 1? | list the cues, tick them |
| Can you derive it from the vibe sentence? | colour, type, motion and word each trace back to it |
| Does it carry the brand idea? | the device expresses the one idea |
| Does it survive the product card, not just the hero? | the card, at 390 px |
| Is the accessibility and performance cost acceptable? | section 7 |
| Will it still look right in 3–5 years? | section 6 |
| Can this team produce it every week? | ornament budget |

5. **Pick the highest score.** On a tie, pick the one that is further from the cliché. Write the scores and the one-line reason on the review page, and mark the choice ★ with the other two kept, labelled, on the page. If the user wants to decide, mark it ❓ with your recommendation.

## Briefing parallel designers

When you run N designers in parallel (`SKILL.md` § Several directions at once), the most common failure is N versions of the same direction: everyone reads the same strategy and lands on the same "safe modern" look. Force the spread with the brief.

1. **Assign each designer a different base family before they start.** Not a style, a family, so each still chooses: A = family 1 (modernist and print), B = family 2 (an art movement from the brand's cultural root), C = family 3 (a digital-native language) or family 6 (a type-led direction). No two designers share a family.
2. **Assign a distance from the cliché.** A = near (keeps every trust cue, differs on 2 axes), B = mid, C = far (differs on 4+ axes; must still name which trust cues it keeps).
3. **Assign a lens** (who the direction serves first): the buyer, the daily user, the culture behind the name.
4. **Give every designer the same NOT list and cliché map.** They avoid the same clichés, so their differences are real choices.
5. **Ask for the recipe as line one** of their direction section, plus their axis scores. Before they build anything, check the recipes: if two share a base family, an era setting or a temperature setting within one point, re-brief one of them.
6. **Same test, same content.** Each one renders the hero and the product card from section 8, with the same copy, so you can compare them side by side.

Brief template, one per designer:

```
Direction <A|B|C> · base family: <family> · distance from cliché: <near|mid|far> · lens: <buyer|user|culture>
Cliché to avoid (shared): <one line> · NOT list (shared): <link>
Trust cues you must keep: <list>
Deliver first: your style recipe in one line + axis scores (section 2) + why it wins for <persona>.
Then: the 3-candidate test inside your family (section 8), the ★ pick, and continue the phases in your own folder.
You will be compared against two other directions; commit to a clear stance.
```

Example spreads that work:

| Category | A (near) | B (mid) | C (far) |
|---|---|---|---|
| Dev tool | `swiss` + `type-mono` | `technical-manual` + `dithered` | `renaissance` imagery on `editorial` + `ascii-art` |
| Bank for freelancers | `fintech` calm + `engraving` | `broadsheet` + `type-mono` | `scandinavian` + `mascot` |
| Skincare | `beauty` + `studio-product` | `technical-manual` (clinical) + `duotone` | `art-nouveau` + `engraving` (botanical) |
| Kids coding | `kids` + `pixel` | `bauhaus` + `motion-spring` | `de-stijl` + `riso` |
