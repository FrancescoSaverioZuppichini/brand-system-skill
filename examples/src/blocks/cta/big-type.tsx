import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"

// [Agent] Inverted band (foreground as background): dark in light styles, light in dark ones, button inverted with it.
export default function CtaBigType() {
	return (
		<section className="bg-foreground text-background">
			<div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-20 md:px-8 md:py-32">
				<h2 className="text-[44px] leading-[0.95] md:text-[112px]">{product.headline}</h2>
				<Button size="lg" className="bg-background text-foreground hover:bg-background/90">
					{product.primary} <ArrowRight />
				</Button>
			</div>
		</section>
	)
}
