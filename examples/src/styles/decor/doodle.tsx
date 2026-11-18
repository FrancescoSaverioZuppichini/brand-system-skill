// [Agent] Ported from the hand-drawn specimen. The wobble filter (low-frequency noise nudging every stroke a few
// pixels) is defined here once: the art uses it, and the specimen css points the highlighter, the red loop and the
// hand-drawn boxes at it too, so straight CSS boxes come out as a shaky marker line.
export default function Doodle() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg width="0" height="0" className="absolute">
				<filter id="doodle-wobble" filterUnits="userSpaceOnUse" x="-100" y="-100" width="1000" height="800">
					<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
					<feDisplacementMap in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
				</filter>
			</svg>
			<svg
				className="absolute top-2 left-[420px] overflow-visible"
				width="370"
				height="440"
				viewBox="0 0 370 440"
			>
				<g
					filter="url(#doodle-wobble)"
					fill="none"
					stroke="var(--ink)"
					strokeWidth="2.4"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M296 46a22 22 0 1 0 1 0M298 14v12M330 30l-9 8M340 64h-12M266 30l9 8" />
					<path d="M96 296C140 290 190 294 222 288" stroke="var(--highlighter)" strokeWidth="46" />
					<path d="M62 250L240 248M64 252C62 252 86 334 88 334M238 246L214 334M90 334C130 336 180 335 214 334" />
					<path
						stroke="var(--marker)"
						strokeWidth="1.8"
						d="M92 270l20-20M96 296l46-46M104 318l66-66M124 330l76-76M154 332l60-60M186 330l28-28"
					/>
					<path d="M152 248C150 200 156 150 148 96M150 198C120 190 90 170 80 136 112 134 142 156 150 196M150 166C170 150 196 140 222 146 216 172 184 184 152 176M148 120C130 110 120 90 124 64 144 74 154 96 148 120" />
					<path strokeWidth="1.6" d="M102 160L146 192M200 156L156 172M132 82L146 112" />
					<path d="M268 240h56c2 30 0 66-4 92h-48c-4-26-6-62-4-92zM324 256c22-2 26 30 0 32" />
					<path strokeWidth="1.8" d="M286 222c-8-10 8-16 0-28M304 222c-8-10 8-16 0-28" />
					<path d="M20 354C120 350 250 352 360 350" />
					<path d="M40 70l8 8M48 70l-8 8M222 64v14M215 71h14M26 200l6-4 6 4M350 168v10M345 173h10" />
					<path stroke="var(--redpen)" d="M96 420C50 410 30 360 56 312M44 316l12-4 2 12" />
				</g>
			</svg>
		</div>
	)
}
