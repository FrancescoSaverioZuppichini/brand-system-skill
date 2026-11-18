import {
	Check,
	Circle,
	FolderKanban,
	Inbox,
	LifeBuoy,
	Plus,
	Rocket,
	Search,
	Settings,
	Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { me } from "@/demo/app-nav"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const areas = [
	{ label: "Inbox", icon: Inbox },
	{ label: "Projects", icon: FolderKanban },
	{ label: "Releases", icon: Rocket },
	{ label: "Care", icon: LifeBuoy },
	{ label: "Members", icon: Users },
]

const selected = allProjects[0]

const milestones = [
	{ label: "Plan signed off by Northwind", date: "2 Sep", done: true },
	{ label: "Release 1.2: new invoice model", date: "6 Oct", done: true },
	{ label: "Release 1.3: refunds and credits", date: "28 Oct", done: true },
	{ label: "Release 1.4: migrate live accounts", date: "20 Nov", done: false },
	{ label: "Move to care, first review", date: "4 Dec", done: false },
]

// [Agent] The rail takes the brand colour (primary) so it reads as chrome, not content; every icon has a tooltip
// because a rail without labels is the tell. On a phone the rail turns into the bottom tab bar and the list is the
// first screen; the open project is a second screen, so it is hidden below md.
export default function ShellRail() {
	return (
		<TooltipProvider>
			<div className="flex h-[900px] flex-col overflow-hidden bg-background text-foreground md:flex-row">
				<nav className="hidden w-14 shrink-0 flex-col items-center gap-1 bg-primary py-3 text-primary-foreground md:flex">
					<svg viewBox="0 0 24 24" className="mb-3 size-7" aria-label="Keep">
						<rect x="3" y="9" width="18" height="12" className="fill-current" />
						<rect x="3" y="3" width="18" height="4" className="fill-current opacity-50" />
					</svg>
					{areas.map(({ label, icon: Icon }) => (
						<Tooltip key={label}>
							<TooltipTrigger asChild>
								<a
									href="#"
									aria-label={label}
									className={cn(
										"flex size-10 items-center justify-center rounded-md",
										label === "Projects" ? "bg-primary-foreground/20" : "opacity-70 hover:opacity-100",
									)}
								>
									<Icon className="size-5" />
								</a>
							</TooltipTrigger>
							<TooltipContent side="right">{label}</TooltipContent>
						</Tooltip>
					))}
					<a
						href="#"
						aria-label="Settings"
						className="mt-auto flex size-10 items-center justify-center opacity-70"
					>
						<Settings className="size-5" />
					</a>
					<Avatar className="mt-2 size-8">
						<AvatarFallback className="text-[10px]">{me.initials}</AvatarFallback>
					</Avatar>
				</nav>
				<aside className="flex min-h-0 flex-1 flex-col border-r bg-muted/40 md:w-72 md:flex-none">
					<div className="flex items-center justify-between gap-2 px-4 pt-4 pb-3">
						<h1 className="text-base leading-tight">Projects</h1>
						<Button variant="ghost" size="icon-sm" aria-label="New project">
							<Plus />
						</Button>
					</div>
					<div className="px-3 pb-3">
						<InputGroup className="bg-background">
							<InputGroupAddon>
								<Search />
							</InputGroupAddon>
							<InputGroupInput placeholder="Filter projects" />
						</InputGroup>
					</div>
					<ul className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-2 pb-3 text-sm">
						{allProjects.map((project) => (
							<li key={project.name}>
								<a
									href="#"
									className={cn(
										"flex flex-col gap-1 rounded-md px-2 py-2",
										project === selected ? "bg-background shadow-xs" : "hover:bg-background/60",
									)}
								>
									<span className="flex items-center justify-between gap-2">
										<span className="truncate font-medium">{project.name}</span>
										<span className="shrink-0 text-xs text-muted-foreground">{project.updated}</span>
									</span>
									<span className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
										{project.owner}
										<StatusBadge status={project.status} />
									</span>
								</a>
							</li>
						))}
					</ul>
				</aside>
				<main className="hidden min-w-0 flex-1 overflow-y-auto md:block">
					<article className="mx-auto flex max-w-3xl flex-col gap-8 px-8 py-10">
						<header className="flex flex-col gap-3">
							<span className="text-sm text-muted-foreground">Northwind · plan.md</span>
							<h2 className="text-2xl leading-tight">{selected.name}</h2>
							<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
								<Person name={selected.owner} />
								<StatusBadge status={selected.status} />
								<span className="flex items-center gap-2 tabular-nums">
									<Progress value={selected.progress} className="h-1.5 w-24" />
									{selected.progress}%
								</span>
							</div>
						</header>
						<section className="flex flex-col gap-2">
							<h3 className="text-base leading-tight">Scope</h3>
							<p className="leading-relaxed text-muted-foreground">
								Move Northwind's 3,400 accounts from the 2019 invoice tables to the new billing model, with
								refunds and credits, and no downtime on the first of the month. Out of scope: tax rules and
								the customer portal's payment page.
							</p>
						</section>
						<section className="flex flex-col gap-3">
							<h3 className="text-base leading-tight">Milestones</h3>
							<ol className="flex flex-col divide-y rounded-lg border">
								{milestones.map((milestone) => (
									<li key={milestone.label} className="flex items-center gap-3 px-4 py-3 text-sm">
										{milestone.done ? (
											<Check className="size-4 text-chart-2" />
										) : (
											<Circle className="size-4 text-muted-foreground" />
										)}
										<span className={cn("flex-1", !milestone.done && "text-muted-foreground")}>
											{milestone.label}
										</span>
										<span className="text-muted-foreground tabular-nums">{milestone.date}</span>
									</li>
								))}
							</ol>
						</section>
					</article>
				</main>
				<nav className="grid shrink-0 grid-cols-5 border-t bg-primary text-primary-foreground md:hidden">
					{areas.map(({ label, icon: Icon }) => (
						<a
							key={label}
							href="#"
							className={cn(
								"flex flex-col items-center gap-1 py-2 text-[11px]",
								label === "Projects" ? "font-medium" : "opacity-70",
							)}
						>
							<Icon className="size-5" />
							{label}
						</a>
					))}
				</nav>
			</div>
		</TooltipProvider>
	)
}
