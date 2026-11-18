import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/demo/logo"

type Value = boolean | string

// [Agent] Tasklist wins three rows on purpose: a table where one side wins everything reads as an ad, not a comparison.
const rows: { feature: string; keep: Value; tasklist: Value }[] = [
	{ feature: "Plans with owners and dates", keep: true, tasklist: true },
	{ feature: "Kanban boards", keep: true, tasklist: true },
	{ feature: "Release checklists with sign-off", keep: true, tasklist: false },
	{ feature: "Care schedules and yearly reviews", keep: true, tasklist: false },
	{ feature: "Read-only client spaces", keep: "Studio plan", tasklist: true },
	{ feature: "Time tracking", keep: false, tasklist: true },
	{ feature: "Gantt charts", keep: false, tasklist: true },
	{ feature: "Data stored in the EU", keep: "Always", tasklist: "Enterprise only" },
	{ feature: "Free plan", keep: "3 projects", tasklist: "5 projects" },
	{ feature: "Paid plans from", keep: "$12 / member", tasklist: "$10 / member" },
]

function Cell({ value }: { value: Value }) {
	if (value === true) return <Check className="size-4 text-primary" aria-label="Yes" />
	if (value === false) return <Minus className="size-4 text-muted-foreground" aria-label="No" />
	return <span>{value}</span>
}

const products = [
	{ id: "keep" as const, name: "Keep" },
	{ id: "tasklist" as const, name: "Tasklist" },
]

export default function VsTable() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
				<h1 className="text-4xl leading-tight md:text-5xl">Keep vs Tasklist</h1>
				<p className="text-lg text-muted-foreground">
					Both plan projects well. Keep also looks after them once they ship; Tasklist tracks time and draws
					Gantt charts, which Keep doesn't.
				</p>
				<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
					<Button size="lg">Start a project</Button>
					<Button size="lg" variant="outline">
						Import from Tasklist
					</Button>
				</div>
			</div>
			<Table className="hidden md:table">
				<TableHeader>
					<TableRow className="hover:bg-transparent">
						<TableHead className="w-1/2" />
						<TableHead className="bg-muted px-4">
							<Logo className="text-base" />
						</TableHead>
						<TableHead className="px-4 text-base">Tasklist</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.feature} className="hover:bg-transparent">
							<TableCell className="py-3">{row.feature}</TableCell>
							<TableCell className="bg-muted px-4 py-3 font-medium">
								<Cell value={row.keep} />
							</TableCell>
							<TableCell className="px-4 py-3 text-muted-foreground">
								<Cell value={row.tasklist} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{/* [Agent] Two value columns don't fit next to the feature names at 390, so phones switch between the products
			    and see one column at a time. */}
			<Tabs defaultValue="keep" className="gap-4 md:hidden">
				<TabsList className="w-full">
					{products.map((product) => (
						<TabsTrigger key={product.id} value={product.id}>
							{product.name}
						</TabsTrigger>
					))}
				</TabsList>
				{products.map((product) => (
					<TabsContent key={product.id} value={product.id} className="flex flex-col divide-y border-y">
						{rows.map((row) => (
							<div key={row.feature} className="flex items-center justify-between gap-4 py-3 text-sm">
								{row.feature}
								<span className="shrink-0 text-right font-medium">
									<Cell value={row[product.id]} />
								</span>
							</div>
						))}
					</TabsContent>
				))}
			</Tabs>
			<p className="text-center text-sm text-muted-foreground">
				Compared on 12 Nov 2026 from Tasklist's public pricing and help pages. Something out of date?{" "}
				<a href="#contact" className="underline underline-offset-4">
					Tell us
				</a>
				.
			</p>
		</section>
	)
}
