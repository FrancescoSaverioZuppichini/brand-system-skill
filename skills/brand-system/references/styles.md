# Style atlas

141 design styles in 8 families, for phase 3 (Direction). **Read `style-picking.md` first**: it says how to choose. Come here for the facts of each style once you have candidates.

## How to use this file

- **Treat token sketches as provisional.** They get you to the 3 candidate hero specimens fast. The system phase then replaces them with the brand's own named pigments and runs `palette.py` for real contrast. Every font is on Google Fonts under the OFL, and every OKLCH value sits inside sRGB.
- **Use the specimens.** Each style has the same small hero rendered at `atlas/<slug>.jpg` from the repo's shadcn/ui examples (`examples/`, route `/specimen/<slug>`). Its theme is `examples/src/styles/<slug>.json` (a colors-in.json that palette.py passes) and `<slug>.ts` (fonts, radius, borders, shadows, specimen css); copy your candidates' themes as the starting point for phase 3's specimens, and render any layout block in them with `/block/<section>/<variant>?style=<slug>`.
- **A style is a grammar, not the brand.** The brand idea still decides the logo, the signature components and the copy. A brand that is only a style is a template.

Every block has the same fields:

- **What:** the style in one line.
- **Signature traits:** type · colour · shape and radius · depth (borders or shadows) · layout · imagery · motion.
- **Token sketch:** fonts, palette, radius, and the border or shadow rule.
- **Pick when:** audience, category, personality, price point.
- **Avoid when:** including accessibility risks.
- **Cliché / dating risk:** how fast it dates and what it is mistaken for.
- **References:** real brands and works.
- **Combines well with:** families it mixes with.

Families 7 (layout) and 8 (motion) hold grid and motion tokens in the token sketch, because their fonts and colours come from the base style.

## Contents

- [1. Modernist and print](#1-modernist-and-print) (14): Swiss / International Typographic (`swiss`) · Bauhaus (`bauhaus`) · Constructivism (`constructivism`) · De Stijl (`de-stijl`) · Mid-century modern (`mid-century`) · Corporate modernism (`corporate-modernism`) · Editorial / magazine (`editorial`) · Newspaper / broadsheet (`broadsheet`) · Brutalist print (Dutch, post-Swiss) (`brutalist-print`) · Risograph (`riso`) · Zine / DIY (`zine`) · Letterpress (`letterpress`) · Signage / wayfinding (`wayfinding`) · Technical manual (industrial) (`technical-manual`)
- [2. Art and historical movements](#2-art-and-historical-movements) (21): Renaissance / classical (`renaissance`) · Baroque (`baroque`) · Medieval / illuminated (`medieval`) · Victorian (`victorian`) · Arts & Crafts (`arts-and-crafts`) · Art Nouveau (`art-nouveau`) · Art Deco (`art-deco`) · Streamline Moderne (`streamline`) · Googie / Atomic age (`googie`) · Psychedelic (`psychedelic`) · Pop art (`pop-art`) · Surrealism (`surrealism`) · Memphis (`memphis`) · New Wave typography (`new-wave`) · Postmodern / deconstructivist (`postmodern`) · Punk (`punk`) · Grunge (`grunge`) · Japanese minimal (ma, wabi-sabi) (`japanese-ma`) · Scandinavian (`scandinavian`) · Ukiyo-e (`ukiyo-e`) · Islamic geometric (`islamic-geometric`)
- [3. Digital UI eras](#3-digital-ui-eras) (35): Skeuomorphism (`skeuomorphism`) · Retro OS (Classic Mac / Windows 9x) (`retro-os`) · Web 1.0 / GeoCities (`web1`) · Y2K (`y2k`) · Frutiger Aero (`frutiger-aero`) · Flat (`flat`) · Metro (Microsoft design language) (`metro`) · Material Design (M2 → M3 Expressive) (`material`) · Apple HIG (incl. Liquid Glass) (`apple-hig`) · Fluent (`fluent`) · Glassmorphism (`glassmorphism`) · Neumorphism (`neumorphism`) · Claymorphism (`claymorphism`) · Neobrutalism (`neobrutalism`) · Web brutalism (`web-brutalism`) · Dev-tool dark (Vercel / Linear) (`devtool-dark`) · Shadcn-minimal (`shadcn`) · Enterprise / dashboard-dense (`enterprise-dense`) · Minimalism (`minimalism`) · Maximalism (`maximalism`) · Anti-design / ugly (`anti-design`) · Japandi minimal (`japandi`) · Aurora gradients (`aurora`) · Mesh gradient (`mesh-gradient`) · Holographic / iridescent (`holographic`) · Liquid / blob (`blob`) · Spatial / 3D (`spatial`) · Vaporwave (`vaporwave`) · Synthwave / outrun (`synthwave`) · Cyberpunk (`cyberpunk`) · Retro-futurism (`retro-futurism`) · Sci-fi HUD / FUI (`hud`) · Pixel / 8-bit (`pixel`) · Terminal / CLI (`terminal`) · Dithered / 1-bit (`dithered`)
- [4. Industry-coded languages](#4-industry-coded-languages) (19): Fintech trust (`fintech`) · Luxury / fashion (`luxury`) · Beauty / clean-girl (`beauty`) · Wellness / organic (`wellness`) · Food & beverage craft (`food-craft`) · Kids / playful (`kids`) · Gaming (`gaming`) · Crypto / web3 (`web3`) · Government / civic (GOV.UK) (`civic`) · Healthcare (`healthcare`) · Education (`education`) · Outdoor / utilitarian (`outdoor`) · Automotive / industrial (`automotive`) · B2B SaaS (`b2b-saas`) · AI lab (humanist) (`ai-lab`) · Creator / influencer (`creator`) · Adult / nightlife (tasteful) (`nightlife`) · Sports / athletic (`sports`) · Professional services (`professional-services`)
- [5. Illustration and imagery](#5-illustration-and-imagery) (19): Flat vector illustration (`flat-vector`) · Corporate Memphis ("Alegria") (`alegria`) · Line art (`line-art`) · Hand-drawn / doodle (`doodle`) · Collage (`collage`) · 3D clay / soft 3D (`clay-3d`) · Isometric (`isometric`) · Editorial photography (`editorial-photo`) · Documentary photography (`documentary`) · Studio product photography (`studio-product`) · Duotone (`duotone`) · Halftone (`halftone`) · Generative / data art (`generative`) · ASCII art (`ascii-art`) · Glitch (`glitch`) · Painterly / public-domain art (`painterly`) · Engraving / scientific plates (`engraving`) · Blueprint / technical drawing (`blueprint`) · Mascot-led (`mascot`)
- [6. Typographic voices](#6-typographic-voices) (15): Grotesk neutral (`type-grotesk`) · Humanist sans (`type-humanist`) · Geometric sans (`type-geometric`) · Tight neo-grotesk display (`type-tight-grotesk`) · Rounded sans (`type-rounded`) · Condensed / compressed (`type-condensed`) · Serif editorial (transitional / modern) (`type-serif-editorial`) · Old-style / Garalde (`type-oldstyle`) · Didone (luxury) (`type-didone`) · Slab serif (`type-slab`) · Mono-forward (`type-mono`) · Display expressive (`type-display`) · Kinetic / variable (`type-kinetic`) · Handwritten / script (`type-handwritten`) · Blackletter (`type-blackletter`)
- [7. Layout archetypes](#7-layout-archetypes) (11): Split hero (`layout-split-hero`) · Centred hero (`layout-centred-hero`) · Bento grid (`layout-bento`) · Editorial asymmetric grid (`layout-editorial-grid`) · Long-scroll storytelling (`layout-long-scroll`) · Card feed (`layout-card-feed`) · Dashboard (`layout-dashboard`) · Documentation (`layout-docs`) · Single-page manifesto (`layout-manifesto`) · Catalogue / e-commerce (`layout-catalogue`) · Index / list site (`layout-index`)
- [8. Motion languages](#8-motion-languages) (7): No-motion (`motion-none`) · Functional micro (`motion-micro`) · Spring / playful (`motion-spring`) · Cinematic (`motion-cinematic`) · Stepped / mechanical (`motion-stepped`) · Scroll-driven (`motion-scroll`) · Generative (`motion-generative`)


## 1. Modernist and print

The grammar most brand work still runs on. Grids, type as image, flat colour. Low dating risk, high sameness risk: the style alone is never the idea.

<a id="swiss"></a>

### Swiss / International Typographic · `swiss` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/swiss.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/swiss.ts)
- **What:** the 1950s Zurich/Basel style: objective type, an asymmetric layout on a strict grid, information as the image.
- **Signature traits:** neo-grotesk set flush-left, ragged-right, hierarchy by size and position, not by style · black, white and one signal red · square corners · no shadows, whitespace and 1 px rules separate · modular grid with a strong left axis · objective photography or type only, no illustration · motion: cuts and slides along grid lines.
- **Token sketch:** Inter Tight (display, −3 %), Inter (text), IBM Plex Mono (data) · paper `oklch(0.98 0 0)` · ink `oklch(0.16 0 0)` · grey `oklch(0.52 0 0)` · signal red `oklch(0.58 0.23 28)` · radius 0 · hairlines, never shadows.
- **Pick when:** clarity is the value: tools, institutions, architecture, culture, B2B with design-literate buyers; mid to high price.
- **Avoid when:** the buyer reads warmth as care (health, kids, hospitality), or there is too little content to fill a grid. Accessible by default; light-grey captions are the usual miss.
- **Cliché / dating risk:** dates slowly; "Helvetica plus red" is the default of every design studio, so it needs a grid idea, not just a font.
- **References:** Josef Müller-Brockmann's Musica Viva posters (1950s–70s) · [Vitra](https://www.vitra.com) · [SBB](https://www.sbb.ch) · Unimark's NYC Subway signage (1970).
- **Combines well with:** mono-forward data, documentary photography, functional micro motion, an ASCII or dither device.

<a id="bauhaus"></a>

### Bauhaus · `bauhaus` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/bauhaus.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/bauhaus.ts)
- **What:** the 1919–33 school's kit of primary shapes and primary colours, revived since about 2018 as "shape-kit" brand illustration.
- **Signature traits:** geometric sans, often all lowercase (Bayer's universal alphabet) · red, yellow, blue and black on off-white · circle, square and triangle as literal elements, radius either 0 or full · flat · asymmetric compositions where big shapes overlap the type · imagery is composed shapes · motion: shapes slide and rotate into place.
- **Token sketch:** Jost (Futura-like), League Spartan (display), DM Mono · off-white `oklch(0.95 0.015 85)` · black `oklch(0.18 0 0)` · red `oklch(0.57 0.20 30)` · yellow `oklch(0.84 0.16 88)` · blue `oklch(0.45 0.15 258)` · radius 0 or 50 % · thick black borders, no shadows.
- **Pick when:** education, design and creative tools, culture, music, playful-but-smart consumer products; any price.
- **Avoid when:** luxury or money-trust contexts (it reads as a toy or a poster). Random shapes are not Bauhaus: without a construction rule it looks like clip art. Yellow on white fails text contrast.
- **Cliché / dating risk:** the 2020s "Bauhaus shapes" startup illustration is saturated; the original does not date.
- **References:** Joost Schmidt's 1923 Bauhaus exhibition poster · Herbert Bayer's universal alphabet (1925) · [Bauhaus Dessau Foundation](https://www.bauhaus-dessau.de).
- **Combines well with:** a Swiss grid, constructivist diagonals, spring motion, kids and education.

<a id="constructivism"></a>

### Constructivism · `constructivism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/constructivism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/constructivism.ts)
- **What:** the 1920s Soviet avant-garde (Rodchenko, Lissitzky, the Stenberg brothers): diagonals, photomontage, red and black, type as force.
- **Signature traits:** heavy condensed sans in caps, stacked and set on diagonals · red and black on cream · wedges, bars and circles · flat · 15–45° diagonal compositions with type cutting across them · photomontage and halftone faces · motion: hard slides along the diagonal.
- **Token sketch:** Anton or Oswald (caps), Archivo Black, Space Mono · cream `oklch(0.93 0.03 85)` · black `oklch(0.17 0.01 40)` · red `oklch(0.55 0.21 29)` · grey `oklch(0.60 0.01 60)` · radius 0 · thick bars, no shadows.
- **Pick when:** activism, unions, campaigns, festivals, music, challenger brands with a real manifesto.
- **Avoid when:** the brand needs calm or trust, or in markets where Soviet imagery hurts (the Baltics, Ukraine, Poland). Diagonal type is display only; never set reading text on an angle.
- **Cliché / dating risk:** propaganda pastiche reads ironic fast; the Franz Ferdinand sleeve made it a rock cliché.
- **References:** Rodchenko's "Books" poster for Lengiz (1924) · Lissitzky's "Beat the Whites with the Red Wedge" (1919) · Franz Ferdinand's "You Could Have It So Much Better" sleeve (2005).
- **Combines well with:** halftone imagery, condensed type, stepped motion, punk.

<a id="de-stijl"></a>

### De Stijl · `de-stijl` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/de-stijl.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/de-stijl.ts)
- **What:** the Dutch 1917–31 movement (Mondrian, van Doesburg, Rietveld): black orthogonal bars dividing white planes, some filled with primaries.
- **Signature traits:** blocky geometric sans or a neutral grotesk · white planes, black bars, red, blue and yellow fills · rectangles only, radius 0 · flat · asymmetric orthogonal grid drawn by the bars themselves · no imagery beyond the grid · motion: planes slide along one axis at a time.
- **Token sketch:** Archivo Black, Archivo, Archivo Narrow · white `oklch(0.97 0.005 90)` · black `oklch(0.15 0 0)` · red `oklch(0.55 0.21 27)` · blue `oklch(0.40 0.17 263)` · yellow `oklch(0.86 0.17 95)` · radius 0 · 6–10 px black bars instead of borders.
- **Pick when:** architecture, furniture, design retail, modular or grid-based products, learning-by-blocks for children.
- **Avoid when:** layouts must reflow a lot (bars break on mobile); a single Mondrian quote reads as pastiche, not identity.
- **Cliché / dating risk:** instantly recognisable, so it reads as a quotation (the YSL dress problem). Does not date, but does not belong to you either.
- **References:** Mondrian's "Composition with Red, Blue and Yellow" (1930) · Rietveld Schröder House (1924) · Yves Saint Laurent's Mondrian dress (1965).
- **Combines well with:** Swiss, Bauhaus, pixel blocks; the bento grid is its grandchild.

<a id="mid-century"></a>

### Mid-century modern · `mid-century` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/mid-century.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/mid-century.ts)
- **What:** 1945–65 American and European modernism with wit: Saul Bass, Paul Rand's ads, the Eameses, Alexander Girard.
- **Signature traits:** geometric sans or a soft serif with hand-cut lettering · mustard, burnt orange, teal and olive on warm paper · organic cut-paper shapes with rough edges · flat, with a little print grain · playful asymmetric layouts with lots of air · cut-paper illustration, silhouettes, simple symbols · motion: Bass-style shapes that cut and reassemble.
- **Token sketch:** Jost, Fraunces (soft, wonky axis on), DM Mono · paper `oklch(0.94 0.03 85)` · ink `oklch(0.25 0.02 50)` · mustard `oklch(0.76 0.15 80)` · orange `oklch(0.64 0.17 45)` · teal `oklch(0.52 0.08 200)` · radius 0–4 px, shapes organic · grain, no shadows.
- **Pick when:** furniture, hospitality, coffee, record shops, film festivals, design-literate consumer brands with wit; mid price.
- **Avoid when:** tech and AI that should feel current, or when the copy can't keep up the wit. Mustard and orange on cream fail as text colours.
- **Cliché / dating risk:** "mustard and teal retro" is an Etsy and Mad Men cliché; the cut-paper craft is what saves it.
- **References:** Saul Bass's "Anatomy of a Murder" titles (1959) · Paul Rand's "Thoughts on Design" (1947) · [Herman Miller](https://www.hermanmiller.com) · Alexander Girard's textiles.
- **Combines well with:** letterpress, collage, cinematic motion, Googie as a single accent.

<a id="corporate-modernism"></a>

### Corporate modernism · `corporate-modernism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/corporate-modernism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/corporate-modernism.ts)
- **What:** the 1956–80 identity programme: one mark, one typeface, one colour and a rulebook (Rand's IBM, Aicher's Lufthansa, Chermayeff & Geismar's Mobil, NASA's worm).
- **Signature traits:** one neutral sans used everywhere · one corporate colour plus black and white · geometric marks, stripes · flat · strict manual grids, everything systematised · product photography and pictograms · motion: almost none, or a precise logo sting.
- **Token sketch:** IBM Plex Sans, IBM Plex Mono (Plex is literally its heir), Archivo · white `oklch(0.99 0 0)` · ink `oklch(0.20 0.01 260)` · corporate blue `oklch(0.47 0.19 262)` · light grey `oklch(0.93 0.005 260)` · radius 0–2 px · fills and rules, no shadows.
- **Pick when:** infrastructure, transport, utilities, large B2B, anything that will spawn sub-brands and needs a rulebook more than a personality.
- **Avoid when:** an early consumer brand needs warmth or a story; the risk is facelessness.
- **Cliché / dating risk:** "blue-chip blue" is faceless, but it barely dates.
- **References:** Paul Rand's IBM 8-bar logo (1972) · Otl Aicher's Lufthansa (1962) · NASA Graphics Standards Manual (Danne & Blackburn, 1975) · [IBM Design Language](https://www.ibm.com/design/language/).
- **Combines well with:** technical manual, wayfinding pictograms, enterprise-dense UI, no-motion.

<a id="editorial"></a>

### Editorial / magazine · `editorial` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/editorial.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/editorial.ts)
- **What:** the magazine page on screen: serif display, columns, standfirsts, big pictures, the reader treated as a guest.
- **Signature traits:** high-contrast serif headlines, a text serif or quiet sans, italic standfirsts, small-caps labels · black on white or cream with one accent · square images · hairlines · multi-column grid with deliberate asymmetry, drop caps and captions · commissioned photography or illustration · motion: slow fades.
- **Token sketch:** Newsreader or Fraunces (display), Source Serif 4 (text), Instrument Sans (labels) · paper `oklch(0.98 0.006 85)` · ink `oklch(0.18 0.01 60)` · grey `oklch(0.50 0.01 60)` · oxblood `oklch(0.42 0.13 20)` · radius 0 · 1 px rules, no shadows.
- **Pick when:** content is the product (media, research, publishing), premium consumer brands that want authority, research labs; mid to high price.
- **Avoid when:** dense tools (serif-heavy UI slows scanning) or short-attention mobile commerce. Watch measure (keep 60–75 ch) and grey body text.
- **Cliché / dating risk:** low dating; the risk is "every Substack" blandness.
- **References:** [The New York Times Magazine](https://www.nytimes.com/section/magazine) · [The Atlantic](https://www.theatlantic.com) · [Stripe Press](https://press.stripe.com).
- **Combines well with:** Swiss labels, documentary photography, duotone, an ASCII or engraving device.

<a id="broadsheet"></a>

### Newspaper / broadsheet · `broadsheet` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/broadsheet.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/broadsheet.ts)
- **What:** the front page: masthead, dense columns, rules and datelines. Authority by density.
- **Signature traits:** blackletter or heavy serif masthead, serif headlines, text serif in narrow columns, Franklin-style sans for metadata · black on newsprint or salmon, almost no colour · rules everywhere (column rules, double rules), radius 0 · dense multi-column grid with an above-the-fold hierarchy · halftone photos, engraved portraits, charts · motion: none, a ticker at most.
- **Token sketch:** UnifrakturMaguntia (masthead only), Newsreader (headlines and text), Libre Franklin (meta) · newsprint `oklch(0.94 0.012 90)` · ink `oklch(0.17 0.005 80)` · grey `oklch(0.45 0.005 80)` · salmon `oklch(0.95 0.03 65)` · radius 0 · single and double rules, no shadows.
- **Pick when:** news, newsletters, finance commentary, research digests, any brand that wants to read as "the record".
- **Avoid when:** the product is visual-first, or mobile-first UI (density collapses at 390 px). Small sizes break readability fast.
- **Cliché / dating risk:** "Extra! Extra!" fake-newspaper pastiche; a blackletter masthead on a startup reads as a joke.
- **References:** [Financial Times](https://www.ft.com) · [The Guardian](https://www.theguardian.com) · The Wall Street Journal's hedcuts · [Semafor](https://www.semafor.com).
- **Combines well with:** engraving, halftone, editorial, no-motion.

<a id="brutalist-print"></a>

### Brutalist print (Dutch, post-Swiss) · `brutalist-print` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/brutalist-print.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/brutalist-print.ts)
- **What:** raw, oversized, system-led print from the Dutch school: one grotesk set huge, cropped, on exposed structure.
- **Signature traits:** one heavy grotesk, cropped off the edge, tight leading · pure black and white plus one loud field colour · square · no depth · the structure is shown (grid lines, numbers, rules) · imagery: none, or hard-cropped photos · motion: hard cuts.
- **Token sketch:** Archivo (wdth 125, 800), Archivo Narrow, JetBrains Mono · white `oklch(0.98 0 0)` · black `oklch(0.13 0 0)` · orange field `oklch(0.66 0.20 40)` · radius 0 · 2–4 px black rules or none.
- **Pick when:** galleries, art schools, architecture, music labels, fashion with attitude, design studios; the brand wants to look unbothered.
- **Avoid when:** buyers need reassurance; it only works with very few words. Keep cropped type as live text so screen readers get the whole word.
- **Cliché / dating risk:** every art-school graduate show; dates slowly but signals "studio", not "product".
- **References:** Experimental Jetset's Whitney "Responsive W" identity (2013) · Wim Crouwel's Stedelijk posters · [Stedelijk Museum](https://www.stedelijk.nl) (Mevis & van Deursen).
- **Combines well with:** web brutalism, documentary photography, stepped motion.

<a id="riso"></a>

### Risograph · `riso` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/riso.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/riso.ts)
- **What:** the stencil-duplicator print look: 1–3 fluorescent spot inks, misregistration, grain and overprint. It also covers riso as an imagery treatment.
- **Signature traits:** chunky grotesk or a quirky display · 2–3 spot inks (fluo pink, blue, yellow, teal) multiplying where they overlap · shapes offset 1–3 px · no shadows: overprint makes the depth · poster and zine layouts · grainy halftone, two-ink illustration · motion: offset jitter.
- **Token sketch:** Bricolage Grotesque, DM Mono · paper `oklch(0.95 0.02 90)` · fluo pink `oklch(0.68 0.24 355)` · riso blue `oklch(0.52 0.15 250)` · yellow `oklch(0.90 0.17 100)` · ink `oklch(0.25 0.05 260)` · radius 0–4 px · `mix-blend-mode: multiply`, SVG grain.
- **Pick when:** indie publishing, events, small creative studios, food and drink with a DIY spirit, education with personality; low to mid price.
- **Avoid when:** corporate trust or healthcare. Fluo pink and yellow fail text contrast on paper: use them as fields, set text in the dark ink. Grain costs bytes.
- **Cliché / dating risk:** the 2016–22 creative-studio look; saturated.
- **References:** [Risotto Studio](https://www.risottostudio.com) · Hato Press (London) · Colorama's riso colour charts.
- **Combines well with:** zine, halftone, doodle illustration, spring motion.

<a id="zine"></a>

### Zine / DIY · `zine` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/zine.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/zine.ts)
- **What:** photocopied self-publishing: typewriter, marker, tape, staples, cut-outs.
- **Signature traits:** typewriter mono, marker handwriting, letters cut from print · black on photocopy white with at most one highlighter colour · torn edges, tape, items rotated 1–4° · toner noise instead of UI shadows · collage layouts with hand-drawn arrows · xerox photos and scribbles · motion: jittery stop-motion.
- **Token sketch:** Courier Prime, Mansalva (marker), Archivo Black (cut-out letters) · photocopy `oklch(0.96 0.003 90)` · toner `oklch(0.15 0 0)` · grey `oklch(0.70 0 0)` · highlighter `oklch(0.93 0.19 110)` · radius 0 · paper-shadow 0 1px 0, tape strips, no blur shadows.
- **Pick when:** music, skate, community projects, indie food, activism, early creator brands that want "made by hand by us".
- **Avoid when:** money, health, B2B. Handwriting and rotated text hurt legibility and dyslexic readers; keep body copy in the typewriter face, straight.
- **Cliché / dating risk:** "grunge-lite" stock templates; authentic only if the brand really is DIY.
- **References:** "Sniffin' Glue" (1976–77) · Riot grrrl zines (early 1990s) · Maximum Rocknroll (1982–2019).
- **Combines well with:** punk, riso, collage, doodle, stepped motion.

<a id="letterpress"></a>

### Letterpress · `letterpress` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/letterpress.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/letterpress.ts)
- **What:** metal and wood type pressed into thick paper: bite, uneven ink, ornaments, centred job-printing layouts.
- **Signature traits:** wood-type slabs and condensed grotesques mixed with a book serif, small caps · one or two inks (black plus a red or blue) on cotton paper · rules, printer's ornaments, borders · depth by debossing (inner shadow, slight ink texture), never drop shadows · centred symmetric layouts · imagery: woodcuts, engravings · motion: none, or a press "stamp".
- **Token sketch:** Alfa Slab One (wood type), Libre Caslon Text, Libre Caslon Display · cotton paper `oklch(0.95 0.02 85)` · black ink `oklch(0.22 0.01 60)` · red ink `oklch(0.50 0.17 28)` · faded ink `oklch(0.45 0.01 60)` · radius 0 · deboss: `inset 0 1px 1px` plus slight blur on text, nothing else.
- **Pick when:** stationery, wedding and events, spirits, craft food, bookshops, heritage brands; mid to premium price.
- **Avoid when:** software or anything that must feel current; the texture tricks get heavy on screen and fake deboss reads as cheap.
- **Cliché / dating risk:** the 2010s "hipster letterpress" coffee and barber look (with arrows and established dates); low dating if done with real restraint.
- **References:** [Hatch Show Print](https://hatchshowprint.com) (Nashville) · Hamilton Wood Type Museum · Kelmscott Press (with Arts & Crafts).
- **Combines well with:** Victorian, engraving, food craft, no-motion.

<a id="wayfinding"></a>

### Signage / wayfinding · `wayfinding` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/wayfinding.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/wayfinding.ts)
- **What:** the language of transport and public signs (Kinneir & Calvert, Aicher, DIN): legible at distance, pictograms, arrows, colour-coded panels.
- **Signature traits:** a signage sans with open apertures and generous spacing · white on deep panels (green, blue, black) plus one code colour per line · rounded-corner panels, circles for line numbers, arrows as type · flat · panel-and-grid layouts, numbers and arrows lead · pictograms only · motion: functional, like a departure board.
- **Token sketch:** Public Sans or Atkinson Hyperlegible, Barlow Semi Condensed, Overpass Mono (platform numbers) · panel `oklch(0.27 0.04 255)` · white `oklch(0.99 0 0)` · line yellow `oklch(0.87 0.17 95)` · line green `oklch(0.55 0.15 150)` · radius 6–8 px on panels, circles for codes · no shadows, borders only on panels.
- **Pick when:** mobility, logistics, travel, cities, campuses, hospitals, any product whose job is getting people somewhere.
- **Avoid when:** the brand must feel intimate, luxurious or playful. Strong a11y base by design; never use the code colour as the only signal.
- **Cliché / dating risk:** low dating; overused as "airport chic" in merch.
- **References:** Kinneir & Calvert's UK road signs (1965) · Otl Aicher's Munich 1972 pictograms · [Transport for London](https://tfl.gov.uk) (Johnston) · Schiphol wayfinding (Mijksenaar).
- **Combines well with:** Swiss, corporate modernism, civic, functional micro motion.

<a id="technical-manual"></a>

### Technical manual (industrial) · `technical-manual` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/technical-manual.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/technical-manual.ts)
- **What:** the Braun / Dieter Rams line made current by Teenage Engineering and Nothing: product as instrument, labels, part numbers, diagrams.
- **Signature traits:** small neutral grotesk or mono at small sizes, numbered labels, spec tables · light grey and off-white with black and one signal (orange, red) · tight radius on controls, circles for dials · flat with hairline diagrams, sometimes a dot-matrix face · exploded diagrams, callout lines, grid of specs · motion: precise, mechanical, short.
- **Token sketch:** Inter (small, 11–13 px), Space Mono or Doto (dot-matrix accents), JetBrains Mono · body grey `oklch(0.92 0.003 250)` · white `oklch(0.98 0 0)` · black `oklch(0.18 0 0)` · signal orange `oklch(0.68 0.20 42)` · radius 2–4 px, 50 % for dials · 1 px lines, no shadows.
- **Pick when:** hardware, audio, devices, dev tools that want object-ness, design-led electronics; mid to premium.
- **Avoid when:** mass consumer audiences who need warmth or large text; tiny labels hurt legibility, so keep body ≥ 15 px even if labels are small.
- **Cliché / dating risk:** "Teenage Engineering look" is the 2020s design-bro reference; copying it reads as a fan.
- **References:** Dieter Rams's Braun T3 and ET66 · [Teenage Engineering](https://teenage.engineering) · [Nothing](https://nothing.tech).
- **Combines well with:** Swiss, mono-forward, dither or dot-matrix imagery, stepped motion.

## 2. Art and historical movements

Used in branding as a cultural root: the brand borrows an era's materials, light and ornament. The failure mode is costume. Take the era's *method* (how it made images, how it set type), not its clip art.

<a id="renaissance"></a>

### Renaissance / classical · `renaissance` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/renaissance.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/renaissance.ts)
- **What:** 15th–16th-century Italy: humanist letterforms, proportion, sfumato (soft smoky transitions, Leonardo) and chiaroscuro (hard light from dark, Caravaggio is its Baroque extreme).
- **Signature traits:** Roman inscriptional capitals and old-style serifs with real small caps and italics · earth pigments: lead white, ochre, sinopia red, umber, verdigris, lapis used rarely · square or arched frames, no radius · depth from painted light (soft gradients, vignettes), never UI shadows · centred, proportioned layouts with wide margins (canon of page proportions) · public-domain paintings, silverpoint and red-chalk drawings · motion: slow dissolves, like light moving.
- **Token sketch:** Cormorant Garamond (display), EB Garamond (text), Cinzel (inscriptions only) · gesso `oklch(0.94 0.025 80)` · umber `oklch(0.28 0.03 55)` · sanguine `oklch(0.55 0.12 40)` · ochre `oklch(0.70 0.11 75)` · verdigris `oklch(0.55 0.06 170)` · radius 0 · soft radial vignettes, hairlines, no drop shadows.
- **Pick when:** the brand's root is Italian craft, art, scholarship, wine, luxury, or a product that "makes images" and wants lineage; mid to premium price.
- **Avoid when:** you'd use it as a joke (meme Mona Lisa) or to fake prestige. Gilt and swashes turn it into "fake Renaissance". Low-contrast sepia text fails AA.
- **Cliché / dating risk:** museum-shop pastiche; painted heads with sunglasses. The real thing doesn't date; the meme versions date in months.
- **References:** Leonardo's sfumato in the Mona Lisa · Caravaggio's chiaroscuro · Aldus Manutius's italic (1501) · [Uffizi](https://www.uffizi.it).
- **Combines well with:** Swiss editorial (modern structure, classical image), ASCII or dither treatment of the paintings, no-motion or cinematic.

<a id="baroque"></a>

### Baroque · `baroque` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/baroque.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/baroque.ts)
- **What:** 17th-century drama: deep darks, gold, curves, movement, abundance.
- **Signature traits:** high-contrast serifs, swash italics, engraved capitals · near-black, oxblood, deep green, gold leaf · cartouches, scrolls, ornate frames, curves everywhere · deep chiaroscuro lighting, glow on gold · centred and symmetrical but overflowing · oil paintings, still lifes, sculpture details · motion: slow, theatrical reveals, curtains.
- **Token sketch:** Playfair Display (italic for swashes), Cormorant, Cinzel Decorative (one word at most) · black `oklch(0.16 0.01 40)` · oxblood `oklch(0.35 0.11 20)` · bottle green `oklch(0.32 0.06 160)` · gold `oklch(0.75 0.12 85)` · ivory `oklch(0.93 0.03 85)` · radius 0, ornamental frames · inner glow, gold gradients only on metal.
- **Pick when:** opera, luxury hospitality, spirits, perfume, fashion with excess as the message, maximalist interiors; premium.
- **Avoid when:** product UI of any density; anything that must feel honest or efficient. Gold on ivory fails contrast; use gold for ornament only.
- **Cliché / dating risk:** "Versace gold" and Instagram rococo filters; dates when used without a reason.
- **References:** Caravaggio's "The Calling of Saint Matthew" (1600) · Bernini's Baldacchino · [Versace](https://www.versace.com) (the Medusa and Greek-key world) · Dolce & Gabbana's Sicilian Baroque campaigns.
- **Combines well with:** maximalism, didone luxury, cinematic motion.

<a id="medieval"></a>

### Medieval / illuminated · `medieval` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/medieval.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/medieval.ts)
- **What:** manuscripts and heraldry: blackletter and uncials, illuminated initials, gold leaf, flat jewel colours.
- **Signature traits:** textura blackletter or uncial display, a book serif for reading · vellum with ultramarine, vermilion, malachite green and gold · rectangular frames, decorated initials, heraldic shapes (shields, banners) · flat colour, gold catches light · margins full of drolleries, ruled columns · illuminated letters, heraldry, woodcuts · motion: rare; page turns.
- **Token sketch:** UnifrakturCook or Pirata One (display), Uncial Antiqua (alt), EB Garamond (text) · vellum `oklch(0.92 0.04 85)` · iron-gall ink `oklch(0.22 0.02 40)` · vermilion `oklch(0.58 0.19 35)` · ultramarine `oklch(0.42 0.17 268)` · gold `oklch(0.74 0.12 85)` · radius 0 · ruled borders, no shadows.
- **Pick when:** fantasy games and tabletop, craft beer and mead, monasteries' products, heritage education, metal bands.
- **Avoid when:** anything mainstream or digital-first: blackletter is hard to read and carries far-right associations in some markets (German context especially). Never set body copy in blackletter.
- **Cliché / dating risk:** "Ye Olde" pastiche; Renaissance-fair kitsch.
- **References:** the Book of Kells (c. 800) · Très Riches Heures du Duc de Berry (1410s) · Elden Ring's title lettering and heraldry (FromSoftware, 2022) · [The Morgan Library manuscripts](https://www.themorgan.org).
- **Combines well with:** blackletter type voice, gaming, letterpress.

<a id="victorian"></a>

### Victorian · `victorian` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/victorian.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/victorian.ts)
- **What:** 1840–1900 commercial print: playbills and apothecary labels with many typefaces per page, ornament, engravings.
- **Signature traits:** many display faces at once (Tuscan, slab, fat face, condensed, shaded) all centred · black, deep red and a gold or cream on toned paper · ornate borders, banners, oval cartouches · engraved shading, no UI shadows · symmetrical centred stacks, every line a different size · engravings and botanical plates · motion: none.
- **Token sketch:** Abril Fatface, Rye (Tuscan), Old Standard TT (text), Holtwood One SC · toned paper `oklch(0.91 0.04 80)` · ink `oklch(0.20 0.02 40)` · deep red `oklch(0.42 0.15 25)` · dark green `oklch(0.33 0.06 155)` · gold `oklch(0.70 0.12 80)` · radius 0, oval frames · double rules, no shadows.
- **Pick when:** spirits, barbers, apothecary-style beauty, circuses and theatre, tea, tobacco-adjacent heritage; premium heritage price.
- **Avoid when:** you're not genuinely old; tech or health that needs clarity. Many faces per screen kill hierarchy on mobile.
- **Cliché / dating risk:** the 2010s "established 2012" hipster label; saturated in craft spirits.
- **References:** Victorian playbills · [Hendrick's Gin](https://www.hendricksgin.com) · [Penhaligon's](https://www.penhaligons.com) · Lea & Perrins's label.
- **Combines well with:** letterpress, engraving, food craft.

<a id="arts-and-crafts"></a>

### Arts & Crafts · `arts-and-crafts` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/arts-and-crafts.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/arts-and-crafts.ts)
- **What:** William Morris and the 1880–1920 movement: handmade against the machine, dense botanical patterns, the book as craft.
- **Signature traits:** heavy roman and gothic-roman book faces, decorated initials · indigo, madder red, weld yellow, willow green, natural dyes · interlaced vines and leaves, framed text blocks · flat woodblock colour, no shading · dense symmetrical repeat patterns, wide margins · woodcuts, textile repeats · motion: none.
- **Token sketch:** Libre Caslon Text, Spectral, IM Fell English (display) · linen `oklch(0.93 0.025 85)` · indigo `oklch(0.33 0.09 265)` · madder `oklch(0.48 0.14 28)` · willow `oklch(0.55 0.08 135)` · weld `oklch(0.80 0.12 95)` · radius 0 · pattern borders, no shadows.
- **Pick when:** textiles, wallpaper, interiors, gardening, bookbinding, slow craft, heritage education; premium craft price.
- **Avoid when:** digital products and fast categories: pattern-heavy surfaces fight content and inflate page weight.
- **Cliché / dating risk:** Morris patterns on tote bags and phone cases; low dating if the pattern is your own.
- **References:** William Morris's "Strawberry Thief" (1883) · the Kelmscott Chaucer (1896) · Morris & Co. wallpapers · [Liberty London](https://www.libertylondon.com).
- **Combines well with:** letterpress, engraving and botanical plates, wellness-organic.

<a id="art-nouveau"></a>

### Art Nouveau · `art-nouveau` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/art-nouveau.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/art-nouveau.ts)
- **What:** 1890–1910 organic modern (Mucha, Horta, Guimard, Klimt's Secession): whiplash curves, plant forms, women framed by halos.
- **Signature traits:** hand-drawn display letters with organic swelling strokes · sage, ochre, dusty rose, teal and gold on cream · whiplash curves, arched frames, halos · flat colour with fine outlines · symmetrical panels framed by ornament · stylised figures and flowers, outlined · motion: slow growing, vines unfurling.
- **Token sketch:** Federant (display), Cormorant (text), Marcellus SC (labels) · cream `oklch(0.94 0.03 90)` · sage `oklch(0.66 0.06 140)` · dusty rose `oklch(0.72 0.07 20)` · gold `oklch(0.74 0.11 85)` · ink `oklch(0.28 0.03 60)` · radius: arches (`border-radius: 50% 50% 0 0`) · outlines, no shadows.
- **Pick when:** beauty and perfume, florists, tea, wine, boutique hotels, Parisian or Viennese cultural roots; premium.
- **Avoid when:** you need speed or modernity; arches cost layout space. Decorative display faces are display only.
- **Cliché / dating risk:** Mucha posters on everything; "boho" tarot packaging since 2019.
- **References:** Alphonse Mucha's "Job" cigarette paper poster (1896) · Hector Guimard's Paris Métro entrances · Klimt's Secession posters · [Fragonard](https://www.fragonard.com).
- **Combines well with:** engraving and botanical plates, beauty, Art Deco for a 1920s transition.

<a id="art-deco"></a>

### Art Deco · `art-deco` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/art-deco.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/art-deco.ts)
- **What:** 1920s–30s machine-age luxury: geometric ornament, sunbursts, stepped forms, gold on black.
- **Signature traits:** high-waisted geometric display faces, thin-thick contrast, wide tracking in caps · black, gold, cream, emerald or navy · stepped ziggurats, fans, sunbursts, chevrons, symmetric · metallic gradients on gold lines only · strict symmetry, framed centre panels · geometric ornament, posters by Cassandre · motion: symmetric reveals, lines drawing from the centre.
- **Token sketch:** Poiret One or Limelight (display), Josefin Sans (labels, tracked), Bodoni Moda (text accents) · black `oklch(0.17 0.01 260)` · gold `oklch(0.78 0.12 85)` · cream `oklch(0.94 0.03 90)` · emerald `oklch(0.42 0.09 165)` · radius 0, stepped corners · gold hairline frames, no shadows.
- **Pick when:** hotels, bars and cocktails, jewellery, cinemas, real estate with a 1920s building, events; premium.
- **Avoid when:** you need warmth or informality. Thin deco display faces collapse below 24 px; gold-on-black body text is tiring.
- **Cliché / dating risk:** "Gatsby party" theme; wedding invitations.
- **References:** A.M. Cassandre's "Normandie" poster (1935) · the Chrysler Building · [The Savoy](https://www.thesavoylondon.com) · Gatsby-themed everything (the cliché).
- **Combines well with:** didone luxury, nightlife, cinematic motion.

<a id="streamline"></a>

### Streamline Moderne · `streamline` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/streamline.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/streamline.ts)
- **What:** 1930s–40s American industrial design (Loewy, Dreyfuss): speed lines, rounded corners, chrome, aerodynamic everything.
- **Signature traits:** wide, rounded geometric sans, often italic for speed · cream, pale mint, chrome silver, signal red, navy · long horizontal speed lines, big rounded corners, teardrop forms · chrome gradients, soft enamel highlights · horizontal bands, motion implied by stripes · trains, radios, diners, airplanes as icons · motion: horizontal swooshes, easing like a locomotive.
- **Token sketch:** Michroma or Righteous (display), Jost (text), Red Hat Mono · cream `oklch(0.94 0.03 90)` · mint `oklch(0.88 0.05 165)` · chrome `oklch(0.80 0.01 250)` · red `oklch(0.56 0.20 27)` · navy `oklch(0.30 0.07 260)` · radius 24–48 px, pills · triple speed lines, enamel highlight gradients.
- **Pick when:** mobility, travel, appliances, retro diners, coffee machines, EV brands that want optimism rather than sci-fi.
- **Avoid when:** you can't commit to a strong period voice. Chrome gradients behind text fail contrast.
- **Cliché / dating risk:** 1950s diner kitsch if pushed; rare enough to stand out in tech.
- **References:** Raymond Loewy's Pennsylvania Railroad S1 locomotive (1939) · the Airstream trailer · Dreyfuss's 20th Century Limited · [Smeg](https://www.smeg.com) (appliance styling).
- **Combines well with:** retro-futurism, Googie, Art Deco.

<a id="googie"></a>

### Googie / Atomic age · `googie` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/googie.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/googie.ts)
- **What:** 1950s–60s American space-age commercial style: boomerangs, starbursts, atoms, cantilevered diner signs.
- **Signature traits:** jaunty script and bouncy display caps · turquoise, coral, mustard, pink on cream · boomerangs, starbursts, atoms, parabolas, kidney shapes · flat, two-tone · tilted, playful compositions, signage-like · space-age icons, dingbat stars · motion: twinkling, orbiting atoms.
- **Token sketch:** Lobster Two or Pacifico (script, sparingly), Bungee or Righteous (display), Jost (text) · cream `oklch(0.95 0.03 90)` · turquoise `oklch(0.72 0.11 195)` · coral `oklch(0.70 0.15 35)` · mustard `oklch(0.80 0.14 85)` · ink `oklch(0.25 0.03 250)` · radius: kidney shapes, pills · flat, outlined stars.
- **Pick when:** diners, motels, bowling, retro hospitality, playful consumer brands with Americana nostalgia.
- **Avoid when:** you need seriousness or international neutrality. Script faces fail at small sizes.
- **Cliché / dating risk:** reads as theme-park nostalgia; narrow use.
- **References:** the Welcome to Fabulous Las Vegas sign (Betty Willis, 1959) · LAX Theme Building · The Jetsons (1962).
- **Combines well with:** mid-century, streamline, kids-playful.

<a id="psychedelic"></a>

### Psychedelic · `psychedelic` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/psychedelic.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/psychedelic.ts)
- **What:** 1966–70 San Francisco concert posters (Wes Wilson, Victor Moscoso, Bonnie MacLean): letters that melt to fill space, vibrating complementary colours.
- **Signature traits:** custom melting letterforms that fill a shape · vibrating complementary pairs: orange on blue, magenta on green · swirling, no straight lines · flat, the vibration does the depth · lettering IS the layout, packed edge to edge · op-art patterns, swirls, Art Nouveau-derived figures · motion: slow hue cycling, warping.
- **Token sketch:** Shrikhand, Rampart One or Bungee Shade (display), Righteous (text) · orange `oklch(0.70 0.19 45)` · electric blue `oklch(0.50 0.22 265)` · magenta `oklch(0.60 0.26 345)` · acid green `oklch(0.85 0.20 130)` · ink `oklch(0.25 0.06 300)` · radius: blobs · flat, no shadows.
- **Pick when:** music festivals, cannabis and psychedelics (where legal), skate, fashion drops, record labels.
- **Avoid when:** anything where reading matters. Vibrating complementaries are a real a11y problem (photosensitivity, legibility); never animate them fast.
- **Cliché / dating risk:** tie-dye nostalgia; the 2020s revival (wavy type) is already peaking.
- **References:** Wes Wilson's Fillmore posters (1966) · Victor Moscoso's Neon Rose series · Milton Glaser's Dylan poster (1967).
- **Combines well with:** maximalism, liquid blobs, kinetic type.

<a id="pop-art"></a>

### Pop art · `pop-art` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/pop-art.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/pop-art.ts)
- **What:** 1955–70 Warhol and Lichtenstein: comics, Ben-Day dots, mass-product repetition, flat primaries.
- **Signature traits:** comic-book lettering, speech bubbles, heavy black outlines · primaries plus hot pink on white · bold outlines, bursts ("POW"), rounded bubbles · Ben-Day dot shading · repeated grids (Warhol), single big panels (Lichtenstein) · screenprinted photos, comic frames · motion: pops and bursts.
- **Token sketch:** Bangers (display), Archivo Black, Comic Neue (bubbles) · white `oklch(0.99 0 0)` · black `oklch(0.15 0 0)` · red `oklch(0.60 0.23 28)` · yellow `oklch(0.90 0.18 100)` · blue `oklch(0.55 0.18 255)` · pink `oklch(0.70 0.20 355)` · radius: bubbles · 3–4 px black outlines, dot patterns.
- **Pick when:** snacks, drinks, entertainment, events, youth fashion, ironic campaigns.
- **Avoid when:** trust categories; repeated Ben-Day dots at small size moiré on screens.
- **Cliché / dating risk:** "POW!" and Warhol grids are a cliché; screen-printed portraits of the founder are worse.
- **References:** Lichtenstein's "Whaam!" (1963) · Warhol's "Campbell's Soup Cans" (1962) · Warhol's banana sleeve for The Velvet Underground (1967).
- **Combines well with:** halftone, neobrutalism, spring motion.

<a id="surrealism"></a>

### Surrealism · `surrealism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/surrealism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/surrealism.ts)
- **What:** dream logic from Magritte and Dalí, used in branding as impossible objects in calm, clean settings.
- **Signature traits:** calm classical serif or quiet sans, so the image does the strangeness · clear skies, soft pastels, deep shadows · real objects in impossible scale or place · photographic or painterly realism with long cast shadows · lots of empty space, one strange object · 3D renders, collage, painted skies · motion: slow, floating, things that shouldn't move moving.
- **Token sketch:** Instrument Serif, Inter, DM Mono · sky `oklch(0.80 0.07 230)` · sand `oklch(0.88 0.04 75)` · shadow `oklch(0.30 0.03 260)` · cloud white `oklch(0.97 0.01 240)` · accent `oklch(0.62 0.17 30)` · radius 0 · real cast shadows on objects only.
- **Pick when:** fashion, beauty, creative tools, AI products that want wonder without sci-fi, campaigns; mid to premium.
- **Avoid when:** the product needs to be understood literally; surreal metaphors confuse first-time visitors.
- **Cliché / dating risk:** the 2018–23 "floating 3D object on pastel" trend and AI-image surrealism are saturated.
- **References:** Magritte's "The Son of Man" (1964) · Dalí's "The Persistence of Memory" (1931) · Mailchimp's 2018 rebrand illustrations (Collins).
- **Combines well with:** editorial, 3D clay, cinematic motion.

<a id="memphis"></a>

### Memphis · `memphis` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/memphis.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/memphis.ts)
- **What:** Ettore Sottsass's 1981–87 Milan collective: clashing pastels and primaries, squiggles, terrazzo, confetti geometry.
- **Signature traits:** geometric or quirky display sans · pastel pink, mint, yellow, cobalt, black on white · squiggles, zigzags, dots, confetti triangles, terrazzo · flat with hard offset shadows · scattered asymmetric shapes around the content · patterns over photos · motion: bouncy, shapes rotating.
- **Token sketch:** Unbounded or Rubik (display), DM Sans (text) · white `oklch(0.98 0.005 90)` · pink `oklch(0.80 0.10 355)` · mint `oklch(0.87 0.09 165)` · yellow `oklch(0.90 0.15 100)` · cobalt `oklch(0.50 0.20 262)` · black `oklch(0.18 0 0)` · radius mixed (0 and full) · hard 4 px offset shadows.
- **Pick when:** kids and youth, events, playful consumer apps, food delivery, fashion, design events in Milan.
- **Avoid when:** premium serious categories. Pastels fail text contrast; pattern-heavy backgrounds hurt readability.
- **Cliché / dating risk:** the 2016–19 revival was everywhere; dates fast, often mistaken for Alegria.
- **References:** Sottsass's "Carlton" bookcase (1981) · Nathalie Du Pasquier's patterns · the "Saved by the Bell" titles (1989).
- **Combines well with:** neobrutalism, pop art, spring motion.

<a id="new-wave"></a>

### New Wave typography · `new-wave` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/new-wave.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/new-wave.ts)
- **What:** Wolfgang Weingart and April Greiman, 1975–88: the Swiss grid loosened, stepped and layered, with textures and early-computer bitmaps.
- **Signature traits:** grotesks set wide-spaced, stepped, in mixed weights; letterspaced caps · black with pastels (pink, cyan, yellow) and grey · overlapping rectangles, stepped rules, dots · flat layers and transparent overlaps · loose grid, diagonal steps, layered text · halftone screens, early bitmap graphics · motion: layers sliding past each other.
- **Token sketch:** Archivo (variable width), Space Mono, Syne · white `oklch(0.97 0 0)` · black `oklch(0.16 0 0)` · pink `oklch(0.75 0.13 355)` · cyan `oklch(0.80 0.10 210)` · yellow `oklch(0.90 0.14 100)` · radius 0 · transparency and multiply, no shadows.
- **Pick when:** design schools, music, cultural festivals, creative agencies, brands that want "designer's designer" credibility.
- **Avoid when:** mass audiences or dense UI. Layered text reduces legibility.
- **Cliché / dating risk:** rarely seen, so it reads fresh to designers and dated to everyone else.
- **References:** Wolfgang Weingart's Kunstgewerbeschule Basel posters (1970s) · April Greiman's "Does It Make Sense?" (Design Quarterly 133, 1986).
- **Combines well with:** Swiss, postmodern, kinetic type.

<a id="postmodern"></a>

### Postmodern / deconstructivist · `postmodern` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/postmodern.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/postmodern.ts)
- **What:** Emigre and Cranbrook, 1985–98: layered texts, multiple readings, vernacular citation, type as theory.
- **Signature traits:** odd custom faces (Emigre fonts), mixed scales and directions, overlapping text · muted greys with acid accents · fragmented geometry, cut columns · layered transparency · broken grid, text running vertically, multiple entry points · vernacular images, signage, low-res scans · motion: glitchy reflow.
- **Token sketch:** Syne (display, extremes of width), IBM Plex Serif, Major Mono Display · warm grey `oklch(0.88 0.01 80)` · charcoal `oklch(0.25 0.01 80)` · acid `oklch(0.88 0.20 120)` · orange `oklch(0.66 0.19 42)` · radius 0 · overlapping layers, no shadows.
- **Pick when:** design institutions, experimental publishers, art-tech, music; audiences who reward effort.
- **Avoid when:** you need conversion or clarity. Multiple reading orders confuse screen readers: keep a clean DOM order.
- **Cliché / dating risk:** looks like 1995 Emigre if copied; a quiet revival in 2020s design schools.
- **References:** Emigre magazine (Rudy VanderLans, Zuzana Licko) · Katherine McCoy's Cranbrook graduate design poster (1989) · Neville Brody's "The Face" (1980s).
- **Combines well with:** grunge, anti-design, kinetic type.

<a id="punk"></a>

### Punk · `punk` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/punk.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/punk.ts)
- **What:** 1976–80 UK and US punk: ransom-note letters, photocopies, safety pins, fluorescent ink on black and white.
- **Signature traits:** ransom-note mix of cut letters, stencil, hand-scrawl · black, white, and one fluorescent (pink or yellow) · torn paper, tape, safety pins · photocopy contrast, no smooth gradients · collage, anything at an angle · xerox photos, cut-up newspaper · motion: jump cuts, flicker (keep it below 3 Hz).
- **Token sketch:** Archivo Black, Courier Prime, Rubik Dirt, Sedgwick Ave (scrawl) · white `oklch(0.97 0 0)` · black `oklch(0.12 0 0)` · fluo pink `oklch(0.68 0.25 350)` · fluo yellow `oklch(0.93 0.20 110)` · radius 0 · torn edges via SVG `clip-path`, no shadows.
- **Pick when:** music, streetwear, skate, activism, challenger brands with a real fight.
- **Avoid when:** you're a bank pretending to be rebellious. Ransom letters are images to screen readers: keep a real text label.
- **Cliché / dating risk:** Sex Pistols pastiche on corporate merch; inauthentic use is mocked.
- **References:** Jamie Reid's "God Save the Queen" sleeve (1977) · "Sniffin' Glue" · [Vivienne Westwood](https://www.viviennewestwood.com).
- **Combines well with:** zine, collage, glitch, stepped motion.

<a id="grunge"></a>

### Grunge · `grunge` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/grunge.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/grunge.ts)
- **What:** David Carson's Ray Gun and 1990s distressed type: degraded scans, overlapping text, illegibility as attitude.
- **Signature traits:** distressed and eroded fonts, mixed sizes, text overprinted on text · desaturated browns, olive, dirty white, black · scratches, stains, film burns · texture over everything · collapsed grid, columns cut by images · grainy photos, scanned textures · motion: shaky, flicker, film burn.
- **Token sketch:** Rubik Dirt, Courier Prime, Oswald · dirty white `oklch(0.90 0.02 85)` · black `oklch(0.15 0.01 60)` · olive `oklch(0.50 0.06 110)` · rust `oklch(0.50 0.12 45)` · radius 0 · SVG noise and scratches, no clean edges.
- **Pick when:** music, extreme sports, streetwear, horror and indie games.
- **Avoid when:** any clarity need. Text over texture fails contrast; noise textures are heavy.
- **Cliché / dating risk:** reads as 1994 unless deliberately ironic; Y2K revival is pulling it back.
- **References:** David Carson's Ray Gun (1992–95) · Nine Inch Nails "The Downward Spiral" packaging (Russell Mills, 1994) · Se7en's title sequence (Kyle Cooper, 1995).
- **Combines well with:** punk, glitch, documentary photography.

<a id="japanese-ma"></a>

### Japanese minimal (ma, wabi-sabi) · `japanese-ma` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/japanese-ma.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/japanese-ma.ts)
- **What:** ma (meaningful empty space) and wabi-sabi (beauty in the imperfect and impermanent): Kenya Hara's Muji, Ikko Tanaka.
- **Signature traits:** a light mincho serif or quiet gothic, small sizes, generous tracking, sometimes vertical text · paper white, sumi black, one natural accent (vermilion seal, indigo) · square, with one irregular natural form (a brush circle, a stone) · flat; texture of washi paper · asymmetric balance, 60–80 % empty space · natural materials, brush ink, quiet photography · motion: very slow, fades.
- **Token sketch:** Shippori Mincho or Zen Old Mincho (display), Zen Kaku Gothic New (text), DM Mono · washi `oklch(0.96 0.01 85)` · sumi `oklch(0.20 0.005 60)` · grey `oklch(0.55 0.01 60)` · vermilion `oklch(0.58 0.19 33)` · indigo `oklch(0.33 0.08 260)` · radius 0 · no borders where space works, washi grain.
- **Pick when:** tea, ceramics, skincare, stationery, architecture, mindfulness, premium minimal goods.
- **Avoid when:** dense information products or mass promotion. Light weights at small sizes fail legibility; vertical Latin text is a gimmick.
- **Cliché / dating risk:** generic "zen" stock (stones, bamboo, enso) is the cliché; the real discipline doesn't date.
- **References:** [Muji](https://www.muji.com) (Kenya Hara) · Ikko Tanaka's "Nihon Buyo" poster (1981) · [Aesop](https://www.aesop.com) stores in Japan.
- **Combines well with:** editorial, Japandi, no-motion.

<a id="scandinavian"></a>

### Scandinavian · `scandinavian` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/scandinavian.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/scandinavian.ts)
- **What:** Nordic functional warmth: bright, clean, soft-geometric, with one playful colour and lots of white light.
- **Signature traits:** soft geometric or humanist sans, medium weights, friendly lowercase · white, light birch, black, and one clear colour (tomato, forest green, sky) · soft rounded corners, simple pictograms · flat, maybe a soft shadow · clean grid, generous rhythm · bright daylight photos, simple flat illustration · motion: calm, gentle ease.
- **Token sketch:** Figtree or Albert Sans (text and display), DM Mono · white `oklch(0.99 0.002 90)` · birch `oklch(0.93 0.02 80)` · black `oklch(0.20 0.005 250)` · tomato `oklch(0.63 0.19 32)` · forest `oklch(0.42 0.08 155)` · radius 8–12 px · soft 0 2px 8px shadow at most.
- **Pick when:** home goods, family, fintech for consumers, mobility, public services, healthy food; mid price.
- **Avoid when:** luxury or drama is the point. Low risk on a11y if the one colour is dark enough for text.
- **Cliché / dating risk:** "IKEA-ish" sameness; Hay-style pastel ceramics.
- **References:** [HAY](https://www.hay.com) · [Muuto](https://www.muuto.com) · the Norwegian passport (Neue Design Studio, 2020).
- **Combines well with:** rounded sans, flat vector illustration, spring motion (gently).

<a id="ukiyo-e"></a>

### Ukiyo-e · `ukiyo-e` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/ukiyo-e.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/ukiyo-e.ts)
- **What:** Edo-period woodblock prints (Hokusai, Hiroshige): flat colour, strong outlines, Prussian blue, bokashi gradients.
- **Signature traits:** bold brush-like display, a calm text serif · Prussian blue, indigo, vermilion, soft green, paper beige · strong black outlines, stylised waves and clouds · flat colour with bokashi (one-colour gradient bands) · asymmetric compositions, cartouches with text, extreme crops · woodblock scenes, waves, mountains · motion: slow parallax of layers.
- **Token sketch:** Shippori Mincho B1 (display), Zen Kaku Gothic New (text), Reggae One for one display word at most · paper `oklch(0.92 0.03 85)` · Prussian blue `oklch(0.35 0.10 250)` · indigo `oklch(0.28 0.06 265)` · vermilion `oklch(0.60 0.18 35)` · sage `oklch(0.70 0.07 145)` · radius 0 · outline 2 px, bokashi `linear-gradient` bands.
- **Pick when:** Japanese food and drink, travel to Japan, tattoo, surf (the wave), games with Japanese roots; brands with a real Japanese link.
- **Avoid when:** there is no cultural root: it reads as appropriation. "The Great Wave" is overused to the point of meaning nothing.
- **Cliché / dating risk:** The Great Wave on everything; low dating, high cliché.
- **References:** Hokusai's "The Great Wave off Kanagawa" (c. 1831) · Hiroshige's "One Hundred Famous Views of Edo" · [Uniqlo UT](https://www.uniqlo.com) collaborations with museums.
- **Combines well with:** Japanese minimal, painterly public-domain art, editorial.

<a id="islamic-geometric"></a>

### Islamic geometric · `islamic-geometric` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/islamic-geometric.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/islamic-geometric.ts)
- **What:** girih and star tessellations from Alhambra to Isfahan: infinite pattern from compass-and-straightedge construction.
- **Signature traits:** Kufic-inspired geometric display, a calm serif or sans for Latin; Arabic script where the market uses it · lapis, turquoise, terracotta, gold, ivory · interlaced 8-, 10- and 12-point stars, arches · flat tiles, gold lines · pattern as field, content in arched or framed panels · tilework, geometric construction lines · motion: patterns drawing themselves stroke by stroke.
- **Token sketch:** Reem Kufi (display), Amiri (Arabic and Latin text), Marcellus (labels) · ivory `oklch(0.94 0.025 85)` · lapis `oklch(0.38 0.13 262)` · turquoise `oklch(0.62 0.10 195)` · terracotta `oklch(0.58 0.13 40)` · gold `oklch(0.75 0.11 85)` · radius: pointed arches · SVG tessellations, no shadows.
- **Pick when:** brands with a real root in the Middle East, North Africa, Central Asia or Muslim communities; hospitality, design, culture, Islamic finance.
- **Avoid when:** used as exotic decoration without the root. Dense pattern behind text fails contrast; keep text on plain panels.
- **Cliché / dating risk:** generic "arabesque" stock patterns; done properly it doesn't date.
- **References:** the Alhambra (Granada) · Shah Mosque tilework (Isfahan) · Institut du Monde Arabe's mashrabiya façade (Jean Nouvel, 1987).
- **Combines well with:** editorial, wayfinding (for airports and cities), generative pattern motion.

## 3. Digital UI eras

Interface languages, from platform systems (Material, Fluent, HIG) to surface trends (glass, neumorphism) to retro-digital nostalgia. These date fastest of all families: check the trend lifecycle in `style-picking.md` before you build a brand on one.

<a id="skeuomorphism"></a>

### Skeuomorphism · `skeuomorphism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/skeuomorphism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/skeuomorphism.ts)
- **What:** pre-2013 iOS and Mac OS X: interfaces that imitate real materials (leather, felt, brushed metal, paper, glass buttons).
- **Signature traits:** system sans with embossed or engraved text shadows · material colours: leather brown, felt green, linen, chrome · rounded glossy buttons, stitched edges · real lighting: gradients, highlights, inner and drop shadows · objects as layouts (a notepad, a bookshelf, a mixing desk) · photoreal textures and icons · motion: physical (page curls, switches flicking).
- **Token sketch:** Inter (stands in for Lucida Grande / Helvetica), Fraunces (for "printed" labels), DM Mono · linen `oklch(0.90 0.02 80)` · leather `oklch(0.40 0.07 50)` · felt green `oklch(0.45 0.09 150)` · glossy blue `oklch(0.60 0.15 250)` · chrome `oklch(0.85 0.01 250)` · radius 6–12 px · layered gradients, 1 px highlights, inset and drop shadows.
- **Pick when:** music and audio tools, games, retro nostalgia products, apps where the physical metaphor IS the product (synths, cameras, notebooks).
- **Avoid when:** most product UI: textures are heavy, and photoreal chrome hurts contrast and dark mode.
- **Cliché / dating risk:** dated in 2013 and now returning as "tactile" nostalgia; the stitched leather is the joke.
- **References:** iOS 6 Notes and Game Center (2012) · Apple's Find My Friends leather (2011) · audio plug-ins (Arturia, Native Instruments), where it never left.
- **Combines well with:** retro-OS, technical manual, spring motion.

<a id="retro-os"></a>

### Retro OS (Classic Mac / Windows 9x) · `retro-os` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/retro-os.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/retro-os.ts)
- **What:** 1984–2000 desktop chrome: bevelled grey windows, title bars, pixel fonts, dialog boxes.
- **Signature traits:** bitmap system fonts (Chicago, MS Sans Serif) · Windows grey, teal desktop, navy title bars, or 1-bit Mac black and white · square windows with 1–2 px bevels · depth from bevels only (light top-left, dark bottom-right) · overlapping windows, dialogs, icons in grids · pixel icons, dithered photos · motion: none, or window-open zooms.
- **Token sketch:** Silkscreen or Pixelify Sans (titles), Tiny5 or VT323 (text), Space Mono · window grey `oklch(0.80 0 0)` · desktop teal `oklch(0.52 0.09 195)` · title navy `oklch(0.30 0.14 265)` · white `oklch(1 0 0)` · black `oklch(0 0 0)` · radius 0 · 2 px bevels (`box-shadow: inset -1px -1px #000, inset 1px 1px #fff`).
- **Pick when:** indie software, nostalgic consumer apps, music, internet-culture brands, games, playful dev tools.
- **Avoid when:** serious money or health. Pixel fonts for body text fail readability; keep body in a real text face.
- **Cliché / dating risk:** the irony fades fast; 98.css-style pages are common.
- **References:** Susan Kare's original Macintosh icons (1984) · Windows 95 · [Poolsuite](https://poolsuite.net) (Mac OS 8 styling) · [98.css](https://jdan.github.io/98.css/).
- **Combines well with:** pixel, dithered, Web 1.0.

<a id="web1"></a>

### Web 1.0 / GeoCities · `web1` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/web1.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/web1.ts)
- **What:** the amateur web of 1995–2002: tiled backgrounds, Times New Roman, blue links, GIFs, visitor counters, "under construction".
- **Signature traits:** Times and Comic Sans and Arial, default sizes, underlined blue links · tiled star or cloud backgrounds, saturated defaults · tables with bevel borders, HR rules · no CSS depth beyond `border="1"` · centred everything, marquee text, webrings · animated GIFs, clip art · motion: blinking, marquees (respect reduced motion).
- **Token sketch:** Libre Caslon Text or Crimson Pro (default-serif look; Tinos is Apache, not OFL), Comic Neue, VT323 (counter) · page `oklch(0.20 0.08 270)` or `oklch(1 0 0)` · link blue `oklch(0.45 0.30 264)` · visited purple `oklch(0.45 0.22 320)` · yellow `oklch(0.95 0.16 105)` · lime `oklch(0.87 0.29 142)` · radius 0 · `border: 3px outset`.
- **Pick when:** internet culture, ironic campaigns, indie games, artists, nostalgic communities.
- **Avoid when:** you need conversion from people who weren't there. Blinking text is a WCAG failure (2.2.2); tiled backgrounds behind text fail contrast.
- **Cliché / dating risk:** the joke only works once per campaign.
- **References:** GeoCities archive at [oocities.org](https://www.oocities.org) · the Space Jam (1996) site, live until 2021 · [Neocities](https://neocities.org) communities.
- **Combines well with:** retro OS, pixel, anti-design.

<a id="y2k"></a>

### Y2K · `y2k` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/y2k.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/y2k.ts)
- **What:** 1998–2004 millennium optimism: chrome type, bubble shapes, translucent plastics, blue and silver, futurism-for-teens.
- **Signature traits:** extended and techno sans, chrome or bubble type, lowercase "e-" words · icy blue, silver, baby pink, lime, translucent purple · blobs, pills, orbs, starbursts · chrome gradients, glossy highlights, lens flares · centred hero objects, floating elements · 3D chrome renders, iMac G3 plastics, digital butterflies · motion: shiny sweeps, rotating 3D type.
- **Token sketch:** Michroma or Orbitron (display), Unbounded (bubble), Inter (text) · ice `oklch(0.93 0.03 230)` · silver `oklch(0.82 0.01 250)` · baby pink `oklch(0.85 0.08 350)` · cyan `oklch(0.80 0.13 210)` · lime `oklch(0.90 0.20 125)` · radius 999 px pills, orbs · chrome `linear-gradient` with a hard horizon line.
- **Pick when:** Gen-Z fashion, beauty, music, consumer tech with nostalgia, events.
- **Avoid when:** long-term B2B brands. Chrome-on-silver text fails contrast; glossy gradients hide focus states.
- **Cliché / dating risk:** peaked 2021–23 on TikTok; dating again.
- **References:** the iMac G3 (1998) · Britney Spears-era album art and MTV TRL · [Blumarine](https://www.blumarine.com) revival · Charli XCX's chrome covers ("Pop 2", 2017).
- **Combines well with:** holographic, Frutiger Aero, kinetic type.

<a id="frutiger-aero"></a>

### Frutiger Aero · `frutiger-aero` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/frutiger-aero.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/frutiger-aero.ts)
- **What:** 2004–2013 Windows Vista/7 and Wii-era optimism: glossy aqua, bubbles, green fields, blue skies, humanist sans.
- **Signature traits:** humanist sans (Frutiger, Segoe) · sky blue, grass green, water aqua, white · glossy rounded buttons, bubbles, orbs · glass gloss with a hard top highlight, reflections · centred, airy, nature backgrounds · stock photos of skies, water drops, fish, aurora wallpapers · motion: floating bubbles, soft glow pulses.
- **Token sketch:** Open Sans or Source Sans 3 (Frutiger-like), Nunito (rounded alt), Fira Mono · sky `oklch(0.80 0.10 230)` · aqua `oklch(0.85 0.10 200)` · grass `oklch(0.72 0.17 140)` · white `oklch(0.99 0 0)` · deep blue `oklch(0.40 0.14 255)` · radius 8–999 px · gloss: white-to-transparent gradient on the top half.
- **Pick when:** nostalgic campaigns, eco-tech that wants optimism, games, music aimed at people born 1995–2005.
- **Avoid when:** you want to look current to people over 30 (it reads as Vista). Gloss gradients behind text fail contrast.
- **Cliché / dating risk:** named and revived around 2017–2022 online; niche nostalgia.
- **References:** Windows Vista / 7 Aero (2007–09) · the Nintendo Wii menus (2006) · Windows Live Messenger · the name, coined in 2017 and catalogued by the Consumer Aesthetics Research Institute.
- **Combines well with:** Y2K, glassmorphism, blob.

<a id="flat"></a>

### Flat · `flat` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/flat.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/flat.ts)
- **What:** the 2012–14 reaction to skeuomorphism: no gradients, no shadows, solid saturated colours, simple icons.
- **Signature traits:** geometric or neutral sans, light-to-medium weights · bright solid colours (turquoise, coral, flat blue) on white · simple shapes, small radius, solid icons · no shadows (the "long shadow" icon was the period's one trick) · clean cards and tiles · flat vector illustration · motion: simple fades and slides.
- **Token sketch:** DM Sans, Lato, Fira Mono · white `oklch(0.99 0 0)` · turquoise `oklch(0.72 0.12 180)` · coral `oklch(0.68 0.17 30)` · flat blue `oklch(0.60 0.15 250)` · midnight `oklch(0.30 0.04 260)` · radius 3–6 px · no shadows, no borders.
- **Pick when:** any simple consumer or utility product that needs to be fast and clear; low cost to implement.
- **Avoid when:** affordances matter (flat buttons that don't look clickable are the classic fail). Bright flat colours as text fail contrast.
- **Cliché / dating risk:** reads 2014 if colours are the "flat UI colors" palette; the principle lasts.
- **References:** iOS 7 (2013) · Windows 8 Metro (2012) · [Flat UI Colors](https://flatuicolors.com) (the cliché palette).
- **Combines well with:** flat vector illustration, Material, functional micro motion.

<a id="metro"></a>

### Metro (Microsoft design language) · `metro` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/metro.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/metro.ts)
- **What:** Windows Phone 7 / Windows 8 (2010–15): typography-first, live tiles, edge-to-edge colour, "authentically digital".
- **Signature traits:** big light-weight Segoe headings, lowercase, overflowing the screen edge · solid tile colours (cobalt, magenta, lime, orange) on black or white · square tiles, no radius · completely flat · panoramic horizontal layouts, tile grids · pictogram icons, white on colour · motion: tiles flip, turnstile transitions, content slides in staggered.
- **Token sketch:** Open Sans Light (Segoe stand-in), Noto Sans, Fira Mono · black `oklch(0.12 0 0)` · cobalt `oklch(0.45 0.20 260)` · magenta `oklch(0.55 0.24 340)` · lime `oklch(0.75 0.18 130)` · orange `oklch(0.66 0.19 45)` · radius 0 · no borders, no shadows.
- **Pick when:** dashboards for walls and TVs, transit displays, products that want typographic confidence and tile navigation.
- **Avoid when:** mainstream web brands: it reads as 2012 Microsoft. Light weights at small sizes on colour fail contrast.
- **Cliché / dating risk:** dated, and owned by Microsoft in people's memory.
- **References:** Windows Phone 7 (2010) · Zune HD (2009) · Windows 8 start screen (2012).
- **Combines well with:** Swiss, flat, functional motion.

<a id="material"></a>

### Material Design (M2 → M3 Expressive) · `material` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/material.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/material.ts)
- **What:** Google's system. M1/M2 (2014–20): paper and ink, elevation shadows. M3 / Material You (2021+): dynamic colour from the wallpaper, tonal palettes, big radii, pill buttons; M3 Expressive (2025) adds shape morphs and springier motion.
- **Signature traits:** Roboto Flex / Google Sans · M3 tonal palettes (primary, secondary, tertiary containers) on a tinted surface · M3 large radii (12–28 px), pill buttons, FABs; M2 4 px · M2 elevation shadows, M3 tonal elevation (tint instead of shadow) · 4/8 dp grid, cards, top app bars · flat icons (Material Symbols), simple illustrations · motion: emphasised easing, container transforms.
- **Token sketch:** Roboto Flex, Figtree (for a non-Google feel), Roboto Mono · surface `oklch(0.97 0.012 300)` · primary `oklch(0.48 0.17 290)` · primary container `oklch(0.92 0.04 300)` · on-surface `oklch(0.22 0.01 300)` · tertiary `oklch(0.55 0.10 0)` · radius 12–28 px, pills · tonal surfaces, shadows only on FABs.
- **Pick when:** Android apps, Google-ecosystem products, teams that need a complete documented system fast.
- **Avoid when:** you want a distinct brand: stock Material looks like Google. It is well documented for a11y; the tonal tints can still get low-contrast.
- **Cliché / dating risk:** "default Android app"; each version dates the previous.
- **References:** [Material Design 3](https://m3.material.io) · Google's Pixel UI · [Material You colour generator](https://material-foundation.github.io/material-theme-builder/).
- **Combines well with:** flat illustration, rounded sans, spring motion (M3 Expressive).

<a id="apple-hig"></a>

### Apple HIG (incl. Liquid Glass) · `apple-hig` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/apple-hig.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/apple-hig.ts)
- **What:** Apple's platform language: iOS 7–18 flat-with-blur, grouped lists, SF type; since 2025 Liquid Glass adds refractive, lens-like translucent controls floating over content.
- **Signature traits:** SF Pro with large bold titles, optical sizes · system colours (blue tint, grouped grey backgrounds), vibrant materials · continuous-curvature "squircle" corners · blur materials; Liquid Glass bends and highlights what's behind · inset grouped lists, tab bars, sheets · product photography on white or black · motion: spring physics, fluid gestures.
- **Token sketch:** Inter (closest OFL to SF Pro), Inter Tight (large titles), JetBrains Mono · grouped bg `oklch(0.96 0.003 260)` · surface `oklch(1 0 0)` · label `oklch(0.20 0.005 260)` · secondary label `oklch(0.55 0.01 260)` · system blue `oklch(0.60 0.20 255)` · radius 10–22 px (continuous) · `backdrop-filter: blur(20px) saturate(180%)`, hairline separators.
- **Pick when:** iOS-first apps, premium consumer products, anything that should feel native on Apple devices.
- **Avoid when:** you need your own identity (it reads as Apple) or the web must perform on low-end Android. Glass over busy content fails contrast; Apple itself added "reduce transparency".
- **Cliché / dating risk:** "Apple-inspired premium" is the most common landing page; Liquid Glass imitations will date with iOS 26.
- **References:** [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) · iOS 26 Liquid Glass (2025) · [apple.com](https://www.apple.com) product pages.
- **Combines well with:** studio product photography, spring motion, minimalism.

<a id="fluent"></a>

### Fluent · `fluent` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/fluent.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/fluent.ts)
- **What:** Microsoft's language since 2017 (Fluent 2 since 2023): light, depth, Mica and Acrylic materials, rounded, calm productivity.
- **Signature traits:** Segoe UI Variable · neutral greys with a communication blue, Mica (wallpaper-tinted) surfaces · 4–8 px radius, consistent icon strokes (Fluent icons) · soft layered shadows and acrylic blur · dense but calm productivity layouts, command bars · 3D emoji and soft illustrations · motion: connected animations, subtle reveals.
- **Token sketch:** Noto Sans or Open Sans (Segoe stand-in), Source Sans 3, JetBrains Mono (Cascadia stand-in) · bg `oklch(0.97 0.003 250)` · surface `oklch(1 0 0)` · text `oklch(0.24 0.005 250)` · brand blue `oklch(0.53 0.16 252)` · stroke `oklch(0.88 0.005 250)` · radius 4 px controls, 8 px cards · shadow `0 2px 4px / 0 0 2px` low alpha, acrylic on flyouts.
- **Pick when:** Windows apps, Microsoft 365 add-ins, enterprise productivity that must feel native in that ecosystem.
- **Avoid when:** consumer brands that need an identity. Acrylic contrast varies with the wallpaper.
- **Cliché / dating risk:** reads as "Microsoft"; dates with each Windows version.
- **References:** [Fluent 2](https://fluent2.microsoft.design) · Windows 11 · Microsoft Teams.
- **Combines well with:** enterprise-dense, functional micro motion, 3D clay emoji.

<a id="glassmorphism"></a>

### Glassmorphism · `glassmorphism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/glassmorphism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/glassmorphism.ts)
- **What:** the 2020–22 trend: frosted translucent cards floating over colourful blurred blobs.
- **Signature traits:** geometric or neutral sans, white text · vivid gradient blobs behind, white at 10–25 % alpha on top · rounded cards 16–24 px with 1 px light borders · `backdrop-filter` blur, soft shadows · floating cards over a colour field · abstract blobs, 3D shapes · motion: blobs drifting slowly.
- **Token sketch:** Plus Jakarta Sans, Manrope, DM Mono · base `oklch(0.28 0.08 285)` · blob violet `oklch(0.60 0.22 300)` · blob cyan `oklch(0.78 0.13 210)` · blob pink `oklch(0.72 0.18 350)` · glass `oklch(1 0 0 / 0.14)` · radius 20 px · `backdrop-filter: blur(24px)`, `1px solid oklch(1 0 0 / 0.3)`.
- **Pick when:** a single hero moment, music and media players, crypto dashboards, concept pieces.
- **Avoid when:** it's the whole UI. Text contrast on glass is unpredictable and usually fails AA; blur is expensive on low-end devices.
- **Cliché / dating risk:** peaked 2021 (Dribbble); dated now except as Apple's Liquid Glass (a different, refractive idea).
- **References:** macOS Big Sur control centre (2020) · Michal Malewicz's "Glassmorphism" article (2020) · Windows 11 Acrylic.
- **Combines well with:** aurora gradients, Frutiger Aero, devtool-dark (sparingly).

<a id="neumorphism"></a>

### Neumorphism · `neumorphism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/neumorphism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/neumorphism.ts)
- **What:** "soft UI" (2019–20): elements extruded from or pressed into a single-colour surface with paired light and dark shadows.
- **Signature traits:** rounded sans, mid-grey text · one pale base colour for everything, one accent · large radii, everything soft · paired shadows (light top-left, dark bottom-right), inset for pressed · roomy centred layouts, big controls · no imagery · motion: press-in on tap.
- **Token sketch:** Nunito, Manrope, DM Mono · base `oklch(0.92 0.01 250)` · light shadow `oklch(0.99 0.005 250)` · dark shadow `oklch(0.78 0.015 250)` · text `oklch(0.40 0.02 250)` · accent `oklch(0.58 0.16 255)` · radius 16–32 px · `box-shadow: -8px -8px 16px light, 8px 8px 16px dark`.
- **Pick when:** almost never for a product; a smart-home control, a single calculator or a dribbble concept.
- **Avoid when:** anywhere accessibility matters: controls barely separate from the background (fails WCAG 1.4.11's 3:1 for UI components), and focus and disabled states are nearly invisible.
- **Cliché / dating risk:** dated within a year; a Dribbble meme.
- **References:** Alexander Plyuto's Dribbble banking concept (2019) · [neumorphism.io](https://neumorphism.io) generator.
- **Combines well with:** minimal, rounded sans; nothing heavy.

<a id="claymorphism"></a>

### Claymorphism · `claymorphism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/claymorphism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/claymorphism.ts)
- **What:** 2021–23 puffy 3D: inflated pastel cards and buttons that look like soft clay, often with 3D clay illustrations.
- **Signature traits:** rounded friendly sans, bold · candy pastels (lilac, peach, mint, sky) · very large radii, pill and blob shapes · double inner shadows (light top, dark bottom) plus a soft outer drop · floating cards, playful layouts · 3D clay characters and icons · motion: squishy springs.
- **Token sketch:** Fredoka or Baloo 2 (display), Nunito (text), DM Mono · bg `oklch(0.95 0.02 300)` · lilac `oklch(0.80 0.09 300)` · peach `oklch(0.85 0.08 50)` · mint `oklch(0.88 0.08 165)` · ink `oklch(0.30 0.05 290)` · radius 24–40 px · `inset 0 -6px 12px` dark + `inset 0 6px 12px` light + soft drop.
- **Pick when:** kids, learning, casual games, playful fintech for teens, onboarding moments.
- **Avoid when:** serious tools; pastel-on-pastel fails contrast, so set text in the dark ink.
- **Cliché / dating risk:** dated quickly with the 3D-emoji wave.
- **References:** Michal Malewicz's "Claymorphism" article (2021) · Microsoft Fluent 3D emoji.
- **Combines well with:** 3D clay illustration, kids-playful, spring motion.

<a id="neobrutalism"></a>

### Neobrutalism · `neobrutalism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/neobrutalism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/neobrutalism.ts)
- **What:** the 2021+ web trend: thick black borders, hard offset shadows, flat saturated fills, chunky sans, on warm backgrounds.
- **Signature traits:** heavy grotesk or chunky geometric, sometimes mono labels · saturated flat fills (yellow, pink, lime, lilac) on cream · 2–3 px black borders on everything, small or zero radius · hard offset shadow (4–6 px, no blur) · stacked cards, stickers, tilted badges · flat illustrations with outlines · motion: buttons press down into their shadow.
- **Token sketch:** Archivo Black or Lexend (display), Lexend or DM Sans (text), Space Mono · cream `oklch(0.96 0.03 90)` · black `oklch(0.15 0 0)` · yellow `oklch(0.88 0.17 95)` · pink `oklch(0.78 0.14 350)` · lime `oklch(0.88 0.18 130)` · radius 0–8 px · `border: 3px solid black; box-shadow: 5px 5px 0 black`.
- **Pick when:** indie SaaS, creator tools, devtools for hobbyists, playful fintech, Gen-Z products; friendly and loud.
- **Avoid when:** premium or institutional trust. Good contrast by default (black text, black borders); watch overuse of saturated fills.
- **Cliché / dating risk:** saturated since 2023 (Gumroad, Figma community files); dates soon.
- **References:** [Gumroad](https://gumroad.com) · [neobrutalism.dev](https://www.neobrutalism.dev) component kit · Hype4's "Neubrutalism" articles (2022).
- **Combines well with:** Memphis, pop art, stepped or spring motion.

<a id="web-brutalism"></a>

### Web brutalism · `web-brutalism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/web-brutalism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/web-brutalism.ts)
- **What:** raw HTML honesty (brutalistwebsites.com, 2014+): default fonts, visible structure, no decoration, form follows markup.
- **Signature traits:** system serif or mono at default sizes, underlined links · black on white, default blue links, maybe one harsh colour · rectangles, `<hr>`, borders as tables · no depth · document flow, often a single column or raw table · images unprocessed or none · motion: none.
- **Token sketch:** Libre Caslon Text (default-serif look), IBM Plex Mono, system-ui · white `oklch(1 0 0)` · black `oklch(0 0 0)` · link `oklch(0.45 0.30 264)` · harsh `oklch(0.63 0.25 29)` · radius 0 · `1px solid black` or browser defaults.
- **Pick when:** artists, writers, architecture studios, manifestos, dev personal sites, anti-marketing brands.
- **Avoid when:** you need to convert ordinary buyers. Accessible by default (it's HTML), unless deliberately broken.
- **Cliché / dating risk:** now a recognisable "designer pretending not to design" signal.
- **References:** [brutalistwebsites.com](https://brutalistwebsites.com) · [Bloomberg Businessweek's "Code" issue (2015)](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/) · [Craigslist](https://craigslist.org) (vernacular).
- **Combines well with:** brutalist print, terminal, no-motion.

<a id="devtool-dark"></a>

### Dev-tool dark (Vercel / Linear) · `devtool-dark` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/devtool-dark.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/devtool-dark.ts)
- **What:** the 2020s developer-product look: near-black, hairline borders, crisp sans, mono details, one subtle glow.
- **Signature traits:** tight neo-grotesk (Geist, Inter), mono for code and labels · near-black with 2–4 grey steps, white text, one accent or a soft gradient glow · 6–12 px radius, hairline 1 px borders at 8–12 % white · borders over shadows, faint radial glows · centred hero, product screenshot, bento below · UI screenshots, code blocks, abstract grids · motion: fast, precise, 150–250 ms, subtle.
- **Token sketch:** Geist, Geist Mono, Inter · bg `oklch(0.14 0.005 270)` · surface `oklch(0.19 0.006 270)` · border `oklch(0.28 0.008 270)` · text `oklch(0.96 0.003 270)` · muted `oklch(0.65 0.01 270)` · accent `oklch(0.70 0.15 265)` · radius 8 px · `1px solid` borders, glow `radial-gradient` at 15 % alpha.
- **Pick when:** developer tools, infrastructure, AI APIs, productivity tools for engineers.
- **Avoid when:** you want to be noticed in dev tools: it IS the category cliché now. Grey-on-black secondary text often fails AA.
- **Cliché / dating risk:** the most-copied look of 2021–25 ("Linear-style"); sameness is the risk.
- **References:** [Linear](https://linear.app) · [Vercel](https://vercel.com) · [Raycast](https://www.raycast.com) · [Resend](https://resend.com).
- **Combines well with:** terminal or ASCII devices, mono-forward, functional micro motion.

<a id="shadcn"></a>

### Shadcn-minimal · `shadcn` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/shadcn.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/shadcn.ts)
- **What:** the default of shadcn/ui + Tailwind (2023+): zinc neutrals, black primary buttons, small radius, quiet borders, Geist or Inter.
- **Signature traits:** Geist/Inter at medium weights, small text sizes · zinc or slate neutrals, black primary, near-zero colour · 6–8 px radius, 1 px zinc-200 borders · subtle shadow-sm only · cards, forms, data tables, sidebar app layouts · Lucide icons, no illustration · motion: minimal, Radix defaults.
- **Token sketch:** Geist, Inter, Geist Mono · background `oklch(1 0 0)` · foreground `oklch(0.145 0 0)` · muted `oklch(0.97 0 0)` · muted-foreground `oklch(0.556 0 0)` · border `oklch(0.922 0 0)` · radius 0.625 rem · `shadow-xs`, borders first.
- **Pick when:** internal tools, MVPs, B2B SaaS that wants to look competent and ship fast; a neutral base for a later brand layer.
- **Avoid when:** you need to be remembered: it's the AI-generated-app default. Muted foreground on muted bg is near the AA limit.
- **Cliché / dating risk:** the 2024–26 default of every v0/AI-built app; identity zero.
- **References:** [shadcn/ui](https://ui.shadcn.com) · [v0](https://v0.dev) output · [Cal.com](https://cal.com).
- **Combines well with:** one brand device (a colour, a type voice, an ASCII motif) to escape the default.

<a id="enterprise-dense"></a>

### Enterprise / dashboard-dense · `enterprise-dense` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/enterprise-dense.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/enterprise-dense.ts)
- **What:** high-density B2B systems (IBM Carbon, Ant Design, SAP Fiori, Salesforce Lightning): many controls, tables, small type, blue actions.
- **Signature traits:** neutral sans at 12–14 px, tabular figures · grey canvases, white panels, one action blue, full status set · 2–4 px radius, compact controls (28–32 px high) · borders and light shadows · sidebars, toolbars, data tables, filters, breadcrumbs · charts and icons, no imagery · motion: functional only.
- **Token sketch:** IBM Plex Sans, IBM Plex Mono, Source Sans 3 · canvas `oklch(0.96 0.003 250)` · panel `oklch(1 0 0)` · text `oklch(0.25 0.01 250)` · blue `oklch(0.55 0.18 258)` · border `oklch(0.88 0.005 250)` · success `oklch(0.60 0.15 150)` · radius 2–4 px · borders, `0 1px 2px` shadows.
- **Pick when:** ERP, finance ops, analytics, admin consoles, anything users live in all day.
- **Avoid when:** marketing pages or consumer apps. Small text and low-contrast greys are common a11y fails; carbon-style tokens are well tested.
- **Cliché / dating risk:** dates slowly; "looks like SAP" is the insult.
- **References:** [IBM Carbon](https://carbondesignsystem.com) · [Ant Design](https://ant.design) · [SAP Fiori](https://experience.sap.com/fiori-design-web/) · [Salesforce Lightning](https://www.lightningdesignsystem.com).
- **Combines well with:** corporate modernism, mono-forward, no-motion.

<a id="minimalism"></a>

### Minimalism · `minimalism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/minimalism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/minimalism.ts)
- **What:** reduction as the message: few elements, much space, one typeface, near-monochrome. "Less, but better" (Rams).
- **Signature traits:** one neutral sans or serif in 2–3 sizes · black, white, one grey, maybe one accent used once · square or small radius · no shadows, few borders; space does the grouping · centred or strict single column, generous margins · one large product image or none · motion: barely there, slow fades.
- **Token sketch:** Inter or Instrument Sans, Instrument Serif (one accent line), Geist Mono · white `oklch(0.99 0 0)` · black `oklch(0.15 0 0)` · grey `oklch(0.55 0 0)` · line `oklch(0.92 0 0)` · accent (optional) `oklch(0.55 0.15 255)` · radius 0–6 px · no shadows.
- **Pick when:** premium hardware, architecture, fashion, a single-feature product, brands whose product is beautiful enough to carry the page.
- **Avoid when:** you have little to show (empty reads as unfinished), or many features to explain. Light grey text is the usual a11y fail.
- **Cliché / dating risk:** doesn't date; is invisible if the content isn't exceptional.
- **References:** [Aesop](https://www.aesop.com) · [Apple](https://www.apple.com) product pages · [COS](https://www.cos.com) · Dieter Rams's ten principles.
- **Combines well with:** editorial serif accent, studio product photography, no-motion.

<a id="maximalism"></a>

### Maximalism · `maximalism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/maximalism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/maximalism.ts)
- **What:** more is more, deliberately: clashing colour, many typefaces, layered patterns and images, controlled by a strong idea.
- **Signature traits:** 3+ expressive faces at extreme sizes · saturated clashing palette (8+ colours) · mixed shapes, stickers, frames, patterns · mixed depths: flat, shadowed, 3D, collage · dense overlapping layouts, nothing left empty · collage, pattern, photography and illustration together · motion: lots of it, layered.
- **Token sketch:** Bricolage Grotesque (wide range), Shrikhand, Instrument Serif italic, DM Mono · hot pink `oklch(0.66 0.25 355)` · orange `oklch(0.72 0.19 50)` · cobalt `oklch(0.48 0.22 262)` · lime `oklch(0.88 0.20 128)` · purple `oklch(0.45 0.20 300)` · cream `oklch(0.95 0.03 90)` · radius mixed · mixed: hard shadows, outlines, patterns.
- **Pick when:** fashion, music, food and drink, festivals, Gen-Z consumer brands, campaigns that must stop a scroll.
- **Avoid when:** you can't afford an art director to keep it controlled. Busy backgrounds behind text and motion overload are a11y risks; give text plain plates.
- **Cliché / dating risk:** the 2022–25 "dopamine design" wave; dates with each trend cycle.
- **References:** [Gucci under Alessandro Michele](https://www.gucci.com) (2015–22) · [MSCHF](https://mschf.com) · Spotify Wrapped (yearly).
- **Combines well with:** collage, kinetic type, spring motion.

<a id="anti-design"></a>

### Anti-design / ugly · `anti-design` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/anti-design.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/anti-design.ts)
- **What:** deliberate rule-breaking (2018+): clashing defaults, distorted type, bad crops, chaos as authenticity.
- **Signature traits:** stretched or distorted type, default fonts mixed with expressive ones · garish defaults (pure RGB, neon on neon) · random shapes and rotation · inconsistent depth, deliberately wrong drop shadows · asymmetric, overlapping, broken grid · low-res images, MS Paint marks, stickers · motion: jarring, cursor trails.
- **Token sketch:** Archivo (stands in for Arial), Rubik Glitch, Instrument Serif, VT323 · pure blue `oklch(0.45 0.31 264)` · pure green `oklch(0.87 0.29 142)` · magenta `oklch(0.70 0.32 328)` · yellow `oklch(0.97 0.19 110)` · white `oklch(1 0 0)` · radius random · harsh 8px 8px 0 shadows in the wrong colour.
- **Pick when:** fashion with irony, art and music, youth culture, a brand that signals "we're in on it".
- **Avoid when:** you're not truly in that culture, or need trust. Legibility and contrast are routinely broken; keep functional text plain.
- **Cliché / dating risk:** ugliness is its own trend now; Balenciaga made it luxury.
- **References:** [Balenciaga](https://www.balenciaga.com) (2019–23 site) · [Yale School of Art](https://www.art.yale.edu) (wiki site) · [Bloomberg Businessweek covers](https://www.bloomberg.com/businessweek) under Richard Turley.
- **Combines well with:** web brutalism, glitch, maximalism.

<a id="japandi"></a>

### Japandi minimal · `japandi` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/japandi.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/japandi.ts)
- **What:** Japanese restraint plus Scandinavian warmth: oak, linen, clay, low contrast, soft serif or light sans. The interiors and DTC home look.
- **Signature traits:** light serif or thin humanist sans, generous tracking · oat, linen, clay, warm grey, charcoal; no saturated colour · soft rectangles, 2–6 px radius, organic objects · flat, maybe a soft natural shadow · calm grids, big photographs, lots of air · natural-light interiors, ceramics, wood grain · motion: slow, gentle fades.
- **Token sketch:** Cormorant or Fraunces (light), Karla or Hanken Grotesk (text), DM Mono · oat `oklch(0.93 0.02 80)` · linen `oklch(0.96 0.012 85)` · clay `oklch(0.62 0.06 50)` · charcoal `oklch(0.28 0.01 60)` · sage `oklch(0.70 0.04 140)` · radius 2–6 px · soft shadows from photography only.
- **Pick when:** furniture, interiors, ceramics, skincare, hotels, slow living, candles; mid to premium DTC.
- **Avoid when:** you need energy or urgency; low contrast between beiges fails text contrast fast.
- **Cliché / dating risk:** "beige Instagram" is a recognised cliché; still strong in interiors.
- **References:** [Kinfolk](https://www.kinfolk.com) · [Norm Architects](https://normcph.com) · [Karimoku Case](https://www.karimoku-case.com).
- **Combines well with:** editorial photography, Japanese minimal, no-motion.

<a id="aurora"></a>

### Aurora gradients · `aurora` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/aurora.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/aurora.ts)
- **What:** soft blurred colour blooms glowing behind content on a dark background, like northern lights. The 2021–25 AI-startup hero.
- **Signature traits:** neutral sans, white text, gradient-filled headline words · dark navy or black with violet, cyan, pink and green blooms · rounded cards, pills · large blurred radial gradients, glow, no hard shadows · centred hero above the glow · no imagery, the light is the image · motion: blooms drifting slowly.
- **Token sketch:** Inter Tight, Manrope, Geist Mono · night `oklch(0.15 0.03 280)` · violet bloom `oklch(0.55 0.25 295)` · cyan bloom `oklch(0.75 0.13 210)` · pink bloom `oklch(0.68 0.21 350)` · text `oklch(0.97 0.01 280)` · radius 12–999 px · `filter: blur(80px)` blobs, glow borders.
- **Pick when:** one hero moment for an AI, crypto or media product; event pages; when a darker devtool needs warmth.
- **Avoid when:** it's the brand idea itself: it is everybody's. Gradient text and text over blooms often fail AA; animated blur costs GPU.
- **Cliché / dating risk:** the defining AI-startup cliché of 2023–25; dates fast.
- **References:** early [Linear](https://linear.app) hero glows · [Raycast](https://www.raycast.com) · most AI landing pages of 2023–25 (the cliché).
- **Combines well with:** devtool-dark, glassmorphism; prefer a single bloom.

<a id="mesh-gradient"></a>

### Mesh gradient · `mesh-gradient` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/mesh-gradient.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/mesh-gradient.ts)
- **What:** multi-point smooth colour fields used as a brand material, usually bright and saturated on light pages (Stripe 2020's animated WebGL gradient).
- **Signature traits:** confident neutral sans in dark ink, headline over the colour field · 4–5 saturated hues blending (orange, magenta, purple, cyan, yellow) · the field is cut by a diagonal or fills a panel · smooth, no grain or subtle grain · the gradient as a band or panel behind the hero, white below · no other imagery · motion: slow flowing field.
- **Token sketch:** Inter Tight, Schibsted Grotesk (Söhne stand-in), JetBrains Mono · white `oklch(0.99 0 0)` · ink `oklch(0.25 0.04 265)` · orange `oklch(0.74 0.18 55)` · magenta `oklch(0.63 0.26 345)` · purple `oklch(0.52 0.24 295)` · cyan `oklch(0.80 0.13 215)` · radius 8 px · layered `radial-gradient`s, no shadows.
- **Pick when:** fintech and platforms that want energy with polish, creative tools, conferences.
- **Avoid when:** you're the fifth Stripe-alike in your category. Text on the bright end of the field fails contrast; animated WebGL costs battery.
- **Cliché / dating risk:** "Stripe gradient" is a named cliché since 2020.
- **References:** [Stripe](https://stripe.com) (2020 home) · Apple's macOS Big Sur wallpaper (2020) · conference sites built from Stripe's open gradient code.
- **Combines well with:** Swiss grid, editorial type, functional motion.

<a id="holographic"></a>

### Holographic / iridescent · `holographic` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/holographic.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/holographic.ts)
- **What:** oil-slick and holographic foil: pastel rainbow sheens that shift, pearlescent surfaces.
- **Signature traits:** clean extended sans or chrome type · pearl white, lilac, mint, peach, sky shifting through each other · smooth rounded objects, pills, liquid shapes · conic and linear gradient sheens, specular highlights · centred hero objects on pale ground · 3D foil renders, iridescent textures · motion: sheen rotating with the cursor or scroll.
- **Token sketch:** Unbounded or Syne (display), Manrope (text), DM Mono · pearl `oklch(0.96 0.01 300)` · lilac `oklch(0.85 0.07 300)` · mint `oklch(0.90 0.07 170)` · peach `oklch(0.89 0.06 55)` · sky `oklch(0.87 0.07 230)` · ink `oklch(0.25 0.03 290)` · radius 999 px · `conic-gradient` sheen with soft blur.
- **Pick when:** beauty, fragrance, music, fashion drops, Web3 collectibles, festival merch.
- **Avoid when:** sustained reading or product UI. Pastel sheens kill text contrast; keep text on solid ink or white.
- **Cliché / dating risk:** foil-on-everything 2017–19 and Web3 2021; dates fast.
- **References:** [Glossier](https://www.glossier.com) Play's chrome packaging (2019) · [Paco Rabanne](https://www.pacorabanne.com) metallic campaigns · foil festival wristbands and merch (the cliché).
- **Combines well with:** Y2K, blob, beauty.

<a id="blob"></a>

### Liquid / blob · `blob` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/blob.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/blob.ts)
- **What:** organic morphing shapes as the brand's container: blobs, lava-lamp forms, gooey buttons.
- **Signature traits:** soft rounded or bold friendly sans · two or three saturated warm hues with a dark or cream ground · amorphous shapes, no straight corners · flat fills or soft inner gradient · content inside or beside floating blobs · blob photos (masked), abstract forms · motion: slow morphing, gooey hover (SVG goo filter).
- **Token sketch:** Bricolage Grotesque (display), DM Sans (text), DM Mono · cream `oklch(0.96 0.02 85)` · tangerine `oklch(0.72 0.18 50)` · berry `oklch(0.52 0.20 355)` · ink `oklch(0.25 0.03 300)` · lilac `oklch(0.82 0.08 300)` · radius: `border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%` · flat fills.
- **Pick when:** wellness apps, food delivery, consumer fintech, creative tools, kids and family.
- **Avoid when:** precise or serious categories. Morphing motion needs a reduced-motion fallback.
- **Cliché / dating risk:** the 2018–20 "blob" startup illustration; a bit tired.
- **References:** [Headspace](https://www.headspace.com) characters and shapes · [blobmaker.app](https://www.blobmaker.app) (the tool everyone used).
- **Combines well with:** mesh gradient, rounded sans, spring motion.

<a id="spatial"></a>

### Spatial / 3D · `spatial` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/spatial.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/spatial.ts)
- **What:** interfaces as objects in space: depth, perspective, real-time 3D, visionOS-style floating panels.
- **Signature traits:** clean sans with depth-aware weight · neutral glass panels over an environment, soft light · rounded panels with real thickness, pill controls · real perspective, parallax, lighting, depth of field · layered panels at different depths, perspective grids · real-time 3D objects, environments · motion: parallax, camera moves, tilt with the pointer.
- **Token sketch:** Inter Tight, Manrope, Geist Mono · environment `oklch(0.35 0.03 250)` · panel `oklch(0.97 0.005 250 / 0.6)` · text `oklch(0.18 0.01 250)` · accent `oklch(0.66 0.16 250)` · floor `oklch(0.20 0.02 250)` · radius 24–32 px · `perspective` transforms, layered shadows by depth.
- **Pick when:** XR, 3D tools, hardware launches, games, architecture visualisation, immersive storytelling.
- **Avoid when:** the content is reading or data; 3D costs performance and battery, and motion sickness needs a reduced-motion path.
- **Cliché / dating risk:** Spline-built 3D heroes are everywhere since 2021; visionOS imitation will date with the platform.
- **References:** [Apple visionOS](https://developer.apple.com/visionos/) · [Spline](https://spline.design) showcases · Bruno Simon's 3D portfolio.
- **Combines well with:** isometric, cinematic motion, studio product photography.

<a id="vaporwave"></a>

### Vaporwave · `vaporwave` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/vaporwave.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/vaporwave.ts)
- **What:** 2011–16 internet art and music aesthetic: Greek busts, Windows 95, Japanese text, pink-teal sunsets, ironic consumerism.
- **Signature traits:** wide-spaced caps, full-width Japanese characters, Windows 95 type · pink, teal, lavender, sunset gradients · grids receding to the horizon, palm trees, columns · VHS blur, chromatic aberration, low-res 3D · collage on a grid floor · classical busts, palms, dolphins, early-3D objects · motion: slow VHS drift.
- **Token sketch:** Michroma or Syne (wide), VT323 (system text), Zen Kaku Gothic New (Japanese) · pink `oklch(0.78 0.14 350)` · teal `oklch(0.78 0.11 195)` · lavender `oklch(0.78 0.10 300)` · deep purple `oklch(0.30 0.12 300)` · sunset `oklch(0.75 0.16 50)` · radius 0 · retro window chrome, scanlines.
- **Pick when:** music, internet-culture merch, ironic campaigns, games.
- **Avoid when:** anything sincere. Low-res and chromatic aberration hurt legibility.
- **Cliché / dating risk:** a meme since 2015; pure nostalgia now.
- **References:** Macintosh Plus's "Floral Shoppe" cover (2011) · [Adult Swim](https://www.adultswim.com) bumps · "aesthetic" Tumblr.
- **Combines well with:** retro OS, glitch, synthwave.

<a id="synthwave"></a>

### Synthwave / outrun · `synthwave` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/synthwave.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/synthwave.ts)
- **What:** an imagined 1984: neon grid horizons, chrome script, magenta-to-orange suns, night drives.
- **Signature traits:** chrome italic display and neon script · deep purple night, magenta, cyan, orange sun · grid floor to horizon, striped sun · neon glow (text-shadow), chrome gradients · horizon-centred compositions · sports cars, palms, mountains in wireframe · motion: grid scrolling toward the viewer.
- **Token sketch:** Monoton or Orbitron (display), Michroma (sub), VT323 · night `oklch(0.18 0.08 295)` · magenta `oklch(0.65 0.28 340)` · cyan `oklch(0.85 0.14 205)` · sun orange `oklch(0.78 0.15 60)` · violet `oklch(0.45 0.20 300)` · radius 0 · `text-shadow` glow, chrome gradient type.
- **Pick when:** games, music, nightlife, retro tech events, fitness for a nostalgic audience.
- **Avoid when:** you want to look current to anyone outside the niche. Neon glow lowers legibility.
- **Cliché / dating risk:** heavily used since "Drive" (2011) and "Stranger Things"; a known costume.
- **References:** "Far Cry 3: Blood Dragon" (2013) · "Drive" (2011) poster typography · "Kung Fury" (2015).
- **Combines well with:** retro-futurism, pixel, nightlife.

<a id="cyberpunk"></a>

### Cyberpunk · `cyberpunk` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/cyberpunk.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/cyberpunk.ts)
- **What:** high tech, low life: neon signs in rain, glitches, warning yellow, dense Asian-city signage, aggressive HUDs.
- **Signature traits:** condensed techno sans, Japanese/Chinese characters as texture, glitch type · black with acid yellow, magenta, cyan neon · clipped corners (45° chamfers), warning stripes · neon glow, scanlines, chromatic aberration · dense, layered, asymmetric · rainy night cities, glitch portraits · motion: glitch flickers, fast cuts.
- **Token sketch:** Chakra Petch or Rajdhani (display), Share Tech Mono, Saira Condensed · black `oklch(0.13 0.01 280)` · acid yellow `oklch(0.92 0.19 105)` · magenta `oklch(0.65 0.27 345)` · cyan `oklch(0.86 0.14 200)` · steel `oklch(0.45 0.02 260)` · radius 0 with `clip-path` chamfers · glow, scanlines.
- **Pick when:** games, esports, gaming hardware, nightlife, security tools with attitude.
- **Avoid when:** trust, health, money. Flicker over 3 Hz is a seizure risk (WCAG 2.3.1); neon on black is fine, neon on neon is not.
- **Cliché / dating risk:** "Cyberpunk 2077" made it mainstream; reads gamer-cliché.
- **References:** "Cyberpunk 2077" UI (CD Projekt, 2020) · "Blade Runner" (1982) · "Ghost in the Shell" (1995).
- **Combines well with:** HUD, glitch, gaming.

<a id="retro-futurism"></a>

### Retro-futurism · `retro-futurism` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/retro-futurism.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/retro-futurism.ts)
- **What:** the future as imagined in 1955–80: NASA-era optimism, space-age orange, rounded CRTs, rocket diagrams.
- **Signature traits:** extended geometric sans (Eurostile-like), NASA worm-like lettering · cream, space orange, avocado, brown, navy · rounded rectangles like CRTs, circles, orbits · flat with print grain · technical diagrams, mission patches, grids · rockets, planets, technical drawings · motion: slow orbits, countdowns.
- **Token sketch:** Michroma (display), Exo 2 or Jost (text), Space Mono · cream `oklch(0.93 0.035 85)` · space orange `oklch(0.66 0.18 45)` · avocado `oklch(0.60 0.10 115)` · navy `oklch(0.28 0.06 260)` · brown `oklch(0.40 0.06 55)` · radius 12–24 px (CRT) · flat, grain.
- **Pick when:** space and aerospace, energy, EV and mobility, sci-fi publishing, design-led hardware.
- **Avoid when:** you need to feel today. Low risk on a11y with dark text on cream.
- **Cliché / dating risk:** "NASA merch" fashion; Space Mono everywhere.
- **References:** NASA worm logo (Danne & Blackburn, 1975) · "2001: A Space Odyssey" interface graphics · [SpaceX](https://www.spacex.com) mission patches (as current descendants).
- **Combines well with:** technical manual, streamline, Swiss.

<a id="hud"></a>

### Sci-fi HUD / FUI · `hud` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/hud.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/hud.ts)
- **What:** fictional user interfaces from film: thin lines, brackets, readouts, radar arcs, cyan on black.
- **Signature traits:** thin extended or mono caps, tracked wide, numbered labels · black or deep navy with one cyan or amber line colour · brackets, corner marks, arcs, crosshairs, hairline frames · glow, scanlines, transparency · dense readouts around a central object · wireframes, data streams, schematics · motion: lines drawing on, counters ticking, scanning.
- **Token sketch:** Chakra Petch or Rajdhani (labels), Orbitron (display, sparingly), JetBrains Mono · deep navy `oklch(0.15 0.03 250)` · cyan `oklch(0.84 0.13 205)` · amber `oklch(0.80 0.15 75)` · dim line `oklch(0.45 0.06 220)` · white `oklch(0.97 0.01 220)` · radius 0, corner brackets · 1 px lines, soft glow.
- **Pick when:** space, defence, robotics, security, games, data-heavy dashboards that want drama.
- **Avoid when:** real productivity UI (thin lines and caps are hard to read); civilian trust contexts.
- **Cliché / dating risk:** "Iron Man HUD"; looks like a film prop.
- **References:** Territory Studio's FUI for "Guardians of the Galaxy" and "Blade Runner 2049" · Mark Coleran's FUI work · "Oblivion" (2013) UI by GMUNK.
- **Combines well with:** cyberpunk, terminal, generative motion.

<a id="pixel"></a>

### Pixel / 8-bit · `pixel` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/pixel.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/pixel.ts)
- **What:** the 8- and 16-bit game screen: bitmap fonts, limited palettes, chunky pixels, sprites.
- **Signature traits:** pixel fonts at integer sizes · limited palettes (NES, PICO-8, Game Boy greens) · stepped pixel edges, no radius (or pixel-stepped corners) · hard 4–8 px offset shadows, pixel bevels · tile grids, game HUDs, dialog boxes · sprites, pixel art · motion: stepped, 8–12 fps, `steps()` easing.
- **Token sketch:** Press Start 2P (display), Pixelify Sans or Silkscreen (UI), VT323 (text) · night `oklch(0.22 0.05 280)` · PICO-8 red `oklch(0.60 0.22 20)` · yellow `oklch(0.90 0.17 100)` · green `oklch(0.72 0.18 145)` · blue `oklch(0.60 0.15 255)` · white `oklch(0.97 0 0)` · radius 0 · `image-rendering: pixelated`, 4 px hard shadows.
- **Pick when:** games, retro tech, playful dev tools, crypto with a game layer, kids' coding.
- **Avoid when:** long reading (pixel fonts at body size are hard); serious money or health.
- **Cliché / dating risk:** evergreen in games, a gimmick elsewhere.
- **References:** Nintendo NES (1983) · PICO-8 fantasy console's 16-colour palette · [Celeste](https://www.celestegame.com) and indie pixel games.
- **Combines well with:** dithered, retro OS, stepped motion.

<a id="terminal"></a>

### Terminal / CLI · `terminal` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/terminal.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/terminal.ts)
- **What:** the command line as brand: monospace everything, prompts, cursors, box-drawing characters, ANSI colours.
- **Signature traits:** one mono at one size, hierarchy by colour and prefixes (`$`, `>`, `#`) · black or dark with phosphor green, amber, or ANSI colours; light "paper terminal" also works · box-drawing frames (┌─┐), brackets · no shadows; maybe a faint CRT glow · character grid, everything aligned to the cell · ASCII diagrams, logs · motion: typing, blinking cursor, stepped.
- **Token sketch:** JetBrains Mono, IBM Plex Mono, Geist Mono · bg `oklch(0.16 0.01 150)` · phosphor `oklch(0.85 0.17 145)` · dim `oklch(0.55 0.06 145)` · amber `oklch(0.80 0.15 75)` · red `oklch(0.65 0.20 25)` · radius 0 · box-drawing characters, no borders.
- **Pick when:** developer tools, security, infra, AI agents and CLIs, technical newsletters.
- **Avoid when:** non-technical buyers; "hacker green on black" is a cliché to ban in most dev brands. Green-on-black is fine for contrast; dim greys are not.
- **Cliché / dating risk:** "The Matrix"; low dating with a modern mono and restraint.
- **References:** [Warp](https://www.warp.dev) · [Charm](https://charm.sh) (Bubble Tea CLIs) · [Ghostty](https://ghostty.org).
- **Combines well with:** dev-tool dark, ASCII art, stepped motion, Swiss.

<a id="dithered"></a>

### Dithered / 1-bit · `dithered` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/dithered.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/dithered.ts)
- **What:** images and surfaces built from two colours using ordered (Bayer) or error-diffusion dithering, as on early Macs and e-ink.
- **Signature traits:** pixel or crisp grotesk, often mono · two colours: black and white, or ink and paper, or one tint · square, pixel-precise · depth by dither density only · images as dithered fields, gradients as Bayer patterns · dithered photographs (Atkinson, Floyd–Steinberg) · motion: dither dissolves, stepped.
- **Token sketch:** Space Grotesk or Inter (UI), Silkscreen (labels), IBM Plex Mono · paper `oklch(0.95 0.01 90)` · ink `oklch(0.18 0.01 260)` · tint (optional) `oklch(0.55 0.18 255)` · radius 0 · dither patterns via SVG or canvas, `image-rendering: pixelated`.
- **Pick when:** e-ink devices, low-tech and solar sites, publishing, dev tools with nostalgia, image and AI tools that want a signature treatment.
- **Avoid when:** photos must show detail and skin truthfully. Dither textures behind text kill legibility; keep text on solid colour.
- **Cliché / dating risk:** a rising 2023+ trend; still distinctive, getting common.
- **References:** Bill Atkinson's dithering in MacPaint (1984) · [Low-tech Magazine](https://solar.lowtechmagazine.com) · Lucas Pope's "Return of the Obra Dinn" (2018) · [Playdate](https://play.date).
- **Combines well with:** Swiss, technical manual, terminal, pixel.

## 4. Industry-coded languages

What a category looks like when it plays it safe. Use these blocks two ways: to name the **category cliché** in phase 1 (what you will stand apart from), and to list the **trust cues** you must keep while you do it. Copying one whole makes you invisible in your own category.

<a id="fintech"></a>

### Fintech trust · `fintech` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/fintech.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/fintech.ts)
- **What:** money products that must feel safe and modern: deep navy or green, crisp sans, big numbers, cards, calm.
- **Signature traits:** neutral or geometric sans, tabular figures, large balance numbers · navy or deep green with one bright accent (lime, electric blue), lots of white · 12–16 px radius cards, card-shaped objects · soft shadows or none · split hero with phone mock, trust bar, numbers · product UI, cards, people photos · motion: number counters, smooth 200–300 ms.
- **Token sketch:** Manrope or Plus Jakarta Sans, Inter (UI), JetBrains Mono (figures) · navy `oklch(0.25 0.06 260)` · white `oklch(0.99 0 0)` · surface `oklch(0.97 0.005 250)` · accent lime `oklch(0.88 0.20 128)` · positive `oklch(0.60 0.15 150)` · radius 12–16 px · soft shadows, 1 px borders on tables.
- **Pick when:** banking, payments, investing, insurance, payroll; the buyer's fear is losing money or control.
- **Avoid when:** you need to stand out among neobanks: navy + lime + phone mock is the 2020s default. Never rely on red/green alone for gains/losses.
- **Cliché / dating risk:** "phone tilted on a gradient with a card floating" and purple neobanks; low dating, high sameness.
- **References:** [Wise](https://wise.com) (lime on forest) · [Revolut](https://www.revolut.com) · [Mercury](https://mercury.com) (the calm counter-example) · [Monzo](https://monzo.com).
- **Combines well with:** editorial or Swiss for a calmer stance, mono-forward numbers, functional motion.

<a id="luxury"></a>

### Luxury / fashion · `luxury` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/luxury.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/luxury.ts)
- **What:** the maison language: black and white, a didone or a tracked-out sans wordmark, huge photography, almost no UI.
- **Signature traits:** didone or wide-tracked caps sans, small text sizes · black, white, one house colour at most (Hermès orange, Tiffany blue) · square, no radius · no shadows, no borders · full-bleed imagery, tiny navigation, lots of space · fashion photography, campaign film · motion: slow fades, video.
- **Token sketch:** Bodoni Moda or Italiana (display), Jost or Tenor Sans (tracked caps, +20 %), Cormorant (editorial) · white `oklch(1 0 0)` · black `oklch(0.12 0 0)` · greige `oklch(0.90 0.01 80)` · house colour `oklch(0.66 0.17 50)` · radius 0 · no shadows.
- **Pick when:** fashion, jewellery, watches, high-end hospitality, real estate; the buyer pays for distance and taste.
- **Avoid when:** you can't afford the photography; without it, this style looks empty. Tiny tracked caps hurt legibility.
- **Cliché / dating risk:** "blanding": the 2017–19 wave where Saint Laurent, Burberry, Balenciaga and Balmain all switched to near-identical bold sans wordmarks.
- **References:** [Saint Laurent](https://www.ysl.com) · [Hermès](https://www.hermes.com) · [The Row](https://www.therow.com) · [Celine](https://www.celine.com).
- **Combines well with:** didone type, editorial photography, cinematic motion.

<a id="beauty"></a>

### Beauty / clean-girl · `beauty` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/beauty.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/beauty.ts)
- **What:** DTC skincare and makeup since 2014: millennial pink to sandy nude, soft serif, dewy skin close-ups, minimal packaging.
- **Signature traits:** soft serif or light sans, lowercase · blush, nude, sand, milky white, one brand pop · rounded pills, soft radii, squeezable shapes · soft natural shadows, glossy highlights in photography · big product shots on pastel grounds · skin close-ups, textures (swatches, droplets) · motion: gentle, glossy hovers.
- **Token sketch:** Fraunces (soft) or Instrument Serif, DM Sans or Figtree, DM Mono · milk `oklch(0.97 0.01 60)` · blush `oklch(0.88 0.04 20)` · nude `oklch(0.80 0.05 55)` · cocoa `oklch(0.35 0.04 40)` · pop `oklch(0.62 0.20 15)` · radius 999 px buttons, 12 px cards · soft photo shadows only.
- **Pick when:** skincare, cosmetics, haircare, personal care; buyers who buy by texture and feeling.
- **Avoid when:** you want to stand apart: "millennial pink + serif" is the category. Nude-on-nude text fails contrast.
- **Cliché / dating risk:** millennial pink (2016) and "clean girl" (2022) are both named clichés.
- **References:** [Glossier](https://www.glossier.com) · [Rhode](https://www.rhodeskin.com) · [The Ordinary](https://theordinary.com) (the clinical counter-example) · [Summer Fridays](https://summerfridays.com).
- **Combines well with:** studio product photography, editorial, holographic accents.

<a id="wellness"></a>

### Wellness / organic · `wellness` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/wellness.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/wellness.ts)
- **What:** calm, earthy, natural: sage and clay, soft serif or rounded sans, organic shapes, sunlight.
- **Signature traits:** soft serif headlines, friendly sans text · sage, terracotta, oat, olive, sand · arches, pebbles, organic blobs, rounded cards · flat or soft shadows, paper grain · airy layouts, centred calm · sunlight photography, botanicals, line drawings · motion: slow breathing (4 s loops), gentle fades.
- **Token sketch:** Fraunces (soft, light), Figtree or Nunito Sans, DM Mono · oat `oklch(0.95 0.02 85)` · sage `oklch(0.70 0.05 140)` · terracotta `oklch(0.62 0.12 45)` · olive `oklch(0.42 0.05 120)` · bark `oklch(0.30 0.03 60)` · radius 16–999 px, arches · soft shadows, grain.
- **Pick when:** supplements, yoga, therapy and meditation apps, natural food, spas, slow fashion.
- **Avoid when:** clinical credibility is needed (it can read unscientific). Sage-on-oat text fails AA.
- **Cliché / dating risk:** "sage green + arch + terracotta" is the 2020–24 default of every wellness DTC brand.
- **References:** [Headspace](https://www.headspace.com) · [Calm](https://www.calm.com) · [Aesop](https://www.aesop.com) (the restrained counter-example) · [Ritual](https://ritual.com) (clinical yellow counter-example).
- **Combines well with:** line art, botanical engraving, Japandi.

<a id="food-craft"></a>

### Food & beverage craft · `food-craft` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/food-craft.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/food-craft.ts)
- **What:** small-batch food and drink: badges and seals, hand lettering, kraft paper, warm photos of ingredients and hands.
- **Signature traits:** chunky slabs or quirky serifs with a script accent, stamped badges · warm palettes: tomato red, mustard, kraft brown, cream, bottle green · badges, seals, labels, wavy borders · flat with paper textures · labels and packaging as layout · ingredient photography, hands, illustration, stamps · motion: playful, stickers landing.
- **Token sketch:** Young Serif, Fraunces (wonky axis on; a Recoleta stand-in), Bricolage Grotesque, DM Mono · cream `oklch(0.95 0.03 85)` · tomato `oklch(0.60 0.19 32)` · mustard `oklch(0.78 0.14 80)` · kraft `oklch(0.66 0.07 65)` · bottle `oklch(0.35 0.06 160)` · radius 8 px, round badges · grain, no shadows.
- **Pick when:** coffee, bakeries, craft beer, condiments, restaurants, farm brands, natural wine.
- **Avoid when:** you scale to supermarkets where the "artisan" look is already the house brand. Script on texture hurts legibility.
- **Cliché / dating risk:** "established 20XX" badges, the 2010s hipster label; the 2020s version is wonky serif + bright flat colour (Graza, Fishwife).
- **References:** [Graza](https://www.graza.co) · [Fishwife](https://eatfishwife.com) · [Fly By Jing](https://flybyjing.com) · [Oatly](https://www.oatly.com) (the copy-led counter-example).
- **Combines well with:** letterpress, doodle, riso.

<a id="kids"></a>

### Kids / playful · `kids` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/kids.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/kids.ts)
- **What:** bright, rounded, chunky, character-led: thick outlines, primary-plus colours, buttons that look pressable.
- **Signature traits:** rounded bold sans, big sizes · saturated primaries and secondaries on white · very round shapes, chunky "3D" buttons with a bottom edge · solid bottom-border depth (4 px darker edge), no blur · big touch targets, simple layouts · mascots, flat characters · motion: bouncy springs, celebrations.
- **Token sketch:** Fredoka or Baloo 2 (display), Nunito (text), Sniglet (accents) · white `oklch(0.99 0 0)` · green `oklch(0.75 0.20 135)` · blue `oklch(0.66 0.15 240)` · yellow `oklch(0.88 0.16 92)` · red `oklch(0.66 0.21 25)` · ink `oklch(0.30 0.03 260)` · radius 16 px+ · `box-shadow: 0 4px 0` darker shade.
- **Pick when:** children's products, learning apps, family brands, casual games, playful consumer apps for adults that want warmth.
- **Avoid when:** buyers are parents choosing for safety (medical, financial): they want calm, not candy. Bright fills as text colours fail AA.
- **Cliché / dating risk:** Duolingo-likes everywhere since 2019.
- **References:** [Duolingo](https://www.duolingo.com) · [Khan Academy Kids](https://learn.khanacademy.org/khan-academy-kids/) · [Toca Boca](https://tocaboca.com) · [LEGO](https://www.lego.com).
- **Combines well with:** mascot, claymorphism, spring motion.

<a id="gaming"></a>

### Gaming · `gaming` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/gaming.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/gaming.ts)
- **What:** game launchers and esports: dark, high contrast, angular, key art first, neon accents, aggressive type.
- **Signature traits:** condensed or extended caps, italic for speed · near-black with one neon (lime, red, cyan) and metallic greys · chamfered angles, slanted buttons, clipped corners · glows, gradients, textures · key art full-bleed, cards with stats · 3D renders, character art · motion: fast, punchy, sound-backed.
- **Token sketch:** Saira Condensed or Chakra Petch (display), Rajdhani or Barlow (text), JetBrains Mono · black `oklch(0.14 0.01 270)` · panel `oklch(0.20 0.015 270)` · neon lime `oklch(0.88 0.22 135)` · red `oklch(0.60 0.24 25)` · steel `oklch(0.65 0.02 260)` · radius 0 with chamfers · glows, angled `clip-path`.
- **Pick when:** games, esports, peripherals, streaming tools, gaming chairs.
- **Avoid when:** you're a cosy, narrative or family game: the "gamer" look excludes that audience. Flashing effects need care (photosensitivity).
- **Cliché / dating risk:** RGB "gamer" aesthetics; the 2020s counter-trend is cosy, editorial and indie.
- **References:** [Razer](https://www.razer.com) · [Riot Games](https://www.riotgames.com) (Valorant's red and cream is the smarter version) · [Epic Games Store](https://store.epicgames.com).
- **Combines well with:** cyberpunk, HUD, condensed type.

<a id="web3"></a>

### Crypto / web3 · `web3` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/web3.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/web3.ts)
- **What:** 2017–22 crypto: dark mode, gradients, 3D coins, glowing orbs, "decentralised" network motifs.
- **Signature traits:** geometric or techno sans, mono addresses · near-black with violet-to-cyan gradients, neon green for gains · pills, orbs, hexagons · glows, glassmorphism, 3D renders · hero with a big 3D object, stats bar, partner logos · 3D coins, networks, particles · motion: floating 3D, particle fields.
- **Token sketch:** Sora or Space Grotesk (display), Inter (UI), JetBrains Mono (addresses) · void `oklch(0.13 0.02 280)` · violet `oklch(0.58 0.24 295)` · cyan `oklch(0.82 0.14 205)` · gain green `oklch(0.85 0.20 150)` · text `oklch(0.96 0.01 280)` · radius 12–999 px · glows, glass.
- **Pick when:** you are in crypto and must signal belonging to a crypto-native audience.
- **Avoid when:** you want mainstream trust: this look now signals hype and risk. The serious counter-direction (editorial, Swiss, fintech) is usually better. Gradient text fails contrast.
- **Cliché / dating risk:** the definition of 2021; dates hard after each crash.
- **References:** [Uniswap](https://uniswap.org) (the pink exception) · [Phantom](https://phantom.app) · [Coinbase](https://www.coinbase.com) (the fintech-trust counter-example).
- **Combines well with:** fintech trust or Swiss if you want to escape it.

<a id="civic"></a>

### Government / civic (GOV.UK) · `civic` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/civic.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/civic.ts)
- **What:** public-service design: accessibility first, plain language, one column, black header, big type, no decoration.
- **Signature traits:** one highly legible sans at 19 px body, bold headings · black, white, link blue, focus yellow, functional greens and reds · square, no radius · no shadows; thick focus rings · single column, max 2/3 width, clear headings, step-by-step · no imagery or simple documentary photos · motion: none.
- **Token sketch:** Public Sans or Atkinson Hyperlegible (stand-ins for GDS Transport, which isn't public), Source Sans 3, IBM Plex Mono · black `oklch(0.15 0.002 180)` · white `oklch(1 0 0)` · link blue `oklch(0.53 0.14 250)` · focus yellow `oklch(0.91 0.16 98)` · green `oklch(0.47 0.12 155)` · radius 0 · 3 px focus outline + yellow fill, no shadows.
- **Pick when:** government, councils, NGOs, utilities, health services, any form-heavy service where everyone must succeed.
- **Avoid when:** you need emotion or brand recall. This is the a11y gold standard; nothing to avoid on contrast.
- **Cliché / dating risk:** barely dates by design; it can feel cold for a consumer product.
- **References:** [GOV.UK Design System](https://design-system.service.gov.uk) · [U.S. Web Design System](https://designsystem.digital.gov) · [Estonia's e-services](https://www.eesti.ee).
- **Combines well with:** wayfinding, Swiss, no-motion.

<a id="healthcare"></a>

### Healthcare · `healthcare` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/healthcare.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/healthcare.ts)
- **What:** clinical but human: teal and soft blue, friendly sans, rounded cards, real people smiling, lots of white.
- **Signature traits:** humanist or rounded sans, generous sizes · white with teal, calm blue, soft coral accent · rounded 12–16 px cards and pill buttons · soft shadows · simple layouts, step lists, reassurance badges · photos of clinicians and patients, soft illustration · motion: gentle, never alarming.
- **Token sketch:** Figtree or Nunito Sans, Atkinson Hyperlegible (forms), DM Mono · white `oklch(0.99 0 0)` · mist `oklch(0.96 0.015 200)` · teal `oklch(0.52 0.09 195)` · deep `oklch(0.30 0.05 230)` · coral `oklch(0.72 0.12 30)` · radius 12–16 px, pills · soft shadow `0 4px 16px` low alpha.
- **Pick when:** clinics, telehealth, insurance, pharma for patients, medical devices for home.
- **Avoid when:** you want to look like more than "another clinic": teal + stock smile is the category. Accessibility is a legal need here: test everything (contrast, target size, plain language).
- **Cliché / dating risk:** stock photos of smiling doctors; generic teal.
- **References:** [One Medical](https://www.onemedical.com) · [Oscar Health](https://www.hioscar.com) · [Hims & Hers](https://www.forhims.com) (the DTC counter-example) · [NHS](https://www.nhs.uk) (civic).
- **Combines well with:** civic, editorial, humanist sans.

<a id="education"></a>

### Education · `education` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/education.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/education.ts)
- **What:** learning products and institutions: friendly authority, clear structure, progress, warm colours; universities add crests and serifs.
- **Signature traits:** friendly sans for products, a serif for institutions · a confident primary (blue, green, purple) plus warm accents · rounded cards, progress bars, badges · soft shadows · course grids, progress steps, outlines · illustrations of people learning, campus photos · motion: progress fills, small celebrations.
- **Token sketch:** Lexend (made for reading proficiency), Source Serif 4 (institutional), JetBrains Mono · paper `oklch(0.98 0.005 90)` · primary `oklch(0.45 0.15 265)` · warm `oklch(0.78 0.14 75)` · green `oklch(0.62 0.14 150)` · ink `oklch(0.25 0.02 265)` · radius 8–16 px · soft shadows.
- **Pick when:** edtech, schools, universities, courses, publishers of learning material.
- **Avoid when:** learners are adults who resent being treated as children. Accessibility (reading levels, dyslexia, captions) is non-negotiable.
- **Cliché / dating risk:** graduation caps, lightbulbs, pencils; generic blue.
- **References:** [Khan Academy](https://www.khanacademy.org) · [Coursera](https://www.coursera.org) · [Brilliant](https://brilliant.org) (the crafted counter-example) · [MIT OpenCourseWare](https://ocw.mit.edu).
- **Combines well with:** editorial, flat vector, Bauhaus for design schools.

<a id="outdoor"></a>

### Outdoor / utilitarian · `outdoor` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/outdoor.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/outdoor.ts)
- **What:** gear and workwear: earth tones, safety orange, condensed caps, topographic lines, rugged photography.
- **Signature traits:** condensed or slab caps, stencil accents, spec sheets in mono · olive, khaki, granite, safety orange, sky · rectangles, patches, badges, topographic contours · flat with paper or canvas texture · spec tables, rugged product grids · landscape photography, people in weather · motion: minimal, sturdy.
- **Token sketch:** Barlow Condensed or Oswald (display), Barlow (text), Space Mono (specs) · canvas `oklch(0.93 0.02 90)` · olive `oklch(0.45 0.06 120)` · granite `oklch(0.30 0.01 250)` · safety orange `oklch(0.68 0.19 45)` · khaki `oklch(0.75 0.05 90)` · radius 2–4 px · stitched or dashed borders, no shadows.
- **Pick when:** outdoor gear, workwear, tools, camping, utility vehicles, expedition travel.
- **Avoid when:** urban luxury or digital-only products (looks like costume). Orange on khaki fails contrast.
- **Cliché / dating risk:** "gorpcore" fashion borrowed it 2018+; topo lines are a cliché.
- **References:** [Patagonia](https://www.patagonia.com) · [Snow Peak](https://www.snowpeak.com) · [Filson](https://www.filson.com) · [Carhartt WIP](https://www.carhartt-wip.com).
- **Combines well with:** technical manual, documentary photography, wayfinding.

<a id="automotive"></a>

### Automotive / industrial · `automotive` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/automotive.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/automotive.ts)
- **What:** cars, EVs and heavy industry: dark studios, extended sans, metallic greys, precise lines, cinematic product renders.
- **Signature traits:** wide extended sans in caps, thin weights, specs in mono · black, graphite, silver, one signal colour · thin lines, sharp corners, a few large radii from the product · studio lighting, reflections on renders · full-bleed product, spec strips · studio renders, motion shots · motion: slow reveals, light sweeps.
- **Token sketch:** Michroma or Saira (extended), Inter (text), JetBrains Mono (specs) · black `oklch(0.13 0 0)` · graphite `oklch(0.28 0.005 260)` · silver `oklch(0.80 0.005 260)` · white `oklch(0.98 0 0)` · signal `oklch(0.62 0.22 28)` · radius 0–4 px · hairlines, no UI shadows.
- **Pick when:** vehicles, EV charging, motorsport, machinery, premium hardware.
- **Avoid when:** you lack studio-grade renders. Thin extended caps at small size and grey-on-black fail readability.
- **Cliché / dating risk:** every EV launch since 2018 (dark studio, wide caps, "Model" naming).
- **References:** [Polestar](https://www.polestar.com) · [Porsche](https://www.porsche.com) · [Rivian](https://rivian.com) (the outdoor-warm counter-example) · [Lucid](https://lucidmotors.com).
- **Combines well with:** studio product photography, cinematic motion, technical manual.

<a id="b2b-saas"></a>

### B2B SaaS · `b2b-saas` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/b2b-saas.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/b2b-saas.ts)
- **What:** the default software landing: a headline, a subline, two buttons, a product screenshot, a logo wall, three feature columns, pricing.
- **Signature traits:** neutral or geometric sans, semibold headlines · white with a blue or purple primary, light grey sections · 8–12 px radius, pills for tags · soft shadows under screenshots · centred or split hero, logo wall, features grid, testimonials, pricing table · product screenshots, UI fragments, simple icons · motion: subtle on-scroll fades.
- **Token sketch:** Plus Jakarta Sans or Manrope, Inter, JetBrains Mono · white `oklch(1 0 0)` · section grey `oklch(0.97 0.005 260)` · ink `oklch(0.22 0.02 265)` · primary `oklch(0.52 0.22 275)` · border `oklch(0.91 0.01 265)` · radius 8–12 px · `0 10px 30px` soft shadow on screenshots.
- **Pick when:** you need a conversion baseline quickly; as the skeleton under a stronger style.
- **Avoid when:** you want to be remembered; as a full look it is the category cliché. Grey body text and light primary on white are common AA fails.
- **Cliché / dating risk:** "purple SaaS gradient + Alegria people" (2017–21); now "shadcn + bento" (2023–26).
- **References:** [HubSpot](https://www.hubspot.com) · [Intercom](https://www.intercom.com) · [Notion](https://www.notion.so) (the illustrated counter-example) · [Attio](https://attio.com).
- **Combines well with:** almost anything as a skeleton; give it one strong device from another family.

<a id="ai-lab"></a>

### AI lab (humanist) · `ai-lab` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/ai-lab.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/ai-lab.ts)
- **What:** the 2023+ look of frontier AI labs that avoid sci-fi: warm paper, serif or humanist type, research-journal calm, hand-drawn or painterly imagery.
- **Signature traits:** a serif or humanist display with a quiet grotesk, mono for code · warm off-white or stone, near-black ink, one earthy accent (clay, rust) · square or slightly rounded · flat, hairlines · editorial layouts, research-paper structure · hand-drawn or painterly illustration, abstract shapes, no robots · motion: calm, minimal.
- **Token sketch:** Newsreader or Source Serif 4 (display), Instrument Sans or Hanken Grotesk, JetBrains Mono · stone `oklch(0.96 0.012 80)` · ink `oklch(0.20 0.01 60)` · clay `oklch(0.62 0.13 40)` · grey `oklch(0.55 0.01 60)` · line `oklch(0.88 0.01 80)` · radius 4–8 px · hairlines, no shadows.
- **Pick when:** AI research, safety, model companies, serious AI tools that want to signal care over hype.
- **Avoid when:** every AI lab now does it; you need your own device on top. Warm grey text on stone is near the AA line.
- **Cliché / dating risk:** became the "thoughtful AI" default by 2024 (and the counter to neon AI); same risk as any default.
- **References:** [Anthropic](https://www.anthropic.com) (warm stone, serif display, hand-drawn illustration) · [OpenAI](https://openai.com) (2024 identity: OpenAI Sans, warm photography, no robots) · [Mistral](https://mistral.ai) (pixel orange, a different route).
- **Combines well with:** editorial, painterly art, ASCII or dither as a device.

<a id="creator"></a>

### Creator / influencer · `creator` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/creator.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/creator.ts)
- **What:** personal brands and creator tools: bold faces, the person's photo in a cut-out, stickers, social-native layouts, link-in-bio energy.
- **Signature traits:** bold display sans, handwritten accents, emoji · one or two signature colours, high saturation · pills, rounded cards, stickers, squiggles · cut-out photos with white outline, drop shadows · vertical, mobile-first stacks · selfies, cut-outs, thumbnails with faces · motion: snappy, social transitions.
- **Token sketch:** Bricolage Grotesque (bold), Inter, Caveat (handwritten notes) · white `oklch(0.99 0 0)` · signature `oklch(0.65 0.24 15)` · second `oklch(0.88 0.17 95)` · ink `oklch(0.20 0.01 270)` · soft `oklch(0.95 0.02 15)` · radius 16–999 px · sticker outline + `0 6px 0` shadow.
- **Pick when:** creators, coaches, newsletters, courses, link-in-bio tools, UGC platforms.
- **Avoid when:** the brand must outlive the person, or B2B buyers. Handwriting and stickers over photos fail contrast.
- **Cliché / dating risk:** YouTube-thumbnail faces; dates with each platform's trend.
- **References:** [Linktree](https://linktr.ee) · [Beacons](https://beacons.ai) · [MrBeast](https://www.youtube.com/@MrBeast) thumbnails (the extreme) · [Substack](https://substack.com) (the editorial counter-example).
- **Combines well with:** neobrutalism, doodle, kinetic type.

<a id="nightlife"></a>

### Adult / nightlife (tasteful) · `nightlife` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/nightlife.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/nightlife.ts)
- **What:** clubs, bars, dating and adult-adjacent brands done with taste: dark, intimate, red or magenta light, grain, discretion.
- **Signature traits:** condensed or high-contrast display, small discreet text · black, deep red, magenta or ultraviolet, warm skin tones in light · tall narrow shapes, round dots, minimal UI · low-key lighting, grain, glow, blur · poster-like single images, event lists · flash photography, silhouettes, crops (never explicit) · motion: slow pulses, strobe-free.
- **Token sketch:** Bodoni Moda or Big Shoulders Display, Inter, DM Mono · black `oklch(0.12 0.01 20)` · red `oklch(0.52 0.21 25)` · magenta `oklch(0.60 0.24 345)` · skin-warm `oklch(0.75 0.06 50)` · text `oklch(0.95 0.01 60)` · radius 0–4 px · glow, grain, no hard shadows.
- **Pick when:** clubs, bars, events, dating, intimacy and adult wellness, late-night food; adult audiences.
- **Avoid when:** daytime family use, or app stores with strict review. No strobing (WCAG 2.3.1); dark-on-dark small text fails AA.
- **Cliché / dating risk:** red neon + lips; ultraviolet club flyers.
- **References:** [Berghain](https://www.berghain.berlin) (the anti-brand) · [Dame](https://www.dame.com) (adult wellness, tasteful) · [Feeld](https://feeld.co) · [Soho House](https://www.sohohouse.com).
- **Combines well with:** Art Deco, editorial photography (flash), cinematic motion.

<a id="sports"></a>

### Sports / athletic · `sports` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/sports.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/sports.ts)
- **What:** performance and fandom: heavy condensed italic type, high-contrast action photography, numbers, speed.
- **Signature traits:** heavy condensed or extended italic caps, big numbers · black, white, one team or signal colour (volt, red) · slanted shapes, stripes, angled cuts · flat, high contrast; motion blur in imagery · full-bleed action photos, giant type, stat blocks · athletes in action, sweat, crops · motion: fast, punchy, kinetic type.
- **Token sketch:** Anton or Big Shoulders Display (display), Barlow (text), Barlow Condensed (stats) · black `oklch(0.13 0 0)` · white `oklch(0.99 0 0)` · volt `oklch(0.93 0.21 120)` · red `oklch(0.58 0.23 27)` · grey `oklch(0.55 0 0)` · radius 0 · angled `clip-path`, no shadows.
- **Pick when:** sportswear, teams and leagues, fitness, running apps, energy drinks.
- **Avoid when:** wellness that should calm, or brands for beginners intimidated by "athletes". Volt on white fails contrast.
- **Cliché / dating risk:** "Just Do It" bombast; every gym looks like Nike.
- **References:** [Nike](https://www.nike.com) · [On](https://www.on.com) (the Swiss-minimal counter-example) · [Strava](https://www.strava.com) · the Premier League identity (DesignStudio, 2016).
- **Combines well with:** condensed type, kinetic type, documentary photography.

<a id="professional-services"></a>

### Professional services · `professional-services` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/professional-services.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/professional-services.ts)
- **What:** law, consulting, accounting, private banking: navy and serif, restraint, institutional calm.
- **Signature traits:** transitional serif headlines, neutral sans text · navy, white, grey, a muted gold or burgundy · square, thin rules · no shadows · conservative grids, people pages, insights articles · office photography, portraits, abstract architecture · motion: none or slow fades.
- **Token sketch:** Libre Baskerville or Source Serif 4 (display), Source Sans 3 or Public Sans, IBM Plex Mono · white `oklch(0.99 0 0)` · navy `oklch(0.27 0.06 260)` · stone `oklch(0.94 0.008 80)` · muted gold `oklch(0.68 0.08 80)` · grey `oklch(0.50 0.01 260)` · radius 0–2 px · rules, no shadows.
- **Pick when:** firms whose clients buy reduced risk: law, audit, wealth management, consulting.
- **Avoid when:** you're a challenger firm: this look hides you among incumbents. Low risk on a11y.
- **Cliché / dating risk:** handshake and skyline photos; "navy + serif + gold" sameness.
- **References:** [McKinsey](https://www.mckinsey.com) (2019 identity, Wolff Olins) · [Freshfields](https://www.freshfields.com) · [Lazard](https://www.lazard.com).
- **Combines well with:** editorial, corporate modernism, engraving.

## 5. Illustration and imagery

How the pictures are made. An imagery style sits on top of a base style and often IS the signature device (an ASCII treatment, a duotone, an engraving). One imagery style per brand, applied to every image; mixing two reads as a stock library. Risograph as an imagery treatment is covered by `riso` in family 1.

<a id="flat-vector"></a>

### Flat vector illustration · `flat-vector` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/flat-vector.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/flat-vector.ts)
- **What:** geometric vector scenes with solid fills, no outlines, limited palette; the 2014–20 default of tech marketing.
- **Signature traits:** pairs with a neutral or geometric sans · 4–6 brand colours, solid, no gradients · simple geometric shapes, rounded joints · flat, maybe one shadow tone · spot illustrations beside text, empty states · people, devices, plants, abstract objects · motion: Lottie loops, simple.
- **Token sketch:** DM Sans, Outfit, DM Mono · white `oklch(0.99 0 0)` · primary `oklch(0.55 0.17 265)` · coral `oklch(0.72 0.15 35)` · yellow `oklch(0.87 0.14 90)` · ink `oklch(0.27 0.04 265)` · radius n/a (shapes rounded 4–8 px) · flat fills, no outlines.
- **Pick when:** explaining a product's steps, empty states, onboarding, help docs; low cost and consistent at scale.
- **Avoid when:** the brand needs a unique voice: generic flat scenes look like stock. Illustrations carrying meaning need alt text.
- **Cliché / dating risk:** reads 2016 unless the drawing has a real hand; unDraw-style libraries made it commodity.
- **References:** [unDraw](https://undraw.co) (the commodity) · Material Design's 2014–18 product illustrations · [Slack](https://slack.com) (2019-era spots).
- **Combines well with:** flat UI, Scandinavian, Material.

<a id="alegria"></a>

### Corporate Memphis ("Alegria") · `alegria` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/alegria.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/alegria.ts)
- **What:** named here as a cliché: flat people with tiny heads, long bendy limbs, purple or blue skin, from Facebook's 2017 "Alegria" system by Buck.
- **Signature traits:** pairs with friendly geometric sans · unrealistic skin colours (purple, blue, orange), pastel scenes · exaggerated proportions: big hands and legs, small heads · flat, no shading · people "collaborating" around giant devices and plants · motion: bouncy Lottie loops.
- **Token sketch:** Poppins or Montserrat (the period pairing), Inter, DM Mono · lilac `oklch(0.62 0.15 295)` · peach `oklch(0.84 0.08 50)` · teal `oklch(0.72 0.10 190)` · yellow `oklch(0.88 0.14 90)` · navy `oklch(0.30 0.07 265)` · rounded limbs · flat.
- **Pick when:** almost never on purpose. Only to deliberately reference 2018 tech (satire) or when a client's existing system already uses it.
- **Avoid when:** you want trust or memorability: it signals "generic big tech" and was widely mocked. Name it in the NOT list.
- **Cliché / dating risk:** the archetypal illustration cliché of 2017–21; dated.
- **References:** Facebook's "Alegria" by Buck (2017) · Google, Slack and Airbnb-era spots (2018–20) · the "Corporate Memphis" critique (Are.na, Tumblr, 2020).
- **Combines well with:** nothing you want to be associated with; replace it with a drawn voice (line art, collage, engraving).

<a id="line-art"></a>

### Line art · `line-art` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/line-art.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/line-art.ts)
- **What:** clean single-weight outlines, often one continuous line, no fills or one flat accent.
- **Signature traits:** pairs with a light serif or geometric sans · black or ink lines on paper, one accent fill offset from the line · monoline stroke 1.5–3 px, round caps · flat · lots of space around the drawing · objects, faces, botanicals in one line · motion: line drawing itself (stroke-dashoffset).
- **Token sketch:** Instrument Serif or Fraunces (light), Hanken Grotesk, DM Mono · paper `oklch(0.97 0.01 85)` · ink `oklch(0.22 0.01 60)` · accent `oklch(0.80 0.10 60)` · secondary `oklch(0.70 0.06 150)` · stroke 2 px, round caps · no shadows.
- **Pick when:** wellness, beauty, editorial, architecture, premium minimal brands that want warmth without colour.
- **Avoid when:** you need energy or legibility at small sizes (thin lines vanish). Pair with text labels.
- **Cliché / dating risk:** the "one-line face" print and tattoo cliché since 2017.
- **References:** Picasso's one-line animal drawings · Ellsworth Kelly's plant drawings · Matisse's line portraits.
- **Combines well with:** minimalism, wellness, editorial.

<a id="doodle"></a>

### Hand-drawn / doodle · `doodle` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/doodle.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/doodle.ts)
- **What:** imperfect marker and pencil drawings: wobbly lines, scribbles, arrows, underlines, handwriting.
- **Signature traits:** handwritten accent with a calm sans · ink on paper, one or two marker colours · wobbly outlines, hand-drawn boxes and arrows · flat, sketchy hatching · notes in the margin, circled words, arrows pointing at UI · doodles of objects, people, diagrams · motion: lines drawing on, wiggle.
- **Token sketch:** Caveat or Gochi Hand (hand), Patrick Hand (UI accents), DM Sans (text) · paper `oklch(0.97 0.015 90)` · ink `oklch(0.24 0.02 260)` · marker blue `oklch(0.58 0.15 250)` · highlighter `oklch(0.92 0.15 105)` · red pen `oklch(0.58 0.19 28)` · radius: hand-drawn (SVG `feTurbulence` displacement) · no shadows.
- **Pick when:** collaboration tools, education, early startups wanting warmth, notes and whiteboards, food.
- **Avoid when:** precision or premium. Handwriting at body size fails readability; keep it to annotations.
- **Cliché / dating risk:** Excalidraw-everything (2021+); still friendly.
- **References:** [Excalidraw](https://excalidraw.com) · [Notion](https://www.notion.so) (Roman Muradov's drawings, the refined version) · [Basecamp](https://basecamp.com).
- **Combines well with:** zine, kids, education, Scandinavian.

<a id="collage"></a>

### Collage · `collage` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/collage.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/collage.ts)
- **What:** cut-out photos, paper scraps, shapes and type layered into a new image; Dada to modern editorial.
- **Signature traits:** pairs with editorial serif or grotesk, type as a cut-out element · mixed: B&W photos with 2–3 flat colour shapes · torn and cut edges, hard silhouettes · cast paper shadows, tape · layered compositions with deliberate scale clashes · public-domain engravings, archive photos, product cut-outs · motion: stop-motion pieces shifting.
- **Token sketch:** Instrument Serif, Archivo, Courier Prime · paper `oklch(0.94 0.02 85)` · ink `oklch(0.18 0.01 60)` · red `oklch(0.58 0.20 30)` · blue `oklch(0.50 0.15 255)` · newsprint grey `oklch(0.75 0.01 90)` · radius 0 · paper shadow `2px 3px 0 oklch(0 0 0 / .2)`.
- **Pick when:** culture, media, music, fashion, editorial features, campaigns, AI brands escaping clichés with archive imagery.
- **Avoid when:** clarity of a product UI is the job. Rights: use public-domain or licensed sources only.
- **Cliché / dating risk:** the 2018+ "Gen-Z collage" with mouths and eyes; still flexible.
- **References:** Hannah Höch's photomontages (1919) · Eduardo Paolozzi's pop collages · Barbara Kruger (type + photo).
- **Combines well with:** editorial, punk, surrealism, halftone.

<a id="clay-3d"></a>

### 3D clay / soft 3D · `clay-3d` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/clay-3d.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/clay-3d.ts)
- **What:** soft rendered 3D objects and characters with a matte clay or plastic look, rounded and toy-like.
- **Signature traits:** pairs with rounded bold sans · pastels or saturated toy colours, matte · rounded, inflated forms · soft ambient occlusion, soft shadows under objects · single hero objects floating, icons as 3D · characters, emoji, objects · motion: squash-and-stretch, bounces.
- **Token sketch:** Fredoka, Nunito, DM Mono · bg `oklch(0.95 0.02 260)` · object blue `oklch(0.70 0.13 255)` · coral `oklch(0.75 0.13 30)` · yellow `oklch(0.88 0.13 90)` · shadow `oklch(0.75 0.03 260)` · radius: spheres · radial-gradient shading, soft contact shadow.
- **Pick when:** consumer apps, fintech for young users, onboarding, kids, games.
- **Avoid when:** serious B2B; 3D assets are costly to keep consistent and heavy to load.
- **Cliché / dating risk:** Microsoft's 3D emoji, every 2021–23 app store page.
- **References:** Microsoft Fluent 3D emoji (2021) · [Spline](https://spline.design) 3D icon packs · Airbnb's 3D app icons (2025).
- **Combines well with:** claymorphism, kids, spring motion.

<a id="isometric"></a>

### Isometric · `isometric` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/isometric.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/isometric.ts)
- **What:** 30° axonometric drawings: technical objects, cities, stacks and pipelines without perspective.
- **Signature traits:** pairs with neutral or mono type · 3-tone shading per hue (top light, left mid, right dark) · cubes, stacks, platforms on a 30° grid · depth by face shading only, no perspective · diagrams of systems, layered stacks · servers, rooms, cities, data flows · motion: blocks stacking, packets moving along paths.
- **Token sketch:** Inter, IBM Plex Sans, IBM Plex Mono · bg `oklch(0.97 0.005 250)` · top `oklch(0.85 0.07 255)` · left `oklch(0.65 0.13 258)` · right `oklch(0.48 0.15 262)` · accent `oklch(0.75 0.15 60)` · `transform: rotate(-30deg) skewX(30deg)` grids · face shading, no shadows.
- **Pick when:** infrastructure, data pipelines, cloud, logistics, games, explaining systems.
- **Avoid when:** you want emotion or people; isometric people look like toys.
- **Cliché / dating risk:** the 2016–19 "isometric server illustration"; dated in SaaS, timeless in games.
- **References:** Monument Valley (ustwo, 2014) · SimCity 2000 (1993) · Habbo Hotel (2000).
- **Combines well with:** technical manual, enterprise, pixel (pixel isometric).

<a id="editorial-photo"></a>

### Editorial photography · `editorial-photo` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/editorial-photo.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/editorial-photo.ts)
- **What:** commissioned, directed photography with a point of view: considered light, real locations, styling, often film-like grain or direct flash.
- **Signature traits:** pairs with editorial serif or a quiet grotesk · a consistent grade (warm film, cool daylight, flash) · square frames, full-bleed or generous margins · light is the depth: one key light or window light · big single images, diptychs, captions · people and objects in context, directed · motion: slow pans, still cuts.
- **Token sketch:** Newsreader, Instrument Sans, DM Mono (captions) · paper `oklch(0.97 0.006 80)` · ink `oklch(0.18 0.01 60)` · grade warm `oklch(0.75 0.06 60)` · grade shadow `oklch(0.30 0.03 250)` · radius 0 · images unframed, captions in mono.
- **Pick when:** fashion, food, hospitality, consumer brands with budget; anything where taste sells.
- **Avoid when:** no budget for a real shoot: stock pretending to be editorial is obvious. Never use AI people as brand imagery unless asked.
- **Cliché / dating risk:** direct-flash party look (2019+) and warm film grade (Kodak Portra emulation) are both trends.
- **References:** [Kinfolk](https://www.kinfolk.com) · [Aesop](https://www.aesop.com) · Juergen Teller's campaigns · [Apartamento](https://www.apartamentomagazine.com).
- **Combines well with:** editorial, minimalism, luxury.

<a id="documentary"></a>

### Documentary photography · `documentary` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/documentary.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/documentary.ts)
- **What:** real people, real places, available light, unposed moments; truth over polish.
- **Signature traits:** pairs with a neutral sans or newspaper serif · natural colour or black and white, grain allowed · rectangular, uncropped frames, sometimes with film borders · available light, motion blur ok · photo essays, sequences, captions with who/where/when · workers, communities, process · motion: sequences, slow dissolves.
- **Token sketch:** Libre Franklin, Newsreader, IBM Plex Mono · white `oklch(0.99 0 0)` · black `oklch(0.15 0 0)` · grey `oklch(0.60 0 0)` · caption `oklch(0.40 0 0)` · radius 0 · thin black frame or none.
- **Pick when:** NGOs, civic, journalism, manufacturing, B2B with real operations, outdoor; when proof beats promise.
- **Avoid when:** you can't shoot real people with consent. Captions and alt text carry meaning here.
- **Cliché / dating risk:** low; "authentic" stock (staged candid) is the cliché.
- **References:** Magnum Photos · [Patagonia](https://www.patagonia.com) stories · [The Guardian](https://www.theguardian.com) long reads · Dorothea Lange's FSA work (1930s).
- **Combines well with:** Swiss, broadsheet, civic.

<a id="studio-product"></a>

### Studio product photography · `studio-product` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/studio-product.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/studio-product.ts)
- **What:** objects on seamless backgrounds under controlled light: hero product, shadows, reflections, colour-blocked sets.
- **Signature traits:** pairs with minimal sans or didone · seamless white, black, or a brand colour backdrop · the product's own shape; soft contact shadows · controlled softboxes, gradients on the sweep, one hard shadow · centred hero, grids of variants · products, materials, close-ups · motion: 360° turns, slow orbit.
- **Token sketch:** Inter Tight, Instrument Serif, Geist Mono · sweep `oklch(0.93 0.01 250)` · sweep shadow `oklch(0.80 0.01 250)` · product `oklch(0.35 0.08 30)` · highlight `oklch(0.98 0 0)` · ink `oklch(0.18 0 0)` · radius 0 · `radial-gradient` sweep + soft contact shadow.
- **Pick when:** hardware, beauty, DTC goods, e-commerce, anything where the object is the hero.
- **Avoid when:** the product is software or a service; fake renders of non-existent products erode trust.
- **Cliché / dating risk:** "floating product on pastel with a pedestal" (2020+); the classic white sweep never dates.
- **References:** [Apple](https://www.apple.com) product pages · [Bang & Olufsen](https://www.bang-olufsen.com) · [Glossier](https://www.glossier.com) colour-blocked sets.
- **Combines well with:** minimalism, Apple HIG, luxury.

<a id="duotone"></a>

### Duotone · `duotone` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/duotone.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/duotone.ts)
- **What:** photographs mapped to two colours (shadows to one, highlights to another).
- **Signature traits:** pairs with bold grotesk · two brand colours: a dark and a bright · square crops, often full-bleed · no extra depth; the map flattens the image · big image panels with type over the bright end · portraits, concerts, cityscapes · motion: colour pairs shifting between sections.
- **Token sketch:** Archivo, Inter Tight, JetBrains Mono · shadow `oklch(0.25 0.12 290)` · highlight `oklch(0.88 0.19 125)` · alt shadow `oklch(0.35 0.13 255)` · alt highlight `oklch(0.80 0.13 350)` · radius 0 · SVG `feColorMatrix`/`feComponentTransfer` maps or `mix-blend-mode`.
- **Pick when:** music, events, campaigns, media, any brand with a mixed photo library to unify cheaply.
- **Avoid when:** skin tones and products must look true. Text over duotone needs the dark end behind it.
- **Cliché / dating risk:** Spotify's 2015 duotones made it famous; still useful as a unifier.
- **References:** Spotify's 2015 brand campaign (Collins) · Reid Miles's Blue Note sleeves (1950s–60s, single-colour tints).
- **Combines well with:** Swiss, brutalist print, constructivism.

<a id="halftone"></a>

### Halftone · `halftone` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/halftone.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/halftone.ts)
- **What:** images made of dots of varying size, as in newspaper and screen printing, enlarged until the dots show.
- **Signature traits:** pairs with condensed or grotesk type · one ink (black, or a spot colour) on paper · round, line or square dot screens at 45° · depth by dot size only · large-scale halftone portraits, gradients as dots · photos, gradients, shapes · motion: dot size animating.
- **Token sketch:** Archivo Narrow, Oswald, Space Mono · paper `oklch(0.95 0.015 90)` · ink `oklch(0.18 0.01 260)` · spot red `oklch(0.58 0.21 28)` · spot blue `oklch(0.50 0.16 258)` · radius 0 · `radial-gradient` dot patterns or SVG pattern.
- **Pick when:** media, music, sports, print-rooted brands, campaigns; a cheap, strong imagery unifier.
- **Avoid when:** fine detail matters. Fine dots moiré on screens; keep dots ≥ 4 px.
- **Cliché / dating risk:** pop-art comics; low dating otherwise.
- **References:** Lichtenstein's Ben-Day dots · newspaper photo screens · Shepard Fairey's Obey posters.
- **Combines well with:** pop art, broadsheet, constructivism.

<a id="generative"></a>

### Generative / data art · `generative` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/generative.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/generative.ts)
- **What:** images made by code from rules or data: flow fields, particle systems, data-driven patterns, unique per user or per item.
- **Signature traits:** pairs with neutral sans and mono · a tight palette mapped to data or noise · lines, dots, fields, contours · depth by density and opacity · a generative field as hero, systems of variants · flow fields, contours, data portraits · motion: live, continuous, seeded.
- **Token sketch:** Inter, Geist, Geist Mono · bg `oklch(0.97 0.005 90)` · ink `oklch(0.20 0.01 260)` · c1 `oklch(0.60 0.18 260)` · c2 `oklch(0.72 0.16 50)` · c3 `oklch(0.70 0.12 170)` · radius 0 · SVG or canvas, no shadows.
- **Pick when:** data companies, research, AI, climate, music, conferences; brands that need infinite consistent variation.
- **Avoid when:** nobody on the team can maintain the code. Canvas animation needs a static fallback and costs battery.
- **Cliché / dating risk:** "particle network" (2015) is the cliché; flow fields are getting common.
- **References:** MIT Media Lab identity (TheGreenEyl, 2011) · Casa da Música identity (Sagmeister, 2007) · Refik Anadol's data paintings · [Processing](https://processing.org).
- **Combines well with:** Swiss, technical manual, generative motion.

<a id="ascii-art"></a>

### ASCII art · `ascii-art` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/ascii-art.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/ascii-art.ts)
- **What:** images rendered from characters on a mono grid, from ramps (` .:-=+*#%@`, ░▒▓█) to box drawing.
- **Signature traits:** pairs with mono and a neutral sans · ink on paper or phosphor on dark, one accent · character grid, no curves except by glyphs · density ramp is the shading · big ASCII images as heroes, small glyph marks as bullets and progress · portraits, paintings, objects converted fully · motion: characters resolving from noise (ramps stepping).
- **Token sketch:** JetBrains Mono, IBM Plex Mono, Inter · paper `oklch(0.96 0.01 85)` · ink `oklch(0.18 0.01 60)` · dim `oklch(0.60 0.01 60)` · accent `oklch(0.62 0.17 40)` · radius 0 · `white-space: pre`, line-height 1.0, letter-spacing 0.
- **Pick when:** dev tools, AI products, terminals, publishing, music; a signature device on an otherwise clean base.
- **Avoid when:** as a logo (it dies at 16 px), or as the only content (screen readers read character soup; mark the art `aria-hidden` with alt text).
- **Cliché / dating risk:** rising since 2023 in AI and dev tools; distinct if done fully, gimmicky if half-done.
- **References:** Ken Knowlton's "Studies in Perception I" (1966) · [Charm](https://charm.sh) · the ASCII hero animations on AI and dev-tool sites (2024–26).
- **Combines well with:** Swiss, terminal, dev-tool dark, Renaissance paintings as source material.

<a id="glitch"></a>

### Glitch · `glitch` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/glitch.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/glitch.ts)
- **What:** deliberate digital errors: RGB channel splits, pixel sorting, scan-line tears, datamoshing.
- **Signature traits:** pairs with mono or techno type, glitched headlines · RGB split colours (red, cyan) on black or white · horizontal slices, offsets · chromatic aberration, noise · torn images, displaced blocks · corrupted photos, video stills · motion: sharp jitters (keep flashes under 3 per second).
- **Token sketch:** Space Mono, Rubik Glitch (display, sparingly), Archivo · black `oklch(0.12 0 0)` · white `oklch(0.98 0 0)` · red channel `oklch(0.63 0.25 29)` · cyan channel `oklch(0.90 0.15 195)` · radius 0 · `text-shadow` channel offsets, `clip-path` slices.
- **Pick when:** music, security, games, fashion, tech with an edge.
- **Avoid when:** readability matters; flashing glitches are a seizure risk (WCAG 2.3.1), and split text is hard to read.
- **Cliché / dating risk:** the 2015–19 tech-event cliché.
- **References:** Rosa Menkman's glitch art · [Nine Inch Nails](https://www.nin.com) "Year Zero" (2007) · "Mr. Robot" title cards.
- **Combines well with:** cyberpunk, grunge, terminal.

<a id="painterly"></a>

### Painterly / public-domain art · `painterly` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/painterly.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/painterly.ts)
- **What:** fine-art paintings (often public domain) or painterly illustration used as brand imagery, framed with modern type.
- **Signature traits:** pairs with editorial serif or a clean grotesk, so the painting carries the age · the painting's palette; UI stays neutral · square crops, often extreme details · the painting's own light · big crops, details, museum-like captions · public-domain masterpieces, oil-paint textures · motion: slow zoom into details (Ken Burns).
- **Token sketch:** Cormorant Garamond or Newsreader, Inter, DM Mono (captions) · canvas `oklch(0.94 0.02 80)` · varnish `oklch(0.35 0.05 60)` · ochre `oklch(0.68 0.11 75)` · deep green `oklch(0.35 0.05 150)` · ink `oklch(0.18 0.01 60)` · radius 0 · caption plates, no frames.
- **Pick when:** AI image tools, culture, publishing, wine, luxury, brands with an art-historical root; a fresh alternative to stock.
- **Avoid when:** the painting's subject fights the message. Use only public-domain or licensed works, credited; give each image full treatment and use it once per page.
- **Cliché / dating risk:** meme paintings (Mona Lisa with a phone) are the cliché; real art used seriously is fresh.
- **References:** [Rijksmuseum Studio](https://www.rijksmuseum.nl/en/rijksstudio) (open images) · [The Met Open Access](https://www.metmuseum.org/about-the-met/policies-and-procedures/image-resources) · [Hermès](https://www.hermes.com) painted and illustrated campaigns.
- **Combines well with:** Swiss or editorial base, ASCII or dither treatment, Renaissance.

<a id="engraving"></a>

### Engraving / scientific plates · `engraving` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/engraving.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/engraving.ts)
- **What:** line engraving, woodcut and stipple: banknote portraits, WSJ hedcuts, botanical and anatomical plates.
- **Signature traits:** pairs with old-style or Scotch serifs and small caps · one ink on cream, sometimes hand-tinted · fine parallel hatching, cross-hatching, stipple · depth by hatching density · plates with labels, numbers and captions · botanicals, anatomy, portraits, machines · motion: none, or hatch lines drawing.
- **Token sketch:** IM Fell English or Libre Caslon Text, EB Garamond (small caps), DM Mono · cream `oklch(0.94 0.025 85)` · ink `oklch(0.22 0.02 260)` · tint green `oklch(0.65 0.06 140)` · tint red `oklch(0.60 0.10 30)` · radius 0 · fine borders, plate numbers.
- **Pick when:** finance (banknote trust), apothecary and skincare, spirits, science publishing, heritage brands.
- **Avoid when:** youth or speed; fine hatching moirés at small sizes on screens.
- **Cliché / dating risk:** low; "vintage botanical print" is a wall-art cliché.
- **References:** The Wall Street Journal's hedcuts · Ernst Haeckel's "Kunstformen der Natur" (1904) · US banknote engraving.
- **Combines well with:** letterpress, broadsheet, Victorian.

<a id="blueprint"></a>

### Blueprint / technical drawing · `blueprint` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/blueprint.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/blueprint.ts)
- **What:** engineering drawings: cyanotype blue or white with fine lines, dimensions, grid paper, title blocks.
- **Signature traits:** pairs with mono and technical sans, small caps labels · cyanotype blue with white lines, or white with blue lines · fine 1 px lines, dimension arrows, construction circles · flat · grid paper, title blocks, callouts · orthographic and exploded drawings · motion: lines drawing on, measurements appearing.
- **Token sketch:** IBM Plex Mono, Barlow Semi Condensed, Space Mono · cyanotype `oklch(0.38 0.11 255)` · line `oklch(0.95 0.02 240)` · grid `oklch(0.48 0.09 255)` · highlight `oklch(0.85 0.14 90)` · radius 0 · 1 px lines, 8 px grid background.
- **Pick when:** hardware, architecture, engineering, construction tech, maker tools, "how it works" sections.
- **Avoid when:** consumer warmth is needed. White hairlines on blue need ≥ 1.5 px to survive.
- **Cliché / dating risk:** "blueprint" as generic tech wallpaper; low dating.
- **References:** Anna Atkins's cyanotypes (1843) · patent drawings · [Teenage Engineering](https://teenage.engineering) exploded views.
- **Combines well with:** technical manual, isometric, Swiss.

<a id="mascot"></a>

### Mascot-led · `mascot` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/mascot.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/mascot.ts)
- **What:** a character that carries the brand: in the logo, in empty states, in notifications, with poses and moods.
- **Signature traits:** pairs with rounded bold sans · the mascot's colours lead the palette · simple shapes the character is built from (circles, ovals) · flat or soft 3D · the mascot in every state: welcome, error, success, empty · poses library, expressions · motion: character animation, reactions.
- **Token sketch:** Fredoka, Nunito, DM Mono · white `oklch(0.99 0 0)` · mascot green `oklch(0.75 0.19 140)` · dark `oklch(0.35 0.08 150)` · cheek `oklch(0.80 0.10 15)` · ink `oklch(0.28 0.02 260)` · radius 16–999 px · flat, outlines optional.
- **Pick when:** consumer apps with habits (learning, finance, health), kids, games, brands that need a face without a founder.
- **Avoid when:** serious B2B or anything grief-adjacent. A mascot needs years of investment to pay off.
- **Cliché / dating risk:** mascots don't date if maintained (Michelin since 1898); generic blobs with eyes do.
- **References:** Duolingo's Duo · [Mailchimp](https://mailchimp.com)'s Freddie · [GitHub](https://github.com)'s Octocat · Michelin's Bibendum (1898).
- **Combines well with:** kids, clay 3D, spring motion.

## 6. Typographic voices

Type is the cheapest and strongest style signal: the same layout in a didone and in a mono is two different brands. Pick the voice from the vibe sentence, then the family. Every font named here is on Google Fonts under the OFL. The specimen shows the same hero in each voice on a neutral page.

<a id="type-grotesk"></a>

### Grotesk neutral · `type-grotesk` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-grotesk.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-grotesk.ts)
- **What:** the plain, contemporary sans that disappears behind the content (Helvetica, Akzidenz, Söhne lineage).
- **Signature traits:** closed apertures, uniform stroke, regular widths · works with any palette · neutral shapes; radius set by the base style · no effects · hierarchy by size and weight only · any imagery · motion: none implied.
- **Token sketch:** Inter, Schibsted Grotesk, Hanken Grotesk (+ Geist Mono) · white `oklch(0.99 0 0)` · ink `oklch(0.18 0 0)` · grey `oklch(0.50 0 0)` · accent `oklch(0.55 0.18 255)` · radius per base · borders per base.
- **Pick when:** you need a workhorse for product UI and marketing; the brand voice will come from elsewhere (colour, imagery, a device).
- **Avoid when:** type itself is supposed to be the identity. Inter at default settings is the AI-app default; turn on its features (`ss01`, `cv11`, tabular figures) or pick a less common grotesk.
- **Cliché / dating risk:** invisible; "Inter everywhere".
- **References:** [Stripe](https://stripe.com) (Söhne) · [Notion](https://www.notion.so) · [GitHub](https://github.com) (Mona Sans).
- **Combines well with:** any style; pair with a serif or a mono for a second voice.

<a id="type-humanist"></a>

### Humanist sans · `type-humanist` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-humanist.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-humanist.ts)
- **What:** sans with calligraphic roots: open apertures, varied stroke, a true italic (Frutiger, Gill, Myriad, Fira lineage).
- **Signature traits:** open counters, slight stroke modulation, warm rhythm · suits warm palettes · soft, friendly radius · no effects · reads well at small sizes and in long text · documentary and human imagery · calm motion.
- **Token sketch:** Source Sans 3, Fira Sans, Atkinson Hyperlegible (+ Fira Code) · paper `oklch(0.98 0.005 85)` · ink `oklch(0.22 0.01 60)` · grey `oklch(0.52 0.01 60)` · accent `oklch(0.55 0.12 160)` · radius 6–10 px · soft shadows ok.
- **Pick when:** healthcare, civic, education, wayfinding, long-form UI; the brand should feel helpful and legible.
- **Avoid when:** you need edge or fashion. Very a11y-friendly.
- **Cliché / dating risk:** "2000s corporate" (Myriad, Frutiger) if set without care.
- **References:** [NHS](https://www.nhs.uk) (Frutiger) · Mozilla's Fira system · [GOV.UK](https://www.gov.uk) (GDS Transport).
- **Combines well with:** civic, healthcare, Scandinavian.

<a id="type-geometric"></a>

### Geometric sans · `type-geometric` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-geometric.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-geometric.ts)
- **What:** sans built from circles and lines (Futura, Avenir, Circular lineage): round o's, single-storey a.
- **Signature traits:** perfect circles, single-storey a and g, low contrast · bright palettes suit it · circles and pills · flat · big headlines, tight tracking · flat illustration · friendly, spring motion.
- **Token sketch:** Jost (Futura), Outfit, Urbanist (+ DM Mono) · white `oklch(0.99 0 0)` · ink `oklch(0.20 0.02 265)` · primary `oklch(0.58 0.19 265)` · warm `oklch(0.80 0.13 70)` · radius 12–999 px · soft or none.
- **Pick when:** friendly modern consumer tech, mobility, fashion (Futura has a long fashion history), Bauhaus-rooted brands.
- **Avoid when:** long text at small sizes (round forms are less legible); "Circular look" is the 2015–20 startup default.
- **Cliché / dating risk:** Poppins and Montserrat defaults; Airbnb/Spotify Circular-alikes.
- **References:** [Spotify](https://www.spotify.com) (Circular until 2023) · Louis Vuitton (Futura) · [Airbnb](https://www.airbnb.com) (Cereal).
- **Combines well with:** Bauhaus, flat, kids.

<a id="type-tight-grotesk"></a>

### Tight neo-grotesk display · `type-tight-grotesk` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-tight-grotesk.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-tight-grotesk.ts)
- **What:** grotesk headlines set very large, bold or medium, with −4 to −6 % tracking and leading under 1.0: the confident tech-poster voice.
- **Signature traits:** heavy weight, tight letterspacing, lines that almost touch · high-contrast black/white or a single brand colour · square or small radius · flat · headline-led layouts, few words · minimal imagery · fast, clean motion.
- **Token sketch:** Inter Tight, Archivo, Familjen Grotesk (+ JetBrains Mono) · white `oklch(0.99 0 0)` · black `oklch(0.13 0 0)` · grey `oklch(0.55 0 0)` · accent `oklch(0.62 0.21 35)` · radius 0–8 px · none.
- **Pick when:** confident product launches, dev tools, fashion and sport, campaigns with one big message.
- **Avoid when:** long headlines (tight tracking clumps), or small sizes (tracking must open up below 24 px).
- **Cliché / dating risk:** the 2018–26 tech headline voice; looks generic without a second element.
- **References:** [Vercel](https://vercel.com) (Geist) · [Linear](https://linear.app) · [Nike](https://www.nike.com) campaign type.
- **Combines well with:** Swiss, dev-tool dark, sports.

<a id="type-rounded"></a>

### Rounded sans · `type-rounded` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-rounded.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-rounded.ts)
- **What:** sans with rounded stroke ends and corners: soft, friendly, harmless.
- **Signature traits:** round terminals, generous x-height · pastels or bright friendly colours · large radii everywhere · soft shadows or chunky bottom edges · simple centred layouts · mascots and clay · bouncy motion.
- **Token sketch:** Nunito, Varela Round, Fredoka (+ DM Mono) · white `oklch(0.99 0 0)` · ink `oklch(0.30 0.03 270)` · primary `oklch(0.62 0.16 250)` · warm `oklch(0.80 0.12 60)` · radius 16–999 px · soft.
- **Pick when:** kids, family, wellness, casual games, consumer apps that must feel safe.
- **Avoid when:** you need authority or premium; it reads young.
- **Cliché / dating risk:** "friendly app" default.
- **References:** [Duolingo](https://www.duolingo.com) (Feather Bold) · VAG Rounded (Volkswagen, 1979; Apple keyboards until 2007) · [Headspace](https://www.headspace.com).
- **Combines well with:** kids, claymorphism, mascot.

<a id="type-condensed"></a>

### Condensed / compressed · `type-condensed` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-condensed.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-condensed.ts)
- **What:** tall, narrow grotesks in caps: newspaper headlines, sports, posters, signage.
- **Signature traits:** narrow widths, tall x-height, caps · high contrast: black, white, one strong colour · rectangles, stripes · flat · stacked lines, huge sizes, tight leading · action photography, posters · fast, punchy.
- **Token sketch:** Oswald, Bebas Neue, Big Shoulders Display (+ Barlow for text) · white `oklch(0.99 0 0)` · black `oklch(0.14 0 0)` · red `oklch(0.58 0.22 27)` · yellow `oklch(0.88 0.17 95)` · radius 0 · none.
- **Pick when:** sports, events, news, outdoor, energy drinks, anything poster-like that needs many letters in little width.
- **Avoid when:** body text (never) or premium calm. Bebas Neue is a 2014 cliché.
- **Cliché / dating risk:** Bebas/Oswald "hipster poster" (2012–16).
- **References:** [The New York Post](https://nypost.com) headlines · [Nike](https://www.nike.com) (Futura Condensed) · Big Shoulders (made for the City of Chicago).
- **Combines well with:** sports, constructivism, outdoor.

<a id="type-serif-editorial"></a>

### Serif editorial (transitional / modern) · `type-serif-editorial` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-serif-editorial.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-serif-editorial.ts)
- **What:** contemporary text and display serifs with crisp contrast (Tiempos, GT Super, Lyon lineage): the voice of serious publishing.
- **Signature traits:** sharp contrast, vertical stress, large optical sizes for display · black on white or cream, little colour · square · hairlines · columns, standfirsts, pull quotes · photography and illustration · slow, calm.
- **Token sketch:** Newsreader, Fraunces (opsz), Source Serif 4 (+ Instrument Sans for UI) · paper `oklch(0.98 0.006 85)` · ink `oklch(0.18 0.01 60)` · grey `oklch(0.50 0.01 60)` · accent `oklch(0.45 0.12 25)` · radius 0 · hairlines.
- **Pick when:** media, research, AI labs, premium consumer brands, anything that wants to sound considered.
- **Avoid when:** dense UI; serifs at 12 px on low-DPI screens.
- **Cliché / dating risk:** "every thoughtful startup" since 2022.
- **References:** [The New York Times](https://www.nytimes.com) (Cheltenham, Imperial) · [Anthropic](https://www.anthropic.com) · [The Atlantic](https://www.theatlantic.com) (2019 redesign).
- **Combines well with:** editorial, AI lab, minimalism.

<a id="type-oldstyle"></a>

### Old-style / Garalde · `type-oldstyle` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-oldstyle.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-oldstyle.ts)
- **What:** Renaissance book types (Garamond, Bembo, Caslon): diagonal stress, low contrast, old-style figures, real italics.
- **Signature traits:** diagonal stress, bracketed serifs, small caps, old-style figures · warm paper and ink · square · no effects · book margins, centred titles, generous leading · engravings, paintings · none.
- **Token sketch:** EB Garamond, Cormorant Garamond, Libre Caslon Text (+ DM Mono) · paper `oklch(0.95 0.02 85)` · ink `oklch(0.22 0.02 50)` · red `oklch(0.48 0.15 28)` · grey `oklch(0.55 0.02 60)` · radius 0 · none.
- **Pick when:** publishing, literature, wine, heritage, scholarship, Renaissance roots, craft.
- **Avoid when:** tech products that need modernity; light Cormorant weights fail at small sizes.
- **Cliché / dating risk:** "wedding Garamond"; doesn't date.
- **References:** Penguin Classics · [Apple](https://www.apple.com) (Apple Garamond, 1984–2002) · Aldus Manutius's editions (1490s–1510s).
- **Combines well with:** Renaissance, letterpress, editorial.

<a id="type-didone"></a>

### Didone (luxury) · `type-didone` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-didone.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-didone.ts)
- **What:** Bodoni and Didot: extreme thick-thin contrast, vertical stress, hairline serifs; fashion magazines.
- **Signature traits:** hairlines, ball terminals, high contrast · black and white, gold at most · square · none · big display sizes, lots of air · fashion photography · slow fades.
- **Token sketch:** Bodoni Moda, Playfair Display, Italiana (+ Jost tracked caps) · white `oklch(1 0 0)` · black `oklch(0.12 0 0)` · greige `oklch(0.90 0.01 80)` · gold `oklch(0.72 0.10 85)` · radius 0 · none.
- **Pick when:** fashion, beauty, luxury, perfume, high-end hospitality.
- **Avoid when:** small sizes (hairlines vanish below 18 px) and body text; tech.
- **Cliché / dating risk:** Vogue and Harper's Bazaar mastheads; Playfair Display is overused.
- **References:** [Vogue](https://www.vogue.com) (Didot) · Harper's Bazaar (Alexey Brodovitch era) · [Dior](https://www.dior.com) wordmark.
- **Combines well with:** luxury, Art Deco, beauty.

<a id="type-slab"></a>

### Slab serif · `type-slab` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-slab.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-slab.ts)
- **What:** serifs as thick as the stems (Rockwell, Clarendon, Archer): sturdy, mechanical, friendly or Western.
- **Signature traits:** block serifs, low contrast, sturdy · warm or utilitarian palettes · rectangles, badges · flat · headlines, labels, posters · typewriters, Americana, outdoor · steady motion.
- **Token sketch:** Zilla Slab, Arvo, Alfa Slab One (+ Courier Prime) · cream `oklch(0.95 0.025 85)` · ink `oklch(0.22 0.02 50)` · red `oklch(0.55 0.18 30)` · olive `oklch(0.50 0.06 120)` · radius 0–4 px · none.
- **Pick when:** food, craft, outdoor, coding (slabs read as typewriter), editorial with warmth.
- **Avoid when:** luxury or very modern tech.
- **Cliché / dating risk:** 2010s "Archer" craft look; Western saloon pastiche.
- **References:** Mozilla's Zilla Slab (2017) · Archer for Martha Stewart Living (Hoefler & Frere-Jones, 2001) · Clarendon on 19th-century wanted posters.
- **Combines well with:** letterpress, food craft, outdoor.

<a id="type-mono"></a>

### Mono-forward · `type-mono` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-mono.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-mono.ts)
- **What:** a monospace as the main voice, not just for code: headlines, labels, numbers.
- **Signature traits:** fixed widths, grid alignment, tabular by nature · black, white, one signal · square, box-drawing · none · tables, logs, labels with prefixes · ASCII, diagrams · stepped motion.
- **Token sketch:** JetBrains Mono, IBM Plex Mono, Space Mono (+ Inter for long text) · paper `oklch(0.97 0.005 90)` · ink `oklch(0.17 0 0)` · grey `oklch(0.55 0 0)` · signal `oklch(0.65 0.20 40)` · radius 0 · 1 px rules.
- **Pick when:** dev tools, infra, AI, data, technical publishing, studios that want to look precise.
- **Avoid when:** long reading in mono (slower), general consumers.
- **Cliché / dating risk:** Space Mono was the 2016–20 "tech-cool" default.
- **References:** [Teenage Engineering](https://teenage.engineering) · [Nothing](https://nothing.tech) (dot-matrix) · Space Mono for Google Design (Colophon, 2016).
- **Combines well with:** terminal, Swiss, technical manual.

<a id="type-display"></a>

### Display expressive · `type-display` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-display.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-display.ts)
- **What:** characterful display faces (wide, wonky, inline, stencil, extreme weights) that make the headline itself the image.
- **Signature traits:** one unusual display face, used huge and only for headlines · bold colour fields · shapes echo the letterforms · flat · type-led posters and heroes · minimal imagery · kinetic type.
- **Token sketch:** Bricolage Grotesque (wide range), Shrikhand, Dela Gothic One (+ Inter for text) · cream `oklch(0.95 0.03 90)` · ink `oklch(0.18 0.02 30)` · orange `oklch(0.68 0.20 40)` · pink `oklch(0.75 0.15 350)` · radius per base · none.
- **Pick when:** food, drink, culture, events, fashion, consumer brands that need a distinctive voice cheaply.
- **Avoid when:** you can't keep it to headlines; expressive faces at body size fail.
- **Cliché / dating risk:** each wonky face has a 2–3-year life (Cooper Black revival, Recoleta, wonky serifs).
- **References:** [Mailchimp](https://mailchimp.com) (Means, Cooper-adjacent) · [Oatly](https://www.oatly.com) (hand-drawn headlines) · [Graza](https://www.graza.co).
- **Combines well with:** food craft, maximalism, Memphis.

<a id="type-kinetic"></a>

### Kinetic / variable · `type-kinetic` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-kinetic.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-kinetic.ts)
- **What:** type that moves and changes: variable weight and width axes animated, text on paths, scroll-reactive letters.
- **Signature traits:** variable fonts with wide axes (wght, wdth, opsz) · strong contrast, often black and one colour · letters as shapes · none · headline-as-animation layouts · no imagery, type is the image · motion: axis animation, stretching, stepping.
- **Token sketch:** Anybody or Big Shoulders (wdth axis), Fraunces (opsz, wonk), Recursive (mono/casual axis) · black `oklch(0.14 0 0)` · white `oklch(0.99 0 0)` · signal `oklch(0.70 0.22 140)` · grey `oklch(0.55 0 0)` · radius 0 · none.
- **Pick when:** events, culture, music, design studios, launches, brand films.
- **Avoid when:** without a reduced-motion fallback (WCAG 2.3.3); constantly moving text is hard to read.
- **Cliché / dating risk:** "stretchy type" Instagram (2019+).
- **References:** DIA Studio's kinetic identities · [Variable Fonts](https://v-fonts.com) showcases.
- **Combines well with:** scroll-driven motion, brutalist print, maximalism.

<a id="type-handwritten"></a>

### Handwritten / script · `type-handwritten` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-handwritten.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-handwritten.ts)
- **What:** handwriting, marker and brush script as the brand voice or as annotations.
- **Signature traits:** irregular baselines, real pen texture · warm, personal palettes · hand-drawn shapes · none · annotations, notes, signatures · doodles, photos with notes · wiggle motion.
- **Token sketch:** Caveat, Kalam, Gochi Hand (+ DM Sans for text) · paper `oklch(0.97 0.015 90)` · ink `oklch(0.25 0.03 260)` · marker `oklch(0.60 0.18 25)` · grey `oklch(0.55 0.01 260)` · radius per base · none.
- **Pick when:** personal brands, food, kids, notes apps, craft, a founder's signature voice.
- **Avoid when:** body text (never), trust categories. Script fonts are hard for dyslexic readers.
- **Cliché / dating risk:** "handwritten = authentic" font cliché; Pacifico and Lobster are dated.
- **References:** [Coca-Cola](https://www.coca-cola.com) (Spencerian script, the ancestor) · [Innocent Drinks](https://www.innocentdrinks.co.uk) · Basecamp's hand notes.
- **Combines well with:** doodle, zine, creator.

<a id="type-blackletter"></a>

### Blackletter · `type-blackletter` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/type-blackletter.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/type-blackletter.ts)
- **What:** gothic scripts (textura, fraktur): medieval, newspaper mastheads, metal, streetwear, tattoo.
- **Signature traits:** broken strokes, dense texture · black and white, or one dark red · sharp, pointed shapes · none · one word as a masthead or logo · engravings, photos · none.
- **Token sketch:** UnifrakturMaguntia, Pirata One, Grenze Gotisch (+ EB Garamond or Inter for text) · white `oklch(0.98 0 0)` · black `oklch(0.12 0 0)` · red `oklch(0.45 0.17 25)` · grey `oklch(0.60 0 0)` · radius 0 · none.
- **Pick when:** newspapers, metal and hip-hop, streetwear, tattoo, beer, gothic culture.
- **Avoid when:** anything mainstream or text; in Germany and elsewhere, fraktur can carry Nazi-era and far-right associations (even though the Nazis banned it in 1941).
- **Cliché / dating risk:** streetwear blackletter logos (2016+).
- **References:** [The New York Times](https://www.nytimes.com) masthead · Chrome Hearts · Motörhead's logo.
- **Combines well with:** broadsheet, grunge, medieval.

## 7. Layout archetypes

The skeleton under any style. A layout is chosen by the job of the page (convert, explain, browse, operate, read), not by the brand; the style dresses it. Fonts and colour come from the base style, so the token sketch here holds grid tokens instead. The specimens use a neutral grey skin so only the structure shows.

<a id="layout-split-hero"></a>

### Split hero · `layout-split-hero` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-split-hero.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-split-hero.ts)
- **What:** copy on one side, product picture on the other, CTA under the copy.
- **Signature traits:** headline, subline, 1–2 buttons left; screenshot, phone or object right · works with any type and colour · the image carries the shape · depth from the product image · 12-column grid split 5/7 or 6/6, stacks on mobile (copy first) · product UI or object · motion: image slides in once.
- **Token sketch:** 12 columns, gutter 32 px (16 mobile), max width 1200–1280 px · copy 5 cols, image 7 · hero min-height 70–90 vh · type and palette from the base style.
- **Pick when:** a product with something to show, B2B and consumer landings; the default for conversion.
- **Avoid when:** you have no real product picture (a fake mock is worse than none). Make sure the image has alt text and the CTA comes first in the DOM.
- **Cliché / dating risk:** the most common hero on the web; neutral.
- **References:** [Stripe](https://stripe.com) · [Mercury](https://mercury.com) · [Notion](https://www.notion.so).
- **Combines well with:** any style; B2B SaaS, fintech.

<a id="layout-centred-hero"></a>

### Centred hero · `layout-centred-hero` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-centred-hero.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-centred-hero.ts)
- **What:** one centred headline, a subline and a button, product below or behind.
- **Signature traits:** symmetric, centred text, short lines · strong type does the work · product screenshot or visual underneath · depth from a glow or a framed screenshot · single column, wide margins · product UI, video or nothing · motion: fade-up of the headline.
- **Token sketch:** max text width 18–22 ch for the headline, 52–60 ch for the subline · screenshot full width up to 1200 px · vertical rhythm 24/48/96 px.
- **Pick when:** a single strong message, dev tools, launches, apps with a beautiful UI.
- **Avoid when:** the headline is long (centred long lines are hard to read) or you have nothing to put below it.
- **Cliché / dating risk:** "centred headline + screenshot with glow" is the dev-tool cliché.
- **References:** [Linear](https://linear.app) · [Vercel](https://vercel.com) · [Raycast](https://www.raycast.com).
- **Combines well with:** dev-tool dark, minimalism, aurora (sparingly).

<a id="layout-bento"></a>

### Bento grid · `layout-bento` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-bento.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-bento.ts)
- **What:** a grid of rounded tiles of different sizes, each one feature, like a Japanese lunchbox (Apple keynote slides made it famous).
- **Signature traits:** short tile headlines, one stat or visual per tile · each tile can carry its own accent · 16–24 px radius tiles, consistent gaps · light borders or subtle fills · 4- or 6-column grid with 1×1, 2×1, 2×2 spans · UI fragments, numbers, icons · motion: tiles fade in staggered, hover lifts.
- **Token sketch:** 4 columns desktop / 1–2 mobile, gap 12–16 px, tile radius 20 px, tile padding 24 px · aspect spans 1×1, 2×1, 1×2, 2×2.
- **Pick when:** feature overviews, "what's included", portfolios, product specs.
- **Avoid when:** features need explanation (tiles hold 10 words, not 100). Watch reading order on mobile.
- **Cliché / dating risk:** saturated since 2023 (every landing has a bento); it's De Stijl in rounded corners.
- **References:** Apple's keynote feature slides (2020+) · [Linear](https://linear.app) features · [bentogrids.com](https://bentogrids.com).
- **Combines well with:** dev-tool dark, shadcn, Apple HIG.

<a id="layout-editorial-grid"></a>

### Editorial asymmetric grid · `layout-editorial-grid` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-editorial-grid.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-editorial-grid.ts)
- **What:** a magazine spread on the web: an asymmetric multi-column grid where text and images interlock at different widths.
- **Signature traits:** large headline across columns, standfirst, text in 1–2 narrow columns · editorial palette · square images at varied sizes · hairlines and captions · 12-column grid used asymmetrically (3/6/3, 2/7/3), deliberate white space · photography, illustration · motion: none or slow fades.
- **Token sketch:** 12 columns, gutter 24 px, baseline 8 px, max width 1320 px · text measure 60–72 ch · images span 4–9 columns.
- **Pick when:** brands with stories, research, culture, premium consumer, studios.
- **Avoid when:** conversion is the only goal or content is thin. Reading order must survive the stack on mobile.
- **Cliché / dating risk:** low dating; demands real content.
- **References:** [The Pudding](https://pudding.cool) · [Bloomberg Businessweek](https://www.bloomberg.com/businessweek) features · [Stripe Press](https://press.stripe.com).
- **Combines well with:** editorial, Swiss, broadsheet.

<a id="layout-long-scroll"></a>

### Long-scroll storytelling · `layout-long-scroll` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-long-scroll.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-long-scroll.ts)
- **What:** one narrative told in chapters as you scroll: full-screen sections, sticky visuals, progressive reveals.
- **Signature traits:** big chapter headlines, short paragraphs · section colours change with the story · full-bleed sections · depth from sticky layers and parallax · 100 vh chapters, sticky media + scrolling text · photography, 3D, video · motion: scroll-driven.
- **Token sketch:** chapters ≥ 100 vh, sticky media 50–60 % width, text column 40 ch · progress indicator · `prefers-reduced-motion` → plain stacked sections.
- **Pick when:** launches, annual reports, campaigns, products with a story (hardware, climate, data journalism).
- **Avoid when:** users need to find something fast; scroll-jacking breaks a11y and keyboard navigation.
- **Cliché / dating risk:** "Apple product page scroll" imitation; heavy pages.
- **References:** Apple's AirPods Pro page · NYT "Snow Fall" (2012) · [The Pudding](https://pudding.cool).
- **Combines well with:** scroll-driven motion, cinematic, spatial.

<a id="layout-card-feed"></a>

### Card feed · `layout-card-feed` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-card-feed.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-card-feed.ts)
- **What:** a stream of same-shaped cards (posts, items, articles), single column or masonry, endless or paginated.
- **Signature traits:** card title, meta, image, actions · consistent card skin · 8–16 px radius cards · borders or soft shadows · 1-column (social) or 3–4 masonry (Pinterest) · user images · motion: load-in, pull-to-refresh.
- **Token sketch:** card width 320–600 px, gap 16 px, columns 1/2/3/4 at 390/768/1024/1440 · image ratio fixed per feed (4:5, 1:1, 16:9).
- **Pick when:** social, content platforms, marketplaces, newsletters, inspiration apps.
- **Avoid when:** you have fewer than ~12 items (it looks empty). Infinite scroll needs a footer path and focus management.
- **Cliché / dating risk:** neutral; masonry dates slightly (2012 Pinterest).
- **References:** [Pinterest](https://www.pinterest.com) · [Are.na](https://www.are.na) · [Dribbble](https://dribbble.com).
- **Combines well with:** any style; creator, food, editorial.

<a id="layout-dashboard"></a>

### Dashboard · `layout-dashboard` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-dashboard.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-dashboard.ts)
- **What:** the app shell for operating something: sidebar navigation, top bar, KPI tiles, charts, tables.
- **Signature traits:** small UI type, tabular numbers · neutral surfaces, status colours as signals · compact controls, 4–8 px radius · borders over shadows · sidebar 220–260 px, top bar 48–56 px, 12-column content, KPI row then charts then table · charts, no photography · motion: functional micro.
- **Token sketch:** sidebar 240 px, top bar 52 px, content padding 24 px, KPI tiles 4-up, row height 36–44 px, gap 16 px.
- **Pick when:** any product people operate daily: analytics, admin, finance ops, SaaS apps.
- **Avoid when:** it's marketing; a dashboard as a landing hero hides the value. Data tables need keyboard and screen-reader support.
- **Cliché / dating risk:** neutral; generic admin templates are the cliché.
- **References:** [Stripe Dashboard](https://dashboard.stripe.com) · [Linear](https://linear.app) app · [PostHog](https://posthog.com).
- **Combines well with:** enterprise-dense, dev-tool dark, shadcn.

<a id="layout-docs"></a>

### Documentation · `layout-docs` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-docs.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-docs.ts)
- **What:** three columns for reading reference: navigation tree, article, on-page contents; code blocks and callouts.
- **Signature traits:** readable text at 15–17 px, mono code · neutral, link colour, callout colours · small radius on code and callouts · borders · left nav 240–280 px, content 680–760 px, right TOC 200–240 px · diagrams, screenshots · motion: none.
- **Token sketch:** 3 columns (260 / 720 / 220 px), content measure ≤ 75 ch, code block radius 6–8 px, callout left border 3 px.
- **Pick when:** developer products, APIs, knowledge bases, handbooks.
- **Avoid when:** it's the marketing page. Search and keyboard navigation are the a11y must-haves.
- **Cliché / dating risk:** neutral; good docs never date.
- **References:** [Stripe Docs](https://docs.stripe.com) · [MDN](https://developer.mozilla.org) · [Tailwind CSS docs](https://tailwindcss.com/docs).
- **Combines well with:** any base; terminal, Swiss, dev-tool dark.

<a id="layout-manifesto"></a>

### Single-page manifesto · `layout-manifesto` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-manifesto.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-manifesto.ts)
- **What:** one page of huge type that states beliefs, like a poster or open letter; the words are the product.
- **Signature traits:** huge display type, numbered statements, a signature · high contrast, one colour · no UI chrome · none · one column, giant type, sometimes one statement per screen · no imagery · motion: none, or statements appearing on scroll.
- **Token sketch:** display 8–14 vw, max 4–6 words per line, one column, generous vertical rhythm (1 statement per 60–100 vh).
- **Pick when:** launches with a point of view, movements, studios, pre-launch waitlists, rebrands.
- **Avoid when:** people need product facts to buy. Huge type needs zoom-friendly units and sensible heading levels.
- **Cliché / dating risk:** "we believe" pages; strong when the beliefs are specific.
- **References:** [The Agile Manifesto](https://agilemanifesto.org) (the plain version) · [Basecamp](https://basecamp.com) (Shape Up, manifesto voice) · First Things First (1964).
- **Combines well with:** brutalist print, constructivism, kinetic type.

<a id="layout-catalogue"></a>

### Catalogue / e-commerce · `layout-catalogue` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-catalogue.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-catalogue.ts)
- **What:** a product grid with filters, then a product detail page with gallery, price, options and add-to-cart.
- **Signature traits:** small product names, prices in tabular figures · neutral surfaces so products carry colour · image tiles 0–8 px radius · minimal borders · 2–4 column product grid, filter bar, sticky cart · studio product photos · motion: image swaps on hover, cart drawer.
- **Token sketch:** grid 4 / 3 / 2 columns at 1440 / 1024 / 390, image ratio 4:5, gap 16–24 px, price row 14–16 px tabular.
- **Pick when:** any shop: DTC, marketplaces, catalogues, menus.
- **Avoid when:** you sell one product (use a product page). Filters and swatches need labels, not colour alone.
- **Cliché / dating risk:** Shopify-template sameness.
- **References:** [Aesop](https://www.aesop.com) · [SSENSE](https://www.ssense.com) · [Muji](https://www.muji.com).
- **Combines well with:** studio product, minimalism, luxury.

<a id="layout-index"></a>

### Index / list site · `layout-index` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/layout-index.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/layout-index.ts)
- **What:** a page that is a table: rows of projects, posts or items with columns (year, title, type), hover previews.
- **Signature traits:** one size of type, mono or grotesk, hierarchy by column · black on white, hover colour · no radius · hairline row separators · full-width table, sortable columns · image preview follows the cursor on hover · motion: hover previews only.
- **Token sketch:** row height 44–56 px, 4–6 columns (year / title / client / type / link), hairline 1 px, single font size 15–18 px.
- **Pick when:** studios, portfolios, archives, changelogs, directories, personal sites.
- **Avoid when:** visual-first products where thumbnails sell. Hover-only previews need a tap or focus path.
- **Cliché / dating risk:** the 2015+ design-studio portfolio; neutral.
- **References:** [Are.na](https://www.are.na) · [Cargo](https://cargo.site) templates · many studio sites (e.g. [Experimental Jetset](https://www.experimentaljetset.nl)).
- **Combines well with:** Swiss, web brutalism, mono-forward.

## 8. Motion languages

How things move is as much a brand signal as colour. Pick one language and write its easing and duration tokens; the specimens are diagrams (the easing curve plus a five-frame strip of the card entering), because a still image can't move. Every language needs a `prefers-reduced-motion` fallback: instant or a plain opacity fade.

<a id="motion-none"></a>

### No-motion · `motion-none` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-none.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-none.ts)
- **What:** state changes are instant; nothing animates except what the browser does natively.
- **Signature traits:** cuts, not transitions · focus and hover change instantly · no easing to design · fastest perceived UI · fits print-rooted styles · motion is absent on purpose, so it reads as confident and calm.
- **Token sketch:** `--dur: 0ms` · hover and focus via colour or underline only · loading uses text ("Loading…") or a static skeleton.
- **Pick when:** civic, documentation, editorial, brutalist and Swiss brands, tools where speed is the value.
- **Avoid when:** spatial relationships need explaining (a drawer that appears instantly can disorient). Best for a11y.
- **Cliché / dating risk:** none; reads austere if the rest is also bare.
- **References:** [GOV.UK](https://www.gov.uk) · [Craigslist](https://craigslist.org) · [Bloomberg](https://www.bloomberg.com) terminal-style pages.
- **Combines well with:** civic, web brutalism, broadsheet, Swiss.

<a id="motion-micro"></a>

### Functional micro · `motion-micro` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-micro.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-micro.ts)
- **What:** short, purposeful transitions that explain state: 100–250 ms, ease-out, opacity and small translations.
- **Signature traits:** small distances (4–8 px), no overshoot · one easing family · motion only on state change · nothing loops · feels fast and solid · invisible when done right.
- **Token sketch:** `--ease-out: cubic-bezier(0.2, 0, 0, 1)` · `--dur-1: 120ms` (hover), `--dur-2: 200ms` (menus), `--dur-3: 320ms` (panels) · properties: opacity, transform only.
- **Pick when:** most product UI: SaaS, dev tools, fintech, dashboards.
- **Avoid when:** never wrong; may be too quiet for a playful consumer brand.
- **Cliché / dating risk:** none; it's the baseline.
- **References:** [Linear](https://linear.app) · [Material motion](https://m3.material.io/styles/motion/overview) durations · [Radix](https://www.radix-ui.com) primitives.
- **Combines well with:** any style.

<a id="motion-spring"></a>

### Spring / playful · `motion-spring` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-spring.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-spring.ts)
- **What:** physics-based springs with overshoot and settle: bouncy buttons, squishy presses, elastic sheets.
- **Signature traits:** overshoot 5–15 % · squash on press, stretch on release · delightful celebrations · interruptible (springs keep velocity) · feels alive, toy-like · reads friendly and young.
- **Token sketch:** spring stiffness 300–500, damping 20–30 (Framer Motion) or CSS `linear()` approximation · overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)` · 300–500 ms settle.
- **Pick when:** kids, games, consumer apps, Apple-platform apps (iOS springs), playful brands.
- **Avoid when:** dense tools (bounces slow experts down) or serious categories. Vestibular sensitivity: reduce or remove overshoot under reduced motion.
- **Cliché / dating risk:** "bouncy everything" feels gimmicky after the first day.
- **References:** iOS UIKit springs · [Duolingo](https://www.duolingo.com) celebrations · [Framer Motion](https://motion.dev) springs.
- **Combines well with:** kids, claymorphism, Memphis, neobrutalism.

<a id="motion-cinematic"></a>

### Cinematic · `motion-cinematic` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-cinematic.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-cinematic.ts)
- **What:** slow, dramatic, film-like motion: long eases, reveals, masks, camera moves, letterboxing.
- **Signature traits:** 600–1500 ms durations, slow-in slow-out · masked reveals, light sweeps · staggered type by line or word · video and 3D camera moves · sound design implied · reads premium and theatrical.
- **Token sketch:** `--ease-cine: cubic-bezier(0.65, 0, 0.35, 1)` · `--dur-reveal: 900ms`, stagger 60–120 ms per line · `clip-path` masks, scale 1.05 → 1 on images.
- **Pick when:** luxury, automotive, fashion, entertainment, launch films, hero moments.
- **Avoid when:** product UI (nobody waits 900 ms for a menu). Long animations must be skippable and respect reduced motion.
- **Cliché / dating risk:** "Awwwards-style" heavy intros; slows sites.
- **References:** Apple product launch pages · [Porsche](https://www.porsche.com) · Saul Bass title sequences (the origin).
- **Combines well with:** luxury, automotive, Art Deco, spatial.

<a id="motion-stepped"></a>

### Stepped / mechanical · `motion-stepped` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-stepped.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-stepped.ts)
- **What:** motion in discrete steps: `steps()` easing, frame-by-frame, ticking counters, split-flap boards, blinking cursors.
- **Signature traits:** no interpolation, 3–12 discrete states · ticks, clicks, flips · cursor blinks at 1 Hz · feels mechanical, digital, honest · pairs with mono and pixel type.
- **Token sketch:** `animation-timing-function: steps(4, end)` · 400–600 ms total · 8–12 fps for sprites · cursor blink 1 s `steps(1)`.
- **Pick when:** dev tools, terminals, pixel and dither styles, hardware, brands with a "resolve" or "tick" idea.
- **Avoid when:** smoothness signals quality in the category (luxury, beauty). Keep flashing under 3 per second.
- **Cliché / dating risk:** low; distinct in a smooth-everything web.
- **References:** Solari split-flap departure boards · [Teenage Engineering](https://teenage.engineering) displays · Vestaboard.
- **Combines well with:** terminal, pixel, dithered, technical manual, ASCII.

<a id="motion-scroll"></a>

### Scroll-driven · `motion-scroll` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-scroll.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-scroll.ts)
- **What:** animation tied to scroll position: parallax, pinned sections, progress-linked reveals, now native via CSS `animation-timeline: scroll()`.
- **Signature traits:** elements move at different rates · sections pin while content changes · progress bars and reveals linked to position · user controls the time · feels immersive · can feel hijacked.
- **Token sketch:** `animation-timeline: view()` with `animation-range: entry 0% cover 40%` · parallax factor 0.1–0.3 · never alter the native scroll speed.
- **Pick when:** storytelling pages, launches, reports, product tours.
- **Avoid when:** functional pages. Scroll-jacking fails keyboard and screen-reader users; parallax triggers vestibular issues, so reduced motion must disable it.
- **Cliché / dating risk:** heavy parallax was 2013; the native CSS version is current.
- **References:** Apple product pages · [Stripe Sessions](https://stripe.com/sessions) · [scroll-driven-animations.style](https://scroll-driven-animations.style).
- **Combines well with:** long-scroll layout, spatial, editorial.

<a id="motion-generative"></a>

### Generative · `motion-generative` · [specimen](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/atlas/motion-generative.jpg) · [theme](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/blob/main/examples/src/styles/motion-generative.ts)
- **What:** motion produced by code, not keyframes: noise fields, particles, simulations, live data, never the same twice.
- **Signature traits:** continuous, ambient, seeded · reacts to cursor, data or time · slow by default · lives in canvas or WebGL · feels alive and infinite · needs a static frame for fallback.
- **Token sketch:** frame budget ≤ 4 ms/frame, 30–60 fps · speed 0.1–0.5 units/s · pause off-screen (`IntersectionObserver`) · reduced motion → one static seeded frame.
- **Pick when:** AI, data, climate, music, research labs, generative brands.
- **Avoid when:** low-end devices are common or batteries matter. Must pause on hidden tabs and respect reduced motion.
- **Cliché / dating risk:** "particle network" backgrounds (2015) are the cliché.
- **References:** Casa da Música's generative identity · [Processing](https://processing.org) / p5.js sketches · Refik Anadol.
- **Combines well with:** generative imagery, HUD, Swiss.
