// [Agent] Ported from the hand-made specimen: an icy sky with pink and cyan haze, a perspective grid floor (flat lines
// tilted back in 3D so they converge on the horizon), chrome and soap-bubble orbs, and four-point sparkles.
const chromeOrb =
	"radial-gradient(circle at 35% 28%, white 0 8%, oklch(0.9 0.02 240) 20%, oklch(0.55 0.05 255) 52%, oklch(0.85 0.04 220) 72%, oklch(0.4 0.06 260) 100%)"
const bubbleOrb =
	"radial-gradient(circle at 32% 26%, white 0 9%, oklch(0.9 0.1 350 / .5) 22%, oklch(0.75 0.16 340 / .35) 65%, oklch(0.95 0.06 340 / .9) 100%)"
const orbs = [
	{ size: 74, left: 70, top: 54, chrome: true },
	{ size: 34, left: 150, top: 140, chrome: false },
	{ size: 96, left: 650, top: 36, chrome: false },
	{ size: 40, left: 720, top: 150, chrome: true },
]
const sparkles = [
	{ size: 34, left: 190, top: 60, fill: "url(#sparkle)" },
	{ size: 24, left: 600, top: 150, fill: "url(#sparkle)" },
	{ size: 40, left: 96, top: 330, fill: "var(--baby-pink)" },
]

export default function Y2k() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 overflow-hidden"
			style={{
				background:
					"radial-gradient(60% 50% at 18% 20%, oklch(0.92 0.06 350 / .9), transparent 70%), radial-gradient(50% 60% at 88% 70%, oklch(0.9 0.07 200 / .9), transparent 70%), linear-gradient(180deg, oklch(0.97 0.015 230), var(--ice) 60%, var(--chrome))",
			}}
		>
			<div className="absolute -inset-x-[200px] -bottom-[120px] h-[300px] origin-top [mask-image:linear-gradient(180deg,transparent,black_40%)] [transform:perspective(260px)_rotateX(62deg)] [background:repeating-linear-gradient(90deg,oklch(0.7_0.14_220/.55)_0_1px,transparent_1px_48px),repeating-linear-gradient(0deg,oklch(0.7_0.14_220/.55)_0_1px,transparent_1px_48px)]" />
			{orbs.map((orb) => (
				<i
					key={orb.left}
					className={`absolute rounded-full ${orb.chrome ? "shadow-[0_14px_24px_oklch(0.4_0.06_260/.25)]" : "shadow-[inset_0_0_0_1px_oklch(1_0_0/.8)]"}`}
					style={{
						width: orb.size,
						height: orb.size,
						left: orb.left,
						top: orb.top,
						background: orb.chrome ? chromeOrb : bubbleOrb,
					}}
				/>
			))}
			{sparkles.map((sparkle) => (
				<svg
					key={sparkle.left}
					className="absolute"
					style={{ left: sparkle.left, top: sparkle.top }}
					width={sparkle.size}
					height={sparkle.size}
					viewBox="0 0 40 40"
				>
					<linearGradient id="sparkle" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="white" />
						<stop offset="1" stopColor="var(--cyber-cyan)" />
					</linearGradient>
					<path
						d="M20 0C21 14 26 19 40 20 26 21 21 26 20 40 19 26 14 21 0 20 14 19 19 14 20 0Z"
						fill={sparkle.fill}
					/>
				</svg>
			))}
		</div>
	)
}
