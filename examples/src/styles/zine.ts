import type { Style } from "@/theme"
import Decor from "./decor/zine"

export default {
	name: "Zine / DIY",
	family: "Modernist and print",
	fonts: { heading: "Archivo Black", body: "Courier Prime", mono: "Courier Prime" },
	google: "family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Mansalva",
	radius: "0px",
	border: "2px",
	shadow: "0 1px 0 var(--grey)",
	heading: { weight: 400, case: "uppercase", tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Letters cut from different print: the headline in Archivo Black caps, its first letter and the accent line in
	// typewriter lowercase, the accent's first letter back in caps; the decor puts a scrap of paper behind each letter.
	// The subline is a taped typewriter strip whose first-line highlight is a gradient placed by character count
	// (Courier is monospaced, 8.4 px a character at 14 px).
	css: `
		[data-part=nav] header { flex-direction: row-reverse; max-width: none; padding: 26px 44px 0; }
		[data-part=nav] header > span { padding: 6px 10px 5px; background: var(--scrap); box-shadow: 0 1px 0 var(--grey); font-size: 18px; text-transform: uppercase; transform: rotate(3deg); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 22px; left: 44px; color: var(--toner); font: 400 30px "Mansalva"; letter-spacing: 0; text-transform: none; transform: rotate(-4deg); }
		[data-part=headline] { position: absolute; top: 96px; left: 44px; width: 720px; font-size: 42px; line-height: 64px; letter-spacing: 11px; word-spacing: 14px; }
		[data-part=headline]::first-letter { font: 700 50px "Courier Prime"; text-transform: lowercase; }
		[data-part=accent] { display: block; font: 700 50px/64px "Courier Prime"; letter-spacing: 13px; text-transform: lowercase; }
		[data-part=accent]::first-letter { font: 400 42px "Archivo Black"; text-transform: uppercase; }
		[data-part=sub] { position: absolute; top: 252px; left: 40px; width: 488px; max-width: none; padding: 12px 16px; background: linear-gradient(var(--highlighter), var(--highlighter)) 335px 15px / 136px 17px no-repeat, var(--scrap); box-shadow: 0 1px 0 var(--grey); color: var(--toner); font-size: 14px; line-height: 1.55; transform: rotate(-1.2deg); }
		[data-part=button] { position: absolute; top: 400px; left: 60px; height: auto; padding: 12px 18px; border-radius: 0; font: 700 16px var(--font-body); letter-spacing: .08em; text-transform: uppercase; transform: rotate(-2deg); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 252px; left: 540px; width: 244px; padding: 26px 22px 24px; gap: 0; border: 0; border-radius: 0; box-shadow: none; filter: drop-shadow(0 1px 0 var(--grey)); transform: rotate(4deg); clip-path: polygon(0 3%, 9% 0, 22% 2%, 37% 0, 51% 3%, 66% 0, 80% 2%, 92% 0, 100% 3%, 98% 22%, 100% 41%, 97% 60%, 100% 79%, 98% 100%, 84% 97%, 70% 100%, 55% 97%, 41% 100%, 26% 97%, 12% 100%, 0 97%, 3% 76%, 0 54%, 2% 31%); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--toner); font: 700 13px var(--font-body); letter-spacing: .06em; text-transform: uppercase; }
		[data-part=number] { margin: 8px 0 6px; font-size: 58px; line-height: 1; }
		[data-part=caption] { color: var(--toner); font-size: 14px; line-height: 1.3; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
