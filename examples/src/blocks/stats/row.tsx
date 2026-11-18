import { stats } from "@/demo/content"

export default function StatsRow() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:px-8 md:py-16">
			<dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-4">
				{stats.map((item) => (
					<div key={item.label} className="flex flex-col-reverse gap-2">
						<dt className="text-sm text-muted-foreground">{item.label}</dt>
						<dd className="font-heading text-4xl leading-none tabular-nums md:text-5xl">{item.value}</dd>
					</div>
				))}
			</dl>
			<p className="text-center text-xs text-muted-foreground">
				Keep's own project data, counted on 1 November 2026
			</p>
		</section>
	)
}
