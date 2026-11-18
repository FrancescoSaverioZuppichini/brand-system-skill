import { Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { place, StreetMap } from "@/demo/place"

export default function ContactMap() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24">
			<StreetMap className="aspect-[4/3] rounded-xl" />
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-3">
					<h2 className="text-3xl leading-tight md:text-4xl">Visit the Keep studio</h2>
					<p className="text-muted-foreground">
						{place.street}, {place.city}. {place.note}
					</p>
				</div>
				<table className="w-full text-sm">
					<caption className="sr-only">Opening hours</caption>
					<tbody>
						{place.hours.map((row) => (
							<tr key={row.days} className="border-b last:border-0">
								<th scope="row" className="py-2.5 text-left font-normal text-muted-foreground">
									{row.days}
								</th>
								<td className="py-2.5 text-right font-medium tabular-nums">{row.time}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex flex-col gap-3 sm:flex-row">
					<Button size="lg">
						<Phone /> Call {place.phone}
					</Button>
					<Button size="lg" variant="outline">
						<Navigation /> Directions
					</Button>
				</div>
			</div>
		</section>
	)
}
