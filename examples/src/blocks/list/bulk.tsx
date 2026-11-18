import { Archive, Download, UserRound, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

const picked = ["Search index", "Invoices v2", "Data export"]

// [Agent] The bar is sticky at the bottom of the scrolling page, so it stays in reach however long the list is;
// on a phone it docks full width like a toolbar. It uses inverted roles to float above the table in any style.
export default function ListBulk() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
			<div className="flex min-h-full flex-col gap-4 p-4 pb-0 md:p-6 md:pb-0">
				<div>
					<h1 className="text-xl leading-tight">Projects</h1>
					<p className="text-sm text-muted-foreground">Select projects to assign, archive or export them</p>
				</div>
				<Table>
					<TableHeader className="max-md:hidden">
						<TableRow>
							<TableHead className="w-8">
								<Checkbox checked="indeterminate" aria-label="Select all" />
							</TableHead>
							<TableHead>Project</TableHead>
							<TableHead>Owner</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Updated</TableHead>
							<TableHead className="w-10" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{allProjects.map((project) => {
							const selected = picked.includes(project.name)
							return (
								<TableRow key={project.name} data-state={selected ? "selected" : undefined}>
									<TableCell className="w-8">
										<Checkbox checked={selected} aria-label={`Select ${project.name}`} />
									</TableCell>
									<TableCell>
										<div className="font-medium">{project.name}</div>
										<div className="text-xs text-muted-foreground md:hidden">{project.owner}</div>
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
									<TableCell className="max-md:hidden">
										<RowMenu items={["Open", "Assign owner", "Archive"]} />
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
				<div className="sticky bottom-0 -mx-4 mt-auto flex justify-center pt-4 md:mx-0 md:pb-6">
					<div className="flex w-full items-center gap-1 bg-foreground p-2 pl-4 text-sm text-background shadow-lg md:w-auto md:rounded-xl">
						<span className="mr-2 font-medium tabular-nums md:mr-4">{picked.length} selected</span>
						<Button
							variant="ghost"
							size="sm"
							className="text-background hover:bg-background/15 hover:text-background"
						>
							<UserRound /> <span className="max-sm:sr-only">Assign</span>
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="text-background hover:bg-background/15 hover:text-background"
						>
							<Download /> <span className="max-sm:sr-only">Export</span>
						</Button>
						<Button size="sm" className="bg-background text-foreground hover:bg-background/90">
							<Archive /> Archive
						</Button>
						<Button
							variant="ghost"
							size="icon-sm"
							className="ml-auto text-background hover:bg-background/15 hover:text-background md:ml-2"
							aria-label="Clear selection"
						>
							<X />
						</Button>
					</div>
				</div>
			</div>
		</AppShell>
	)
}
