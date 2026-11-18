import type { Style } from "@/theme"
import Decor from "./decor/scandinavian"

export default {
	name: "Scandinavian",
	family: "Art and historical movements",
	fonts: { heading: "Figtree", body: "Figtree", mono: "DM Mono" },
	google: "family=Figtree:wght@400;500;600;700&family=DM+Mono:wght@400",
	radius: "12px",
	border: "1px",
	shadow: "0 2px 8px oklch(0.2 0.005 250 / .12)",
	heading: { weight: 600, case: "lowercase", tracking: "-0.025em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Daylight and one clear colour: the tomato dot, lamp and button are the only warm notes on white and birch.
	css: `
		[data-part=nav] { position: absolute; top: 36px; left: 64px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-weight: 700; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 64px; top: 124px; width: 380px; gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 8px; color: var(--forest); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; }
		[data-part=kicker]::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--tomato); }
		[data-part=headline] { margin-top: 16px; font-size: 50px; line-height: 1.05; }
		[data-part=sub] { margin-top: 20px; font-size: 15px; line-height: 1.6; color: var(--pebble); }
		[data-part=button] { margin-top: 28px; height: auto; padding: 13px 22px; border-radius: 10px; font-size: 15px; font-weight: 600; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 404px; top: 350px; width: 212px; padding: 16px 18px; gap: 0; border: 0; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--pebble); font: 400 11px var(--font-code); letter-spacing: .08em; text-transform: uppercase; }
		[data-part=number] { font-size: 34px; font-weight: 700; line-height: 1.2; letter-spacing: -.02em; }
		[data-part=caption] { color: var(--pebble); font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
