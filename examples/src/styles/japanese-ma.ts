import type { Style } from "@/theme"
import Decor from "./decor/japanese-ma"

export default {
	name: "Japanese minimal (ma, wabi-sabi)",
	family: "Art and historical movements",
	fonts: { heading: "Shippori Mincho", body: "Zen Kaku Gothic New", mono: "DM Mono" },
	google:
		"family=Shippori+Mincho:wght@400;500&family=Zen+Kaku+Gothic+New:wght@400;500&family=DM+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Ma: everything small and pushed to the edges so the empty paper and the one stone carry the page. The
	// button is only an underline and the number card only a rule.
	css: `
		[data-part=nav] { position: absolute; top: 54px; right: 72px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 15px; letter-spacing: .08em; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker], [data-part=headline], [data-part=sub], [data-part=button], [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 72px; top: 64px; color: var(--usuzumi); font: 400 11px var(--font-code); letter-spacing: .3em; }
		[data-part=headline] { left: 72px; top: 292px; width: 300px; font-size: 34px; line-height: 1.35; }
		[data-part=sub] { left: 72px; top: 392px; width: 330px; max-width: none; color: var(--usuzumi); font-size: 12.5px; line-height: 1.8; letter-spacing: .02em; }
		[data-part=button] { left: 72px; top: 446px; height: auto; padding: 0 0 4px; border-bottom: 1px solid var(--sumi); background: none; color: var(--sumi); font-size: 12px; font-weight: 500; letter-spacing: .2em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 600px; top: 384px; width: 140px; padding: 12px 0 0; gap: 0; border: 0; border-top: 1px solid var(--sumi); background: none; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--usuzumi); font: 400 10px var(--font-code); letter-spacing: .2em; text-transform: uppercase; }
		[data-part=number] { margin-top: 6px; font-size: 28px; line-height: 1.3; }
		[data-part=caption] { color: var(--usuzumi); font-size: 11px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
