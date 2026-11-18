import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Photo } from "@/demo/photo"
import { quotes, Stars } from "@/demo/quotes"
import { cn } from "@/lib/utils"

const cards = quotes.slice(0, 6)

export default function TestimonialsCarousel() {
	const track = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState(0)

	// [Agent] The track is a native snap scroller, so swipe, trackpad and keyboard all work; the arrows only scroll it
	// by one card, and the dot follows from the scroll position instead of being kept in sync by hand.
	function scroll(direction: 1 | -1) {
		const el = track.current
		if (el) el.scrollBy({ left: (direction * el.scrollWidth) / cards.length, behavior: "smooth" })
	}
	function follow() {
		const el = track.current
		if (el) setActive(Math.round((el.scrollLeft / el.scrollWidth) * cards.length))
	}

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex items-end justify-between gap-6">
				<h2 className="max-w-xl text-3xl leading-tight md:text-5xl">Teams that kept going</h2>
				<div className="hidden gap-2 md:flex">
					<Button size="icon" variant="outline" aria-label="Previous" onClick={() => scroll(-1)}>
						<ChevronLeft />
					</Button>
					<Button size="icon" aria-label="Next" onClick={() => scroll(1)}>
						<ChevronRight />
					</Button>
				</div>
			</div>
			<div
				ref={track}
				onScroll={follow}
				className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0"
			>
				{cards.map((item) => (
					<Card
						key={item.name}
						className="w-[85%] shrink-0 snap-start gap-5 p-6 md:w-[calc((100%-2rem)/3)]"
					>
						<Stars count={item.stars} />
						<blockquote className="flex-1 text-lg leading-relaxed">{item.text}</blockquote>
						<figcaption className="flex items-center gap-3">
							<Photo scene="person" className="size-9 shrink-0 rounded-full" />
							<span className="flex flex-col text-sm">
								<span className="font-medium">{item.name}</span>
								<span className="text-muted-foreground">{item.role}</span>
							</span>
						</figcaption>
					</Card>
				))}
			</div>
			<div className="flex justify-center gap-2">
				{cards.map((item, index) => (
					<span
						key={item.name}
						className={cn("h-2 w-2 rounded-full bg-border", index === active && "w-6 bg-primary")}
					/>
				))}
			</div>
		</section>
	)
}
