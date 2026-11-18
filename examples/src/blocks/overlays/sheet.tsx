import { Archive, Copy, ExternalLink, LifeBuoy, Link2, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

const target = allProjects[0]

const actions = [
	{ label: "Open", icon: ExternalLink },
	{ label: "Edit details", icon: Pencil },
	{ label: "Move to care", icon: LifeBuoy },
	{ label: "Copy link", icon: Link2 },
	{ label: "Duplicate", icon: Copy },
	{ label: "Archive", icon: Archive },
]

// [Agent] The open menu is the real DropdownMenu, portalled and placed by Radix under the row's ⋯; it is non-modal so
// the page behind keeps scrolling. Phones hide it and get the same actions as the sheet below.
function OpenMenu() {
	return (
		<DropdownMenu open modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon-sm" className="bg-accent" aria-label="Actions">
					<MoreHorizontal />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-48 max-md:hidden">
				{actions.map(({ label, icon: Icon }) => (
					<DropdownMenuItem key={label}>
						<Icon /> {label}
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<Trash2 /> Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

// [Agent] Composed inline rather than with vaul's Drawer: Drawer always mounts its dimmed overlay, which
// would also cover the desktop shot. This one is absolutely placed inside the block and only exists below md.
function BottomSheet() {
	return (
		<div className="md:hidden">
			<div className="absolute inset-0 bg-black/50" />
			<div
				role="dialog"
				aria-label={`${target.name} actions`}
				className="absolute inset-x-0 bottom-0 rounded-t-xl border-t bg-background pb-6"
			>
				<div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-border" />
				<div className="flex items-center justify-between gap-2 border-b px-4 py-4">
					<span className="font-medium">{target.name}</span>
					<StatusBadge status={target.status} />
				</div>
				<div className="flex flex-col p-2">
					{actions.map(({ label, icon: Icon }) => (
						<button
							key={label}
							type="button"
							className="flex items-center gap-3 rounded-md px-3 py-3 text-left"
						>
							<Icon className="size-5 text-muted-foreground" /> {label}
						</button>
					))}
					<button
						type="button"
						className="flex items-center gap-3 rounded-md px-3 py-3 text-left text-destructive"
					>
						<Trash2 className="size-5" /> Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default function OverlaysSheet() {
	return (
		<div className="relative">
			<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
				<div className="flex flex-col gap-4 p-4 md:p-6">
					<h1 className="text-xl leading-tight">Projects</h1>
					<Table>
						<TableHeader className="max-md:hidden">
							<TableRow>
								<TableHead>Project</TableHead>
								<TableHead>Owner</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-right">Updated</TableHead>
								<TableHead className="w-10" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{allProjects.slice(0, 10).map((project) => (
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
									<TableCell className="text-right text-muted-foreground max-md:hidden">
										{project.updated}
									</TableCell>
									<TableCell className="w-10">
										{project === target ? (
											<OpenMenu />
										) : (
											<RowMenu items={actions.map((action) => action.label)} />
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</AppShell>
			<BottomSheet />
		</div>
	)
}
