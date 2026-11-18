import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Mono-forward",
	family: "Typographic voices",
	fonts: { heading: "JetBrains Mono", body: "JetBrains Mono", mono: "JetBrains Mono" },
	google: "family=JetBrains+Mono:wght@400..800",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.06em" },
	specimen: "start",
	// [Agent] One monospace for everything, tightened hard at display size so it reads as a headline, not as code; the
	// accent only marks syntax (the comment slashes, the bullet, the arrow).
	css: `${typeSheet}
		[data-part=nav] header::after { font-weight: 500; font-size: 22px; }
		[data-part=nav]::after { content: "JetBrains Mono"; font-size: 11px; }
		[data-part=kicker] { font-size: 14px; font-weight: 500; color: var(--orange); }
		[data-part=kicker]::before { content: "// "; color: var(--grey); }
		[data-part=headline] { font-size: 84px; line-height: 1; }
		[data-part=sub] { font-size: 13px; line-height: 1.7; }
		[data-part=button] { font-size: 14px; font-weight: 500; }
		[data-part=button]::after { content: "→"; color: var(--orange); }
		[data-part=card] { padding: 14px 18px 16px; border-color: var(--ink); background: none; }
		[data-part=label] { font-size: 11px; font-weight: 500; line-height: 1; letter-spacing: .06em; text-transform: uppercase; }
		[data-part=label]::before { content: "■ "; color: var(--orange); }
		[data-part=number] { font-weight: 700; font-size: 44px; line-height: 1; letter-spacing: -0.04em; }
		[data-part=caption] { font-size: 12px; line-height: 1.3; }
	`,
} satisfies Style
