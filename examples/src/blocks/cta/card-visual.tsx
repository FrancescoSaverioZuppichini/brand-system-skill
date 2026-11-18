import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Frame } from "@/demo/frame"
import { ProjectCare } from "@/demo/project"

export default function CtaCardVisual() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
			<div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-muted p-6 md:grid-cols-2 md:gap-12 md:p-12">
				<div className="flex flex-col gap-5">
					<h2 className="text-3xl leading-tight md:text-4xl">
						Every project keeps an owner and a review date
					</h2>
					<p className="text-lg text-muted-foreground">
						Ship it, hand it into care, and Keep reminds the right person when it needs a look.
					</p>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button size="lg">{product.primary}</Button>
						<Button size="lg" variant="outline">
							{product.secondary}
						</Button>
					</div>
				</div>
				<Frame url="keep.app/customer-portal/care" className="shadow-lg md:-mb-24 md:self-start">
					<ProjectCare />
				</Frame>
			</div>
		</section>
	)
}
