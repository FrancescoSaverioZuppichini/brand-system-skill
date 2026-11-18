import { MotionDiagram, moments, Scale, Track } from "./motion"

const step = (t: number) => (t >= 1 ? 1 : Math.floor(t * 4) / 4)

// [Agent] steps(4, end) over 500 ms: the card holds still, then jumps a quarter of the way, four times, with nothing in
// between; the open circles mark where each step was left.
export default function MotionStepped() {
	return (
		<MotionDiagram
			plot={{
				points: [0, 1, 2, 3]
					.flatMap((k): [number, number][] => [
						[k / 4, k / 4],
						[(k + 1) / 4, k / 4],
					])
					.concat([[1, 1]]),
				dots: moments.map((t) => [t, step(t)]),
				open: moments.slice(1).map((t) => [t, step(t) - 0.25]),
				xticks: ["0", "125", "250", "375", "500 ms"],
			}}
			tokens={[
				"animation-timing-function: steps(4, end);",
				"--dur: 500ms;",
				"--blink: 1s steps(1);  /* cursor */",
				"/* opacity 0 → 1 · translateY 28px → 0, in 4 jumps, nothing in between */",
			]}
			timeline={
				<>
					<Track
						bars={[
							[0, 12.2],
							[12.5, 12.2],
							[25, 12.2],
							[37.5, 12.2],
						]}
						kind="on"
						label="4 steps"
						at={50}
					/>
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 100}%`, `${t * 500} ms`],
				card: { opacity: step(t), transform: `translateY(${(1 - step(t)) * 28}px)` },
			}))}
		/>
	)
}
