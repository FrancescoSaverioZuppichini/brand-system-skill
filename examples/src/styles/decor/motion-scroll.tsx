import { MotionDiagram, moments, px, Scale, Track } from "./motion"

// [Agent] Progress is the scroll position, not time: the card's entry runs from entering the viewport to 40 % cover,
// so each frame is the viewport at one scroll offset (page moving up, scrollbar thumb moving down).
const range = 0.6
const progress = (x: number) => Math.min(1, (x * range) / 0.4)
const height = 130
const card = 62

export default function MotionScroll() {
	return (
		<MotionDiagram
			plot={{
				points: [
					[0, 0],
					[0.4 / range, 1],
					[1, 1],
				],
				dots: moments.map((x) => [x, progress(x)]),
				xticks: ["0", "15", "30", "45", "60 %"],
				xlabel: "scroll position (cover)",
				children: (
					<>
						<rect x={px(0)} y="16" width={px(0.4 / range) - px(0)} height="134" fill="var(--tint)" />
						<text x={px(0) + 6} y="28" className="fill-[var(--cobalt)] font-mono text-[9.5px]">
							animation-range
						</text>
					</>
				),
			}}
			tokens={[
				"animation-timeline: view();",
				"animation-range: entry 0% cover 40%;",
				"--parallax: 0.2;",
				"/* opacity 0 → 1 · translateY 20px → 0 · scale 0.9 → 1, by position */",
			]}
			timeline={
				<>
					<Track bars={[[0, 66.7]]} kind="on" label="animation-range" inside />
					<span className="grid grid-cols-[2fr_auto_1fr] font-mono text-[9px] leading-none text-[var(--pencil)]">
						<b className="font-normal">entry 0%</b>
						<b className="font-normal">cover 40%</b>
						<b className="text-right font-normal">60%</b>
					</span>
					<Scale marks={["no duration: progress is the scroll position"]} />
				</>
			}
			frames={moments.map((x) => {
				const cover = x * range
				const p = progress(x)
				const at = height - cover * (height + card)
				const scroll = cover * (height + card)
				return {
					caption: [`cover ${Math.round(cover * 100)}%`, `scroll ${Math.round(cover * 196)} px`],
					stage: { background: "var(--sheet)" },
					slot: { top: at },
					card: { top: at, opacity: p, transform: `translateY(${(1 - p) * 20}px) scale(${0.9 + 0.1 * p})` },
					back: (
						<>
							<i
								className="absolute right-[22px] left-[18px] h-10 rounded-md bg-[linear-gradient(120deg,oklch(0.94_0.02_250),oklch(0.86_0.045_262))] opacity-60"
								style={{ top: 30 - scroll * 0.2 }}
							/>
							<i
								className="absolute left-[9px] h-[5px] w-24 rounded-[3px] bg-[var(--shade)]"
								style={{ top: at - 38 }}
							/>
							<i
								className="absolute left-[9px] h-[5px] w-16 rounded-[3px] bg-[var(--shade)]"
								style={{ top: at - 26 }}
							/>
						</>
					),
					front: (
						<i
							className="absolute right-[3px] h-[26px] w-1 rounded-[2px] bg-[var(--shade)]"
							style={{ top: 4 + x * 96 }}
						/>
					),
				}
			})}
		/>
	)
}
