import { Logo } from "@/demo/logo"
import { Social } from "@/demo/site"

const links = ["Docs", "Changelog", "Privacy", "Terms"]

export default function FooterMinimal() {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-4 py-6 md:px-8">
				<Logo />
				<nav className="order-last flex w-full gap-6 text-sm text-muted-foreground md:order-none md:w-auto">
					{links.map((link) => (
						<a key={link} href="#" className="hover:text-foreground">
							{link}
						</a>
					))}
				</nav>
				<Social className="ml-auto" />
			</div>
		</footer>
	)
}
