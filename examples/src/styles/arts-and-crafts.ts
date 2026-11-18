import type { Style } from "@/theme"
import Decor from "./decor/arts-and-crafts"

export default {
	name: "Arts & Crafts",
	family: "Art and historical movements",
	fonts: { heading: "IM Fell English", body: "Libre Caslon Text", mono: "Libre Caslon Text" },
	google: "family=IM+Fell+English:ital@0;1&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400 },
	specimen: "center",
	decor: Decor,
	// [Agent] A centred book page inside the decor's Kelmscott border; the logo is a linen label laid over the top border
	// like a title on a spine. The button and the number share one foot line, split by the card's own left rule.
	css: `
		[data-part=nav] header { position: absolute; top: 36px; inset-inline: 0; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { gap: 8px; padding: 3px 14px 4px; border: 1px solid var(--ink); background: var(--linen); font-size: 19px; }
		[data-part=nav] header svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 86px 0 0; }
		[data-part=copy] { width: 468px; gap: 0; }
		[data-part=kicker] { color: var(--madder); font: 400 13px var(--font-body); letter-spacing: .26em; }
		[data-part=headline] { margin-top: 12px; max-width: 420px; font-size: 52px; line-height: 1; }
		[data-part=accent] { color: var(--madder); font-style: italic; }
		[data-part=sub] { margin-top: 42px; max-width: 420px; color: var(--ink); font-size: 15px; line-height: 1.6; }
		[data-part=button] { position: absolute; top: 340px; left: 208px; height: auto; padding: 11px 22px; border-radius: 0; font: 400 15px var(--font-body); font-variant: small-caps; letter-spacing: .1em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { top: 325px; left: 412px; right: auto; bottom: auto; width: 200px; padding: 0 0 0 26px; gap: 0; border: 0; border-left: 1px solid var(--ink); border-radius: 0; box-shadow: none; background: none; }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--moss); font: 400 11px var(--font-body); letter-spacing: .22em; text-transform: uppercase; }
		[data-part=number] { color: var(--indigo); font-size: 34px; line-height: 1.05; }
		[data-part=caption] { color: var(--ink); font-size: 13px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
