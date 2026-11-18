import { Photo } from "@/demo/photo"

// [Agent] A captioned figure in the right column and a column rule: the page reads as a magazine spread, not a hero.
export default function Editorial() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<span className="absolute top-[30px] right-10 font-mono text-[11px] font-semibold tracking-[0.12em] text-[var(--ink)]">
				NO. 01
			</span>
			<span className="absolute top-[72px] bottom-8 left-[510px] w-px bg-[var(--rule)]" />
			<figure className="absolute top-[72px] right-10 w-[220px]">
				<Photo scene="object" variant={0} className="h-[150px]" />
				<figcaption className="mt-2 font-mono text-[11px] text-[var(--ink)]">Fig. 1</figcaption>
			</figure>
		</div>
	)
}
