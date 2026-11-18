import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { questions } from "@/demo/questions"

export default function FaqTwoCol() {
	const shown = questions.slice(0, 6)
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:px-8 md:py-24">
			<div className="flex flex-col items-start gap-4">
				<span className="text-sm text-muted-foreground">FAQ</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Before you move in</h2>
				<p className="text-lg text-muted-foreground">
					What teams ask before they bring their projects over. Something missing? The people who build Keep
					answer.
				</p>
				<a href="mailto:hello@keep.app" className="flex items-center gap-1.5 font-medium hover:underline">
					Ask us anything <ArrowRight className="size-4" />
				</a>
			</div>
			<Accordion type="single" collapsible defaultValue={shown[0].q} className="border-t">
				{shown.map((item) => (
					<AccordionItem key={item.q} value={item.q} className="last:border-b">
						<AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
						<AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
}
