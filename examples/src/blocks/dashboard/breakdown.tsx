import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AppShell } from "@/demo/app-nav"
import { AreaChart, Sparkline } from "@/demo/chart"
import { series, stats } from "@/demo/content"

const metrics = [
	{ id: "care", label: stats[0].label, value: stats[0].value, delta: "+8.1%", data: series },
	{
		id: "releases",
		label: "Releases",
		value: "48",
		delta: "+9%",
		data: [18, 22, 25, 24, 31, 29, 34, 38, 36, 41, 44, 47, 45, 52, 48],
	},
	{
		id: "ontime",
		label: "On time",
		value: stats[1].value,
		delta: "+3 pts",
		data: [81, 83, 82, 85, 86, 85, 88, 89, 88, 90, 91, 92, 91, 93, 94],
	},
	{
		id: "review",
		label: "Review time",
		value: "2.1 d",
		delta: "−0.4 d",
		data: [4.2, 4, 3.9, 3.6, 3.7, 3.3, 3.1, 3, 2.8, 2.9, 2.6, 2.5, 2.4, 2.5, 2.1],
	},
]

// [Agent] The ranked table is per client across all four metrics, so it adds what the over-time chart can't show;
// the "in care" column sums to the 1,284 in the first tab.
const clients = [
	{ name: "Northwind", care: 412, releases: 14, onTime: "97%", trend: [210, 260, 300, 330, 371, 412] },
	{ name: "Ostra", care: 268, releases: 11, onTime: "91%", trend: [150, 170, 200, 228, 251, 268] },
	{ name: "Fieldnote", care: 201, releases: 9, onTime: "96%", trend: [90, 120, 140, 166, 187, 201] },
	{ name: "Lumen & Co", care: 164, releases: 6, onTime: "88%", trend: [120, 131, 140, 150, 158, 164] },
	{ name: "Parcel", care: 131, releases: 5, onTime: "100%", trend: [30, 55, 80, 101, 119, 131] },
	{ name: "Tilde", care: 108, releases: 3, onTime: "92%", trend: [70, 84, 90, 97, 104, 108] },
]

export default function DashboardBreakdown() {
	return (
		<AppShell
			active="Overview"
			crumbs={["Overview", "Analytics"]}
			action={
				<Button size="sm" variant="outline">
					Export
				</Button>
			}
		>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex items-center justify-between gap-4">
					<h1 className="text-xl leading-tight">Analytics</h1>
					<ToggleGroup type="single" defaultValue="4y" variant="outline" size="sm">
						<ToggleGroupItem value="1y">1y</ToggleGroupItem>
						<ToggleGroupItem value="2y">2y</ToggleGroupItem>
						<ToggleGroupItem value="4y">All</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<Tabs defaultValue="care" className="gap-0">
					<Card className="gap-0 overflow-hidden p-0">
						{/* [Agent] Each tab is a KPI tile (label, number, delta) that switches the one chart below it. */}
						<TabsList className="grid h-auto w-full grid-cols-4 rounded-none border-b bg-transparent p-0">
							{metrics.map((metric) => (
								<TabsTrigger
									key={metric.id}
									value={metric.id}
									className="flex h-auto flex-col items-start gap-0.5 rounded-none border-0 border-r px-2 py-3 text-left last:border-r-0 data-[state=active]:bg-muted data-[state=active]:shadow-none md:px-5 md:py-4"
								>
									<span className="w-full truncate text-[11px] font-normal text-muted-foreground md:text-sm">
										{metric.label}
									</span>
									<span className="text-base font-semibold tabular-nums md:text-2xl">{metric.value}</span>
									<span className="hidden text-xs font-normal text-muted-foreground sm:block">
										{metric.delta} vs last year
									</span>
								</TabsTrigger>
							))}
						</TabsList>
						{metrics.map((metric) => (
							<TabsContent key={metric.id} value={metric.id} className="p-4 md:p-6">
								<AreaChart data={metric.data} className="h-48 md:h-72" />
							</TabsContent>
						))}
					</Card>
				</Tabs>
				<div className="flex flex-col gap-2">
					<h2 className="text-base leading-tight">By client</h2>
					<Table>
						<TableHeader className="max-md:hidden">
							<TableRow>
								<TableHead className="w-8">#</TableHead>
								<TableHead>Client</TableHead>
								<TableHead className="text-right">In care</TableHead>
								<TableHead className="text-right">Releases</TableHead>
								<TableHead className="text-right">On time</TableHead>
								<TableHead className="text-right">Last 6 quarters</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{clients.map((client, index) => (
								<TableRow key={client.name}>
									<TableCell className="text-muted-foreground tabular-nums max-md:hidden">
										{index + 1}
									</TableCell>
									<TableCell>
										<div className="font-medium">{client.name}</div>
										<div className="text-xs text-muted-foreground md:hidden">
											{client.releases} releases · {client.onTime} on time
										</div>
									</TableCell>
									<TableCell className="text-right tabular-nums">{client.care}</TableCell>
									<TableCell className="text-right tabular-nums max-md:hidden">{client.releases}</TableCell>
									<TableCell className="text-right tabular-nums max-md:hidden">{client.onTime}</TableCell>
									<TableCell className="max-md:hidden">
										<Sparkline data={client.trend} className="ml-auto h-6 w-20" />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</AppShell>
	)
}
