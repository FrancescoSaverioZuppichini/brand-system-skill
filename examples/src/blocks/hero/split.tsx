import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { AppWindow } from "@/demo/screen"

export default function HeroSplit() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-[5fr_7fr] lg:py-28">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">{product.sub}</p>
				<div className="flex flex-col gap-3 sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline">
						{product.secondary}
					</Button>
				</div>
				<p className="text-sm text-muted-foreground">{product.proof}</p>
			</div>
			<AppWindow />
		</section>
	)
}
