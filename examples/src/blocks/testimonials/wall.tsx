import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Photo } from "@/demo/photo"
import { quotes, Stars } from "@/demo/quotes"
import { cn } from "@/lib/utils"

export default function TestimonialsWall() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">From 312 teams</span>
				<h2 className="text-3xl leading-tight md:text-5xl">What teams say a year in</h2>
				<p className="text-lg text-muted-foreground">
					4.8 out of 5 from 2,100 ratings. These are the short ones.
				</p>
			</div>
			{/* [Agent] CSS columns give the masonry for free: cards keep their own height and flow top to bottom. On
			    phones only the first three show, and the button stands in for the rest. */}
			<div className="gap-4 md:columns-2 lg:columns-3">
				{quotes.map((item, index) => (
					<Card
						key={item.name}
						className={cn("mb-4 break-inside-avoid gap-4 p-5", index > 2 && "hidden md:flex")}
					>
						<Stars count={item.stars} />
						<blockquote className="leading-relaxed">{item.text}</blockquote>
						<figcaption className="flex items-center gap-3">
							<Photo scene="person" className="size-8 shrink-0 rounded-full" />
							<span className="flex flex-col text-sm">
								<span className="font-medium">{item.name}</span>
								<span className="text-muted-foreground">{item.role}</span>
							</span>
						</figcaption>
					</Card>
				))}
			</div>
			<Button variant="outline" className="-mt-8 md:hidden">
				Show 7 more
			</Button>
		</section>
	)
}
