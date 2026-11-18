import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type Kind = "New" | "Improved" | "Fixed"

const variants = { New: "default", Improved: "secondary", Fixed: "outline" } as const

const changes: { date: string; kind: Kind; text: string; version: string }[] = [
	{
		date: "12 Nov 2026",
		kind: "Fixed",
		text: "Care reminders no longer go to owners who left the team",
		version: "2.0.2",
	},
	{
		date: "12 Nov 2026",
		kind: "Improved",
		text: "Health checks retry twice before a project turns red",
		version: "2.0.2",
	},
	{
		date: "7 Nov 2026",
		kind: "Fixed",
		text: "Markdown export keeps line breaks inside decision notes",
		version: "2.0.1",
	},
	{
		date: "4 Nov 2026",
		kind: "New",
		text: "Care schedules: an owner, weekly health checks and a yearly review",
		version: "2.0.0",
	},
	{
		date: "4 Nov 2026",
		kind: "New",
		text: "keep care moves a project into care from the CLI",
		version: "2.0.0",
	},
	{
		date: "28 Oct 2026",
		kind: "Improved",
		text: "The projects table loads 3× faster in workspaces with 500+ projects",
		version: "1.9.3",
	},
	{
		date: "21 Oct 2026",
		kind: "Fixed",
		text: "Release dates showed a day early in time zones west of UTC",
		version: "1.9.2",
	},
	{
		date: "14 Oct 2026",
		kind: "New",
		text: "Reusable release checklists, per project or workspace",
		version: "1.9.0",
	},
	{
		date: "14 Oct 2026",
		kind: "Improved",
		text: "GitLab merge requests link to their release automatically",
		version: "1.9.0",
	},
	{
		date: "30 Sep 2026",
		kind: "Fixed",
		text: "Search missed projects renamed in the last hour",
		version: "1.8.4",
	},
]

export default function ChangelogCompact() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl md:text-5xl">Changelog</h1>
					<p className="text-muted-foreground">Every change to Keep and the CLI, newest first.</p>
				</div>
				<ToggleGroup type="single" defaultValue="all" variant="outline" size="sm">
					<ToggleGroupItem value="all">All</ToggleGroupItem>
					<ToggleGroupItem value="new">New</ToggleGroupItem>
					<ToggleGroupItem value="improved">Improved</ToggleGroupItem>
					<ToggleGroupItem value="fixed">Fixed</ToggleGroupItem>
				</ToggleGroup>
			</div>
			<ul className="flex flex-col border-t">
				{changes.map((change) => (
					<li
						key={change.text}
						className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-1.5 border-b py-3 text-sm md:grid-cols-[7rem_6rem_1fr_auto] md:gap-x-6"
					>
						<time className="text-muted-foreground tabular-nums">{change.date}</time>
						<Badge variant={variants[change.kind]} className="justify-self-start md:w-20">
							{change.kind}
						</Badge>
						<span className="col-span-3 row-start-2 md:col-span-1 md:row-start-auto">{change.text}</span>
						<span className="font-mono text-xs text-muted-foreground">{change.version}</span>
					</li>
				))}
			</ul>
		</section>
	)
}
