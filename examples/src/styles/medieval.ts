import type { Style } from "@/theme"
import Decor from "./decor/medieval"

export default {
	name: "Medieval / illuminated",
	family: "Art and historical movements",
	fonts: { heading: "UnifrakturCook", body: "EB Garamond", mono: "EB Garamond" },
	google: "family=UnifrakturCook:wght@700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700 },
	specimen: "start",
	decor: Decor,
	// [Agent] The headline's own first letter becomes the illuminated initial: floated with negative margins that cancel its
	// width (Chrome ignores width on ::first-letter), it leaves the line and lands in the decor's gilt frame while the text keeps its place. The number sits on
	// the shield, its label on the motto scroll, the logo above the arms.
	css: `
		[data-part=nav] header { position: absolute; top: 18px; left: 596px; width: 164px; max-width: none; padding: 0; justify-content: center; }
		[data-part=nav] header > span { gap: 8px; font-size: 28px; font-weight: 700; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 56px; left: 230px; color: var(--vermilion); font: 600 15px var(--font-body); letter-spacing: .2em; }
		[data-part=headline] { position: absolute; top: 74px; left: 228px; width: 340px; font-size: 54px; line-height: 56px; }
		[data-part=headline]::first-letter { float: left; margin: -32px 46px 0 -136px; color: var(--gold); font-size: 116px; line-height: 150px; text-shadow: 1px 1px 0 var(--ink), -1px -1px 0 var(--ink), 1px -1px 0 var(--ink), -1px 1px 0 var(--ink), 0 2px 0 var(--ink); }
		[data-part=accent] { display: block; }
		[data-part=sub] { position: absolute; top: 249px; left: 160px; width: 400px; max-width: none; color: var(--ink); font-size: 17.5px; line-height: 28px; }
		[data-part=sub]::before { content: "¶"; margin-right: 4px; color: var(--vermilion); }
		[data-part=button] { position: absolute; top: 331px; left: 160px; height: auto; padding: 9px 22px 10px; border-radius: 0; font: 500 17px var(--font-body); font-variant: small-caps; letter-spacing: .1em; outline: 3px solid var(--gold); outline-offset: -6px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 70px; left: 596px; width: 164px; height: 290px; padding: 0; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: none; text-align: center; }
		[data-part=card] > div { align-items: center; gap: 0; padding: 0; }
		[data-part=label] { margin-top: 13px; color: var(--ink); font: 600 13px var(--font-body); letter-spacing: .2em; text-transform: uppercase; }
		[data-part=number] { margin-top: 78px; color: var(--gold); font: 600 38px/1.2 var(--font-body); text-shadow: 0 1px 0 oklch(0.30 0.10 268); }
		[data-part=caption] { margin-top: 104px; color: var(--ink); font-size: 16px; font-style: italic; white-space: nowrap; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
