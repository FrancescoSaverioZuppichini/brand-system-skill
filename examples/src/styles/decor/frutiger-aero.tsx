// [Agent] Ported from the hand-made specimen: a Vista sky with light streaks over green hills, floating soap bubbles,
// and the Windows 7 glass window the copy sits in (frosted frame with diagonal reflections, caption buttons, a white
// client area). The gloss everywhere is white on the top half stopping at a hard edge.
const gloss = "linear-gradient(180deg, oklch(1 0 0 / .85), oklch(1 0 0 / .35) 49%, oklch(1 0 0 / 0) 50%)"
const bubbles = [
	{ left: 504, top: 30, size: 46 },
	{ left: 760, top: 250, size: 30 },
	{ left: 470, top: 400, size: 64 },
	{ left: 16, top: 420, size: 22 },
	{ left: 700, top: 400, size: 40 },
]

export default function FrutigerAero() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 overflow-hidden"
			style={{
				background:
					"radial-gradient(40% 50% at 82% 8%, oklch(1 0 0 / .9), transparent 70%), linear-gradient(180deg, var(--sky-deep), var(--sky) 55%, oklch(0.93 0.05 205) 78%)",
			}}
		>
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.84 0.18 135)" />
					<stop offset=".35" stopColor="var(--grass)" />
					<stop offset="1" stopColor="oklch(0.5 0.15 145)" />
				</linearGradient>
				<linearGradient id="hill-back" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.78 0.16 140)" />
					<stop offset="1" stopColor="oklch(0.45 0.14 148)" />
				</linearGradient>
				<filter id="haze">
					<feGaussianBlur stdDeviation="3" />
				</filter>
				<path
					d="M-40 260 C 160 200, 380 300, 860 150"
					fill="none"
					stroke="white"
					strokeWidth="10"
					opacity=".35"
					filter="url(#haze)"
				/>
				<path
					d="M-40 290 C 200 230, 420 330, 860 190"
					fill="none"
					stroke="white"
					strokeWidth="3"
					opacity=".7"
				/>
				<path
					d="M-40 320 C 220 270, 440 360, 860 230"
					fill="none"
					stroke="oklch(0.92 0.08 200)"
					strokeWidth="2"
					opacity=".6"
				/>
				<ellipse cx="620" cy="560" rx="460" ry="150" fill="url(#hill-back)" />
				<ellipse cx="180" cy="580" rx="520" ry="170" fill="url(#hill)" />
				<ellipse cx="150" cy="440" rx="300" ry="18" fill="white" opacity=".35" filter="url(#haze)" />
			</svg>
			{bubbles.map(({ left, top, size }) => (
				<i
					key={left}
					className="absolute overflow-hidden rounded-full shadow-[inset_0_0_0_1px_oklch(1_0_0/.6)] [background:radial-gradient(circle_at_50%_55%,oklch(1_0_0/0)_55%,oklch(1_0_0/.55)_72%,oklch(0.95_0.06_200/.9)_100%)]"
					style={{ left, top, width: size, height: size }}
				>
					<b className="absolute top-[10%] left-[18%] h-[26%] w-[40%] -rotate-[24deg] rounded-full bg-gradient-to-b from-white to-transparent" />
				</i>
			))}
			<div
				className="absolute top-11 left-10 h-[319px] w-[452px] rounded-[9px] px-[7px] pt-[30px] pb-[7px] backdrop-blur-[6px] backdrop-saturate-[1.4] shadow-[0_0_0_1px_oklch(0.25_0.06_250/.7),inset_0_0_0_1px_oklch(1_0_0/.7),0_14px_34px_oklch(0.25_0.1_250/.45)]"
				style={{
					background:
						"linear-gradient(115deg, oklch(1 0 0 / 0) 0 24%, oklch(1 0 0 / .22) 24% 30%, oklch(1 0 0 / 0) 30% 52%, oklch(1 0 0 / .16) 52% 55%, oklch(1 0 0 / 0) 55%), linear-gradient(180deg, oklch(0.88 0.06 220 / .62), oklch(0.78 0.08 225 / .5))",
				}}
			>
				<div className="absolute top-0 right-[7px] flex *:grid *:h-[19px] *:w-[27px] *:place-items-center *:shadow-[inset_0_0_0_1px_oklch(1_0_0/.6),0_0_0_.5px_oklch(0.25_0.06_250/.8)]">
					<i
						className="rounded-bl-[5px]"
						style={{
							background: `${gloss}, linear-gradient(180deg, oklch(0.85 0.05 220 / .7), oklch(0.7 0.07 230 / .7))`,
						}}
					>
						<svg width="10" height="10">
							<rect
								x="1"
								y="7"
								width="8"
								height="2"
								fill="white"
								stroke="oklch(0.3 0.05 250)"
								strokeWidth=".5"
							/>
						</svg>
					</i>
					<i
						style={{
							background: `${gloss}, linear-gradient(180deg, oklch(0.85 0.05 220 / .7), oklch(0.7 0.07 230 / .7))`,
						}}
					>
						<svg width="10" height="10">
							<rect x="1" y="1" width="8" height="7" fill="none" stroke="white" strokeWidth="2" />
						</svg>
					</i>
					<i
						className="!w-[46px] rounded-br-[5px]"
						style={{
							background: `${gloss}, linear-gradient(180deg, oklch(0.7 0.18 30), oklch(0.52 0.2 28))`,
						}}
					>
						<svg width="12" height="12">
							<path d="M2 2l8 8M10 2l-8 8" stroke="white" strokeWidth="2.4" />
						</svg>
					</i>
				</div>
				<div className="size-full rounded-[2px] shadow-[0_0_0_1px_oklch(0.3_0.06_250/.55)] [background:linear-gradient(180deg,var(--cloud),oklch(0.96_0.02_220)_70%,oklch(0.92_0.04_215))]" />
			</div>
		</div>
	)
}
