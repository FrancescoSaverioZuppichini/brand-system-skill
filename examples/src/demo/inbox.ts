// [Agent] What lands in Ana's inbox (she is the signed-in user of AppShell). Every release and project named here is
// in workspace.ts with the same state, so the bell popover, the inbox and the phone app tell one story.
export const notices: {
	from: string
	text: string
	project: string
	time: string
	kind: "Request" | "Mention" | "Update"
	unread?: boolean
}[] = [
	{
		from: "Leo Marchetti",
		text: "asked you to approve Release 2.0",
		project: "Care dashboard",
		time: "12m",
		kind: "Request",
		unread: true,
	},
	{
		from: "Tomás Berg",
		text: "mentioned you: “Migration tested on a copy of production, no errors.”",
		project: "Billing rewrite",
		time: "1h",
		kind: "Mention",
		unread: true,
	},
	{
		from: "Jonas Lind",
		text: "marked Release 0.9 as blocked",
		project: "Mobile app",
		time: "2h",
		kind: "Update",
		unread: true,
	},
	{
		from: "Mei Okafor",
		text: "asked you to review the plan",
		project: "Onboarding v3",
		time: "3h",
		kind: "Request",
	},
	{
		from: "Priya Shah",
		text: "shipped Release 3.1",
		project: "Client reports",
		time: "Yesterday",
		kind: "Update",
	},
	{
		from: "Leo Marchetti",
		text: "shipped Release 1.12",
		project: "Design system",
		time: "Yesterday",
		kind: "Update",
	},
	{
		from: "Tomás Berg",
		text: "set the next care review for 18 Nov 2027",
		project: "Customer portal",
		time: "Mon",
		kind: "Update",
	},
]
