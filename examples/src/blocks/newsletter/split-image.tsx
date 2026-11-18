import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Photo } from "@/demo/photo"

export default function NewsletterSplitImage() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
			<Photo
				scene="place"
				label="The Lisbon studio, Thursday clinic"
				className="aspect-[16/10] rounded-xl md:aspect-[4/3]"
			/>
			<div className="flex flex-col gap-5">
				<p className="text-sm text-muted-foreground">Kept · issue 42 out 1 December</p>
				<h2 className="text-3xl leading-tight md:text-4xl">
					Letters from the studio where projects get looked after
				</h2>
				<p className="text-muted-foreground">
					Each month one team shows us a project they have kept for years: the plan page, the yearly review,
					the things they chose not to build.
				</p>
				<form className="flex flex-col gap-3">
					<Label htmlFor="split-email">Email</Label>
					<Input id="split-email" type="email" placeholder="ana@halden.studio" />
					<Button size="lg" className="sm:w-fit">
						Get the next letter
					</Button>
				</form>
				<p className="text-sm text-muted-foreground">Free, monthly. 6,400 readers.</p>
			</div>
		</section>
	)
}
