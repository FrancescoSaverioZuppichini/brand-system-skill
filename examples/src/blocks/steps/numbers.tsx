const steps = [
	{
		title: "A call with us",
		text: "Thirty minutes with someone who builds Keep. Bring a project you are planning, not a slide deck.",
	},
	{
		title: "We import your work",
		text: "We bring over your projects, owners and open issues from Linear, Jira or a spreadsheet.",
	},
	{
		title: "A review at day 30",
		text: "We look at what you planned and shipped, and set your first care dates together.",
	},
]

export default function StepsNumbers() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm text-muted-foreground">Getting started</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Set up with you, not left to you</h2>
				<p className="text-lg text-muted-foreground">Every Team and Studio plan starts the same way.</p>
			</div>
			<ol className="grid gap-12 md:grid-cols-3 md:gap-10">
				{steps.map((step, index) => (
					<li key={step.title} className="flex flex-col gap-4">
						<span className="font-heading text-6xl leading-none tabular-nums md:text-7xl">
							{String(index + 1).padStart(2, "0")}
						</span>
						<h3 className="border-t pt-5 text-xl">{step.title}</h3>
						<p className="text-muted-foreground">{step.text}</p>
					</li>
				))}
			</ol>
		</section>
	)
}
