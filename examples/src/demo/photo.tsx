import { cn } from "@/lib/utils"

type Scene = "place" | "object" | "person"

// [Agent] Photos without image files: a flat SVG still life in the style's own colours, so a block shows where a
// photograph goes and what it is of (a room, a product, a portrait) in every style. "slice" crops like object-fit: cover.
export function Photo({
	scene = "place",
	label,
	className,
}: {
	scene?: Scene
	label?: string
	className?: string
}) {
	return (
		<div className={cn("relative overflow-hidden bg-muted", className)}>
			<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
				{scene === "place" && (
					<>
						<rect x="0" y="0" width="400" height="300" className="fill-secondary" />
						<rect x="230" y="40" width="120" height="150" className="fill-background" />
						<line x1="290" y1="40" x2="290" y2="190" strokeWidth="4" className="stroke-secondary" />
						<rect x="0" y="210" width="400" height="90" className="fill-muted-foreground opacity-30" />
						<rect x="60" y="150" width="140" height="12" className="fill-foreground opacity-70" />
						<rect x="72" y="162" width="8" height="60" className="fill-foreground opacity-70" />
						<rect x="180" y="162" width="8" height="60" className="fill-foreground opacity-70" />
						<rect x="100" y="112" width="26" height="38" className="fill-chart-2" />
						<circle cx="150" cy="135" r="15" className="fill-chart-1" />
					</>
				)}
				{scene === "object" && (
					<>
						<rect x="0" y="0" width="400" height="300" className="fill-secondary" />
						<ellipse cx="200" cy="245" rx="120" ry="18" className="fill-foreground opacity-10" />
						<rect x="150" y="105" width="100" height="140" rx="10" className="fill-primary" />
						<rect x="158" y="80" width="84" height="30" rx="6" className="fill-foreground opacity-80" />
						<rect x="165" y="150" width="70" height="44" className="fill-primary-foreground" />
						<rect x="175" y="162" width="50" height="6" className="fill-primary" />
						<rect x="175" y="175" width="34" height="6" className="fill-primary opacity-50" />
					</>
				)}
				{scene === "person" && (
					<>
						<rect x="0" y="0" width="400" height="300" className="fill-secondary" />
						<path d="M90 300 C100 220 150 195 200 195 C250 195 300 220 310 300 Z" className="fill-primary" />
						<rect x="182" y="160" width="36" height="45" className="fill-muted-foreground" />
						<ellipse cx="200" cy="125" rx="48" ry="56" className="fill-muted-foreground" />
						<path
							d="M150 118 C150 70 250 70 250 118 C240 92 160 92 150 118 Z"
							className="fill-foreground opacity-80"
						/>
					</>
				)}
			</svg>
			{label && (
				<span className="absolute bottom-2 left-2 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
					{label}
				</span>
			)}
		</div>
	)
}
