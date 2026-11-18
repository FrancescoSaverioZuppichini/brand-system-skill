// [Agent] Ported from the hand-drawn specimen. The cut-out look is one SVG filter: dilate the art's alpha into a thick
// white border, drop a hard ink shadow from that border, then lay the art on top. It runs on the portrait and on the
// star, heart and play stickers; the squiggle, sparkle and hand-drawn arrow stay plain ink.
export default function Creator() {
	return (
		<svg aria-hidden="true" className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
			<defs>
				<filter id="creator-sticker" x="-20%" y="-20%" width="140%" height="140%">
					<feMorphology in="SourceAlpha" operator="dilate" radius="7" result="d" />
					<feFlood floodColor="#fff" />
					<feComposite in2="d" operator="in" result="outline" />
					<feOffset in="d" dy="7" result="o" />
					<feFlood floodColor="oklch(0.20 0.01 270)" />
					<feComposite in2="o" operator="in" result="shadow" />
					<feMerge>
						<feMergeNode in="shadow" />
						<feMergeNode in="outline" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<circle cx="610" cy="214" r="150" fill="var(--sun)" />
			<g filter="url(#creator-sticker)" transform="translate(612 160)">
				<path d="M-120 196 C-112 128 -66 104 0 104 C 66 104 112 128 120 196 Z" fill="var(--punch)" />
				<path
					d="M-34 108 C -20 136 20 136 34 108"
					fill="none"
					stroke="oklch(0.55 0.22 15)"
					strokeWidth="6"
					strokeLinecap="round"
				/>
				<rect x="-20" y="64" width="40" height="50" rx="16" fill="oklch(0.72 0.08 50)" />
				<ellipse cx="0" cy="18" rx="54" ry="62" fill="var(--skin)" />
				<path
					d="M-58 22 C -66 -40 -24 -66 12 -62 C 56 -58 70 -20 58 22 C 52 -6 34 -22 6 -24 C -22 -26 -48 -12 -58 22 Z"
					fill="oklch(0.32 0.05 40)"
				/>
				<circle cx="30" cy="-66" r="22" fill="oklch(0.32 0.05 40)" />
				<ellipse cx="-20" cy="16" rx="5" ry="7" fill="var(--ink)" />
				<ellipse cx="20" cy="16" rx="5" ry="7" fill="var(--ink)" />
				<circle cx="-34" cy="38" r="9" fill="var(--punch)" opacity="0.35" />
				<circle cx="34" cy="38" r="9" fill="var(--punch)" opacity="0.35" />
				<path d="M-22 40 C -18 66 18 66 22 40 Z" fill="var(--ink)" />
				<path d="M-16 42 H16 C 14 50 -14 50 -16 42 Z" fill="#fff" />
			</g>
			<g filter="url(#creator-sticker)">
				<path d="M748 52 l9 20 22 3 -16 15 4 22 -19 -11 -20 11 4 -22 -16 -15 22 -3 Z" fill="var(--punch)" />
				<path
					d="M752 282 c-14 -18 -38 -6 -30 14 c6 14 30 26 30 26 s24 -12 30 -26 c8 -20 -16 -32 -30 -14 Z"
					fill="var(--punch)"
				/>
				<circle cx="470" cy="70" r="22" fill="var(--ink)" />
				<path d="M464 59 L480 70 L464 81 Z" fill="#fff" />
			</g>
			<path
				d="M300 452 q12 -18 24 0 t24 0 t24 0"
				fill="none"
				stroke="var(--ink)"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<path d="M520 30 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z" fill="var(--ink)" />
			<g fill="none" stroke="var(--punch)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
				<path d="M262 62 C 310 30 370 34 418 70" />
				<path d="M402 70 L419 71 L414 54" />
			</g>
		</svg>
	)
}
