import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Tight neo-grotesk display",
	family: "Typographic voices",
	fonts: { heading: "Inter Tight", body: "Inter Tight", mono: "JetBrains Mono" },
	google: "family=Inter+Tight:wght@500..800&family=JetBrains+Mono:wght@400",
	radius: "4px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, tracking: "-0.055em" },
	specimen: "start",
	// [Agent] Heavy and packed: the headline at 800 with its lines nearly touching, black for every surface that acts,
	// and the one hot accent kept to the kicker.
	css: `${typeSheet}
		[data-part=nav] header::after { font-weight: 700; font-size: 24px; letter-spacing: -0.04em; }
		[data-part=nav]::after { content: "Inter Tight · JetBrains Mono"; font-family: var(--font-code); font-size: 11px; }
		[data-part=kicker] { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: var(--vermilion); }
		[data-part=headline] { font-size: 96px; line-height: .86; }
		[data-part=sub] { width: 410px; font-size: 17px; font-weight: 500; line-height: 1.45; letter-spacing: -0.01em; color: var(--ink); }
		[data-part=button] { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
		[data-part=label] { font-size: 13px; font-weight: 600; line-height: 1.2; }
		[data-part=number] { font-weight: 800; font-size: 52px; line-height: 1; letter-spacing: -0.05em; }
		[data-part=caption] { font-size: 13px; font-weight: 500; line-height: 1.3; }
	`,
} satisfies Style
