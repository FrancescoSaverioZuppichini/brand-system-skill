import type { Style } from "@/theme"
import Decor from "./decor/streamline"

export default {
	name: "Streamline Moderne",
	family: "Art and historical movements",
	fonts: { heading: "Righteous", body: "Jost", mono: "Red Hat Mono" },
	google: "family=Michroma&family=Righteous&family=Jost:wght@400;500&family=Red+Hat+Mono:wght@500",
	radius: "28px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Righteous has no italic, so the headline and the number are skewed for the forward lean of speed lettering.
	// The button is a red enamel pill in a chrome ring; the card is a mint radio dial with a navy bezel and chrome rim
	// (stacked box-shadow rings) and red pinstripes before its caption. Michroma sets the wide caps.
	css: `
		[data-part=nav] header { max-width: none; padding: 22px 56px 0; }
		[data-part=nav] header > span { gap: 10px; font: 400 13px "Michroma"; letter-spacing: .2em; text-transform: uppercase; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 22px 0 0 56px; }
		[data-part=copy] { flex: none; width: 470px; gap: 0; }
		[data-part=kicker] { color: var(--red); font: 400 12px "Michroma"; letter-spacing: .24em; }
		[data-part=headline] { margin-top: 14px; font-size: 56px; line-height: .98; transform: skewX(-9deg); transform-origin: 0 100%; }
		[data-part=sub] { margin-top: 18px; max-width: 400px; color: var(--navy); font-size: 16px; line-height: 1.5; }
		[data-part=button] { margin-top: 22px; height: auto; padding: 12px 28px; border-radius: 999px; background: linear-gradient(oklch(0.66 0.19 27), var(--red) 55%, oklch(0.48 0.18 27)); box-shadow: inset 0 1px 0 oklch(1 0 0 / .5), 0 0 0 3px var(--cream), 0 0 0 5px var(--chrome); font-size: 15px; font-weight: 500; letter-spacing: .04em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 42px; left: 574px; width: 214px; padding: 16px 18px 14px; gap: 0; border: 0; border-radius: 28px; background: linear-gradient(oklch(0.93 0.04 165), var(--mint)); box-shadow: inset 0 2px 0 oklch(1 0 0 / .7), 0 0 0 4px var(--navy), 0 0 0 9px var(--chrome), 0 0 0 10px oklch(0.55 0.02 255); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--navy); font: 500 11px var(--font-code); letter-spacing: .12em; text-transform: uppercase; }
		[data-part=number] { font-size: 44px; line-height: 1.05; transform: skewX(-9deg); transform-origin: 0 100%; }
		[data-part=caption] { color: var(--navy); font-size: 13px; }
		[data-part=caption]::before { content: ""; display: block; height: 10px; margin: 10px 0 8px; border-radius: 2px; background: repeating-linear-gradient(var(--red) 0 2px, transparent 2px 4px); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
