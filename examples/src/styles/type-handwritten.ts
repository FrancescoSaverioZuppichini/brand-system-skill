import type { Style } from "@/theme"
import Decor from "./decor/type-handwritten"

export default {
	name: "Handwritten / script",
	family: "Typographic voices",
	fonts: { heading: "Caveat", body: "DM Sans", mono: "DM Sans" },
	google: "family=Caveat:wght@500..700&family=DM+Sans:opsz,wght@9..40,400..600",
	radius: "8px",
	border: "1px",
	shadow: "0 10px 24px -8px oklch(0.25 0.03 260 / 0.25)",
	heading: { weight: 700, tracking: "0" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hand only sets the voice (kicker, headline, label, number); the text stays in DM Sans so it reads. The
	// headline leans on its own baseline, and the marker swash under the accent is an SVG mask so it takes the pigment.
	css: `
		[data-part=nav] header { max-width: none; padding: 30px 56px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 0 56px 56px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-family: var(--font-heading); font-size: 26px; font-weight: 600; letter-spacing: 0; text-transform: none; color: var(--marker); transform: rotate(-3deg); transform-origin: left; }
		[data-part=headline] { font-size: 108px; line-height: .84; transform: rotate(-2deg); transform-origin: left bottom; margin-top: 6px; }
		[data-part=accent] { position: relative; }
		[data-part=accent]::after { content: ""; position: absolute; left: 51%; right: -3%; bottom: -10px; height: 22px; background: var(--marker); mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 22' preserveAspectRatio='none'><path d='M3 14 C 50 6, 110 4, 197 9 M 20 19 C 70 13, 130 12, 188 15' fill='none' stroke='black' stroke-width='5' stroke-linecap='round'/></svg>") center / 100% 100% no-repeat; }
		[data-part=sub] { font-size: 17px; line-height: 1.5; max-width: 440px; margin-top: 30px; }
		[data-part=button] { margin-top: 26px; height: 48px; padding: 0 24px; font-size: 15px; font-weight: 600; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 56px; bottom: 56px; width: 224px; transform: rotate(1.5deg); padding: 16px 0 18px; gap: 0; }
		[data-part=card] > div { padding: 0 20px; }
		[data-part=label] { font-family: var(--font-heading); font-size: 24px; font-weight: 700; color: var(--marker); }
		[data-part=number] { font-size: 58px; font-weight: 700; line-height: .95; margin: 6px 0 4px; }
		[data-part=caption] { font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
