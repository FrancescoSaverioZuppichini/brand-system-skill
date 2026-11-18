import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"

export default function PortfolioGrid() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">Made with Keep</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Projects still running years later</h2>
				<p className="text-muted-foreground">Each one planned, shipped and kept in care by a small team.</p>
			</div>
			<div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
				{work.slice(0, 6).map((item) => (
					<article key={item.title} className="flex flex-col gap-1">
						<Photo scene={item.scene} className="mb-3 aspect-[4/3] rounded-lg" />
						<h3 className="text-lg leading-snug">{item.title}</h3>
						<span className="text-sm text-muted-foreground">
							{item.client} · since {item.year}
						</span>
					</article>
				))}
			</div>
		</section>
	)
}
