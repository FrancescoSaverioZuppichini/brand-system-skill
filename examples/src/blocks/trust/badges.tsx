import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const certificates = [
	{ mark: "SOC 2", name: "SOC 2 Type II", line: "Audited every year by an outside firm. Report under NDA." },
	{ mark: "ISO", name: "ISO 27001", line: "Certified since 2025, covering the whole company." },
	{ mark: "GDPR", name: "GDPR and DPA", line: "A signed DPA with every customer. Data stays in the EU." },
	{
		mark: "27701",
		name: "ISO 27701",
		line: "Privacy management audit under way.",
		pending: "Expected Q2 2027",
	},
]

export default function TrustBadges() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
			<div className="flex flex-col items-start gap-4">
				<span className="text-sm text-muted-foreground">Security</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Audited, so your clients don't have to ask</h2>
				<p className="text-lg text-muted-foreground">
					Keep holds client work for 312 teams. We are checked from the outside every year, and we publish
					what we find.
				</p>
				<a href="/security" className="flex items-center gap-1.5 font-medium hover:underline">
					Read the security page <ArrowRight className="size-4" />
				</a>
			</div>
			<div className="grid grid-cols-2 gap-3 md:gap-4">
				{certificates.map((item) => (
					<Card key={item.name} className="gap-3 p-4 md:p-5">
						<span className="flex size-12 items-center justify-center rounded-full border-2 font-mono text-[10px] font-medium">
							{item.mark}
						</span>
						<h3 className="text-base leading-snug">{item.name}</h3>
						<p className="text-sm text-muted-foreground">{item.line}</p>
						{item.pending && (
							<Badge variant="outline" className="font-normal">
								{item.pending}
							</Badge>
						)}
					</Card>
				))}
			</div>
		</section>
	)
}
