import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { plans, projects } from "@/demo/content"
import { cn } from "@/lib/utils"

// [Agent] Halden's own Keep workspace, the signed-in side of the story. Every app block (shell, dashboard, lists,
// detail, forms, settings, billing) reads these, so a project, a release or the seat count matches on every screen.
export const workspace = {
	name: "Halden",
	plan: plans[1].name,
	price: plans[1].price,
	members: 24,
	seats: 25,
	renews: "1 Dec 2026",
}

export const allProjects: typeof projects = [
	...projects,
	{ name: "Care dashboard", owner: "Leo Marchetti", status: "Shipping", progress: 81, updated: "40m ago" },
	{ name: "Client reports", owner: "Priya Shah", status: "Shipping", progress: 63, updated: "5h ago" },
	{ name: "Invoices v2", owner: "Jonas Lind", status: "Planning", progress: 12, updated: "1d ago" },
	{ name: "Data export", owner: "Tomás Berg", status: "Planning", progress: 8, updated: "5d ago" },
	{ name: "Design system", owner: "Leo Marchetti", status: "In care", progress: 100, updated: "1w ago" },
	{ name: "Status page", owner: "Ana Ruiz", status: "In care", progress: 100, updated: "1w ago" },
	{ name: "Docs site", owner: "Mei Okafor", status: "In care", progress: 100, updated: "3w ago" },
]

export type ReleaseState = "Released" | "In review" | "Scheduled" | "Blocked"

// [Agent] Every release has the same five-check list as the phone checklist, so `checks` is "n of 5".
export const releases: {
	version: string
	project: string
	owner: string
	state: ReleaseState
	checks: number
	day: string
	time: string
}[] = [
	{
		version: "1.4",
		project: "Billing rewrite",
		owner: "Ana Ruiz",
		state: "In review",
		checks: 3,
		day: "Today",
		time: "10:42",
	},
	{
		version: "2.8.1",
		project: "Customer portal",
		owner: "Tomás Berg",
		state: "Released",
		checks: 5,
		day: "Today",
		time: "09:15",
	},
	{
		version: "0.9",
		project: "Mobile app",
		owner: "Jonas Lind",
		state: "Blocked",
		checks: 2,
		day: "Today",
		time: "08:30",
	},
	{
		version: "3.1",
		project: "Client reports",
		owner: "Priya Shah",
		state: "Released",
		checks: 5,
		day: "Yesterday",
		time: "17:20",
	},
	{
		version: "1.12",
		project: "Design system",
		owner: "Leo Marchetti",
		state: "Released",
		checks: 5,
		day: "Yesterday",
		time: "14:05",
	},
	{
		version: "2.0",
		project: "Care dashboard",
		owner: "Leo Marchetti",
		state: "Scheduled",
		checks: 4,
		day: "Yesterday",
		time: "11:30",
	},
	{
		version: "1.0",
		project: "Onboarding v3",
		owner: "Mei Okafor",
		state: "Scheduled",
		checks: 1,
		day: "Mon 16 Nov",
		time: "16:40",
	},
	{
		version: "4.2",
		project: "Status page",
		owner: "Ana Ruiz",
		state: "Released",
		checks: 5,
		day: "Mon 16 Nov",
		time: "12:10",
	},
	{
		version: "2.3",
		project: "Docs site",
		owner: "Mei Okafor",
		state: "Released",
		checks: 5,
		day: "Mon 16 Nov",
		time: "09:55",
	},
]

const dots: Record<ReleaseState, string> = {
	Released: "bg-chart-2",
	"In review": "bg-chart-1",
	Scheduled: "bg-chart-3",
	Blocked: "bg-destructive",
}

export function ReleaseBadge({ state }: { state: ReleaseState }) {
	return (
		<Badge variant="outline" className="gap-1.5 font-normal">
			<span className={cn("size-1.5 rounded-full", dots[state])} />
			{state}
		</Badge>
	)
}

export function Face({ name, className }: { name: string; className?: string }) {
	const initials = name
		.split(" ")
		.map((part) => part[0])
		.join("")
	return (
		<Avatar className={cn("size-8", className)} title={name}>
			<AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
		</Avatar>
	)
}
