import type { Style } from "@/theme"
import Decor from "./decor/healthcare"

export default {
	name: "Healthcare",
	family: "Industry-coded languages",
	fonts: { heading: "Figtree", body: "Figtree", mono: "DM Mono" },
	google: "family=Figtree:wght@400;500;600;700&family=DM+Mono:wght@400",
	radius: "12px",
	border: "1px",
	shadow: "0 4px 16px oklch(0.30 0.05 230 / .10)",
	heading: { weight: 700, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Pills and soft shadows everywhere, teal for the one action. The card's coral heart tile is drawn with
	// pseudo-elements (a rounded square, then the heart cut by clip-path: path()) so the card keeps its own content.
	css: `
		[data-part=nav] header { padding: 26px 52px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; color: var(--deep); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 22px 52px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; width: fit-content; padding: 6px 14px 6px 8px; border-radius: 999px; background: var(--mist); color: var(--teal); font-size: 14px; font-weight: 600; letter-spacing: 0; text-transform: none; }
		[data-part=kicker]::before { content: "✓"; display: grid; place-items: center; width: 20px; height: 20px; border-radius: 50%; background: var(--teal); color: var(--linen); font-size: 12px; font-weight: 700; }
		[data-part=headline] { font-size: 50px; line-height: 1.06; margin: 20px 0 16px; white-space: nowrap; }
		[data-part=accent] { display: block; color: var(--teal); }
		[data-part=sub] { font-size: 16px; line-height: 1.55; color: var(--slate); max-width: 390px; }
		[data-part=button] { margin-top: 28px; height: auto; padding: 15px 26px; gap: 10px; border-radius: 999px; font-size: 16px; font-weight: 600; box-shadow: none; }
		[data-part=card] { position: absolute; left: 410px; top: 360px; width: auto; padding: 16px 0; gap: 0; border: 0; border-radius: 16px; }
		[data-part=card] > div { position: relative; padding: 0 22px 0 72px; gap: 0; }
		[data-part=card] > div::before { content: ""; position: absolute; left: 16px; top: 0; width: 42px; height: 42px; border-radius: 12px; background: var(--blush); }
		[data-part=card] > div::after { content: ""; position: absolute; left: 25px; top: 9px; width: 24px; height: 24px; background: var(--coral); clip-path: path("M12 21s-9-5.6-9-12A5 5 0 0 1 12 6a5 5 0 0 1 9 3c0 6.4-9 12-9 12Z"); }
		[data-part=label] { font-size: 13px; font-weight: 600; color: var(--slate); }
		[data-part=number] { font-size: 32px; font-weight: 700; line-height: 1.15; letter-spacing: -0.01em; color: var(--deep); }
		[data-part=caption] { font-size: 13px; color: var(--slate); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
