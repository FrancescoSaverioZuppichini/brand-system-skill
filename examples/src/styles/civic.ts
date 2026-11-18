import type { Style } from "@/theme"
import Decor from "./decor/civic"

export default {
	name: "Government / civic (GOV.UK)",
	family: "Industry-coded languages",
	fonts: { heading: "Public Sans", body: "Public Sans", mono: "IBM Plex Mono" },
	google: "family=Public+Sans:wght@400;700&family=IBM+Plex+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] GOV.UK's grid in miniature: black header with the blue rule, a 2/3 column of 19 px body copy, the green
	// start button with its chevron and drop edge, and the number as a plain aside under a blue top rule. The logo is
	// shown in its keyboard-focus state (yellow fill, black underline), the system's most recognisable detail.
	css: `
		[data-part=nav] { background: var(--ink); }
		[data-part=nav] header { box-sizing: content-box; height: 46px; margin: 0 30px; padding: 10px 0 0; max-width: none; width: auto; align-items: flex-start; border-bottom: 10px solid var(--link); }
		[data-part=nav] header > span { margin-top: 4px; padding: 3px 2px 1px; background: var(--focus); color: var(--ink); font-weight: 700; font-size: 30px; line-height: 30px; letter-spacing: -0.01em; box-shadow: 0 -2px var(--focus), 0 4px var(--ink); }
		[data-part=nav] header > span svg, [data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; gap: 30px; padding: 76px 30px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 27px; line-height: 30px; font-weight: 400; letter-spacing: 0; text-transform: none; color: var(--slate); margin-bottom: 5px; }
		[data-part=headline] { font-size: 48px; line-height: 50px; margin-bottom: 25px; }
		[data-part=sub] { font-size: 19px; line-height: 25px; color: var(--ink); max-width: none; margin-bottom: 25px; }
		[data-part=button] { height: auto; padding: 11px 16px 9px 14px; gap: 12px; border-radius: 0; font-size: 24px; line-height: 30px; font-weight: 700; box-shadow: 0 2px 0 var(--moss); }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; width: 17px; height: 19px; background: currentColor; clip-path: polygon(0 0, 39% 0, 100% 50%, 39% 100%, 0 100%, 61% 50%); }
		[data-part=card] { width: 236px; margin-top: 9px; padding: 12px 0 0; gap: 0; border: 0; border-top: 2px solid var(--link); border-radius: 0; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 19px; line-height: 25px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
		[data-part=number] { font-size: 64px; line-height: 64px; font-weight: 700; letter-spacing: -0.01em; }
		[data-part=caption] { font-size: 19px; line-height: 25px; color: var(--ink); margin-top: 6px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
