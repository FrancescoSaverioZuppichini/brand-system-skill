import { useId } from "react"
import { cn } from "@/lib/utils"

type Scene = "place" | "object" | "person"

const backdrops = ["fill-secondary", "fill-muted", "fill-accent", "fill-secondary"]
const clothes = ["fill-primary", "fill-chart-1", "fill-chart-2", "fill-chart-3"]
const inks = ["fill-chart-1", "fill-chart-2", "fill-chart-3", "fill-chart-4"]

// [Agent] useId is stable for a Photo's place in the tree, so hashing it gives each photo its own variant (another
// person, another product, another room) without every block passing an index; `variant` pins one when it matters.
function hash(id: string) {
	let value = 0
	for (const char of id) value = (value * 31 + char.charCodeAt(0)) >>> 0
	return value
}

function Person({ variant }: { variant: number }) {
	return (
		<>
			<path
				d="M90 300 C100 220 150 195 200 195 C250 195 300 220 310 300 Z"
				className={clothes[variant % 4]}
			/>
			<rect x="182" y="160" width="36" height="45" className="fill-muted-foreground" />
			<ellipse cx="200" cy="125" rx="48" ry="56" className="fill-muted-foreground" />
			{variant % 3 === 0 && (
				<path
					d="M150 118 C150 70 250 70 250 118 C240 92 160 92 150 118 Z"
					className="fill-foreground opacity-80"
				/>
			)}
			{variant % 3 === 1 && (
				<path
					d="M146 190 C140 120 150 66 200 66 C250 66 260 120 254 190 L240 190 C246 130 236 96 200 96 C164 96 154 130 160 190 Z"
					className="fill-foreground opacity-80"
				/>
			)}
			{variant % 3 === 2 && (
				<>
					<circle cx="200" cy="58" r="20" className="fill-foreground opacity-80" />
					<path
						d="M152 112 C154 76 246 76 248 112 C236 90 164 90 152 112 Z"
						className="fill-foreground opacity-80"
					/>
				</>
			)}
		</>
	)
}

function Product({ variant }: { variant: number }) {
	const ink = inks[variant % 4]
	return (
		<>
			<ellipse cx="200" cy="245" rx="120" ry="18" className="fill-foreground opacity-10" />
			{variant % 4 === 0 && (
				<>
					<rect x="150" y="105" width="100" height="140" rx="10" className="fill-primary" />
					<rect x="158" y="80" width="84" height="30" rx="6" className="fill-foreground opacity-80" />
					<rect x="165" y="150" width="70" height="44" className="fill-primary-foreground" />
					<rect x="175" y="162" width="50" height="6" className="fill-primary" />
				</>
			)}
			{variant % 4 === 1 && (
				<>
					<rect x="130" y="70" width="140" height="175" rx="6" className={ink} />
					<rect x="232" y="70" width="10" height="175" className="fill-foreground opacity-70" />
					<rect x="150" y="100" width="60" height="8" className="fill-primary-foreground opacity-80" />
				</>
			)}
			{variant % 4 === 2 && (
				<>
					<path
						d="M250 140 C300 140 300 210 250 210"
						fill="none"
						strokeWidth="14"
						className="stroke-foreground opacity-70"
					/>
					<rect x="140" y="110" width="115" height="135" rx="12" className={ink} />
					<rect x="140" y="110" width="115" height="16" rx="8" className="fill-foreground opacity-20" />
				</>
			)}
			{variant % 4 === 3 && (
				<>
					<path
						d="M170 110 C170 60 230 60 230 110"
						fill="none"
						strokeWidth="8"
						className="stroke-foreground opacity-70"
					/>
					<path d="M135 105 L265 105 L280 245 L120 245 Z" className={ink} />
					<rect x="170" y="160" width="60" height="30" className="fill-primary-foreground opacity-80" />
				</>
			)}
		</>
	)
}

function Room({ variant }: { variant: number }) {
	return (
		<>
			<rect x="230" y="40" width="120" height="150" className="fill-background" />
			<line x1="290" y1="40" x2="290" y2="190" strokeWidth="4" className="stroke-secondary" />
			<rect x="0" y="210" width="400" height="90" className="fill-muted-foreground opacity-30" />
			<rect x="60" y="150" width="140" height="12" className="fill-foreground opacity-70" />
			<rect x="72" y="162" width="8" height="60" className="fill-foreground opacity-70" />
			<rect x="180" y="162" width="8" height="60" className="fill-foreground opacity-70" />
			{variant % 3 === 0 && (
				<>
					<rect x="100" y="112" width="26" height="38" className="fill-chart-2" />
					<circle cx="150" cy="135" r="15" className="fill-chart-1" />
				</>
			)}
			{variant % 3 === 1 && (
				<>
					<rect x="80" y="118" width="70" height="32" className="fill-chart-3" />
					<path
						d="M170 150 L170 96 L150 80"
						fill="none"
						strokeWidth="4"
						className="stroke-foreground opacity-70"
					/>
					<path d="M136 74 L164 74 L158 92 L142 92 Z" className="fill-chart-4" />
				</>
			)}
			{variant % 3 === 2 && (
				<>
					<rect x="100" y="120" width="20" height="30" className="fill-chart-1" />
					<path d="M110 120 C90 90 100 70 110 60 C120 70 130 90 110 120 Z" className="fill-chart-2" />
					<rect x="140" y="128" width="40" height="22" className="fill-chart-3" />
				</>
			)}
		</>
	)
}

// [Agent] Photos without image files: a flat SVG still life in the style's own colours, so a block shows where a
// photograph goes and what it is of (a room, a product, a portrait) in every style. "slice" crops like object-fit: cover.
export function Photo({
	scene = "place",
	variant,
	label,
	className,
}: {
	scene?: Scene
	variant?: number
	label?: string
	className?: string
}) {
	const id = useId()
	const pick = variant ?? hash(id)
	return (
		<div className={cn("relative overflow-hidden bg-muted", className)}>
			<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
				<rect x="0" y="0" width="400" height="300" className={backdrops[pick % 4]} />
				{scene === "place" && <Room variant={pick} />}
				{scene === "object" && <Product variant={pick} />}
				{scene === "person" && <Person variant={pick} />}
			</svg>
			{label && (
				<span className="absolute bottom-2 left-2 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
					{label}
				</span>
			)}
		</div>
	)
}
