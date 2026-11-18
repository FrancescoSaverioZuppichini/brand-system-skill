// [Agent] Ported from the hand-made specimen: a grey portrait bust split into its red and cyan channels, each shoved a few
// pixels apart and screen-blended back (white survives only where they still overlap), then four horizontal slices torn
// sideways and a few stuck pixels. CRT scan lines run over the whole frame, copy included, so type and image share one
// broken signal.
export default function Glitch() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0">
			<svg className="absolute top-0 left-[392px] h-[500px] w-[408px]" viewBox="0 0 408 500">
				<defs>
					<linearGradient id="lit" x2="1">
						<stop offset="0" stopColor="#fff" />
						<stop offset=".45" stopColor="#8a8a8a" />
						<stop offset="1" stopColor="#151515" />
					</linearGradient>
					<radialGradient id="dark" cx=".3" cy=".3" r=".8">
						<stop offset="0" stopColor="#3a3a3a" />
						<stop offset="1" stopColor="#000" />
					</radialGradient>
					<g id="bust">
						<rect width="408" height="500" fill="url(#dark)" />
						<ellipse cx="204" cy="190" rx="78" ry="98" fill="url(#lit)" />
						<rect x="172" y="270" width="64" height="70" fill="url(#lit)" />
						<path d="M40 500c10-110 70-150 164-160 94 10 154 50 164 160z" fill="url(#lit)" />
						<rect y="120" width="408" height="3" fill="#fff" opacity=".7" />
					</g>
					<filter id="red-channel">
						<feColorMatrix values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
					</filter>
					<filter id="cyan-channel">
						<feColorMatrix values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
					</filter>
					<g id="split">
						<rect width="408" height="500" fill="#000" />
						<use href="#bust" filter="url(#red-channel)" x="-9" className="mix-blend-screen" />
						<use href="#bust" filter="url(#cyan-channel)" x="7" className="mix-blend-screen" />
					</g>
					<clipPath id="tear1">
						<rect y="150" width="408" height="22" />
					</clipPath>
					<clipPath id="tear2">
						<rect y="236" width="408" height="10" />
					</clipPath>
					<clipPath id="tear3">
						<rect y="300" width="408" height="38" />
					</clipPath>
					<clipPath id="tear4">
						<rect y="410" width="408" height="16" />
					</clipPath>
				</defs>
				<use href="#split" />
				<use href="#split" clipPath="url(#tear1)" transform="translate(-36 0)" />
				<use href="#split" clipPath="url(#tear2)" transform="translate(28 0)" />
				<use href="#split" clipPath="url(#tear3)" transform="translate(54 0)" />
				<use href="#split" clipPath="url(#tear4)" transform="translate(-22 0)" />
				<g opacity=".9">
					<rect x="150" y="338" width="6" height="162" fill="url(#lit)" />
					<rect x="236" y="338" width="10" height="162" fill="var(--cyan)" opacity=".5" />
					<rect x="262" y="338" width="3" height="162" fill="var(--red)" />
					<rect x="96" y="338" width="4" height="162" fill="#fff" opacity=".6" />
				</g>
				<rect x="300" y="64" width="44" height="12" fill="var(--red)" />
				<rect x="60" y="214" width="26" height="8" fill="var(--cyan)" />
				<rect x="320" y="270" width="70" height="4" fill="#fff" />
			</svg>
			<div className="absolute inset-0 z-10 [background:repeating-linear-gradient(0deg,oklch(0_0_0/0.35)_0_1px,transparent_1px_3px)]" />
		</div>
	)
}
