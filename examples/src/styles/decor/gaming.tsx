// [Agent] Key-art stand-in ported from the hand-drawn specimen: red rim light, lime light beams, dark corner plates, a
// faceted rank emblem with a neon core, HUD corner brackets and scanlines over the art (under the copy).
export default function Gaming() {
	return (
		<svg aria-hidden="true" className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
			<defs>
				<radialGradient id="gaming-glow" cx="0.72" cy="0.42" r="0.5">
					<stop offset="0" stopColor="var(--ember)" stopOpacity="0.75" />
					<stop offset="0.5" stopColor="oklch(0.45 0.18 25)" stopOpacity="0.25" />
					<stop offset="1" stopColor="var(--void)" stopOpacity="0" />
				</radialGradient>
				<linearGradient id="gaming-beam" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stopColor="var(--neon)" stopOpacity="0" />
					<stop offset="0.5" stopColor="var(--neon)" stopOpacity="0.22" />
					<stop offset="1" stopColor="var(--neon)" stopOpacity="0" />
				</linearGradient>
				<pattern id="gaming-scan" width="4" height="4" patternUnits="userSpaceOnUse">
					<rect width="4" height="1" fill="#000" opacity="0.35" />
				</pattern>
				<filter id="gaming-neon" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="4" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<rect width="800" height="500" fill="url(#gaming-glow)" />
			<polygon points="430,0 520,0 300,500 210,500" fill="url(#gaming-beam)" />
			<polygon points="700,0 740,0 560,500 520,500" fill="url(#gaming-beam)" opacity="0.6" />
			<polygon points="800,320 800,500 520,500" fill="var(--panel)" />
			<polygon points="640,0 800,0 800,120" fill="var(--panel)" />
			<g transform="translate(648 196) scale(0.84)">
				<polygon points="0,-150 112,-62 86,88 0,138 -86,88 -112,-62" fill="oklch(0.11 0.01 270)" />
				<polygon points="0,-150 112,-62 0,-20" fill="oklch(0.36 0.02 270)" />
				<polygon points="0,-150 -112,-62 0,-20" fill="oklch(0.28 0.02 270)" />
				<polygon points="-112,-62 -86,88 0,-20" fill="oklch(0.22 0.02 270)" />
				<polygon points="112,-62 86,88 0,-20" fill="oklch(0.42 0.12 25)" />
				<polygon points="-86,88 0,138 0,-20" fill="oklch(0.17 0.015 270)" />
				<polygon points="86,88 0,138 0,-20" fill="oklch(0.30 0.14 25)" />
				<polygon points="0,-82 44,-30 0,40 -44,-30" fill="var(--neon)" filter="url(#gaming-neon)" />
				<polygon points="0,-82 44,-30 0,-14" fill="oklch(0.95 0.12 135)" />
				<polygon
					points="0,-150 112,-62 86,88 0,138 -86,88 -112,-62"
					fill="none"
					stroke="var(--neon)"
					strokeWidth="2"
					filter="url(#gaming-neon)"
				/>
				<path d="M-140 -10 h-40 M140 -10 h40 M-150 6 h-20 M150 6 h20" stroke="var(--neon)" strokeWidth="2" />
			</g>
			<g fill="none" stroke="var(--steel)" strokeWidth="1.5" opacity="0.7">
				<path d="M20 44 V20 H44" />
				<path d="M756 20 H780 V44" />
				<path d="M20 456 V480 H44" />
				<path d="M756 480 H780 V456" />
			</g>
			<rect width="800" height="500" fill="url(#gaming-scan)" />
		</svg>
	)
}
