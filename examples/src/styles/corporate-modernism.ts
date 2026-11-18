import type { Style } from "@/theme"
import Decor from "./decor/corporate-modernism"

export default {
	name: "Corporate modernism",
	family: "Modernist and print",
	fonts: { heading: "IBM Plex Sans", body: "IBM Plex Sans", mono: "IBM Plex Mono" },
	google: "family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The logo reverses out of the blue field like a manual's cover; the right column runs one rule-topped stack
	// down to the grey data panel, whose number and caption share a baseline row under the label.
	css: `
		[data-part=nav] header { position: absolute; inset: 0 0 auto; max-width: none; padding: 30px 40px 0 48px; align-items: flex-start; }
		[data-part=nav] header > span { color: var(--white); font-size: 20px; font-weight: 600; }
		[data-part=nav] header svg .fill-primary { fill: var(--white); }
		[data-part=nav] header svg .fill-primary-foreground { fill: var(--blue); }
		[data-part=nav] [data-slot=button] { height: auto; margin-top: 8px; padding: 0; background: none; color: var(--steel); font: 400 11px var(--font-code); letter-spacing: .08em; text-transform: uppercase; }
		[data-part=body] { flex-direction: column; align-items: stretch; gap: 0; padding: 0 40px 40px 320px; }
		[data-part=copy] { flex: none; gap: 0; }
		[data-part=kicker] { position: absolute; top: 34px; left: 320px; color: var(--blue); font-size: 14px; font-weight: 500; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin-top: 90px; max-width: 420px; font-size: 48px; line-height: 1.05; }
		[data-part=sub] { margin-top: 22px; max-width: 400px; color: var(--ink); font-size: 15px; line-height: 1.5; }
		[data-part=button] { margin-top: 24px; height: auto; gap: 22px; padding: 13px 16px; border-radius: 0; font-size: 14px; }
		[data-part=card] { margin-top: auto; width: auto; height: 112px; padding: 16px; gap: 0; border: 0; border-top: 4px solid var(--blue); border-radius: 0; box-shadow: none; background: var(--grey); }
		[data-part=card] > div { flex: 1; display: grid; grid-template: auto 1fr / 220px 1fr; align-items: end; gap: 0; padding: 0; }
		[data-part=label] { grid-column: 1 / 3; align-self: start; color: var(--ink); font: 500 11px var(--font-code); letter-spacing: .08em; text-transform: uppercase; }
		[data-part=number] { font-size: 52px; font-weight: 300; line-height: .9; letter-spacing: -0.02em; }
		[data-part=caption] { padding-bottom: 4px; color: var(--steel); font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
