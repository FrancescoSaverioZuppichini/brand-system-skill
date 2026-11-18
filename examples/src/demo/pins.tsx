import { FolderKanban, LifeBuoy, Rocket, Search, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Kbd } from "@/components/ui/kbd"
import { AreaChart } from "@/demo/chart"
import { stats } from "@/demo/content"
import { Frame } from "@/demo/frame"
import { Logo } from "@/demo/logo"
import { ProjectsTable } from "@/demo/table"
import { cn } from "@/lib/utils"

// [Agent] What each pin on the projects screen points at, in pin order: 1–2 sit on the left of the screen, 3–4 on the
// right, 5 in the sidebar (which phones drop, so blocks that must work at 390 show four at most).
export const notes = [
	{ title: "Numbers with context", text: "Each figure shows its change since last quarter." },
	{ title: "One row per project", text: "Owner, status and progress for every project." },
	{ title: "Search everything", text: "Plans, releases and decisions behind ⌘K." },
	{ title: "Projects kept alive", text: "Projects in care per quarter: 1,284 today." },
	{ title: "In care", text: "Shipped projects get an owner and a review date." },
]

const nav = [
	{ label: "Projects", icon: FolderKanban },
	{ label: "Releases", icon: Rocket },
	{ label: "In care", icon: LifeBuoy },
	{ label: "Settings", icon: Settings },
]

export function Pin({ n, className }: { n: number; className?: string }) {
	return (
		<span
			className={cn(
				"flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs text-primary-foreground",
				className,
			)}
		>
			{n}
		</span>
	)
}

// [Agent] The projects screen rebuilt with each pin anchored to the part it explains instead of % offsets over a
// picture, so a pin stays on its part at every width. Container queries (not the viewport) fold the KPI row, because
// the screen is narrow inside a split even on a 1440 window.
export function PinnedScreen({ pins, className }: { pins: number; className?: string }) {
	const pin = (n: number, place: string) =>
		n <= pins && <Pin n={n} className={cn("absolute z-10 ring-4 ring-card", place)} />
	return (
		<Frame url="keep.app/projects" className={cn("shadow-lg", className)}>
			<div className="flex">
				<aside className="hidden w-40 shrink-0 flex-col gap-1 border-r p-3 text-xs sm:flex">
					<Logo className="mb-3 px-2 text-sm" />
					{nav.map(({ label, icon: Icon }, index) => (
						<span
							key={label}
							className={cn(
								"relative flex items-center gap-2 rounded-md px-2 py-1.5",
								index === 0 ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
							)}
						>
							<Icon className="size-3.5" />
							{label}
							{label === "In care" && pin(5, "top-1/2 -right-1 -translate-y-1/2")}
						</span>
					))}
				</aside>
				<div className="@container flex min-w-0 flex-1 flex-col gap-4 p-4">
					<div className="flex items-center justify-between gap-2">
						<span className="flex items-center gap-2 text-sm font-medium">
							Projects
							<Badge variant="secondary" className="font-normal">
								Sample data
							</Badge>
						</span>
						<span className="relative flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs text-muted-foreground">
							<Search className="size-3" /> Search
							<Kbd className="hidden h-4 text-[10px] @md:inline-flex">⌘K</Kbd>
							{pin(3, "-top-3 -left-3")}
						</span>
					</div>
					<div className="relative grid grid-cols-2 gap-3 @xl:grid-cols-3">
						{stats.slice(0, 3).map((item, index) => (
							<div
								key={item.label}
								className={cn("rounded-lg border p-3", index === 2 && "hidden @xl:block")}
							>
								<div className="text-[11px] text-muted-foreground">{item.label}</div>
								<div className="mt-1 text-lg font-semibold tabular-nums">{item.value}</div>
								<div className="text-[11px] text-muted-foreground">{item.delta}</div>
							</div>
						))}
						{pin(1, "-top-3 -left-3")}
					</div>
					<div className="relative">
						<AreaChart className="h-28" />
						{pin(4, "-top-3 -right-1")}
					</div>
					<div className="relative">
						<ProjectsTable rows={4} />
						{pin(2, "-top-3 -left-3")}
					</div>
				</div>
			</div>
		</Frame>
	)
}
