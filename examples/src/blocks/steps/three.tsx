import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectCare, ProjectPlan } from "@/demo/project"

const steps = [
	{
		title: "Write the plan",
		text: "Scope, owner and a ship date on one page the whole team can read.",
		url: "keep.app/onboarding-v3/plan",
		View: ProjectPlan,
	},
	{
		title: "Ship in small releases",
		text: "Each release is a checklist. When every check passes, it goes out.",
		url: "keep.app/billing-rewrite/1.4",
		View: ReleaseChecklist,
	},
	{
		title: "Hand it into care",
		text: "Shipped work keeps an owner, health checks and a yearly review.",
		url: "keep.app/customer-portal/care",
		View: ProjectCare,
	},
]

export default function StepsThree() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">How it works</span>
				<h2 className="text-3xl leading-tight md:text-5xl">From first plan to fifth year</h2>
				<p className="text-lg text-muted-foreground">Three steps, and the project never leaves Keep.</p>
			</div>
			<ol className="grid gap-12 md:grid-cols-3 md:gap-8">
				{steps.map(({ title, text, url, View }, index) => (
					<li key={title} className="flex flex-col gap-4">
						<Frame url={url} className="h-72">
							<View />
						</Frame>
						<div className="flex items-center gap-3">
							<span className="flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs">
								{index + 1}
							</span>
							<h3 className="text-xl">{title}</h3>
						</div>
						<p className="text-muted-foreground">{text}</p>
					</li>
				))}
			</ol>
		</section>
	)
}
