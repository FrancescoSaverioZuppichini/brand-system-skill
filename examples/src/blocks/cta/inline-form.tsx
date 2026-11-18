import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaInlineForm() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:px-8 md:py-24">
			<h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">Try Keep on your next project</h2>
			<p className="max-w-xl text-lg text-muted-foreground">
				Enter your work email and we will open a Starter space for you. Free for three projects.
			</p>
			<form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
				<Input type="email" aria-label="Work email" placeholder="ana@halden.studio" className="h-10 flex-1" />
				<Button size="lg">Start free</Button>
			</form>
			<p className="text-sm text-muted-foreground">No card. One email to confirm, nothing after it.</p>
		</section>
	)
}
