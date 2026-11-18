import type { Style } from "@/theme"
import Decor from "./decor/collage"

const scrap = "box-shadow: 2px 3px 0 oklch(0 0 0 / .2);"
const tape =
	'content: ""; position: absolute; width: 64px; height: 20px; background: oklch(0.90 0.04 90 / .7);'

export default {
	name: "Collage",
	family: "Illustration and imagery",
	fonts: { heading: "Instrument Serif", body: "Archivo", mono: "Courier Prime" },
	google:
		"family=Instrument+Serif&family=Archivo:ital,wght@0,500;0,800;1,800&family=Courier+Prime:wght@400;700",
	radius: "0px",
	border: "0px",
	shadow: "2px 3px 0 oklch(0 0 0 / .2)",
	heading: { weight: 400 },
	specimen: "start",
	decor: Decor,
	// [Agent] Every text block is its own scrap of paper, cut, tilted and taped: the headline's first line on a torn
	// white strip (an h1::before with a ragged clip-path, so the accent can sit outside it), the accent on red paper in
	// heavy italic sans for the type-as-cut-out scale clash. The logo moves top-right as one more scrap.
	css: `
		[data-part=nav] { position: absolute; top: 0; right: 0; z-index: 1; }
		[data-part=nav] header { padding: 16px 22px; }
		[data-part=nav] header > span { ${scrap} padding: 7px 12px; background: var(--bond); font-family: var(--font-body); font-weight: 800; font-size: 15px; letter-spacing: .08em; text-transform: uppercase; transform: rotate(3deg); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 50px 0 0 40px; }
		[data-part=copy] { flex: none; width: 380px; gap: 0; }
		[data-part=kicker] { position: relative; ${scrap} width: fit-content; margin-left: 14px; padding: 9px 14px; background: var(--bond); font-family: var(--font-code); font-size: 13px; font-weight: 700; letter-spacing: .08em; color: var(--ink); transform: rotate(-3deg); }
		[data-part=kicker]::before { ${tape} left: -26px; top: -6px; transform: rotate(-30deg); }
		[data-part=headline] { position: relative; isolation: isolate; width: fit-content; margin-top: 14px; padding: 10px 22px 12px 18px; font-size: 60px; line-height: 1; }
		[data-part=headline]::before { content: ""; position: absolute; inset: 0 0 auto; height: 82px; background: var(--bond); z-index: -1; transform: rotate(-1.5deg); filter: drop-shadow(2px 3px 0 oklch(0 0 0 / .2)); clip-path: polygon(0 4%, 22% 0, 48% 5%, 76% 1%, 100% 3%, 98% 52%, 100% 100%, 70% 96%, 40% 100%, 12% 95%, 1% 100%, 2% 48%); }
		[data-part=accent] { display: block; width: fit-content; margin: 10px 0 0 6px; padding: 10px 18px; ${scrap} background: var(--vermilion); color: var(--bond); font-family: var(--font-body); font-style: italic; font-weight: 800; font-size: 44px; letter-spacing: -0.02em; transform: rotate(1.5deg); }
		[data-part=sub] { ${scrap} width: 332px; margin: 10px 0 0 12px; padding: 12px 16px; background: var(--newsprint); color: var(--ink); font-size: 13.5px; line-height: 1.5; transform: rotate(-1deg); }
		[data-part=button] { ${scrap} margin: 36px 0 0 20px; height: auto; padding: 16px 22px; border-radius: 0; font-weight: 800; font-size: 14px; letter-spacing: .1em; text-transform: uppercase; transform: rotate(-2deg); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 270px; top: 382px; width: auto; padding: 12px 0 14px; gap: 0; border-radius: 0; border-left: 6px dashed var(--paper); transform: rotate(3deg); }
		[data-part=card]::before { ${tape} right: -20px; top: -8px; transform: rotate(35deg); }
		[data-part=card] > div { padding: 0 18px; gap: 0; font-family: var(--font-code); }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-size: 40px; line-height: 1; margin: 4px 0 2px; }
		[data-part=caption] { font-family: var(--font-code); font-size: 12px; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
