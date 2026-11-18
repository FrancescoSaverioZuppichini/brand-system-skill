import { ArrowDown, ArrowRight, Laptop, Server, Trash2 } from "lucide-react"
import { Fragment } from "react"
import { cn } from "@/lib/utils"

const stops = [
	{
		icon: Laptop,
		title: "Your browser",
		text: "Everything you type leaves over TLS 1.3. Nothing is kept on the device.",
	},
	{
		icon: Server,
		title: "Our servers in Frankfurt",
		text: "Encrypted at rest, in the EU only. Daily backups, kept for 30 days.",
	},
	{
		icon: Trash2,
		title: "Gone 30 days after you delete",
		text: "From the servers and the backups. We keep no copy.",
	},
]

export default function TrustDataFlow() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Your data</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Where your projects go</h2>
				<p className="text-lg text-muted-foreground">Three places, in order. There is no fourth.</p>
			</div>
			<ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-4">
				{stops.map(({ icon: Icon, title, text }, index) => (
					<Fragment key={title}>
						{index > 0 && (
							<li aria-hidden className="flex justify-center text-muted-foreground">
								<ArrowDown className="size-5 md:hidden" />
								<ArrowRight className="hidden size-5 md:block" />
							</li>
						)}
						<li
							className={cn(
								"flex flex-1 flex-col gap-2 rounded-lg border bg-card p-5 text-card-foreground",
								index === stops.length - 1 && "border-foreground ring-1 ring-foreground",
							)}
						>
							<Icon className="size-5 text-muted-foreground" />
							<h3 className="text-lg">{title}</h3>
							<p className="text-sm text-muted-foreground">{text}</p>
						</li>
					</Fragment>
				))}
			</ol>
			<p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
				No third-party analytics run inside your projects. Our three sub-processors (hosting, email, payments)
				are listed on the security page.
			</p>
		</section>
	)
}
