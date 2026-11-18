import type { Style } from "@/theme"
import Decor from "./decor/art-nouveau"

export default {
	name: "Art Nouveau",
	family: "Art and historical movements",
	fonts: { heading: "Federant", body: "Cormorant", mono: "Marcellus SC" },
	google: "family=Federant&family=Cormorant:ital,wght@0,500;0,600;1,500&family=Marcellus+SC",
	radius: "4px",
	border: "1.5px",
	shadow: "none",
	heading: { weight: 400 },
	specimen: "center",
	decor: Decor,
	// [Agent] The copy sits inside the decor's halo with the logo at its crown, the button takes the arch shape, and the
	// number card lies flat along the plinth. Marcellus SC (the "mono" slot) sets every label.
	css: `
		[data-part=nav] header { position: absolute; top: 70px; inset-inline: 0; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { gap: 8px; font: 400 20px var(--font-code); letter-spacing: .08em; }
		[data-part=nav] header svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 114px 0 0; }
		[data-part=copy] { width: 400px; gap: 0; }
		[data-part=kicker] { color: var(--ink); font: 400 15px var(--font-code); letter-spacing: .24em; text-transform: none; }
		[data-part=headline] { margin-top: 14px; font-size: 40px; line-height: 1.08; }
		[data-part=sub] { margin-top: 16px; max-width: 360px; color: var(--ink); font-size: 16px; font-weight: 500; line-height: 1.4; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 9px 26px; border: 1.5px solid var(--ink); border-radius: 22px 22px 4px 4px; font: 400 14px var(--font-code); letter-spacing: .14em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { top: 424px; left: 180px; right: auto; bottom: auto; width: 440px; height: 52px; justify-content: center; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; }
		[data-part=card] > div { flex-direction: row; align-items: center; justify-content: center; gap: 14px; padding: 0; }
		[data-part=label] { color: var(--ink); font: 400 12px var(--font-code); letter-spacing: .16em; }
		[data-part=number] { font-size: 30px; }
		[data-part=caption] { width: 96px; color: var(--ink); font-size: 15px; font-style: italic; font-weight: 500; line-height: 1.1; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
