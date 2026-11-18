import { Logo } from "@/demo/logo"
import { place, StreetMap } from "@/demo/place"
import { Legal } from "@/demo/site"

export default function FooterLocal() {
	return (
		<footer className="border-t bg-muted">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:px-8 md:py-16">
				<div className="grid gap-10 md:grid-cols-[1fr_1fr_1.1fr] md:gap-12">
					<div className="flex flex-col gap-4 text-sm">
						<Logo />
						<address className="flex flex-col gap-1 not-italic">
							<span className="font-medium">{place.name}</span>
							<span className="text-muted-foreground">{place.street}</span>
							<span className="text-muted-foreground">{place.city}</span>
						</address>
						<span className="flex flex-col gap-1">
							<a href="#" className="font-medium">
								{place.phone}
							</a>
							<a href="#" className="text-muted-foreground">
								{place.email}
							</a>
						</span>
					</div>
					<div className="flex flex-col gap-3 text-sm">
						<h3 className="text-sm">Opening hours</h3>
						<table className="w-full">
							<tbody>
								{place.hours.map((row) => (
									<tr key={row.days} className="border-b last:border-0">
										<th scope="row" className="py-2 text-left font-normal text-muted-foreground">
											{row.days}
										</th>
										<td className="py-2 text-right tabular-nums">{row.time}</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className="text-muted-foreground">{place.note}</p>
					</div>
					<StreetMap className="aspect-[16/10] rounded-lg md:aspect-auto md:min-h-48" />
				</div>
				<Legal className="border-t pt-6" />
			</div>
		</footer>
	)
}
