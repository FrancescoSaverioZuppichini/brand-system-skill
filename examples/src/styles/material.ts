import type { Style } from "@/theme"
import Decor from "./decor/material"

export default {
	name: "Material Design (M2 → M3 Expressive)",
	family: "Digital UI eras",
	fonts: { heading: "Roboto Flex", body: "Roboto Flex", mono: "Roboto Mono" },
	google: "family=Roboto+Flex:opsz,wght@8..144,400;8..144,500;8..144,600&family=Roboto+Mono",
	radius: "16px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] M3 as a tablet screen: the logo is the top app bar title, the button a pill with a leading plus (two
	// gradients) in place of the trailing arrow, and the number card a primary-container pane whose figure sits at the
	// foot. Tonal surfaces, no shadows.
	css: `
		[data-part=nav] { position: absolute; top: 12px; left: 112px; }
		[data-part=nav] header { height: 64px; padding: 0; }
		[data-part=nav] header > span { font: 400 22px var(--font-body); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 120px; top: 110px; width: 410px; gap: 0; }
		[data-part=kicker] { color: var(--violet-40); font-size: 14px; font-weight: 500; letter-spacing: .02em; text-transform: none; }
		[data-part=headline] { margin: 14px 0 16px; max-width: 320px; font-size: 48px; line-height: 1.08; font-variation-settings: "opsz" 96; }
		[data-part=sub] { max-width: 400px; color: var(--neutral-variant-30); font-size: 16px; line-height: 1.5; letter-spacing: .01em; }
		[data-part=button] { margin-top: 30px; height: 48px; gap: 8px; padding: 0 24px 0 18px; border-radius: 999px; font-size: 16px; font-weight: 500; letter-spacing: .01em; }
		[data-part=button]::before { content: ""; width: 20px; height: 20px; background: linear-gradient(currentColor, currentColor) center / 14px 2px no-repeat, linear-gradient(currentColor, currentColor) center / 2px 14px no-repeat; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 568px; top: 12px; width: 220px; height: 272px; padding: 22px 22px 24px; border: 0; border-radius: 28px; background: var(--violet-90); color: var(--violet-30); }
		[data-part=card] > div { height: 100%; padding: 0; gap: 0; }
		[data-part=label] { color: var(--violet-30); font-size: 14px; font-weight: 500; letter-spacing: .01em; }
		[data-part=number] { margin: auto 0 6px; font-size: 52px; font-variation-settings: "opsz" 96; letter-spacing: -.01em; }
		[data-part=caption] { color: var(--violet-30); font-size: 14px; line-height: 1.4; opacity: .8; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
