import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppShell } from "@/demo/app-nav"
import { workspace } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const meters = [
	{ label: "Seats", used: workspace.members, limit: workspace.seats, unit: "", note: "1 seat left" },
	{
		label: "Health check runs",
		used: 41_280,
		limit: 50_000,
		unit: "",
		note: "On track for 68,800 by 30 Nov, 18,800 over the limit",
	},
	{ label: "File storage", used: 38.4, limit: 100, unit: " GB", note: "" },
	{ label: "Client guests", used: 6, limit: 10, unit: "", note: "" },
]

// [Agent] Runs per day, 1–18 Nov; they sum to the 41,280 on the meter. Today is partial (10:48), so it is lower.
const days = [
	2300, 2375, 2265, 2435, 2485, 2065, 2035, 2385, 2465, 2395, 2505, 2475, 2135, 2095, 2425, 2495, 2535, 1410,
]
const daysInMonth = 30
const ceiling = 3000

const format = (value: number) => value.toLocaleString("en-US")

export default function BillingUsage() {
	return (
		<AppShell active="Billing" crumbs={["Billing", "Usage"]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex items-center justify-between gap-4">
					<div>
						<h1 className="text-xl leading-tight">Usage</h1>
						<p className="text-sm text-muted-foreground">Resets on {workspace.renews}</p>
					</div>
					<Select defaultValue="nov">
						<SelectTrigger size="sm">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="nov">1–30 Nov 2026</SelectItem>
							<SelectItem value="oct">1–31 Oct 2026</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<Card className="gap-0 divide-y p-0">
					{meters.map((meter) => {
						const share = (meter.used / meter.limit) * 100
						return (
							<div key={meter.label} className="flex flex-col gap-2 p-4 md:px-5">
								<div className="flex items-baseline justify-between gap-4 text-sm">
									<span className="font-medium">{meter.label}</span>
									<span className="text-muted-foreground tabular-nums">
										<span className="text-foreground">
											{format(meter.used)}
											{meter.unit}
										</span>{" "}
										of {format(meter.limit)}
										{meter.unit}
									</span>
								</div>
								<Progress
									value={share}
									className={cn("h-2", share > 80 && "*:data-[slot=progress-indicator]:bg-destructive")}
								/>
								{meter.note && <span className="text-xs text-muted-foreground">{meter.note}</span>}
							</div>
						)
					})}
				</Card>
				<Card className="gap-4 p-4 md:p-5">
					<div className="flex items-baseline justify-between gap-2">
						<span className="text-sm font-medium">Health check runs per day</span>
						<span className="text-sm text-muted-foreground tabular-nums">
							avg {format(Math.round(41_280 / 18))}
						</span>
					</div>
					{/* [Agent] Past days are neutral, today is the one strong bar, and the days left in the cycle are empty
					slots, so the chart reads as "how far into the month are we" as well as "how much". */}
					<div className="relative flex h-36 items-end gap-[3px] border-b md:h-56 md:gap-1.5">
						{[1000, 2000, 3000].map((line) => (
							<span
								key={line}
								className="absolute inset-x-0 border-t border-dashed text-[10px] text-muted-foreground"
								style={{ bottom: `${(line / ceiling) * 100}%` }}
							>
								<span className="absolute -top-3.5 right-0">{line / 1000}k</span>
							</span>
						))}
						{Array.from({ length: daysInMonth }, (_, index) => {
							const value = days[index]
							return (
								<span
									key={`day-${index + 1}`}
									className={cn(
										"relative flex-1 rounded-t-sm",
										value === undefined && "h-1 bg-muted",
										value !== undefined && index < days.length - 1 && "bg-muted-foreground/35",
										index === days.length - 1 && "bg-primary",
									)}
									style={value === undefined ? undefined : { height: `${(value / ceiling) * 100}%` }}
								/>
							)
						})}
					</div>
					<div className="flex justify-between font-mono text-[10px] text-muted-foreground">
						<span>1 Nov</span>
						<span>Today, 18 Nov</span>
						<span>30 Nov</span>
					</div>
				</Card>
			</div>
		</AppShell>
	)
}
