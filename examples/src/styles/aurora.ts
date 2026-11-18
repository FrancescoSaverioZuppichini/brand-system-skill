import type { Style } from "@/theme"
import Decor from "./decor/aurora"

export default {
	name: "Aurora gradients",
	family: "Digital UI eras",
	fonts: { heading: "Inter Tight", body: "Inter Tight", mono: "Geist Mono" },
	google: "family=Inter+Tight:wght@400;500;600&family=Geist+Mono",
	radius: "16px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.04em" },
	specimen: "center",
	decor: Decor,
	// [Agent] The light is the image: a centred white hero over the glow, the accent words filled with the bloom colours,
	// a glowing pill button, and the number card as a frosted bar sitting on the planet's rim.
	css: `
		[data-part=nav] header { max-width: none; padding: 20px 32px; }
		[data-part=nav] header > span { font-size: 17px; font-weight: 600; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--cyan); }
		[data-part=nav] [data-slot=button] { border-radius: 999px; background: oklch(0.97 0.01 280 / .06); color: var(--frost); box-shadow: inset 0 0 0 1px oklch(0.97 0.01 280 / .14); }
		[data-part=body] { justify-content: flex-start; padding-top: 0; }
		[data-part=copy] { gap: 0; max-width: 700px; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px 6px 10px; border-radius: 999px; background: oklch(0.97 0.01 280 / .04); box-shadow: inset 0 0 0 1px oklch(0.97 0.01 280 / .14); font-size: 13px; font-weight: 400; letter-spacing: 0; text-transform: none; color: var(--mist); }
		[data-part=kicker]::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
		[data-part=headline] { font-size: 62px; line-height: 1.02; margin-top: 18px; }
		[data-part=accent] { display: table; margin: 0 auto; background: linear-gradient(90deg, var(--frost) 0 181px, var(--cyan) 183px, var(--violet) 255px, var(--pink) 312px); background-clip: text; color: transparent; }
		[data-part=sub] { font-size: 15px; line-height: 1.55; margin-top: 18px; max-width: 380px; color: var(--mist); }
		[data-part=button] { margin-top: 24px; height: auto; padding: 11px 20px; border-radius: 999px; font-size: 14px; font-weight: 600; box-shadow: 0 0 32px oklch(0.55 0.25 295 / .55); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 50%; right: auto; bottom: auto; top: 426px; width: auto; translate: -50% 0; padding: 12px 20px; border: 1px solid oklch(0.97 0.01 280 / .14); border-radius: 16px; background: oklch(0.15 0.03 280 / .55); backdrop-filter: blur(12px); box-shadow: inset 0 1px 0 oklch(0.97 0.01 280 / .12); }
		[data-part=card] > div { flex-direction: row; align-items: baseline; gap: 14px; padding: 0; white-space: nowrap; }
		[data-part=label] { font-size: 11px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--mist); }
		[data-part=number] { font-family: var(--font-body); font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 13px; color: var(--mist); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
