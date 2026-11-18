import type { Style } from "@/theme"
import { diagramCss } from "./decor/motion"
import Decor from "./decor/motion-none"

export default {
	name: "No-motion",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The theme itself switches every transition and animation off: state changes are cuts.
	css: `${diagramCss}
		*, *::before, *::after { transition: none !important; animation: none !important; }
	`,
} satisfies Style
