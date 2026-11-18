import { ChevronLeft, ChevronRight, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Photo } from "@/demo/photo"
import { cn } from "@/lib/utils"

const slides = [
	{ title: "Plan", text: "One page of scope, owners and dates", scene: "object" as const },
	{ title: "Ship", text: "Releases as reviewed checklists", scene: "place" as const },
	{ title: "Care", text: "Health checks and a yearly review", scene: "person" as const },
]

// [Agent] The track is wider than the screen and centred, so the neighbours peek at both edges; the first slide is
// the static state for reduced motion, and pause sits with the dots.
export default function HeroCarousel() {
	return (
		<section className="flex flex-col items-center gap-10 overflow-hidden py-20 md:py-28">
			<div className="flex max-w-2xl flex-col items-center gap-4 px-4 text-center">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">
					Three tools, one project from first plan to its fifth year.
				</p>
			</div>
			<div className="flex w-[260%] justify-center gap-4 md:w-[150%] md:gap-6">
				{[slides[2], ...slides, slides[0]].map((slide, index) => (
					<div
						key={`${slide.title}-${index}`}
						className={cn("flex w-full flex-col gap-3", index !== 2 && "opacity-50")}
					>
						<Photo scene={slide.scene} className="aspect-[16/10] rounded-xl" />
						<div className="flex items-baseline justify-between gap-2 px-1">
							<h2 className="text-2xl">{slide.title}</h2>
							<span className="text-sm text-muted-foreground">{slide.text}</span>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center gap-4">
				<Button size="icon" variant="outline" aria-label="Previous">
					<ChevronLeft />
				</Button>
				<div className="flex gap-2">
					{slides.map((slide, index) => (
						<span
							key={slide.title}
							className={cn("h-2 w-2 rounded-full bg-border", index === 1 && "w-6 bg-primary")}
						/>
					))}
				</div>
				<Button size="icon" variant="outline" aria-label="Next">
					<ChevronRight />
				</Button>
				<Button size="icon" variant="ghost" aria-label="Pause">
					<Pause />
				</Button>
			</div>
		</section>
	)
}
