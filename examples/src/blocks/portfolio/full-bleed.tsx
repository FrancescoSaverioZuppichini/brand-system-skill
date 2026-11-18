import { ArrowRight } from "lucide-react"
import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"

// [Agent] The scrim is fixed black, not a theme colour: the white title has to read on the photo in light and dark
// styles. A tall box on phones gives the portrait crop of the same photo.
export default function PortfolioFullBleed() {
	return (
		<section>
			<h2 className="sr-only">Selected work</h2>
			{work.slice(0, 3).map((item) => (
				<article key={item.title} className="relative flex h-[560px] text-white md:h-[680px]">
					<Photo scene={item.scene} className="absolute inset-0" />
					<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
					<div className="relative mx-auto mt-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-12 md:px-8 md:pb-16">
						<span className="text-sm text-white/80">
							{item.client} · since {item.year}
						</span>
						<h3 className="text-4xl leading-[1.05] md:text-6xl">{item.title}</h3>
						<p className="text-lg text-white/85">{item.line}</p>
						<span className="flex items-center gap-1 text-sm font-medium">
							View project <ArrowRight className="size-4" />
						</span>
					</div>
				</article>
			))}
		</section>
	)
}
