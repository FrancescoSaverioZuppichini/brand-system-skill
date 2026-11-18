import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Photo } from "@/demo/photo"

export default function HeroEditorial() {
	return (
		<section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<h1 className="text-[44px] leading-[0.95] md:text-[120px] lg:text-[148px]">{product.headline}</h1>
			<div className="flex flex-col justify-between gap-6 border-t pt-6 md:flex-row md:items-end">
				<p className="max-w-lg text-lg text-muted-foreground">{product.sub}</p>
				<div className="flex flex-col gap-3 sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline">
						{product.secondary}
					</Button>
				</div>
			</div>
			<div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
				<Photo scene="place" label="The Halden studio, 2024" className="aspect-[4/3] md:aspect-[16/9]" />
				<Photo scene="object" className="hidden aspect-[3/4] md:block md:aspect-auto" />
				<Photo scene="person" className="hidden aspect-[3/4] md:block md:aspect-auto" />
			</div>
		</section>
	)
}
