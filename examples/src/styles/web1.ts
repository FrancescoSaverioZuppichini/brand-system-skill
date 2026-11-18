import type { Style } from "@/theme"
import Decor from "./decor/web1"

export default {
	name: "Web 1.0 / GeoCities",
	family: "Digital UI eras",
	fonts: { heading: "Libre Caslon Text", body: "Libre Caslon Text", mono: "VT323" },
	google: "family=Libre+Caslon+Text:wght@400;700&family=Comic+Neue:wght@700&family=VT323",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 700 },
	specimen: "center",
	decor: Decor,
	// [Agent] Centred everything. The kicker is a marquee box, the sparkles are clip-path stars on the headline's own
	// pseudo-elements, and the number is a hit counter: VT323 spaced to 24 px cells over a tiled gradient of digit wheels.
	css: `
		[data-part=nav] { position: absolute; top: 33px; left: 20px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--lime); font: 700 18px "Comic Neue"; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; top: 0; left: 0; width: 800px; max-width: none; padding-top: 80px; gap: 0; }
		[data-part=kicker] { position: absolute; top: 30px; left: 120px; width: 560px; height: 30px; padding-left: 150px; overflow: hidden; border: 2px inset var(--silver); background: var(--black); color: var(--lime); font: 700 18px/26px "Comic Neue"; letter-spacing: 0; text-align: left; text-transform: none; white-space: nowrap; }
		[data-part=kicker]::before { content: "*~*~* "; }
		[data-part=kicker]::after { content: " *~*~* Introducing Keep *~*~*"; }
		[data-part=headline] { max-width: 560px; color: var(--gif-yellow); font-size: 52px; line-height: 1.02; text-shadow: 3px 3px 0 var(--red); }
		[data-part=headline]::before, [data-part=headline]::after { content: ""; display: inline-block; width: 30px; height: 30px; margin: 0 6px; vertical-align: middle; background: radial-gradient(circle, var(--white) 0 3px, var(--gif-yellow) 3.5px); clip-path: polygon(50% 0, 60% 36.7%, 100% 50%, 60% 63.3%, 50% 100%, 40% 63.3%, 0 50%, 40% 36.7%); }
		[data-part=sub] { margin-top: 12px; max-width: 480px; color: var(--white); font-size: 18px; line-height: 1.35; }
		[data-part=button] { position: absolute; top: 357px; left: 500px; height: auto; padding: 6px 14px; transform: translate(-50%, -50%); border: 3px outset var(--white); background: var(--silver); color: var(--link-blue); font-size: 17px; font-weight: 700; text-decoration: underline; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 205px; right: auto; top: 307px; bottom: auto; width: 197px; height: 100px; padding: 0; justify-content: center; border: 2px inset var(--silver); background: var(--silver); color: var(--black); text-align: center; }
		[data-part=card] > div { align-items: center; padding: 0; gap: 0; }
		[data-part=label] { color: var(--visited); font: 700 16px/1 "Comic Neue"; }
		[data-part=number] { width: 120px; margin: 6px 0 4px; padding: 3px; text-indent: 5px; box-sizing: content-box; overflow: hidden; background: repeating-linear-gradient(90deg, oklch(0.18 0 0) 0 22px, var(--black) 22px 24px) content-box, var(--black); color: var(--lime); font: 400 34px/32px var(--font-code); letter-spacing: 10.4px; text-align: left; }
		[data-part=caption] { color: var(--black); font-size: 14px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
