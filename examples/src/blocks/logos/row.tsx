import { customers } from "@/demo/content"
import { CustomerLogo } from "@/demo/logo"

export default function LogosRow() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 md:px-8 md:py-16">
			<p className="text-center text-sm text-muted-foreground">
				312 teams plan, ship and look after their projects in Keep
			</p>
			<div className="grid w-full grid-cols-3 items-center justify-items-center gap-x-4 gap-y-6 md:grid-cols-6">
				{customers.slice(0, 6).map((name, index) => (
					<CustomerLogo key={name} index={index} className="text-sm md:text-lg" />
				))}
			</div>
		</section>
	)
}
