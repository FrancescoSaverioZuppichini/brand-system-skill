import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppWindow } from "@/demo/screen"

export default function WaitlistSplit() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[5fr_7fr]">
			<div className="flex flex-col items-start gap-6">
				<Badge variant="outline">Private beta · spring 2027</Badge>
				<h1 className="text-4xl leading-tight md:text-5xl">Keep, on your own servers</h1>
				<p className="text-lg text-muted-foreground">
					The app you see here, as one Docker image on your Postgres. Plans, releases and care, with no data
					leaving your network.
				</p>
				<form className="flex w-full flex-col gap-3 sm:flex-row">
					<Input type="email" placeholder="you@company.com" aria-label="Work email" className="h-10" />
					<Button size="lg" type="submit">
						Join the waitlist
					</Button>
				</form>
				<p className="text-sm text-muted-foreground">We invite 50 teams a week, in the order they joined.</p>
			</div>
			<AppWindow />
		</section>
	)
}
