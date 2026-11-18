// [Agent] Cotton paper with long fibres, the double printer's border, red rule-and-diamond ornaments, and the rule
// between the card and the button. The two ink filters are defined here and applied to the type by the style's css:
// fine noise thresholded into voids and cut out of every inked shape, larger blotchy voids for the wood type.
const voids = "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -14 4.4"

export default function Letterpress() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full">
				<filter id="fibres">
					<feTurbulence type="fractalNoise" baseFrequency="0.04 0.6" numOctaves="3" seed="4" />
					<feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.28  0 0 0 0.16 0" />
				</filter>
				<filter id="ink">
					<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="2" result="noise" />
					<feColorMatrix in="noise" values={voids} result="voids" />
					<feComposite in="SourceGraphic" in2="voids" operator="out" />
				</filter>
				<filter id="wood">
					<feTurbulence type="fractalNoise" baseFrequency="0.08 0.5" numOctaves="3" seed="9" result="noise" />
					<feColorMatrix in="noise" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -14 4.6" result="voids" />
					<feComposite in="SourceGraphic" in2="voids" operator="out" />
				</filter>
				<rect width="100%" height="100%" filter="url(#fibres)" />
			</svg>
			<div className="absolute inset-5 border-[3px] border-[var(--ink)] shadow-[inset_0_0_0_4px_var(--paper),inset_0_0_0_5px_var(--ink),0_1px_0_oklch(1_0_0/0.65)]" />
			<div className="absolute inset-x-0 top-[45px] flex justify-center gap-[96px] *:h-px *:w-[70px] *:bg-[var(--red)]">
				<span />
				<span />
			</div>
			<div className="absolute inset-x-0 top-[236px] flex items-center justify-center gap-2.5 text-[var(--red)]">
				<span className="h-px w-[150px] bg-current" />
				<span className="size-[7px] rotate-45 bg-current" />
				<span className="h-px w-[150px] bg-current" />
			</div>
			<span className="absolute top-[358px] left-[399px] h-[92px] w-px bg-[var(--ink)]" />
		</div>
	)
}
