import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Geometric sans",
	family: "Typographic voices",
	fonts: { heading: "Jost", body: "Jost", mono: "DM Mono" },
	google: "family=Jost:wght@400..700&family=DM+Mono:wght@400",
	radius: "24px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.025em" },
	specimen: "start",
	// [Agent] Jost's ss01 swaps in the single-storey a that makes it read as Futura; wide-tracked caps for the small
	// labels, a pill button and a warm card are the geometric voice's furniture.
	css: `${typeSheet}
		[data-part=frame] { font-feature-settings: "ss01"; }
		[data-part=nav] header::after { font-weight: 500; font-size: 24px; }
		[data-part=nav]::after { content: "Jost · DM Mono"; font-family: var(--font-code); font-size: 11px; }
		[data-part=kicker] { font-size: 13px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
		[data-part=headline] { font-size: 94px; line-height: .98; }
		[data-part=sub] { font-size: 18px; line-height: 1.5; }
		[data-part=button] { padding: 0 28px; border-radius: 999px; font-size: 16px; font-weight: 500; }
		[data-part=card] { border-color: transparent; }
		[data-part=label] { font-size: 11px; font-weight: 500; line-height: 1.2; letter-spacing: .2em; text-transform: uppercase; color: var(--ochre); }
		[data-part=number] { font-weight: 500; font-size: 44px; line-height: 1.1; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 14px; line-height: 1.3; }
	`,
} satisfies Style
