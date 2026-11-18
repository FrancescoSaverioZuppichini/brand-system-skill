import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"

export default function HeroCentered() {
	return (
		<section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center md:py-36">
			<Badge variant="outline">Keep 2.0 · care schedules are here</Badge>
			<h1 className="text-5xl leading-[1.02] md:text-7xl">{product.headline}</h1>
			<p className="max-w-xl text-lg text-muted-foreground">{product.sub}</p>
			<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<Button size="lg">
					{product.primary} <ArrowRight />
				</Button>
				<Button size="lg" variant="outline">
					{product.secondary}
				</Button>
			</div>
			<p className="text-sm text-muted-foreground">{product.proof}</p>
		</section>
	)
}
