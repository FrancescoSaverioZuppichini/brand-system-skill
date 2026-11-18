import { Check } from "lucide-react"
import { features } from "@/demo/content"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectCare, ProjectPlan } from "@/demo/project"
import { cn } from "@/lib/utils"

const rows = [
	{
		...features[0],
		kicker: "Plan",
		url: "keep.app/onboarding-v3",
		view: <ProjectPlan />,
		points: [
			"Scope in plain sentences, not tickets",
			"One owner and one reviewer",
			"A ship date everyone can see",
		],
	},
	{
		...features[1],
		kicker: "Ship",
		url: "keep.app/billing-rewrite/releases/1.4",
		view: <ReleaseChecklist />,
		points: [
			"Five checks, each signed by a person",
			"The changelog is written before release",
			"94% of releases ship on their date",
		],
	},
	{
		...features[2],
		kicker: "Look after",
		url: "keep.app/customer-portal/care",
		view: <ProjectCare />,
		points: [
			"A monthly health check, no pager",
			"An owner by name, never a team",
			"A yearly review date on every project",
		],
	},
]

export default function FeaturesAlternating() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:gap-24 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm font-medium text-muted-foreground">How Keep works</span>
				<h2 className="text-3xl leading-tight md:text-5xl">From the first plan to the fifth year</h2>
				<p className="text-lg text-muted-foreground">Three screens your team will use every week.</p>
			</div>
			{/* [Agent] The screen comes first in the markup, so phones always read picture then text; from md up every
			    second row moves its screen to the right instead. */}
			{rows.map((row, index) => (
				<div key={row.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
					<div className={cn("rounded-xl bg-muted p-4 sm:p-8 lg:p-10", index % 2 === 1 && "md:order-last")}>
						<Frame url={row.url} className="mx-auto max-w-md shadow-lg">
							{row.view}
						</Frame>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-sm font-medium text-muted-foreground">{row.kicker}</span>
						<h3 className="text-2xl leading-tight md:text-3xl">{row.title}</h3>
						<p className="text-muted-foreground">{row.text}</p>
						<ul className="mt-2 flex flex-col gap-2.5">
							{row.points.map((point) => (
								<li key={point} className="flex items-center gap-3 text-sm">
									<Check className="size-4 shrink-0 text-chart-2" /> {point}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</section>
	)
}
