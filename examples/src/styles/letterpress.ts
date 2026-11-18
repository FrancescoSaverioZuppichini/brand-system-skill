import type { Style } from "@/theme"
import Decor from "./decor/letterpress"

export default {
	name: "Letterpress",
	family: "Modernist and print",
	fonts: { heading: "Alfa Slab One", body: "Libre Caslon Text", mono: "Libre Caslon Display" },
	google:
		"family=Alfa+Slab+One&family=Libre+Caslon+Display&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400",
	radius: "0px",
	border: "1px",
	shadow: "inset 0 1px 2px oklch(0 0 0 / 0.25)",
	heading: { weight: 400, case: "uppercase", tracking: "0.01em" },
	specimen: "center",
	decor: Decor,
	// [Agent] A centred job-printing sheet: the headline's lead line in Caslon Display italic, the accent line in wood
	// type. Every inked part takes the decor's ink filter (on each part, not the copy block, because a filter would
	// become the containing block of the absolutely placed button) and a deboss shadow: a light lip under each stroke
	// and a faint dark edge above, so the type reads as pressed into the sheet.
	css: `
		--deboss: 0 1px 0 oklch(1 0 0 / .65), 0 -1px 0 oklch(0 0 0 / .18);
		[data-part=nav] header { justify-content: center; padding: 37px 0 0; }
		[data-part=nav] header > span { gap: 10px; color: var(--red); font: 700 13px var(--font-body); letter-spacing: .32em; text-transform: uppercase; filter: url(#ink); }
		[data-part=nav] header svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 10px 0 0; }
		[data-part=copy] { max-width: none; gap: 0; text-shadow: var(--deboss); }
		[data-part=kicker] { color: var(--red); font: 400 13px var(--font-body); letter-spacing: .32em; filter: url(#ink); }
		[data-part=headline] { margin-top: 6px; font: italic 400 44px/1 var(--font-code); letter-spacing: 0; text-transform: none; filter: url(#ink); }
		[data-part=accent] { display: block; margin-top: 10px; font: 400 90px/.92 var(--font-heading); letter-spacing: .01em; text-transform: uppercase; filter: url(#wood); }
		[data-part=sub] { margin-top: 40px; max-width: 430px; color: var(--ink); font-size: 16px; line-height: 1.45; filter: url(#ink); }
		[data-part=button] { position: absolute; top: 381px; left: 434px; height: auto; padding: 14px 24px; border-radius: 0; font: 700 13px var(--font-body); letter-spacing: .24em; text-transform: uppercase; text-shadow: none; box-shadow: inset 0 1px 2px oklch(0 0 0 / .35), 0 1px 0 oklch(1 0 0 / .6); filter: url(#ink); }
		[data-part=button] svg { display: none; }
		[data-part=card] { right: 434px; bottom: 50px; width: auto; padding: 8px 22px 9px; gap: 0; border: 1px solid var(--ink); outline: 1px solid var(--ink); outline-offset: 3px; border-radius: 0; box-shadow: none; background: none; text-align: center; text-shadow: var(--deboss); filter: url(#ink); }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { color: var(--ink); font: 700 11px var(--font-body); letter-spacing: .24em; text-transform: uppercase; }
		[data-part=number] { color: var(--red); font-size: 36px; line-height: 1.1; }
		[data-part=caption] { color: var(--faded); font-size: 13px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
