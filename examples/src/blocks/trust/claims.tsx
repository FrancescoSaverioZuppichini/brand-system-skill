const claims = [
	{
		title: "You own what you write",
		text: "Plans, releases and decisions belong to you. We never use them to train models, ours or anyone else's.",
	},
	{
		title: "Export anytime, on every plan",
		text: "One click exports every project as Markdown and JSON, Starter included. No call to cancel.",
	},
	{
		title: "Deleted means deleted",
		text: "A deleted project sits in the trash for 30 days, then leaves our servers and backups for good.",
	},
	{
		title: "Refunds in the first 30 days",
		text: "Not right for your team? Write to us within 30 days of your first payment and we refund it in full.",
	},
]

export default function TrustClaims() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-4">
				<span className="text-sm text-muted-foreground">Our promises</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Your projects stay yours</h2>
			</div>
			<ul className="flex flex-col divide-y border-y">
				{claims.map((claim) => (
					<li key={claim.title} className="flex flex-col gap-2 py-6">
						<h3 className="text-xl">{claim.title}</h3>
						<p className="text-muted-foreground">{claim.text}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
