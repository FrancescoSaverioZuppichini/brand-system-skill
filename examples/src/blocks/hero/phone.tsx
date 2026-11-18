import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Phone } from "@/demo/device"
import { ProjectList, ReleaseChecklist } from "@/demo/phone-screens"

export default function HeroPhone() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">
					Your projects, releases and care dates in your pocket.
				</p>
				<div className="flex gap-3">
					<Button size="lg">App Store</Button>
					<Button size="lg" variant="outline">
						Google Play
					</Button>
				</div>
				<span className="flex items-center gap-2 text-sm text-muted-foreground">
					<span className="flex text-chart-4">
						{[1, 2, 3, 4, 5].map((n) => (
							<Star key={n} className="size-4 fill-current" />
						))}
					</span>
					4.8 from 2,100 ratings
				</span>
			</div>
			<div className="flex justify-center gap-4 lg:gap-6">
				<Phone className="w-40 sm:w-60">
					<ProjectList />
				</Phone>
				<Phone className="mt-12 w-40 sm:w-60">
					<ReleaseChecklist />
				</Phone>
			</div>
		</section>
	)
}
