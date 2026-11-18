import type { Style } from "@/theme"
import Decor from "./decor/psychedelic"

export default {
	name: "Psychedelic",
	family: "Art and historical movements",
	fonts: { heading: "Shrikhand", body: "Righteous", mono: "Righteous" },
	google: "family=Shrikhand&family=Righteous",
	radius: "999px",
	border: "3px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase" },
	specimen: "start",
	decor: Decor,
	// [Agent] The lettering is the layout: a huge word-spacing gives each word its own line, and ::first-line resizes the
	// first word of the headline and of the accent so every line roughly fills the ellipse at its height (Wes Wilson's
	// trick, which the old SVG did with textLength). Then the decor's melt filter warps the live text.
	css: `
		[data-part=nav] header { position: absolute; top: 16px; left: 18px; width: auto; max-width: none; padding: 6px 14px; border: 3px solid var(--ink); border-radius: 999px; background: var(--orange); }
		[data-part=nav] header > span { color: var(--ink); font: 400 20px var(--font-body); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 68px 32px 0 558px; }
		[data-part=copy] { flex: none; width: 184px; align-items: center; gap: 0; text-align: center; }
		[data-part=kicker] { max-width: 150px; color: var(--magenta); font-size: 22px; font-weight: 400; line-height: 1; letter-spacing: .02em; text-transform: none; }
		[data-part=headline] { position: absolute; top: 70px; left: 26px; width: 492px; color: var(--orange); font-size: 66px; line-height: 92px; text-align: center; word-spacing: 600px; -webkit-text-stroke: 2px var(--ink); paint-order: stroke fill; filter: url(#melt); }
		[data-part=headline]::first-line { font-size: 80px; letter-spacing: .04em; }
		[data-part=accent] { display: block; font-size: 84px; letter-spacing: .06em; }
		[data-part=accent]::first-line { font-size: 80px; letter-spacing: 0; }
		[data-part=sub] { margin-top: 14px; color: var(--ink); font-size: 15px; line-height: 1.35; }
		[data-part=button] { margin-top: 16px; height: auto; padding: 11px 20px; border: 3px solid var(--ink); background: var(--magenta); color: var(--green); font-size: 16px; font-weight: 400; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 312px; left: 562px; width: 176px; padding: 14px 10px 16px; gap: 0; border: 3px solid var(--ink); border-radius: 58% 42% 50% 50% / 50% 46% 54% 50%; box-shadow: none; background: var(--orange); text-align: center; }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { color: var(--ink); font-size: 13px; }
		[data-part=number] { color: var(--blue); font-size: 38px; line-height: 1.1; }
		[data-part=caption] { color: var(--ink); font-size: 11px; line-height: 1.2; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
