import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Photo } from "@/demo/photo"

const values = [
	{
		title: "We ship less, and finish it",
		text: "Four releases a year per team, each one dated and reviewed. Nobody works a weekend to hit one.",
	},
	{
		title: "Everything is written down",
		text: "Decisions live in the plan, not in calls, so you can do your best work from any time zone in Europe.",
	},
	{
		title: "We look after what we ship",
		text: "Every engineer owns a project in care and runs its yearly review, including the boring ones.",
	},
]

const teams = [
	{
		team: "Engineering",
		roles: [
			{ title: "Senior product engineer", where: "Remote, EU", type: "Full-time" },
			{ title: "Infrastructure engineer", where: "Berlin or remote", type: "Full-time" },
		],
	},
	{
		team: "Design",
		roles: [{ title: "Product designer", where: "Remote, EU", type: "Full-time" }],
	},
	{
		team: "Customers",
		roles: [
			{ title: "Support lead", where: "Lisbon", type: "Full-time" },
			{ title: "Onboarding specialist", where: "Remote, EU", type: "Part-time" },
		],
	},
]

export default function CareersRoles() {
	return (
		<section>
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
				<div className="flex flex-col items-start gap-5">
					<span className="text-sm text-muted-foreground">Careers at Keep</span>
					<h1 className="text-4xl leading-tight md:text-5xl">Help small teams keep what they make</h1>
					<p className="text-lg text-muted-foreground">
						We are 23 people in Berlin, Lisbon and across Europe, building the tool we wanted at our last jobs.
						Calm hours, written plans, and work that is still running years later.
					</p>
					<Button size="lg" className="w-full sm:w-auto">
						See 5 open roles
					</Button>
				</div>
				<Photo scene="place" label="The Berlin studio" className="aspect-[4/3] rounded-lg" />
			</div>
			<div className="bg-muted">
				<div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-16 md:px-8 md:py-20">
					<div className="flex flex-col gap-8">
						<h2 className="text-2xl md:text-3xl">How we work</h2>
						<div className="grid gap-8 md:grid-cols-3">
							{values.map((value) => (
								<div key={value.title} className="flex flex-col gap-2">
									<h3 className="text-lg">{value.title}</h3>
									<p className="text-muted-foreground">{value.text}</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h2 className="text-2xl md:text-3xl">Open roles</h2>
						{teams.map(({ team, roles }) => (
							<div key={team} className="flex flex-col">
								<h3 className="pb-2 text-sm text-muted-foreground">{team}</h3>
								{roles.map((role) => (
									<a
										key={role.title}
										href="#role"
										className="grid grid-cols-[1fr_auto] items-center gap-x-4 border-t py-4 md:grid-cols-[1fr_12rem_auto]"
									>
										<span className="flex flex-col gap-0.5">
											<span className="font-medium">{role.title}</span>
											<span className="text-sm text-muted-foreground">
												<span className="md:hidden">{role.where} · </span>
												{role.type}
											</span>
										</span>
										<span className="hidden text-sm text-muted-foreground md:block">{role.where}</span>
										<span className="flex items-center gap-1 text-sm font-medium">
											<span className="hidden sm:inline">View role</span>
											<ChevronRight className="size-4" />
										</span>
									</a>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
