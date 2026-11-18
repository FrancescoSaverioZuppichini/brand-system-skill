import type { Style } from "@/theme"

export default {
	name: "Single-page manifesto",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.035em" },
	specimen: "start",
	// [Agent] Every piece of copy becomes a belief at the same giant size, hung off a numbered margin; the copy box is
	// dissolved (display: contents) so the number card can join the list as statement 03 before the button. Only the
	// numbers take the accent; the signature is a pen stroke masked onto the button's side.
	css: `
		[data-part=nav] { position: absolute; top: 0; right: 48px; }
		[data-part=nav] header { padding: 14px 0; }
		[data-part=nav] header > span { font-size: 15px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { flex-direction: column; align-items: stretch; gap: 18px; padding: 26px 48px 0; }
		[data-part=copy] { display: contents; }
		[data-part=kicker] { display: flex; align-items: center; gap: 14px; margin: 0 96px 6px 0; font-family: var(--font-code); font-size: 12px; line-height: 1; letter-spacing: 0; text-transform: none; }
		[data-part=kicker]::after { content: ""; flex: 1; height: 1px; background: var(--hairline); }
		[data-part=headline], [data-part=sub], [data-part=card] { position: relative; padding-left: 52px; }
		[data-part=headline]::before, [data-part=sub]::before, [data-part=card]::before { position: absolute; left: 0; top: 9px; font: 500 13px/1 var(--font-code); letter-spacing: 0; color: var(--cobalt); }
		[data-part=headline]::before { content: "01"; }
		[data-part=sub]::before { content: "02"; }
		[data-part=card]::before { content: "03"; }
		[data-part=headline], [data-part=sub], [data-part=number], [data-part=caption], [data-part=label] { font-size: 39px; line-height: 1.04; font-weight: 700; letter-spacing: -0.035em; text-wrap: balance; }
		[data-part=headline]::after, [data-part=caption]::after, [data-part=label]::after { content: "."; }
		[data-part=sub] { max-width: 610px; color: var(--graphite); }
		[data-part=card] { width: auto; padding-top: 0; padding-bottom: 0; border: 0; border-radius: 0; background: none; box-shadow: none; }
		[data-part=card] > div { flex-direction: row; flex-wrap: wrap; column-gap: 11px; row-gap: 0; max-width: 600px; padding: 0; }
		[data-part=number] { order: 1; font-family: var(--font-body); }
		[data-part=caption] { order: 2; color: var(--graphite); }
		[data-part=label] { order: 3; }
		[data-part=chart] { display: none; }
		[data-part=button] { order: 1; margin: 10px 0 0 52px; height: auto; padding: 11px 18px; font-size: 13.5px; background: var(--graphite); color: var(--sheet); }
		[data-part=button] { position: relative; overflow: visible; }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; position: absolute; left: calc(100% + 22px); top: 3px; width: 120px; height: 34px; background: var(--graphite); mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 34'><path d='M4 24c8-14 14-18 16-12s-6 16-2 14 10-20 16-18-4 18 2 16 8-12 12-10 0 10 6 8 10-10 16-8 4 6 10 4 10-6 16-6' fill='none' stroke='black' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>") center / contain no-repeat; }
	`,
} satisfies Style
