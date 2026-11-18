// [Agent] Ported from the hand-drawn specimen: an unDraw-style spot scene. Solid fills, no outlines, rounded joints:
// a person at a laptop on a blue blob, with the stock props (plant, mug, framed picture, sun, dot grid, half disc).
export default function FlatVector() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-[30px] right-[6px]"
			width="430"
			height="430"
			viewBox="0 0 430 430"
		>
			<path
				fill="var(--tint)"
				d="M214 46c88-4 170 52 182 140 12 84-36 178-128 200-96 22-210-6-234-98C10 196 104 52 214 46z"
			/>
			<circle cx="360" cy="86" r="26" fill="var(--lemon)" />
			<path fill="var(--coral)" d="M44 120a30 30 0 0 1 60 0z" />
			<g fill="var(--cobalt)">
				{[120, 136, 152].flatMap((cx) =>
					[60, 76].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />),
				)}
			</g>
			<rect x="268" y="128" width="88" height="66" rx="6" fill="var(--white)" />
			<path fill="var(--cobalt)" d="M276 186l26-30 18 18 12-12 16 24z" />
			<circle cx="334" cy="148" r="7" fill="var(--lemon)" />
			<ellipse cx="222" cy="398" rx="170" ry="10" fill="var(--line)" />
			<rect x="168" y="150" width="112" height="170" rx="22" fill="var(--coral)" />
			<rect x="213" y="182" width="22" height="26" rx="6" fill="var(--skin)" />
			<rect x="180" y="200" width="88" height="110" rx="34" fill="var(--lemon)" />
			<circle cx="224" cy="164" r="25" fill="var(--skin)" />
			<path fill="var(--ink)" d="M198 162a26 26 0 0 1 52 0c-6-10-16-15-26-15s-20 5-26 15z" />
			<circle cx="224" cy="132" r="12" fill="var(--ink)" />
			<path
				d="M194 236q-26 34 12 58 M254 236q26 34-12 58"
				stroke="var(--lemon)"
				strokeWidth="22"
				strokeLinecap="round"
				fill="none"
			/>
			<rect x="166" y="226" width="116" height="74" rx="7" fill="var(--ink)" />
			<circle cx="224" cy="262" r="8" fill="var(--white)" opacity=".9" />
			<g fill="var(--cobalt)">
				<rect x="80" y="298" width="300" height="14" rx="7" />
				<rect x="104" y="312" width="12" height="86" rx="6" />
				<rect x="344" y="312" width="12" height="86" rx="6" />
			</g>
			<rect x="314" y="268" width="24" height="30" rx="5" fill="var(--coral)" />
			<path d="M338 276h4a8 8 0 0 1 0 16h-4" stroke="var(--coral)" strokeWidth="5" fill="none" />
			<path fill="var(--coral)" d="M30 336h56l-8 62H38z" />
			<path d="M58 336V230" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
			<g fill="var(--cobalt)">
				<path d="M58 300c-30-4-40-26-36-44 22 2 36 20 36 44z" />
				<path d="M58 280c26-6 36-30 30-48-22 6-32 26-30 48z" />
				<path d="M58 248c-22-10-26-32-18-46 18 8 24 28 18 46z" />
				<path d="M58 232c14-14 14-34 4-44-12 12-12 30-4 44z" />
			</g>
		</svg>
	)
}
