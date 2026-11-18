import { ChevronLeft, ChevronRight, Download, PlusCircle, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

const rows = allProjects.slice(0, 10)

export default function ListTable() {
	return (
		<AppShell
			active="Projects"
			crumbs={["Halden", "Projects"]}
			action={
				<Button size="sm">
					<PlusCircle /> New project
				</Button>
			}
		>
			<div className="flex flex-col gap-4 p-4 md:p-6">
				<div>
					<h1 className="text-xl leading-tight">Projects</h1>
					<p className="text-sm text-muted-foreground">{allProjects.length} projects in Halden</p>
				</div>
				<div className="flex flex-col gap-2 md:flex-row md:items-center">
					<InputGroup className="md:w-72">
						<InputGroupAddon>
							<Search />
						</InputGroupAddon>
						<InputGroupInput placeholder="Search projects" />
					</InputGroup>
					<div className="flex flex-wrap gap-2">
						<Button variant="outline" size="sm" className="border-dashed">
							<PlusCircle /> Status
							<Badge variant="secondary" className="ml-1 rounded-sm px-1 font-normal">
								Shipping, Planning
							</Badge>
						</Button>
						<Button variant="outline" size="sm" className="border-dashed">
							<PlusCircle /> Owner
						</Button>
						<Button variant="ghost" size="sm" className="text-muted-foreground">
							Reset <X />
						</Button>
					</div>
					<Button variant="outline" size="sm" className="md:ml-auto">
						<Download /> Export CSV
					</Button>
				</div>
				<Table>
					<TableHeader className="max-md:hidden">
						<TableRow>
							<TableHead>Project</TableHead>
							<TableHead>Owner</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Progress</TableHead>
							<TableHead className="text-right">Updated</TableHead>
							<TableHead className="w-10" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((project) => (
							<TableRow key={project.name}>
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
								<TableCell className="max-md:hidden">
									<span className="flex items-center gap-2 text-muted-foreground tabular-nums">
										<Progress value={project.progress} className="h-1.5 w-24" />
										{project.progress}%
									</span>
								</TableCell>
								<TableCell className="text-right text-muted-foreground max-md:hidden">
									{project.updated}
								</TableCell>
								<TableCell className="max-md:hidden">
									<RowMenu items={["Open", "Edit plan", "Move to care", "Archive"]} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
					<span>
						1–{rows.length} of {allProjects.length}
					</span>
					<div className="flex gap-2">
						<Button variant="outline" size="icon-sm" disabled aria-label="Previous page">
							<ChevronLeft />
						</Button>
						<Button variant="outline" size="icon-sm" aria-label="Next page">
							<ChevronRight />
						</Button>
					</div>
				</div>
			</div>
		</AppShell>
	)
}
