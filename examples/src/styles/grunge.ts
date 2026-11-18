import type { Style } from "@/theme"
import Decor from "./decor/grunge"

export default {
	name: "Grunge",
	family: "Art and historical movements",
	fonts: { heading: "Rubik Dirt", body: "Courier Prime", mono: "Oswald" },
	google: "family=Rubik+Dirt&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Oswald:wght@500;700",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 400, case: "lowercase", tracking: "-0.04em" },
	specimen: "start",
	decor: Decor,
	// [Agent] One h1, four words at four sizes: ::first-line is the giant "make", the accent becomes a block whose first
	// line is the rust Oswald "PEOPLE" and whose second line, "keep", is pulled up beside it. "keep" is painted by
	// clipped gradients instead of a blend mode: ink on the paper, paper colour where it crosses the black scan.
	css: `
		[data-part=nav] { position: absolute; top: 12px; right: 22px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--dirty-white); font: 700 16px var(--font-code); letter-spacing: .2em; text-transform: uppercase; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker], [data-part=headline], [data-part=sub], [data-part=button], [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 30px; top: 12px; color: var(--tar); font: 500 14px var(--font-code); letter-spacing: .5em; }
		[data-part=headline] { left: 28px; top: 34px; width: 1px; padding-left: 12px; text-indent: -12px; font-size: 76px; line-height: .8; letter-spacing: -.03em; }
		[data-part=headline]::first-line { font-size: 128px; letter-spacing: -.04em; }
		[data-part=accent] { display: block; width: 720px; margin: -54px 0 -100px -4px; padding: 100px 0 100px 304px; text-indent: -304px; word-spacing: 800px; font-size: 150px; line-height: 0; letter-spacing: -.04em; color: transparent;
			background: linear-gradient(var(--dirty-white), var(--dirty-white)) 434px 0 / 400px 147px no-repeat, linear-gradient(90deg, var(--rust) 0 300px, var(--tar) 300px);
			background-clip: text; }
		[data-part=accent]::first-line { font: 700 100px/.2 var(--font-code); letter-spacing: -.02em; text-transform: uppercase; }
		[data-part=sub] { left: 40px; top: 342px; width: 250px; max-width: none; color: var(--tar); font-size: 13px; line-height: 1.35; }
		[data-part=button] { left: 40px; top: 436px; height: auto; padding: 10px 18px 9px; color: var(--dirty-white); font: 700 18px var(--font-code); letter-spacing: .12em; text-transform: uppercase; transform: rotate(-1deg); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 548px; top: 352px; width: 200px; padding: 12px 14px; gap: 0; border: 2px solid var(--tar); background: oklch(0.9 0.02 85 / .6); box-shadow: none; transform: rotate(1.5deg); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--tar); font: 700 12px var(--font-body); letter-spacing: .1em; text-transform: uppercase; }
		[data-part=number] { color: oklch(0.4 0.06 110); font: 700 60px/1.15 var(--font-code); letter-spacing: -.02em; font-variant-numeric: normal; }
		[data-part=caption] { color: var(--tar); font: 13px var(--font-body); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
