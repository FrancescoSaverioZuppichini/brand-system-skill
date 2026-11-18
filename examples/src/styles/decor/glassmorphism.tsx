// [Agent] Ported from the hand-made specimen: three blurred colour blobs, two hard-edged spheres half behind the glass
// (so the frosting shows as a blurred copy of a sharp shape), and the frosted panel the copy sits on.
export default function Glassmorphism() {
	return (
		<div aria-hidden="true" className="absolute inset-0 overflow-hidden *:absolute *:rounded-full">
			<i className="-top-[60px] -left-10 size-[340px] bg-[var(--blob-violet)] blur-[30px]" />
			<i className="top-[250px] left-[330px] h-[300px] w-[360px] bg-[var(--blob-pink)] opacity-90 blur-[30px]" />
			<i className="-top-10 left-[560px] h-[280px] w-[300px] bg-[var(--blob-cyan)] opacity-85 blur-[30px]" />
			<i className="top-10 left-[396px] size-[150px] [background:radial-gradient(circle_at_32%_28%,oklch(0.95_0.06_210),var(--blob-cyan)_35%,oklch(0.5_0.18_270)_95%)]" />
			<i className="top-[348px] left-[30px] size-[110px] [background:radial-gradient(circle_at_32%_28%,oklch(0.95_0.06_350),var(--blob-pink)_38%,oklch(0.45_0.2_310)_95%)]" />
			<div className="top-[78px] left-16 h-[336px] w-[452px] !rounded-[22px] bg-white/14 backdrop-blur-[24px] backdrop-saturate-[1.3] shadow-[inset_0_0_0_1px_oklch(1_0_0/.3),inset_0_1px_0_oklch(1_0_0/.45),0_24px_48px_oklch(0.15_0.08_285/.35)]" />
		</div>
	)
}
