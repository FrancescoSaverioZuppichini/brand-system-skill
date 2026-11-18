// [Agent] The black bars are never drawn: they are the grid gap letting the black ground show through, so every plane
// stays a plain rectangle and the bars can't misalign. The style's css lays the copy and the card over these planes.
const planes = [
	["1 / 1 / 3 / 2", "red"],
	["1 / 2 / 2 / 4", "white"],
	["1 / 4 / 2 / 5", "yellow"],
	["2 / 2 / 3 / 4", "white"],
	["2 / 4 / 3 / 5", "white"],
	["3 / 1 / 4 / 2", "white"],
	["3 / 2 / 4 / 3", "white"],
	["3 / 3 / 5 / 5", "blue"],
	["4 / 1 / 5 / 2", "yellow"],
	["4 / 2 / 5 / 3", "red"],
]

export default function DeStijl() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 grid grid-cols-[150px_330px_190px_1fr] grid-rows-[64px_226px_120px_1fr] gap-2.5 bg-[var(--black)]"
		>
			{planes.map(([area, colour]) => (
				<div key={area} style={{ gridArea: area, background: `var(--${colour})` }} />
			))}
		</div>
	)
}
