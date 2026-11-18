import { customers, product } from "@/demo/content"
import { cn } from "@/lib/utils"

// [Agent] A box with its lid set aside: the one mark every style redraws in its own colours via currentColor/primary.
export function Logo({ className }: { className?: string }) {
	return (
		<span className={cn("inline-flex items-center gap-2 font-heading text-lg leading-none", className)}>
			<svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
				<rect x="3" y="9" width="18" height="12" className="fill-primary" />
				<rect x="3" y="3" width="18" height="4" className="fill-current opacity-40" />
				<rect x="10" y="12" width="4" height="3" className="fill-primary-foreground" />
			</svg>
			{product.name}
		</span>
	)
}

const marks = [
	"font-heading font-bold",
	"font-mono uppercase",
	"font-sans italic",
	"font-heading tracking-widest uppercase",
]

// [Agent] Customer logos as typeset wordmarks: four type treatments so a row reads as different companies, no images.
export function CustomerLogo({ index, className }: { index: number; className?: string }) {
	return (
		<span
			className={cn(
				"text-lg whitespace-nowrap text-muted-foreground",
				marks[index % marks.length],
				className,
			)}
		>
			{customers[index % customers.length]}
		</span>
	)
}
