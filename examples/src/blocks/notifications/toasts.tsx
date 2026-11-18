import { Archive, LifeBuoy, Plus } from "lucide-react"
import { useEffect } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { AppShell } from "@/demo/app-nav"
import { ProjectsTable } from "@/demo/table"

// [Agent] Real Sonner toasts, fired once on mount with fixed ids (StrictMode runs the effect twice) and no timeout so
// the shot catches them. AppShell is the shooter's 900 px viewport, so Sonner's fixed corner is the block's corner;
// below 600 px Sonner itself switches to full width at the bottom.
export default function NotificationsToasts() {
	useEffect(() => {
		toast("Customer portal moved to care", {
			id: "care",
			description: "Next review 18 Nov 2027",
			icon: <LifeBuoy className="size-4" />,
			action: { label: "View", onClick: () => {} },
			duration: Number.POSITIVE_INFINITY,
		})
		toast("Search index archived", {
			id: "archived",
			description: "Read-only for everyone at Halden",
			icon: <Archive className="size-4" />,
			action: { label: "Undo", onClick: () => {} },
			duration: Number.POSITIVE_INFINITY,
		})
	}, [])
	return (
		<>
			<AppShell
				active="Projects"
				crumbs={["Halden", "Projects"]}
				action={
					<Button size="sm">
						<Plus /> New project
					</Button>
				}
			>
				<div className="flex flex-col gap-4 p-4 md:p-6">
					<h1 className="text-xl leading-tight">Projects</h1>
					<ProjectsTable rows={4} />
				</div>
			</AppShell>
			<Toaster expand position="bottom-right" />
		</>
	)
}
