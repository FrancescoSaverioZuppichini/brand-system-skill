import type { Style } from "@/theme"
import Decor from "./decor/riso"

export default {
	name: "Risograph",
	family: "Modernist and print",
	fonts: { heading: "Bricolage Grotesque", body: "Bricolage Grotesque", mono: "DM Mono" },
	google: "family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Mono:wght@400;500",
	radius: "3px",
	border: "0px",
	shadow: "4px 4px 0 var(--pink)",
	heading: { weight: 800, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Two drums: the headline is blue with its pink pass 4 px off (a text-shadow), and the button prints pink
	// under blue. Inks multiply onto the paper so the overlaps mix like real overprint.
	css: `
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding-right: 300px; align-items: flex-start; padding-top: 6px; }
		[data-part=kicker] { font-family: var(--font-code); color: var(--ink); font-size: 13px; letter-spacing: .1em; }
		[data-part=kicker]::before { content: ""; display: inline-block; width: 26px; height: 10px; margin-right: 10px; background: var(--pink); }
		[data-part=headline] { font-size: 72px; line-height: .92; color: var(--blue); text-shadow: -4px 3px 0 var(--pink); mix-blend-mode: multiply; }
		[data-part=sub] { color: var(--ink); font-weight: 500; font-size: 16px; line-height: 1.4; margin-top: 22px; }
		[data-part=button] { box-shadow: 4px 4px 0 var(--pink); font-family: var(--font-code); text-transform: uppercase; letter-spacing: .06em; font-weight: 500; }
		[data-part=button] svg { display: none; }
		[data-part=card] { right: 48px; bottom: 34px; position: absolute; width: 214px; border: 0; box-shadow: none; background: var(--yellow); transform: rotate(3deg); mix-blend-mode: multiply; padding: 14px 0 16px; gap: 0; }
		[data-part=card] > div { padding: 0 16px; }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; color: var(--ink); }
		[data-part=number] { font-weight: 800; font-size: 56px; color: var(--blue); margin: 6px 0 2px; }
		[data-part=caption] { font-family: var(--font-code); color: var(--ink); font-size: 11px; white-space: nowrap; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
