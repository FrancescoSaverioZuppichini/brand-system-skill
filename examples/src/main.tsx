import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { blocks } from "@/blocks"
import { landings } from "@/landings"
import { Gallery } from "@/pages/gallery"
import { Specimen } from "@/pages/specimen"
import { applyStyle } from "@/theme"
import "./index.css"

// [Agent] Three themed routes plus the gallery; each is a full page load, so the style is applied once, before render.
function route() {
	const [, kind, ...rest] = location.pathname.split("/")
	const style = new URLSearchParams(location.search).get("style")
	if (kind === "specimen") {
		applyStyle(rest[0])
		return <Specimen slug={rest[0]} />
	}
	if (kind === "block") {
		const Block = blocks[rest.join("/")]
		applyStyle(style ?? "shadcn")
		return Block ? <Block /> : <p className="p-8">No block {rest.join("/")}</p>
	}
	if (kind === "landing") {
		const landing = landings[rest[0]]
		applyStyle(style ?? landing.style)
		return landing.blocks.map((id) => {
			const Block = blocks[id]
			return Block ? <Block key={id} /> : null
		})
	}
	return <Gallery />
}

createRoot(document.getElementById("root") as HTMLElement).render(<StrictMode>{route()}</StrictMode>)
