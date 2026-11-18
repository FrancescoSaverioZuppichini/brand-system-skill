import type { Style } from "@/theme"

// [Agent] Every typographic voice shares this sheet, as the hand-made specimens did, so they differ only in type:
// "Aa 0123456789" and the font names sit top right like a foundry specimen (pseudo-elements on the nav), and the
// headline hangs from its last line, so every voice ends at the same y whatever its size and leading. Each voice appends
// its own rules after this and sets the names with `[data-part=nav]::after { content: … }`.
export const typeSheet = `
	[data-part=nav] header { max-width: none; padding: 20px 56px 0; }
	[data-part=nav] header::after { content: "Aa 0123456789"; line-height: 1; }
	[data-part=nav]::after { position: absolute; top: 56px; right: 56px; line-height: 1; color: var(--muted-foreground); }
	[data-part=nav] [data-slot=button] { display: none; }
	[data-part=kicker] { position: absolute; left: 56px; top: 66px; line-height: 1; letter-spacing: 0; text-transform: none; color: var(--primary); }
	[data-part=headline] { position: absolute; left: 56px; bottom: 214px; white-space: nowrap; }
	[data-part=accent] { display: block; }
	[data-part=sub] { position: absolute; left: 56px; top: 318px; width: 450px; max-width: none; }
	[data-part=button] { position: absolute; left: 56px; bottom: 56px; height: 48px; padding: 0 24px; border-radius: var(--radius); }
	[data-part=button] svg { display: none; }
	[data-part=card] { position: absolute; right: 56px; bottom: 56px; width: 224px; padding: 16px 20px 18px; gap: 0; border-radius: var(--radius); }
	[data-part=card] > div { padding: 0; gap: 0; }
	[data-part=number] { margin: 6px 0 4px; }
	[data-part=chart] { display: none; }
`

export default {
	name: "Grotesk neutral",
	family: "Typographic voices",
	fonts: { heading: "Inter", body: "Inter", mono: "Geist Mono" },
	google: "family=Inter:opsz,wght@14..32,400..700&family=Geist+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.025em" },
	specimen: "start",
	css: `${typeSheet}
		[data-part=frame] { font-feature-settings: "ss01", "cv11"; }
		[data-part=nav] header::after { font-weight: 500; font-size: 22px; letter-spacing: -0.01em; }
		[data-part=nav]::after { content: "Inter · Geist Mono"; font-family: var(--font-code); font-size: 11px; }
		[data-part=kicker] { font-size: 15px; font-weight: 500; }
		[data-part=headline] { font-size: 94px; line-height: 1.02; }
		[data-part=sub] { font-size: 17px; line-height: 1.55; }
		[data-part=button] { font-size: 15px; font-weight: 500; }
		[data-part=label] { font-size: 13px; font-weight: 500; line-height: 1.2; }
		[data-part=number] { font-family: var(--font-body); font-weight: 600; font-size: 40px; line-height: 1.1; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 13px; line-height: 1.3; }
	`,
} satisfies Style
