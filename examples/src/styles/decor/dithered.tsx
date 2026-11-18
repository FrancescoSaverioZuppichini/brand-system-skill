const bayer = [
	[0, 32, 8, 40, 2, 34, 10, 42],
	[48, 16, 56, 24, 50, 18, 58, 26],
	[12, 44, 4, 36, 14, 46, 6, 38],
	[60, 28, 52, 20, 62, 30, 54, 22],
	[3, 35, 11, 43, 1, 33, 9, 41],
	[51, 19, 59, 27, 49, 17, 57, 25],
	[15, 47, 7, 39, 13, 45, 5, 37],
	[63, 31, 55, 23, 61, 29, 53, 21],
]

// [Agent] One SVG path for a 1-bit bitmap: each horizontal run of ink pixels becomes one rectangle, so an 82 × 105 image
// is a few hundred path commands instead of thousands of nodes.
function trace(width: number, height: number, isInk: (x: number, y: number) => boolean) {
	let d = ""
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (!isInk(x, y)) continue
			const start = x
			while (x + 1 < width && isInk(x + 1, y)) x++
			d += `M${start} ${y}h${x - start + 1}v1h${start - x - 1}z`
		}
	}
	return d
}

// [Agent] Ordered dither: a horizontal grey ramp compared with the 8 × 8 Bayer threshold gives the cross-hatched fade.
const strip = trace(400, 9, (x, y) => 1 - x / 399 > (bayer[y % 8][x % 8] + 0.5) / 64)

// [Agent] A small studio scene (a lit sphere with a highlight, a pebble, a floor, contact shadows) shaded as grey values,
// then Atkinson-dithered like MacPaint: only 6/8 of the error spreads, which keeps highlights and shadows clean.
function scene() {
	const width = 82
	const height = 105
	const horizon = 69
	const norm = (v: number[]) => v.map((c) => c / Math.hypot(...v))
	const light = norm([-0.55, -0.65, 0.52])
	const half = norm([light[0], light[1], light[2] + 1])
	const sphere = (x: number, y: number, cx: number, cy: number, r: number) => {
		const nx = (x - cx) / r
		const ny = (y - cy) / r
		const d = nx * nx + ny * ny
		if (d > 1) return null
		const n = [nx, ny, Math.sqrt(1 - d)]
		const diffuse = Math.max(0, n[0] * light[0] + n[1] * light[1] + n[2] * light[2])
		const spec = Math.max(0, n[0] * half[0] + n[1] * half[1] + n[2] * half[2]) ** 40
		return 0.05 + 0.85 * diffuse + 0.6 * spec
	}
	const grey = new Float32Array(width * height)
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let v = 0.14 + 0.2 * (y / horizon)
			if (y >= horizon) {
				const big = ((x - 58) / 26) ** 2 + ((y - 77) / 6) ** 2
				const small = ((x - 22) / 8) ** 2 + ((y - 76) / 2.5) ** 2
				v =
					(0.55 + 0.4 * ((y - horizon) / (height - horizon))) *
					Math.min(1, 0.25 + 0.75 * Math.min(big, small))
			}
			v = sphere(x, y, 44, 52, 24) ?? sphere(x, y, 18, 71, 7) ?? v
			grey[y * width + x] = Math.min(1, Math.max(0, v))
		}
	}
	const spread = [
		[1, 0],
		[2, 0],
		[-1, 1],
		[0, 1],
		[1, 1],
		[0, 2],
	]
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const i = y * width + x
			const out = grey[i] < 0.5 ? 0 : 1
			const error = (grey[i] - out) / 8
			grey[i] = out
			for (const [dx, dy] of spread) {
				if (x + dx >= 0 && x + dx < width && y + dy < height) grey[(y + dy) * width + x + dx] += error
			}
		}
	}
	return trace(width, height, (x, y) => grey[y * width + x] === 0)
}
const sceneInk = scene()

// [Agent] Ported from the hand-made specimen (which painted canvases): the Bayer strip across the top, the dithered
// still life in a 2 px frame, and the 50 % checker that is the only shadow a two-colour screen can draw, under the
// button and the number card.
export default function Dithered() {
	const checker = "[background:repeating-conic-gradient(var(--ink)_0_25%,transparent_0_50%)_0_0/4px_4px]"
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg
				viewBox="0 0 400 9"
				shapeRendering="crispEdges"
				className="absolute top-0 left-0 h-[18px] w-[800px]"
			>
				<path fill="var(--ink)" d={strip} />
			</svg>
			<svg
				viewBox="0 0 82 105"
				shapeRendering="crispEdges"
				className="absolute top-[46px] left-[434px] h-[420px] w-[328px] bg-[var(--paper)] outline-2 outline-[var(--ink)]"
			>
				<path fill="var(--ink)" d={sceneInk} />
			</svg>
			<div className={`absolute top-[356px] left-[54px] h-[42px] w-[204px] ${checker}`} />
			<div className={`absolute top-[368px] left-[404px] h-24 w-[196px] ${checker}`} />
		</div>
	)
}
