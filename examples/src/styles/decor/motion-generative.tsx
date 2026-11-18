import { MotionDiagram, moments, Scale, sample, Track } from "./motion"

// [Agent] Seeded value noise, the same hash as the old specimen's generator: fbm drives the card's drift and tilt, and
// 2D noise turns the field of strokes behind it. Nothing loops, so every frame is new but the seed makes it repeatable.
const fract = (x: number) => x - Math.floor(x)
const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const hash = (x: number, y: number, seed: number) =>
	fract(Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453)
const noise1 = (x: number, seed: number) => {
	const i = Math.floor(x)
	return (
		lerp(
			fract(Math.sin(i * 127.1 + seed * 311.7) * 43758.5453),
			fract(Math.sin((i + 1) * 127.1 + seed * 311.7) * 43758.5453),
			fade(x - i),
		) *
			2 -
		1
	)
}
const noise2 = (x: number, y: number, seed: number) => {
	const ix = Math.floor(x)
	const iy = Math.floor(y)
	const fx = fade(x - ix)
	return lerp(
		lerp(hash(ix, iy, seed), hash(ix + 1, iy, seed), fx),
		lerp(hash(ix, iy + 1, seed), hash(ix + 1, iy + 1, seed), fx),
		fade(y - iy),
	)
}
const fbm = (x: number, seed: number) => 0.7 * noise1(x, seed) + 0.3 * noise1(x * 2.3, seed + 9)
const travel = 8 * 0.3
const driftX = (t: number) => fbm(t * travel + 1.3, 3)
const driftY = (t: number) => fbm(t * travel + 7.9, 11)

function field(t: number) {
	let d = ""
	for (let y = 7; y < 130; y += 13)
		for (let x = 7; x < 136; x += 13) {
			const angle = noise2(x * 0.025 + t * travel * 0.6, y * 0.025, 2) * Math.PI * 2.4
			d += `M${x} ${y}l${(Math.cos(angle) * 6).toFixed(1)} ${(Math.sin(angle) * 6).toFixed(1)}`
		}
	return d
}

export default function MotionGenerative() {
	return (
		<MotionDiagram
			plot={{
				lo: -1.3,
				hi: 1.3,
				grid: [-1.3, -0.867, -0.433, 0, 0.433, 0.867, 1.3],
				target: 0,
				yticks: [
					[-1, "−1"],
					[0, "0"],
					[1, "+1"],
				],
				points: sample(driftX, 240),
				ghost: sample(driftY, 240),
				dots: moments.map((t) => [t, driftX(t)]),
				xticks: ["0", "2", "4", "6", "8 s"],
				xlabel: "time (continuous, never repeats)",
				ylabel: "offset",
			}}
			tokens={[
				"--speed: 0.3 units/s;  /* seeded noise */",
				"--frame-budget: 4ms;  /* 30–60 fps */",
				"reduced motion: one static seeded frame",
				"/* x / y drift and ±4° tilt from noise; the field flows */",
			]}
			timeline={
				<>
					<Track bars={[[0, 100]]} kind="loop" />
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 8} s`, "seed 7"],
				card: {
					transform: `translate(${driftX(t) * 16}px, ${driftY(t) * 12}px) rotate(${fbm(t * travel + 4.2, 5) * 4}deg)`,
				},
				back: (
					<svg className="absolute inset-0 size-full" viewBox="0 0 136 130" aria-hidden="true">
						<path d={field(t)} stroke="var(--cobalt)" strokeWidth="1.2" strokeLinecap="round" opacity=".35" />
					</svg>
				),
			}))}
		/>
	)
}
