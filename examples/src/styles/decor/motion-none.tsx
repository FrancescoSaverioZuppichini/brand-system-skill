import { moments, MotionDiagram, px, py, Scale, Track } from "./motion"

const cut = (t: number) => (t < 0.5 ? 0 : 1)

export default function MotionNone() {
	return (
		<MotionDiagram
			plot={{
				points: [
					[0, 0],
					[0.5, 0],
					[0.5, 1],
					[1, 1],
				],
				dots: moments.map((t) => [t, cut(t)]),
				open: [[0.5, 0]],
				xticks: ["0", "25", "50", "75", "100 %"],
				children: (
					<text x={px(0.5) + 8} y={py(0.55)} className="fill-[var(--cobalt)] font-mono text-[9.5px]">
						state change, 0 ms
					</text>
				),
			}}
			tokens={[
				"--dur: 0ms;",
				"transition: none;",
				"hover / focus: colour or underline only",
				"/* nothing moves: the card is absent, then present */",
			]}
			timeline={
				<>
					<Track bars={[[0, 0]]} kind="cut" label="0 ms" />
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 100}%`, cut(t) ? "after" : "before"],
				card: { opacity: cut(t) },
			}))}
		/>
	)
}
