// [Agent] Ported from the hand-made specimen's canvas: a pear modelled as a solid of revolution and engraved by rule.
// Contour lines wrap the form as arcs and each short cut swells where the surface turns from the light, like a burin
// cutting deeper; cross-hatching only enters the deepest shade. Cuts are grouped into one path per line weight, so
// thousands of marks stay a handful of SVG elements.
const cx = 150
const y0 = 92
const y1 = 330
const maxR = 92
const light = [-0.6, -0.45, 0.66]

function bump(t: number, middle: number, width: number) {
	const u = (t - middle) / width
	return u * u < 1 ? Math.sqrt(1 - u * u) : 0
}

// [Agent] The pear's profile is a small bulb (the neck) and a big one (the body) blended with a 4-norm, so the waist
// between them stays smooth instead of pinching to a point.
function radius(y: number) {
	const t = (y - y0) / (y1 - y0)
	if (t < 0 || t > 1) return 0
	const neck = 0.46 * bump(t, 0.24, 0.26)
	const body = bump(t, 0.66, 0.34)
	return maxR * (neck ** 4 + body ** 4) ** 0.25
}

function shade(x: number, y: number) {
	const r = radius(y)
	if (r < 1) return -1
	const nx = (x - cx) / r
	if (nx * nx >= 1) return -1
	const slope = (radius(y + 1) - radius(y - 1)) / 2
	const n = [nx, -slope * 0.9, Math.sqrt(1 - nx * nx)]
	return Math.max(0, (n[0] * light[0] + n[1] * light[1] + n[2] * light[2]) / Math.hypot(...n))
}

function engrave() {
	const cuts = new Map<string, string>()
	const cut = (width: number, d: string) => {
		const key = width.toFixed(1)
		cuts.set(key, (cuts.get(key) ?? "") + d)
	}
	for (let row = y0 - 4; row < y1 + 4; row += 3.4) {
		for (let x = cx - maxR; x < cx + maxR; x += 1.5) {
			const r = radius(row) || 1
			const nx = Math.min(1, Math.abs(x - cx) / r)
			const y = row + 0.18 * r * Math.sqrt(Math.max(0, 1 - nx * nx))
			const dark = 1 - shade(x, y)
			if (dark > 1 || dark < 0.22) continue
			cut(0.25 + 1.6 * dark * dark, `M${x.toFixed(1)} ${y.toFixed(1)}h1.6`)
		}
	}
	for (let k = -400; k < 400; k += 3.6) {
		for (let y = 0; y < 400; y += 1.5) {
			const x = k + y * 0.55
			const dark = 1 - shade(x, y)
			if (dark > 1 || dark < 0.62) continue
			cut(0.3 + 1.2 * (dark - 0.6), `M${x.toFixed(1)} ${y}l.8 1.4`)
		}
	}
	for (let y = y1 - 6; y < y1 + 22; y += 2.6) {
		const w = 120 * Math.sqrt(Math.max(0, 1 - ((y - y1 - 6) / 16) ** 2))
		const width = 0.4 + 0.9 * (1 - Math.abs(y - y1 - 4) / 18)
		cut(width, `M${(cx - w * 0.4 + 30).toFixed(1)} ${y.toFixed(1)}H${(cx + w + 30).toFixed(1)}`)
	}
	return [...cuts]
}

function silhouette() {
	const left: string[] = []
	const right: string[] = []
	for (let y = y0; y <= y1; y++) {
		left.push(`${(cx - radius(y)).toFixed(1)},${y}`)
		right.unshift(`${(cx + radius(y)).toFixed(1)},${y}`)
	}
	return [...left, ...right].join(" ")
}

const leaf = "M154 72C190 22 260 28 278 42C246 84 184 90 154 72Z"
const underside = "M154 72Q216 46 278 42C246 84 184 90 154 72Z"

export default function Engraving() {
	const outline = silhouette()
	return (
		<div
			aria-hidden="true"
			className="absolute top-[26px] left-[432px] h-[446px] w-[330px] border border-[var(--ink)]"
		>
			<div className="absolute inset-[5px] border-2 border-[var(--ink)]" />
			<span className="absolute top-[14px] right-4 font-mono text-[10px] leading-none tracking-[0.1em]">
				PL. IV
			</span>
			<svg
				className="absolute top-[30px] left-[10px] h-[380px] w-[310px]"
				viewBox="0 0 310 380"
				fill="none"
				stroke="var(--ink)"
				strokeLinecap="round"
			>
				<defs>
					<clipPath id="underside">
						<path d={underside} />
					</clipPath>
				</defs>
				<g stroke="none" className="*:mix-blend-multiply">
					<polygon points={outline} fill="var(--sage)" opacity=".35" />
					<ellipse cx="184" cy="262" rx="46" ry="54" fill="var(--rose)" opacity=".16" />
				</g>
				{engrave().map(([width, d]) => (
					<path key={width} d={d} strokeWidth={width} />
				))}
				<polygon points={outline} strokeWidth=".9" />
				<path d="M152 96Q146 68 162 48" strokeWidth="3.2" />
				<path d={leaf} />
				<path d="M154 72Q216 46 278 42" />
				<g clipPath="url(#underside)" strokeWidth=".5">
					{Array.from({ length: 67 }, (_, i) => (
						<path key={i} d={`M${150 + i * 2.4} 32l-30 70`} />
					))}
				</g>
				<path d="M185 66.5l10-9M209.8 60.5l10-9M234.6 54.5l10-9M255.7 49.4l10-9" strokeWidth=".6" />
			</svg>
			<span className="absolute inset-x-0 bottom-4 text-center font-heading text-[14px] leading-none italic">
				Fig. 1.
			</span>
		</div>
	)
}
