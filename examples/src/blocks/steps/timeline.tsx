import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const steps = [
	{
		when: "Day 1",
		title: "Write the plan",
		text: "Scope, owner and ship date on one page. Most teams finish it in an afternoon.",
	},
	{
		when: "Week 1",
		title: "First release",
		text: "Release 0.1 goes out behind a checklist the whole team reviewed.",
	},
	{ when: "Week 6", title: "Ship 1.0", text: "Every check passed, the changelog written, the client told." },
	{
		when: "Month 3",
		title: "Move it into care",
		text: "The project gets an owner, monthly health checks and a review date a year out.",
	},
	{
		when: "Every year",
		title: "Review and decide",
		text: "Keep it, change it or retire it, and write down why.",
	},
]

export default function StepsTimeline() {
	return (
		<section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:px-8 md:py-24">
			<div className="flex flex-col items-start gap-5">
				<span className="text-sm text-muted-foreground">How it works</span>
				<h2 className="text-3xl leading-tight md:text-5xl">A project's first year in Keep</h2>
				<p className="text-lg text-muted-foreground">
					Shipping is the middle of a project, not the end. Here is what happens before and after.
				</p>
				<Button variant="outline">See a sample plan</Button>
			</div>
			{/* [Agent] The vertical line is the list's left border; each dot is pulled half its width over it, so the
			    line runs through the dots' centres at any text length. */}
			<ol className="ml-1.5 flex flex-col gap-10 border-l">
				{steps.map((step, index) => (
					<li key={step.title} className="relative flex flex-col gap-1.5 pl-8">
						<span
							className={cn(
								"absolute top-1 -left-[7px] size-3.5 rounded-full border-2 border-primary",
								index === 0 ? "bg-primary" : "bg-background",
							)}
						/>
						<span className="font-mono text-xs text-muted-foreground">{step.when}</span>
						<h3 className="text-xl">{step.title}</h3>
						<p className="text-muted-foreground">{step.text}</p>
					</li>
				))}
			</ol>
		</section>
	)
}
