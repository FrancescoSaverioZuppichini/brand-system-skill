// [Agent] Ported from the hand-made specimen: three comic panels with black key lines, each on its own Ben-Day screen
// (two offset dot grids make the staggered print screen). A speech bubble for the headline, a 16-point burst with
// uneven radii (so it looks inked, not computed) for the number, and action lines around the button.
const screen = (ink: string, paper: string, size: number, dot: number) =>
	`radial-gradient(circle, var(--${ink}) ${dot}%, transparent ${dot + 3}%) 0 0 / ${size}px ${size}px, radial-gradient(circle, var(--${ink}) ${dot}%, transparent ${dot + 3}%) ${size / 2}px ${size / 2}px / ${size}px ${size}px, var(--${paper})`

export default function PopArt() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute *:border-4 *:border-[var(--black)]">
			<div
				className="top-3.5 left-3.5 h-[472px] w-[470px]"
				style={{ background: screen("blue", "white", 16, 30) }}
			>
				<svg className="absolute top-[64px] left-[14px]" width="440" height="300" viewBox="0 0 440 300">
					<path
						d="M220 12 C340 12 430 64 430 140 C430 214 344 262 236 266 L210 296 L196 264 C86 256 10 210 10 140 C10 64 100 12 220 12Z"
						fill="var(--white)"
						stroke="var(--black)"
						strokeWidth="4"
					/>
				</svg>
			</div>
			<div
				className="top-3.5 left-[498px] h-[268px] w-[288px]"
				style={{ background: screen("red", "yellow", 18, 34) }}
			>
				<svg className="absolute top-2 left-1.5" width="270" height="250" viewBox="0 0 270 250">
					<polygon
						fill="var(--white)"
						stroke="var(--black)"
						strokeWidth="4"
						strokeLinejoin="round"
						points="135,8 158,62 216,22 198,86 266,80 216,124 262,160 200,164 222,222 164,190 142,232 120,190 68,226 84,170 10,180 58,136 6,98 72,92 44,30 106,68"
					/>
				</svg>
			</div>
			<div
				className="top-[296px] left-[498px] h-[190px] w-[288px]"
				style={{ background: screen("pink", "white", 16, 34) }}
			>
				<svg className="absolute inset-0" width="288" height="190" viewBox="0 0 288 190">
					<g stroke="var(--black)" strokeWidth="3" strokeLinecap="round">
						<line x1="140" y1="6" x2="140" y2="44" />
						<line x1="276" y1="18" x2="232" y2="56" />
						<line x1="12" y1="172" x2="56" y2="140" />
						<line x1="276" y1="170" x2="236" y2="138" />
					</g>
				</svg>
			</div>
		</div>
	)
}
