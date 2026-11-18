import type { Style } from "@/theme"
import Decor from "./decor/punk"

export default {
	name: "Punk",
	family: "Art and historical movements",
	fonts: { heading: "Archivo Black", body: "Courier Prime", mono: "Space Mono" },
	google:
		"family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Space+Mono:wght@700&family=Rubik+Mono+One&family=Sedgwick+Ave",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase" },
	specimen: "start",
	decor: Decor,
	// [Agent] The ransom note: every headline line is a different monospace face sized so one letter + its spacing is
	// exactly 44 px, so the letters land in the cut-out cells the decor draws. The text colour is four clipped
	// gradients, one per 62 px row, white over the black cells and black over the rest. The copy turns into a plain
	// block so the subline can flow inline: each line then gets its own bordered strip, like typed text cut out.
	css: `
		[data-part=nav] { position: absolute; top: 16px; right: 28px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { padding: 5px 10px; background: var(--xerox); color: var(--toner); font-size: 15px; text-transform: uppercase; transform: rotate(3deg); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; inset: 0; display: block; padding: 358px 210px 0 92px; text-indent: -28px; line-height: 32px; }
		[data-part=kicker], [data-part=headline], [data-part=button], [data-part=card] { position: absolute; margin: 0; text-indent: 0; }
		[data-part=kicker] { left: 64px; top: 40px; color: var(--fluo-pink); font: 34px "Sedgwick Ave"; letter-spacing: 0; text-transform: none; transform: rotate(-4deg); }
		[data-part=headline] { left: 60px; top: 84px; width: 520px; padding-left: 44px; text-indent: -44px; word-spacing: 600px; font: 700 50px/62px var(--font-body); letter-spacing: 14px; color: transparent;
			background-image: linear-gradient(90deg, var(--xerox) 0 44px, var(--toner) 44px), linear-gradient(90deg, var(--xerox) 0 44px, var(--toner) 44px), linear-gradient(90deg, var(--xerox) 0 44px, var(--toner) 44px), linear-gradient(90deg, var(--xerox) 0 44px, var(--toner) 44px);
			background-size: 220px 62px; background-repeat: repeat-x; background-position: 0 0, 132px 62px, 44px 124px, 176px 186px; background-clip: text; }
		[data-part=headline]::first-line { font: 700 50px/62px var(--font-code); letter-spacing: 13.4px; }
		[data-part=accent] { display: block; margin-left: -44px; padding-left: 220px; text-indent: -220px; font: 40px/62px "Rubik Mono One"; letter-spacing: 10px; }
		[data-part=accent]::first-line { font: 400 50px/62px var(--font-body); letter-spacing: 14px; }
		[data-part=sub] { display: inline; padding: 4px 10px; border: 1px solid var(--toner); background: var(--xerox); color: var(--toner); font-size: 15px; -webkit-box-decoration-break: clone; box-decoration-break: clone; }
		[data-part=button] { left: 66px; top: 422px; height: auto; padding: 12px 20px 11px; background: var(--toner); color: var(--xerox); font: 18px var(--font-display); letter-spacing: .02em; text-transform: uppercase; transform: rotate(-3deg); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 584px; top: 214px; width: 178px; padding: 22px 18px 24px; gap: 0; border: 0; box-shadow: none; background: var(--fluo-pink); color: var(--toner); transform: rotate(6deg);
			clip-path: polygon(2% 0, 30% 2%, 55% 0, 80% 2.5%, 100% 1%, 98% 30%, 100% 62%, 97.5% 100%, 70% 98%, 44% 100%, 18% 97.5%, 0 100%, 2% 70%, 0 38%); }
		[data-part=card] > div { padding: 0; gap: 0; align-items: flex-start; }
		[data-part=label] { color: var(--toner); font: 22px "Sedgwick Ave"; }
		[data-part=number] { margin-top: 4px; font-size: 50px; font-variant-numeric: normal; }
		[data-part=caption] { margin-top: 8px; padding: 2px 5px; background: var(--xerox); color: var(--toner); font: 700 13px var(--font-body); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
