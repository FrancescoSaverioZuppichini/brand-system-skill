import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NewsletterCard() {
	return (
		<section className="bg-muted">
			<div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
				{/* [Agent] The card frame drops on phones: on a 390 px tint the border only eats width, the tint already
				    frames the form. */}
				<Card className="mx-auto max-w-xl gap-6 border-0 bg-transparent px-0 py-0 text-center shadow-none sm:border sm:bg-card sm:px-10 sm:py-10 sm:shadow-sm">
					<div className="flex flex-col gap-3">
						<h2 className="text-3xl leading-tight md:text-4xl">Kept, a letter about software that lasts</h2>
						<p className="text-muted-foreground">
							One essay a month on looking after projects for years, written by the people who build Keep.
							Read by 6,400 makers.
						</p>
					</div>
					<form className="flex flex-col gap-3 sm:flex-row">
						<Input type="email" aria-label="Email" placeholder="ana@halden.studio" className="h-10" />
						<Button size="lg">Subscribe</Button>
					</form>
					<p className="text-sm text-muted-foreground">Monthly, never more. Unsubscribe in one click.</p>
				</Card>
			</div>
		</section>
	)
}
