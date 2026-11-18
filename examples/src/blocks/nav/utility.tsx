import { Clock, Globe, MapPin, Phone } from "lucide-react"
import NavStandard from "@/blocks/nav/standard"
import { place } from "@/demo/place"

export default function NavUtility() {
	return (
		<>
			<div className="bg-muted text-xs text-muted-foreground">
				<div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-2 md:justify-between md:px-8">
					<div className="flex items-center gap-6">
						<a
							href={`tel:${place.phone.replaceAll(" ", "")}`}
							className="flex items-center gap-1.5 font-medium text-foreground"
						>
							<Phone className="size-3.5" /> {place.phone}
						</a>
						<span className="hidden items-center gap-1.5 md:flex">
							<MapPin className="size-3.5" /> {place.street}, Lisbon
						</span>
						<span className="hidden items-center gap-1.5 lg:flex">
							<Clock className="size-3.5" /> Studio open Mon – Fri from 09:00, care clinic Thursdays 17:00
						</span>
					</div>
					<div className="hidden items-center gap-6 md:flex">
						<span>Data stored in Frankfurt</span>
						<span className="flex items-center gap-1.5">
							<Globe className="size-3.5" /> English
						</span>
					</div>
				</div>
			</div>
			<NavStandard />
		</>
	)
}
