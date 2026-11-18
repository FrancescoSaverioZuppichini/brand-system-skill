import { Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AppShell } from "@/demo/app-nav"
import { plans } from "@/demo/content"
import { workspace } from "@/demo/workspace"

const [, team, studio] = plans

// [Agent] Prorated for the 13 days left until the renewal on 1 Dec: (576 − 288) × 13 / 30.
const today = ((studio.price - team.price) * workspace.members * 13) / 30

// [Agent] The next plan is the dark card (inverted roles), so it reads as the one choice on the page in any style.
// It lists only what Studio adds, never the Team features again.
export default function BillingUpgrade() {
	return (
		<AppShell active="Billing" crumbs={["Billing", "Plans"]}>
			<div className="mx-auto flex max-w-4xl flex-col gap-6 p-4 md:p-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-xl leading-tight">Your plan</h1>
					<p className="text-sm text-muted-foreground">
						{workspace.name} has {workspace.members} members. Prices are per member, per month.
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<Card className="gap-5 p-6">
						<span className="text-sm text-muted-foreground">Current plan</span>
						<div className="flex flex-col gap-1">
							<span className="text-3xl font-semibold tabular-nums">
								${team.price}
								<span className="text-base font-normal text-muted-foreground"> {team.unit}</span>
							</span>
							<span className="text-sm">
								{team.name} · ${team.price * workspace.members} / month
							</span>
						</div>
						<ul className="flex flex-col gap-2 text-sm">
							{team.features.map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<Check className="size-4 text-muted-foreground" /> {feature}
								</li>
							))}
						</ul>
					</Card>
					<Card className="gap-5 border-foreground bg-foreground p-6 text-background">
						<span className="text-sm opacity-70">Next plan</span>
						<div className="flex flex-col gap-1">
							<span className="text-3xl font-semibold tabular-nums">
								${studio.price}
								<span className="text-base font-normal opacity-70"> {studio.unit}</span>
							</span>
							<span className="text-sm">
								{studio.name} · ${studio.price * workspace.members} / month
							</span>
						</div>
						<ul className="flex flex-col gap-2 text-sm">
							{studio.features.slice(1).map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<Plus className="size-4 opacity-70" /> {feature}
								</li>
							))}
							<li className="flex items-center gap-2 opacity-70">
								<Check className="size-4" /> Everything in {team.name}
							</li>
						</ul>
						<Button className="mt-auto bg-background text-foreground hover:bg-background/90">
							Upgrade to {studio.name}
						</Button>
					</Card>
				</div>
				<p className="text-sm text-muted-foreground">
					Upgrading today costs ${today.toFixed(2)} for the 13 days left in this period, then $
					{studio.price * workspace.members} a month from {workspace.renews}.
				</p>
			</div>
		</AppShell>
	)
}
