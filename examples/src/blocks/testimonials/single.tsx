import { quote } from "@/demo/content"
import { Photo } from "@/demo/photo"

export default function TestimonialsSingle() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
			<figure className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
				<span aria-hidden className="font-heading text-6xl leading-none text-muted-foreground">
					“
				</span>
				<blockquote className="font-heading text-[22px] leading-snug md:text-4xl md:leading-tight">
					{quote.text}
				</blockquote>
				<figcaption className="flex items-center gap-3 text-left">
					<Photo scene="person" className="size-11 rounded-full" />
					<span className="flex flex-col">
						<span className="font-medium">{quote.name}</span>
						<span className="text-sm text-muted-foreground">{quote.role}</span>
					</span>
				</figcaption>
			</figure>
		</section>
	)
}
