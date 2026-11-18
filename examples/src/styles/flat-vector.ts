import type { Style } from "@/theme"
import Decor from "./decor/flat-vector"

export default {
	name: "Flat vector illustration",
	family: "Illustration and imagery",
	fonts: { heading: "Outfit", body: "DM Sans", mono: "DM Mono" },
	google:
		"family=Outfit:wght@600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=DM+Mono:wght@500",
	radius: "8px",
	border: "1px",
	shadow: "0 6px 0 var(--tint)",
	heading: { weight: 700, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The illustration carries the style; the UI stays plain around it. The card's shadow is a flat offset in
	// the blob's tint, so even the one depth cue is a solid shape.
	css: `
		[data-part=nav] header { padding: 22px 52px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; letter-spacing: -0.02em; }
		[data-part=body] { align-items: flex-start; padding: 36px 0 0 52px; }
		[data-part=copy] { flex: none; width: 306px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; font-weight: 500; letter-spacing: .08em; color: var(--cobalt); }
		[data-part=headline] { font-size: 42px; line-height: 1.05; margin: 16px 0 18px; }
		[data-part=sub] { font-size: 15px; line-height: 1.5; color: var(--slate); }
		[data-part=button] { margin-top: 28px; height: auto; padding: 13px 22px; border-radius: 8px; font-size: 15px; font-weight: 500; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 44px; bottom: 34px; width: 200px; padding: 14px 0; gap: 0; border-radius: 8px; }
		[data-part=card] > div { padding: 0 16px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: var(--coral); }
		[data-part=number] { font-weight: 700; font-size: 30px; line-height: 1; margin: 8px 0 4px; }
		[data-part=caption] { font-size: 12px; color: var(--slate); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
