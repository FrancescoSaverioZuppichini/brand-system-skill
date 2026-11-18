import { Captions, Play } from "lucide-react"
import { quotes } from "@/demo/quotes"
import { Photo } from "@/demo/photo"

const story = quotes[2]

// [Agent] The play button and the caption chip sit on fixed black/white, not theme roles: they lie on a photo, which
// keeps the same tones in light and dark styles.
export default function TestimonialsVideo() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
			<button
				type="button"
				className="relative overflow-hidden rounded-xl"
				aria-label="Play Mei's story, 2:14"
			>
				<Photo scene="person" className="aspect-video" />
				<span className="absolute inset-0 bg-black/20" />
				<span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg">
					<Play className="ml-1 size-6 fill-current" />
				</span>
				<span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-black/70 px-2 py-1 font-mono text-xs text-white">
					<Captions className="size-3.5" /> 2:14
				</span>
			</button>
			<figure className="flex flex-col gap-6">
				<span aria-hidden className="font-heading text-5xl leading-none text-muted-foreground">
					“
				</span>
				<blockquote className="font-heading text-2xl leading-snug md:text-3xl">{story.text}</blockquote>
				<figcaption className="flex items-center gap-3">
					<Photo scene="person" className="size-10 shrink-0 rounded-full" />
					<span className="flex flex-col">
						<span className="font-medium">{story.name}</span>
						<span className="text-sm text-muted-foreground">{story.role}</span>
					</span>
				</figcaption>
				<span className="text-sm text-muted-foreground">
					Watch Mei's story · 2:14 · captions in English, German and Spanish
				</span>
			</figure>
		</section>
	)
}
