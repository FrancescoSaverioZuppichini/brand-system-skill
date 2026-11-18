// [Agent] Ported from the hand-made specimen: pastel haze, glossy clay balls and a puffy star, and the inflated panel the
// copy sits on. Clay is a dark inner shadow at the bottom, a light one at the top and a soft drop beneath.
const balls = [
	{
		left: 590,
		top: 44,
		size: 110,
		tint: "var(--sky)",
		light: "oklch(0.97 0.02 230)",
		dark: "oklch(0.65 0.12 245)",
	},
	{
		left: 700,
		top: 150,
		size: 52,
		tint: "var(--lilac)",
		light: "oklch(0.97 0.03 300)",
		dark: "oklch(0.6 0.14 300)",
	},
	{
		left: 470,
		top: 400,
		size: 64,
		tint: "var(--peach)",
		light: "oklch(0.97 0.03 60)",
		dark: "oklch(0.7 0.12 40)",
	},
]

export default function Claymorphism() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0"
			style={{
				background:
					"radial-gradient(60% 70% at 85% 20%, oklch(0.92 0.05 230), transparent 70%), radial-gradient(50% 60% at 10% 90%, oklch(0.93 0.05 50), transparent 70%), var(--lilac-mist)",
			}}
		>
			{balls.map((ball) => (
				<i
					key={ball.left}
					className="absolute rounded-full shadow-[0_14px_24px_oklch(0.5_0.1_280/.3)]"
					style={{
						left: ball.left,
						top: ball.top,
						width: ball.size,
						height: ball.size,
						background: `radial-gradient(circle at 35% 30%, ${ball.light}, ${ball.tint} 45%, ${ball.dark})`,
					}}
				/>
			))}
			<svg
				className="absolute top-[400px] left-[680px] drop-shadow-[0_12px_14px_oklch(0.55_0.12_80/.35)]"
				width="84"
				height="84"
				viewBox="0 0 100 100"
			>
				<radialGradient id="puff" cx=".38" cy=".32" r=".7">
					<stop offset="0" stopColor="oklch(0.98 0.06 95)" />
					<stop offset=".5" stopColor="oklch(0.88 0.13 90)" />
					<stop offset="1" stopColor="oklch(0.72 0.14 70)" />
				</radialGradient>
				<path
					d="M50 6c4 0 6 3 8 8l7 15 16 2c6 1 9 3 10 6s-1 6-5 10L74 58l3 16c1 6 0 9-3 11s-6 1-11-2L50 75l-14 8c-5 3-8 4-11 2s-4-5-3-11l3-16-12-11c-4-4-6-7-5-10s4-5 10-6l16-2 7-15c2-5 4-8 9-8z"
					fill="url(#puff)"
				/>
			</svg>
			<div className="absolute top-14 left-10 h-[356px] w-[478px] rounded-[40px] bg-[var(--marshmallow)] shadow-[inset_0_-10px_18px_oklch(0.35_0.08_295/.22),inset_0_10px_16px_oklch(1_0_0/.9),0_20px_36px_oklch(0.45_0.1_300/.25)]" />
		</div>
	)
}
