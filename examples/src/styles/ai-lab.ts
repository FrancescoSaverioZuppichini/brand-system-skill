import type { Style } from "@/theme"
import Decor from "./decor/ai-lab"

export default {
	name: "AI lab (humanist)",
	family: "Industry-coded languages",
	fonts: { heading: "Newsreader", body: "Instrument Sans", mono: "JetBrains Mono" },
	google:
		"family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Instrument+Sans:wght@400;500&family=JetBrains+Mono:wght@400",
	radius: "6px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A research journal, not a launch page: the nav sits on a hairline like a running head, the serif headline
	// stacks in a narrow column, and the number is a captioned figure ("Fig. 1") under the painted plate.
	css: `
		[data-part=nav] header { margin: 0 40px 0 48px; padding: 18px 0 12px; max-width: none; width: auto; border-bottom: 1px solid var(--line); }
		[data-part=nav] header > span { font-weight: 500; font-size: 20px; }
		[data-part=nav] [data-slot=button] { height: 28px; padding: 0 12px; font-size: 13px; }
		[data-part=body] { align-items: flex-start; padding: 32px 340px 0 48px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 14px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--grey); }
		[data-part=headline] { font-size: 58px; line-height: 1.04; margin: 14px 0 22px; max-width: 380px; }
		[data-part=sub] { font-size: 15px; line-height: 1.6; color: var(--umber); max-width: 400px; }
		[data-part=button] { margin-top: 30px; height: auto; padding: 12px 18px; gap: 10px; font-size: 15px; font-weight: 500; }
		[data-part=card] { position: absolute; left: 470px; top: 340px; width: 290px; padding: 12px 0 0; gap: 0; border: 0; border-top: 1px solid var(--ink); border-radius: 0; background: none; box-shadow: none; }
		[data-part=card] > div { padding: 0 0 0 58px; gap: 0; }
		[data-part=card] > div::before { content: "Fig. 1"; position: absolute; left: 0; top: 15px; font-family: var(--font-code); font-size: 11px; color: var(--grey); }
		[data-part=label] { font-size: 13px; font-weight: 500; color: var(--ink); }
		[data-part=number] { font-size: 40px; font-weight: 400; line-height: 1.1; letter-spacing: -0.01em; }
		[data-part=caption] { font-size: 13px; color: var(--grey); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
