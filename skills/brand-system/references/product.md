# Phase 5 · Product and landing, Phase 6 · Applications

## The product screen first

A brand is proven inside the product, not on a poster. Design the one screen where the buyer's core loop happens (for example a model's photo-set workspace, an inbox of leads, a deploy log) as static HTML with `tokens.css`.

- Use real data shapes: names, ids, counts, timestamps, a log. Mark the numbers as placeholders.
- Show **every state** of the main object: done, picked, in progress, queued, failed (with the reason), needs review. That's where the signature components appear.
- Make it dense but calm: a sidebar, the work area and an inspector are a proven layout for operator tools.
- The landing page can then reuse this screen as its product shot, which is far more convincing than an abstract illustration.

## The landing page

The structure a senior designer usually starts from (cut whatever doesn't serve this buyer):

1. **Nav:** the lockup, 3–5 links, a secondary CTA and a primary CTA.
2. **Hero:** a headline of 8 words or fewer (from the positioning), one subline that says what it is and for whom, two CTAs, and the signature visual (the brand idea in motion or still).
3. **Proof strip:** customer logos, numbers or quotes, all marked as placeholders.
4. **How it works:** 3 steps in the buyer's words.
5. **The product:** the product screen, annotated.
6. **Features:** each one answers a persona's need or fear from the strategy, not a feature list.
7. **Trust:** privacy, security and ownership; for many buyers this sells more than features.
8. **Pricing:** placeholder, with a clear unit (per set, per seat).
9. **FAQ:** the questions buyers actually ask (taken from the research).
10. **Closing CTA:** a line that echoes the brand idea.
11. **Footer:** links, the placeholder-domain note, and the credits line.

Craft rules:
- Copy comes from the voice table. No lorem ipsum anywhere.
- Plain HTML with `tokens.css`. Tailwind from a CDN is fine for a mock if its config maps to the tokens. Load no other third-party scripts. Fonts come locally or from Google Fonts.
- Responsive at 1440 and 390, with no horizontal scroll on mobile and a 16 px side gutter.
- Use semantic landmarks, visible focus states, alt text on every image, and `prefers-reduced-motion` with static fallbacks for every animation or rotation.
- Each image appears once. Rotating heroes or grids are welcome if they stay light (vanilla JS/CSS).

### Screenshots (look at every one)

```
scripts/shoot.sh full   site/index.html site/shots/landing-1440.png 1440
scripts/shoot.sh view   site/index.html site/shots/landing-1440-hero.png 1440 900
scripts/shoot.sh mobile site/index.html site/shots/landing-390.png 390 2
```

Open each PNG. Check for:
- text colliding or wrapping badly
- orphans in headlines
- images stretched or not loaded
- a too-wide line length
- a mobile layout that is merely the desktop shrunk
- accent overuse (more than one accent thing per screen)

## Phase 6 · Applications

| Asset | Size | Notes |
|---|---|---|
| OG image | 1200×630 | the headline + signature visual + lockup; readable as a 600 px thumbnail |
| X / LinkedIn header | 1500×500 | keep the centre 1000 px safe; the avatar overlaps the bottom-left |
| Profile grid | 3×3 mock | how the brand's own social feed looks: a rhythm of image, type card and product |
| Business card | 85×55 mm, front and back | the mono data style, the clear space rules |
| App icon + avatar | already in logo/ | show them in context |
| Optional | email signature, slide master, invoice header | only if the buyer's world needs them |

Render these as HTML pages screenshotted at their exact pixel sizes, or with PIL. Each one must be recognisable as the brand with the logo covered.
