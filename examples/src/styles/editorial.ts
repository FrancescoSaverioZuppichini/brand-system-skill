import type { Style } from "@/theme"
import Decor from "./decor/editorial"

export default {
	name: "Editorial / magazine",
	family: "Modernist and print",
	fonts: { heading: "Newsreader", body: "Source Serif 4", mono: "Instrument Sans" },
	google:
		"family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,300;1,6..72,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&family=Instrument+Sans:wght@500;600",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.025em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Labels are set in the sans (the "mono" slot here), the standfirst in italic serif, the accent in oxblood italic.
	css: `
		[data-part=nav] header { margin: 0 40px; padding: 22px 0 10px; border-bottom: 1px solid var(--ink); max-width: none; width: auto; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding-right: 280px; align-items: flex-start; padding-top: 22px; }
		[data-part=kicker] { position: absolute; top: 30px; left: 40px; color: var(--oxblood); font-family: var(--font-code); font-size: 11px; font-weight: 600; letter-spacing: .12em; }
		[data-part=nav] header > span { opacity: 0; }
		[data-part=headline] { font-size: 72px; line-height: .92; }
		[data-part=accent] { font-style: italic; color: var(--oxblood); }
		[data-part=sub] { font-style: italic; color: var(--ink); font-size: 17px; line-height: 1.5; max-width: 420px; }
		[data-part=button] { font-family: var(--font-code); text-transform: uppercase; letter-spacing: .1em; font-size: 12px; border-radius: 0; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 40px; bottom: 54px; width: 220px; border: 0; border-top: 3px double var(--ink); border-bottom: 1px solid var(--ink); background: none; padding: 12px 0; }
		[data-part=card] > div { padding: 0; }
		[data-part=label] { color: var(--oxblood); font-family: var(--font-code); font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
		[data-part=number] { font-size: 52px; }
		[data-part=caption] { font-style: italic; font-size: 14px; }
		[data-part=chart] { display: none; }
		figure .fill-secondary { fill: oklch(0.78 0.04 55); }
		figure .fill-primary { fill: var(--oxblood); }
	`,
} satisfies Style
