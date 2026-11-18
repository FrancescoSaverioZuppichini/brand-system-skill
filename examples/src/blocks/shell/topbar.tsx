import { FolderKanban, LayoutDashboard, LifeBuoy, Plus, Rocket, Search, Users } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { me, RowMenu } from "@/demo/app-nav"
import { Logo } from "@/demo/logo"
import { Person } from "@/demo/table"
import { ReleaseBadge, releases } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const links = [
	{ label: "Overview", icon: LayoutDashboard },
	{ label: "Projects", icon: FolderKanban },
	{ label: "Releases", icon: Rocket },
	{ label: "Care", icon: LifeBuoy },
	{ label: "Members", icon: Users },
]

const active = "Releases"

// [Agent] Five areas fit a top bar on desktop and a bottom tab bar on a phone, so there is no ≡ to hunt for.
export default function ShellTopbar() {
	return (
		<div className="flex h-[900px] flex-col overflow-hidden bg-background text-foreground">
			<header className="flex h-14 shrink-0 items-center gap-8 border-b px-4 md:px-8">
				<Logo className="text-base" />
				<nav className="hidden h-full items-stretch gap-6 text-sm md:flex">
					{links.map(({ label }) => (
						<a
							key={label}
							href="#"
							className={cn(
								"flex items-center border-b-2",
								label === active
									? "border-primary font-medium text-foreground"
									: "border-transparent text-muted-foreground hover:text-foreground",
							)}
						>
							{label}
						</a>
					))}
				</nav>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" size="icon-sm" aria-label="Search">
						<Search />
					</Button>
					<Avatar className="size-7">
						<AvatarFallback className="text-[10px]">{me.initials}</AvatarFallback>
					</Avatar>
				</div>
			</header>
			<main className="min-h-0 flex-1 overflow-y-auto">
				<div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 md:px-8 md:py-10">
					<div className="flex items-center justify-between gap-4">
						<div>
							<h1 className="text-xl leading-tight">Releases</h1>
							<p className="text-sm text-muted-foreground">This week · {releases.length} releases</p>
						</div>
						<Button size="sm">
							<Plus /> New release
						</Button>
					</div>
					<Table>
						<TableHeader className="max-md:hidden">
							<TableRow>
								<TableHead>Release</TableHead>
								<TableHead>Owner</TableHead>
								<TableHead>Checks</TableHead>
								<TableHead>State</TableHead>
								<TableHead className="text-right">When</TableHead>
								<TableHead className="w-10" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{releases.map((release) => (
								<TableRow key={release.project}>
									<TableCell>
										<div className="font-medium">
											{release.project} {release.version}
										</div>
										<div className="text-xs text-muted-foreground md:hidden">
											{release.checks} of 5 checks · {release.day}
										</div>
									</TableCell>
									<TableCell className="max-md:hidden">
										<Person name={release.owner} />
									</TableCell>
									<TableCell className="max-md:hidden">
										<span className="flex items-center gap-2 text-muted-foreground tabular-nums">
											<Progress value={release.checks * 20} className="h-1.5 w-16" />
											{release.checks}/5
										</span>
									</TableCell>
									<TableCell className="max-md:text-right">
										<ReleaseBadge state={release.state} />
									</TableCell>
									<TableCell className="text-right text-muted-foreground max-md:hidden">
										{release.day}, {release.time}
									</TableCell>
									<TableCell className="max-md:hidden">
										<RowMenu items={["Open", "Copy link", "Move to next week"]} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</main>
			<nav className="grid shrink-0 grid-cols-5 border-t bg-background md:hidden">
				{links.map(({ label, icon: Icon }) => (
					<a
						key={label}
						href="#"
						className={cn(
							"flex flex-col items-center gap-1 py-2 text-[11px]",
							label === active ? "font-medium text-foreground" : "text-muted-foreground",
						)}
					>
						<Icon className="size-5" />
						{label}
					</a>
				))}
			</nav>
		</div>
	)
}
