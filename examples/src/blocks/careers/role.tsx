import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const role = {
	title: "Senior product engineer",
	chips: ["Remote, EU time zones", "Full-time", "Engineering"],
	intro:
		"You'll join the Care team of four, who build everything that happens after a project ships: health checks, owners and the yearly review. Most of the work is TypeScript and Postgres, planned in writing and shipped four times a year.",
	todo: [
		"Own care schedules end to end, from the database to the reminder email",
		"Write the plan for each release and review your teammates' plans",
		"Run the yearly review of one project in care, our own billing included",
		"Talk to two customers a month about what they keep and why",
		"Answer support tickets on your feature during your rotation week",
	],
	bring: [
		"Five or more years building web products people pay for",
		"Comfort with TypeScript, React and SQL you can explain",
		"Clear written English: most of our decisions are documents",
		"Patience for the unglamorous work of keeping old things running",
	],
	facts: [
		{ label: "Salary", value: "€85–105k" },
		{ label: "Equity", value: "0.10–0.25%" },
		{ label: "Location", value: "Remote, CET ± 3h" },
		{ label: "Start", value: "Early 2027" },
	],
}

function Checks({ title, items }: { title: string; items: string[] }) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-xl md:text-2xl">{title}</h2>
			<ul className="flex flex-col gap-2.5">
				{items.map((item) => (
					<li key={item} className="flex gap-3">
						<Check className="mt-1 size-4 shrink-0 text-primary" /> {item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default function CareersRole() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-28 md:px-8 md:py-20 lg:grid-cols-[1fr_20rem] lg:gap-16">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col items-start gap-4">
					<a href="#careers" className="text-sm text-muted-foreground">
						Careers / Engineering
					</a>
					<h1 className="text-4xl leading-tight md:text-5xl">{role.title}</h1>
					<div className="flex flex-wrap gap-2">
						{role.chips.map((chip) => (
							<Badge key={chip} variant="outline" className="font-normal">
								{chip}
							</Badge>
						))}
					</div>
					<p className="text-lg text-muted-foreground">{role.intro}</p>
				</div>
				<Checks title="What you'll do" items={role.todo} />
				<Checks title="What you'll bring" items={role.bring} />
			</div>
			<Card className="gap-5 p-6 lg:sticky lg:top-8 lg:self-start">
				<div className="flex flex-col gap-1">
					<span className="font-medium">Apply for this role</span>
					<span className="text-sm text-muted-foreground">
						A CV or a link to your work is enough. We reply within 10 working days.
					</span>
				</div>
				<Button size="lg">Apply now</Button>
				<dl className="flex flex-col divide-y text-sm">
					{role.facts.map((fact) => (
						<div key={fact.label} className="flex justify-between gap-4 py-2.5">
							<dt className="text-muted-foreground">{fact.label}</dt>
							<dd className="font-medium">{fact.value}</dd>
						</div>
					))}
				</dl>
			</Card>
			{/* [Agent] On phones the apply card sits below a long job text, so the action also sticks to the bottom of the
			    screen; pb-28 on the section keeps it from covering the last lines. */}
			<div className="fixed inset-x-0 bottom-0 border-t bg-background/95 p-4 backdrop-blur lg:hidden">
				<Button size="lg" className="w-full">
					Apply now
				</Button>
			</div>
		</section>
	)
}
