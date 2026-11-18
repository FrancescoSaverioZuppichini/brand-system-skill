import { ChevronRight, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const roles = [
	{ title: "Senior product engineer", team: "Engineering", location: "Remote, EU", type: "Full-time" },
	{ title: "Infrastructure engineer", team: "Engineering", location: "Berlin", type: "Full-time" },
	{ title: "iOS engineer", team: "Engineering", location: "Remote, EU", type: "Full-time" },
	{ title: "Engineering manager, Care", team: "Engineering", location: "Berlin", type: "Full-time" },
	{ title: "Product designer", team: "Design", location: "Remote, EU", type: "Full-time" },
	{ title: "Design engineer", team: "Design", location: "Lisbon", type: "Contract" },
	{ title: "Support lead", team: "Customers", location: "Lisbon", type: "Full-time" },
	{ title: "Account executive, DACH", team: "Sales", location: "Berlin", type: "Full-time" },
]

export default function CareersTable() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl md:text-5xl">Open roles</h1>
				<p className="text-muted-foreground">24 roles in 6 teams. We reply to every application within 10 working days.</p>
			</div>
			<div className="flex flex-col gap-3 md:flex-row">
				<InputGroup className="md:flex-1">
					<InputGroupInput placeholder="Search roles" />
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
				</InputGroup>
				<Select defaultValue="all">
					<SelectTrigger className="w-full md:w-48" aria-label="Team">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All teams</SelectItem>
						<SelectItem value="engineering">Engineering</SelectItem>
						<SelectItem value="design">Design</SelectItem>
					</SelectContent>
				</Select>
				<Select defaultValue="all">
					<SelectTrigger className="w-full md:w-48" aria-label="Location">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All locations</SelectItem>
						<SelectItem value="remote">Remote, EU</SelectItem>
						<SelectItem value="berlin">Berlin</SelectItem>
						<SelectItem value="lisbon">Lisbon</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Table className="hidden md:table">
				<TableHeader>
					<TableRow>
						<TableHead>Role</TableHead>
						<TableHead>Team</TableHead>
						<TableHead>Location</TableHead>
						<TableHead>Type</TableHead>
						<TableHead className="w-8" />
					</TableRow>
				</TableHeader>
				<TableBody>
					{roles.map((role) => (
						<TableRow key={role.title}>
							<TableCell className="font-medium">{role.title}</TableCell>
							<TableCell className="text-muted-foreground">{role.team}</TableCell>
							<TableCell className="text-muted-foreground">{role.location}</TableCell>
							<TableCell>
								<Badge variant="outline">{role.type}</Badge>
							</TableCell>
							<TableCell>
								<ChevronRight className="size-4 text-muted-foreground" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{/* [Agent] Phones get the same roles as a list (title and type on one line, team and place under it) instead of a
			    table squeezed to four unreadable columns. */}
			<ul className="flex flex-col divide-y border-y md:hidden">
				{roles.map((role) => (
					<li key={role.title} className="flex flex-col gap-1 py-3">
						<span className="flex items-center justify-between gap-3">
							<span className="font-medium">{role.title}</span>
							<Badge variant="outline">{role.type}</Badge>
						</span>
						<span className="text-sm text-muted-foreground">
							{role.team} · {role.location}
						</span>
					</li>
				))}
			</ul>
			<div className="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
				<span>Showing 8 of 24 roles</span>
				<Pagination className="mx-0 w-auto">
					<PaginationContent>
						<PaginationItem>
							<PaginationLink href="#1" isActive>
								1
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#2">2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#3">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#2" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</section>
	)
}
