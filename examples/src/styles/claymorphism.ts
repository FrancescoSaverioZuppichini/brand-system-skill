import type { Style } from "@/theme"
import Decor from "./decor/claymorphism"

export default {
	name: "Claymorphism",
	family: "Digital UI eras",
	fonts: { heading: "Fredoka", body: "Nunito", mono: "DM Mono" },
	google: "family=Fredoka:wght@500;600;700&family=Nunito:wght@600;700;800&family=DM+Mono",
	radius: "32px",
	border: "0px",
	shadow:
		"inset 0 -8px 14px oklch(0.35 0.08 295 / .2), inset 0 8px 14px oklch(1 0 0 / .7), 0 16px 30px oklch(0.45 0.1 300 / .25)",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every control is a lump of clay: a darker inner shadow along the bottom, a light one along the top and a
	// soft drop, each tinted with the piece's own pastel. The number card is a tilted mint slab.
	css: `
		[data-part=nav] { position: absolute; top: 16px; left: 48px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--grape); font-weight: 700; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 76px; top: 90px; width: 410px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 8px 16px; border-radius: 999px; background: var(--lilac); box-shadow: inset 0 -3px 6px oklch(0.4 0.1 300 / .25), inset 0 3px 6px oklch(1 0 0 / .6); color: var(--grape); font-size: 13px; font-weight: 800; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin: 18px 0 14px; font-size: 48px; line-height: 1.02; }
		[data-part=sub] { max-width: 400px; color: var(--plum); font-size: 15px; font-weight: 600; line-height: 1.55; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 17px 30px; border-radius: 999px; font: 700 18px/1 var(--font-display); box-shadow: inset 0 -6px 10px oklch(0.55 0.12 40 / .3), inset 0 6px 10px oklch(1 0 0 / .65), 0 12px 22px oklch(0.6 0.12 40 / .35); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 546px; top: 218px; width: 220px; padding: 26px 26px 28px; gap: 0; border-radius: 36px; background: var(--mint); transform: rotate(5deg);
			box-shadow: inset 0 -8px 14px oklch(0.4 0.08 165 / .22), inset 0 8px 14px oklch(1 0 0 / .7), 0 18px 34px oklch(0.45 0.1 165 / .28); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--grape); font-size: 14px; font-weight: 800; }
		[data-part=number] { margin: 10px 0 6px; font-size: 52px; font-weight: 700; font-variant-numeric: normal; }
		[data-part=caption] { color: oklch(0.38 0.05 200); font-size: 14px; font-weight: 700; line-height: 1.35; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
