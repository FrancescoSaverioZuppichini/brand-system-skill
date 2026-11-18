import type { Style } from "@/theme"
import Decor from "./decor/japandi"

export default {
	name: "Japandi minimal",
	family: "Digital UI eras",
	fonts: { heading: "Cormorant", body: "Karla", mono: "DM Mono" },
	google: "family=Cormorant:ital,wght@0,300;1,300&family=Karla:wght@400;500&family=DM+Mono",
	radius: "2px",
	border: "1px",
	shadow: "none",
	heading: { weight: 300, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Low contrast and air: a light serif headline with its last words in italic, widely tracked clay small caps,
	// and the number card overlapping the still life the way a caption card sits on a shelf.
	css: `
		[data-part=nav] header { max-width: none; padding: 30px 60px 0; }
		[data-part=nav] header > span { font-size: 22px; font-weight: 300; letter-spacing: .02em; }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 60px; top: 116px; width: 384px; gap: 0; }
		[data-part=kicker] { font-size: 11px; font-weight: 500; letter-spacing: .34em; color: var(--clay); }
		[data-part=headline] { font-size: 56px; line-height: 1.02; margin-top: 26px; }
		[data-part=accent] { font-style: italic; }
		[data-part=sub] { font-size: 14px; line-height: 1.75; margin-top: 26px; color: var(--ash); max-width: 370px; }
		[data-part=button] { margin-top: 32px; height: auto; padding: 14px 26px; font-size: 11px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 404px; top: 360px; width: 208px; padding: 18px 20px 16px; gap: 0; background: var(--linen); border-color: oklch(0.62 0.06 50 / .28); border-radius: 2px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 10px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: var(--clay); }
		[data-part=number] { font-size: 38px; font-weight: 300; line-height: 1; margin: 6px 0 2px; }
		[data-part=caption] { font-size: 12px; color: var(--ash); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
