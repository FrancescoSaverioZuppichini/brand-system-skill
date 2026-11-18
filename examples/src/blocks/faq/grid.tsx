import { questions } from "@/demo/questions"

export default function FaqGrid() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm text-muted-foreground">FAQ</span>
				<h2 className="text-3xl leading-tight md:text-5xl">The answers you need before paying</h2>
			</div>
			<dl className="grid gap-x-16 gap-y-10 md:grid-cols-2">
				{questions.slice(0, 6).map((item) => (
					<div key={item.q} className="flex flex-col gap-2">
						<dt>
							<h3 className="text-lg">{item.q}</h3>
						</dt>
						<dd className="text-muted-foreground">{item.a}</dd>
					</div>
				))}
			</dl>
		</section>
	)
}
