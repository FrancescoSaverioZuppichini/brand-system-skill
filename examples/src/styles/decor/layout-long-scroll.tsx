const number = "absolute left-10 font-mono text-[11px] leading-none font-medium"

// [Agent] Three chapter bands, each with its own tone, scroll under one pinned visual that spans all of them; that
// overlap, the reading-progress bar and the chapter rail are the tells of a long scroll frozen mid-way.
export default function LayoutLongScroll() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-x-0 top-[254px] h-[138px] border-t border-[var(--hairline)] bg-[var(--panel)]" />
			<div className="absolute inset-x-0 top-[392px] bottom-0 bg-[var(--graphite)]" />
			<i className="absolute inset-x-0 top-0 z-10 h-[3px] bg-[linear-gradient(90deg,var(--cobalt)_38%,var(--hairline)_38%)]" />
			<span className={`${number} top-[64px] text-[var(--pencil)]`}>01</span>
			<span className={`${number} top-[272px] text-[var(--pencil)]`}>02</span>
			<span className={`${number} top-[410px] text-[var(--shade)]`}>03</span>
			<div className="absolute top-[440px] left-[178px] grid w-[150px] gap-[9px]">
				<i className="block h-[7px] rounded bg-[oklch(0.4_0.01_255)]" />
				<i className="block h-[7px] w-[70%] rounded bg-[oklch(0.4_0.01_255)]" />
			</div>
			<div className="absolute top-9 right-16 h-[428px] w-[330px] overflow-hidden rounded-[14px] bg-[linear-gradient(165deg,oklch(0.95_0.015_250),oklch(0.82_0.06_262))] shadow-[0_30px_60px_-24px_oklch(0.3_0.05_260/0.4)]">
				<i className="absolute top-[46%] left-1/2 size-[190px] -translate-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--sheet),oklch(0.88_0.04_260)_45%,oklch(0.7_0.1_262))] shadow-[0_40px_50px_-30px_oklch(0.3_0.08_262/0.6)]" />
				<i className="absolute inset-x-6 bottom-[22px] h-[3px] rounded-sm bg-[linear-gradient(90deg,var(--sheet)_38%,oklch(1_0_0/0.35)_38%)]" />
			</div>
			<div className="absolute top-1/2 right-[26px] grid -translate-y-1/2 gap-2.5">
				{[true, true, false, false, false].map((on, index) => (
					<i
						key={index}
						className={`size-[7px] rounded-full border-[1.5px] ${on ? "border-[var(--cobalt)] bg-[var(--cobalt)]" : "border-[var(--shade)] bg-[var(--sheet)]"}`}
					/>
				))}
			</div>
		</div>
	)
}
