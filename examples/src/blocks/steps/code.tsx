import { Code, session } from "@/demo/device"

const steps = [
	{
		title: "Install the CLI",
		text: "One global package. It signs you in through the browser, so there is no token to paste.",
		file: "terminal",
		lines: [
			session[0],
			{ text: "added 1 package in 2s", tone: "output" as const },
			{ text: "keep login", tone: "prompt" as const },
			{ text: "✓ Signed in as ana@halden.studio", tone: "output" as const },
		],
	},
	{
		title: "Write the plan",
		text: "keep init writes plan.md into your repo: scope, owner and date, reviewed in a pull request like code.",
		file: "plan.md",
		lines: [
			{ text: "# Billing rewrite" },
			{ text: "owner: ana@halden.studio" },
			{ text: "ships: 2026-03-12" },
			{ text: "" },
			{ text: "- Move invoices to the new ledger" },
			{ text: "- Keep old invoice links working" },
		],
	},
	{
		title: "Ship and hand over",
		text: "keep ship runs the release checklist. When every check passes, it tags the release and sets a care date.",
		file: "terminal",
		lines: session.slice(3),
	},
]

export default function StepsCode() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm text-muted-foreground">Quickstart</span>
				<h2 className="text-3xl leading-tight md:text-5xl">From install to first release</h2>
				<p className="text-lg text-muted-foreground">Three commands. Everything else lives in your repo.</p>
			</div>
			<ol className="flex flex-col gap-12">
				{steps.map((step, index) => (
					<li key={step.title} className="grid gap-5 md:grid-cols-[2fr_3fr] md:gap-12">
						<div className="flex flex-col gap-3">
							<span className="flex size-7 items-center justify-center rounded-full border font-mono text-xs">
								{index + 1}
							</span>
							<h3 className="text-xl">{step.title}</h3>
							<p className="text-muted-foreground">{step.text}</p>
						</div>
						<Code title={step.file} lines={step.lines} className="min-w-0 text-sm" />
					</li>
				))}
			</ol>
		</section>
	)
}
