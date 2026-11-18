import type { Style } from "@/theme"
import Decor from "./decor/victorian"

export default {
	name: "Victorian",
	family: "Art and historical movements",
	fonts: { heading: "Abril Fatface", body: "Old Standard TT", mono: "Rye" },
	google:
		"family=Abril+Fatface&family=Rye&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Holtwood+One+SC",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.01em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Every line of the playbill in a different face, from one live headline: a huge word-spacing puts each word
	// of "Make something" and of the accent on its own line, so ::first-line can recast the first word of each block
	// (MAKE in red Tuscan, "people" in small italic) while the rest stays fat face and shaded slab.
	css: `
		[data-part=nav] header { position: absolute; top: 150px; left: 622px; width: 134px; height: 196px; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { flex-direction: column; gap: 6px; padding: 8px 4px 6px; background: var(--paper); color: var(--red); font: 30px/1 var(--font-code); }
		[data-part=nav] header svg { width: 30px; height: 30px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 36px 0 0; }
		[data-part=copy] { width: 420px; gap: 0; }
		[data-part=kicker] { height: 34px; color: var(--paper); font: italic 17px/34px var(--font-body); letter-spacing: .06em; text-transform: none; }
		[data-part=headline] { margin-top: 6px; font-size: 70px; line-height: 1.02; word-spacing: 800px; }
		[data-part=headline]::first-line { color: var(--red); font: 34px/1.1 var(--font-code); letter-spacing: .3em; }
		[data-part=accent] { display: block; font: 68px/1.1 "Holtwood One SC"; letter-spacing: .12em; text-shadow: 3px 3px 0 var(--red); }
		[data-part=accent]::first-line { font: italic 30px/1 var(--font-body); letter-spacing: 0; text-transform: lowercase; text-shadow: none; }
		[data-part=sub] { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--ink); max-width: none; padding-inline: 10px; color: var(--ink); font-size: 15.5px; line-height: 1.45; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 10px 30px; border-radius: 0; background: var(--green); font: 700 13px var(--font-body); letter-spacing: .24em; text-transform: uppercase; mask: radial-gradient(circle 7px at 0 0, #0000 98%, #000) top left, radial-gradient(circle 7px at 100% 0, #0000 98%, #000) top right, radial-gradient(circle 7px at 0 100%, #0000 98%, #000) bottom left, radial-gradient(circle 7px at 100% 100%, #0000 98%, #000) bottom right; mask-size: 51% 51%; mask-repeat: no-repeat; }
		[data-part=button] svg { display: none; }
		[data-part=card] { top: 150px; left: 44px; right: auto; bottom: auto; width: 134px; height: 196px; justify-content: center; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; text-align: center; }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { color: var(--red); font: 700 10px var(--font-body); letter-spacing: .22em; text-transform: uppercase; }
		[data-part=number] { margin: 6px 0 4px; font-size: 34px; line-height: 1.05; }
		[data-part=caption] { max-width: 92px; color: var(--ink); font-size: 13px; font-style: italic; line-height: 1.25; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
