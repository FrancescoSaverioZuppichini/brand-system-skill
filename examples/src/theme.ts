import type { ComponentType } from "react"

// [Agent] The colours of a style are the skill's own colors-in.json (src/styles/<slug>.json), so palette.py checks
// every theme's contrast and a brand can copy one as its starting palette. Everything else is <slug>.ts.
export type Palette = {
	tokens: Record<string, [number, number, number, string]>
	roles: Record<string, Record<string, string>>
	default?: string
}

export type Style = {
	name: string
	family: string
	fonts: { heading: string; body: string; mono: string }
	/** The Google Fonts css2 query, e.g. "family=Inter:wght@400;600&family=IBM+Plex+Mono" */
	google: string
	radius: string
	border: string
	shadow: string
	heading: { weight: number; case?: "uppercase" | "lowercase"; tracking?: string; italic?: boolean }
	/** How the specimen sets its copy: flush left with the number card beside it, or centred over the decor. */
	specimen?: "start" | "center"
	/** Extra rules nested under the style's root, for what variables can't say (a text shadow, a button border). */
	css?: string
	/** CSS/SVG art behind the specimen, for styles whose identity needs it (a frame, a grid, a texture). */
	decor?: ComponentType
}

const styleModules = import.meta.glob<Style>("./styles/*.ts", { eager: true, import: "default" })
const paletteModules = import.meta.glob<Palette>("./styles/*.json", { eager: true, import: "default" })

const slugOf = (path: string) => path.split("/").pop()?.split(".")[0] ?? path

export const styles = Object.fromEntries(
	Object.entries(styleModules).map(([path, style]) => [slugOf(path), style]),
)
const palettes = Object.fromEntries(
	Object.entries(paletteModules).map(([path, palette]) => [slugOf(path), palette]),
)

export function getVars(slug: string) {
	const style = styles[slug]
	const palette = palettes[slug]
	// [Agent] Pigments become variables too (as palette.py's colors.css does), so a style's css and decor can name its
	// own colours (var(--gold)) beyond the shadcn roles, which point at them.
	const pigments = Object.entries(palette.tokens).map(([name, [l, c, h]]) => [
		`--${name}`,
		`oklch(${l} ${c} ${h})`,
	])
	const roles = Object.entries(palette.roles[palette.default ?? "light"]).map(([role, pigment]) => [
		`--${role}`,
		`var(--${pigment})`,
	])
	return {
		...Object.fromEntries([...pigments, ...roles]),
		"--font-display": `"${style.fonts.heading}", ui-serif, serif`,
		"--font-body": `"${style.fonts.body}", ui-sans-serif, sans-serif`,
		"--font-code": `"${style.fonts.mono}", ui-monospace, monospace`,
		"--radius": style.radius,
		"--border-width": style.border,
		"--shadow": style.shadow,
		"--heading-weight": String(style.heading.weight),
		"--heading-case": style.heading.case ?? "none",
		"--heading-tracking": style.heading.tracking ?? "normal",
		"--heading-style": style.heading.italic ? "italic" : "normal",
	} as Record<string, string>
}

// [Agent] Every page shows one style, so it goes on <html>: portalled dialogs, sheets and popovers live outside any
// wrapper div and would lose a scoped theme.
export function applyStyle(slug: string) {
	const style = styles[slug]
	const root = document.documentElement
	root.dataset.style = slug
	for (const [name, value] of Object.entries(getVars(slug))) root.style.setProperty(name, value)
	const link = document.createElement("link")
	link.rel = "stylesheet"
	link.href = `https://fonts.googleapis.com/css2?${style.google}&display=block`
	document.head.append(link)
	if (style.css) {
		const sheet = document.createElement("style")
		sheet.textContent = `[data-style="${slug}"] { ${style.css} }`
		document.head.append(sheet)
	}
}
