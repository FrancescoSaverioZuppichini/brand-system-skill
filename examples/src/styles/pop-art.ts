import type { Style } from "@/theme"
import Decor from "./decor/pop-art"

export default {
	name: "Pop art",
	family: "Art and historical movements",
	fonts: { heading: "Bangers", body: "Comic Neue", mono: "Archivo Black" },
	google: "family=Bangers&family=Comic+Neue:wght@700&family=Archivo+Black",
	radius: "0px",
	border: "3px",
	shadow: "6px 6px 0 var(--black)",
	heading: { weight: 400, case: "uppercase", tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A comic page: the headline in the speech bubble of the big panel, the kicker and the subline as yellow
	// caption boxes on its corners, the number inked into the burst, the button slapped into the action panel and the
	// logo as that panel's caption.
	css: `
		[data-part=nav] header { position: absolute; top: 297px; left: 499px; width: auto; max-width: none; padding: 5px 10px; border: 3px solid var(--black); background: var(--yellow); }
		[data-part=nav] header > span { gap: 6px; font: 700 15px var(--font-body); text-transform: uppercase; }
		[data-part=nav] header svg { width: 16px; height: 16px; }
		[data-part=nav] header svg .fill-primary { fill: var(--red); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 15px; left: 15px; padding: 6px 12px; border: 3px solid var(--black); background: var(--yellow); color: var(--black); font: 700 17px/1.3 var(--font-body); letter-spacing: .02em; }
		[data-part=headline] { position: absolute; top: 146px; left: 88px; width: 340px; font-size: 62px; line-height: .95; text-align: center; transform: rotate(-2deg); }
		[data-part=accent] { color: var(--red); }
		[data-part=sub] { position: absolute; bottom: 15px; left: 123px; width: 360px; max-width: none; padding: 6px 12px; border: 3px solid var(--black); background: var(--yellow); color: var(--black); font: 700 15px/1.3 var(--font-body); }
		[data-part=button] { position: absolute; top: 358px; left: 536px; width: 212px; height: auto; padding: 12px 0 10px; border: 4px solid var(--black); box-shadow: 6px 6px 0 var(--black); color: var(--black); font: 400 30px/1 var(--font-heading); letter-spacing: .04em; text-transform: uppercase; transform: rotate(-3deg); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 18px; left: 502px; width: 280px; height: 260px; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { margin-top: 76px; color: var(--black); font: 700 14px var(--font-body); letter-spacing: .06em; text-transform: uppercase; }
		[data-part=number] { margin-top: 2px; color: var(--red); font-size: 76px; line-height: 1; letter-spacing: .02em; -webkit-text-stroke: 2px var(--black); }
		[data-part=caption] { position: absolute; right: -3px; bottom: -3px; padding: 6px 12px; border: 3px solid var(--black); background: var(--yellow); color: var(--black); font: 700 13px/1.3 var(--font-body); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
