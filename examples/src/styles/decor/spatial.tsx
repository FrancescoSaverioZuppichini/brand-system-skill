const slab =
	"shadow-[inset_0_1px_0_oklch(1_0_0/.75),0_3px_0_oklch(0.85_0.01_250/.55),0_28px_50px_-12px_oklch(0.08_0.02_250/.6),0_8px_16px_oklch(0.08_0.02_250/.25)]"
const orb =
	"rounded-full [background:radial-gradient(circle_at_34%_30%,oklch(0.92_0.06_250),var(--sky)_45%,oklch(0.30_0.10_255)_100%)]"

// [Agent] Ported from the hand-made specimen: a room lit from the upper left, a floor grid tipped back around its top
// edge so that edge becomes the horizon, two blue orbs at different depths, a blurred far panel turned away, and a
// dock floating nearer the viewer. The slabs' 3 px lighter step reads as glass thickness.
export default function Spatial() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:radial-gradient(50%_40%_at_22%_18%,oklch(0.62_0.05_70/.55),transparent_70%),linear-gradient(oklch(0.46_0.04_245),var(--environment)_58%,oklch(0.27_0.02_250)_61%,var(--floor))]"
		>
			<div className="absolute -inset-x-[400px] top-[302px] h-[640px] origin-top [transform:perspective(420px)_rotateX(74deg)] [background:linear-gradient(90deg,oklch(1_0_0/.1)_1px,transparent_1px)_0_0/64px_64px,linear-gradient(oklch(1_0_0/.1)_1px,transparent_1px)_0_0/64px_64px] [mask:linear-gradient(transparent,#000_40%)]" />
			<div
				className={`absolute top-[318px] left-24 size-[30px] shadow-[0_16px_8px_-12px_oklch(0_0_0/.5)] ${orb}`}
			/>
			<div
				className={`absolute top-[60px] left-[640px] flex h-[230px] w-[210px] origin-left flex-col gap-3 rounded-[28px] bg-[oklch(0.97_0.005_250/.6)] p-6 opacity-85 blur-[1.6px] [transform:perspective(900px)_rotateY(-30deg)_translateZ(-260px)] ${slab}`}
			>
				<i className="h-16 w-3/5 rounded-[14px] bg-[oklch(0.66_0.16_250/.35)]" />
				<i className="h-2.5 rounded-md bg-[oklch(0.18_0.01_250/.14)]" />
				<i className="h-2.5 w-4/5 rounded-md bg-[oklch(0.18_0.01_250/.14)]" />
				<i className="h-2.5 w-[55%] rounded-md bg-[oklch(0.18_0.01_250/.14)]" />
			</div>
			<div
				className={`absolute top-[384px] left-[310px] flex h-[54px] w-[180px] items-center justify-evenly rounded-full bg-[oklch(0.97_0.005_250/.6)] backdrop-blur-xl ${slab}`}
			>
				{[0, 1, 2, 3].map((dot) => (
					<b
						key={dot}
						className={
							dot
								? "size-[22px] rounded-full bg-[oklch(0.18_0.01_250/.2)]"
								: "size-[22px] rounded-full bg-[var(--sky)]"
						}
					/>
				))}
			</div>
			<div
				className={`absolute top-[330px] left-[650px] size-[104px] shadow-[0_52px_30px_-36px_oklch(0_0_0/.7)] ${orb}`}
			/>
		</div>
	)
}
