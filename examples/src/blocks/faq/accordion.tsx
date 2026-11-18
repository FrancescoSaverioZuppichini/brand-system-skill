import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { questions } from "@/demo/questions"

export default function FaqAccordion() {
	const shown = questions.slice(0, 7)
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">Questions teams ask first</h2>
				<p className="text-lg text-muted-foreground">Short answers. The long ones are in the docs.</p>
			</div>
			<Accordion
				type="single"
				collapsible
				defaultValue={shown[0].q}
				className="mx-auto w-full max-w-2xl border-t"
			>
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
