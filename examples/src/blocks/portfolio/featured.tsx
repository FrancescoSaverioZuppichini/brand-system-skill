import { ArrowRight } from "lucide-react"
import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"

function Tile({ item, className }: { item: (typeof work)[number]; className?: string }) {
	return (
		<figure className={`relative overflow-hidden rounded-lg ${className}`}>
			<Photo scene={item.scene} className="absolute inset-0" />
			<figcaption className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2.5 py-1 text-sm">
				{item.client} · {item.title}
			</figcaption>
		</figure>
	)
}

export default function PortfolioFeatured() {
	const [lead, ...rest] = work
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 md:gap-5 md:px-8 md:py-24">
			<div className="grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-2 md:gap-5">
				<article className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[4/3] md:row-span-2 md:aspect-auto">
					<Photo scene={lead.scene} className="absolute inset-0" />
					<div className="absolute inset-x-3 bottom-3 flex flex-col gap-1 rounded-md bg-background/90 p-4 md:inset-x-auto md:left-5 md:bottom-5 md:max-w-sm">
						<span className="text-sm text-muted-foreground">
							{lead.client} · since {lead.year}
						</span>
						<h3 className="text-2xl leading-tight">{lead.title}</h3>
						<span className="flex items-center gap-1 text-sm font-medium">
							Read the case study <ArrowRight className="size-4" />
						</span>
					</div>
				</article>
				<Tile item={rest[0]} className="aspect-[4/3]" />
				<Tile item={rest[1]} className="aspect-[4/3]" />
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:px-0">
				{rest.slice(2, 5).map((item) => (
					<Tile key={item.title} item={item} className="aspect-[4/3] w-72 shrink-0 md:w-auto" />
				))}
			</div>
		</section>
	)
}
