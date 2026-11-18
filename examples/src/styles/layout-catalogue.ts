import type { Style } from "@/theme"
import Decor from "./decor/layout-catalogue"

export default {
	name: "Catalogue / e-commerce",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "4px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.025em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero shrinks to a shop header with the button at its right; the number card takes a product's 4:5
	// cell in the grid, the one tinted tile among neutral studio shots.
	css: `
		[data-part=frame] { font-variant-numeric: tabular-nums; }
		[data-part=nav] { position: absolute; top: 0; left: 0; }
		[data-part=nav] header { height: 52px; padding: 0 32px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 70px 32px 0; align-items: flex-start; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; line-height: 1; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 24px; line-height: 1.2; margin: 7px 0 5px; }
		[data-part=sub] { max-width: none; font-size: 12px; line-height: 1.45; }
		[data-part=button] { position: absolute; top: 106px; right: 32px; height: auto; padding: 9px 14px; font-size: 12.5px; border-radius: 8px; background: var(--graphite); color: var(--sheet); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 488px; top: 155px; width: 132px; height: 165px; padding: 14px; border: 0; border-radius: 4px; background: var(--tint); box-shadow: none; }
		[data-part=card] > div { height: 100%; justify-content: flex-end; padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { font-family: var(--font-body); font-size: 26px; font-weight: 700; letter-spacing: -0.02em; color: var(--cobalt); margin: 4px 0 3px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
