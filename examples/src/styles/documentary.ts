import type { Style } from "@/theme"
import Decor from "./decor/documentary"

export default {
	name: "Documentary photography",
	family: "Illustration and imagery",
	fonts: { heading: "Newsreader", body: "Libre Franklin", mono: "IBM Plex Mono" },
	google:
		"family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Libre+Franklin:wght@400;600;800&family=IBM+Plex+Mono:wght@400;500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.015em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Proof over polish: a newspaper serif over a heavy rule, the print shown uncropped with its caption, and
	// the number set as one captioned line under it (label, figure, caption on a shared baseline).
	css: `
		[data-part=nav] header { padding: 18px 40px 0; max-width: none; }
		[data-part=nav] header > span { font-size: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 26px 0 0 40px; }
		[data-part=copy] { flex: none; width: 250px; gap: 0; }
		[data-part=kicker] { width: fit-content; padding-top: 10px; border-top: 3px solid var(--black); font-size: 11px; font-weight: 800; letter-spacing: .08em; color: var(--black); }
		[data-part=headline] { font-size: 38px; line-height: 1.06; margin: 14px 0; }
		[data-part=sub] { font-size: 13.5px; line-height: 1.55; color: var(--caption); }
		[data-part=button] { margin-top: 22px; height: auto; padding: 12px 18px; border-radius: 0; font-size: 13px; font-weight: 600; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 316px; top: 410px; width: 450px; padding: 12px 0 0; gap: 0; border: 0; border-top: 1px solid var(--rule); border-radius: 0; background: none; }
		[data-part=card] > div { flex-direction: row; align-items: baseline; gap: 14px; padding: 0; }
		[data-part=label] { font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--black); }
		[data-part=number] { font-size: 34px; font-weight: 500; line-height: 1; }
		[data-part=caption] { font-size: 13px; color: var(--caption); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
