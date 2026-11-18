// [Agent] Ported from the hand-made specimen's canvas as SVG paths. Seeded, so the field is the same on every load: smooth
// value noise gives every point an angle, and 900 particles trace it as hairlines. A second, coarser read of the same
// noise picks each line's colour, so the colours come in regions instead of confetti.
const N = 16
const fade = (t: number) => t * t * (3 - 2 * t)

function trace() {
	let seed = 1284
	const rand = () => {
		seed = (seed * 1664525 + 1013904223) >>> 0
		return seed / 4294967296
	}
	const grid = Array.from({ length: (N + 1) * (N + 1) }, rand)
	const at = (a: number, b: number) => grid[(b % N) * (N + 1) + (a % N)]
	const noise = (x: number, y: number) => {
		const i = Math.floor(x)
		const j = Math.floor(y)
		const u = fade(x - i)
		const v = fade(y - j)
		return (
			(at(i, j) * (1 - u) + at(i + 1, j) * u) * (1 - v) + (at(i, j + 1) * (1 - u) + at(i + 1, j + 1) * u) * v
		)
	}
	const colours = ["var(--jade)", "var(--cobalt)", "var(--cobalt)", "var(--ink)", "var(--ember)"]
	return Array.from({ length: 900 }, () => {
		let x = rand() * 520 - 30
		let y = rand() * 560 - 30
		const tone = noise(x / 150 + 3, y / 150 + 3)
		const colour = colours[Math.max(0, Math.min(4, Math.floor((tone - 0.25) * 10)))]
		const opacity = (0.25 + 0.6 * rand()).toFixed(2)
		let d = `M${x.toFixed(1)} ${y.toFixed(1)}`
		const steps = 60 + rand() * 120
		for (let t = 0; t < steps; t++) {
			const a = noise(x / 110 + 5, y / 110 + 5) * Math.PI * 4
			x += Math.cos(a) * 2
			y += Math.sin(a) * 2
			d += `L${x.toFixed(1)} ${y.toFixed(1)}`
		}
		return { d, colour, opacity }
	})
}

export default function Generative() {
	return (
		<svg
			className="absolute top-0 left-[340px] h-[500px] w-[460px]"
			viewBox="0 0 460 500"
			fill="none"
			strokeLinecap="round"
			aria-hidden="true"
		>
			{trace().map((line) => (
				<path key={line.d} d={line.d} stroke={line.colour} strokeOpacity={line.opacity} />
			))}
		</svg>
	)
}
