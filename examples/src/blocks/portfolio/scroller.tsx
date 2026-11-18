import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"

export default function PortfolioScroller() {
	const track = useRef<HTMLDivElement>(null)
	const scroll = (direction: number) => track.current?.scrollBy({ left: direction * 320, behavior: "smooth" })
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-8 md:py-24">
			<div className="flex items-end justify-between gap-4">
				<h2 className="text-3xl leading-tight md:text-4xl">More made with Keep</h2>
				<div className="hidden gap-2 md:flex">
					<Button size="icon" variant="outline" aria-label="Previous" onClick={() => scroll(-1)}>
						<ChevronLeft />
					</Button>
					<Button size="icon" aria-label="Next" onClick={() => scroll(1)}>
						<ChevronRight />
					</Button>
				</div>
			</div>
			{/* [Agent] Cards are a fixed width so the last one is always cut at the edge, the cue that the row scrolls;
			    the track is focusable, so arrow keys scroll it too. */}
			<div
				ref={track}
				tabIndex={0}
				aria-label="Projects"
				className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0"
			>
				{work.map((item) => (
					<article key={item.title} className="flex w-72 shrink-0 snap-start flex-col gap-1">
						<Photo scene={item.scene} className="mb-3 aspect-[4/5] rounded-lg" />
						<h3 className="text-base leading-snug">{item.title}</h3>
						<span className="text-sm text-muted-foreground">
							{item.client} · since {item.year}
						</span>
					</article>
				))}
			</div>
		</section>
	)
}
