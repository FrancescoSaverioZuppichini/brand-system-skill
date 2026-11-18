import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Photo } from "@/demo/photo"
import { questions } from "@/demo/questions"
import { team } from "@/demo/team"

const care = team.filter((person) => person.department === "Care").slice(0, 3)
const names = new Intl.ListFormat("en", { type: "disjunction" }).format(
	care.map((person) => person.name.split(" ")[0]),
)

export default function FaqWithContact() {
	const shown = questions.slice(0, 5)
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">Questions, answered by people</h2>
			<div className="grid items-start gap-10 md:grid-cols-[2fr_1fr] md:gap-12">
				<Accordion type="single" collapsible defaultValue={shown[0].q} className="border-t">
					{shown.map((item) => (
						<AccordionItem key={item.q} value={item.q} className="last:border-b">
							<AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
							<AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<Card className="gap-4 bg-muted px-6">
					<div className="flex -space-x-2">
						{care.map((person) => (
							<Photo key={person.name} scene="person" className="size-10 rounded-full ring-2 ring-muted" />
						))}
					</div>
					<span className="font-medium">Ask {names}</span>
					<p className="text-sm text-muted-foreground">
						The care team answers every message themselves, usually within two hours, Monday to Friday, 9:00
						to 18:00 CET.
					</p>
					<Button variant="outline" className="bg-card">
						Write to the care team
					</Button>
				</Card>
			</div>
		</section>
	)
}
