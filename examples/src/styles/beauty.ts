import type { Style } from "@/theme"
import Decor from "./decor/beauty"

export default {
	name: "Beauty / clean-girl",
	family: "Industry-coded languages",
	fonts: { heading: "Instrument Serif", body: "DM Sans", mono: "DM Mono" },
	google: "family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=DM+Mono",
	radius: "12px",
	border: "0px",
	shadow: "none",
	heading: { weight: 400, case: "lowercase", tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Everything lowercase and soft. Only "people" is italic: a huge word-spacing breaks the accent into one word
	// per line, ::first-line sets the first in italic, and a zero line-height with a hanging indent puts "keep" back
	// beside it on the same baseline.
	css: `
		[data-part=nav] { position: absolute; left: 56px; top: 30px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 26px; text-transform: lowercase; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--pop); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 56px; top: 96px; width: 380px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { font-size: 13px; font-weight: 400; letter-spacing: .02em; text-transform: lowercase; color: var(--pop); }
		[data-part=headline] { margin: 14px 0 22px; font-size: 64px; line-height: .95; }
		[data-part=accent] { display: block; margin-top: 30px; padding: 0 0 31px 152px; text-indent: -152px; line-height: 0; word-spacing: 400px; }
		[data-part=accent]::first-line { font-style: italic; }
		[data-part=sub] { max-width: 380px; font-size: 14px; line-height: 1.6; color: var(--cocoa); }
		[data-part=button] { margin-top: 28px; height: auto; padding: 14px 28px; border-radius: 999px; font-size: 14px; font-weight: 500; text-transform: lowercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: auto; right: 30px; top: 36px; width: 180px; padding: 14px 18px; gap: 0; border-radius: 12px; background: oklch(0.97 0.01 60 / .7); box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 12px; text-transform: lowercase; color: var(--cocoa); }
		[data-part=number] { font-size: 44px; line-height: 1.05; letter-spacing: 0; font-variant-numeric: normal; }
		[data-part=caption] { font-size: 12px; color: var(--mocha); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
