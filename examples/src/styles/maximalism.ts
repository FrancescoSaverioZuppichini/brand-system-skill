import type { Style } from "@/theme"
import Decor from "./decor/maximalism"

export default {
	name: "Maximalism",
	family: "Digital UI eras",
	fonts: { heading: "Bricolage Grotesque", body: "Bricolage Grotesque", mono: "DM Mono" },
	google:
		"family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=DM+Mono:wght@500&family=Instrument+Serif:ital@1&family=Shrikhand",
	radius: "999px",
	border: "3px",
	shadow: "6px 6px 0 var(--ink)",
	heading: { weight: 800, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every piece is an object with the same 3 px ink stroke and 6 px hard shadow, set at its own angle. Four faces
	// at once: condensed grotesk, Shrikhand, Instrument Serif italic and DM Mono. Each headline line is one text run, so
	// two colours per line come from a hard-stop gradient clipped to the text, and drop-shadow stands in for text-shadow.
	css: `
		[data-part=nav] { position: absolute; top: 18px; right: 22px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { padding: 7px 14px 7px 10px; background: var(--cream); border: 3px solid var(--ink); border-radius: 999px; box-shadow: 4px 4px 0 var(--ink); rotate: 6deg; font-size: 20px; font-weight: 800; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 34px; top: 28px; padding: 6px 14px; background: var(--lime); border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); rotate: -4deg; font-family: var(--font-code); font-size: 13px; line-height: 1; letter-spacing: .14em; color: var(--ink); }
		[data-part=headline] { left: 30px; top: 136px; width: 700px; padding-left: 228px; text-indent: -228px; word-spacing: 800px; line-height: 0; font-family: "Instrument Serif"; font-style: italic; font-weight: 400; font-size: 112px; letter-spacing: -0.01em; color: var(--purple); }
		[data-part=headline]::first-line { font-family: var(--font-heading); font-style: normal; font-weight: 800; font-stretch: 75%; font-size: 124px; letter-spacing: -0.03em; color: var(--cobalt); }
		[data-part=accent] { display: block; margin: 110px 0 0 -228px; padding-left: 336px; text-indent: -336px; font-family: var(--font-heading); font-style: normal; font-weight: 800; font-size: 104px; letter-spacing: -0.04em; color: var(--cream); }
		[data-part=accent]::first-line { font-family: Shrikhand; font-weight: 400; font-size: 92px; letter-spacing: 0; color: var(--pink); text-shadow: 5px 5px 0 var(--ink); }
		[data-part=sub] { left: 36px; top: 322px; max-width: none; padding: 12px 16px; background: var(--cream); border: 3px solid var(--ink); font-size: 15px; font-weight: 500; line-height: 1.45; color: var(--ink); width: 430px; }
		[data-part=button] { left: 40px; top: 410px; height: auto; padding: 13px 26px; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); rotate: -2deg; font-size: 18px; font-weight: 800; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 486px; top: 268px; width: 224px; height: 224px; rotate: -10deg; display: grid; place-content: center; padding: 0; background: none; border: 0; box-shadow: none; text-align: center; }
		[data-part=card] > div { padding: 0; gap: 0; align-items: center; }
		[data-part=label] { font-family: var(--font-code); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-family: Shrikhand; font-weight: 400; font-size: 50px; line-height: 1.1; color: var(--cobalt); letter-spacing: 0; }
		[data-part=caption] { font-family: "Instrument Serif"; font-style: italic; font-size: 17px; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
