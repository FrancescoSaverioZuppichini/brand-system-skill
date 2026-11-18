// [Agent] The front page under the masthead: dateline, column rules, a halftone photo and greeked body columns. Both
// textures are computed once into plain SVG shapes (dots and bars), so nothing is a raster.

// [Agent] Darkness 0..1 of a vase on a table, lit from the left: the scene the halftone screen samples.
function tone(u: number, v: number) {
	const nx = (u - 0.42) / 0.19
	const ny = (v - 0.52) / 0.26
	if (nx * nx + ny * ny < 1) return 0.25 + 0.6 * Math.max(0, 0.65 * nx + 0.35)
	if (Math.abs(u - 0.42) < 0.055 && v > 0.14 && v < 0.32) return 0.35 + (0.5 * (u - 0.365)) / 0.11
	if (v > 0.76) return u > 0.5 && u < 0.88 && v < 0.84 ? 0.8 : 0.5
	return 0.06 + 0.28 * v + 0.12 * u
}

// [Agent] A 45° screen: one dot per cell, its area proportional to the darkness under it.
function halftone(width: number, height: number, step: number) {
	const dots: number[][] = []
	for (let a = 0; a < (width + height) / step; a++) {
		for (let b = -height / step; b < width / step; b++) {
			const x = (a + b) * step * Math.SQRT1_2
			const y = (a - b) * step * Math.SQRT1_2
			if (x < -step || y < -step || x > width + step || y > height + step) continue
			dots.push([x, y, step * 0.62 * Math.sqrt(tone(x / width, y / height))])
		}
	}
	return dots
}

// [Agent] Greeked copy: seeded word lengths on 8 px lines, an indent every 7th line and a short line before it.
function greek(seed: number, width: number, height: number) {
	let state = seed
	const random = () => {
		state = (state * 16807) % 2147483647
		return state / 2147483647
	}
	const bars: number[][] = []
	for (let y = 3, line = 0; y < height; y += 8, line++) {
		const end = line % 7 === 6 ? 60 + random() * 80 : width
		for (let x = line % 7 === 0 ? 9 : 0; x < end; ) {
			const word = 4 + random() * 22
			bars.push([x, y, Math.min(word, end - x)])
			x += word + 3.5
		}
	}
	return bars
}

const photo = halftone(180, 124, 3.4)
const columns = [
	[230, 328, greek(11, 180, 148)],
	[432, 328, greek(29, 180, 148)],
	[634, 298, greek(47, 138, 179)],
] as const

export default function Broadsheet() {
	return (
		<div aria-hidden="true" className="absolute inset-0 font-mono text-[var(--ink)]">
			<div className="absolute top-[88px] right-7 left-7 flex justify-between border-y border-t-[3px] border-[var(--ink)] border-t-double py-1 text-[10px] font-bold tracking-[0.1em] uppercase">
				<span>No. 01</span>
				<span>Wednesday, November 18, 2026</span>
				<span>Vol. I</span>
			</div>
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<g fill="var(--ink)">
					<rect x="623" y="122" width="1" height="355" />
					<rect x="28" y="317" width="584" height="1" />
					<rect x="28" y="476" width="744" height="1" />
					<rect x="28" y="455" width="180" height="1" />
					<rect x="219" y="328" width="1" height="148" opacity=".4" />
					<rect x="421" y="328" width="1" height="148" opacity=".4" />
				</g>
				<svg x="28" y="328" width="180" height="124">
					<g fill="var(--ink)">
						{photo.map(([x, y, r]) => (
							<circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
						))}
					</g>
				</svg>
				{columns.map(([left, top, bars]) => (
					<g key={left} transform={`translate(${left} ${top})`} fill="var(--greek)">
						{bars.map(([x, y, width]) => (
							<rect key={`${x}-${y}`} x={x} y={y} width={width} height="2.5" />
						))}
					</g>
				))}
			</svg>
			<span className="absolute top-[459px] left-7 text-[9px] font-medium text-[var(--grey)]">Fig. 1</span>
		</div>
	)
}
