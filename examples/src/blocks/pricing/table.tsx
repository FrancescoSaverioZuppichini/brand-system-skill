import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { plans } from "@/demo/content"
import { pitch } from "@/demo/plan"
import { cn } from "@/lib/utils"

// [Agent] One value per plan, in the order of `plans` (Starter, Team, Studio); true/false draw a check or a dash.
const rows: { feature: string; values: (string | boolean)[] }[] = [
	{ feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
	{ feature: "Members", values: ["2", "Unlimited", "Unlimited"] },
	{ feature: "Release checklists", values: [true, true, true] },
	{ feature: "Markdown export", values: [true, true, true] },
	{ feature: "Care schedules", values: [false, true, true] },
	{ feature: "Health checks", values: [false, true, true] },
	{ feature: "Integrations", values: [false, true, true] },
	{ feature: "Client spaces", values: [false, false, true] },
	{ feature: "Audit log", values: [false, false, true] },
	{ feature: "SSO", values: [false, false, true] },
	{ feature: "Support", values: ["Community", "Email, 1 day", "Named contact"] },
]

const featured = 1

function Value({ value }: { value: string | boolean }) {
	if (value === true) return <Check className="size-4" aria-label="Included" />
	if (value === false) return <Minus className="size-4 text-muted-foreground" aria-label="Not included" />
	return <span>{value}</span>
}

export default function PricingTable() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Compare plans</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Every difference, line by line</h2>
				<p className="text-lg text-muted-foreground">
					All plans keep your projects for as long as you do. Prices are per member, per month.
				</p>
			</div>
			<div className="hidden md:block">
				<Table className="table-fixed">
					<TableHeader>
						<TableRow className="hover:bg-transparent">
							<TableHead className="w-1/4" />
							{plans.map((plan, index) => (
								<TableHead
									key={plan.name}
									className={cn("h-auto px-4 pt-5 pb-4 align-top", index === featured && "bg-muted")}
								>
									<div className="flex flex-col gap-1 whitespace-normal">
										<span className="text-sm text-muted-foreground">{plan.name}</span>
										<span className="font-heading text-3xl font-semibold text-foreground tabular-nums">
											${plan.price}
										</span>
										<span className="text-xs font-normal text-muted-foreground">{plan.unit}</span>
										<Button className="mt-3" variant={index === featured ? "default" : "outline"}>
											{pitch[plan.name].action}
										</Button>
									</div>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.feature} className="hover:bg-transparent">
								<TableCell className="py-3 text-muted-foreground">{row.feature}</TableCell>
								{row.values.map((value, index) => (
									<TableCell
										key={plans[index].name}
										className={cn("px-4 py-3", index === featured && "bg-muted")}
									>
										<Value value={value} />
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			{/* [Agent] Three columns of checks don't fit 390 px, so phones get a plan switcher over one column. */}
			<Tabs defaultValue={plans[featured].name} className="gap-6 md:hidden">
				<TabsList className="h-10 w-full">
					{plans.map((plan) => (
						<TabsTrigger key={plan.name} value={plan.name}>
							{plan.name}
						</TabsTrigger>
					))}
				</TabsList>
				{plans.map((plan, index) => (
					<TabsContent key={plan.name} value={plan.name} className="flex flex-col gap-5">
						<div className="flex items-baseline justify-between gap-4">
							<span className="font-heading text-3xl font-semibold tabular-nums">${plan.price}</span>
							<span className="text-right text-sm text-muted-foreground">{plan.unit}</span>
						</div>
						<ul className="flex flex-col divide-y border-y text-sm">
							{rows.map((row) => (
								<li key={row.feature} className="flex items-center justify-between gap-4 py-3">
									<span className="text-muted-foreground">{row.feature}</span>
									<Value value={row.values[index]} />
								</li>
							))}
						</ul>
						<Button size="lg">{pitch[plan.name].action}</Button>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}
