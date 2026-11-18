import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { AppWindow } from "@/demo/screen"

export default function HeroShotBelow() {
	return (
		<section className="overflow-hidden">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 pt-20 text-center md:pt-28">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="max-w-xl text-lg text-muted-foreground">{product.sub}</p>
				<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline">
						{product.secondary}
					</Button>
				</div>
			</div>
			{/* [Agent] A fixed-height crop makes the screen run past the fold, the cue that there is more product below. */}
			<div className="mx-auto mt-14 h-[420px] max-w-6xl px-4 md:h-[520px] md:px-8">
				<AppWindow />
			</div>
		</section>
	)
}
