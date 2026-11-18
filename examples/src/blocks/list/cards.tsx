import { LayoutGrid, List, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Photo } from "@/demo/photo"
import { StatusBadge } from "@/demo/table"
import { allProjects, Face } from "@/demo/workspace"

const covers = [
	{ client: "Northwind", scene: "object" },
	{ client: "Northwind", scene: "place" },
	{ client: "Ostra", scene: "person" },
	{ client: "Fieldnote", scene: "object" },
	{ client: "Parcel", scene: "place" },
	{ client: "Halden", scene: "person" },
] as const

export default function ListCards() {
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
				<div className="flex items-center justify-between gap-4">
					<div>
						<h1 className="text-xl leading-tight">Projects</h1>
						<p className="text-sm text-muted-foreground">{allProjects.length} projects</p>
					</div>
					<ToggleGroup type="single" defaultValue="grid" variant="outline" size="sm">
						<ToggleGroupItem value="grid" aria-label="Grid">
							<LayoutGrid />
						</ToggleGroupItem>
						<ToggleGroupItem value="list" aria-label="List">
							<List />
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{allProjects.slice(0, 6).map((project, index) => (
						<Card key={project.name} className="gap-0 overflow-hidden p-0">
							<Photo scene={covers[index].scene} className="aspect-[16/9] border-b" />
							<div className="flex flex-col gap-3 p-4">
								<div className="flex items-start justify-between gap-2">
									<div className="flex min-w-0 flex-col">
										<span className="truncate font-medium">{project.name}</span>
										<span className="text-sm text-muted-foreground">
											{covers[index].client} · updated {project.updated}
										</span>
									</div>
									<RowMenu items={["Open", "Edit plan", "Archive"]} className="-mt-1 -mr-2" />
								</div>
								<div className="flex items-center justify-between">
									<StatusBadge status={project.status} />
									<Face name={project.owner} className="size-6" />
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</AppShell>
	)
}
