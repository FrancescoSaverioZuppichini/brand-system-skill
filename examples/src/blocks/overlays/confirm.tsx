import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AppShell } from "@/demo/app-nav"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

const selected = ["Onboarding v3", "Search index"]

function Projects() {
	return (
		<Table>
			<TableHeader className="max-md:hidden">
				<TableRow>
					<TableHead className="w-8" />
					<TableHead>Project</TableHead>
					<TableHead>Owner</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Updated</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{allProjects.slice(0, 9).map((project) => {
					const checked = selected.includes(project.name)
					return (
						<TableRow key={project.name} data-state={checked ? "selected" : undefined}>
							<TableCell>
								<Checkbox checked={checked} aria-label={`Select ${project.name}`} />
							</TableCell>
							<TableCell>
								<div className="font-medium">{project.name}</div>
								<div className="text-xs text-muted-foreground md:hidden">
									{project.owner} · {project.updated}
								</div>
							</TableCell>
							<TableCell className="max-md:hidden">
								<Person name={project.owner} />
							</TableCell>
							<TableCell className="max-md:text-right">
								<StatusBadge status={project.status} />
							</TableCell>
							<TableCell className="text-right text-muted-foreground max-md:hidden">
								{project.updated}
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}

// [Agent] The real shadcn Dialog, portalled to <body>: AppShell is exactly the shooter's 900 px viewport, so the
// fixed overlay and the centred dialog land on the block. Autofocus is skipped so no focus ring shows on "Cancel".
export default function OverlaysConfirm() {
	return (
		<>
			<AppShell
				active="Projects"
				crumbs={["Halden", "Projects"]}
				action={
					<Button size="sm">
						<Plus /> New project
					</Button>
				}
			>
				<div className="flex flex-col gap-4 p-4 md:p-6">
					<div className="flex items-center justify-between gap-3">
						<h1 className="text-xl leading-tight">Projects</h1>
						<div className="flex items-center gap-2 text-sm">
							<span className="text-muted-foreground">{selected.length} selected</span>
							<Button size="sm" variant="outline">
								Archive
							</Button>
							<Button size="sm" variant="outline">
								Delete
							</Button>
						</div>
					</div>
					<Projects />
				</div>
			</AppShell>
			<Dialog open>
				<DialogContent
					showCloseButton={false}
					onOpenAutoFocus={(event) => event.preventDefault()}
					className="sm:max-w-md"
				>
					<DialogHeader className="text-left">
						<DialogTitle>Delete 2 projects?</DialogTitle>
						<DialogDescription>
							Onboarding v3 and Search index are deleted for everyone at Halden, with their plans, the
							scheduled release 1.0 and every comment. This can’t be undone. To keep the history, archive them
							instead.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline">Cancel</Button>
						<Button variant="destructive">Delete 2 projects</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
