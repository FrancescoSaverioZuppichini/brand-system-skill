import { useLayoutEffect, useRef } from "react"
import { Logo } from "@/demo/logo"
import { Legal, Social, sitemap } from "@/demo/site"

// [Agent] Display faces range from condensed (Anton) to very wide (Michroma, Unbounded), so no fixed size spans the
// width in every style: measure the wordmark at 100px and scale it to the box, again whenever a font finishes loading
// or the box resizes (a frame later, so the height change doesn't loop the observer). The cqw size is the first paint.
function Wordmark() {
	const box = useRef<HTMLDivElement>(null)
	useLayoutEffect(() => {
		const element = box.current
		const mark = element?.firstElementChild as HTMLElement | null
		if (!element || !mark) return
		const fit = () => {
			mark.style.fontSize = "100px"
			mark.style.fontSize = `${Math.floor((100 * element.clientWidth) / mark.scrollWidth)}px`
		}
		const observer = new ResizeObserver(() => requestAnimationFrame(fit))
		observer.observe(element)
		document.fonts.addEventListener("loadingdone", fit)
		document.fonts.ready.then(fit)
		return () => {
			observer.disconnect()
			document.fonts.removeEventListener("loadingdone", fit)
		}
	}, [])
	return (
		<div ref={box} className="@container">
			<Logo className="gap-[0.08em] text-[27cqw] leading-[0.8] whitespace-nowrap [&_svg]:size-[0.72em]" />
		</div>
	)
}

export default function FooterWordmark() {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-14 pb-8 md:px-8 md:pt-16">
				<nav className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
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
				<Wordmark />
				<div className="flex flex-col-reverse gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
					<Legal />
					<Social />
				</div>
			</div>
		</footer>
	)
}
