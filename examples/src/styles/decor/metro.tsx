// [Agent] Ported from the hand-made specimen: the live-tile grid running off the right and bottom edges (the number
// card fills the big cobalt tile), white pictograms on solid colour, and the round app-bar buttons.
export default function Metro() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-[150px] left-[444px] grid grid-cols-[repeat(3,124px)] auto-rows-[124px] gap-2 *:grid *:place-items-center">
				<div className="col-span-2 row-span-2 bg-[var(--cobalt)]" />
				<div className="bg-[var(--magenta)]">
					<svg width="44" height="44">
						<rect x="3" y="7" width="38" height="34" fill="none" stroke="white" strokeWidth="2.5" />
						<path d="M3 16h38M13 3v8M31 3v8" stroke="white" strokeWidth="2.5" />
					</svg>
				</div>
				<div className="bg-[var(--lime)]">
					<svg width="44" height="44">
						<path d="M5 23l12 12L40 9" fill="none" stroke="white" strokeWidth="3" />
					</svg>
				</div>
				<div className="col-span-2 bg-[var(--orange)]">
					<svg width="52" height="40">
						<rect x="2" y="2" width="48" height="36" fill="none" stroke="white" strokeWidth="2.5" />
						<path d="M2 32l14-14 10 10 8-7 16 14" fill="none" stroke="white" strokeWidth="2.5" />
						<circle cx="36" cy="11" r="4" fill="white" />
					</svg>
				</div>
				<div className="bg-[var(--cobalt)]">
					<svg width="44" height="44">
						<path d="M4 8h36v24H18l-9 8v-8H4z" fill="none" stroke="white" strokeWidth="2.5" />
					</svg>
				</div>
			</div>
			<div className="absolute bottom-[26px] left-[26px] flex gap-[22px] *:grid *:size-11 *:place-items-center *:rounded-full *:border-2 *:border-white">
				<i>
					<svg width="18" height="18">
						<path d="M9 1v16M1 9h16" stroke="white" strokeWidth="2" />
					</svg>
				</i>
				<i>
					<svg width="18" height="18">
						<circle cx="7.5" cy="7.5" r="5.5" fill="none" stroke="white" strokeWidth="2" />
						<path d="M11.5 11.5l5 5" stroke="white" strokeWidth="2" />
					</svg>
				</i>
				<i>
					<svg width="18" height="18">
						<path d="M2 9.5l5 5 9-11" fill="none" stroke="white" strokeWidth="2" />
					</svg>
				</i>
			</div>
		</div>
	)
}
