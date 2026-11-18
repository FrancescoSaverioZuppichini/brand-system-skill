import { stats } from "@/demo/content"

export default function StatsSplit() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
			<div className="flex flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Since 2019</span>
				<h2 className="text-3xl leading-tight md:text-4xl">
					We started Keep because good projects kept dying
				</h2>
				<p className="text-lg text-muted-foreground">
					The work we were proudest of was gone a year after launch: no owner, no plan, nobody who remembered
					why. Seven years on, the teams who use Keep plan less, ship on time and still own what they made.
				</p>
			</div>
			<dl className="grid grid-cols-2 gap-3 md:gap-4">
				{stats.map((item) => (
					<div key={item.label} className="flex flex-col gap-2 rounded-lg bg-muted p-5 md:p-6">
						<dd className="font-heading text-3xl leading-none tabular-nums md:text-4xl">{item.value}</dd>
						<dt className="text-sm font-medium">{item.label}</dt>
						<span className="text-xs text-muted-foreground">{item.delta}</span>
					</div>
				))}
			</dl>
		</section>
	)
}
