import { Grain } from "./grain"

// [Agent] A pink sun, a blue halftone patch and a yellow slab under the subline, each multiplied like a separate ink
// layer, then paper grain over everything.
export default function Riso() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:mix-blend-multiply">
			<div className="absolute top-[330px] left-0 h-[170px] w-[520px] bg-[var(--yellow)]" />
			<div className="absolute top-7 left-[466px] size-[300px] rounded-full bg-[var(--pink)]" />
			<div className="absolute -top-10 left-[600px] size-[240px] rounded-full [background:radial-gradient(circle,var(--blue)_42%,transparent_46%)_0_0/8px_8px] [mask-image:linear-gradient(200deg,#000_30%,transparent_85%)]" />
			<Grain />
		</div>
	)
}
