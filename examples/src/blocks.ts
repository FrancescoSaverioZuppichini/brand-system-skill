import type { ComponentType } from "react"

// [Agent] Every file in blocks/<section>/<variant>.tsx is a block, keyed by its layouts.md id ("hero/split"); adding a
// block is adding a file.
const modules = import.meta.glob<ComponentType>("./blocks/*/*.tsx", { eager: true, import: "default" })

export const blocks = Object.fromEntries(
	Object.entries(modules).map(([path, Block]) => [path.slice(9, -4), Block]),
)
