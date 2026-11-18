import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"

// [Agent] Each photo keeps its own shape; the columns flow top to bottom, so heights never line up into rows.
const shapes = [
	"aspect-[3/4]",
	"aspect-[4/3]",
	"aspect-square",
	"aspect-[4/5]",
	"aspect-[3/2]",
	"aspect-[2/3]",
	"aspect-[5/4]",
	"aspect-[3/4]",
]

export default function PortfolioMasonry() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">Made with Keep</p>
				<h2 className="text-3xl leading-tight md:text-4xl">The work, as it looks today</h2>
				<p className="text-muted-foreground">Photographed this year, not on launch day.</p>
			</div>
			<div className="columns-2 gap-3 md:columns-3 md:gap-5">
				{work.map((item, index) => (
					<figure key={item.title} className="mb-3 break-inside-avoid md:mb-5">
						<Photo scene={item.scene} className={`rounded-lg ${shapes[index]}`} />
						<figcaption className="mt-2 text-xs text-muted-foreground md:text-sm">
							{item.client} · {item.title}
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
