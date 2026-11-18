import { CheckCircle2, ChevronRight, Circle, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AppShell, me } from "@/demo/app-nav"
import { Photo } from "@/demo/photo"
import { releases, workspace } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const shipped = releases[1]

const tasks = [
	{ title: "Create your first project", text: "Billing rewrite, owned by Ana Ruiz", done: true },
	{ title: "Invite your team", text: `${workspace.members} of ${workspace.seats} seats filled`, done: true },
	{ title: "Ship a release", text: `${shipped.project} ${shipped.version}, released today`, done: true },
	{ title: "Connect GitHub", text: "Link pull requests to releases and tick checks from CI", done: false },
	{
		title: "Move a project into care",
		text: "Give a shipped project an owner and a review date",
		done: false,
	},
]

const done = tasks.filter((task) => task.done).length
const next = tasks.findIndex((task) => !task.done)

export default function OnboardingChecklist() {
	return (
		<AppShell active="Overview" crumbs={[workspace.name, "Get started"]} className="h-auto md:h-[900px]">
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl">Welcome to Keep, {me.name.split(" ")[0]}</h1>
					<p className="text-sm text-muted-foreground">
						Five steps to a workspace your team can run on its own.
					</p>
				</div>
				<div className="grid items-start gap-6 lg:grid-cols-[1fr_20rem]">
					<Card className="gap-0 py-0">
						<div className="flex flex-col gap-3 border-b p-5">
							<div className="flex items-center justify-between gap-4 text-sm">
								<span className="font-medium">Set up {workspace.name}</span>
								<span className="text-muted-foreground">
									{done} of {tasks.length} done
								</span>
							</div>
							<Progress value={(done / tasks.length) * 100} />
						</div>
						<ul className="flex flex-col divide-y">
							{tasks.map((task, index) => (
								<li key={task.title} className="flex items-center gap-3 px-5 py-4">
									{task.done ? (
										<CheckCircle2 className="size-5 shrink-0 text-primary" />
									) : (
										<Circle className="size-5 shrink-0 text-muted-foreground" />
									)}
									<span className="flex min-w-0 flex-1 flex-col gap-0.5">
										<span
											className={cn("text-sm font-medium", task.done && "text-muted-foreground line-through")}
										>
											{task.title}
										</span>
										<span className="text-xs text-muted-foreground">{task.text}</span>
									</span>
									{index === next ? (
										<Button size="sm">Connect</Button>
									) : (
										!task.done && <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
									)}
								</li>
							))}
						</ul>
						<div className="flex justify-end border-t px-5 py-3">
							<Button variant="ghost" size="sm" className="text-muted-foreground">
								Hide checklist
							</Button>
						</div>
					</Card>
					<Card className="gap-4 overflow-hidden pt-0">
						<div className="relative">
							<Photo scene="person" className="aspect-video" />
							<span className="absolute inset-0 flex items-center justify-center">
								<span className="flex size-12 items-center justify-center rounded-full bg-background/90 shadow-sm">
									<Play className="size-5 fill-current" />
								</span>
							</span>
							<span className="absolute right-2 bottom-2 rounded bg-background/90 px-1.5 py-0.5 text-xs tabular-nums">
								4:12
							</span>
						</div>
						<div className="flex flex-col gap-1 px-5">
							<span className="font-medium">Keep in four minutes</span>
							<span className="text-sm text-muted-foreground">
								How plans, releases and care fit together, from one project's first day to its yearly review.
							</span>
						</div>
					</Card>
				</div>
			</div>
		</AppShell>
	)
}
