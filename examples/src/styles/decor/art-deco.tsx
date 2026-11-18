// [Agent] Ported from the hand-made specimen. The sunburst is one repeating conic gradient pinned to the bottom centre,
// faded by a radial mask before it reaches the frame; then a stepped double frame, the ziggurat panel the copy sits in
// (its top step carries the logo between two lozenges), chevrons in the shoulders, and the setting sun for the card.
export default function ArtDeco() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-0 opacity-80 [background:repeating-conic-gradient(from_-90deg_at_50%_100%,var(--gold-deep)_0_.5deg,transparent_.5deg_5deg)] [mask:radial-gradient(circle_at_50%_100%,transparent_0_116px,#000_117px,#000_300px,transparent_560px)]" />
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<g fill="none" stroke="var(--gold)">
					<path
						strokeWidth="1.5"
						d="M18 42 H30 V30 H42 V18 H758 V30 H770 V42 H782 V458 H770 V470 H758 V482 H42 V470 H30 V458 H18Z"
					/>
					<path
						strokeWidth=".8"
						d="M28 50 H38 V38 H50 V28 H750 V38 H762 V50 H772 V450 H762 V462 H750 V472 H50 V462 H38 V450 H28Z"
					/>
				</g>
				<path
					fill="var(--black)"
					stroke="var(--gold)"
					strokeWidth="1.5"
					d="M170 388 V88 H250 V64 H310 V40 H490 V64 H550 V88 H630 V388Z"
				/>
				<path
					fill="none"
					stroke="var(--gold)"
					strokeWidth=".8"
					d="M178 380 V96 H258 V72 H318 V48 H482 V72 H542 V96 H622 V380Z"
				/>
				<path fill="var(--gold)" d="M338 60 l5 6 l-5 6 l-5 -6Z M462 60 l5 6 l-5 6 l-5 -6Z" />
				<path
					fill="none"
					stroke="var(--gold)"
					d="M270 82 l10 -8 l10 8 M270 90 l10 -8 l10 8 M510 82 l10 -8 l10 8 M510 90 l10 -8 l10 8"
				/>
				<circle cx="400" cy="500" r="114" fill="var(--black)" stroke="var(--gold)" strokeWidth="1.5" />
				<circle cx="400" cy="500" r="106" fill="var(--emerald)" />
				<circle cx="400" cy="500" r="98" fill="none" stroke="var(--gold)" strokeWidth=".8" />
			</svg>
		</div>
	)
}
