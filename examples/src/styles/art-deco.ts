import type { Style } from "@/theme"
import Decor from "./decor/art-deco"

export default {
	name: "Art Deco",
	family: "Art and historical movements",
	fonts: { heading: "Limelight", body: "Josefin Sans", mono: "Bodoni Moda" },
	google: "family=Limelight&family=Josefin+Sans:wght@400;600&family=Bodoni+Moda:ital,opsz,wght@1,6..96,400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.04em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Strict symmetry inside the decor's ziggurat; the number sits in the setting sun. The gold rule under the
	// headline is one pseudo-element whose clip-path traces two hairlines and the lozenge between them. Bodoni (the
	// "mono" slot) sets the italic text accents, Josefin the tracked labels.
	css: `
		[data-part=nav] header { position: absolute; top: 57px; inset-inline: 0; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { gap: 8px; color: var(--gold); font-size: 17px; letter-spacing: .12em; text-transform: uppercase; }
		[data-part=nav] header svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 104px 0 0; }
		[data-part=copy] { width: 440px; gap: 0; }
		[data-part=kicker] { padding-left: .5em; color: var(--gold); font: 600 12px var(--font-body); letter-spacing: .5em; }
		[data-part=headline] { margin-top: 18px; font-size: 39px; line-height: 1.12; }
		[data-part=headline]::after { content: ""; display: block; width: 166px; height: 10px; margin: 16px auto 14px; background: var(--gold); clip-path: polygon(0 4.5px, 70px 4.5px, 70px 5px, 78px 5px, 83px 0, 88px 5px, 96px 5px, 96px 4.5px, 100% 4.5px, 100% 5.5px, 96px 5.5px, 96px 5px, 88px 5px, 83px 10px, 78px 5px, 70px 5px, 70px 5.5px, 0 5.5px); }
		[data-part=sub] { max-width: 392px; color: oklch(0.94 0.03 90 / .85); font: italic 400 16px/1.5 var(--font-code); }
		[data-part=button] { margin-top: 20px; height: auto; padding: 11px 30px 9px; border: 1px solid var(--gold); border-radius: 0; outline: 1px solid var(--gold); outline-offset: 3px; background: var(--emerald); color: var(--cream); font: 600 12px var(--font-body); letter-spacing: .32em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { top: 416px; left: 300px; right: auto; bottom: auto; width: 200px; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; text-align: center; }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { padding-left: .4em; color: var(--gold); font: 600 10px var(--font-body); letter-spacing: .4em; text-transform: uppercase; }
		[data-part=number] { color: var(--gold); font-size: 32px; line-height: 1.12; letter-spacing: .04em; }
		[data-part=caption] { color: oklch(0.94 0.03 90 / .8); font: italic 13px var(--font-code); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
