const bar = "block h-1.5 rounded-[3px] bg-[var(--block)]"
const tree = [
	["60%", ["70%", "84%", "56%"]],
	["50%", ["76%", "62%", "88%", "52%"]],
	["66%", ["64%", "80%", "58%"]],
	["44%", ["72%", "60%"]],
] as const

// [Agent] The three reading columns: the navigation tree, one article at a readable measure, and the on-page contents,
// each with the current page marked by an accent tick. The number card is the article's callout.
export default function LayoutDocs() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-x-0 top-0 h-12 border-b border-[var(--hairline)]" />
			<span className="absolute top-[17px] left-[98px] text-xs font-medium text-[var(--pencil)]">Docs</span>
			<div className="absolute top-2.5 left-[150px] flex h-7 w-[220px] items-center gap-2 rounded-md border border-[var(--hairline)] bg-[var(--panel)] px-2.5">
				<i className="size-2 rounded-full border-[1.5px] border-[var(--shade)]" />
				<i className="h-1.5 w-[70px] rounded-[3px] bg-[var(--shade)]" />
			</div>
			<div className="absolute top-[21px] left-[380px] flex gap-2.5">
				<i className="h-1.5 w-10 rounded-[3px] bg-[var(--shade)]" />
				<i className="h-1.5 w-10 rounded-[3px] bg-[var(--shade)]" />
			</div>
			<nav className="absolute top-12 bottom-0 left-0 grid w-[172px] content-start gap-[11px] border-r border-[var(--hairline)] pt-5 pr-4 pl-6">
				{tree.map(([head, items], group) => (
					<div key={head} className="contents">
						<i
							className={`block h-1.5 rounded-[3px] bg-[var(--shade)] ${group ? "mt-2.5" : ""}`}
							style={{ width: head }}
						/>
						<div className="grid gap-[11px] border-l border-[var(--hairline)] pl-2.5">
							{items.map((width, index) => (
								<i
									key={width}
									className={`relative ${bar} ${group === 0 && index === 0 ? "bg-[var(--cobalt)]/55 before:absolute before:-top-1.5 before:-left-[11px] before:h-[18px] before:w-[1.5px] before:bg-[var(--cobalt)]" : ""}`}
									style={{ width }}
								/>
							))}
						</div>
					</div>
				))}
			</nav>
			<div className="absolute top-[247px] left-[204px] grid w-[414px] gap-[9px] rounded-lg border border-[var(--hairline)] bg-[var(--panel)] px-3.5 py-3 font-mono text-xs leading-none">
				{[
					["$", ["k", 40], ["v", 90], ["s", 120]],
					["", ["v", 24], ["k", 56], ["v", 70]],
					["", ["v", 24], ["s", 150]],
				].map(([prompt, ...tokens], line) => (
					<span key={line} className="flex items-center gap-2">
						<b className="w-2 text-[var(--pencil)]">{prompt as string}</b>
						{(tokens as [string, number][]).map(([kind, width], index) => (
							<i
								key={index}
								className={`h-1.5 rounded-[3px] ${kind === "k" ? "bg-[var(--cobalt)]/60" : kind === "s" ? "bg-[oklch(0.65_0.13_150)]/70" : "bg-[var(--shade)]"}`}
								style={{ width }}
							/>
						))}
					</span>
				))}
			</div>
			<div className="absolute top-[347px] left-[204px] grid w-[414px] gap-2.5">
				<i className="mb-1 block h-2.5 w-[34%] rounded bg-[var(--shade)]" />
				<i className={bar} />
				<i className={`${bar} w-[94%]`} />
				<i className={`${bar} w-[68%]`} />
			</div>
			<div className="absolute top-[427px] left-[204px] w-[414px] border-t border-[var(--hairline)] pt-[28px]">
				<i className={`${bar} w-[120px]`} />
			</div>
			<aside className="absolute top-[70px] right-5 grid w-[130px] content-start gap-2.5">
				<i className="mb-1 block h-1.5 w-[60%] rounded-[3px] bg-[var(--shade)]" />
				{[
					["70%", 12, true],
					["56%", 12],
					["48%", 22],
					["40%", 22],
					["64%", 12],
					["46%", 12],
				].map(([width, indent, on]) => (
					<i
						key={`${width}`}
						className={`relative ${bar} ${on ? "bg-[var(--cobalt)]/55 before:absolute before:-top-[5px] before:-left-3 before:h-4 before:w-0.5 before:bg-[var(--cobalt)]" : ""}`}
						style={{ width: width as string, marginLeft: indent as number }}
					/>
				))}
			</aside>
		</div>
	)
}
