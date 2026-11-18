import type { Style } from "@/theme"

export default {
	name: "Minimalism",
	family: "Digital UI eras",
	fonts: { heading: "Inter", body: "Inter", mono: "Geist Mono" },
	google: "family=Inter:wght@400;500;600&family=Geist+Mono:wght@400",
	radius: "2px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.035em" },
	specimen: "center",
	// [Agent] Space does the grouping: one size of headline, grey for everything secondary, the blue dot is the only
	// colour, and the number card is just a hairline and three centred lines.
	css: `
		[data-part=nav] header { max-width: none; padding: 26px 40px; }
		[data-part=nav] header > span { font-size: 14px; font-weight: 500; }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding-top: 34px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 13px; font-weight: 400; text-transform: none; letter-spacing: 0; }
		[data-part=headline] { font-size: 40px; line-height: 1.08; margin-top: 18px; }
		[data-part=sub] { font-size: 15px; line-height: 1.6; max-width: 400px; margin-top: 18px; }
		[data-part=button] { margin-top: 34px; height: auto; padding: 12px 22px; font-size: 13px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 280px; right: auto; bottom: 40px; width: 240px; padding: 20px 0 0; border: 0; border-top: 1px solid var(--line); border-radius: 0; text-align: center; gap: 0; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 13px; line-height: 1.6; }
		[data-part=label]::before { content: ""; display: inline-block; width: 6px; height: 6px; margin: 0 8px 1px 0; border-radius: 50%; background: var(--blue); }
		[data-part=number] { font-family: var(--font-body); font-size: 15px; font-weight: 500; line-height: 1.6; letter-spacing: 0; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
