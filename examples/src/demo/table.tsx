import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { people, projects, type Status } from "@/demo/content"
import { cn } from "@/lib/utils"

const dots: Record<Status, string> = {
	Planning: "bg-chart-3",
	Shipping: "bg-chart-1",
	"In care": "bg-chart-2",
	Paused: "bg-muted-foreground",
}

export function StatusBadge({ status }: { status: Status }) {
	return (
		<Badge variant="outline" className="gap-1.5 font-normal">
			<span className={cn("size-1.5 rounded-full", dots[status])} />
			{status}
		</Badge>
	)
}

export function Person({ name, className }: { name: string; className?: string }) {
	const initials = people.find((person) => person.name === name)?.initials ?? name.slice(0, 2)
	return (
		<span className={cn("flex items-center gap-2", className)}>
			<Avatar className="size-6">
				<AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
			</Avatar>
			<span className="truncate">{name}</span>
		</span>
	)
}

export function ProjectsTable({ rows = projects.length, className }: { rows?: number; className?: string }) {
	return (
		<div className={cn("@container", className)}>
			<Table className="text-xs">
				<TableHeader>
					<TableRow>
						<TableHead>Project</TableHead>
						<TableHead className="hidden @md:table-cell">Owner</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="hidden @xl:table-cell">Progress</TableHead>
						<TableHead className="hidden text-right @2xl:table-cell">Updated</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.slice(0, rows).map((project) => (
						<TableRow key={project.name}>
							<TableCell className="font-medium">{project.name}</TableCell>
							<TableCell className="hidden @md:table-cell">
								<Person name={project.owner} />
							</TableCell>
							<TableCell>
								<StatusBadge status={project.status} />
							</TableCell>
							<TableCell className="hidden @xl:table-cell">
								<Progress value={project.progress} className="h-1.5 w-24" />
							</TableCell>
							<TableCell className="hidden text-right text-muted-foreground @2xl:table-cell">
								{project.updated}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
