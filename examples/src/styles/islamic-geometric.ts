import type { Style } from "@/theme"
import Decor from "./decor/islamic-geometric"

export default {
	name: "Islamic geometric",
	family: "Art and historical movements",
	fonts: { heading: "Reem Kufi", body: "Amiri", mono: "Marcellus" },
	google: "family=Reem+Kufi:wght@500;700&family=Amiri:ital@0;1&family=Marcellus",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700 },
	specimen: "center",
	decor: Decor,
	// [Agent] Everything lives in the niche of the arch: a gold eight-point star (a clip-path) divides the headline from
	// the text, and the number card turns into one ruled line of label, figure and caption. Marcellus fills the mono
	// slot because it sets the inscriptional caps.
	css: `
		[data-part=nav] { position: absolute; top: 56px; left: 0; right: 0; }
		[data-part=nav] header { justify-content: center; padding: 0; }
		[data-part=nav] header > span { color: var(--lapis); font-size: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 96px 0 0; }
		[data-part=copy] { width: 340px; gap: 0; }
		[data-part=kicker] { padding-left: .3em; color: var(--terracotta); font: 13px var(--font-code); letter-spacing: .3em; }
		[data-part=headline] { margin-top: 12px; color: var(--lapis); font-size: 34px; line-height: 1.12; }
		[data-part=headline]::after { content: ""; display: block; width: 14px; height: 14px; margin: 14px auto 0; background: var(--gold); clip-path: polygon(50% 0, 64% 36%, 100% 50%, 64% 64%, 50% 100%, 36% 64%, 0 50%, 36% 36%); }
		[data-part=sub] { margin-top: 12px; max-width: 320px; color: var(--ink); font-size: 13.5px; line-height: 1.55; }
		[data-part=button] { margin-top: 16px; height: auto; padding: 9px 22px 8px; outline: 1px solid var(--gold); outline-offset: -4px; font: 14px var(--font-code); letter-spacing: .12em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 50%; right: auto; bottom: auto; top: 352px; width: auto; transform: translateX(-50%); padding: 12px 0 0; border: 0; border-top: 1px solid var(--gold); border-radius: 0; background: none; box-shadow: none; }
		[data-part=card] > div { flex-direction: row; align-items: center; gap: 14px; padding: 0; }
		[data-part=label] { width: 96px; color: var(--terracotta); font: 11px/1.3 var(--font-code); letter-spacing: .2em; text-align: right; text-transform: uppercase; }
		[data-part=number] { color: var(--lapis); font-size: 30px; font-weight: 700; }
		[data-part=caption] { width: 92px; color: var(--ink); font-size: 14px; font-style: italic; line-height: 1.2; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
