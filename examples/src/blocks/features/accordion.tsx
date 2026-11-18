import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { features } from "@/demo/content"
import { Decisions } from "@/demo/decisions"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectCare, ProjectPlan } from "@/demo/project"

const items = [
	{ ...features[0], url: "keep.app/onboarding-v3", view: <ProjectPlan /> },
	{ ...features[1], url: "keep.app/billing-rewrite/releases/1.4", view: <ReleaseChecklist /> },
	{ ...features[2], url: "keep.app/customer-portal/care", view: <ProjectCare /> },
	{ ...features[3], url: "keep.app/billing-rewrite/decisions", view: <Decisions /> },
]

// [Agent] One grid, three areas: phones read heading → screen → accordion; from md up the screen spans both rows on
// the right. The accordion can't close all items, so there is always a screen to show.
export default function FeaturesAccordion() {
	const [open, setOpen] = useState(items[0].title)
	const item = items.find((entry) => entry.title === open) ?? items[0]
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Features</span>
				<h2 className="text-3xl leading-tight md:text-4xl">Built for the years after launch</h2>
			</div>
			<div className="flex items-center rounded-xl bg-muted p-4 sm:p-8 md:col-start-2 md:row-span-2 md:row-start-1">
				<Frame key={item.url} url={item.url} className="mx-auto w-full max-w-md shadow-lg">
					{item.view}
				</Frame>
			</div>
			<Accordion
				type="single"
				value={open}
				onValueChange={(value) => value && setOpen(value)}
				className="border-t"
			>
				{items.map((entry) => (
					<AccordionItem key={entry.title} value={entry.title}>
						<AccordionTrigger className="text-base">{entry.title}</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">{entry.text}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
}
