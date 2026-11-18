import type { Style } from "@/theme"
import Decor from "./decor/holographic"

export default {
	name: "Holographic / iridescent",
	family: "Digital UI eras",
	fonts: { heading: "Unbounded", body: "Manrope", mono: "DM Mono" },
	google: "family=Unbounded:wght@600&family=Manrope:wght@500;700&family=DM+Mono:wght@500",
	radius: "999px",
	border: "2px",
	shadow: "0 18px 30px -16px oklch(0.55 0.12 300 / .45)",
	heading: { weight: 600, tracking: "-0.03em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Foil edges are a two-layer background: a white fill clipped to the padding box over the conic sheen clipped
	// to the border box, so a transparent border shows only the rainbow rim (the kicker pill and the number card).
	css: `
		--foil: conic-gradient(from 200deg, var(--lilac), var(--mint), var(--sky), var(--peach), var(--lilac), var(--mint), var(--peach), var(--sky), var(--lilac), var(--mint), var(--peach), var(--lilac));
		[data-part=nav] header { max-width: none; padding: 22px 32px; }
		[data-part=nav] header > span { font-size: 17px; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--lilac); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 50%; top: 22px; translate: -50% 0; padding: 7px 16px; border: 2px solid transparent; border-radius: 999px; background: linear-gradient(var(--white), var(--white)) padding-box, var(--foil) border-box; font: 500 11px/1 var(--font-code); letter-spacing: .16em; color: var(--ink); }
		[data-part=headline] { left: 0; right: 0; top: 214px; font-size: 50px; line-height: 1.04; text-align: center; }
		[data-part=accent] { display: block; }
		[data-part=sub] { left: 0; right: 0; top: 346px; max-width: none; margin: 0 auto; width: 370px; text-align: center; font-size: 14px; font-weight: 500; line-height: 1.6; color: var(--ink); }
		[data-part=button] { left: 50%; top: 410px; translate: -50% 0; height: auto; padding: 13px 26px; font-size: 14px; font-weight: 700; box-shadow: 0 0 0 4px oklch(1 0 0 / .7), 0 0 0 6px var(--lilac); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 588px; right: auto; top: 380px; bottom: auto; width: 200px; padding: 14px 20px; gap: 0; border: 2px solid transparent; border-radius: 28px; text-align: center; background: linear-gradient(oklch(1 0 0 / .86), oklch(1 0 0 / .86)) padding-box, var(--foil) border-box; }
		[data-part=card] > div { padding: 0; gap: 0; align-items: center; }
		[data-part=label] { font: 500 10px/1 var(--font-code); letter-spacing: .14em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-size: 26px; font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; margin: 6px 0 2px; }
		[data-part=caption] { font-size: 12px; font-weight: 500; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
