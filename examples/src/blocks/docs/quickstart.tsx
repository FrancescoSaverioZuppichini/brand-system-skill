import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code } from "@/demo/device"

const stacks = [
	{
		id: "node",
		file: "release.ts",
		label: "Node.js",
		lines: [
			{ text: "npm i @keep/sdk", tone: "prompt" as const },
			{ text: 'import { Keep } from "@keep/sdk"' },
			{ text: "const keep = new Keep(process.env.KEEP_TOKEN)" },
			{ text: "// Open release 1.4 with the two checks every release needs", tone: "comment" as const },
			{ text: "await keep.releases.create({" },
			{ text: '  project: "billing-rewrite",' },
			{ text: '  version: "1.4",' },
			{ text: '  checks: ["Changelog written", "Migration tested"],' },
			{ text: "})" },
		],
	},
	{
		id: "python",
		file: "release.py",
		label: "Python",
		lines: [
			{ text: "pip install keep-sdk", tone: "prompt" as const },
			{ text: "from keep import Keep" },
			{ text: 'keep = Keep(os.environ["KEEP_TOKEN"])' },
			{ text: "# Open release 1.4 with the two checks every release needs", tone: "comment" as const },
			{ text: "keep.releases.create(" },
			{ text: '    project="billing-rewrite",' },
			{ text: '    version="1.4",' },
			{ text: '    checks=["Changelog written", "Migration tested"],' },
			{ text: ")" },
		],
	},
	{
		id: "go",
		file: "release.go",
		label: "Go",
		lines: [
			{ text: "go get github.com/keep-app/keep-go", tone: "prompt" as const },
			{ text: 'client := keep.New(os.Getenv("KEEP_TOKEN"))' },
			{ text: "release, err := client.Releases.Create(ctx, keep.Release{" },
			{ text: '    Project: "billing-rewrite",' },
			{ text: '    Version: "1.4",' },
			{ text: "})" },
		],
	},
	{
		id: "curl",
		file: "Terminal",
		label: "cURL",
		lines: [
			{ text: "curl https://api.keep.app/v1/releases \\", tone: "prompt" as const },
			{ text: '  -H "Authorization: Bearer $KEEP_TOKEN" \\' },
			{ text: "  -d project=billing-rewrite \\" },
			{ text: "  -d version=1.4" },
		],
	},
]

const next = [
	{ title: "Move a project into care", text: "Give a shipped project an owner, health checks and a review date." },
	{ title: "Connect GitHub", text: "Link pull requests to releases and tick checks from CI." },
	{ title: "Listen for webhooks", text: "Get release.shipped and care.review_due events on your server." },
]

export default function DocsQuickstart() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<span className="text-sm text-muted-foreground">Quickstart · 5 minutes</span>
				<h1 className="text-4xl md:text-5xl">Open your first release from code</h1>
				<p className="text-lg text-muted-foreground">
					Create an API token in Settings, then pick your stack. Every SDK wraps the same REST API.
				</p>
			</div>
			<Tabs defaultValue="node" className="min-w-0 gap-4">
				<div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
					<TabsList>
						{stacks.map((stack) => (
							<TabsTrigger key={stack.id} value={stack.id} className="px-4">
								{stack.label}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
				{stacks.map((stack) => (
					<TabsContent key={stack.id} value={stack.id}>
						<Code title={stack.file} lines={stack.lines} className="text-sm" />
					</TabsContent>
				))}
			</Tabs>
			<div className="grid gap-4 md:grid-cols-3">
				{next.map((step) => (
					<Card key={step.title} className="gap-3 p-5">
						<h2 className="text-lg">{step.title}</h2>
						<p className="text-sm text-muted-foreground">{step.text}</p>
						<a href="#guide" className="mt-auto flex items-center gap-1.5 text-sm font-medium">
							Read the guide <ArrowRight className="size-4" />
						</a>
					</Card>
				))}
			</div>
		</section>
	)
}
