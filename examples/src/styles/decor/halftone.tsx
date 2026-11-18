// [Agent] Ported from the hand-made specimen's canvas as SVG dots: two screens like a two-colour print, the black plate at
// 45° (a lit sphere and its cast shadow) and the red plate at 15° (a flat sun). Dot area tracks darkness, so the radius
// is the square root of the tone.
const W = 440
const H = 500
const light = [-0.55, -0.6, 0.58]
const lightLength = Math.hypot(...light)

function screen(angle: number, step: number, tone: (x: number, y: number) => number) {
	const a = (angle * Math.PI) / 180
	const cos = Math.cos(a)
	const sin = Math.sin(a)
	const reach = Math.hypot(W, H)
	const dots: [number, number, number][] = []
	for (let u = -reach; u < reach; u += step) {
		for (let v = -reach; v < reach; v += step) {
			const x = W / 2 + u * cos - v * sin
			const y = H / 2 + u * sin + v * cos
			if (x < -step || y < -step || x > W + step || y > H + step) continue
			const d = tone(x, y)
			if (d >= 0.04) dots.push([x, y, Math.sqrt(d) * step * 0.62])
		}
	}
	return dots
}

function sun(x: number, y: number) {
	return Math.hypot(x - 350, y - 104) < 96 ? 0.5 : 0
}

function sphere(x: number, y: number) {
	const nx = (x - 200) / 135
	const ny = (y - 250) / 135
	const q = nx * nx + ny * ny
	if (q < 1) {
		const nz = Math.sqrt(1 - q)
		const lit = Math.max(0, (nx * light[0] + ny * light[1] + nz * light[2]) / lightLength)
		return Math.min(1, 0.06 + 0.94 * (1 - lit) ** 1.4)
	}
	const sx = (x - 250) / 170
	const sy = (y - 400) / 24
	const s = sx * sx + sy * sy
	if (s < 1) return 0.85 * (1 - s * s)
	return 0.2 + 0.1 * (y / H)
}

export default function Halftone() {
	return (
		<svg className="absolute top-0 right-0 h-[500px] w-[440px]" viewBox="0 0 440 500" aria-hidden="true">
			<g fill="var(--red)">
				{screen(15, 12, sun).map(([x, y, r]) => (
					<circle key={`${x},${y}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={r.toFixed(2)} />
				))}
			</g>
			<g fill="var(--ink)" className="mix-blend-multiply">
				{screen(45, 10, sphere).map(([x, y, r]) => (
					<circle key={`${x},${y}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={r.toFixed(2)} />
				))}
			</g>
		</svg>
	)
}
