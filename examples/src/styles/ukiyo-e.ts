import type { Style } from "@/theme"
import Decor from "./decor/ukiyo-e"

export default {
	name: "Ukiyo-e",
	family: "Art and historical movements",
	fonts: { heading: "Shippori Mincho B1", body: "Zen Kaku Gothic New", mono: "DM Mono" },
	google: "family=Shippori+Mincho+B1:wght@600;800&family=Zen+Kaku+Gothic+New:wght@400;500&family=DM+Mono",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 800 },
	specimen: "start",
	decor: Decor,
	// [Agent] The kicker and the number become cartouches printed over the scene, the way a series title sat on a
	// Hiroshige print: paper rectangles with a key-block outline (the vermilion inner rule is an inset outline).
	css: `
		[data-part=nav] { position: absolute; top: 24px; left: 44px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--ai); font-size: 17px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 44px; top: 70px; width: 270px; gap: 0; }
		[data-part=kicker] { position: absolute; left: 316px; top: -24px; z-index: 1; padding: 12px 18px; border: 2px solid var(--sumi); outline: 4px solid var(--shu); outline-offset: -8px; background: var(--hosho); color: var(--sumi); font: 600 15px var(--font-display); letter-spacing: .08em; text-transform: none; white-space: nowrap; }
		[data-part=headline] { color: var(--ai); font-size: 46px; line-height: 1.12; }
		[data-part=sub] { margin-top: 22px; color: var(--sumi); font-size: 14px; line-height: 1.7; }
		[data-part=button] { margin-top: 24px; height: auto; padding: 11px 20px; border: 2px solid var(--sumi); font-size: 14px; font-weight: 500; letter-spacing: .08em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 616px; top: 46px; width: 160px; padding: 12px 12px 14px; gap: 0; border: 2px solid var(--sumi); background: var(--wakaba); text-align: center; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--sumi); font-size: 11px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
		[data-part=number] { color: var(--ai); font-size: 32px; font-weight: 800; line-height: 1.2; }
		[data-part=caption] { color: var(--sumi); font-size: 11px; line-height: 1.3; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
