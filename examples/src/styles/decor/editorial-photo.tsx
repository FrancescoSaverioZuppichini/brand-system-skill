// [Agent] Ported from the hand-drawn specimen: a built still life standing in for a commissioned photo. Window light
// falls on plaster (a blurred bright quad crossed by blurred mullions), one vessel and a cup cast long soft shadows,
// then a warm multiply grade, a cool vignette and grain finish it like film.
export default function EditorialPhoto() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-10 left-10"
			width="420"
			height="420"
			viewBox="0 0 420 420"
		>
			<defs>
				<linearGradient id="ep-wall" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.66 0.035 65)" />
					<stop offset="1" stopColor="oklch(0.74 0.04 68)" />
				</linearGradient>
				<linearGradient id="ep-table" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.58 0.05 58)" />
					<stop offset="1" stopColor="oklch(0.40 0.04 50)" />
				</linearGradient>
				<linearGradient id="ep-clay" x2="1">
					<stop offset="0" stopColor="oklch(0.93 0.02 80)" />
					<stop offset=".35" stopColor="oklch(0.86 0.025 75)" />
					<stop offset=".8" stopColor="oklch(0.56 0.03 60)" />
					<stop offset="1" stopColor="oklch(0.44 0.03 250)" />
				</linearGradient>
				<linearGradient id="ep-cup" x2="1">
					<stop offset="0" stopColor="oklch(0.62 0.07 45)" />
					<stop offset=".4" stopColor="oklch(0.52 0.07 42)" />
					<stop offset="1" stopColor="oklch(0.30 0.04 40)" />
				</linearGradient>
				<radialGradient id="ep-vignette" r=".75">
					<stop offset=".55" stopColor="var(--shadow-grade)" stopOpacity="0" />
					<stop offset="1" stopColor="var(--shadow-grade)" stopOpacity=".55" />
				</radialGradient>
				<filter id="ep-soft" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="7" />
				</filter>
				<filter id="ep-softer" x="-30%" y="-30%" width="160%" height="160%">
					<feGaussianBlur stdDeviation="12" />
				</filter>
				<filter id="ep-contact" x="-30%" y="-200%" width="160%" height="500%">
					<feGaussianBlur stdDeviation="3" />
				</filter>
				<filter id="ep-grain">
					<feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="2" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
			</defs>
			<rect width="420" height="280" fill="url(#ep-wall)" />
			<polygon
				points="168,34 330,14 352,226 196,238"
				filter="url(#ep-soft)"
				fill="oklch(0.92 0.06 80)"
				opacity=".85"
			/>
			<g filter="url(#ep-soft)" stroke="oklch(0.62 0.04 65)" strokeWidth="9" opacity=".9">
				<line x1="250" y1="22" x2="274" y2="234" />
				<line x1="182" y1="134" x2="342" y2="118" />
			</g>
			<rect y="276" width="420" height="144" fill="url(#ep-table)" />
			<rect y="274" width="420" height="4" fill="oklch(0.78 0.05 70)" opacity=".6" />
			<polygon
				points="200,282 360,282 420,350 250,360"
				fill="oklch(0.80 0.07 75)"
				opacity=".55"
				filter="url(#ep-soft)"
			/>
			<g fill="oklch(0.22 0.03 250)" filter="url(#ep-softer)">
				<polygon points="160,330 205,330 380,354 330,368" opacity=".55" />
				<polygon points="258,350 300,348 400,370 380,380" opacity=".5" />
				<polygon points="216,262 250,248 330,250 300,266" opacity=".35" />
			</g>
			<g fill="oklch(0.18 0.02 250)" opacity=".7" filter="url(#ep-contact)">
				<ellipse cx="178" cy="332" rx="34" ry="5" />
				<ellipse cx="280" cy="354" rx="30" ry="4" />
			</g>
			<path
				d="M178 144c-1-10-6-26 6-34M184 112c8-22 2-40 16-58M200 54c8-6 12-18 10-28M191 92c-10-8-22-10-30-22M196 72c10-2 18-10 22-18"
				fill="none"
				stroke="oklch(0.30 0.03 50)"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				fill="url(#ep-clay)"
				d="M160 144h36l-2 8c-2 10 0 30 4 40 20 18 34 40 34 74 0 32-12 56-24 66h-60c-12-10-24-34-24-66 0-34 14-56 34-74 4-10 6-30 4-40z"
			/>
			<ellipse cx="178" cy="144" rx="18" ry="4" fill="oklch(0.40 0.03 60)" />
			<path fill="url(#ep-cup)" d="M248 304h60l-4 40c-1 6-6 10-12 10h-28c-6 0-11-4-12-10z" />
			<ellipse cx="278" cy="304" rx="30" ry="6" fill="oklch(0.30 0.03 40)" />
			<ellipse cx="278" cy="303" rx="30" ry="6" fill="none" stroke="oklch(0.70 0.06 50)" strokeWidth="1.5" />
			<rect
				width="420"
				height="420"
				fill="oklch(0.80 0.07 60)"
				opacity=".12"
				className="mix-blend-multiply"
			/>
			<rect width="420" height="420" fill="url(#ep-vignette)" />
			<rect width="420" height="420" filter="url(#ep-grain)" opacity=".28" className="mix-blend-overlay" />
		</svg>
	)
}
