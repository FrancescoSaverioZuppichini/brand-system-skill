import { bezier, MotionDiagram, moments, Scale, sample, Track } from "./motion"

const ease = bezier(0.2, 0, 0, 1)

// [Agent] Ease-out over 200 ms: most of the travel happens in the first 50 ms, the card rises only 8 px and fades in.
export default function MotionMicro() {
	return (
		<MotionDiagram
			plot={{
				points: sample(ease),
				dots: moments.map((t) => [t, ease(t)]),
				xticks: ["0", "50", "100", "150", "200 ms"],
			}}
			tokens={[
				"--ease-out: cubic-bezier(0.2, 0, 0, 1);",
				"--dur-1: 120ms;  /* hover */",
				"--dur-2: 200ms;  /* menus */",
				"--dur-3: 320ms;  /* panels */",
				"/* opacity 0 → 1 · translateY 8px → 0 */",
			]}
			timeline={
				<>
					<Track bars={[[0, 12]]} label="120" at={12} />
					<Track bars={[[0, 20]]} kind="on" label="200" at={20} />
					<Track bars={[[0, 32]]} label="320" at={32} />
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 100}%`, `${t * 200} ms`],
				card: { opacity: ease(t), transform: `translateY(${(1 - ease(t)) * 8}px)` },
			}))}
		/>
	)
}
