import { Logo } from "@/demo/logo"
import { Legal, Social } from "@/demo/site"

const links = ["Pricing", "Docs", "Customers", "Blog", "Careers", "Contact"]

export default function FooterCentered() {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-14 text-center">
				<Logo />
				<nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
					{links.map((link) => (
						<a key={link} href="#" className="hover:text-foreground">
							{link}
						</a>
					))}
				</nav>
				<Social />
				<Legal className="justify-center" />
			</div>
		</footer>
	)
}
