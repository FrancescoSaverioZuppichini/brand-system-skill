import type { CSSProperties, ReactNode } from "react"
import { stat } from "@/demo/content"

// [Agent] The motion family's still frame is a diagram: the easing curve, its tokens and a five-frame strip of the
// number card entering. The diagram lives here and the other six motion styles feed it their curve and frames.

const left = 44
const right = 326
const top = 16
const bottom = 150
export const moments = [0, 0.25, 0.5, 0.75, 1]
export const px = (x: number) => left + x * (right - left)
export const py = (y: number, lo = 0, hi = 1.2) => bottom - ((y - lo) / (hi - lo)) * (bottom - top)
export const sample = (ease: (t: number) => number, steps = 200) =>
	Array.from({ length: steps + 1 }, (_, i): [number, number] => [i / steps, ease(i / steps)])

// [Agent] CSS cubic-bezier as a function of time: bisect the x polynomial for t, then read y there.
export function bezier(x1: number, y1: number, x2: number, y2: number) {
	const at = (a: number, b: number, s: number) => 3 * a * s * (1 - s) ** 2 + 3 * b * s * s * (1 - s) + s ** 3
	return (t: number) => {
		let lo = 0
		let hi = 1
		for (let i = 0; i < 40; i++) {
			const mid = (lo + hi) / 2
			if (at(x1, x2, mid) < t) lo = mid
			else hi = mid
		}
		return at(y1, y2, (lo + hi) / 2)
	}
}

type Plot = {
	points: [number, number][]
	ghost?: [number, number][]
	dots: [number, number][]
	open?: [number, number][]
	xticks: string[]
	xlabel?: string
	ylabel?: string
	yticks?: [number, string][]
	grid?: number[]
	target?: number
	lo?: number
	hi?: number
	children?: ReactNode
}

export type Frame = {
	caption: [string, string]
	card?: CSSProperties
	lines?: CSSProperties[]
	slot?: CSSProperties
	stage?: CSSProperties
	back?: ReactNode
	front?: ReactNode
}

function Curve({
	points,
	ghost,
	dots,
	open = [],
	xticks,
	xlabel = "time",
	ylabel = "progress",
	yticks = [
		[0, "0"],
		[1, "1"],
	],
	grid = [0, 0.25, 0.5, 0.75, 1],
	target = 1,
	lo = 0,
	hi = 1.2,
	children,
}: Plot) {
	const y = (value: number) => py(value, lo, hi)
	const line = (list: [number, number][]) =>
		`M${list.map(([a, b]) => `${px(a).toFixed(1)} ${y(b).toFixed(1)}`).join(" L")}`
	return (
		<svg className="absolute top-[131px] left-8 h-[186px] w-[340px] overflow-visible" viewBox="0 0 340 186">
			{children}
			<g stroke="var(--hairline)">
				{moments.map((t) => (
					<line key={t} x1={px(t)} y1={top} x2={px(t)} y2={bottom} />
				))}
				{grid.map((value) => (
					<line key={value} x1={left} y1={y(value)} x2={right} y2={y(value)} />
				))}
			</g>
			<path d={`M${left} ${top}V${bottom}H${right}`} fill="none" stroke="var(--pencil)" />
			<line x1={left} y1={y(target)} x2={right} y2={y(target)} stroke="var(--shade)" strokeDasharray="2 3" />
			<g className="fill-[var(--pencil)] font-mono text-[9.5px]">
				{yticks.map(([value, label]) => (
					<text key={label} x={left - 8} y={y(value) + 3.5} textAnchor="end">
						{label}
					</text>
				))}
				{xticks.map((label, index) => (
					<text
						key={label}
						x={px(index / 4)}
						y={bottom + 15}
						textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"}
					>
						{label}
					</text>
				))}
			</g>
			<g className="fill-[var(--graphite)] font-mono text-[10px]">
				<text x={right} y={bottom + 31} textAnchor="end">
					{xlabel} →
				</text>
				<text transform={`translate(12 ${(top + bottom) / 2}) rotate(-90)`} textAnchor="middle">
					{ylabel}
				</text>
			</g>
			{ghost && (
				<path
					d={line(ghost)}
					fill="none"
					stroke="var(--pencil)"
					strokeWidth="1.25"
					strokeDasharray="4 3"
					opacity=".6"
				/>
			)}
			<path
				d={line(points)}
				fill="none"
				stroke="var(--cobalt)"
				strokeWidth="2.25"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
			<g stroke="var(--cobalt)" fill="var(--sheet)">
				{dots.map(([t, value]) => (
					<line key={t} x1={px(t)} y1={y(value)} x2={px(t)} y2={bottom} strokeDasharray="2 2" opacity=".35" />
				))}
				{open.map(([t, value]) => (
					<circle key={t} cx={px(t)} cy={y(value)} r="3" strokeWidth="1.25" opacity=".6" />
				))}
				{dots.map(([t, value]) => (
					<circle key={t} cx={px(t)} cy={y(value)} r="3.5" strokeWidth="2" />
				))}
			</g>
		</svg>
	)
}

export function Track({
	bars,
	kind = "rest",
	label,
	at = 0,
	inside,
}: {
	bars: [number, number][]
	kind?: "rest" | "on" | "cut" | "loop"
	label?: string
	at?: number
	inside?: boolean
}) {
	const fill = {
		rest: "bg-[var(--shade)]",
		on: "bg-[var(--cobalt)]",
		cut: "bg-[var(--cobalt)] !w-0.5",
		loop: "bg-[repeating-linear-gradient(90deg,var(--cobalt)_0_6px,var(--tint)_6px_10px)]",
	}[kind]
	return (
		<span className="relative h-2.5 rounded-[2px] bg-[var(--panel)]">
			{bars.map(([start, width]) => (
				<i
					key={start}
					className={`absolute inset-y-0 rounded-[2px] ${fill}`}
					style={{ left: `${start}%`, width: `${width}%` }}
				/>
			))}
			{label && (
				<em
					className={`absolute -top-px font-mono text-[9.5px] leading-3 not-italic ${inside ? "text-white" : "text-[var(--pencil)]"}`}
					style={{ left: `calc(${at}% + ${kind === "cut" ? 10 : 6}px)` }}
				>
					{label}
				</em>
			)}
		</span>
	)
}

export function Scale({ marks = ["0", "250", "500", "750", "1000 ms"] }: { marks?: string[] }) {
	return (
		<span className="flex justify-between font-mono text-[9px] leading-none text-[var(--pencil)]">
			{marks.map((mark) => (
				<b key={mark} className="font-normal">
					{mark}
				</b>
			))}
		</span>
	)
}

function Card({ style, lines = [] }: { style?: CSSProperties; lines?: CSSProperties[] }) {
	const small = "text-[8px] leading-[1.2] whitespace-nowrap text-[var(--pencil)]"
	return (
		<div
			className="absolute top-[34px] left-1.5 h-[62px] w-[122px] rounded-md border border-[var(--hairline)] bg-[var(--sheet)] px-[9px] py-2 text-[var(--graphite)] shadow-[0_6px_14px_-8px_oklch(0.3_0.03_260/0.35)]"
			style={style}
		>
			<p className={small} style={lines[0]}>
				{stat.label}
			</p>
			<p
				className="my-0.5 text-lg leading-[1.1] font-semibold tracking-[-0.02em] tabular-nums"
				style={lines[1]}
			>
				{stat.value}
			</p>
			<p className={small} style={lines[2]}>
				{stat.caption}
			</p>
		</div>
	)
}

// [Agent] The last frame draws no card: the specimen's real number card is placed over its slot by diagramCss.
export function MotionDiagram({
	plot,
	tokens,
	timeline,
	frames,
}: {
	plot: Plot
	tokens: string[]
	timeline: ReactNode
	frames: Frame[]
}) {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<i className="absolute inset-x-8 top-[116px] h-px bg-[var(--hairline)]" />
			<Curve {...plot} />
			<div className="absolute top-[137px] right-8 left-[396px] grid gap-3.5">
				<pre className="m-0 rounded-lg border border-[var(--hairline)] bg-[var(--panel)] px-3.5 py-2.5 font-mono text-[10.5px] leading-[1.6] whitespace-pre-wrap text-[var(--graphite)] first-line:text-[var(--cobalt)]">
					{tokens.join("\n")}
				</pre>
				<div className="grid gap-[7px]">{timeline}</div>
			</div>
			<div className="absolute inset-x-8 top-[331px] grid grid-cols-5 gap-3.5">
				{frames.map((frame, index) => (
					<figure key={frame.caption[0]} className="m-0">
						<div
							className="relative h-[130px] overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--panel)]"
							style={frame.stage}
						>
							{frame.back}
							<span
								className="absolute top-[34px] left-1.5 h-[62px] w-[122px] rounded-md border border-dashed border-[var(--shade)]"
								style={frame.slot}
							/>
							{index < frames.length - 1 && <Card style={frame.card} lines={frame.lines} />}
							{frame.front}
						</div>
						<figcaption className="mt-1.5 flex justify-between font-mono text-[9.5px] leading-none text-[var(--pencil)]">
							<span className="text-[var(--graphite)]">{frame.caption[0]}</span>
							<span>{frame.caption[1]}</span>
						</figcaption>
					</figure>
				))}
			</div>
		</div>
	)
}

// [Agent] Puts the real hero parts into the diagram: copy as the title block, button at its right, logo above the
// button, and the number card in the last frame's slot.
export const diagramCss = `
	[data-part=nav] { position: absolute; top: 0; right: 32px; }
	[data-part=nav] header { padding: 18px 0; }
	[data-part=nav] header > span { font-size: 15px; }
	[data-part=nav] [data-slot=button] { display: none; }
	[data-part=body] { padding: 22px 32px 0; align-items: flex-start; }
	[data-part=copy] { gap: 0; }
	[data-part=kicker] { font-family: var(--font-code); font-size: 11px; line-height: 1; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
	[data-part=headline] { font-size: 20px; line-height: 1.2; margin: 6px 0 5px; }
	[data-part=sub] { max-width: 310px; font-size: 11.5px; line-height: 1.45; }
	[data-part=button] { position: absolute; top: 70px; right: 32px; height: auto; padding: 8px 13px; font-size: 12px; }
	[data-part=button] svg { display: none; }
	[data-part=card] { position: absolute; left: 639px; top: 366px; width: 122px; height: 62px; padding: 8px 9px; gap: 0; border-radius: 6px; box-shadow: 0 6px 14px -8px oklch(0.3 0.03 260 / 0.35); }
	[data-part=card] > div { padding: 0; gap: 0; }
	[data-part=label], [data-part=caption] { font-size: 8px; line-height: 1.2; white-space: nowrap; }
	[data-part=number] { font-family: var(--font-body); font-size: 18px; line-height: 1.1; font-weight: 600; letter-spacing: -0.02em; margin: 2px 0 1px; }
	[data-part=chart] { display: none; }
`
