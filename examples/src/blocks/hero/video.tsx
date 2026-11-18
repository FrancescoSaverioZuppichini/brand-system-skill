import { Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Photo } from "@/demo/photo"

// [Agent] The poster frame stands in for the loop (it is also the reduced-motion state); the pause control is always
// visible because autoplaying video without one fails WCAG 2.2.2.
export default function HeroVideo() {
	return (
		<section className="relative flex min-h-[640px] items-center justify-center overflow-hidden text-white md:min-h-[760px]">
			<Photo scene="place" className="absolute inset-0" />
			<div className="absolute inset-0 bg-black/55" />
			<div className="relative flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
				<h1 className="text-5xl leading-[1.02] md:text-7xl">{product.headline}</h1>
				<p className="max-w-xl text-lg text-white/85">{product.sub}</p>
				<Button size="lg">{product.primary}</Button>
			</div>
			<Button
				size="sm"
				variant="outline"
				className="absolute right-4 bottom-4 border-white/60 bg-black/40 text-white md:right-8 md:bottom-8"
			>
				<Pause /> Pause video
			</Button>
		</section>
	)
}
