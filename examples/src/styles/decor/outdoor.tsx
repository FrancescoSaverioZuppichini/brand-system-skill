// [Agent] Topographic contours: wobbly concentric rings around two off-canvas summits, each ring a sum of three sine
// waves so neighbours stay roughly parallel like real contour lines. Computed once when the module loads.
function ring(cx: number, cy: number, r: number, k: number, phase: number) {
	const points = Array.from({ length: 141 }, (_, i) => {
		const t = (i / 140) * Math.PI * 2
		const w =
			1 +
			0.16 * Math.sin(2 * t + phase + k * 0.13) +
			0.1 * Math.sin(3 * t + phase * 2 + k * 0.09) +
			0.05 * Math.sin(5 * t + phase * 3)
		return `${(cx + r * w * Math.cos(t)).toFixed(1)} ${(cy + 0.8 * r * w * Math.sin(t)).toFixed(1)}`
	})
	return `M${points.join("L")}Z`
}

const contours = [
	...Array.from({ length: 16 }, (_, i) => ring(170, 470, (i + 1) * 32, i + 1, 1.2)),
	...Array.from({ length: 12 }, (_, i) => ring(720, 70, (i + 1) * 28, i + 1, 4.1)),
].join(" ")

// [Agent] Behind the copy: the contour map; on the right, a landscape-photo stand-in (layered ridgelines, haze toward
// the back) like the gear shots this category leads with.
export default function Outdoor() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0" width="800" height="500">
				<path d={contours} fill="none" stroke="var(--granite)" strokeOpacity="0.16" />
			</svg>
			<svg
				className="absolute top-10 left-[484px] rounded-[3px]"
				width="276"
				height="300"
				viewBox="0 0 290 300"
				preserveAspectRatio="xMidYMid slice"
			>
				<defs>
					<linearGradient id="outdoor-sky" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="oklch(0.74 0.06 235)" />
						<stop offset="1" stopColor="oklch(0.90 0.03 80)" />
					</linearGradient>
				</defs>
				<rect width="290" height="300" fill="url(#outdoor-sky)" />
				<circle cx="210" cy="92" r="20" fill="oklch(0.95 0.05 80)" />
				<path
					d="M0 170 L46 120 L80 146 L130 82 L176 136 L214 110 L290 168 V300 H0Z"
					fill="oklch(0.66 0.03 240)"
				/>
				<path d="M130 82 L146 100 L136 104 L128 96 L118 106 Z" fill="oklch(0.95 0.01 240)" />
				<path d="M0 210 L60 160 L104 196 L160 150 L230 204 L290 182 V300 H0Z" fill="oklch(0.50 0.04 150)" />
				<path d="M0 250 L50 222 L120 252 L190 214 L290 256 V300 H0Z" fill="var(--moss)" />
				<path
					d="M30 300 L40 254 L50 300Z M46 300 L58 240 L70 300Z M220 300 L232 248 L244 300Z M240 300 L250 262 L260 300Z"
					fill="oklch(0.28 0.03 140)"
				/>
			</svg>
		</div>
	)
}
