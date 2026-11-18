const steps = [
	{ state: "done", width: 150 },
	{ state: "done", width: 120 },
	{ state: "now", width: 170 },
	{ state: "next", width: 100 },
]

// [Agent] Ported from the hand-drawn specimen: a course card with an illustrated cover, a lesson checklist (two done,
// one current, one next) and the progress bar, the category's main device.
export default function Education() {
	return (
		<div
			aria-hidden="true"
			className="absolute top-10 left-[468px] w-[290px] overflow-hidden rounded-2xl bg-[var(--chalk)] shadow-[0_2px_4px_oklch(0.25_0.02_265/0.05),0_12px_28px_oklch(0.25_0.02_265/0.10)]"
		>
			<svg width="290" height="104" viewBox="0 0 290 104" className="block bg-[var(--indigo)]">
				<circle cx="236" cy="30" r="44" fill="var(--honey)" />
				<rect
					x="160"
					y="54"
					width="70"
					height="70"
					rx="8"
					fill="var(--leaf)"
					transform="rotate(-12 195 89)"
				/>
				<path d="M20 104 L70 40 L120 104 Z" fill="oklch(0.60 0.13 265)" />
				<circle cx="70" cy="26" r="7" fill="var(--chalk)" />
				<path d="M250 88 h28 M250 96 h18" stroke="var(--chalk)" strokeWidth="3" strokeLinecap="round" />
			</svg>
			<div className="px-[18px] pt-4 pb-[18px]">
				{steps.map((step) => (
					<div key={step.width} className="flex items-center gap-3 py-[7px]">
						<i
							className={
								step.state === "done"
									? "grid size-[22px] place-items-center rounded-full bg-[var(--leaf)]"
									: step.state === "now"
										? "size-[22px] rounded-full border-[3px] border-[var(--indigo)]"
										: "size-[22px] rounded-full border-2 border-[var(--line)]"
							}
						>
							{step.state === "done" && (
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									stroke="#fff"
									strokeWidth="2.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m2.5 6.2 2.3 2.3 4.7-5" />
								</svg>
							)}
						</i>
						<s
							className={`h-2 rounded ${step.state === "now" ? "bg-[var(--lavender)]" : "bg-[var(--line)]"}`}
							style={{ width: step.width }}
						/>
					</div>
				))}
				<div className="mt-3 h-2.5 rounded-full bg-[var(--line)]">
					<div className="h-full w-2/3 rounded-full bg-[var(--leaf)]" />
				</div>
			</div>
		</div>
	)
}
