import type { Style } from "@/theme"
import Decor from "./decor/retro-futurism"

export default {
	name: "Retro-futurism",
	family: "Digital UI eras",
	fonts: { heading: "Michroma", body: "Jost", mono: "Space Mono" },
	google: "family=Michroma&family=Jost:wght@400;500&family=Space+Mono:wght@400;700",
	radius: "14px",
	border: "2px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A mission document: Space Mono caps with an orange issue number, a wide Michroma headline, the number in a
	// rounded CRT-style frame under the screen the decor draws.
	css: `
		[data-part=nav] header { max-width: none; padding: 26px 46px 0; }
		[data-part=nav] header > span { font-size: 15px; letter-spacing: .08em; text-transform: uppercase; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--orange); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 46px; top: 96px; width: 470px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { font: 700 12px/1 var(--font-code); letter-spacing: .12em; color: var(--brown); }
		[data-part=kicker]::before { content: "No. 01"; color: var(--orange); margin-right: 14px; }
		[data-part=headline] { margin: 18px 0 0 -2px; font-size: 31px; line-height: 1.3; }
		[data-part=accent] { display: block; }
		[data-part=sub] { margin-top: 20px; font-size: 16px; line-height: 1.55; color: var(--brown); max-width: 400px; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 14px 24px; border-radius: 14px; font: 400 11px/1 var(--font-display); letter-spacing: .1em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 578px; top: 258px; width: 196px; padding: 16px; gap: 0; border-color: var(--navy); border-radius: 18px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font: 700 10px/1 var(--font-code); letter-spacing: .14em; text-transform: uppercase; color: var(--orange); }
		[data-part=number] { margin: 8px 0 4px; font-size: 30px; line-height: 1; font-variant-numeric: normal; }
		[data-part=caption] { font: 400 10.5px/1.3 var(--font-code); color: var(--brown); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
