import type { Style } from "@/theme"
import Decor from "./decor/education"

const cap = encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="oklch(0.45 0.15 265)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M1.5 9 12 4l10.5 5L12 14Z"/><path d="M6 11.2V16c3.5 2.6 8.5 2.6 12 0v-4.8M21 9.5v6"/></svg>',
)

export default {
	name: "Education",
	family: "Industry-coded languages",
	fonts: { heading: "Lexend", body: "Lexend", mono: "JetBrains Mono" },
	google: "family=Lexend:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400",
	radius: "10px",
	border: "1px",
	shadow: "0 2px 4px oklch(0.25 0.02 265 / .05), 0 12px 28px oklch(0.25 0.02 265 / .10)",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Friendly authority: a highlighter band under the accent, a mortarboard tile on the kicker, and the number
	// card gets a medal (ribbons, disc with an inner ring, star) built from pseudo-elements cut with clip-path: path(),
	// painted in order so the disc sits on the ribbons.
	css: `
		[data-part=nav] header { padding: 24px 50px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 600; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 22px 360px 0 50px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--indigo); }
		[data-part=kicker]::before { content: ""; width: 28px; height: 28px; border-radius: 8px; background: url("data:image/svg+xml,${cap}") center / 18px no-repeat, var(--lavender); }
		[data-part=headline] { font-size: 46px; line-height: 1.12; margin: 18px 0 16px; }
		[data-part=accent] { background: linear-gradient(transparent 58%, var(--cream) 58% 92%, transparent 92%); padding: 0 4px; margin: 0 -4px; box-decoration-break: clone; }
		[data-part=sub] { font-size: 14.5px; font-weight: 300; line-height: 1.65; color: var(--slate); }
		[data-part=button] { margin-top: 28px; height: auto; padding: 14px 24px; gap: 10px; border-radius: 10px; font-size: 15px; font-weight: 500; }
		[data-part=card] { position: absolute; left: 426px; top: 336px; width: auto; padding: 16px 0; gap: 0; border: 0; border-radius: 14px; }
		[data-part=card]::before { content: ""; position: absolute; left: 16px; top: 26px; width: 40px; height: 52px; background: var(--indigo); clip-path: path("M10 26 4 50l9-5 5 7 5-22Z M30 26l6 24-9-5-5 7-5-22Z"); }
		[data-part=card] > div { padding: 0 22px 0 70px; gap: 0; }
		[data-part=card] > div::before { content: ""; position: absolute; left: 18px; top: 28px; width: 36px; height: 36px; border-radius: 50%; background: var(--honey); box-shadow: inset 0 0 0 5px var(--honey), inset 0 0 0 7px oklch(0.95 0.06 85); }
		[data-part=card] > div::after { content: ""; position: absolute; left: 16px; top: 26px; width: 40px; height: 52px; background: oklch(0.97 0.04 85); clip-path: path("m20 12 2.4 5 5.4.6-4 3.7 1.1 5.3-4.9-2.7-4.9 2.7 1.1-5.3-4-3.7 5.4-.6Z"); }
		[data-part=label] { font-size: 12.5px; font-weight: 500; color: var(--indigo); }
		[data-part=number] { font-size: 32px; font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 12.5px; font-weight: 300; color: var(--slate); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
