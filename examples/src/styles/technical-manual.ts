import type { Style } from "@/theme"
import Decor from "./decor/technical-manual"

export default {
	name: "Technical manual (industrial)",
	family: "Modernist and print",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Doto:wght@700;900&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500",
	radius: "4px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Labels are lowercase mono with an orange status LED; the number card becomes the device's display, set in
	// the dot-matrix Doto, so the stat reads as a part of the object.
	css: `
		[data-part=frame] { background: var(--housing) radial-gradient(circle, oklch(0.18 0 0 / .16) .8px, transparent 1.2px) 0 0 / 16px 16px; }
		[data-part=nav] header { width: auto; max-width: none; margin: 0 32px; padding: 20px 0 10px; border-bottom: 1px solid var(--black); }
		[data-part=nav] header > span { gap: 8px; font: 500 12px var(--font-code); text-transform: lowercase; }
		[data-part=nav] header svg { width: 14px; height: 14px; }
		[data-part=nav] [data-slot=button] { height: auto; padding: 0; background: none; color: var(--graphite); font: 400 11px var(--font-code); text-transform: lowercase; }
		[data-part=body] { align-items: flex-start; padding: 22px 32px 0; }
		[data-part=copy] { flex: none; width: 372px; gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 10px; color: var(--black); font: 500 11px var(--font-code); letter-spacing: 0; text-transform: lowercase; }
		[data-part=kicker]::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--orange); }
		[data-part=headline] { margin-top: 18px; font-size: 44px; line-height: 1.02; }
		[data-part=sub] { margin-top: 18px; color: var(--black); font-size: 14px; line-height: 1.55; }
		[data-part=button] { margin-top: 26px; height: auto; gap: 12px; padding: 12px 16px; border-radius: 4px; font: 500 13px var(--font-code); text-transform: lowercase; }
		[data-part=button]::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--black); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 108px; left: 444px; width: 172px; height: 116px; padding: 10px 12px; gap: 0; border: 0; border-radius: 4px; box-shadow: none; background: var(--black); color: var(--white); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label], [data-part=caption] { color: oklch(0.98 0 0 / .6); font: 400 10px var(--font-code); text-transform: lowercase; }
		[data-part=number] { margin: 10px 0 8px; color: var(--orange); font: 900 46px/1 "Doto"; letter-spacing: .02em; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
