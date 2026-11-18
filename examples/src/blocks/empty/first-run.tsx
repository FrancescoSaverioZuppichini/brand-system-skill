import { Import, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import { Skeleton } from "@/components/ui/skeleton"
import { AppShell } from "@/demo/app-nav"
import type { Status } from "@/demo/content"
import { StatusBadge } from "@/demo/table"

const preview: Status[] = ["Planning", "Shipping", "In care"]

// [Agent] The preview is the real list with bars where names will go: it shows the shape of what is coming (owner,
// status, progress) without any project a new team could mistake for its own.
function Preview() {
	return (
		<div
			aria-hidden
			className="flex w-full max-w-md flex-col rounded-lg border bg-card text-left text-xs opacity-70"
		>
			<div className="grid grid-cols-[1fr_5rem_6rem] gap-3 border-b px-4 py-2.5 text-muted-foreground">
				<span>Project</span>
				<span>Owner</span>
				<span>Status</span>
			</div>
			{preview.map((status, index) => (
				<div
					key={status}
					className="grid grid-cols-[1fr_5rem_6rem] items-center gap-3 border-b px-4 py-3 last:border-0"
				>
					<Skeleton className="h-2.5 animate-none" style={{ width: `${80 - index * 15}%` }} />
					<Skeleton className="h-2.5 w-12 animate-none" />
					<StatusBadge status={status} />
				</div>
			))}
		</div>
	)
}

export default function EmptyFirstRun() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
			<Empty className="min-h-full">
				<EmptyMedia className="w-full">
					<Preview />
				</EmptyMedia>
				<EmptyHeader>
					<EmptyTitle>
						<h1 className="text-xl leading-tight">Plan your first project</h1>
					</EmptyTitle>
					<EmptyDescription>
						A project is one page of scope, owners and dates. Ship it in small releases, then keep it in care.
						Every project your team starts is listed here.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent className="sm:max-w-md">
					<div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
						<Button>
							<Plus /> Start a project
						</Button>
						<Button variant="outline">
							<Import /> Import from Linear
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		</AppShell>
	)
}
