import { CircleUser } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { MobileMenu } from "@/demo/menu"

function Links({ links }: { links: string[] }) {
	return (
		<nav className="hidden items-center gap-7 text-sm lg:flex">
			{links.map((link) => (
				<a key={link} href="#top" className="hover:text-muted-foreground">
					{link}
				</a>
			))}
		</nav>
	)
}

// [Agent] Three equal-weight columns (1fr auto 1fr) keep the logo on the true centre however long each side's links are.
export default function NavCenteredLogo() {
	return (
		<header className="border-b bg-background">
			<div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 md:px-8">
				<div className="flex">
					<MobileMenu className="-ml-2 lg:hidden" />
					<Links links={product.links.slice(0, 3)} />
				</div>
				<Logo className="text-xl" />
				<div className="flex items-center justify-end gap-7">
					<Links links={product.links.slice(3)} />
					<Button size="sm" className="hidden lg:inline-flex">
						{product.primary}
					</Button>
					<Button size="icon" variant="ghost" aria-label="Account" className="-mr-2 lg:hidden">
						<CircleUser />
					</Button>
				</div>
			</div>
		</header>
	)
}
