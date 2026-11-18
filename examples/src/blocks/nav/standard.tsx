import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { MobileMenu } from "@/demo/menu"

export default function NavStandard() {
	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-8">
				<Logo />
				<nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
					{product.links.map((link) => (
						<a key={link} href="#top" className="hover:text-foreground">
							{link}
						</a>
					))}
				</nav>
				<div className="hidden items-center gap-2 lg:flex">
					<Button variant="outline" size="sm">
						Log in
					</Button>
					<Button size="sm">{product.primary}</Button>
				</div>
				<MobileMenu className="lg:hidden" />
			</div>
		</header>
	)
}
