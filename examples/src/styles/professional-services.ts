import type { Style } from "@/theme"
import Decor from "./decor/professional-services"

export default {
	name: "Professional services",
	family: "Industry-coded languages",
	fonts: { heading: "Libre Baskerville", body: "Source Sans 3", mono: "IBM Plex Mono" },
	google:
		"family=Libre+Baskerville:ital,wght@0,400;1,400&family=Source+Sans+3:wght@400;600&family=IBM+Plex+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Institutional calm: the box mark gives way to the crest drawn in the decor (the wordmark sits beside it),
	// rules instead of boxes, an italic accent, and the number on a stone panel under a gold rule overlapping the photo.
	css: `
		[data-part=nav] header { height: 66px; margin: 0 48px; padding: 0; max-width: none; width: auto; border-bottom: 1px solid var(--rule); }
		[data-part=nav] header > span { padding-left: 46px; font-size: 19px; }
		[data-part=nav] header > span svg, [data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 46px 0 0 48px; }
		[data-part=copy] { flex: none; width: 360px; gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 600; letter-spacing: .18em; color: var(--grey); }
		[data-part=kicker]::before { content: ""; width: 28px; height: 1px; background: var(--gold); }
		[data-part=headline] { font-size: 40px; line-height: 1.2; margin: 18px 0; }
		[data-part=accent] { font-style: italic; }
		[data-part=sub] { font-size: 15.5px; line-height: 1.6; color: var(--grey); max-width: 360px; }
		[data-part=button] { margin-top: 28px; height: auto; padding: 14px 22px; gap: 14px; border-radius: 0; font-size: 15px; font-weight: 600; letter-spacing: .02em; }
		[data-part=button] svg { width: 18px; stroke-width: 1.4; }
		[data-part=card] { position: absolute; left: 430px; top: 352px; width: 236px; padding: 16px 0; gap: 0; border: 0; border-top: 3px solid var(--gold); border-radius: 0; }
		[data-part=card] > div { padding: 0 20px; gap: 0; }
		[data-part=label] { font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--grey); }
		[data-part=number] { font-size: 34px; line-height: 1.2; margin-top: 6px; }
		[data-part=caption] { font-size: 13.5px; color: var(--grey); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
