import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterInline() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
			<div className="flex flex-col gap-6 border-y py-8 md:flex-row md:items-center md:justify-between md:gap-12">
				<div className="flex flex-col gap-1">
					<h2 className="text-xl leading-tight">Kept, a monthly letter</h2>
					<p className="text-muted-foreground">
						What we shipped, what we looked after and what we retired. First Tuesday of the month.
					</p>
				</div>
				<form className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:shrink-0">
					<Input type="email" aria-label="Email" placeholder="ana@halden.studio" className="md:w-72" />
					<Button>Subscribe</Button>
				</form>
			</div>
		</section>
	)
}
