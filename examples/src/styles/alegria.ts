import type { Style } from "@/theme"
import Decor from "./decor/alegria"

export default {
	name: 'Corporate Memphis ("Alegria")',
	family: "Illustration and imagery",
	fonts: { heading: "Poppins", body: "Poppins", mono: "DM Mono" },
	google: "family=Poppins:wght@400;500;600;700&family=DM+Mono:wght@400",
	radius: "14px",
	border: "0px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The 2018 tech-marketing kit: Poppins, white pill kicker, lilac pill button, and a soft white stat card
	// with a teal icon tile and the number inline with its caption (a grid: label across, number then caption).
	css: `
		[data-part=nav] header { padding: 20px 52px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; }
		[data-part=nav] [data-slot=button] { border-radius: 99px; padding: 0 16px; font-weight: 600; }
		[data-part=body] { align-items: flex-start; padding: 10px 0 0 52px; }
		[data-part=copy] { flex: none; width: 360px; gap: 0; }
		[data-part=kicker] { width: fit-content; padding: 6px 12px; border-radius: 99px; background: var(--white); font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: none; color: var(--lilac); }
		[data-part=headline] { font-size: 37px; line-height: 1.12; margin: 18px 0 14px; }
		[data-part=sub] { font-size: 14px; line-height: 1.65; color: var(--navy); opacity: .8; max-width: 320px; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 13px 26px; border-radius: 99px; font-size: 14px; font-weight: 600; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 52px; bottom: 34px; width: auto; padding: 12px 0; gap: 0; border-radius: 18px; }
		[data-part=card] > div { display: grid; grid-template-columns: auto auto; align-items: baseline; column-gap: 6px; padding: 0 18px 0 66px; }
		[data-part=card] > div::before { content: ""; position: absolute; left: 12px; top: 50%; width: 40px; height: 40px; margin-top: -20px; border-radius: 12px; background: var(--teal); }
		[data-part=label] { grid-column: 1 / -1; font-size: 11px; font-weight: 500; color: var(--navy); opacity: .6; }
		[data-part=number] { font-weight: 700; font-size: 22px; line-height: 1.3; letter-spacing: 0; }
		[data-part=caption] { font-size: 11px; color: var(--navy); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
