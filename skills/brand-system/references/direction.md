# Phase 3 · Direction

One page a stranger could read and then predict your logo, palette and headline from. Deliverables: the vibe, the brand idea, the NOT list, the style recipe with 3 specimens, a provisional palette and type, and the moodboard.

## The vibe, the idea, the style recipe

- **Vibe:** one metaphor sentence, plus its senses: materials, light, era, pace (and sound only if the brand has one). Examples:
  - "A production house in Milan that runs on a terminal"
  - "A friend at the post-office counter with a pen"
  - "Smoke & Signal: soft pictures, hard interface"
- **The vibe test:** derive one colour, one typeface, one motion behaviour and one word choice from it. If you can't, rewrite it.
- **Brand idea / motif:** the single device only this brand can own, built from what the product does, the name and the vibe. It becomes the logo's story, the signature component and the signature motion. Write it in one line. Examples: "the first crack" (a roaster); "the gloss: every Swiss money word shown twice" (a finance app).
- **Style recipe:** follow `style-picking.md`, choosing from `styles.md`. Map the cliché, choose a base style from `styles.md` that contrasts with it while keeping the category's trust cues, then add one signature device from a second family. Render the same tiny hero in 3 candidate recipes (HTML → `shoot.sh view`), put them side by side on the page, and pick with the strategy.
- **Provisional palette and type:** pick them now, from the recipe and the vibe. Run `palette.py` once, so the moodboard and the logo use real colours. Phase 5 finalises them; changes then are expected and cheap, because everything reads colors.json.
- **The cultural root** is optional. It is the world the brand borrows its imagery and vocabulary from: Leonardo for "Sfumato", paperwork and stamps for a tax app, Lake Lugano paintings for a Ticino roaster. When a product has no natural root, your own renders are fine.

## What the brand is NOT

List concrete clichés to ban, both visual and verbal. Examples:
- hype, neon, purple AI gradients, ✨, countdowns, income claims
- sexualised imagery
- "fake Renaissance" (gilt, swashes, meme versions of famous paintings)
- cold blue SaaS, bank navy with shields
- hacker green-on-black
- boho arches and rainbow fills

Every item should be something a lazy competitor actually does, or something your own first draft did.

## Moodboard from your own renders

Make 4–6 tiles yourself with PIL, SVG or HTML screenshots:
- a type specimen (provisional fonts)
- colour fields in context (provisional palette)
- a texture or material study
- a composition study
- the motif in motion, as a frame strip

Public-domain artworks from the cultural root may appear, credited. Then **check the contact sheet against your own NOT list**: a first moodboard drifting into the very cliché it bans is a common failure. If it does, redo it before the logo.
