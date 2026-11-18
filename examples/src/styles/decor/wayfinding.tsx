// [Agent] One sign assembly: separate rounded panels bolted to a grey wall, the gaps between them showing the wall. The
// line code in a yellow circle, a direction arrow and an Aicher-style pictogram drawn from round-capped strokes.
export default function Wayfinding() {
	return (
		<div aria-hidden="true" className="absolute inset-0 bg-[var(--wall)]">
			<div className="absolute top-3 left-3 h-[78px] w-[776px] rounded-lg bg-[var(--head)]" />
			<div className="absolute top-[98px] left-3 h-[234px] w-[776px] rounded-lg bg-[var(--panel)]" />
			<span className="absolute top-7 left-[34px] grid size-[46px] place-items-center rounded-full bg-[var(--yellow)] text-[var(--head)]">
				<svg width="26" height="26" viewBox="0 0 26 26">
					<path d="M6 20 L20 6 M9 6 H20 V17" fill="none" stroke="currentColor" strokeWidth="3.5" />
				</svg>
			</span>
			<span className="absolute top-[25px] left-[562px] grid size-[52px] place-items-center rounded-md bg-[var(--white)] text-[var(--head)]">
				<svg width="34" height="34" viewBox="0 0 24 24">
					<circle cx="13" cy="3.6" r="2.4" fill="currentColor" />
					<path
						d="M13 8 L11 15 L14 18 L14 23 M11 15 L8 23 M12.5 9 L8 12 M13 9 L17 13"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<svg
				className="absolute top-[126px] left-[34px] text-[var(--white)]"
				width="78"
				height="78"
				viewBox="0 0 24 24"
			>
				<path d="M3 12 H19 M12 4.5 L19.5 12 L12 19.5" fill="none" stroke="currentColor" strokeWidth="3.2" />
			</svg>
		</div>
	)
}
