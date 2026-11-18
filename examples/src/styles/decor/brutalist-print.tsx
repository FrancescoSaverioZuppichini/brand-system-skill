// [Agent] The structure is part of the image: the orange field over the last two of six columns, the bold row rules the
// headline stands on, column numbers, and the six column lines laid over everything, type included.
export default function BrutalistPrint() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 font-mono text-[11px] font-medium text-[var(--black)]"
		>
			<div className="absolute inset-y-0 right-0 left-[533.33px] bg-[var(--orange)]" />
			{[30, 151, 273, 395].map((top) => (
				<span key={top} className="absolute inset-x-0 h-[3px] bg-[var(--black)]" style={{ top }} />
			))}
			<span className="absolute top-0 left-[408px] leading-[30px]">04</span>
			<span className="absolute top-0 left-[541px] leading-[30px]">05</span>
			<div className="absolute inset-0 z-10 bg-[repeating-linear-gradient(to_right,var(--black)_0_1px,transparent_1px_133.333px)] opacity-90" />
		</div>
	)
}
