import type { Style } from "@/theme"
import Decor from "./decor/cyberpunk"

export default {
	name: "Cyberpunk",
	family: "Digital UI eras",
	fonts: { heading: "Saira Condensed", body: "Share Tech Mono", mono: "Share Tech Mono" },
	google:
		"family=Saira+Condensed:wght@800&family=Chakra+Petch:wght@700&family=Share+Tech+Mono&family=Zen+Kaku+Gothic+New:wght@900",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, case: "uppercase", tracking: "0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The headline splits into cyan/magenta (two text-shadows) and runs through the decor's #glitch filter. To set
	// "people" in chrome and "keep" in acid, a huge word-spacing breaks the accent into two lines, ::first-line colours
	// the first, and a zero line-height with a hanging indent puts the second back beside it on the same baseline.
	css: `
		[data-part=nav] { position: absolute; left: 40px; bottom: 26px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: "Chakra Petch"; font-weight: 700; font-size: 18px; letter-spacing: .1em; text-transform: uppercase; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 40px; top: 42px; padding: 5px 22px 5px 10px; background: var(--magenta); color: var(--night); font-size: 13px; font-weight: 400; letter-spacing: .12em; clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%); }
		[data-part=headline] { left: 36px; top: 106px; font-size: 70px; line-height: .88; white-space: nowrap; text-shadow: -3px 0 oklch(0.86 0.14 200 / .85), 3px 0 oklch(0.65 0.27 345 / .85); filter: url(#glitch); }
		[data-part=accent] { display: block; margin-top: 31px; padding: 0 0 31px 216px; text-indent: -216px; line-height: 0; word-spacing: 600px; white-space: normal; color: var(--acid); }
		[data-part=accent]::first-line { color: var(--chrome); }
		[data-part=sub] { left: 40px; top: 270px; width: 410px; max-width: none; font-size: 13.5px; line-height: 1.6; color: var(--fog); }
		[data-part=sub]::before { content: ""; position: absolute; left: -14px; top: 4px; bottom: 4px; width: 3px; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
		[data-part=button] { left: 40px; top: 352px; height: auto; padding: 14px 34px 14px 22px; border-radius: 0; font-family: "Chakra Petch"; font-size: 15px; font-weight: 700; line-height: 1; letter-spacing: .1em; text-transform: uppercase; clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px)); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 580px; top: 196px; width: 176px; padding: 0; gap: 0; background: none; border: 0; color: var(--night); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--night); }
		[data-part=number] { font-family: "Chakra Petch"; font-size: 56px; font-weight: 700; letter-spacing: -0.02em; line-height: 1; margin: 2px 0 4px; font-variant-numeric: normal; }
		[data-part=caption] { padding-top: 8px; border-top: 2px solid var(--night); font-size: 13px; color: var(--night); }
		[data-part=chart] { width: 164px; height: 26px; margin-top: 44px; gap: 4px; }
		[data-part=chart] span { height: 100% !important; background: var(--night) !important; }
		[data-part=chart] span:nth-last-child(-n+3) { opacity: .25; }
	`,
} satisfies Style
