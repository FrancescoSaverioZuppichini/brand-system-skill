import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Humanist sans",
	family: "Typographic voices",
	fonts: { heading: "Source Sans 3", body: "Source Sans 3", mono: "Fira Code" },
	google: "family=Source+Sans+3:ital,wght@0,400..700;1,400..700&family=Fira+Code:wght@400",
	radius: "10px",
	border: "1px",
	shadow: "0 1px 2px oklch(0.22 0.01 60 / 0.06), 0 6px 18px oklch(0.22 0.01 60 / 0.07)",
	heading: { weight: 600, tracking: "-0.015em" },
	specimen: "start",
	// [Agent] The voice shows its true italic in the small places (kicker, card label) and its open, warm shapes big.
	css: `${typeSheet}
		[data-part=nav] header::after { font-weight: 600; font-size: 24px; }
		[data-part=nav]::after { content: "Source Sans 3 · Fira Code"; font-family: var(--font-code); font-size: 11px; }
		[data-part=kicker] { font-size: 18px; font-weight: 600; font-style: italic; }
		[data-part=headline] { font-size: 94px; line-height: 1; }
		[data-part=sub] { font-size: 18px; line-height: 1.5; }
		[data-part=button] { font-size: 16px; font-weight: 600; }
		[data-part=label] { font-size: 15px; font-weight: 500; font-style: italic; line-height: 1.2; color: var(--jade); }
		[data-part=number] { font-weight: 600; font-size: 42px; line-height: 1.1; }
		[data-part=caption] { font-size: 14px; line-height: 1.3; }
	`,
} satisfies Style
