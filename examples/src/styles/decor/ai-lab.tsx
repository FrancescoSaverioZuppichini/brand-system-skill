// [Agent] Ported from the hand-drawn specimen: a paper cut-out held by loose ink loops on a clay plate. A low-frequency
// noise displacement wobbles every stroke like a brush pen, so it reads drawn, not vector.
export default function AiLab() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-[80px] left-[470px] rounded-md bg-[var(--clay)]"
			width="290"
			height="244"
			viewBox="0 3 290 244"
		>
			<defs>
				<filter
					id="ai-lab-hand"
					x="-10%"
					y="-10%"
					width="120%"
					height="120%"
					colorInterpolationFilters="sRGB"
				>
					<feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" seed="4" result="n" />
					<feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G" />
				</filter>
			</defs>
			<g
				filter="url(#ai-lab-hand)"
				stroke="var(--ink)"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			>
				<path
					d="M92 70 C 130 52 196 58 214 96 C 232 134 206 186 156 192 C 108 198 70 170 70 128 C 70 98 76 80 92 70 Z"
					fill="var(--stone)"
					stroke="none"
				/>
				<path
					d="M40 190 C 30 120 90 60 150 74 C 210 88 236 150 200 186 C 170 216 110 204 104 160 C 98 118 150 104 172 132 C 188 152 170 176 150 170"
					strokeWidth="6"
				/>
				<path d="M150 170 C 136 166 132 150 142 144" strokeWidth="6" />
				<path d="M232 44 C 248 60 256 84 252 108" strokeWidth="5" />
				<circle cx="58" cy="58" r="7" fill="var(--ink)" stroke="none" />
				<circle cx="244" cy="206" r="4" fill="var(--ink)" stroke="none" />
				<path d="M30 226 L74 226 M196 226 L262 226" strokeWidth="3" />
			</g>
		</svg>
	)
}
