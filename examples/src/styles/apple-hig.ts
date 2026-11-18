import type { Style } from "@/theme"
import Decor from "./decor/apple-hig"

export default {
	name: "Apple HIG (incl. Liquid Glass)",
	family: "Digital UI eras",
	fonts: { heading: "Inter Tight", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@700;800&family=JetBrains+Mono",
	radius: "18px",
	border: "0px",
	shadow: "none",
	heading: { weight: 800, tracking: "-0.012em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A large-title screen: the number card is an inset grouped list (a big cell with a bar chart, then a row
	// whose caption is indented past the icon tile, with the iOS separator that starts after the icon), and the logo is
	// the navigation title between the Liquid Glass back and more buttons over the colour screen.
	css: `
		[data-part=nav] { position: absolute; top: 58px; left: 518px; width: 146px; }
		[data-part=nav] header { height: 44px; justify-content: center; padding: 0; }
		[data-part=nav] header > span { color: white; font: 600 17px var(--font-body); text-shadow: 0 1px 4px oklch(0.3 0.1 280 / .4); }
		[data-part=nav] header > span svg { width: 20px; height: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 32px; top: 52px; width: 404px; gap: 0; }
		[data-part=kicker] { color: var(--secondary-label); font-size: 13px; font-weight: 600; letter-spacing: .02em; }
		[data-part=headline] { margin: 8px 0 10px; font-size: 37px; line-height: 1.08; }
		[data-part=sub] { color: var(--secondary-label); font-size: 15px; line-height: 1.45; }
		[data-part=button] { width: 100%; height: 50px; margin-top: 163px; border-radius: 25px; font-size: 17px; font-weight: 600; box-shadow: inset 0 1px 0 oklch(1 0 0 / .35), inset 0 -1px 0 oklch(0 0 0 / .08); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 32px; top: 229px; width: 404px; height: 123px; padding: 14px 16px 0; overflow: hidden; border-radius: 18px; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { margin-bottom: 6px; color: var(--secondary-label); font-size: 13px; font-weight: 500; }
		[data-part=number] { font-size: 30px; font-weight: 700; letter-spacing: -.01em; font-variant-numeric: normal; }
		[data-part=caption] { position: absolute; left: 0; right: 0; bottom: 0; height: 48px; display: flex; align-items: center; padding-left: 58px; color: var(--label); font-size: 16px; font-weight: 500; box-shadow: inset 56px 1px 0 var(--surface), inset 0 .5px 0 var(--separator); }
		[data-part=chart] { position: absolute; top: 20px; right: 16px; height: 40px; margin: 0; gap: 5px; }
		[data-part=chart] span { flex: 0 0 9px; border-radius: 3px; background: var(--system-blue); }
		[data-part=chart] span:not(:last-child) { background: var(--pale-blue); }
	`,
} satisfies Style
