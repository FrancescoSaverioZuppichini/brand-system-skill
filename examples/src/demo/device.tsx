import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// [Agent] Hardware keeps its own fixed corners whatever the style's radius: a square phone reads as a tablet.
export function Phone({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				"relative flex aspect-[9/19] w-60 flex-col overflow-hidden rounded-[2.25rem] border-[6px] border-foreground bg-background text-foreground shadow-lg",
				className,
			)}
		>
			<div className="mx-auto mt-2 h-4 w-20 shrink-0 rounded-full bg-foreground" />
			<div className="flex min-h-0 flex-1 flex-col">{children}</div>
		</div>
	)
}

type Line = { text: string; tone?: "comment" | "prompt" | "output" }

const tones = { comment: "opacity-50", prompt: "", output: "opacity-75" }

// [Agent] Inverted colours (background on foreground) give a dark code panel on light styles and a light one on dark
// styles, so contrast holds without a separate code palette.
export function Code({ lines, title, className }: { lines: Line[]; title?: string; className?: string }) {
	return (
		<div
			className={cn("overflow-hidden rounded-lg bg-foreground font-mono text-xs text-background", className)}
		>
			{title && <div className="border-b border-background/15 px-4 py-2 opacity-60">{title}</div>}
			<pre className="overflow-x-auto p-4 leading-relaxed">
				{lines.map((line) => (
					<div key={line.text} className={tones[line.tone ?? "prompt"]}>
						{line.tone === "prompt" ? `$ ${line.text}` : line.text || " "}
					</div>
				))}
			</pre>
		</div>
	)
}

export const session: Line[] = [
	{ text: "npm i -g @keep/cli", tone: "prompt" },
	{ text: "keep init billing-rewrite", tone: "prompt" },
	{ text: "✓ Created plan.md, owners and a first release", tone: "output" },
	{ text: "keep ship --release 1.4", tone: "prompt" },
	{ text: "✓ 12 of 12 checks passed · released 1.4", tone: "output" },
	{ text: "✓ Moved to care: next review 18 Nov 2027", tone: "output" },
]
