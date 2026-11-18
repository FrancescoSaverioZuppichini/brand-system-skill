// [Agent] The one neutral story every block tells, so blocks differ only in layout and styles only in look. Keep is a
// planning tool for small teams: plan a project, ship it, then look after it for years ("in care").
export const product = {
	name: "Keep",
	headline: "Make something people keep",
	sub: "Tools for small teams who make things slowly and well. Plan it, ship it, and look after it for years.",
	kicker: "Introducing Keep",
	primary: "Start a project",
	secondary: "See how it works",
	proof: "Used by 1,284 teams since 2019",
	install: "npm i -g @keep/cli",
	links: ["Product", "Customers", "Pricing", "Docs", "Changelog"],
}

export const stat = { label: "Still in use", value: "1,284", caption: "projects made since 2019" }

export const stats = [
	{ label: "Projects in care", value: "1,284", delta: "+96 this quarter" },
	{ label: "Releases on time", value: "94%", delta: "+3 pts vs last year" },
	{ label: "Median project age", value: "3.2 yrs", delta: "oldest: 2019" },
	{ label: "Teams", value: "312", delta: "across 28 countries" },
]

export const customers = [
	"Northwind",
	"Halden",
	"Ostra",
	"Fieldnote",
	"Lumen & Co",
	"Parcel",
	"Tilde",
	"Marrow",
]

export const people = [
	{ name: "Ana Ruiz", role: "Studio lead, Halden", initials: "AR" },
	{ name: "Tomás Berg", role: "Engineer, Northwind", initials: "TB" },
	{ name: "Mei Okafor", role: "Founder, Fieldnote", initials: "MO" },
	{ name: "Jonas Lind", role: "Product, Ostra", initials: "JL" },
	{ name: "Priya Shah", role: "Design, Parcel", initials: "PS" },
	{ name: "Leo Marchetti", role: "Ops, Lumen & Co", initials: "LM" },
]

export const quote = {
	text: "We ship less often now, and nothing we shipped in 2021 has needed a rewrite.",
	...people[0],
}

export type Status = "Planning" | "Shipping" | "In care" | "Paused"

export const projects: { name: string; owner: string; status: Status; progress: number; updated: string }[] =
	[
		{ name: "Billing rewrite", owner: "Ana Ruiz", status: "Shipping", progress: 72, updated: "2h ago" },
		{ name: "Customer portal", owner: "Tomás Berg", status: "In care", progress: 100, updated: "Yesterday" },
		{ name: "Onboarding v3", owner: "Mei Okafor", status: "Planning", progress: 18, updated: "3d ago" },
		{ name: "Mobile app", owner: "Jonas Lind", status: "Shipping", progress: 54, updated: "4d ago" },
		{ name: "Search index", owner: "Priya Shah", status: "Paused", progress: 40, updated: "2w ago" },
	]

// [Agent] Projects kept alive per quarter: the one series the charts draw, so every chart agrees with the stats.
export const series = [312, 368, 401, 455, 498, 560, 611, 690, 742, 815, 903, 1004, 1098, 1187, 1284]

export const features = [
	{ title: "Plan in one page", text: "Scope, owners and dates on a single page the whole team can read." },
	{
		title: "Ship in small steps",
		text: "Releases are checklists, not ceremonies. Each one is reviewed and dated.",
	},
	{ title: "Look after it", text: "Projects move into care: health checks, owners and a yearly review." },
	{ title: "Hand it over", text: "Every decision is written down, so the next person can keep it going." },
]

export const plans = [
	{
		name: "Starter",
		price: 0,
		unit: "free for 3 projects",
		features: ["3 projects", "2 members", "Release checklists"],
	},
	{
		name: "Team",
		price: 12,
		unit: "per member / month",
		features: ["Unlimited projects", "Care schedules", "Health checks", "Integrations"],
	},
	{
		name: "Studio",
		price: 24,
		unit: "per member / month",
		features: ["Everything in Team", "Client spaces", "Audit log", "SSO"],
	},
]

export const faqs = [
	{
		q: "Can I cancel anytime?",
		a: "Yes. Plans are monthly or yearly and you can export everything as Markdown.",
	},
	{
		q: "What does “in care” mean?",
		a: "A shipped project with an owner, a health check and a yearly review date.",
	},
	{
		q: "Do you have a free plan?",
		a: "Starter is free for three projects and two members, with no time limit.",
	},
	{
		q: "Where is my data stored?",
		a: "In the EU (Frankfurt), encrypted at rest, with daily backups for 30 days.",
	},
	{
		q: "Can clients see their project?",
		a: "On Studio, each client gets a read-only space with releases and status.",
	},
]
