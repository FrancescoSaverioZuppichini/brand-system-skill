import { DatabaseBackup, FileDown, LifeBuoy, MapPin, ShieldCheck, Undo2 } from "lucide-react"

// [Agent] The one place an icon grid is allowed: a secondary list of small facts, each icon naming its fact.
const facts = [
	{ icon: MapPin, title: "Stored in the EU", text: "Frankfurt, encrypted at rest and in transit." },
	{
		icon: DatabaseBackup,
		title: "Daily backups",
		text: "Kept for 30 days and restored on a test machine every month.",
	},
	{
		icon: FileDown,
		title: "Markdown export",
		text: "Every plan, release and decision, whenever you want it.",
	},
	{ icon: Undo2, title: "Cancel anytime", text: "Monthly or yearly, with no notice period." },
	{ icon: ShieldCheck, title: "Two-factor sign-in", text: "With an authenticator app or a security key." },
	{
		icon: LifeBuoy,
		title: "Support from the team",
		text: "Answered by the people who build Keep, within one working day.",
	},
]

export default function FeaturesIconGrid() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">On every plan</span>
				<h2 className="text-3xl leading-tight md:text-4xl">The small print, in plain words</h2>
			</div>
			<div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
				{facts.map(({ icon: Icon, title, text }) => (
					<div key={title} className="flex flex-col gap-3">
						<span className="flex size-9 items-center justify-center rounded-md border">
							<Icon className="size-4" />
						</span>
						<h3 className="text-base">{title}</h3>
						<p className="text-sm text-muted-foreground">{text}</p>
					</div>
				))}
			</div>
		</section>
	)
}
