// [Agent] Screenshots for the atlas, from the running app. Starts its own Vite server and drives the installed Chrome.
//   bun scripts/shoot.ts specimens [slug…]           → atlas/<slug>.jpg, 800×500, under 120 KB
//   bun scripts/shoot.ts blocks [section|id…]        → atlas/blocks/<section>/<variant>.jpg (1440) and <variant>-390.jpg
//   bun scripts/shoot.ts sheets [section…]           → atlas/blocks/sheets/<section>.jpg, from the block shots
//   bun scripts/shoot.ts landings [name…]            → atlas/blocks/landings/<name>.jpg
// Flags: --style=<slug> shoots blocks in another style (default shadcn); --out=<dir> writes there instead of atlas/.
import { mkdir, readdir, stat } from "node:fs/promises"
import path from "node:path"
import { chromium, type Browser, type Page } from "playwright-core"
import { createServer } from "vite"
import { landings } from "../src/landings"

const root = path.resolve(import.meta.dir, "..")
const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"))
const flags = Object.fromEntries(
	process.argv
		.slice(2)
		.filter((arg) => arg.startsWith("--"))
		.map((arg) => arg.slice(2).split("=")),
)
const [kind, ...filters] = args
const atlas = path.resolve(flags.out ?? path.join(root, "../atlas"))
const style = flags.style ?? "shadcn"

type Shot = {
	url: string
	out: string
	width: number
	height?: number
	scale?: number
	quality?: number
	maxBytes?: number
}

function matches(id: string) {
	return filters.length === 0 || filters.some((filter) => id === filter || id.startsWith(`${filter}/`))
}

async function listBlocks() {
	const dir = path.join(root, "src/blocks")
	const sections = await readdir(dir)
	const files = await Promise.all(
		sections.map(async (section) =>
			(await readdir(path.join(dir, section))).map((file) => `${section}/${file.slice(0, -4)}`),
		),
	)
	return files.flat().filter(matches).sort()
}

async function listStyles() {
	const files = await readdir(path.join(root, "src/styles"))
	return files
		.filter((file) => file.endsWith(".ts"))
		.map((file) => file.slice(0, -3))
		.filter(matches)
		.sort()
}

// [Agent] A font counts as missing when the page sets text in a family that has no loaded FontFace: a Google Fonts
// request that failed leaves no face at all, so checking document.fonts.ready alone would pass with a fallback.
async function missingFonts(page: Page) {
	return page.evaluate(async () => {
		await document.fonts.ready
		const generic =
			/^(serif|sans-serif|monospace|system-ui|ui-.*|-apple-system|Helvetica|Arial|Times|Georgia|Menlo|Courier)/i
		const used = new Set(
			[...document.querySelectorAll("body *")]
				.filter((element) => element.childNodes.length && (element as HTMLElement).innerText?.trim())
				.map((element) => getComputedStyle(element).fontFamily.split(",")[0].trim().replace(/["']/g, "")),
		)
		const loaded = new Set(
			[...document.fonts]
				.filter((face) => face.status === "loaded")
				.map((face) => face.family.replace(/["']/g, "")),
		)
		return [...used].filter((family) => !generic.test(family) && !loaded.has(family))
	})
}

async function shoot(browser: Browser, shot: Shot) {
	const page = await browser.newPage({
		viewport: { width: shot.width, height: shot.height ?? 900 },
		deviceScaleFactor: shot.scale ?? 1,
	})
	try {
		await page.goto(shot.url, { waitUntil: "networkidle" })
		let missing = await missingFonts(page)
		if (missing.length) {
			await page.reload({ waitUntil: "networkidle" })
			missing = await missingFonts(page)
		}
		if (missing.length) throw new Error(`FONTS MISSING: ${missing.join(", ")} on ${shot.url}`)
		const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
		if (overflow > 0) console.warn(`OVERFLOW ${overflow}px: ${shot.url} at ${shot.width}`)
		await mkdir(path.dirname(shot.out), { recursive: true })
		// [Agent] Full-page shots are clipped to the app's own height, so a block shorter than the window gets no blank tail.
		const height =
			shot.height ??
			(await page.evaluate(() =>
				Math.ceil(document.getElementById("root")?.getBoundingClientRect().height ?? 0),
			))
		// [Agent] Step the JPEG quality down until the file fits its budget (specimens must stay under 120 KB).
		for (const quality of [shot.quality ?? 85, 75, 65, 55]) {
			await page.screenshot({
				path: shot.out,
				type: "jpeg",
				quality,
				fullPage: true,
				clip: { x: 0, y: 0, width: shot.width, height },
			})
			if (!shot.maxBytes || (await stat(shot.out)).size <= shot.maxBytes) break
		}
		console.log(path.relative(atlas, shot.out))
	} finally {
		await page.close()
	}
}

async function sheet(browser: Browser, section: string) {
	const dir = path.join(atlas, "blocks", section)
	const ids = (await readdir(dir))
		.filter((file) => file.endsWith(".jpg") && !file.endsWith("-390.jpg"))
		.sort()
	const src = async (file: string) =>
		`data:image/jpeg;base64,${Buffer.from(await Bun.file(path.join(dir, file)).arrayBuffer()).toString("base64")}`
	const tiles = await Promise.all(
		ids.map(async (file) => {
			const name = file.slice(0, -4)
			return `<figure><figcaption>${section}/${name}</figcaption><div><img class="d" src="${await src(file)}"><img class="m" src="${await src(`${name}-390.jpg`)}"></div></figure>`
		}),
	)
	const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
	await page.setContent(`<style>
		body { margin: 0; padding: 24px; background: #e9e9e7; font: 500 15px ui-monospace, Menlo, monospace; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
		figure { margin: 0; } figcaption { margin-bottom: 8px; color: #333; }
		div { display: flex; gap: 12px; align-items: flex-start; } img { display: block; box-shadow: 0 0 0 1px #0002; }
		.d { width: 560px; } .m { width: 180px; }
	</style>${tiles.join("")}`)
	const out = path.join(atlas, "blocks/sheets", `${section}.jpg`)
	await mkdir(path.dirname(out), { recursive: true })
	await page.screenshot({ path: out, type: "jpeg", quality: 62, fullPage: true })
	await page.close()
	console.log(path.relative(atlas, out))
}

async function pool<T>(items: T[], size: number, run: (item: T) => Promise<void>) {
	const queue = [...items]
	const failures: string[] = []
	await Promise.all(
		Array.from({ length: size }, async () => {
			for (let item = queue.shift(); item !== undefined; item = queue.shift()) {
				await run(item).catch((error: Error) => failures.push(error.message))
			}
		}),
	)
	return failures
}

const server = await createServer({
	root,
	logLevel: "error",
	server: { port: 5300 + Math.floor(Math.random() * 600) },
})
await server.listen()
const base = (server.resolvedUrls?.local[0] ?? "").replace(/\/$/, "")
const browser = await chromium.launch({ channel: "chrome" })

let failures: string[] = []
if (kind === "specimens") {
	const shots = (await listStyles()).map((slug) => ({
		url: `${base}/specimen/${slug}`,
		out: path.join(atlas, `${slug}.jpg`),
		width: 800,
		height: 500,
		maxBytes: 120_000,
	}))
	failures = await pool(shots, 4, (shot) => shoot(browser, shot))
} else if (kind === "blocks") {
	const shots = (await listBlocks()).flatMap((id) => [
		{
			url: `${base}/block/${id}?style=${style}`,
			out: path.join(atlas, "blocks", `${id}.jpg`),
			width: 1440,
			quality: 72,
		},
		{
			url: `${base}/block/${id}?style=${style}`,
			out: path.join(atlas, "blocks", `${id}-390.jpg`),
			width: 390,
			scale: 1.5,
			quality: 70,
		},
	])
	failures = await pool(shots, 4, (shot) => shoot(browser, shot))
} else if (kind === "sheets") {
	const sections = (await readdir(path.join(root, "src/blocks"))).filter(matches)
	failures = await pool(sections, 2, (section) => sheet(browser, section))
} else if (kind === "landings") {
	const names = Object.keys(landings).filter(matches)
	const shots = names.map((name) => ({
		url: `${base}/landing/${name}`,
		out: path.join(atlas, "blocks/landings", `${name}.jpg`),
		width: 1440,
		scale: 0.5,
	}))
	failures = await pool(shots, 2, (shot) => shoot(browser, shot))
} else {
	console.error(
		"usage: bun scripts/shoot.ts specimens|blocks|sheets|landings [filter…] [--style=slug] [--out=dir]",
	)
}

await browser.close()
await server.close()
if (failures.length) {
	console.error(failures.join("\n"))
	process.exit(1)
}
