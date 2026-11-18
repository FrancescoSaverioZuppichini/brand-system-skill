import { Check } from "lucide-react"

// [Agent] Each plain-words line points at the numbered section that says it in full, so the summary can never
// promise more than the text does.
const sections = [
	{
		summary: "Your data stays in the EU, in Frankfurt, encrypted.",
		title: "Where your data is stored",
		text: "Keep runs on servers in Frankfurt, Germany. Data is encrypted at rest and in transit, and nothing is copied to servers outside the European Union, including backups and logs.",
	},
	{
		summary: "We never sell it, and we use no ad trackers.",
		title: "What we don't do with it",
		text: "We don't sell or rent personal data, we don't use advertising trackers, and we share it only with the processors that run parts of Keep: hosting, email delivery and payments.",
	},
	{
		summary: "We don't train AI models on your projects.",
		title: "AI and your projects",
		text: "The plans, releases and notes your team writes are never used to train or improve machine learning models, ours or anyone else's.",
	},
	{
		summary: "You can export everything as Markdown, any time.",
		title: "Export",
		text: "Settings → Export gives you every project, release and decision as Markdown files in one archive, on every plan including Starter.",
	},
	{
		summary: "Delete your account and it's gone within 60 days.",
		title: "Deletion",
		text: "We erase your data within 30 days of deleting your account. Daily backups are kept for 30 days, so the last copy expires at most 60 days after you delete.",
	},
]

export default function LegalSummary() {
	return (
		<section className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl md:text-5xl">Privacy policy</h1>
				<span className="text-sm text-muted-foreground">Last updated 4 November 2026</span>
			</div>
			<div className="flex flex-col gap-4 rounded-lg bg-muted p-5 md:p-6">
				<h2 className="text-lg">In plain words</h2>
				<ul className="flex flex-col gap-3">
					{sections.map((section, index) => (
						<li key={section.title} className="flex gap-3">
							<Check className="mt-1 size-4 shrink-0 text-primary" />
							<span>
								{section.summary}{" "}
								<a
									href={`#section-${index + 1}`}
									className="text-sm text-muted-foreground underline underline-offset-4"
								>
									§{index + 1}
								</a>
							</span>
						</li>
					))}
				</ul>
			</div>
			{sections.map((section, index) => (
				<div key={section.title} id={`section-${index + 1}`} className="flex flex-col gap-3">
					<h2 className="text-xl md:text-2xl">
						{index + 1}. {section.title}
					</h2>
					<p className="leading-relaxed text-muted-foreground">{section.text}</p>
				</div>
			))}
		</section>
	)
}
