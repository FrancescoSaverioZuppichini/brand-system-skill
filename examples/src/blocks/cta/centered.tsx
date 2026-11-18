import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"

export default function CtaCentered() {
	return (
		<section className="bg-muted">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center md:px-8 md:py-24">
				<h2 className="text-3xl leading-tight md:text-5xl">Start a project worth keeping</h2>
				<p className="max-w-xl text-lg text-muted-foreground">
					Starter is free for three projects and two members, with no time limit and no card.
				</p>
				<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline">
						Book a 30-minute demo
					</Button>
				</div>
			</div>
		</section>
	)
}
