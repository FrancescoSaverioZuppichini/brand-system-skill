import type { Style } from "@/theme"
import Decor from "./decor/new-wave"

export default {
	name: "New Wave typography",
	family: "Art and historical movements",
	fonts: { heading: "Archivo", body: "Archivo", mono: "Space Mono" },
	google:
		"family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Space+Mono:wght@400;700",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The stepped headline is one h1: a 1 px width breaks it into one word per line, ::first-line sets "MAKE" wide
	// and heavy, the h1 itself sets "something" condensed and light, and the accent turns into a block whose own
	// first line is "PEOPLE", so four words get four widths and weights with no extra markup. Negative text-indents
	// step each line right along the rule drawn in the decor.
	css: `
		[data-part=nav] { position: absolute; top: 8px; right: 52px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 15px; font-weight: 900; font-stretch: 125%; text-transform: uppercase; letter-spacing: .04em; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker], [data-part=headline], [data-part=sub], [data-part=button], [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 52px; top: 36px; padding: 3px 8px; background: var(--type); color: var(--sheet); font: 700 11px var(--font-code); letter-spacing: .4em; }
		[data-part=headline] { left: 52px; top: 72px; width: 1px; padding-left: 68px; text-indent: -68px; white-space: normal; font-weight: 200; font-size: 52px; line-height: 1.12; font-stretch: 62%; letter-spacing: .12em; text-transform: none; }
		[data-part=headline]::first-line { font-weight: 900; font-size: 64px; font-stretch: 125%; letter-spacing: .02em; text-transform: uppercase; }
		[data-part=accent] { display: block; margin-left: 68px; padding-left: 128px; text-indent: -128px; font-style: italic; font-weight: 300; font-size: 72px; line-height: 1; font-stretch: 75%; letter-spacing: .3em; }
		[data-part=accent]::first-line { font-style: normal; font-weight: 800; font-size: 64px; font-stretch: 125%; letter-spacing: 0; text-transform: uppercase; }
		[data-part=sub] { left: 52px; top: 372px; width: 300px; max-width: none; color: var(--type); font: 400 12px/1.6 var(--font-code); }
		[data-part=button] { left: 52px; top: 432px; height: auto; padding: 10px 16px; font: 700 11px var(--font-code); letter-spacing: .3em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 560px; top: 318px; width: 196px; background: none; border: 0; box-shadow: none; padding: 0; gap: 0; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { border-top: 3px solid var(--type); padding-top: 6px; color: var(--type); font: 700 10px var(--font-code); letter-spacing: .4em; text-transform: uppercase; }
		[data-part=number] { margin-top: 8px; font-size: 54px; font-weight: 900; font-stretch: 125%; letter-spacing: -.02em; }
		[data-part=caption] { margin-top: 8px; padding-left: 40px; color: var(--type); font: 400 11px var(--font-code); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
