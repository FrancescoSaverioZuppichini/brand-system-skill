import { Import } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AppShell } from "@/demo/app-nav"
import { projects } from "@/demo/content"
import { ProjectsTable } from "@/demo/table"

export default function EmptySample() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
			<div className="flex flex-col gap-5 p-4 md:p-6">
				<div className="flex flex-col gap-4 rounded-lg border-2 border-foreground bg-card p-4 md:flex-row md:items-center md:p-5">
					<div className="flex flex-1 flex-col gap-1">
						<span className="font-medium">You are looking at sample data</span>
						<span className="text-sm text-muted-foreground">
							These {projects.length} projects show how Keep tracks owners, status and progress. Import yours
							from Linear, Jira or a CSV and the samples are removed.
						</span>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row">
						<Button variant="ghost">Remove samples</Button>
						<Button>
							<Import /> Import your projects
						</Button>
					</div>
				</div>
				<div aria-hidden className="flex flex-col gap-2 opacity-50">
					<div className="flex items-center gap-2">
						<h1 className="text-xl leading-tight">Projects</h1>
						<Badge variant="outline">Sample</Badge>
					</div>
					<ProjectsTable />
				</div>
			</div>
		</AppShell>
	)
}
