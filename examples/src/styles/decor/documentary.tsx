// [Agent] Ported from the hand-drawn specimen: an uncropped black-and-white print of a maker at her bench by a bright
// window (bloom, grain, motion-blurred arm), shown with its film rebate. The frame numbers in the black border prove
// the frame is uncropped, a documentary convention; the who/where/when caption sits under it.
export default function Documentary() {
	return (
		<div aria-hidden="true" className="absolute inset-0 font-mono">
			<div className="absolute top-10 left-[316px] h-[316px] w-[450px] bg-[var(--black)] text-[8px] leading-none font-medium tracking-[0.1em] text-[oklch(0.55_0_0)] *:absolute *:inset-x-[14px] *:flex *:justify-between">
				<div className="top-1.5">
					<span>14</span>
					<span>▶ 14A</span>
					<span>15</span>
				</div>
				<svg
					className="top-5 left-[14px] h-[276px] w-[422px]"
					viewBox="0 0 480 314"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient id="doc-wall" x2="1">
							<stop offset="0" stopColor="#7a7a7a" />
							<stop offset=".5" stopColor="#4a4a4a" />
							<stop offset="1" stopColor="#262626" />
						</linearGradient>
						<linearGradient id="doc-floor" x2="0" y2="1">
							<stop offset="0" stopColor="#3c3c3c" />
							<stop offset="1" stopColor="#141414" />
						</linearGradient>
						<filter id="doc-bloom" x="-50%" y="-50%" width="200%" height="200%">
							<feGaussianBlur stdDeviation="14" />
						</filter>
						<filter id="doc-soft">
							<feGaussianBlur stdDeviation="1" />
						</filter>
						<filter id="doc-blur" x="-30%" y="-30%" width="160%" height="160%">
							<feGaussianBlur stdDeviation="6 1" />
						</filter>
						<filter id="doc-grain">
							<feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="9" />
							<feColorMatrix type="saturate" values="0" />
						</filter>
					</defs>
					<g filter="url(#doc-soft)">
						<rect width="480" height="230" fill="url(#doc-wall)" />
						<rect
							x="124"
							y="24"
							width="182"
							height="172"
							fill="#f4f4f4"
							filter="url(#doc-bloom)"
							opacity=".75"
						/>
						<rect x="130" y="30" width="170" height="160" fill="#efefef" />
						<path d="M215 30v160M130 110h170" stroke="#444" strokeWidth="7" />
						<rect y="226" width="480" height="88" fill="url(#doc-floor)" />
						<polygon
							points="130,232 300,232 400,314 120,314"
							fill="#a0a0a0"
							opacity=".35"
							filter="url(#doc-bloom)"
						/>
						<g fill="#222">
							<rect x="356" y="70" width="4" height="40" />
							<rect x="348" y="66" width="20" height="8" />
							<rect x="384" y="72" width="3" height="46" />
							<circle cx="420" cy="84" r="12" fill="none" stroke="#222" strokeWidth="3" />
							<rect x="446" y="70" width="5" height="50" />
						</g>
						<g fill="#161616">
							<ellipse cx="250" cy="98" rx="14" ry="16" />
							<circle cx="238" cy="86" r="7" />
							<rect x="244" y="108" width="12" height="16" />
						</g>
						<path
							fill="#181818"
							d="M226 128C236 118 266 116 280 124C292 132 296 160 300 200H222C220 170 220 140 226 128Z"
						/>
						<path
							d="M284 132q24 26 40 62"
							stroke="#181818"
							strokeWidth="13"
							fill="none"
							strokeLinecap="round"
						/>
						<path
							d="M230 136q-6 40 34 60"
							stroke="#262626"
							strokeWidth="13"
							fill="none"
							strokeLinecap="round"
							filter="url(#doc-blur)"
						/>
						<rect
							x="124"
							y="24"
							width="182"
							height="172"
							fill="#fff"
							filter="url(#doc-bloom)"
							opacity=".18"
						/>
						<path d="M352 0v52" stroke="#111" strokeWidth="2" />
						<path d="M338 52h28l8 18h-44z" fill="#151515" />
						<ellipse cx="352" cy="72" rx="16" ry="4" fill="#e6e6e6" filter="url(#doc-bloom)" opacity=".8" />
						<rect x="60" y="198" width="400" height="14" fill="#141414" />
						<rect x="60" y="196" width="400" height="3" fill="#8a8a8a" />
						<rect x="80" y="212" width="12" height="90" fill="#0e0e0e" />
						<rect x="432" y="212" width="12" height="90" fill="#0e0e0e" />
						<rect x="370" y="178" width="58" height="20" fill="#3a3a3a" />
						<rect x="370" y="178" width="58" height="3" fill="#8a8a8a" />
						<path d="M232 194l110-8 2 6-110 8z" fill="#6a6a6a" />
					</g>
					<rect
						width="480"
						height="314"
						filter="url(#doc-grain)"
						opacity=".4"
						className="mix-blend-overlay"
					/>
				</svg>
				<div className="bottom-1.5">
					<span>▶ 14</span>
					<span>14A</span>
				</div>
			</div>
			<p className="absolute top-[366px] left-[316px] text-[11px] leading-[1.45] text-[var(--caption)]">
				A furniture maker at her bench. Porto, March 2019.
			</p>
		</div>
	)
}
