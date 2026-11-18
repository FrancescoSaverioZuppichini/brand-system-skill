import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { people } from "@/demo/content"
import { cn } from "@/lib/utils"

const steps = [
	{
		title: "Connect Tasklist",
		text: "Sign in once with read-only access. Projects, tasks, owners and comments come across; files up to 2 GB per project.",
		command: "keep import tasklist --workspace halden",
	},
	{
		title: "Check the mapping",
		text: "Tasklist's columns become Planning, Shipping or In care. You see every mapping before anything moves, and can change it.",
	},
	{
		title: "Run both for a week",
		text: "For seven days Keep keeps pulling new tasks from Tasklist, so nobody has to stop work on switch day.",
	},
]

const switcher = people[3]

export default function VsSwitch() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="grid gap-12 lg:grid-cols-2">
				<div className="flex flex-col items-start gap-5">
					<span className="text-sm text-muted-foreground">Switching from Tasklist</span>
					<h1 className="text-4xl leading-tight md:text-5xl">Move over in an afternoon, not a quarter</h1>
					<p className="text-lg text-muted-foreground">
						The importer brings your whole workspace across with its history, and nothing in Tasklist changes
						until you decide to close it.
					</p>
					<Button size="lg" className="w-full sm:w-auto">
						Import from Tasklist
					</Button>
				</div>
				<ol className="flex flex-col">
					{steps.map((step, index) => (
						<li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
							{index < steps.length - 1 && <span className="absolute top-7 bottom-0 left-3 w-px bg-border" />}
							<span
								className={cn(
									"flex size-6 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
									index === 0 && "border-primary bg-primary text-primary-foreground",
								)}
							>
								{index + 1}
							</span>
							<div className="flex min-w-0 flex-col gap-2">
								<h2 className="text-lg">{step.title}</h2>
								<p className="text-muted-foreground">{step.text}</p>
								{step.command && (
									<code className="self-start rounded-md bg-muted px-2 py-1 font-mono text-xs break-all">
										$ {step.command}
									</code>
								)}
							</div>
						</li>
					))}
				</ol>
			</div>
			<Card className="gap-5 p-6 md:p-8">
				<blockquote className="text-xl leading-snug md:text-2xl">
					“We moved 40 projects from Tasklist on a Friday afternoon. On Monday nobody asked where anything
					was.”
				</blockquote>
				<div className="flex items-center gap-3 text-sm">
					<Avatar>
						<AvatarFallback>{switcher.initials}</AvatarFallback>
					</Avatar>
					<span className="flex flex-col">
						<span className="font-medium">{switcher.name}</span>
						<span className="text-muted-foreground">{switcher.role}</span>
					</span>
				</div>
			</Card>
		</section>
	)
}
