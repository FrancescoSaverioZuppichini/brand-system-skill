import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Serif editorial (transitional / modern)",
	family: "Typographic voices",
	fonts: { heading: "Newsreader", body: "Newsreader", mono: "Instrument Sans" },
	google:
		"family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&family=Instrument+Sans:wght@500;600",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.025em" },
	specimen: "start",
	// [Agent] A magazine voice: the serif does the talking in roman and italic, a small sans (the "mono" slot) sets the
	// tracked caps, and the number sits between two rules instead of in a box.
	css: `${typeSheet}
		[data-part=nav] header::after { font-size: 26px; }
		[data-part=nav]::after { content: "Newsreader · Instrument Sans"; font-family: var(--font-code); font-weight: 500; font-size: 11px; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--oxblood); }
		[data-part=headline] { font-size: 90px; line-height: .98; }
		[data-part=accent] { font-style: italic; }
		[data-part=sub] { width: 440px; font-size: 19px; line-height: 1.45; }
		[data-part=button] { font-family: var(--font-code); font-size: 15px; font-weight: 500; }
		[data-part=card] { padding: 14px 0 16px; border-width: 1px 0; border-color: var(--ink); background: none; }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; font-weight: 600; line-height: 1; letter-spacing: .14em; text-transform: uppercase; color: var(--oxblood); }
		[data-part=number] { font-size: 50px; line-height: 1; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 15px; font-style: italic; line-height: 1.3; }
	`,
} satisfies Style
