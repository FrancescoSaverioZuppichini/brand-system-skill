import { customers, quote } from "@/demo/content"
import { CustomerLogo } from "@/demo/logo"
import { Photo } from "@/demo/photo"

export default function LogosQuote() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[3fr_2fr] lg:gap-16">
			<figure className="flex flex-col gap-6">
				<span aria-hidden className="font-heading text-6xl leading-none text-primary">
					“
				</span>
				<blockquote className="-mt-6 font-heading text-2xl leading-snug md:text-4xl">{quote.text}</blockquote>
				<figcaption className="flex items-center gap-3">
					<Photo scene="person" className="size-10 shrink-0 rounded-full" />
					<span className="flex flex-col text-sm">
						<span className="font-medium">{quote.name}</span>
						<span className="text-muted-foreground">{quote.role}</span>
					</span>
				</figcaption>
			</figure>
			<div className="grid grid-cols-2 gap-(--border-width) overflow-hidden rounded-lg border bg-border">
				{customers.slice(0, 6).map((name, index) => (
					<div key={name} className="flex h-20 items-center justify-center bg-background px-2 md:h-24">
						<CustomerLogo index={index} className="text-base md:text-lg" />
					</div>
				))}
			</div>
		</section>
	)
}
