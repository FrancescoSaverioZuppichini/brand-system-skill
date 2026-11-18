import { bezier, MotionDiagram, moments, Scale, sample, Track } from "./motion"

const ease = bezier(0.65, 0, 0.35, 1)
// [Agent] Each of the card's three lines starts 90 ms after the one before and all finish by 900 ms.
const line = (t: number, index: number) => ease(Math.max(0, Math.min(1, (t * 900 - index * 90) / 720)))

// [Agent] A slow symmetric ease over 900 ms; letterbox bars mark each frame as a shot, the card is wiped in by
// clip-path from below while it settles from 1.05 scale, and its lines rise in a stagger.
export default function MotionCinematic() {
	return (
		<MotionDiagram
			plot={{
				points: sample(ease),
				dots: moments.map((t) => [t, ease(t)]),
				xticks: ["0", "225", "450", "675", "900 ms"],
			}}
			tokens={[
				"--ease-cine: cubic-bezier(0.65, 0, 0.35, 1);",
				"--dur-reveal: 900ms;",
				"--stagger: 90ms;  /* per line */",
				"/* clip-path wipe up · scale 1.05 → 1 · lines staggered */",
			]}
			timeline={
				<>
					{[0, 9, 18].map((start, index) => (
						<Track key={start} bars={[[start, 72]]} kind="on" label={`line ${index + 1}`} at={start} inside />
					))}
					<Scale />
				</>
			}
			frames={moments.map((t) => ({
				caption: [`t ${t * 100}%`, `${t * 900} ms`],
				card: {
					clipPath: `inset(${(1 - ease(t)) * 100}% 0 0 0)`,
					transform: `scale(${1.05 - 0.05 * ease(t)})`,
				},
				lines: [0, 1, 2].map((index) => ({
					opacity: line(t, index),
					transform: `translateY(${(1 - line(t, index)) * 12}px)`,
				})),
				front: (
					<span className="pointer-events-none absolute inset-0 border-y-[14px] border-[var(--graphite)]" />
				),
			}))}
		/>
	)
}
