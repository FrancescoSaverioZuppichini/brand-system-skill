import type { Style } from "@/theme"
import Decor from "./decor/neobrutalism"

export default {
	name: "Neobrutalism",
	family: "Digital UI eras",
	fonts: { heading: "Archivo Black", body: "Lexend", mono: "Space Mono" },
	google: "family=Archivo+Black&family=Lexend:wght@400;500;700&family=Space+Mono:wght@700",
	radius: "6px",
	border: "3px",
	shadow: "5px 5px 0 var(--black)",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every control gets the hard black outline and offset shadow, not only cards: that is the whole style.
	css: `
		[data-slot=button], [data-slot=badge] { border: 3px solid var(--black); box-shadow: 4px 4px 0 var(--black); font-weight: 700; }
		[data-part=nav] header { padding-top: 22px; }
		[data-part=button] { height: 48px; padding: 0 22px; font-size: 16px; }
		[data-part=nav] header > span { border: 3px solid var(--black); box-shadow: 4px 4px 0 var(--black); background: var(--white); padding: 6px 12px; border-radius: 6px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: center; padding-right: 290px; }
		[data-part=kicker] { width: fit-content; background: var(--lime); border: 3px solid var(--black); box-shadow: 3px 3px 0 var(--black); padding: 4px 12px; color: var(--black); font-family: var(--font-code); transform: rotate(-3deg); }
		[data-part=headline] { font-size: 52px; line-height: 1.02; }
		[data-part=accent] { display: inline-block; margin-top: 8px; padding: 0 10px 4px; background: var(--pink); border: 3px solid var(--black); box-shadow: 4px 4px 0 var(--black); border-radius: 6px; }
		[data-part=sub] { color: var(--black); font-weight: 500; }
		[data-part=card] { position: absolute; right: 30px; top: 150px; width: 240px; transform: rotate(3deg); }
		[data-part=label] { width: fit-content; background: var(--lilac); border: 2px solid var(--black); padding: 1px 8px; color: var(--black); font-family: var(--font-code); font-weight: 700; text-transform: uppercase; }
		[data-part=number] { font-size: 54px; margin-top: 8px; }
		[data-part=caption] { color: var(--black); font-weight: 500; font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
