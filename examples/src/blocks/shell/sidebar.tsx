import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppShell } from "@/demo/app-nav"
import { ProjectsTable } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

export default function ShellSidebar() {
	return (
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
				<div>
					<h1 className="text-xl leading-tight">Projects</h1>
					<p className="text-sm text-muted-foreground">Recently updated · 5 of {allProjects.length}</p>
				</div>
				<ProjectsTable />
			</div>
		</AppShell>
	)
}
