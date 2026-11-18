// [Agent] The red sun, with a black halftone screen that grows toward its lower edge through a mask: it stands in for
// the photomontage faces of the originals without a photo.
export default function Constructivism() {
	return (
		<div
			aria-hidden="true"
			className="absolute -top-10 left-[520px] size-[270px] overflow-hidden rounded-full bg-[var(--red)]"
		>
			<div className="absolute inset-0 [background:radial-gradient(circle,var(--soot)_34%,transparent_36%)_0_0/9px_9px] [mask-image:linear-gradient(200deg,transparent_35%,#000_95%)]" />
		</div>
	)
}
