const shadows = [
	{ left: 488, top: 360, width: 200, height: 30, opacity: 0.7 },
	{ left: 700, top: 160, width: 60, height: 14, opacity: 0.45 },
	{ left: 428, top: 150, width: 90, height: 14, opacity: 0.4 },
	{ left: 684, top: 372, width: 84, height: 14, opacity: 0.45 },
]

// [Agent] Ported from the hand-drawn specimen. Every object is a radial highlight up-left, a dark inset down-right
// (soft occlusion) and its own blurred contact shadow on the floor: a jar with a lid and knob, a ball, a ring (a
// flattened radial band) and a two-tone capsule.
export default function Clay3d() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute">
			{shadows.map((style) => (
				<div key={style.left} className="rounded-full bg-[var(--floor)] blur-[10px]" style={style} />
			))}
			<div
				className="top-[196px] left-[500px] size-[170px] rounded-[52px_52px_64px_64px]"
				style={{
					background:
						"radial-gradient(circle at 30% 26%, var(--coral-lit), var(--coral) 46%, var(--brick) 100%)",
					boxShadow:
						"inset -16px -22px 36px oklch(0.50 0.13 28 / .55), inset 12px 10px 20px oklch(1 0 0 / .35)",
				}}
			/>
			<div
				className="top-[166px] left-[486px] h-[52px] w-[198px] rounded-[30px]"
				style={{
					background:
						"radial-gradient(ellipse at 34% 20%, var(--blue-lit), var(--clay-blue) 50%, var(--cobalt))",
					boxShadow:
						"inset -8px -10px 18px oklch(0.45 0.14 260 / .5), 0 10px 14px -8px oklch(0.45 0.10 30 / .6)",
				}}
			/>
			<div
				className="top-[128px] left-[560px] size-[50px] rounded-full"
				style={{
					background:
						"radial-gradient(circle at 32% 28%, var(--butter-lit), var(--butter) 45%, var(--ochre))",
					boxShadow: "inset -6px -8px 12px oklch(0.60 0.12 75 / .5)",
				}}
			/>
			<div
				className="top-[70px] left-[690px] size-[76px] rounded-full"
				style={{
					background:
						"radial-gradient(circle at 32% 28%, var(--blue-lit), var(--clay-blue) 45%, var(--cobalt))",
					boxShadow: "inset -8px -10px 16px oklch(0.45 0.14 260 / .5)",
				}}
			/>
			<div
				className="top-[58px] left-[418px] size-[104px] rounded-full"
				style={{
					transform: "rotate(-24deg) scaleY(.62)",
					background:
						"radial-gradient(circle, transparent 30%, var(--ochre) 31%, var(--butter) 40%, var(--butter-lit) 50%, var(--butter) 60%, var(--ochre) 70%, transparent 71%)",
				}}
			/>
			<div
				className="top-[296px] left-[676px] h-11 w-[104px] overflow-hidden rounded-[22px]"
				style={{
					transform: "rotate(-32deg)",
					background: "linear-gradient(180deg, var(--coral-lit), var(--coral) 45%, var(--brick))",
					boxShadow: "inset 0 -6px 10px oklch(0.50 0.13 28 / .4)",
				}}
			>
				<div className="absolute inset-y-0 right-0 left-1/2 bg-[linear-gradient(180deg,var(--putty),oklch(0.90_0.02_260)_50%,oklch(0.78_0.03_260))]" />
			</div>
		</div>
	)
}
