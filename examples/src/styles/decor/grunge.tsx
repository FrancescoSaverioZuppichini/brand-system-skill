// [Agent] Ported from the hand-made specimen: a "photo" that is only streaky olive noise on black (a fourth-generation
// scan), a film burn screened over its corner, scratches in ink and in paper colour, and brown stains multiplied
// over everything so no edge stays clean.
export default function Grunge() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute -top-2.5 left-[470px] h-[300px] w-[340px] rotate-2" viewBox="0 0 340 300">
				<filter id="streaks">
					<feTurbulence type="fractalNoise" baseFrequency=".02 .9" numOctaves="3" seed="4" />
					<feColorMatrix values="0 0 0 0 .62  0 0 0 0 .6  0 0 0 0 .48  2.6 0 0 0 -1.25" />
				</filter>
				<rect width="340" height="300" fill="var(--tar)" />
				<rect width="340" height="300" filter="url(#streaks)" />
			</svg>
			<div className="absolute -top-20 left-[560px] h-[300px] w-[340px] mix-blend-screen [background:radial-gradient(closest-side,oklch(0.62_0.14_50/.75),oklch(0.40_0.12_40/.35)_55%,transparent)]" />
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<g stroke="var(--tar)" strokeLinecap="round" fill="none" opacity=".7">
					<path d="M12 300 L280 288" strokeWidth=".8" />
					<path d="M420 460 L790 430" strokeWidth="1.2" />
					<path d="M300 10 L330 490" strokeWidth=".6" />
					<path d="M60 480 L210 300" strokeWidth=".7" />
					<path d="M720 300 L760 498" strokeWidth=".8" />
				</g>
				<g stroke="var(--dirty-white)" strokeWidth="1" opacity=".8">
					<path d="M490 40 L700 70" />
					<path d="M520 230 L790 150" />
					<path d="M600 10 L610 280" />
				</g>
				<rect x="300" y="318" width="160" height="10" fill="var(--tar)" />
				<g stroke="var(--tar)" strokeWidth="1.2" fill="none">
					<circle cx="760" cy="470" r="9" />
					<path d="M746 470 H774 M760 456 V484" />
				</g>
			</svg>
			<svg className="pointer-events-none absolute inset-0 z-20 size-full opacity-55 mix-blend-multiply">
				<filter id="stain">
					<feTurbulence type="fractalNoise" baseFrequency=".008" numOctaves="4" seed="21" />
					<feColorMatrix values="0 0 0 0 .55  0 0 0 0 .47  0 0 0 0 .34  0 0 0 1.8 -.85" />
				</filter>
				<rect width="100%" height="100%" filter="url(#stain)" />
			</svg>
		</div>
	)
}
