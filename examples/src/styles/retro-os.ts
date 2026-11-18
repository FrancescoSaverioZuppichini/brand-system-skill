import type { Style } from "@/theme"
import Decor from "./decor/retro-os"

export default {
	name: "Retro OS (Classic Mac / Windows 9x)",
	family: "Digital UI eras",
	fonts: { heading: "Pixelify Sans", body: "Pixelify Sans", mono: "VT323" },
	google: "family=Pixelify+Sans:wght@400;700&family=Silkscreen&family=VT323",
	radius: "0px",
	border: "0px",
	shadow:
		"inset -1px -1px var(--pitch), inset 1px 1px var(--light), inset -2px -2px var(--bevel-shadow), inset 2px 2px var(--highlight)",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The logo is the window's title, the subline a sunken text field, the button the dialog default (black ring
	// plus a dotted focus rectangle), and the number card is itself the "Still in use" dialog: its label becomes the
	// active title bar and its bar chart the progress bar.
	css: `
		--raised: inset -1px -1px var(--pitch), inset 1px 1px var(--light), inset -2px -2px var(--bevel-shadow), inset 2px 2px var(--highlight);
		--sunken: inset -1px -1px var(--highlight), inset 1px 1px var(--bevel-shadow), inset -2px -2px var(--light), inset 2px 2px var(--pitch);
		[data-part=nav] { position: absolute; top: 29px; left: 37px; }
		[data-part=nav] header { height: 20px; padding: 0 0 0 4px; }
		[data-part=nav] header > span { gap: 5px; color: var(--light); font-size: 14px; font-weight: 700; }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 55px; top: 87px; width: 418px; gap: 0; }
		[data-part=kicker] { color: var(--titlebar); font: 400 12px/1 Silkscreen; letter-spacing: .04em; text-transform: none; }
		[data-part=headline] { margin: 10px 0 14px; font-size: 46px; line-height: .98; }
		[data-part=sub] { max-width: none; padding: 8px 10px; background: var(--highlight); box-shadow: var(--sunken); color: var(--pitch); font: 400 18px/1.1 var(--font-code); }
		[data-part=button] { align-self: flex-end; margin-top: 16px; height: auto; padding: 8px 18px; background: var(--window); box-shadow: 0 0 0 1px var(--pitch), var(--raised); color: var(--pitch); font-size: 15px; font-weight: 700; outline: 1px dotted var(--pitch); outline-offset: -5px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 504px; top: 250px; width: 272px; padding: 3px; gap: 0; border: 0; background: var(--window); box-shadow: var(--raised); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { display: flex; align-items: center; height: 20px; padding: 0 2px 0 4px; background: linear-gradient(90deg, var(--titlebar), var(--titlebar-fade)); color: var(--highlight); font-size: 14px; font-weight: 700; }
		[data-part=label]::after { content: "✕"; display: grid; place-items: center; width: 16px; height: 14px; margin-left: auto; background: var(--window); box-shadow: var(--raised); color: var(--pitch); font-size: 11px; }
		[data-part=number] { padding: 14px 14px 0 66px; font-family: var(--font-body); font-size: 44px; font-weight: 700; font-variant-numeric: normal; }
		[data-part=caption] { padding: 4px 0 0 64px; white-space: nowrap; color: var(--pitch); font: 400 20px/1 var(--font-code); }
		[data-part=chart] { height: 20px; margin: 10px 14px 13px; box-shadow: var(--sunken); background: repeating-linear-gradient(90deg, var(--titlebar) 0 9px, transparent 9px 11px) 4px 3px / 187px 14px no-repeat; }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
