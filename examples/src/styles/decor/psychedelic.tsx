// [Agent] Ported from the hand-made specimen. The op-art rings are a plain repeating radial gradient bent into a swirl by
// a turbulence displacement filter; the melt filter (low-frequency noise pushing outlines around) is defined here and
// also applied to the headline by the style's css. The blue ellipse the words fill and the green blob panel complete it.
export default function Psychedelic() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute size-0">
				<filter id="swirl" x="0" y="0" width="100%" height="100%">
					<feTurbulence type="fractalNoise" baseFrequency=".005" numOctaves="1" seed="11" />
					<feDisplacementMap in="SourceGraphic" scale="110" xChannelSelector="R" yChannelSelector="G" />
				</filter>
				<filter id="melt" x="-5%" y="-5%" width="110%" height="110%">
					<feTurbulence type="fractalNoise" baseFrequency=".012 .018" numOctaves="1" seed="4" />
					<feDisplacementMap in="SourceGraphic" scale="22" xChannelSelector="R" yChannelSelector="G" />
				</filter>
			</svg>
			<div className="absolute -inset-[60px] [background:repeating-radial-gradient(circle_at_36%_50%,var(--magenta)_0_13px,var(--green)_13px_26px)] [filter:url(#swirl)]" />
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<ellipse
					cx="272"
					cy="250"
					rx="246"
					ry="226"
					fill="var(--blue)"
					stroke="var(--ink)"
					strokeWidth="5"
					filter="url(#melt)"
				/>
			</svg>
			<div className="absolute top-[34px] left-[532px] h-[432px] w-[236px] rounded-[46%_54%_40%_60%/22%_26%_74%_78%] border-4 border-[var(--ink)] bg-[var(--green)]" />
		</div>
	)
}
