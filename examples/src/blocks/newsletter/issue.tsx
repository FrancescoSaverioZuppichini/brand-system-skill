import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Photo } from "@/demo/photo"

const checks = [
	"One essay on keeping a project alive",
	"A real plan page from a team, annotated",
	"What changed in Keep, in five lines",
	"One email a month, nothing in between",
]

export default function NewsletterIssue() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_440px] lg:gap-20">
			<div className="flex flex-col gap-6">
				<h2 className="text-3xl leading-tight md:text-4xl">Get Kept, the monthly letter</h2>
				<ul className="flex flex-col gap-3">
					{checks.map((check) => (
						<li key={check} className="flex items-center gap-3">
							<Check className="size-4 shrink-0 text-primary" /> {check}
						</li>
					))}
				</ul>
				<form className="flex max-w-md flex-col gap-3 sm:flex-row">
					<Input type="email" aria-label="Email" placeholder="ana@halden.studio" />
					<Button>Subscribe</Button>
				</form>
			</div>
			{/* [Agent] A real past issue shrunk to a thumbnail: what subscribers get, so the pitch can stay short. */}
			<Card className="gap-4 p-6 text-sm">
				<div className="flex justify-between text-xs text-muted-foreground">
					<span>Kept · issue 41</span>
					<span>3 Nov 2026</span>
				</div>
				<h3 className="text-xl leading-snug">The yearly review, explained on one page</h3>
				<Photo scene="person" className="aspect-[16/8] rounded-md" />
				<p className="text-muted-foreground">
					Every November, each project in care gets read top to bottom by its owner and one outsider. Three
					questions: is it still needed, is it still safe, would we build it the same way today?
				</p>
				<p className="text-muted-foreground">
					This month Kwame walks through the review of the Keep CLI, now five years old, and the one thing
					they decided to delete.
				</p>
				<span className="font-medium">Also: release 1.4, and a plan page from Halden</span>
			</Card>
		</section>
	)
}
