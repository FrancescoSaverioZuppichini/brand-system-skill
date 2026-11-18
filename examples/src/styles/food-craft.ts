import type { Style } from "@/theme"
import Decor from "./decor/food-craft"

export default {
	name: "Food & beverage craft",
	family: "Industry-coded languages",
	fonts: { heading: "Fraunces", body: "Bricolage Grotesque", mono: "DM Mono" },
	google:
		"family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..900,0..100,0..1;1,9..144,400..900,0..100,0..1&family=Young+Serif&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700&family=DM+Mono",
	radius: "8px",
	border: "2px",
	shadow: "none",
	heading: { weight: 850, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Wonky soft Fraunces at 850 for the headline and an italic script-like kicker; the logo is printed on the
	// bottle's label, and the number card is the centre of the stamped seal. The seal sets the card's label and caption
	// on a curve (SVG textPath), so the card keeps them for screen readers but hides them visually.
	css: `
		[data-part=nav] { position: absolute; left: 714px; top: 256px; z-index: 1; translate: -50% 0; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: "Young Serif"; font-size: 21px; color: var(--bottle); }
		[data-part=nav] header > span svg { display: none; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 50px; top: 82px; width: 400px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { font-family: var(--font-display); font-style: italic; font-weight: 500; font-variation-settings: "WONK" 1, "SOFT" 100; font-size: 24px; letter-spacing: 0; text-transform: none; color: var(--tomato); }
		[data-part=headline] { margin: 12px 0 18px; max-width: 320px; font-size: 60px; line-height: .95; font-variation-settings: "WONK" 1, "SOFT" 100, "opsz" 144; }
		[data-part=sub] { max-width: 390px; font-size: 15px; line-height: 1.5; color: var(--bottle); }
		[data-part=button] { margin-top: 24px; height: auto; padding: 13px 24px; border: 2px solid var(--bottle); border-radius: 8px; font-size: 16px; font-weight: 700; letter-spacing: .01em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 508px; top: 290px; width: 120px; padding: 0; gap: 0; border: 0; background: none; box-shadow: none; text-align: center; rotate: -12deg; }
		[data-part=card] > div { padding: 0; gap: 0; align-items: center; }
		[data-part=label], [data-part=caption] { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
		[data-part=number] { font-family: "Young Serif"; font-size: 31px; line-height: 1.2; letter-spacing: 0; font-variant-numeric: normal; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
