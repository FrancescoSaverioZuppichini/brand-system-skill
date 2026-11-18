// [Agent] Runs the skill's palette.py on every style's colours, so `bun run colors` proves all themes pass contrast
// and sRGB the same way a brand's colors-in.json does.
import { readdir } from "node:fs/promises"
import path from "node:path"

const root = path.resolve(import.meta.dir, "..")
const palette = path.resolve(root, "../skills/brand-system/scripts/palette.py")
const files = (await readdir(path.join(root, "src/styles"))).filter((file) => file.endsWith(".json")).sort()

const failures = []
for (const file of files) {
	const run = Bun.spawnSync(["uv", "run", "-q", palette, path.join(root, "src/styles", file), "/dev/null"])
	if (run.exitCode !== 0) failures.push(`${file}\n${run.stdout.toString().split("PROBLEMS:")[1]?.trim()}`)
}
console.log(`${files.length - failures.length} of ${files.length} palettes pass`)
if (failures.length) {
	console.error(failures.join("\n\n"))
	process.exit(1)
}
