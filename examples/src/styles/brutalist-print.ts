import type { Style } from "@/theme"
import Decor from "./decor/brutalist-print"

export default {
	name: "Brutalist print (Dutch, post-Swiss)",
	family: "Modernist and print",
	fonts: { heading: "Archivo", body: "Archivo Narrow", mono: "JetBrains Mono" },
	google:
		"family=Archivo+Narrow:wght@500;600&family=Archivo:wdth,wght@62..125,800&family=JetBrains+Mono:wght@400;500",
	radius: "0px",
	border: "3px",
	shadow: "none",
	heading: { weight: 800, case: "uppercase", tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The nav and kicker become the numbered meta row. The headline is as narrow as its longest word, so every
	// word gets its own 122 px row standing on a decor rule; SOMETHING runs off the right edge and KEEP off the bottom.
	// The rest of the copy sits in the orange field.
	css: `
		[data-part=nav] header { position: absolute; inset: 0 0 auto; height: 30px; max-width: none; padding: 0 8px; }
		[data-part=nav] header > span { gap: 6px; font: 500 11px var(--font-code); text-transform: uppercase; }
		[data-part=nav] header svg { width: 14px; height: 14px; }
		[data-part=nav] [data-slot=button] { position: absolute; top: 0; left: 675px; height: 30px; padding: 0; border-radius: 0; background: none; color: var(--black); font: 500 11px var(--font-code); text-transform: uppercase; }
		[data-part=kicker] { position: absolute; top: 0; left: 141px; color: var(--black); font: 500 11px/30px var(--font-code); letter-spacing: 0; }
		[data-part=headline] { position: absolute; top: 49px; left: 0; width: min-content; padding-left: 2px; font-size: 106px; font-stretch: 125%; line-height: 122px; }
		[data-part=sub] { position: absolute; top: 44px; left: 543px; width: 236px; max-width: none; color: var(--black); font-size: 15px; font-weight: 600; line-height: 1.3; }
		[data-part=card] { position: absolute; top: 290px; left: 543px; width: 243px; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--black); font: 500 11px var(--font-code); text-transform: uppercase; }
		[data-part=number] { margin: 4px 0 2px; font-size: 46px; font-weight: 800; font-stretch: 125%; letter-spacing: -0.03em; line-height: 1; }
		[data-part=caption] { color: var(--black); font-size: 13px; font-weight: 500; }
		[data-part=chart] { display: none; }
		[data-part=button] { position: absolute; top: 412px; left: 543px; height: auto; padding: 12px 16px; border-radius: 0; font: 500 13px var(--font-code); text-transform: uppercase; }
		[data-part=button] svg { display: none; }
	`,
} satisfies Style
