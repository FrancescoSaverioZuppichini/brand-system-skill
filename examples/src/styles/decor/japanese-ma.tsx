// [Agent] Ported from the hand-made specimen: washi fibres (noise stretched along one axis reads as long fibres, not
// grain), one ink-wash stone roughened by displacement so its edge bleeds like sumi, and a small vermilion seal.
export default function JapaneseMa() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full opacity-30 mix-blend-multiply">
				<filter id="fibres">
					<feTurbulence type="fractalNoise" baseFrequency=".004 .06" numOctaves="3" seed="2" />
					<feColorMatrix values="0 0 0 0 .6  0 0 0 0 .56  0 0 0 0 .48  0 0 0 .5 -.18" />
				</filter>
				<rect width="100%" height="100%" filter="url(#fibres)" />
			</svg>
			<svg className="absolute top-[140px] left-[470px] h-[180px] w-[260px]" viewBox="0 0 260 180">
				<filter id="ink" x="-20%" y="-20%" width="140%" height="140%">
					<feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="2" seed="9" result="t" />
					<feDisplacementMap
						in="SourceGraphic"
						in2="t"
						scale="9"
						xChannelSelector="R"
						yChannelSelector="G"
						result="d"
					/>
					<feGaussianBlur in="d" stdDeviation=".5" />
				</filter>
				<radialGradient id="wash" cx=".38" cy=".3" r=".8">
					<stop offset="0" stopColor="var(--stone)" />
					<stop offset=".6" stopColor="oklch(0.34 0.005 60)" />
					<stop offset="1" stopColor="var(--sumi)" />
				</radialGradient>
				<path
					filter="url(#ink)"
					fill="url(#wash)"
					d="M40 132 C28 104 46 64 88 52 C120 42 150 30 186 44 C220 58 236 92 224 118 C214 140 178 146 140 148 C100 150 52 156 40 132Z"
				/>
				<ellipse cx="134" cy="160" rx="110" ry="4" fill="var(--usuzumi)" opacity=".18" />
			</svg>
			<svg className="absolute top-[384px] left-[752px] size-5" viewBox="0 0 20 20">
				<rect width="20" height="20" rx="1.5" fill="var(--shu)" />
				<path
					d="M5 5 H15 M10 5 V15 M5 15 H15 M5 10 H8 M12 10 H15"
					stroke="var(--washi)"
					strokeWidth="1.6"
					fill="none"
				/>
			</svg>
		</div>
	)
}
