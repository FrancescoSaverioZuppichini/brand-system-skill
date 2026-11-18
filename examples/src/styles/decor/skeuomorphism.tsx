// [Agent] Ported from the hand-made specimen (iOS 6 Notes on a linen desk, a Game Center felt card beside it). Every
// material is a flat colour with grey fractal noise blended over it: overlay turns the noise into leather grain or felt
// fuzz, soft-light into paper tooth, and two noises stretched across each other into linen threads.
const leather = "linear-gradient(180deg, oklch(0.47 0.07 52), var(--leather) 55%, var(--leather-deep))"
const paper =
	"linear-gradient(90deg, transparent 46px, var(--margin-red) 46px 47px, transparent 47px 50px, var(--margin-red) 50px 51px, transparent 51px), repeating-linear-gradient(180deg, transparent 0 29px, var(--rule-blue) 29px 30px), var(--notepad)"
const felt = "radial-gradient(120% 90% at 50% 20%, oklch(0.52 0.1 150), var(--felt) 55%, var(--felt-deep))"
const stubs =
	"polygon(0 0,100% 0,100% 70%,97% 100%,93% 35%,89% 90%,85% 25%,81% 80%,76% 45%,72% 100%,67% 30%,63% 85%,58% 40%,54% 100%,49% 30%,45% 75%,40% 45%,36% 100%,31% 35%,27% 85%,22% 25%,18% 90%,13% 45%,9% 100%,5% 40%,0 85%)"
const plus =
	"linear-gradient(180deg, oklch(0.5 0.07 52), oklch(0.36 0.06 48) 50%, oklch(0.3 0.05 46) 51%, oklch(0.38 0.06 48))"

function Noise({ blend }: { blend: string }) {
	return (
		<svg className={`absolute inset-0 size-full ${blend}`}>
			<rect width="100%" height="100%" filter="url(#skeuo-grain)" />
		</svg>
	)
}

export default function Skeuomorphism() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full mix-blend-overlay">
				<filter id="skeuo-grain">
					<feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="4" seed="7" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<filter id="threads-h">
					<feTurbulence type="fractalNoise" baseFrequency=".012 .95" numOctaves="2" seed="3" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<filter id="threads-v">
					<feTurbulence type="fractalNoise" baseFrequency=".95 .012" numOctaves="2" seed="9" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter="url(#threads-h)" />
				<rect width="100%" height="100%" filter="url(#threads-v)" opacity=".5" />
			</svg>
			<div className="absolute top-[26px] left-9 h-[448px] w-[488px] overflow-hidden rounded-[10px] shadow-[0_2px_3px_oklch(0_0_0/.35),0_18px_34px_oklch(0.2_0.03_60/.45)]">
				<div className="absolute inset-[62px_0_0_0]" style={{ background: paper }}>
					<Noise blend="mix-blend-soft-light" />
				</div>
				<div className="relative h-[62px]" style={{ background: leather }}>
					<Noise blend="mix-blend-overlay" />
					<span className="absolute inset-x-1.5 bottom-[7px] border-b-2 border-dashed border-[var(--stitch)] drop-shadow-[0_1px_0_oklch(0.15_0.03_45)]" />
					<span
						className="absolute top-[13px] right-3 grid h-[30px] w-[38px] place-items-center rounded-md shadow-[inset_0_1px_0_oklch(1_0_0/.35),0_1px_0_oklch(1_0_0/.15),0_0_0_1px_oklch(0.18_0.03_45)] *:col-start-1 *:row-start-1 *:h-[3px] *:w-[14px] *:rounded-[1px] *:bg-[oklch(0.92_0.02_80)] *:shadow-[0_-1px_0_oklch(0_0_0/.5)]"
						style={{ background: plus }}
					>
						<i />
						<i className="rotate-90" />
					</span>
				</div>
				<div
					className="relative h-[9px] bg-[oklch(0.9_0.06_92)] drop-shadow-[0_1px_1px_oklch(0_0_0/.4)]"
					style={{ clipPath: stubs }}
				/>
			</div>
			<div
				className="absolute top-[92px] left-[556px] h-[300px] w-[210px] overflow-hidden rounded-2xl shadow-[inset_0_2px_8px_oklch(0_0_0/.45),inset_0_-1px_0_oklch(1_0_0/.15),0_14px_28px_oklch(0.2_0.03_60/.45),0_1px_2px_oklch(0_0_0/.4)]"
				style={{ background: felt }}
			>
				<Noise blend="mix-blend-overlay" />
				<span className="absolute inset-[9px] rounded-[10px] border-2 border-dashed border-[oklch(0.82_0.06_140/.8)] drop-shadow-[0_1px_0_oklch(0.2_0.05_150)]" />
			</div>
		</div>
	)
}
