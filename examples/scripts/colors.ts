// [Agent] Runs the skill's palette.py on every style's colours, so `bun run colors` proves all themes pass contrast
// and sRGB the same way a brand's colors-in.json does.
import { readdir } from "node:fs/promises"
import path from "node:path"

const root = path.resolve(import.meta.dir, "..")
const palette = path.resolve(root, "../skills/brand-system/scripts/palette.py")
const files = (await readdir(path.join(root, "src/styles"))).filter((file) => file.endsWith(".json")).sort()

// [Agent] theme.ts sets each pigment as --<name> and then its own tokens, so a pigment called "shadow" or "radius"
// would be silently replaced by the token of the same name.
const reserved = [
	"radius",
	"border-width",
	"shadow",
	"font-display",
	"font-body",
	"font-code",
	"heading-weight",
	"heading-case",
	"heading-tracking",
	"heading-style",
]

const failures = []
for (const file of files) {
	const clash = Object.keys((await Bun.file(path.join(root, "src/styles", file)).json()).tokens).filter(
		(name) => reserved.includes(name),
	)
	if (clash.length) failures.push(`${file}\npigment names reserved by theme.ts: ${clash.join(", ")}`)
	const run = Bun.spawnSync(["uv", "run", "-q", palette, path.join(root, "src/styles", file), "/dev/null"])
	if (run.exitCode !== 0) failures.push(`${file}\n${run.stdout.toString().split("PROBLEMS:")[1]?.trim()}`)
}
console.log(`${files.length - failures.length} of ${files.length} palettes pass`)
if (failures.length) {
	console.error(failures.join("\n\n"))
	process.exit(1)
}
