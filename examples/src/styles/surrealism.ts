import type { Style } from "@/theme"
import Decor from "./decor/surrealism"

export default {
	name: "Surrealism",
	family: "Art and historical movements",
	fonts: { heading: "Instrument Serif", body: "Inter", mono: "DM Mono" },
	google: "family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&family=DM+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Calm type in the sky so the decor's object does the strangeness. The card stands on the sand like any other
	// object, so it gets the same low sun: a long shadow skewed to the left.
	css: `
		[data-part=nav] header { max-width: none; padding: 22px 60px 0; }
		[data-part=nav] header > span { font-size: 22px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 14px 0 0 60px; }
		[data-part=copy] { flex: none; width: 430px; gap: 0; }
		[data-part=kicker] { color: var(--dusk); font: 400 12px var(--font-code); letter-spacing: .14em; }
		[data-part=headline] { margin-top: 10px; font-size: 64px; line-height: .95; }
		[data-part=accent] { color: var(--terracotta); font-style: italic; }
		[data-part=sub] { margin-top: 14px; max-width: 400px; color: var(--dusk); font-size: 15px; line-height: 1.5; }
		[data-part=button] { margin-top: 18px; height: auto; padding: 12px 22px; border-radius: 0; font-size: 14px; font-weight: 500; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 376px; left: 92px; width: 202px; padding: 12px 16px 14px; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: var(--cloud); }
		[data-part=card]::after { content: ""; position: absolute; inset: auto 0 -16px; height: 16px; background: var(--dusk); opacity: .35; transform: skewX(-72deg); transform-origin: 0 0; filter: blur(1.5px); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--dusk); font: 400 11px var(--font-code); letter-spacing: .12em; text-transform: uppercase; }
		[data-part=number] { font-size: 40px; line-height: 1.05; }
		[data-part=caption] { color: var(--dusk); font-size: 12px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
