import type { Style } from "@/theme"
import Decor from "./decor/renaissance"

export default {
	name: "Renaissance / classical",
	family: "Art and historical movements",
	fonts: { heading: "Cormorant Garamond", body: "EB Garamond", mono: "Cinzel" },
	google:
		"family=Cinzel:wght@500&family=Cormorant+Garamond:ital,wght@0,500;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.005em" },
	specimen: "center",
	decor: Decor,
	// [Agent] A centred title page in the left column, Cinzel (the "mono" slot) for inscriptional caps. The rule under the
	// headline is one pseudo-element: a clip-path traces two hairlines and the diamond between them (joined by zero-width edges), and a hard-stop
	// gradient colours the diamond red-chalk.
	css: `
		[data-part=nav] header { width: 404px; max-width: none; margin: 0; padding: 30px 0 0 48px; justify-content: center; }
		[data-part=nav] header > span { gap: 10px; color: var(--umber); font: 500 15px var(--font-code); letter-spacing: .3em; text-transform: uppercase; }
		[data-part=nav] header svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 0 396px 12px 48px; }
		[data-part=copy] { width: 356px; gap: 0; }
		[data-part=kicker] { margin-bottom: 18px; padding-left: .34em; color: var(--sanguine); font: 500 12px var(--font-code); letter-spacing: .34em; }
		[data-part=headline] { font-size: 56px; line-height: .98; }
		[data-part=accent] { display: block; font-style: italic; }
		[data-part=headline]::after { content: ""; display: block; width: 135px; height: 7px; margin: 22px auto 18px; background: linear-gradient(90deg, oklch(0.28 0.03 55 / .6) 0 54px, var(--sanguine) 54px 81px, oklch(0.28 0.03 55 / .6) 81px); clip-path: polygon(0 3px, 54px 3px, 54px 3.5px, 64px 3.5px, 67.5px 0, 71px 3.5px, 81px 3.5px, 81px 3px, 100% 3px, 100% 4px, 81px 4px, 81px 3.5px, 71px 3.5px, 67.5px 7px, 64px 3.5px, 54px 3.5px, 54px 4px, 0 4px); }
		[data-part=sub] { max-width: none; color: var(--umber); font-size: 16.5px; line-height: 1.5; }
		[data-part=button] { margin-top: 24px; height: auto; padding: 11px 28px 12px; border-radius: 0; font: 500 16px var(--font-body); font-variant: small-caps; letter-spacing: .1em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { top: 362px; left: 488px; right: auto; bottom: auto; width: 196px; padding: 10px 14px 11px; gap: 0; border: 0; border-radius: 0; text-align: center; transform: rotate(-2.5deg); background: linear-gradient(100deg, var(--lead-white) 0%, var(--gesso) 55%, oklch(0.86 0.035 78) 100%); box-shadow: 5px 7px 9px oklch(0.10 0.02 55 / .55); }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { color: var(--sanguine); font: 500 10px var(--font-code); letter-spacing: .28em; text-transform: uppercase; }
		[data-part=number] { margin: 4px 0 2px; font-size: 36px; font-weight: 500; line-height: 1; }
		[data-part=caption] { color: var(--umber); font-size: 14px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
