import type { Style } from "@/theme"
import Decor from "./decor/painterly"

export default {
	name: "Painterly public-domain art",
	family: "Illustration and imagery",
	fonts: { heading: "Cormorant Garamond", body: "Inter", mono: "DM Mono" },
	google: "family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Inter:wght@400;500&family=DM+Mono",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The painting is hung like a museum piece and the page stays quiet around it: a classical serif with the
	// accent in varnish-brown italic, a plain sans for reading, and mono only for labels.
	css: `
		[data-part=nav] header { padding: 18px 48px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 16px 0 0 48px; }
		[data-part=copy] { flex: none; width: 270px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; font-weight: 400; letter-spacing: .1em; color: var(--varnish); }
		[data-part=headline] { font-size: 52px; line-height: .98; margin: 18px 0; }
		[data-part=accent] { font-style: italic; color: var(--varnish); }
		[data-part=sub] { font-size: 13.5px; line-height: 1.6; margin-bottom: 24px; }
		[data-part=button] { height: auto; padding: 12px 20px; font-size: 13px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 48px; bottom: 40px; width: 270px; padding: 12px 0 0; border: 0; border-top: 1px solid var(--rule); background: none; }
		[data-part=card] > div { display: grid; grid-template-columns: auto 1fr; column-gap: 12px; padding: 0; }
		[data-part=number] { grid-area: 1 / 1 / 3 / 2; align-self: center; font-size: 38px; }
		[data-part=label] { align-self: end; font-family: var(--font-code); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
		[data-part=caption] { font-size: 12px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
