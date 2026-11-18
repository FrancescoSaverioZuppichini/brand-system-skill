import { Pencil, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { AreaChart } from "@/demo/chart"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects, ReleaseBadge, type ReleaseState } from "@/demo/workspace"

const project = allProjects[0]

const facts = [
	["Owner", <Person key="owner" name={project.owner} />],
	["Team", "Ana Ruiz, Tomás Berg, Leo Marchetti"],
	["Started", "2 Sep 2026"],
	["Target", "4 Dec 2026"],
	["Care plan", "Starts after 1.5"],
	["Repository", "halden/billing"],
] as const

const history: { version: string; state: ReleaseState; checks: number; date: string }[] = [
	{ version: "1.4", state: "In review", checks: 3, date: "20 Nov" },
	{ version: "1.3", state: "Released", checks: 5, date: "28 Oct" },
	{ version: "1.2", state: "Released", checks: 5, date: "6 Oct" },
	{ version: "1.1", state: "Released", checks: 5, date: "18 Sep" },
]

// [Agent] The key-value card holds what the header doesn't (team, dates, repo), so nothing is said twice. On a phone
// it moves above the chart, because "who owns this and when is it due" is the first question on a record.
export default function DetailPage() {
	return (
		<AppShell active="Projects" crumbs={["Projects", project.name]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
					<div className="flex flex-col gap-2">
						<h1 className="text-xl leading-tight">{project.name}</h1>
						<div className="flex flex-wrap items-center gap-2">
							<StatusBadge status={project.status} />
							<Badge variant="secondary" className="font-normal">
								Northwind
							</Badge>
							<span className="text-sm text-muted-foreground">{project.progress}% of the plan done</span>
						</div>
					</div>
					<div className="flex gap-2 max-md:[&>button]:flex-1">
						<Button variant="outline">
							<Pencil /> Edit plan
						</Button>
						<Button>
							<Plus /> New release
						</Button>
						<RowMenu items={["Move to care", "Duplicate", "Archive"]} className="max-md:hidden" />
					</div>
				</header>
				<Tabs defaultValue="overview" className="gap-6">
					<TabsList variant="line" className="max-w-full justify-start overflow-x-auto">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="releases">Releases</TabsTrigger>
						<TabsTrigger value="care">Care</TabsTrigger>
						<TabsTrigger value="files">Files</TabsTrigger>
					</TabsList>
					<TabsContent value="overview" className="grid gap-6 lg:grid-cols-[1fr_18rem]">
						<Card className="gap-0 p-0 lg:order-last lg:self-start">
							<dl className="divide-y text-sm">
								{facts.map(([label, value]) => (
									<div key={label} className="flex items-center justify-between gap-4 px-4 py-2.5">
										<dt className="text-muted-foreground">{label}</dt>
										<dd className="truncate text-right">{value}</dd>
									</div>
								))}
							</dl>
						</Card>
						<div className="flex min-w-0 flex-col gap-6">
							<Card className="gap-4 p-4 md:p-5">
								<div className="flex items-baseline justify-between gap-2">
									<span className="text-sm font-medium">Plan done, by week</span>
									<span className="text-sm text-muted-foreground tabular-nums">{project.progress}%</span>
								</div>
								<AreaChart
									data={[0, 4, 9, 15, 18, 24, 31, 35, 42, 48, 51, 57, 62, 68, 72]}
									className="h-40 md:h-52"
								/>
							</Card>
							<section className="flex flex-col gap-2">
								<h2 className="text-base leading-tight">Releases</h2>
								<Table>
									<TableHeader className="max-md:hidden">
										<TableRow>
											<TableHead>Release</TableHead>
											<TableHead>Checks</TableHead>
											<TableHead>State</TableHead>
											<TableHead className="text-right">Date</TableHead>
											<TableHead className="w-10" />
										</TableRow>
									</TableHeader>
									<TableBody>
										{history.map((release) => (
											<TableRow key={release.version}>
												<TableCell>
													<div className="font-medium">{release.version}</div>
													<div className="text-xs text-muted-foreground md:hidden">{release.date}</div>
												</TableCell>
												<TableCell className="text-muted-foreground tabular-nums max-md:hidden">
													{release.checks} of 5
												</TableCell>
												<TableCell className="max-md:text-right">
													<ReleaseBadge state={release.state} />
												</TableCell>
												<TableCell className="text-right text-muted-foreground max-md:hidden">
													{release.date}
												</TableCell>
												<TableCell className="max-md:hidden">
													<RowMenu items={["Open", "Copy notes"]} />
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</section>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</AppShell>
	)
}
