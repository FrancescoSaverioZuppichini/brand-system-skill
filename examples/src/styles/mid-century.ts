import type { Style } from "@/theme"
import Decor from "./decor/mid-century"

export default {
	name: "Mid-century modern",
	family: "Modernist and print",
	fonts: { heading: "Fraunces", body: "Jost", mono: "DM Mono" },
	google:
		"family=DM+Mono:wght@400&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,600,100,1;1,9..144,500,100,1&family=Jost:wght@400;500",
	radius: "4px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Fraunces only looks hand-cut with its soft and wonky axes on, so every Fraunces setting turns them on. The
	// number card is just type, tilted onto the decor's teal cut-paper sheet.
	css: `
		[data-part=nav] header { max-width: none; padding: 24px 48px 0; }
		[data-part=nav] header > span { font-size: 22px; font-weight: 600; font-variation-settings: "SOFT" 100, "WONK" 1; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 26px 48px 0; }
		[data-part=copy] { flex: none; width: 400px; gap: 0; }
		[data-part=kicker] { color: var(--teal); font: 500 13px var(--font-body); letter-spacing: .22em; }
		[data-part=headline] { margin: 12px 0 0 -2px; font-size: 64px; line-height: .98; font-variation-settings: "SOFT" 100, "WONK" 1; }
		[data-part=accent] { font-style: italic; font-weight: 500; }
		[data-part=sub] { margin-top: 22px; max-width: 360px; color: var(--ink); font-size: 15px; line-height: 1.5; }
		[data-part=button] { margin-top: 32px; height: auto; padding: 13px 22px; border-radius: 4px; font-size: 15px; font-weight: 500; letter-spacing: .02em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 318px; left: 556px; width: 196px; padding: 0; gap: 0; border: 0; box-shadow: none; background: none; color: var(--paper); transform: rotate(-3deg); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--paper); font: 500 12px var(--font-body); text-transform: uppercase; letter-spacing: .2em; }
		[data-part=number] { margin: 6px 0 4px; font-size: 56px; font-weight: 600; font-variation-settings: "SOFT" 100, "WONK" 1; }
		[data-part=caption] { color: var(--paper); font: 400 12px var(--font-code); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
