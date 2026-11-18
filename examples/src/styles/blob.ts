import type { Style } from "@/theme"
import Decor from "./decor/blob"

export default {
	name: "Liquid / blob",
	family: "Digital UI eras",
	fonts: { heading: "Bricolage Grotesque", body: "DM Sans", mono: "DM Mono" },
	google: "family=Bricolage+Grotesque:opsz,wght@12..96,800&family=DM+Sans:wght@500;700&family=DM+Mono",
	radius: "24px",
	border: "0px",
	shadow: "none",
	heading: { weight: 800, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] No straight corners: the kicker pill and the button take the same lopsided blob radius (--blob; the theme
	// radius stays a length so shadcn's calc()-derived radii still work), and the number card
	// dissolves into the lilac blob behind it.
	css: `
		--blob: 42% 58% 63% 37% / 41% 44% 56% 59%;
		[data-part=nav] header { max-width: none; padding: 20px 52px 0; }
		[data-part=nav] header > span { font-size: 20px; font-weight: 800; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 52px; top: 76px; width: 390px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 8px 16px; border-radius: var(--blob); background: var(--lilac); color: var(--ink); font-size: 14px; font-weight: 700; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin-top: 18px; font-size: 64px; line-height: .92; }
		[data-part=sub] { margin-top: 20px; font-size: 15px; font-weight: 500; line-height: 1.55; color: var(--ink); }
		[data-part=button] { margin-top: 24px; height: auto; padding: 18px 30px; border-radius: var(--blob); font-size: 16px; font-weight: 700; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 504px; top: 340px; width: 190px; padding: 0; gap: 0; background: none; box-shadow: none; text-align: center; }
		[data-part=card] > div { padding: 0; gap: 0; align-items: center; }
		[data-part=label] { font-size: 13px; font-weight: 700; color: var(--ink); }
		[data-part=number] { font-size: 46px; font-weight: 800; letter-spacing: -0.03em; color: var(--berry); font-variant-numeric: normal; }
		[data-part=caption] { font-size: 13px; font-weight: 500; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
