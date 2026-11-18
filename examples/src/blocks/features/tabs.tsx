import type { ReactNode } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell } from "@/demo/app-nav"
import { features } from "@/demo/content"
import { Decisions } from "@/demo/decisions"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectCare, ProjectPlan } from "@/demo/project"
import { Face } from "@/demo/workspace"

type Event = [who: string, what: string, when: string]

const tabs: {
	value: string
	label: string
	area: string
	crumbs: string[]
	view: ReactNode
	activity: Event[]
}[] = [
	{
		value: "plan",
		label: "Plan",
		area: "Projects",
		crumbs: ["Projects", "Onboarding v3"],
		view: <ProjectPlan />,
		activity: [
			["Mei Okafor", "set the ship date to 3 February", "2h ago"],
			["Jonas Lind", "joined as reviewer", "Yesterday"],
			["Priya Shah", "added a sample project to the scope", "3d ago"],
		],
	},
	{
		value: "ship",
		label: "Ship",
		area: "Releases",
		crumbs: ["Releases", "Billing rewrite 1.4"],
		view: <ReleaseChecklist />,
		activity: [
			["Tomás Berg", "ticked Migration tested", "20m ago"],
			["Ana Ruiz", "signed off as owner", "2h ago"],
			["Ana Ruiz", "wrote the changelog", "2h ago"],
		],
	},
	{
		value: "care",
		label: "Look after",
		area: "Care",
		crumbs: ["Care", "Customer portal"],
		view: <ProjectCare />,
		activity: [
			["Tomás Berg", "ran the monthly health check", "Monday"],
			["Tomás Berg", "opened 2 dependency updates", "Monday"],
			["Leo Marchetti", "booked the review for 18 Nov 2027", "Last week"],
		],
	},
	{
		value: "hand-over",
		label: "Hand over",
		area: "Projects",
		crumbs: ["Projects", "Billing rewrite", "Decisions"],
		view: <Decisions />,
		activity: [
			["Ana Ruiz", "recorded Keep Stripe invoices", "14 Oct"],
			["Leo Marchetti", "commented on Stay on Postgres", "Yesterday"],
			["Tomás Berg", "recorded Release every three weeks", "2 Sep"],
		],
	},
]

export default function FeaturesTabs() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">Four jobs, one place</h2>
				<p className="text-lg text-muted-foreground">
					Plan it, ship it, look after it and hand it over, without changing tools.
				</p>
			</div>
			<Tabs defaultValue="plan" className="gap-6">
				<div className="-mx-4 overflow-x-auto px-4 md:flex md:justify-center">
					<TabsList className="h-10">
						{tabs.map((tab) => (
							<TabsTrigger key={tab.value} value={tab.value} className="px-4">
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
				{tabs.map((tab, index) => (
					<TabsContent key={tab.value} value={tab.value} className="flex flex-col gap-4">
						{/* [Agent] A fixed-height crop of the app: tall on phones (one column of the page), wide on desktop. */}
						<div className="overflow-hidden rounded-xl border shadow-lg">
							<AppShell active={tab.area} crumbs={tab.crumbs} className="h-[600px] md:h-[560px]">
								<div className="grid gap-6 p-4 md:p-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
									<div className="max-w-xl rounded-lg border">{tab.view}</div>
									<div className="hidden flex-col gap-3 text-xs lg:flex">
										<span className="font-medium">Activity</span>
										{tab.activity.map(([who, what, when]) => (
											<div key={what} className="flex gap-2.5">
												<Face name={who} className="size-6" />
												<span className="flex flex-col gap-0.5">
													<span>
														<span className="font-medium">{who}</span> {what}
													</span>
													<span className="text-muted-foreground">{when}</span>
												</span>
											</div>
										))}
									</div>
								</div>
							</AppShell>
						</div>
						<p className="text-center text-muted-foreground">{features[index].text}</p>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}
