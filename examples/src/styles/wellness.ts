import type { Style } from "@/theme"
import Decor from "./decor/wellness"

export default {
	name: "Wellness / organic",
	family: "Industry-coded languages",
	fonts: { heading: "Fraunces", body: "Figtree", mono: "DM Mono" },
	google:
		"family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..500,0..100,0..1&family=Figtree:wght@400;500;600&family=DM+Mono",
	radius: "18px",
	border: "0px",
	shadow: "none",
	heading: { weight: 300, tracking: "-0.015em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Centred calm inside the arch: soft Fraunces (SOFT axis at 100), the last word in terracotta through a hard
	// gradient stop clipped to the text, and the number card shaped like a small arch.
	css: `
		[data-part=nav] { position: absolute; left: 36px; top: 26px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 22px; font-weight: 400; font-variation-settings: "SOFT" 100; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--terracotta); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding-top: 182px; }
		[data-part=copy] { gap: 0; max-width: 444px; }
		[data-part=kicker] { font-size: 12px; font-weight: 600; letter-spacing: .16em; color: var(--olive); }
		[data-part=headline] { margin: 12px 0 16px; font-size: 50px; line-height: 1.04; font-variation-settings: "SOFT" 100, "WONK" 0, "opsz" 96; }
		[data-part=accent] { display: table; margin: 0 auto; background: linear-gradient(90deg, var(--bark) 0 126px, var(--terracotta) 126px); background-clip: text; color: transparent; }
		[data-part=sub] { max-width: 362px; font-size: 14.5px; line-height: 1.6; color: var(--bark); }
		[data-part=button] { margin-top: 24px; height: auto; padding: 13px 28px; border-radius: 999px; font-size: 14.5px; font-weight: 500; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 638px; right: auto; top: 318px; bottom: auto; width: 144px; padding: 20px 14px 18px; gap: 0; border-radius: 62px 62px 18px 18px; text-align: center; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; align-items: center; }
		[data-part=label] { font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--olive); }
		[data-part=number] { font-size: 34px; font-weight: 400; line-height: 1.2; font-variation-settings: "SOFT" 100, "opsz" 72; font-variant-numeric: normal; }
		[data-part=caption] { max-width: 90px; font-size: 11.5px; line-height: 1.35; color: var(--bark); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
