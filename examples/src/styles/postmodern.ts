import type { Style } from "@/theme"
import Decor from "./decor/postmodern"

export default {
	name: "Postmodern / deconstructivist",
	family: "Art and historical movements",
	fonts: { heading: "Syne", body: "IBM Plex Serif", mono: "Major Mono Display" },
	google: "family=Syne:wght@400;800&family=IBM+Plex+Serif:ital,wght@0,400;1,400&family=Major+Mono+Display",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Four readings in one h1: a 1 px width puts each word on its own line, ::first-line sets "Make" in italic
	// serif, the h1 sets "something" in wide Syne, and the accent becomes a block whose first line is "people" in Major
	// Mono and whose second is "keep", pushed right by a hanging indent. The kicker and the logo run vertically.
	css: `
		[data-part=nav] { position: absolute; top: 190px; right: 8px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { writing-mode: vertical-rl; font-family: var(--font-code); font-size: 15px; letter-spacing: .2em; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker], [data-part=headline], [data-part=sub], [data-part=button], [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 18px; top: 40px; writing-mode: vertical-rl; transform: rotate(180deg); color: var(--charcoal); font: 15px var(--font-code); letter-spacing: .3em; text-transform: none; }
		[data-part=headline] { left: 62px; top: 30px; width: 1px; text-indent: 4px; font-size: 84px; line-height: 1; letter-spacing: -.03em; }
		[data-part=headline]::first-line { font: italic 400 46px var(--font-body); letter-spacing: 0; }
		[data-part=accent] { display: block; margin: 2px 0 0 168px; padding-left: 164px; text-indent: -164px; font-size: 96px; line-height: .98; letter-spacing: -.02em; }
		[data-part=accent]::first-line { font: 400 50px var(--font-code); letter-spacing: 0; }
		[data-part=sub] { left: 62px; top: 346px; width: 340px; max-width: none; columns: 2; column-gap: 18px; color: var(--charcoal); font-size: 13px; line-height: 1.45; }
		[data-part=button] { left: 62px; top: 438px; height: auto; padding: 10px 18px; color: var(--acid); font: 800 14px var(--font-display); letter-spacing: .02em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 596px; top: 352px; width: 180px; padding: 0 0 0 12px; border: 0; border-left: 2px solid var(--charcoal); background: none; box-shadow: none; gap: 0; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--charcoal); font: 13px var(--font-code); text-transform: lowercase; }
		[data-part=number] { margin-top: 6px; color: var(--emigre-orange); font-size: 44px; font-weight: 800; letter-spacing: -.03em; font-variant-numeric: normal; }
		[data-part=caption] { margin-top: 6px; color: var(--charcoal); font-size: 13px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
