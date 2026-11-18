import { faqs } from "@/demo/content"

// [Agent] The full FAQ: the five questions in content.ts first, so every FAQ block that slices from the top shows
// them, then the rest by topic for the categorised block.
export const topics = ["Billing", "Your data", "Setup", "Clients"] as const

export const questions: { topic: (typeof topics)[number]; q: string; a: string }[] = [
	{ topic: "Billing", ...faqs[0] },
	{ topic: "Setup", ...faqs[1] },
	{ topic: "Billing", ...faqs[2] },
	{ topic: "Your data", ...faqs[3] },
	{ topic: "Clients", ...faqs[4] },
	{
		topic: "Billing",
		q: "Who counts as a member?",
		a: "Anyone who can edit a project. Clients in a read-only space are free and never take a seat.",
	},
	{
		topic: "Setup",
		q: "Can I import from Linear or Jira?",
		a: "Yes. The importer brings over projects, owners and open issues, with their history, in a few minutes.",
	},
	{
		topic: "Billing",
		q: "Is yearly billing cheaper?",
		a: "Yes, two months are free: Team is $10 and Studio $20 per member a month when billed yearly.",
	},
	{
		topic: "Billing",
		q: "Can I pay by invoice?",
		a: "Yearly Studio plans can be paid by bank transfer against an invoice. Enterprise adds purchase orders.",
	},
	{
		topic: "Your data",
		q: "Can I export everything?",
		a: "Every project exports as Markdown and JSON on every plan, releases and decisions included.",
	},
	{
		topic: "Your data",
		q: "Do you train AI on my projects?",
		a: "No. Your projects are never used to train models, ours or anyone else's.",
	},
	{
		topic: "Your data",
		q: "What happens when I delete a project?",
		a: "It stays in the trash for 30 days, then leaves our servers and backups for good.",
	},
	{
		topic: "Setup",
		q: "Is there a command-line tool?",
		a: "Yes. npm i -g @keep/cli lets you plan, ship and move projects into care from your terminal.",
	},
	{
		topic: "Setup",
		q: "How long does setup take?",
		a: "Most teams write their first plan in an afternoon. On Team and Studio we import your projects for you.",
	},
	{
		topic: "Clients",
		q: "Do clients need an account?",
		a: "No. They sign in with a link sent by email: no password and no seat.",
	},
	{
		topic: "Clients",
		q: "Can a client comment on a release?",
		a: "Yes. Comments in a client space reach the project owner, who can reply or turn them into a task.",
	},
]
