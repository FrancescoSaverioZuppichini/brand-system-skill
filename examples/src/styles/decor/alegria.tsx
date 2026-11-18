// [Agent] Ported from the hand-drawn specimen, the Alegria recipe on purpose: heads about 1/11 of the body, long
// rubbery limbs drawn as fat round-capped strokes, non-human skin (lilac, orange), two people dwarfed by a giant phone.
export default function Alegria() {
	return (
		<svg
			aria-hidden="true"
			className="absolute right-0 bottom-0"
			width="440"
			height="480"
			viewBox="0 0 440 480"
		>
			<path fill="var(--peach)" d="M40 470c-10-90 50-150 150-160s210 20 240 90l10 70z" />
			<circle cx="370" cy="70" r="34" fill="var(--lemon)" />
			<path
				d="M30 120q15-18 30 0t30 0 30 0"
				stroke="var(--teal)"
				strokeWidth="6"
				fill="none"
				strokeLinecap="round"
			/>
			<path fill="var(--teal)" d="M392 466c-70-40-90-150-40-250 60 70 80 170 40 250z" />
			<path fill="oklch(0.62 0.10 190)" d="M400 470c-10-90 10-170 40-210v210z" />
			<rect x="150" y="40" width="160" height="320" rx="28" fill="var(--navy)" />
			<rect x="162" y="56" width="136" height="288" rx="18" fill="var(--white)" />
			<rect x="176" y="76" width="70" height="12" rx="6" fill="var(--lilac)" />
			<rect x="176" y="104" width="108" height="56" rx="14" fill="var(--lemon)" />
			<rect x="200" y="172" width="84" height="38" rx="14" fill="var(--peach)" />
			<rect x="176" y="222" width="96" height="38" rx="14" fill="var(--lemon)" />
			<circle cx="230" cy="306" r="20" fill="var(--teal)" />
			<path
				d="M220 306l7 7 14-14"
				stroke="var(--white)"
				strokeWidth="5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g strokeLinecap="round" fill="none">
				<path d="M92 300q-14 70-26 128 M110 300q30 60 44 128" stroke="var(--navy)" strokeWidth="24" />
				<path d="M84 222q-30 50-22 104 M118 218q50-20 66-90" stroke="var(--lilac)" strokeWidth="13" />
			</g>
			<path fill="var(--navy)" d="M40 432q0-14 22-14h16q10 0 10 14v6H40z" />
			<path fill="var(--navy)" d="M146 432q0-14 14-14h16q24 0 24 14v6h-54z" />
			<path fill="var(--teal)" d="M78 206q22-14 44 0l6 96H70z" />
			<ellipse cx="62" cy="330" rx="12" ry="9" fill="var(--lilac)" />
			<ellipse cx="188" cy="122" rx="13" ry="10" fill="var(--lilac)" transform="rotate(-30 188 122)" />
			<rect x="96" y="192" width="8" height="14" fill="var(--lilac)" />
			<circle cx="100" cy="184" r="11" fill="var(--lilac)" />
			<path fill="var(--navy)" d="M89 182a11 11 0 0 1 22-2q-12-8-22 2z" />
			<g strokeLinecap="round" fill="none">
				<path d="M300 422q40-6 64-70 10 40 32 72 M300 426q60 6 110 2" stroke="var(--navy)" strokeWidth="22" />
				<path d="M300 340q22 30 60 6 M286 338q-20 30-12 60" stroke="var(--tangerine)" strokeWidth="12" />
			</g>
			<path fill="var(--lemon)" d="M282 328q16-10 30 0l8 96h-46z" />
			<ellipse cx="364" cy="346" rx="12" ry="9" fill="var(--tangerine)" />
			<path fill="var(--lilac)" d="M396 420q0-12 16-12h12q12 0 12 12v8h-40z" />
			<rect x="293" y="312" width="8" height="16" fill="var(--tangerine)" />
			<circle cx="297" cy="304" r="11" fill="var(--tangerine)" />
			<path fill="var(--navy)" d="M286 300q2-14 18-12 10 4 4 14-10-6-22-2z" />
		</svg>
	)
}
