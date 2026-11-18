import type { Style } from "@/theme"
import Decor from "./decor/clay-3d"

export default {
	name: "3D clay / soft 3D",
	family: "Illustration and imagery",
	fonts: { heading: "Fredoka", body: "Nunito", mono: "DM Mono" },
	google: "family=Fredoka:wght@500;600;700&family=Nunito:wght@500;700&family=DM+Mono:wght@500",
	radius: "22px",
	border: "0px",
	shadow: "0 12px 28px -12px var(--floor)",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The UI is clay too: the button is an inflated pill (dark inset at the bottom, light inset at the top, a
	// soft contact shadow), and the number card is a soft white slab with the figures in one row.
	css: `
		[data-part=nav] header { padding: 22px 56px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; font-size: 22px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 28px 0 0 56px; }
		[data-part=copy] { flex: none; width: 340px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; font-weight: 500; letter-spacing: .06em; color: var(--cobalt); }
		[data-part=headline] { font-size: 50px; line-height: 1.02; margin: 14px 0 16px; }
		[data-part=sub] { font-size: 15px; line-height: 1.55; color: var(--ink); opacity: .75; }
		[data-part=button] { margin-top: 28px; height: auto; padding: 16px 28px; border-radius: 99px; background: var(--clay-blue); font-family: var(--font-heading); font-weight: 600; font-size: 16px; box-shadow: inset 0 -5px 10px var(--cobalt), inset 0 4px 8px var(--blue-lit), 0 10px 20px -6px var(--floor); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 56px; bottom: 34px; width: auto; padding: 14px 0; gap: 0; }
		[data-part=card] > div { flex-direction: row; align-items: baseline; gap: 10px; padding: 0 20px; }
		[data-part=label] { font-family: var(--font-heading); font-size: 12px; font-weight: 600; color: var(--brick); }
		[data-part=number] { font-weight: 700; font-size: 28px; line-height: 1; }
		[data-part=caption] { font-size: 12px; color: var(--ink); opacity: .7; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
