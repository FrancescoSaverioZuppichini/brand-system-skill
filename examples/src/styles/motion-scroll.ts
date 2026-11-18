import type { Style } from "@/theme"
import Decor from "./decor/motion-scroll"
import { diagramCss } from "./decor/motion"

export default {
	name: "Scroll-driven",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The real card sits where the last frame's scroll offset left it; reduced motion drops the scroll timelines.
	css: `${diagramCss}
		[data-part=card] { top: 346.8px; }
		@media (prefers-reduced-motion: reduce) { * { animation-timeline: auto !important; animation: none !important; } }
	`,
} satisfies Style
