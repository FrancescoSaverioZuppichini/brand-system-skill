import type { Style } from "@/theme"
import Decor from "./decor/vaporwave"

export default {
	name: "Vaporwave",
	family: "Digital UI eras",
	fonts: { heading: "Michroma", body: "VT323", mono: "VT323" },
	google: "family=Michroma&family=VT323&family=Zen+Kaku+Gothic+New:wght@700",
	radius: "0px",
	border: "1px",
	shadow: "8px 8px 0 oklch(0.30 0.12 300 / .35)",
	heading: { weight: 400, case: "uppercase", tracking: "0.14em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The copy lives in a Win95 window the decor draws: the logo is its title, and the number card's label is the
	// second window's title. Wide Michroma caps get a teal/pink split (chromatic aberration as two text-shadows); the
	// system text is VT323 and the button is a bevelled grey Win95 button.
	css: `
		[data-part=nav] { position: absolute; left: 49px; top: 53px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: var(--font-body); font-size: 19px; line-height: 22px; color: white; }
		[data-part=nav] header > span svg, [data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 67px; top: 100px; width: 430px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { font-size: 22px; font-weight: 400; letter-spacing: .08em; text-transform: none; color: var(--purple); }
		[data-part=headline] { margin-top: 10px; font-size: 25px; line-height: 1.35; text-shadow: -2px 0 var(--teal), 2px 0 var(--pink); }
		[data-part=accent] { display: block; }
		[data-part=sub] { margin-top: 12px; font-size: 19px; line-height: 1.05; color: oklch(0.30 0.12 300 / .85); max-width: 430px; }
		[data-part=button] { margin-top: 16px; height: auto; padding: 6px 18px; font-size: 21px; font-weight: 400; color: var(--soot); background: var(--silver); box-shadow: inset -1px -1px var(--soot), inset 1px 1px white, inset -2px -2px oklch(0.55 0 0), inset 2px 2px oklch(0.9 0 0), 0 0 0 1px var(--soot); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 352px; top: 326px; width: 236px; padding: 38px 17px 0; gap: 0; background: none; border: 0; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { position: absolute; left: 9px; top: 3px; font-size: 19px; line-height: 22px; color: white; }
		[data-part=number] { font-family: var(--font-display); font-size: 30px; line-height: 1.2; letter-spacing: .08em; color: var(--purple); text-shadow: -2px 0 var(--teal), 2px 0 var(--pink); }
		[data-part=caption] { font-size: 20px; color: var(--soot); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
