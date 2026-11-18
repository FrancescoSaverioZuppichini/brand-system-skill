import { Check } from "lucide-react"
import { Fragment } from "react"
import { cn } from "@/lib/utils"

// [Agent] Steps before `current` are done (filled, checked), `current` is outlined, the rest are muted. Labels sit
// under the circles so four steps still fit at 390.
export function Stepper({
	steps,
	current,
	className,
}: {
	steps: string[]
	current: number
	className?: string
}) {
	return (
		<ol className={cn("flex items-start", className)}>
			{steps.map((step, index) => (
				<Fragment key={step}>
					{index > 0 && (
						<li
							aria-hidden
							className={cn("mt-3.5 h-px flex-1", index <= current ? "bg-primary" : "bg-border")}
						/>
					)}
					<li
						aria-current={index === current ? "step" : undefined}
						className="flex w-16 shrink-0 flex-col items-center gap-1.5 text-xs"
					>
						<span
							className={cn(
								"flex size-7 items-center justify-center rounded-full border font-mono",
								index < current && "border-primary bg-primary text-primary-foreground",
								index === current && "border-2 border-foreground",
								index > current && "text-muted-foreground",
							)}
						>
							{index < current ? <Check className="size-3.5" /> : index + 1}
						</span>
						<span className={cn(index === current ? "font-medium" : "text-muted-foreground")}>{step}</span>
					</li>
				</Fragment>
			))}
		</ol>
	)
}
