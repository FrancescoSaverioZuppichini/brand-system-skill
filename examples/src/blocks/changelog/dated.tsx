import { Check, Rss } from "lucide-react"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { Person, ProjectsTable } from "@/demo/table"

const care = [
	{ name: "Customer portal", owner: "Tomás Berg", review: "18 Nov 2026" },
	{ name: "Marketing site", owner: "Priya Shah", review: "2 Dec 2026" },
	{ name: "Invoice export", owner: "Leo Marchetti", review: "9 Jan 2027" },
]

function CareList() {
	return (
		<Frame url="keep.app/in-care">
			<div className="flex flex-col divide-y text-xs">
				{care.map((project) => (
					<div
						key={project.name}
						className="grid grid-cols-[1fr_auto] items-center gap-2 px-4 py-3 sm:grid-cols-[1fr_10rem_auto]"
					>
						<span className="font-medium">{project.name}</span>
						<Person name={project.owner} className="hidden sm:flex" />
						<span className="text-right text-muted-foreground">Review {project.review}</span>
					</div>
				))}
			</div>
		</Frame>
	)
}

const releases: {
	version: string
	date: string
	title: string
	text: string
	checks: string[]
	shot: ReactNode
}[] = [
	{
		version: "2.0",
		date: "4 Nov 2026",
		title: "Care schedules",
		text: "A shipped project now moves into care with an owner, a weekly health check and a yearly review date. Keep reminds the owner a month before the review.",
		checks: [
			"Move a project into care from its last release",
			"Health checks run weekly against your repo and uptime monitor",
			"Review dates show on the In care page and in your calendar feed",
		],
		shot: <CareList />,
	},
	{
		version: "1.9",
		date: "14 Oct 2026",
		title: "Release checklists you can reuse",
		text: "Save a release's checks as a template and start the next release from it. Checks keep their owner, so nobody has to ask who signs off.",
		checks: [
			"Templates per project or for the whole workspace",
			"Ticked checks are dated and show who ticked them",
			"The release can't be marked shipped with open checks",
		],
		shot: (
			<Frame url="keep.app/billing-rewrite/releases/1.4">
				<ReleaseChecklist />
			</Frame>
		),
	},
	{
		version: "1.8",
		date: "23 Sep 2026",
		title: "Owners and progress in the projects table",
		text: "The projects table shows each project's owner and how far its current release is, so the weekly check-in starts from one screen.",
		checks: ["Sort by owner, status or last update", "Progress follows the release checklist"],
		shot: (
			<Frame url="keep.app/projects">
				<ProjectsTable className="px-2" />
			</Frame>
		),
	},
]

export default function ChangelogDated() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-4xl flex-col">
				<header className="flex flex-col gap-4 border-b pb-8 sm:flex-row sm:items-end sm:justify-between">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl md:text-5xl">Changelog</h1>
						<p className="text-muted-foreground">What changed in Keep, about every three weeks.</p>
					</div>
					<Button variant="outline" size="sm" className="self-start sm:self-auto">
						<Rss /> Subscribe
					</Button>
				</header>
				{releases.map((release) => (
					<article
						key={release.version}
						className="grid gap-4 border-b py-10 md:grid-cols-[9rem_1fr] md:gap-10"
					>
						<div className="flex items-center gap-3 md:sticky md:top-8 md:flex-col md:items-start md:self-start">
							<time className="text-sm text-muted-foreground">{release.date}</time>
							<Badge variant="outline" className="font-mono">
								v{release.version}
							</Badge>
						</div>
						<div className="flex min-w-0 flex-col gap-5">
							<h2 className="text-2xl md:text-3xl">{release.title}</h2>
							{release.shot}
							<p className="text-muted-foreground">{release.text}</p>
							<ul className="flex flex-col gap-2 text-sm">
								{release.checks.map((check) => (
									<li key={check} className="flex gap-2">
										<Check className="mt-0.5 size-4 shrink-0 text-primary" /> {check}
									</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
