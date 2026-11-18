import type { Style } from "@/theme"
import Decor from "./decor/layout-dashboard"

export default {
	name: "Dashboard",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.015em" },
	specimen: "start",
	decor: Decor,
	// [Agent] No hero at all: the logo heads the sidebar, the kicker is the top bar's breadcrumb, the headline is the page
	// title at 19 px, the button is the top bar's action and the number card is the first KPI tile.
	css: `
		[data-part=frame] { font-variant-numeric: tabular-nums; }
		[data-part=nav] { position: absolute; top: 0; left: 0; width: 176px; }
		[data-part=nav] header { padding: 14px 18px; }
		[data-part=nav] header > span { font-size: 15px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 18px 20px 0 196px; align-items: flex-start; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; line-height: 1; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { font-size: 19px; line-height: 1.2; margin-top: 35px; }
		[data-part=sub] { max-width: none; font-size: 11.5px; line-height: 1.45; margin-top: 3px; }
		[data-part=button] { position: absolute; top: 10px; right: 20px; height: 28px; padding: 0 12px; font-size: 12px; border-radius: 6px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 196px; top: 120px; width: 137px; height: 95px; padding: 12px 14px; gap: 0; border-radius: 8px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 5px; }
		[data-part=label], [data-part=caption] { font-size: 10.5px; line-height: 1.25; }
		[data-part=number] { font-family: var(--font-body); font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
