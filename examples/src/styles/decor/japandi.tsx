// [Agent] Ported from the hand-made specimen: a still life drawn in SVG (linen wall, window light, a clay vase with a
// eucalyptus sprig, a charcoal bowl on an oak shelf whose grain is stretched fractal noise), standing in for the
// natural-light interior photograph the style is built around.
export default function Japandi() {
	return (
		<div
			aria-hidden="true"
			className="absolute top-9 left-[448px] h-[428px] w-[316px] overflow-hidden rounded-[4px]"
		>
			<svg className="size-full" viewBox="0 0 316 428">
				<defs>
					<linearGradient id="wall" x1="0" x2="1" y1="0" y2="0.4">
						<stop offset="0" stopColor="oklch(0.95 0.018 82)" />
						<stop offset="1" stopColor="oklch(0.86 0.025 75)" />
					</linearGradient>
					<radialGradient id="vase" cx=".34" cy=".4" r=".75">
						<stop offset="0" stopColor="oklch(0.72 0.06 52)" />
						<stop offset=".7" stopColor="var(--clay)" />
						<stop offset="1" stopColor="oklch(0.48 0.05 48)" />
					</radialGradient>
					<radialGradient id="bowl" cx=".3" cy=".2" r=".9">
						<stop offset="0" stopColor="oklch(0.48 0.01 60)" />
						<stop offset="1" stopColor="var(--charcoal)" />
					</radialGradient>
					<filter id="soft">
						<feGaussianBlur stdDeviation="9" />
					</filter>
					{/* [Agent] Stretched fractal noise reads as oak grain; its red channel becomes the alpha of dark brown streaks. */}
					<filter id="wood" x="0" y="0" width="1" height="1">
						<feTurbulence type="fractalNoise" baseFrequency="0.006 0.45" numOctaves="3" seed="7" />
						<feColorMatrix values="0 0 0 0 0.42  0 0 0 0 0.3  0 0 0 0 0.2  2 0 0 0 -0.8" />
						<feComposite in2="SourceGraphic" operator="in" />
					</filter>
				</defs>
				<rect width="316" height="428" fill="url(#wall)" />
				<polygon
					points="10,40 120,20 150,240 30,270"
					fill="oklch(0.98 0.012 85)"
					opacity=".55"
					filter="url(#soft)"
				/>
				<path
					d="M156 300 C150 278 152 248 168 226 C178 206 196 200 196 186 L196 154 L214 154 L214 186 C214 200 232 206 244 226 C258 250 250 282 240 300 Z"
					fill="var(--charcoal)"
					opacity=".14"
					filter="url(#soft)"
					transform="translate(26 -4) skewX(-8)"
				/>
				<rect y="310" width="316" height="118" fill="oklch(0.88 0.022 78)" />
				<rect y="310" width="316" height="30" fill="oklch(0.28 0.01 60 / .12)" filter="url(#soft)" />
				<rect y="288" width="316" height="22" fill="var(--oak)" />
				<rect y="288" width="316" height="22" fill="#000" filter="url(#wood)" />
				<rect y="288" width="316" height="1.5" fill="oklch(0.84 0.04 75)" />
				<path
					d="M118 120 C110 96 92 70 70 44 M108 98 C120 74 126 52 140 30 M96 82 C86 76 74 74 62 76"
					stroke="oklch(0.45 0.03 120)"
					strokeWidth="1.4"
					fill="none"
					strokeLinecap="round"
				/>
				<g fill="var(--sage)">
					<ellipse cx="72" cy="46" rx="9" ry="4" transform="rotate(-40 72 46)" />
					<ellipse cx="88" cy="66" rx="10" ry="4" transform="rotate(30 88 66)" />
					<ellipse cx="80" cy="60" rx="9" ry="3.5" transform="rotate(-60 80 60)" />
					<ellipse cx="100" cy="88" rx="9" ry="4" transform="rotate(-30 100 88)" />
					<ellipse cx="138" cy="34" rx="9" ry="4" transform="rotate(50 138 34)" />
					<ellipse cx="128" cy="54" rx="10" ry="4" transform="rotate(-20 128 54)" />
					<ellipse cx="122" cy="72" rx="9" ry="3.5" transform="rotate(40 122 72)" />
					<ellipse cx="64" cy="76" rx="8" ry="3.5" transform="rotate(10 64 76)" />
				</g>
				<path
					d="M84 288 C76 266 78 236 94 214 C104 196 122 190 122 176 L122 128 C122 124 120 122 118 120 L140 120 C138 122 136 124 136 128 L136 176 C136 190 154 196 164 214 C178 238 174 266 166 288 Z"
					fill="url(#vase)"
				/>
				<path d="M206 288 C206 270 220 260 246 260 C272 260 286 270 286 288 Z" fill="url(#bowl)" />
				<ellipse cx="246" cy="261" rx="40" ry="3" fill="oklch(0.38 0.01 60)" />
			</svg>
		</div>
	)
}
