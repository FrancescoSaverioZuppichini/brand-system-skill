import type { Style } from "@/theme"
import Decor from "./decor/broadsheet"

export default {
	name: "Newspaper / broadsheet",
	family: "Modernist and print",
	fonts: { heading: "Newsreader", body: "Newsreader", mono: "Libre Franklin" },
	google:
		"family=Libre+Franklin:wght@500;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,700;0,6..72,800;1,6..72,400&family=UnifrakturMaguntia",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, tracking: "-0.015em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The logo becomes the blackletter masthead with its box as the crest between "The" and "Keep". The lead story
	// fills four of five columns; the salmon data box and a double-ruled button stack in the fifth. Franklin (the "mono"
	// slot) sets every piece of metadata.
	css: `
		[data-part=nav] header { position: absolute; inset: 12px 0 auto; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { gap: 12px; font: 400 64px/1 "UnifrakturMaguntia"; }
		[data-part=nav] header > span::before { content: "The"; }
		[data-part=nav] header svg { width: 34px; height: 34px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 124px; left: 28px; color: var(--ink); font: 800 11px var(--font-code); letter-spacing: .12em; }
		[data-part=headline] { position: absolute; top: 139px; left: 28px; width: 590px; font-size: 58px; line-height: .97; text-transform: capitalize; font-variation-settings: "opsz" 72; }
		[data-part=sub] { position: absolute; top: 263px; left: 28px; max-width: 380px; color: var(--ink); font-size: 17px; font-style: italic; line-height: 1.3; }
		[data-part=button] { position: absolute; top: 248px; left: 634px; width: 138px; height: auto; padding: 10px 4px; border: 3px double var(--ink); border-radius: 0; background: none; color: var(--ink); font: 800 11px var(--font-code); letter-spacing: .06em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 122px; left: 634px; width: 138px; padding: 8px 10px 10px; gap: 0; border: 1px solid var(--ink); border-radius: 0; box-shadow: none; }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { padding-bottom: 4px; border-bottom: 1px solid var(--ink); color: var(--ink); font: 800 10px var(--font-code); letter-spacing: .12em; text-transform: uppercase; }
		[data-part=number] { margin: 6px 0 2px; font-size: 40px; font-weight: 700; line-height: 1; }
		[data-part=caption] { color: var(--grey); font: 500 11px/1.3 var(--font-code); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
