// [Agent] Ported from the hand-made specimen: a Mucha frame. Whiplash stems, leaves and a lily drawn once and mirrored to
// the other side so the poster stays symmetrical, an arch with a rose halo ringed in gold, a keystone, and the plinth
// the number card sits in.
function Side() {
	return (
		<g stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
			<path
				fill="none"
				d="M150 500 C150 420 92 400 96 330 C100 262 170 262 166 200 C162 142 92 150 98 104 C102 72 140 70 140 96 C140 112 120 114 118 102"
			/>
			<path
				fill="none"
				d="M176 500 C176 430 128 410 132 350 C136 296 196 286 196 230 C196 176 150 160 158 120"
			/>
			<path
				fill="none"
				d="M120 500 C116 450 60 440 52 380 C44 310 104 300 92 236 C84 196 40 196 44 228 C46 244 64 244 64 230"
			/>
			<path fill="var(--sage)" d="M96 330 C70 320 52 290 58 262 C80 274 96 300 96 330Z" />
			<path fill="var(--sage)" d="M132 350 C156 336 176 310 172 282 C150 296 134 320 132 350Z" />
			<path fill="var(--sage)" d="M52 380 C34 360 30 330 40 310 C56 330 58 356 52 380Z" />
			<path fill="var(--sage-pale)" d="M166 200 C190 186 208 160 204 136 C184 150 168 172 166 200Z" />
			<g transform="translate(158 120)">
				<path fill="var(--rose)" d="M0 0 C-14 -10 -20 -34 -10 -54 C-2 -38 2 -18 0 0Z" />
				<path fill="var(--rose)" d="M0 0 C14 -10 20 -34 10 -54 C2 -38 -2 -18 0 0Z" />
				<path fill="var(--rose-pale)" d="M0 0 C-6 -16 -6 -40 0 -60 C6 -40 6 -16 0 0Z" />
			</g>
			<circle cx="64" cy="230" r="4" fill="var(--gold)" />
			<circle cx="118" cy="102" r="4" fill="var(--gold)" />
		</g>
	)
}

export default function ArtNouveau() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<radialGradient id="halo" cx=".5" cy=".5" r=".5">
					<stop offset=".6" stopColor="var(--rose-pale)" />
					<stop offset="1" stopColor="var(--cream)" />
				</radialGradient>
			</defs>
			<g transform="translate(-22 0)">
				<Side />
			</g>
			<g transform="translate(822 0) scale(-1 1)">
				<Side />
			</g>
			<path
				d="M180 500 V240 A220 220 0 0 1 620 240 V500"
				fill="var(--sage-pale)"
				stroke="var(--ink)"
				strokeWidth="2"
			/>
			<circle cx="400" cy="240" r="196" fill="url(#halo)" />
			<circle cx="400" cy="240" r="196" fill="none" stroke="var(--gold)" strokeWidth="10" />
			<circle
				cx="400"
				cy="240"
				r="196"
				fill="none"
				stroke="var(--ink)"
				strokeWidth="1.2"
				strokeDasharray="2 14"
			/>
			<circle cx="400" cy="240" r="186" fill="none" stroke="var(--ink)" />
			<circle cx="400" cy="240" r="202" fill="none" stroke="var(--ink)" />
			<path d="M190 500 V240 A210 210 0 0 1 610 240 V500" fill="none" stroke="var(--ink)" />
			<path d="M386 8 H414 L407 26 H393Z" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.4" />
			<rect x="180" y="418" width="440" height="64" fill="var(--cream)" stroke="var(--ink)" strokeWidth="2" />
			<rect x="188" y="426" width="424" height="48" fill="none" stroke="var(--ink)" />
			<g fill="var(--gold)" stroke="var(--ink)">
				<rect x="180" y="410" width="16" height="16" />
				<rect x="604" y="410" width="16" height="16" />
			</g>
		</svg>
	)
}
