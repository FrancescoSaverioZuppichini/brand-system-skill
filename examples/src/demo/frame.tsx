import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// [Agent] A small browser frame around one crop of Keep (a list, a checklist, a template), for blocks that show a
// single screen part rather than the whole AppWindow.
export function Frame({
	url,
	className,
	children,
}: {
	url: string
	className?: string
	children: ReactNode
}) {
	return (
		<div
			className={cn("overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm", className)}
		>
			<div className="flex items-center gap-3 border-b px-3 py-2 text-[11px] text-muted-foreground">
				<span className="flex gap-1">
					<span className="size-2 rounded-full bg-border" />
					<span className="size-2 rounded-full bg-border" />
					<span className="size-2 rounded-full bg-border" />
				</span>
				<span className="truncate font-mono">{url}</span>
			</div>
			{children}
		</div>
	)
}
