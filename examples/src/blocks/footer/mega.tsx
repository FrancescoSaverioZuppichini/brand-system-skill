import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/demo/logo"
import { Legal, Social, sitemap } from "@/demo/site"

export default function FooterMega() {
	return (
		<footer className="border-t bg-muted">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 md:px-8 md:py-16">
				<div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
					<div className="flex flex-col gap-4">
						<Logo />
						<p className="max-w-sm text-muted-foreground">
							Plan it, ship it, and look after it for years. One letter a month about how.
						</p>
						<form className="flex max-w-sm flex-col gap-2 sm:flex-row">
							<Input
								type="email"
								aria-label="Email"
								placeholder="ana@halden.studio"
								className="bg-background"
							/>
							<Button>Subscribe</Button>
						</form>
					</div>
					<nav className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
						{sitemap.map((column) => (
							<div key={column.title} className="flex flex-col gap-3 text-sm">
								<h3 className="text-sm">{column.title}</h3>
								{column.links.map((link) => (
									<a key={link} href="#" className="text-muted-foreground hover:text-foreground">
										{link}
									</a>
								))}
							</div>
						))}
					</nav>
				</div>
				<div className="flex flex-col-reverse gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
					<Legal />
					<Social />
				</div>
			</div>
		</footer>
	)
}
