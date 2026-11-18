const foil =
	"conic-gradient(from 200deg, var(--lilac), var(--mint), var(--sky), var(--peach), var(--lilac), var(--mint), var(--peach), var(--sky), var(--lilac), var(--mint), var(--peach), var(--lilac))"

// [Agent] A foil object: a blurred conic sheen clipped to the shape, a white specular spot and a pale rebound light on
// top, and a lilac core shadow inset, which is what turns a flat gradient into pearlescent plastic.
function Foil({ className }: { className: string }) {
	return (
		<div
			className={`absolute isolate overflow-hidden shadow-[inset_-18px_-26px_50px_oklch(0.62_0.12_300/.45),inset_14px_18px_36px_oklch(1_0_0/.9),0_36px_60px_-24px_oklch(0.55_0.12_300/.45)] ${className}`}
		>
			<div className="absolute -inset-[30%] -z-10 blur-[14px]" style={{ background: foil }} />
			<div className="absolute inset-0 rounded-[inherit] [background:radial-gradient(28%_22%_at_30%_24%,oklch(1_0_0/.95),transparent_70%),radial-gradient(60%_40%_at_70%_92%,oklch(0.97_0.03_200/.7),transparent_70%)]" />
		</div>
	)
}

// [Agent] Ported from the hand-made specimen: a pearl ground, a big foil orb behind the headline, a tilted capsule, a
// bead and a foil ring laid flat in perspective.
export default function Holographic() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_40%,oklch(0.98_0.01_300),var(--pearl)_70%)]"
		>
			<Foil className="top-[46px] left-[250px] size-[300px] rounded-full" />
			<Foil className="top-[74px] left-14 h-16 w-[150px] -rotate-[24deg] rounded-full" />
			<Foil className="top-[90px] left-[640px] size-[74px] rounded-full" />
			<div
				className="absolute top-[330px] left-[70px] size-[120px] rotate-[20deg] rounded-full [mask:radial-gradient(closest-side,transparent_52%,#000_55%)] [transform:rotateX(58deg)] drop-shadow-[0_12px_18px_oklch(0.55_0.12_300/.35)]"
				style={{ background: foil }}
			/>
		</div>
	)
}
