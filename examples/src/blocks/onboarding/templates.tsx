import { Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppShell } from "@/demo/app-nav"
import { Frame } from "@/demo/frame"
import { workspace } from "@/demo/workspace"

const categories = ["All", "Client work", "Product", "Open source", "Hardware", "Internal"]

// [Agent] A preview shows the template's real phases and when each lands, so nobody picks an empty shell by its name.
const templates = [
	{
		title: "Agency retainer",
		slug: "agency-retainer",
		by: "Halden",
		uses: "1.2k uses",
		steps: [
			["Kickoff and scope", "Week 1"],
			["Monthly report", "Week 4"],
			["Quarterly review", "Week 12"],
			["Renewal call", "Week 48"],
		],
	},
	{
		title: "Hardware launch",
		slug: "hardware-launch",
		by: "Fieldnote",
		uses: "860 uses",
		steps: [
			["Prototype sign-off", "Week 2"],
			["Certification", "Week 10"],
			["First 100 units", "Week 16"],
			["Firmware care", "Yearly"],
		],
	},
	{
		title: "Yearly client review",
		slug: "client-review",
		by: "Ostra",
		uses: "640 uses",
		steps: [
			["Collect usage data", "Week 1"],
			["Health check", "Week 2"],
			["Review meeting", "Week 3"],
			["Plan next year", "Week 4"],
		],
	},
	{
		title: "Open-source release",
		slug: "oss-release",
		by: "Tilde",
		uses: "2.4k uses",
		steps: [
			["Changelog written", "Day 1"],
			["CI green on main", "Day 2"],
			["Tag and publish", "Day 3"],
			["Announce", "Day 3"],
		],
	},
	{
		title: "Website rebuild",
		slug: "website-rebuild",
		by: "Parcel",
		uses: "1.1k uses",
		steps: [
			["Content audit", "Week 1"],
			["Design review", "Week 3"],
			["Launch checklist", "Week 8"],
			["Redirects checked", "Week 9"],
		],
	},
	{
		title: "Handover to care",
		slug: "handover",
		by: "Keep",
		uses: "3.0k uses",
		steps: [
			["Owner named", "Day 1"],
			["Docs written", "Week 1"],
			["Health check set", "Week 1"],
			["Review date set", "Week 2"],
		],
	},
]

export default function OnboardingTemplates() {
	return (
		<AppShell
			active="Projects"
			crumbs={[workspace.name, "Projects", "New project"]}
			className="h-auto md:h-[900px]"
		>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex items-start justify-between gap-4">
					<div className="flex flex-col gap-1">
						<h1 className="text-2xl">Start from a template</h1>
						<p className="text-sm text-muted-foreground">
							Each one comes with phases, dates and a first release checklist.
						</p>
					</div>
					<Button variant="outline" className="shrink-0">
						Start blank
					</Button>
				</div>
				<div className="flex flex-wrap gap-2">
					{categories.map((category, index) => (
						<Button key={category} size="sm" variant={index === 0 ? "default" : "outline"}>
							{category}
						</Button>
					))}
				</div>
				<div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
					{templates.map((template) => (
						<a key={template.title} href="#template" className="flex flex-col gap-3">
							<Frame url={`keep.app/templates/${template.slug}`}>
								<ul className="flex flex-col divide-y text-xs">
									{template.steps.map(([step, when]) => (
										<li key={step} className="flex items-center gap-2 px-3 py-2">
											<Circle className="size-3 shrink-0 text-muted-foreground" />
											<span className="flex-1 truncate">{step}</span>
											<span className="text-muted-foreground">{when}</span>
										</li>
									))}
								</ul>
							</Frame>
							<span className="flex flex-col">
								<span className="font-medium">{template.title}</span>
								<span className="text-sm text-muted-foreground">
									{template.by} · {template.uses}
								</span>
							</span>
						</a>
					))}
				</div>
			</div>
		</AppShell>
	)
}
