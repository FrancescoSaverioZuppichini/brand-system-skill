<p align="center">
  <img src="assets/readme/hero.gif" width="800" alt="The same small landing page rendered in 30 of the 141 styles: Swiss, Art Deco, dev-tool dark, risograph, baroque, Y2K, terminal, Memphis, luxury, vaporwave and more">
</p>

<h1 align="center">Brand System</h1>

<p align="center">
  <b>A senior brand designer, packaged as an agent skill.</b><br>
  One prompt gets you strategy, three directions to pick from, a logo that survives 16 px, OKLCH tokens with computed contrast, and the real surfaces, on a live review page.
</p>

```bash
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system
```

<p align="center">
  Claude Code · Codex · any agent that reads Agent Skills<br>
  <a href="#one-prompt--a-whole-brand">Example run</a> ·
  <a href="#the-pick-three-directions-then-you-decide">The pick</a> ·
  <a href="#141-styles">141 styles</a> ·
  <a href="#193-layouts">193 layouts</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#install">Install</a> ·
  <a href="#faq">FAQ</a>
</p>

## One prompt → a whole brand

> Make a full brand kit for Tostato, a small specialty coffee roaster in Lugano. They sell beans by subscription online and supply ~30 cafés in Ticino. The owner wants it warm and premium but not hipster-cliché, and it has to work on bags, a web shop and Instagram.

One run on Claude Sonnet, about 25 minutes. Every picture below is that run's output; the strategy and palette panels set its own text and numbers. Tostato is fictional; prices, dates and batch numbers are labelled placeholders.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/tostato-run-dark.jpg">
  <img src="assets/readme/tostato-run-light.jpg" width="100%" alt="Eight panels from one run: strategy, direction moodboard, logo size test, OKLCH palette with contrast ratios, the shop landing page, the subscription screen, coffee bag labels and the OG card">
</picture>

**The idea: the first crack.** One cut is the logo (a T whose arm cracked off), the roast chip on every bag, the 240 ms motion and the short, decisive sentences.

<table>
  <tr>
    <td width="50%"><img src="assets/readme/tostato/logo-family.png" alt="Tostato logo on light, dark, one colour, the accent, stacked, app icon and avatar"><br><sub>One mark, every version: light, dark, one colour, on the accent, stacked, app icon, avatar</sub></td>
    <td width="50%"><img src="assets/readme/tostato/business-card.png" alt="Tostato business card, front with the mark and back with placeholder contact details"><br><sub>Business card, 85 × 55 mm</sub></td>
  </tr>
  <tr>
    <td><img src="assets/readme/tostato/components.png" alt="Five signature components: roast chip, freshness ruler, crack divider, roast stamp, delivery timeline"><br><sub>Five signature components, all from the one cut</sub></td>
    <td><img src="assets/readme/tostato/m2-colour.png" alt="The roast ladder: four colour fields from light to dark roast"><br><sub>The colour is the roast: the ladder printed on every bag</sub></td>
  </tr>
</table>

## The pick: three directions, then you decide

Taste is your call, so the skill never picks the style alone. After a short strategy it renders the same small piece of your #1 surface in three directions, each from a different angle and a different style family, puts a ★ on its recommendation, and stops: **A, B, C, or a mix?** Nothing gets polished until you answer.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/pick-dark.jpg">
  <img src="assets/readme/pick-light.jpg" width="100%" alt="Three directions for Tostato side by side, A recommended, then the agent asks A, B, C, or a mix">
</picture>

<sub>Re-created for this README: the Tostato run predates the pick, so A is the run's own hero and B and C were rendered for this example.</sub>

## Same skill, another brief

> Brand for Franco, a personal-finance app for expats living in Switzerland (pillar 3a, taxes, budgeting in CHF). Look at my other brand's branding.md (a strict Vercel-like token system) for the level of rigour I want, but don't copy it. Light theme, trustworthy, a bit witty.

Also Claude Sonnet, also about 25 minutes. **The idea: the gloss.** Every Swiss money word is shown twice, the original and then the plain version in highlighter. The logo, the signature component, the motion and the voice all do it.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/franco-dark.jpg">
  <img src="assets/readme/franco-light.jpg" width="100%" alt="Franco: landing page, product screen, glossed F logo size test, colour system, Instagram grid and OG card">
</picture>

<p align="center">
  <img src="assets/readme/franco-gloss.gif" width="560" alt="Franco's signature motion: the German word, a highlighter swipe, then the plain English lands"><br>
  <sub>The signature motion: the original word, a highlighter swipe, the plain words, a stamp</sub>
</p>

Every surface is designed at 390 px too, not the desktop shrunk. `shoot.sh` prints `OVERFLOW` when a page scrolls sideways.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/phones-dark.jpg">
  <img src="assets/readme/phones-light.jpg" width="100%" alt="Four phone screens at 390 px: Tostato shop and subscription, Franco landing and product">
</picture>

## 141 styles

The same small page in 141 styles, in 8 families. Each entry in [`styles.md`](skills/brand-system/references/styles.md) has the signature traits, a token sketch (OFL fonts, an OKLCH palette, radius, depth), when to pick it, when not to, and how fast it dates. [`style-picking.md`](skills/brand-system/references/style-picking.md) is the method: name the category's cliché, pick a base that stands apart from it but keeps the trust cues, add one device from a second family.

<a href="skills/brand-system/references/styles.md"><img src="assets/readme/styles.jpg" width="100%" alt="Mosaic of all 141 style specimens"></a>

Click a family, then a specimen, to read its entry. Each specimen is rendered from its shadcn/ui theme in [`examples/src/styles/`](examples/src/styles).

<details>
<summary><b>Modernist and print</b> · 14 styles · Swiss / International Typographic, Bauhaus, Constructivism, De Stijl…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#swiss"><img src="atlas/swiss.jpg" width="180" alt="Swiss / International Typographic specimen"></a><br><sub>Swiss / International Typographic</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#bauhaus"><img src="atlas/bauhaus.jpg" width="180" alt="Bauhaus specimen"></a><br><sub>Bauhaus</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#constructivism"><img src="atlas/constructivism.jpg" width="180" alt="Constructivism specimen"></a><br><sub>Constructivism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#de-stijl"><img src="atlas/de-stijl.jpg" width="180" alt="De Stijl specimen"></a><br><sub>De Stijl</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#mid-century"><img src="atlas/mid-century.jpg" width="180" alt="Mid-century modern specimen"></a><br><sub>Mid-century modern</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#corporate-modernism"><img src="atlas/corporate-modernism.jpg" width="180" alt="Corporate modernism specimen"></a><br><sub>Corporate modernism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#editorial"><img src="atlas/editorial.jpg" width="180" alt="Editorial / magazine specimen"></a><br><sub>Editorial / magazine</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#broadsheet"><img src="atlas/broadsheet.jpg" width="180" alt="Newspaper / broadsheet specimen"></a><br><sub>Newspaper / broadsheet</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#brutalist-print"><img src="atlas/brutalist-print.jpg" width="180" alt="Brutalist print specimen"></a><br><sub>Brutalist print</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#riso"><img src="atlas/riso.jpg" width="180" alt="Risograph specimen"></a><br><sub>Risograph</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#zine"><img src="atlas/zine.jpg" width="180" alt="Zine / DIY specimen"></a><br><sub>Zine / DIY</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#letterpress"><img src="atlas/letterpress.jpg" width="180" alt="Letterpress specimen"></a><br><sub>Letterpress</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#wayfinding"><img src="atlas/wayfinding.jpg" width="180" alt="Signage / wayfinding specimen"></a><br><sub>Signage / wayfinding</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#technical-manual"><img src="atlas/technical-manual.jpg" width="180" alt="Technical manual specimen"></a><br><sub>Technical manual</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Art and historical movements</b> · 21 styles · Renaissance / classical, Baroque, Medieval / illuminated, Victorian…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#renaissance"><img src="atlas/renaissance.jpg" width="180" alt="Renaissance / classical specimen"></a><br><sub>Renaissance / classical</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#baroque"><img src="atlas/baroque.jpg" width="180" alt="Baroque specimen"></a><br><sub>Baroque</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#medieval"><img src="atlas/medieval.jpg" width="180" alt="Medieval / illuminated specimen"></a><br><sub>Medieval / illuminated</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#victorian"><img src="atlas/victorian.jpg" width="180" alt="Victorian specimen"></a><br><sub>Victorian</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#arts-and-crafts"><img src="atlas/arts-and-crafts.jpg" width="180" alt="Arts & Crafts specimen"></a><br><sub>Arts & Crafts</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#art-nouveau"><img src="atlas/art-nouveau.jpg" width="180" alt="Art Nouveau specimen"></a><br><sub>Art Nouveau</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#art-deco"><img src="atlas/art-deco.jpg" width="180" alt="Art Deco specimen"></a><br><sub>Art Deco</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#streamline"><img src="atlas/streamline.jpg" width="180" alt="Streamline Moderne specimen"></a><br><sub>Streamline Moderne</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#googie"><img src="atlas/googie.jpg" width="180" alt="Googie / Atomic age specimen"></a><br><sub>Googie / Atomic age</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#psychedelic"><img src="atlas/psychedelic.jpg" width="180" alt="Psychedelic specimen"></a><br><sub>Psychedelic</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#pop-art"><img src="atlas/pop-art.jpg" width="180" alt="Pop art specimen"></a><br><sub>Pop art</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#surrealism"><img src="atlas/surrealism.jpg" width="180" alt="Surrealism specimen"></a><br><sub>Surrealism</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#memphis"><img src="atlas/memphis.jpg" width="180" alt="Memphis specimen"></a><br><sub>Memphis</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#new-wave"><img src="atlas/new-wave.jpg" width="180" alt="New Wave typography specimen"></a><br><sub>New Wave typography</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#postmodern"><img src="atlas/postmodern.jpg" width="180" alt="Postmodern / deconstructivist specimen"></a><br><sub>Postmodern / deconstructivist</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#punk"><img src="atlas/punk.jpg" width="180" alt="Punk specimen"></a><br><sub>Punk</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#grunge"><img src="atlas/grunge.jpg" width="180" alt="Grunge specimen"></a><br><sub>Grunge</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#japanese-ma"><img src="atlas/japanese-ma.jpg" width="180" alt="Japanese minimal specimen"></a><br><sub>Japanese minimal</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#scandinavian"><img src="atlas/scandinavian.jpg" width="180" alt="Scandinavian specimen"></a><br><sub>Scandinavian</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#ukiyo-e"><img src="atlas/ukiyo-e.jpg" width="180" alt="Ukiyo-e specimen"></a><br><sub>Ukiyo-e</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#islamic-geometric"><img src="atlas/islamic-geometric.jpg" width="180" alt="Islamic geometric specimen"></a><br><sub>Islamic geometric</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Digital UI eras</b> · 35 styles · Skeuomorphism, Retro OS, Web 1.0 / GeoCities, Y2K…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#skeuomorphism"><img src="atlas/skeuomorphism.jpg" width="180" alt="Skeuomorphism specimen"></a><br><sub>Skeuomorphism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#retro-os"><img src="atlas/retro-os.jpg" width="180" alt="Retro OS specimen"></a><br><sub>Retro OS</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#web1"><img src="atlas/web1.jpg" width="180" alt="Web 1.0 / GeoCities specimen"></a><br><sub>Web 1.0 / GeoCities</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#y2k"><img src="atlas/y2k.jpg" width="180" alt="Y2K specimen"></a><br><sub>Y2K</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#frutiger-aero"><img src="atlas/frutiger-aero.jpg" width="180" alt="Frutiger Aero specimen"></a><br><sub>Frutiger Aero</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#flat"><img src="atlas/flat.jpg" width="180" alt="Flat specimen"></a><br><sub>Flat</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#metro"><img src="atlas/metro.jpg" width="180" alt="Metro specimen"></a><br><sub>Metro</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#material"><img src="atlas/material.jpg" width="180" alt="Material Design specimen"></a><br><sub>Material Design</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#apple-hig"><img src="atlas/apple-hig.jpg" width="180" alt="Apple HIG specimen"></a><br><sub>Apple HIG</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#fluent"><img src="atlas/fluent.jpg" width="180" alt="Fluent specimen"></a><br><sub>Fluent</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#glassmorphism"><img src="atlas/glassmorphism.jpg" width="180" alt="Glassmorphism specimen"></a><br><sub>Glassmorphism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#neumorphism"><img src="atlas/neumorphism.jpg" width="180" alt="Neumorphism specimen"></a><br><sub>Neumorphism</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#claymorphism"><img src="atlas/claymorphism.jpg" width="180" alt="Claymorphism specimen"></a><br><sub>Claymorphism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#neobrutalism"><img src="atlas/neobrutalism.jpg" width="180" alt="Neobrutalism specimen"></a><br><sub>Neobrutalism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#web-brutalism"><img src="atlas/web-brutalism.jpg" width="180" alt="Web brutalism specimen"></a><br><sub>Web brutalism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#devtool-dark"><img src="atlas/devtool-dark.jpg" width="180" alt="Dev-tool dark specimen"></a><br><sub>Dev-tool dark</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#shadcn"><img src="atlas/shadcn.jpg" width="180" alt="Shadcn-minimal specimen"></a><br><sub>Shadcn-minimal</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#enterprise-dense"><img src="atlas/enterprise-dense.jpg" width="180" alt="Enterprise / dashboard-dense specimen"></a><br><sub>Enterprise / dashboard-dense</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#minimalism"><img src="atlas/minimalism.jpg" width="180" alt="Minimalism specimen"></a><br><sub>Minimalism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#maximalism"><img src="atlas/maximalism.jpg" width="180" alt="Maximalism specimen"></a><br><sub>Maximalism</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#anti-design"><img src="atlas/anti-design.jpg" width="180" alt="Anti-design / ugly specimen"></a><br><sub>Anti-design / ugly</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#japandi"><img src="atlas/japandi.jpg" width="180" alt="Japandi minimal specimen"></a><br><sub>Japandi minimal</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#aurora"><img src="atlas/aurora.jpg" width="180" alt="Aurora gradients specimen"></a><br><sub>Aurora gradients</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#mesh-gradient"><img src="atlas/mesh-gradient.jpg" width="180" alt="Mesh gradient specimen"></a><br><sub>Mesh gradient</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#holographic"><img src="atlas/holographic.jpg" width="180" alt="Holographic / iridescent specimen"></a><br><sub>Holographic / iridescent</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#blob"><img src="atlas/blob.jpg" width="180" alt="Liquid / blob specimen"></a><br><sub>Liquid / blob</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#spatial"><img src="atlas/spatial.jpg" width="180" alt="Spatial / 3D specimen"></a><br><sub>Spatial / 3D</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#vaporwave"><img src="atlas/vaporwave.jpg" width="180" alt="Vaporwave specimen"></a><br><sub>Vaporwave</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#synthwave"><img src="atlas/synthwave.jpg" width="180" alt="Synthwave / outrun specimen"></a><br><sub>Synthwave / outrun</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#cyberpunk"><img src="atlas/cyberpunk.jpg" width="180" alt="Cyberpunk specimen"></a><br><sub>Cyberpunk</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#retro-futurism"><img src="atlas/retro-futurism.jpg" width="180" alt="Retro-futurism specimen"></a><br><sub>Retro-futurism</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#hud"><img src="atlas/hud.jpg" width="180" alt="Sci-fi HUD / FUI specimen"></a><br><sub>Sci-fi HUD / FUI</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#pixel"><img src="atlas/pixel.jpg" width="180" alt="Pixel / 8-bit specimen"></a><br><sub>Pixel / 8-bit</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#terminal"><img src="atlas/terminal.jpg" width="180" alt="Terminal / CLI specimen"></a><br><sub>Terminal / CLI</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#dithered"><img src="atlas/dithered.jpg" width="180" alt="Dithered / 1-bit specimen"></a><br><sub>Dithered / 1-bit</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Industry-coded languages</b> · 19 styles · Fintech trust, Luxury / fashion, Beauty / clean-girl, Wellness / organic…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#fintech"><img src="atlas/fintech.jpg" width="180" alt="Fintech trust specimen"></a><br><sub>Fintech trust</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#luxury"><img src="atlas/luxury.jpg" width="180" alt="Luxury / fashion specimen"></a><br><sub>Luxury / fashion</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#beauty"><img src="atlas/beauty.jpg" width="180" alt="Beauty / clean-girl specimen"></a><br><sub>Beauty / clean-girl</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#wellness"><img src="atlas/wellness.jpg" width="180" alt="Wellness / organic specimen"></a><br><sub>Wellness / organic</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#food-craft"><img src="atlas/food-craft.jpg" width="180" alt="Food & beverage craft specimen"></a><br><sub>Food & beverage craft</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#kids"><img src="atlas/kids.jpg" width="180" alt="Kids / playful specimen"></a><br><sub>Kids / playful</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#gaming"><img src="atlas/gaming.jpg" width="180" alt="Gaming specimen"></a><br><sub>Gaming</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#web3"><img src="atlas/web3.jpg" width="180" alt="Crypto / web3 specimen"></a><br><sub>Crypto / web3</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#civic"><img src="atlas/civic.jpg" width="180" alt="Government / civic specimen"></a><br><sub>Government / civic</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#healthcare"><img src="atlas/healthcare.jpg" width="180" alt="Healthcare specimen"></a><br><sub>Healthcare</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#education"><img src="atlas/education.jpg" width="180" alt="Education specimen"></a><br><sub>Education</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#outdoor"><img src="atlas/outdoor.jpg" width="180" alt="Outdoor / utilitarian specimen"></a><br><sub>Outdoor / utilitarian</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#automotive"><img src="atlas/automotive.jpg" width="180" alt="Automotive / industrial specimen"></a><br><sub>Automotive / industrial</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#b2b-saas"><img src="atlas/b2b-saas.jpg" width="180" alt="B2B SaaS specimen"></a><br><sub>B2B SaaS</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#ai-lab"><img src="atlas/ai-lab.jpg" width="180" alt="AI lab specimen"></a><br><sub>AI lab</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#creator"><img src="atlas/creator.jpg" width="180" alt="Creator / influencer specimen"></a><br><sub>Creator / influencer</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#nightlife"><img src="atlas/nightlife.jpg" width="180" alt="Adult / nightlife specimen"></a><br><sub>Adult / nightlife</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#sports"><img src="atlas/sports.jpg" width="180" alt="Sports / athletic specimen"></a><br><sub>Sports / athletic</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#professional-services"><img src="atlas/professional-services.jpg" width="180" alt="Professional services specimen"></a><br><sub>Professional services</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Illustration and imagery</b> · 19 styles · Flat vector illustration, Corporate Memphis, Line art, Hand-drawn / doodle…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#flat-vector"><img src="atlas/flat-vector.jpg" width="180" alt="Flat vector illustration specimen"></a><br><sub>Flat vector illustration</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#alegria"><img src="atlas/alegria.jpg" width="180" alt="Corporate Memphis specimen"></a><br><sub>Corporate Memphis</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#line-art"><img src="atlas/line-art.jpg" width="180" alt="Line art specimen"></a><br><sub>Line art</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#doodle"><img src="atlas/doodle.jpg" width="180" alt="Hand-drawn / doodle specimen"></a><br><sub>Hand-drawn / doodle</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#collage"><img src="atlas/collage.jpg" width="180" alt="Collage specimen"></a><br><sub>Collage</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#clay-3d"><img src="atlas/clay-3d.jpg" width="180" alt="3D clay / soft 3D specimen"></a><br><sub>3D clay / soft 3D</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#isometric"><img src="atlas/isometric.jpg" width="180" alt="Isometric specimen"></a><br><sub>Isometric</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#editorial-photo"><img src="atlas/editorial-photo.jpg" width="180" alt="Editorial photography specimen"></a><br><sub>Editorial photography</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#documentary"><img src="atlas/documentary.jpg" width="180" alt="Documentary photography specimen"></a><br><sub>Documentary photography</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#studio-product"><img src="atlas/studio-product.jpg" width="180" alt="Studio product photography specimen"></a><br><sub>Studio product photography</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#duotone"><img src="atlas/duotone.jpg" width="180" alt="Duotone specimen"></a><br><sub>Duotone</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#halftone"><img src="atlas/halftone.jpg" width="180" alt="Halftone specimen"></a><br><sub>Halftone</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#generative"><img src="atlas/generative.jpg" width="180" alt="Generative / data art specimen"></a><br><sub>Generative / data art</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#ascii-art"><img src="atlas/ascii-art.jpg" width="180" alt="ASCII art specimen"></a><br><sub>ASCII art</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#glitch"><img src="atlas/glitch.jpg" width="180" alt="Glitch specimen"></a><br><sub>Glitch</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#painterly"><img src="atlas/painterly.jpg" width="180" alt="Painterly / public-domain art specimen"></a><br><sub>Painterly / public-domain art</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#engraving"><img src="atlas/engraving.jpg" width="180" alt="Engraving / scientific plates specimen"></a><br><sub>Engraving / scientific plates</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#blueprint"><img src="atlas/blueprint.jpg" width="180" alt="Blueprint / technical drawing specimen"></a><br><sub>Blueprint / technical drawing</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#mascot"><img src="atlas/mascot.jpg" width="180" alt="Mascot-led specimen"></a><br><sub>Mascot-led</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Typographic voices</b> · 15 styles · Grotesk neutral, Humanist sans, Geometric sans, Tight neo-grotesk display…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-grotesk"><img src="atlas/type-grotesk.jpg" width="180" alt="Grotesk neutral specimen"></a><br><sub>Grotesk neutral</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-humanist"><img src="atlas/type-humanist.jpg" width="180" alt="Humanist sans specimen"></a><br><sub>Humanist sans</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-geometric"><img src="atlas/type-geometric.jpg" width="180" alt="Geometric sans specimen"></a><br><sub>Geometric sans</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-tight-grotesk"><img src="atlas/type-tight-grotesk.jpg" width="180" alt="Tight neo-grotesk display specimen"></a><br><sub>Tight neo-grotesk display</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-rounded"><img src="atlas/type-rounded.jpg" width="180" alt="Rounded sans specimen"></a><br><sub>Rounded sans</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-condensed"><img src="atlas/type-condensed.jpg" width="180" alt="Condensed / compressed specimen"></a><br><sub>Condensed / compressed</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-serif-editorial"><img src="atlas/type-serif-editorial.jpg" width="180" alt="Serif editorial specimen"></a><br><sub>Serif editorial</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-oldstyle"><img src="atlas/type-oldstyle.jpg" width="180" alt="Old-style / Garalde specimen"></a><br><sub>Old-style / Garalde</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-didone"><img src="atlas/type-didone.jpg" width="180" alt="Didone specimen"></a><br><sub>Didone</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-slab"><img src="atlas/type-slab.jpg" width="180" alt="Slab serif specimen"></a><br><sub>Slab serif</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-mono"><img src="atlas/type-mono.jpg" width="180" alt="Mono-forward specimen"></a><br><sub>Mono-forward</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-display"><img src="atlas/type-display.jpg" width="180" alt="Display expressive specimen"></a><br><sub>Display expressive</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-kinetic"><img src="atlas/type-kinetic.jpg" width="180" alt="Kinetic / variable specimen"></a><br><sub>Kinetic / variable</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-handwritten"><img src="atlas/type-handwritten.jpg" width="180" alt="Handwritten / script specimen"></a><br><sub>Handwritten / script</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#type-blackletter"><img src="atlas/type-blackletter.jpg" width="180" alt="Blackletter specimen"></a><br><sub>Blackletter</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Layout archetypes</b> · 11 styles · Split hero, Centred hero, Bento grid, Editorial asymmetric grid…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-split-hero"><img src="atlas/layout-split-hero.jpg" width="180" alt="Split hero specimen"></a><br><sub>Split hero</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-centred-hero"><img src="atlas/layout-centred-hero.jpg" width="180" alt="Centred hero specimen"></a><br><sub>Centred hero</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-bento"><img src="atlas/layout-bento.jpg" width="180" alt="Bento grid specimen"></a><br><sub>Bento grid</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-editorial-grid"><img src="atlas/layout-editorial-grid.jpg" width="180" alt="Editorial asymmetric grid specimen"></a><br><sub>Editorial asymmetric grid</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-long-scroll"><img src="atlas/layout-long-scroll.jpg" width="180" alt="Long-scroll storytelling specimen"></a><br><sub>Long-scroll storytelling</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-card-feed"><img src="atlas/layout-card-feed.jpg" width="180" alt="Card feed specimen"></a><br><sub>Card feed</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-dashboard"><img src="atlas/layout-dashboard.jpg" width="180" alt="Dashboard specimen"></a><br><sub>Dashboard</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-docs"><img src="atlas/layout-docs.jpg" width="180" alt="Documentation specimen"></a><br><sub>Documentation</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-manifesto"><img src="atlas/layout-manifesto.jpg" width="180" alt="Single-page manifesto specimen"></a><br><sub>Single-page manifesto</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-catalogue"><img src="atlas/layout-catalogue.jpg" width="180" alt="Catalogue / e-commerce specimen"></a><br><sub>Catalogue / e-commerce</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#layout-index"><img src="atlas/layout-index.jpg" width="180" alt="Index / list site specimen"></a><br><sub>Index / list site</sub></td>
  </tr>
</table>
</details>

<details>
<summary><b>Motion languages</b> · 7 styles · No-motion, Functional micro, Spring / playful, Cinematic…</summary>
<br>
<table>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-none"><img src="atlas/motion-none.jpg" width="180" alt="No-motion specimen"></a><br><sub>No-motion</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-micro"><img src="atlas/motion-micro.jpg" width="180" alt="Functional micro specimen"></a><br><sub>Functional micro</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-spring"><img src="atlas/motion-spring.jpg" width="180" alt="Spring / playful specimen"></a><br><sub>Spring / playful</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-cinematic"><img src="atlas/motion-cinematic.jpg" width="180" alt="Cinematic specimen"></a><br><sub>Cinematic</sub></td>
  </tr>
  <tr>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-stepped"><img src="atlas/motion-stepped.jpg" width="180" alt="Stepped / mechanical specimen"></a><br><sub>Stepped / mechanical</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-scroll"><img src="atlas/motion-scroll.jpg" width="180" alt="Scroll-driven specimen"></a><br><sub>Scroll-driven</sub></td>
    <td align="center"><a href="skills/brand-system/references/styles.md#motion-generative"><img src="atlas/motion-generative.jpg" width="180" alt="Generative specimen"></a><br><sub>Generative</sub></td>
  </tr>
</table>
</details>

## 193 layouts

42 section and screen types, 193 layout variants, each a real shadcn/ui block shot at 1440 and 390. [`layouts.md`](skills/brand-system/references/layouts.md) says for each when to use it, the slop tell to avoid, how it reflows on mobile and which styles it pairs with.

<a href="atlas/blocks/sheets"><img src="assets/readme/layouts.jpg" width="100%" alt="Grid of 193 layout blocks"></a>

Composed landings for five kinds of business, each part chosen in order of the buyer's questions:

<a href="atlas/blocks/landings"><img src="assets/readme/landings.jpg" width="100%" alt="Five full landing pages built from the blocks: agency SaaS, consumer subscription, dev tool, local business, marketplace"></a>

[`examples/`](examples) is a shadcn/ui gallery app (Vite, React, Tailwind 4) that renders the styles as themes and the layouts as blocks.

Every variant of a section on one sheet: [billing](atlas/blocks/sheets/billing.jpg) <sub>3</sub> · [blog](atlas/blocks/sheets/blog.jpg) <sub>6</sub> · [careers](atlas/blocks/sheets/careers.jpg) <sub>3</sub> · [changelog](atlas/blocks/sheets/changelog.jpg) <sub>3</sub> · [commerce](atlas/blocks/sheets/commerce.jpg) <sub>5</sub> · [contact](atlas/blocks/sheets/contact.jpg) <sub>5</sub> · [cta](atlas/blocks/sheets/cta.jpg) <sub>5</sub> · [dashboard](atlas/blocks/sheets/dashboard.jpg) <sub>4</sub> · [detail](atlas/blocks/sheets/detail.jpg) <sub>4</sub> · [docs](atlas/blocks/sheets/docs.jpg) <sub>3</sub> · [empty](atlas/blocks/sheets/empty.jpg) <sub>3</sub> · [events](atlas/blocks/sheets/events.jpg) <sub>4</sub> · [faq](atlas/blocks/sheets/faq.jpg) <sub>5</sub> · [features](atlas/blocks/sheets/features.jpg) <sub>9</sub> · [footer](atlas/blocks/sheets/footer.jpg) <sub>5</sub> · [form](atlas/blocks/sheets/form.jpg) <sub>4</sub> · [hero](atlas/blocks/sheets/hero.jpg) <sub>13</sub> · [legal](atlas/blocks/sheets/legal.jpg) <sub>2</sub> · [list](atlas/blocks/sheets/list.jpg) <sub>5</sub> · [login](atlas/blocks/sheets/login.jpg) <sub>4</sub> · [logos](atlas/blocks/sheets/logos.jpg) <sub>6</sub> · [mobile](atlas/blocks/sheets/mobile.jpg) <sub>3</sub> · [nav](atlas/blocks/sheets/nav.jpg) <sub>7</sub> · [newsletter](atlas/blocks/sheets/newsletter.jpg) <sub>4</sub> · [not found](atlas/blocks/sheets/not-found.jpg) <sub>3</sub> · [notifications](atlas/blocks/sheets/notifications.jpg) <sub>3</sub> · [onboarding](atlas/blocks/sheets/onboarding.jpg) <sub>3</sub> · [overlays](atlas/blocks/sheets/overlays.jpg) <sub>4</sub> · [portfolio](atlas/blocks/sheets/portfolio.jpg) <sub>6</sub> · [pricing](atlas/blocks/sheets/pricing.jpg) <sub>9</sub> · [register](atlas/blocks/sheets/register.jpg) <sub>3</sub> · [search](atlas/blocks/sheets/search.jpg) <sub>3</sub> · [settings](atlas/blocks/sheets/settings.jpg) <sub>3</sub> · [shell](atlas/blocks/sheets/shell.jpg) <sub>5</sub> · [showcase](atlas/blocks/sheets/showcase.jpg) <sub>6</sub> · [stats](atlas/blocks/sheets/stats.jpg) <sub>5</sub> · [steps](atlas/blocks/sheets/steps.jpg) <sub>5</sub> · [team](atlas/blocks/sheets/team.jpg) <sub>5</sub> · [testimonials](atlas/blocks/sheets/testimonials.jpg) <sub>6</sub> · [trust](atlas/blocks/sheets/trust.jpg) <sub>3</sub> · [vs](atlas/blocks/sheets/vs.jpg) <sub>3</sub> · [waitlist](atlas/blocks/sheets/waitlist.jpg) <sub>3</sub>

## How it works

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/phases-dark.svg">
  <img src="assets/readme/phases-light.svg" width="100%" alt="Phases 0 to 8: setup, strategy, naming, direction where you pick, logo, system, primary surfaces, applications, review and crit; each with its gate">
</picture>

- **Strategy before pixels.** Competitors, buyer voice, personas, the gap, then a vibe every later choice cites.
- **One idea drives everything.** One device shapes the logo, the signature component, the motion and the copy.
- **Checked, not eyeballed.** Each phase has a gate, and the scripts below enforce most of them.
- **Ready for code.** `colors.css` uses shadcn/ui's role names and a Tailwind 4 `@theme` block, so the tokens paste into a Tailwind + shadcn app.
- **A live review page.** Every picture lands on it as soon as it exists, with 👍/👎 and notes the agent reads back.

<img src="assets/readme/review.jpg" width="100%" alt="The Tostato review page: sections, badges, open questions and thumbs up or down on each image">

| Script | Does |
|---|---|
| `palette.py` | OKLCH → hex, WCAG contrast for each pair (and the lightness that would pass), sRGB fitting, light and dark CSS; exits 1 on a failing pair |
| `sizetest.py` | the logo at 16 to 128 px on light and dark, plus 16 and 32 px magnified pixel by pixel |
| `wordmark.py` | an outlined wordmark from any OFL font: HarfBuzz kerning, variable axes, a baseline sidecar |
| `shoot.sh` | headless Chrome: first screen, full page, a real 390 px layout with an overflow check, motion frame strips (+ mp4), PDF |
| `svg2png.py` · `tile.py` | exact-size PNG exports · tall screenshots cut into readable columns |
| `commons.py` | public-domain art from Wikimedia Commons, with a licence check and a credit line |
| `audit.py` | the deliverables for each surface in the brief, failed contrast, alt text, reduced motion, repeated images |

Python scripts declare their dependencies inline (PEP 723) and run with `uv run`, no install step.

## Example prompts

```text
I'm launching a web-scraping API for developers and data teams
(LLM-ready extraction, schema in → JSON out). No name yet, need one.
I love brutalist / terminal vibes. Do the whole brand: name, logo,
system, landing.
```

```text
Just a logo for Crux, a climbing gym in Zurich. It has to work as
a favicon and printed on a chalk bag.
```

```text
Give my invoicing app for Swiss freelancers a look. It's plain
shadcn right now. Landing page and the invoice screen.
```

```text
Rebrand our family bakery in Turin: the shop sign, bread bags and
an Instagram grid. We hate anything that looks like a chain.
```

```text
Three brand directions for a note-taking app for doctors.
Show me before you build anything.
```

## Install

```bash
# Claude Code, Codex or another agent: the CLI asks which ones
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system

# for every project, not just this one
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system --global

# name the agents yourself
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system \
  -a claude-code -a codex
```

The [skills CLI](https://github.com/vercel-labs/skills) installs to the standard Agent Skills folders. Without it, copy `skills/brand-system/` into your agent's skills folder (`~/.claude/skills/` for Claude Code). Then ask for a brand, a logo or a look; the skill triggers on its own.

**Requirements**

- [uv](https://docs.astral.sh/uv/) runs the scripts
- Google Chrome for screenshots and PDFs
- Optional: `ffmpeg` (motion mp4), `potrace` (tracing a hand-drawn mark), `jq`
- Optional: [artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) for the live review page with 👍/👎 and notes; without it the skill writes a static `review.html`

## FAQ

**Does it generate images?**
No. Every picture is the agent's own render (HTML, SVG, CSS) shot with headless Chrome, plus public-domain art from Wikimedia Commons, licence-checked and credited in `CREDITS.md`. No AI-generated people unless you ask.

**Which models?**
Any agent that can read the skill and run a shell. Tostato and Franco were made by Claude Sonnet. When you ask for several complete brands to compare, the skill runs one designer agent per direction.

**Can I add styles?**
Yes. Add a block to `styles.md` with the same fields, its theme to `examples/src/styles/<slug>.json` and `<slug>.ts` (see [`examples/README.md`](examples/README.md)), and shoot it to `atlas/<slug>.jpg` with `bun scripts/shoot.ts specimens <slug>`. Pull requests welcome.

**Just a logo, or just a landing page?**
A narrow request still gets a short strategy and the pick, then only the phases it needs. The agent says which ones it skipped.

**Which fonts, icons and images can it use?**
OFL fonts (Google Fonts), Lucide, Phosphor or Tabler icons, and public-domain or CC0 art, each credited.

---

<h3 align="center">★ If it made you a brand you would ship, star the repo so others can find it.</h3>

**Licence.** MIT. Fonts are OFL. The paintings in the Tostato images are public domain: Albert Zimmermann, *Lago di Lugano* (1868), and Albert Benois, *Der Luganer See*, via Wikimedia Commons. Tostato and Franco are fictional brands made for these examples.
