import { ArrowRight, Check, CreditCard, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell } from "@/demo/app-nav"
import { plans } from "@/demo/content"
import { workspace } from "@/demo/workspace"

// [Agent] Each invoice is seats × the Team price, so the amounts follow the team growing from 22 to 24 members.
const invoices = [
	{ date: "1 Nov 2026", seats: 24 },
	{ date: "1 Oct 2026", seats: 23 },
	{ date: "1 Sep 2026", seats: 23 },
	{ date: "1 Aug 2026", seats: 22 },
	{ date: "1 Jul 2026", seats: 22 },
].map((invoice) => ({ ...invoice, amount: invoice.seats * workspace.price }))

export default function BillingTabs() {
	return (
		<AppShell active="Billing" crumbs={["Workspace", "Billing"]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<h1 className="text-xl leading-tight">Billing</h1>
				<Tabs defaultValue="plan" className="gap-6">
					<TabsList variant="line" className="justify-start border-b">
						<TabsTrigger value="plan" className="flex-none">
							Plan
						</TabsTrigger>
						<TabsTrigger value="usage" className="flex-none">
							Usage
						</TabsTrigger>
						<TabsTrigger value="details" className="flex-none">
							Billing details
						</TabsTrigger>
					</TabsList>
					<TabsContent value="plan" className="flex flex-col gap-8">
						<div className="grid gap-4 lg:grid-cols-2">
							<Card className="gap-4 p-5">
								<div className="flex items-center justify-between">
									<span className="text-sm text-muted-foreground">Current plan</span>
									<Badge variant="secondary" className="font-normal">
										Renews {workspace.renews}
									</Badge>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-3xl font-semibold tabular-nums">
										${workspace.members * workspace.price}
										<span className="text-base font-normal text-muted-foreground"> / month</span>
									</span>
									<span className="text-sm text-muted-foreground">
										{workspace.plan} · {workspace.members} members × ${workspace.price}
									</span>
								</div>
								<ul className="flex flex-col gap-1.5 text-sm">
									{plans[1].features.map((feature) => (
										<li key={feature} className="flex items-center gap-2">
											<Check className="size-4 text-muted-foreground" /> {feature}
										</li>
									))}
								</ul>
								<Button variant="outline" className="self-start">
									Change plan
								</Button>
							</Card>
							<Card className="gap-4 p-5">
								<span className="text-sm text-muted-foreground">Payment method</span>
								<div className="flex items-center gap-3">
									<span className="flex size-10 items-center justify-center rounded-md border bg-muted">
										<CreditCard className="size-5 text-muted-foreground" />
									</span>
									<div className="flex flex-col text-sm">
										<span className="font-medium">Visa ending 4242</span>
										<span className="text-muted-foreground">Expires 08 / 2028</span>
									</div>
								</div>
								<dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t pt-4 text-sm">
									<dt className="text-muted-foreground">Billing email</dt>
									<dd className="text-right">billing@halden.studio</dd>
									<dt className="text-muted-foreground">Next charge</dt>
									<dd className="text-right">
										${workspace.members * workspace.price} on {workspace.renews}
									</dd>
								</dl>
								<Button variant="link" className="mt-auto self-start px-0">
									Update payment method <ArrowRight />
								</Button>
							</Card>
						</div>
						<section className="flex flex-col gap-2">
							<h2 className="text-base leading-tight">Invoices</h2>
							<Table>
								<TableHeader className="max-md:hidden">
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Description</TableHead>
										<TableHead>Status</TableHead>
										<TableHead className="text-right">Amount</TableHead>
										<TableHead className="w-10" />
									</TableRow>
								</TableHeader>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow key={invoice.date}>
											<TableCell>
												<div className="font-medium">{invoice.date}</div>
												<div className="text-xs text-muted-foreground md:hidden">
													{invoice.seats} members · Paid
												</div>
											</TableCell>
											<TableCell className="text-muted-foreground max-md:hidden">
												{workspace.plan} plan, {invoice.seats} members
											</TableCell>
											<TableCell className="max-md:hidden">
												<Badge variant="outline" className="font-normal">
													Paid
												</Badge>
											</TableCell>
											<TableCell className="text-right tabular-nums">${invoice.amount}.00</TableCell>
											<TableCell>
												<Button variant="ghost" size="icon-sm" aria-label={`Download ${invoice.date}`}>
													<Download />
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</section>
					</TabsContent>
				</Tabs>
			</div>
		</AppShell>
	)
}
