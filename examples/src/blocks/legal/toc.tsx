import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const sections = [
	{
		title: "Who we are",
		text: "Keep is made by Keep Software GmbH in Berlin, Germany. For your account details we decide how data is used (the controller); for what your team writes in Keep we only process it on your behalf.",
	},
	{
		title: "What we collect",
		text: "Your name, email and password hash; your team's projects, releases and notes; and basic usage logs (pages opened, errors) that we keep for 30 days. We don't use advertising trackers.",
	},
	{
		title: "Why we use it",
		text: "To run the service, send the emails you asked for (reminders, review dates, receipts), keep accounts secure and fix bugs. We never sell data or use it to train AI models.",
	},
	{
		title: "Where it is stored",
		text: "On servers in Frankfurt, Germany, encrypted at rest and in transit. Backups are taken daily and kept for 30 days.",
	},
	{
		title: "Who we share it with",
		text: "Only the processors that run parts of Keep: hosting, email delivery and payments. Each has a data processing agreement with us, and the full list is on our subprocessors page.",
	},
	{
		title: "How long we keep it",
		text: "As long as your account is open. When you delete it, we erase your data within 30 days, and the last backups that held it expire 30 days after that.",
	},
	{
		title: "Your rights",
		text: "You can see, correct, export or delete your data at any time from Settings, or ask us to. You can also complain to your local data protection authority.",
	},
	{
		title: "Contact",
		text: "Write to privacy@keep.app. A person reads every message and answers within five working days.",
	},
]

const current = 3

export default function LegalToc() {
	return (
		<section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[14rem_1fr] lg:gap-16">
			<nav className="hidden flex-col gap-1 text-sm lg:sticky lg:top-8 lg:flex lg:self-start">
				<span className="pb-2 text-xs font-medium text-muted-foreground">Contents</span>
				{sections.map((section, index) => (
					<a
						key={section.title}
						href={`#section-${index + 1}`}
						className={cn(
							"rounded-md px-2 py-1.5",
							index === current ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
						)}
					>
						{index + 1}. {section.title}
					</a>
				))}
			</nav>
			<article className="flex max-w-2xl flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl md:text-5xl">Privacy policy</h1>
					<span className="text-sm text-muted-foreground">Last updated 4 November 2026</span>
				</div>
				<Select defaultValue={String(current)}>
					<SelectTrigger className="w-full lg:hidden" aria-label="Contents">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{sections.map((section, index) => (
							<SelectItem key={section.title} value={String(index)}>
								{index + 1}. {section.title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{sections.map((section, index) => (
					<div key={section.title} id={`section-${index + 1}`} className="flex flex-col gap-3">
						<h2 className="text-xl md:text-2xl">
							{index + 1}. {section.title}
						</h2>
						<p className="leading-relaxed text-muted-foreground">{section.text}</p>
					</div>
				))}
			</article>
		</section>
	)
}
