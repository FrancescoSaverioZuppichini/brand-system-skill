import type { Style } from "@/theme"
import Decor from "./decor/web-brutalism"

export default {
	name: "Web brutalism",
	family: "Digital UI eras",
	fonts: { heading: "Libre Caslon Text", body: "Libre Caslon Text", mono: "IBM Plex Mono" },
	google: "family=Libre+Caslon+Text:wght@400;700&family=IBM+Plex+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.045em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Browser defaults on purpose: an 8 px body margin, the logo as a plain underlined link, a huge default serif
	// headline whose last word alone turns harsh (a clipped gradient, since "people keep" is one span), a raw outset <button>, and the number card drawn as a bordered table (label | figure, then the caption
	// across both columns) with the one harsh colour behind the figure.
	css: `
		[data-part=nav] { position: absolute; top: 8px; left: 8px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--link); font: 400 14px/1 var(--font-code); text-decoration: underline; text-transform: lowercase; }
		[data-part=nav] header > span svg { display: none; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 8px; top: 39px; width: 784px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { color: var(--type); font: 400 14px/1 var(--font-code); letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin-top: 6px; font-size: 104px; line-height: .86; }
		[data-part=accent] { color: transparent; background: linear-gradient(90deg, var(--type) 0 348px, var(--harsh) 348px); background-clip: text; }
		[data-part=sub] { width: 450px; max-width: none; margin-top: 27px; color: var(--type); font-size: 17px; line-height: 1.35; }
		[data-part=button] { margin-top: 18px; height: auto; padding: 3px 8px; border: 2px outset var(--button-edge); border-radius: 0; background: var(--button-face); color: var(--type); font: 400 15px/1.3 var(--font-code); text-decoration: underline; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 524px; top: 354px; width: 268px; padding: 0; border: 0; border-radius: 0; background: none; }
		[data-part=card] > div { display: grid; grid-template-columns: 1fr auto; padding: 0; gap: 0; }
		[data-part=card] > div > * { margin: 0 0 -1px -1px; padding: 5px 7px; border: 1px solid var(--type); }
		[data-part=label] { color: var(--type); font-size: 15px; }
		[data-part=number] { width: 158px; background: var(--harsh); color: var(--paper); font-size: 46px; font-weight: 700; letter-spacing: -.02em; font-variant-numeric: normal; }
		[data-part=caption] { grid-column: 1 / -1; color: var(--type); font-size: 15px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
