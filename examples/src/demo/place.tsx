import { cn } from "@/lib/utils"

// [Agent] Keep's studio in Lisbon, the one place people can visit (drop-in care clinic on Thursday evenings), shared by
// the contact and footer blocks that show an address, hours and a map.
export const place = {
	name: "Keep studio",
	street: "Rua das Flores 28",
	city: "1200-195 Lisbon, Portugal",
	phone: "+351 21 340 5120",
	email: "studio@keep.app",
	note: "Care clinic on Thursdays from 17:00: bring a project, leave with a plan.",
	hours: [
		{ days: "Mon – Wed", time: "09:00 – 18:00" },
		{ days: "Thursday", time: "09:00 – 20:00" },
		{ days: "Friday", time: "09:00 – 16:00" },
		{ days: "Sat – Sun", time: "Closed" },
	],
}

const streets = [
	{ d: "M0 92 L400 62", width: 12 },
	{ d: "M0 232 L400 192", width: 12 },
	{ d: "M118 0 L158 300", width: 10 },
	{ d: "M302 0 L272 300", width: 10 },
	{ d: "M0 176 L400 148", width: 6 },
	{ d: "M40 0 L250 300", width: 5 },
	{ d: "M228 0 L400 112", width: 5 },
]

// [Agent] A drawn map, not a tile image: streets are background-coloured strokes on the muted ground, so it reads as a
// light map in light styles and a dark map in dark ones. The pin sits on the centre, which "slice" always keeps in view.
export function StreetMap({ className }: { className?: string }) {
	return (
		<div
			className={cn("relative overflow-hidden bg-muted", className)}
			role="img"
			aria-label={`Map: ${place.street}`}
		>
			<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
				<path d="M296 206 L400 194 L400 300 L282 300 Z" className="fill-chart-2 opacity-25" />
				{streets.map((street) => (
					<path key={street.d} d={street.d} strokeWidth={street.width} className="stroke-background" />
				))}
				<text x="14" y="84" transform="rotate(-4.3 14 84)" className="fill-muted-foreground text-[11px]">
					Rua das Flores
				</text>
				<ellipse cx="200" cy="168" rx="9" ry="3" className="fill-foreground opacity-20" />
				<path d="M200 168 L188 146 A14 14 0 1 1 212 146 Z" className="fill-primary" />
				<circle cx="200" cy="139" r="5" className="fill-primary-foreground" />
			</svg>
		</div>
	)
}
