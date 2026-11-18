// [Agent] Ported from the hand-made specimen: a lit sphere ray-cast once per character cell, its darkness picking a glyph
// from the ramp (ink on paper, so light means sparse). JetBrains Mono advances 0.6em, so a cell is 0.6 × 1 of the font
// size, and line-height 1 makes the rows touch so the ramp reads as tone. Runs of one colour share a span.
const ramp = " .:-=+*#%@"
const size = 11
const cols = 62
const rows = 44
const cw = size * 0.6
const width = cols * cw
const cx = width * 0.5
const cy = rows * size * 0.44
const r = width * 0.36
const floor = cy + r
const lightLength = Math.hypot(-0.5, -0.65, 0.58)
const [lx, ly, lz] = [-0.5 / lightLength, -0.65 / lightLength, 0.58 / lightLength]

type Kind = "ink" | "spec" | "dim"

function glyph(x: number, y: number, i: number, j: number): [Kind, string] {
	const nx = (x - cx) / r
	const ny = (y - cy) / r
	const q = nx * nx + ny * ny
	if (q < 1) {
		const nz = Math.sqrt(1 - q)
		const d = nx * lx + ny * ly + nz * lz
		const spec = Math.max(0, 2 * d * nz - lz) ** 60
		const v = Math.max(0, Math.min(1, 0.08 + 0.85 * Math.max(0, d) + 0.04 * (1 - nz)))
		return spec > 0.6 ? ["spec", "+"] : ["ink", ramp[Math.max(1, Math.floor((1 - v) * 9.99))]]
	}
	const sx = (x - cx - r * 0.35) / (r * 1.15)
	const sy = (y - floor) / (r * 0.16)
	const s = sx * sx + sy * sy
	if (y > floor - r * 0.12 && s < 1) return ["dim", ramp[1 + Math.floor((1 - s) * 5)]]
	return ["dim", y > floor - r * 0.05 && (i + j) % 4 === 0 ? "." : " "]
}

function render() {
	return Array.from({ length: rows }, (_, j) => {
		const runs: [Kind, string][] = []
		for (let i = 0; i < cols; i++) {
			const [kind, char] = glyph((i + 0.5) * cw, (j + 0.5) * size, i, j)
			const last = runs[runs.length - 1]
			if (last && (last[0] === kind || char === " ")) last[1] += char
			else runs.push([kind, char])
		}
		return runs
	})
}

const tint = { ink: "", spec: "text-[var(--rust)]", dim: "text-[var(--dim)]" }

export default function AsciiArt() {
	return (
		<pre
			aria-hidden="true"
			className="absolute top-[10px] left-[380px] m-0 font-mono text-[11px] leading-none tracking-normal whitespace-pre text-[var(--ink)] [font-variant-ligatures:none]"
		>
			{render().map((runs, j) => (
				<span key={j}>
					{runs.map(([kind, text], i) => (
						<span key={i} className={tint[kind]}>
							{text}
						</span>
					))}
					{"\n"}
				</span>
			))}
		</pre>
	)
}
