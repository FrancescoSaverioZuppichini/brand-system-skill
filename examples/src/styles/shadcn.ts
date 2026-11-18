import type { Style } from "@/theme"

export default {
	name: "Shadcn-minimal",
	family: "Digital UI eras",
	fonts: { heading: "Geist", body: "Inter", mono: "Geist Mono" },
	google: "family=Geist:wght@400..700&family=Inter:wght@400..600&family=Geist+Mono:wght@400..500",
	radius: "0.625rem",
	border: "1px",
	shadow: "0 1px 2px 0 oklch(0 0 0 / 0.05)",
	heading: { weight: 600, tracking: "-0.025em" },
	specimen: "start",
	css: `
		[data-part=nav] header { border-bottom: 1px solid var(--border); max-width: none; }
		[data-part=body] { align-items: center; }
		[data-part=kicker] { width: fit-content; border: 1px solid var(--border); border-radius: 6px; padding: 3px 8px; text-transform: none; letter-spacing: 0; color: var(--foreground); }
		[data-part=headline] { font-size: 46px; line-height: 1.05; }
		[data-part=card] { width: 296px; }
		[data-part=number] { font-family: var(--font-display); font-weight: 600; font-size: 28px; }
		[data-part=label] { order: -1; color: var(--foreground); font-size: 14px; font-weight: 500; }
		[data-part=chart] { height: 64px; }
	`,
} satisfies Style
