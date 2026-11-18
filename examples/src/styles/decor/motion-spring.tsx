import { bezier, MotionDiagram, moments, px, py, Scale, sample, Track } from "./motion"

// [Agent] A damped spring (stiffness 300, damping 20) over 500 ms: it passes the target by 11 % and settles back. The
// dashed curve is the cubic-bezier fallback for plain CSS.
const w0 = Math.sqrt(300)
const zeta = 20 / (2 * w0)
const wd = w0 * Math.sqrt(1 - zeta * zeta)
const spring = (t: number) => {
	const s = t * 0.5
	return 1 - Math.exp(-zeta * w0 * s) * (Math.cos(wd * s) + ((zeta * w0) / wd) * Math.sin(wd * s))
}

export default function MotionSpring() {
	return (
		<MotionDiagram
			plot={{
				points: sample(spring),
				ghost: sample(bezier(0.34, 1.56, 0.64, 1)),
				dots: moments.map((t) => [t, spring(t)]),
				xticks: ["0", "125", "250", "375", "500 ms"],
				children: (
					<text
						x={px(0.444)}
						y={py(spring(0.444)) - 8}
						textAnchor="middle"
						className="fill-[var(--cobalt)] font-mono text-[9.5px]"
					>
						overshoot +11%
					</text>
				),
			}}
			tokens={[
				"spring: stiffness 300, damping 20;",
				"--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);",
				"/* dashed: the CSS fallback */",
				"/* scale 0.6 → 1 · translateY 44px → 0, past the slot and back */",
			]}
			timeline={
				<>
					<Track bars={[[0, 50]]} kind="on" label="500 settle" at={50} />
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 100}%`, `${t * 500} ms`],
				card: {
					opacity: Math.min(1, spring(t) * 1.6),
					transform: `translateY(${(1 - spring(t)) * 44}px) scale(${0.6 + 0.4 * spring(t)})`,
				},
			}))}
		/>
	)
}
