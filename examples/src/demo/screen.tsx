import { FolderKanban, LifeBuoy, Rocket, Search, Settings } from "lucide-react"
import { AreaChart } from "@/demo/chart"
import { stats } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { ProjectsTable } from "@/demo/table"
import { cn } from "@/lib/utils"

const nav = [
	{ label: "Projects", icon: FolderKanban },
	{ label: "Releases", icon: Rocket },
	{ label: "In care", icon: LifeBuoy },
	{ label: "Settings", icon: Settings },
]

// [Agent] The product screenshot as a live component: Keep's projects screen (sidebar, KPIs with deltas, the
// retention chart and the projects table). Below sm it drops the sidebar so a phone gets one panel, not a shrunk desktop.
export function AppWindow({ className }: { className?: string }) {
	return (
		<div
			className={cn("overflow-hidden rounded-xl border bg-card text-card-foreground shadow-lg", className)}
		>
			<div className="flex items-center gap-3 border-b px-4 py-2.5 text-xs text-muted-foreground">
				<span className="flex gap-1.5">
					<span className="size-2.5 rounded-full bg-border" />
					<span className="size-2.5 rounded-full bg-border" />
					<span className="size-2.5 rounded-full bg-border" />
				</span>
				<span className="font-mono">keep.app/projects</span>
			</div>
			<div className="flex">
				<aside className="hidden w-44 shrink-0 flex-col gap-1 border-r p-3 text-xs sm:flex">
					<Logo className="mb-3 px-2 text-sm" />
					{nav.map(({ label, icon: Icon }, index) => (
						<span
							key={label}
							className={cn(
								"flex items-center gap-2 rounded-md px-2 py-1.5",
								index === 0 ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
							)}
						>
							<Icon className="size-3.5" />
							{label}
						</span>
					))}
				</aside>
				<div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
					<div className="flex items-center justify-between gap-2">
						<span className="text-sm font-medium">Projects</span>
						<span className="flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs text-muted-foreground">
							<Search className="size-3" /> Search
						</span>
					</div>
					<div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
						{stats.slice(0, 3).map((item, index) => (
							<div key={item.label} className={cn("rounded-lg border p-3", index === 2 && "hidden lg:block")}>
								<div className="text-[11px] text-muted-foreground">{item.label}</div>
								<div className="mt-1 text-lg font-semibold tabular-nums">{item.value}</div>
								<div className="text-[11px] text-muted-foreground">{item.delta}</div>
							</div>
						))}
					</div>
					<AreaChart className="h-28" />
					<ProjectsTable rows={4} />
				</div>
			</div>
		</div>
	)
}
