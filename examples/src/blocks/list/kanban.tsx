import { Plus, SlidersHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AppShell } from "@/demo/app-nav"
import type { Status } from "@/demo/content"
import { allProjects, Face } from "@/demo/workspace"

const columns: Status[] = ["Planning", "Shipping", "In care", "Paused"]

const cards: Record<string, { line: string; client: string }> = {
	"Billing rewrite": { line: "Release 1.4 · 3 of 5 checks", client: "Northwind" },
	"Customer portal": { line: "Yearly review due today", client: "Northwind" },
	"Onboarding v3": { line: "Plan ready for review", client: "Ostra" },
	"Mobile app": { line: "0.9 blocked on a migration", client: "Fieldnote" },
	"Search index": { line: "Paused until January", client: "Parcel" },
	"Care dashboard": { line: "2.0 scheduled for Monday", client: "Halden" },
	"Client reports": { line: "3.1 released yesterday", client: "Lumen & Co" },
	"Invoices v2": { line: "Scope draft, 2 open questions", client: "Northwind" },
	"Data export": { line: "Waiting on a client brief", client: "Tilde" },
	"Design system": { line: "Handover to Mei on Friday", client: "Halden" },
	"Status page": { line: "Next review 4 Mar", client: "Halden" },
	"Docs site": { line: "Review due 21 Nov", client: "Tilde" },
}

// [Agent] On a phone each column is 85% of the screen and snaps, so one stage fills the view and the next one peeks:
// swiping moves between stages instead of shrinking four columns to unreadable strips.
export default function ListKanban() {
	return (
		<AppShell
			active="Projects"
			crumbs={["Projects", "Board"]}
			action={
				<Button size="sm">
					<Plus /> New project
				</Button>
			}
		>
			<div className="flex h-full flex-col gap-4 py-4 md:py-6">
				<div className="flex items-center justify-between gap-4 px-4 md:px-6">
					<h1 className="text-xl leading-tight">Board</h1>
					<Button variant="outline" size="sm">
						<SlidersHorizontal /> Filter
					</Button>
				</div>
				<div className="flex min-h-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:grid md:grid-cols-4 md:gap-4 md:px-6">
					{columns.map((status) => {
						const items = allProjects.filter((project) => project.status === status)
						return (
							<section
								key={status}
								className="flex w-[85%] shrink-0 snap-center flex-col gap-2 rounded-xl bg-muted/60 p-2 md:w-auto"
							>
								<div className="flex items-center justify-between px-2 py-1">
									<h2 className="text-sm leading-tight">
										{status} <span className="text-muted-foreground tabular-nums">{items.length}</span>
									</h2>
									<Button variant="ghost" size="icon-xs" aria-label={`Add to ${status}`}>
										<Plus />
									</Button>
								</div>
								{items.map((project) => (
									<article
										key={project.name}
										className="flex flex-col gap-2 rounded-lg border bg-card p-3 text-sm shadow-xs"
									>
										<span className="font-medium">{project.name}</span>
										<span className="text-muted-foreground">{cards[project.name].line}</span>
										<div className="flex items-center justify-between pt-1">
											<Badge variant="secondary" className="font-normal">
												{cards[project.name].client}
											</Badge>
											<Face name={project.owner} className="size-6" />
										</div>
									</article>
								))}
							</section>
						)
					})}
				</div>
			</div>
		</AppShell>
	)
}
