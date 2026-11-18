import { ArrowRight } from "lucide-react"
import { customers } from "@/demo/content"
import { CustomerLogo } from "@/demo/logo"

// [Agent] The rules are the grid's own background showing through gaps the width of the style's border, so cell lines
// match every other border in the style and never double up where two cells meet.
export default function LogosGrid() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-16">
			<div className="flex flex-col gap-4">
				<h2 className="text-3xl leading-tight md:text-4xl">The teams who keep what they make</h2>
				<p className="text-muted-foreground">
					Studios, agencies and product teams of 2 to 40 people. 312 of them plan, ship and look after their
					work in Keep.
				</p>
				<a href="#top" className="flex items-center gap-1 text-sm font-medium">
					Read their stories <ArrowRight className="size-4" />
				</a>
			</div>
			<div className="grid grid-cols-2 gap-(--border-width) overflow-hidden rounded-lg border bg-border md:grid-cols-4">
				{customers.map((name, index) => (
					<div key={name} className="flex h-24 items-center justify-center bg-background px-2">
						<CustomerLogo index={index} className="text-base md:text-lg" />
					</div>
				))}
			</div>
		</section>
	)
}
