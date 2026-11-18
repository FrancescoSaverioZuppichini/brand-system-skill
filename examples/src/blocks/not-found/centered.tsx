import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundCentered() {
	return (
		<section className="mx-auto flex min-h-[720px] max-w-xl flex-col items-center justify-center gap-5 px-4 text-center">
			<p className="font-heading text-8xl leading-none text-muted-foreground md:text-9xl">404</p>
			<h1 className="text-3xl md:text-4xl">This page isn't here anymore</h1>
			<p className="text-muted-foreground">
				The link may be old, or the page moved when we renamed Releases. Start from the home page or search for
				it.
			</p>
			<div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
				<Button size="lg">Back to home</Button>
				<Button size="lg" variant="outline">
					<Search /> Search Keep
				</Button>
			</div>
		</section>
	)
}
