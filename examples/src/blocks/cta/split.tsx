import { Button } from "@/components/ui/button"
import { plans } from "@/demo/content"

const studio = plans[2]

// [Agent] The band inverts the page (foreground as background), so it is dark in light styles and light in dark ones;
// the buttons invert with it to keep their contrast.
export default function CtaSplit() {
	return (
		<section className="bg-foreground text-background">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:px-8 md:py-20">
				<div className="flex max-w-2xl flex-col gap-3">
					<h2 className="text-3xl leading-tight md:text-4xl">Run a studio? Give each client a space</h2>
					<p className="text-lg text-background/70">
						{studio.name} adds read-only client spaces, an audit log and SSO, for ${studio.price}{" "}
						{studio.unit}.
					</p>
				</div>
				<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
					<Button size="lg" className="bg-background text-foreground hover:bg-background/90">
						See {studio.name}
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
					>
						Talk to us
					</Button>
				</div>
			</div>
		</section>
	)
}
