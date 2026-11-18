// [Agent] Ported from the hand-made specimen, a stand-in for a public-domain oil: shapes pushed around by low-frequency
// noise so their edges read as brushwork, a stretched-noise layer for directional strokes, a fine weave for the canvas
// and a warm varnish over all. The museum label under it carries the title, as a gallery wall would.
export default function Painterly() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute top-8 left-[352px] size-[416px]" viewBox="0 0 416 416">
				<defs>
					<radialGradient id="ground" cx=".32" cy=".38" r=".85">
						<stop offset="0" stopColor="oklch(0.46 0.06 70)" />
						<stop offset=".55" stopColor="oklch(0.27 0.04 60)" />
						<stop offset="1" stopColor="oklch(0.15 0.02 50)" />
					</radialGradient>
					<linearGradient id="ledge" x2="0" y2="1">
						<stop offset="0" stopColor="oklch(0.58 0.08 72)" />
						<stop offset="1" stopColor="oklch(0.42 0.06 65)" />
					</linearGradient>
					<linearGradient id="jug" x2="1">
						<stop offset="0" stopColor="oklch(0.96 0.02 90)" />
						<stop offset=".3" stopColor="oklch(0.88 0.03 85)" />
						<stop offset=".7" stopColor="oklch(0.55 0.04 70)" />
						<stop offset="1" stopColor="oklch(0.32 0.03 60)" />
					</linearGradient>
					<linearGradient id="bottle" x2="1">
						<stop offset="0" stopColor="oklch(0.30 0.05 150)" />
						<stop offset=".22" stopColor="oklch(0.55 0.08 145)" />
						<stop offset=".35" stopColor="oklch(0.32 0.05 150)" />
						<stop offset="1" stopColor="oklch(0.14 0.03 150)" />
					</linearGradient>
					<radialGradient id="peach" cx=".35" cy=".3" r=".75">
						<stop offset="0" stopColor="oklch(0.88 0.10 80)" />
						<stop offset=".45" stopColor="oklch(0.70 0.15 50)" />
						<stop offset="1" stopColor="oklch(0.38 0.10 35)" />
					</radialGradient>
					<radialGradient id="varnish" cx=".4" cy=".42" r=".75">
						<stop offset=".5" stopColor="oklch(0.15 0.02 50)" stopOpacity="0" />
						<stop offset="1" stopColor="oklch(0.15 0.02 50)" stopOpacity=".6" />
					</radialGradient>
					<filter id="brush" x="-10%" y="-10%" width="120%" height="120%">
						<feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="3" seed="11" />
						<feDisplacementMap in="SourceGraphic" scale="6" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="1.2" />
					</filter>
					<filter id="strokes">
						<feTurbulence type="fractalNoise" baseFrequency=".012 .16" numOctaves="2" seed="4" />
						<feColorMatrix type="saturate" values="0" />
					</filter>
					<filter id="weave">
						<feTurbulence type="turbulence" baseFrequency=".9 .9" numOctaves="1" seed="2" />
						<feColorMatrix type="saturate" values="0" />
					</filter>
				</defs>
				<g filter="url(#brush)">
					<rect x="-20" y="-20" width="456" height="456" fill="url(#ground)" />
					<path d="M-20 286L436 270V436H-20z" fill="url(#ledge)" />
					<path d="M-20 330L436 320V436H-20z" fill="oklch(0.30 0.04 60)" />
					<path d="M300 300L420 300 440 314 300 318z" fill="oklch(0.25 0.03 55)" opacity=".7" />
					<path
						d="M232 70h40v70c22 14 30 44 30 90 0 34-6 58-14 72h-72c-8-14-14-38-14-72 0-46 8-76 30-90z"
						fill="url(#bottle)"
					/>
					<path d="M190 300l140 4-20 14-120-4z" fill="oklch(0.22 0.03 55)" opacity=".6" />
					<path
						d="M110 128c18-6 54-6 72 0l-6 16c26 22 40 56 40 96 0 34-12 54-26 64h-88c-14-10-26-30-26-64 0-40 14-74 40-96z"
						fill="url(#jug)"
					/>
					<path d="M206 164c34-6 40 50 6 78" stroke="oklch(0.62 0.04 70)" strokeWidth="9" fill="none" />
					<ellipse cx="146" cy="130" rx="36" ry="6" fill="oklch(0.40 0.04 60)" />
					<circle cx="110" cy="300" r="26" fill="url(#peach)" />
					<circle cx="156" cy="306" r="22" fill="url(#peach)" />
					<path d="M86 284c-10-14 0-26 12-24" stroke="oklch(0.35 0.06 140)" strokeWidth="7" fill="none" />
					<g strokeLinecap="round" fill="none">
						<path d="M100 200c-2 30 2 56 10 78" stroke="oklch(0.98 0.02 90)" strokeWidth="9" opacity=".8" />
						<path d="M118 160c-6 10-10 22-12 34" stroke="oklch(0.98 0.02 90)" strokeWidth="6" opacity=".7" />
						<path d="M245 160c-4 30-4 70 0 120" stroke="oklch(0.70 0.08 140)" strokeWidth="4" opacity=".7" />
						<path
							d="M100 290c4-4 8-5 12-4M148 296c3-3 7-4 10-3"
							stroke="oklch(0.95 0.06 85)"
							strokeWidth="5"
						/>
						<path
							d="M20 40c60 10 110 4 160 20M30 90c50 4 80 0 120 12"
							stroke="oklch(0.48 0.06 70)"
							strokeWidth="16"
							opacity=".25"
						/>
					</g>
				</g>
				<rect width="416" height="416" filter="url(#strokes)" opacity=".4" className="mix-blend-soft-light" />
				<rect
					width="416"
					height="416"
					fill="oklch(0.70 0.10 75)"
					opacity=".16"
					className="mix-blend-multiply"
				/>
				<rect width="416" height="416" fill="url(#varnish)" />
				<rect width="416" height="416" filter="url(#weave)" opacity=".12" className="mix-blend-overlay" />
			</svg>
			<div className="absolute top-[458px] left-[352px] flex w-[416px] justify-between font-mono text-[10px] leading-[1.4] text-[var(--umber)]">
				<span>Still life with a jug and two peaches</span>
				<span>Oil on canvas, detail</span>
			</div>
		</div>
	)
}
