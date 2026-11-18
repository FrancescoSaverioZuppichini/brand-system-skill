// [Agent] The band inverts the page (foreground as background), so it is dark on light styles and still the
// contrasting band on dark ones, without a hard-coded black.
export default function StatsBig() {
	return (
		<section className="bg-foreground text-background">
			<div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center md:px-8 md:py-28">
				<span className="font-heading text-5xl leading-none tabular-nums md:text-[160px]">1,284</span>
				<p className="max-w-2xl text-lg md:text-2xl">
					projects shipped with Keep since 2019 are still running today, each with an owner and a review date.
				</p>
				<p className="text-xs text-background/60">
					Source: Keep project data, projects marked “in care” on 1 November 2026
				</p>
			</div>
		</section>
	)
}
