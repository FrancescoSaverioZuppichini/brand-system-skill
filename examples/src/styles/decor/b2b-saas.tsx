const bars = [40, 55, 48, 70, 62, 90, 78]

// [Agent] The category's hero: a grey section band with a soft purple glow behind a product-screenshot window
// (sidebar with the active row, a toolbar, a bar chart with one highlighted bar) that the number card overlaps.
export default function B2bSaas() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-x-0 top-[304px] bottom-0 border-t border-[var(--line)] bg-[var(--section)]" />
			<div className="absolute top-[234px] left-[150px] h-[200px] w-[500px] rounded-full bg-[radial-gradient(closest-side,oklch(0.75_0.14_285/0.45),transparent)] blur-[10px]" />
			<div className="absolute top-[320px] left-[110px] h-[230px] w-[580px] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--white)] shadow-[0_10px_30px_oklch(0.22_0.02_265/0.12),0_1px_3px_oklch(0.22_0.02_265/0.06)]">
				<div className="flex h-[30px] items-center gap-1.5 border-b border-[var(--line)] px-3 *:size-[9px] *:rounded-full *:bg-[var(--line)]">
					<i />
					<i />
					<i />
				</div>
				<div className="grid h-[200px] grid-cols-[120px_1fr]">
					<div className="grid content-start gap-2.5 border-r border-[var(--line)] bg-[var(--section)] px-3 py-3.5 *:h-2 *:rounded *:bg-[var(--skeleton)]">
						<s className="w-[70%]" />
						<s className="!bg-[var(--lilac)] shadow-[inset_3px_0_0_var(--iris)]" />
						<s className="w-[80%]" />
						<s className="w-[60%]" />
						<s className="w-[75%]" />
					</div>
					<div className="px-4 py-3.5">
						<div className="mb-3 flex gap-2.5 *:h-2.5 *:rounded-[5px]">
							<s className="w-[120px] bg-[oklch(0.88_0.01_265)]" />
							<s className="ml-auto w-[60px] bg-[var(--skeleton)]" />
							<s className="w-6 bg-[var(--lilac)]" />
						</div>
						<div className="flex h-20 items-end gap-2 pl-[190px]">
							{bars.map((height) => (
								<i
									key={height}
									className={`flex-1 rounded-t ${height === 90 ? "bg-[var(--iris)]" : "bg-[var(--lilac)]"}`}
									style={{ height: `${height}%` }}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
