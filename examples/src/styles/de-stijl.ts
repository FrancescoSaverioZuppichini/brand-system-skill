import type { Style } from "@/theme"
import Decor from "./decor/de-stijl"

export default {
	name: "De Stijl",
	family: "Modernist and print",
	fonts: { heading: "Archivo Black", body: "Archivo", mono: "Archivo Narrow" },
	google: "family=Archivo+Black&family=Archivo+Narrow:wght@500;700&family=Archivo:wght@400;500",
	radius: "0px",
	border: "6px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every part is lifted out of the flow and dropped into a plane of the decor's grid: the logo into the yellow
	// corner, the kicker into the top strip, the button becomes the red plane under the subline, the card the blue one.
	css: `
		[data-part=nav] header { position: absolute; top: 0; left: 700px; width: 100px; height: 64px; padding: 0; justify-content: center; }
		[data-part=nav] header > span { font-size: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 0; left: 188px; height: 64px; display: flex; align-items: center; color: var(--black); font: 700 15px var(--font-code); letter-spacing: .12em; }
		[data-part=headline] { position: absolute; top: 100px; left: 188px; width: 474px; font-size: 58px; line-height: .98; }
		[data-part=sub] { position: absolute; top: 332px; left: 188px; width: 280px; max-width: none; color: var(--black); font-size: 14px; line-height: 1.5; }
		[data-part=button] { position: absolute; top: 440px; left: 160px; width: 330px; height: 60px; justify-content: space-between; padding: 0 28px; border-radius: 0; font: 700 16px var(--font-code); text-transform: uppercase; letter-spacing: .1em; }
		[data-part=button] svg { width: 20px; height: 20px; }
		[data-part=card] { position: absolute; top: 310px; left: 500px; width: 300px; height: 190px; padding: 22px 26px; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: var(--blue); color: var(--white); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--white); font: 700 13px var(--font-code); text-transform: uppercase; letter-spacing: .12em; }
		[data-part=number] { margin: 12px 0 8px; font-size: 64px; }
		[data-part=caption] { color: var(--white); font-size: 14px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
