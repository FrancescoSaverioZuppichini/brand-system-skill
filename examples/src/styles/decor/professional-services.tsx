// [Agent] Ported from the hand-drawn specimen: a generic firm crest (shield, chevron, three roundels) in place of the
// nav's box mark, search and menu glyphs on the right, and an architecture-photo stand-in, a glass tower shot from
// below with its mullions converging above the frame.
export default function ProfessionalServices() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute top-[13px] left-12" width="34" height="40" viewBox="0 0 34 40">
				<path d="M2 2h30v16c0 10-7 17-15 20C9 35 2 28 2 18Z" fill="var(--navy)" />
				<g fill="none" stroke="var(--gold)">
					<path d="M5.5 5.5h23v12.5c0 8-5.5 13.5-11.5 16-6-2.5-11.5-8-11.5-16Z" />
					<path d="M8 24 17 14l9 10" strokeWidth="2.4" />
				</g>
				<g fill="var(--gold)">
					<circle cx="11" cy="10" r="1.8" />
					<circle cx="23" cy="10" r="1.8" />
					<circle cx="17" cy="29" r="1.8" />
				</g>
			</svg>
			<svg
				className="absolute top-6 right-12"
				width="62"
				height="18"
				viewBox="0 0 62 18"
				fill="none"
				stroke="var(--navy)"
				strokeWidth="1.5"
			>
				<circle cx="7.5" cy="7.5" r="6" />
				<path d="m12 12 5 5" />
				<path d="M40 3h22M40 8h22M40 13h22" />
			</svg>
			<svg className="absolute top-24 left-[470px]" width="282" height="344" viewBox="0 0 282 344">
				<defs>
					<linearGradient id="pro-sky" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="oklch(0.90 0.02 250)" />
						<stop offset="1" stopColor="oklch(0.96 0.008 80)" />
					</linearGradient>
					<linearGradient id="pro-lit" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="oklch(0.52 0.05 255)" />
						<stop offset="1" stopColor="var(--slate)" />
					</linearGradient>
					<linearGradient id="pro-dark" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="oklch(0.30 0.06 260)" />
						<stop offset="1" stopColor="oklch(0.20 0.05 262)" />
					</linearGradient>
				</defs>
				<rect width="282" height="344" fill="url(#pro-sky)" />
				<polygon points="150,0 172,0 120,344 0,344 0,250" fill="url(#pro-lit)" />
				<polygon points="172,0 194,0 282,250 282,344 120,344" fill="url(#pro-dark)" />
				<g fill="none" stroke="oklch(0.90 0.02 250)">
					<path
						d="M152 0 L20 344 M156 0 L46 344 M160 0 L72 344 M164 0 L96 344 M168 0 L112 344 M176 0 L150 344 M180 0 L180 344 M184 0 L210 344 M188 0 L240 344 M192 0 L270 344"
						strokeOpacity="0.35"
					/>
					<path
						d="M8 330 L120 300 L282 326 M30 270 L128 248 L282 272 M60 200 L136 186 L260 204 M96 120 L146 112 L230 122 M124 60 L156 56 L208 62"
						strokeOpacity="0.22"
					/>
				</g>
				<path d="M172 0 L120 344" stroke="oklch(0.95 0.01 80)" strokeOpacity="0.7" strokeWidth="1.2" />
			</svg>
		</div>
	)
}
