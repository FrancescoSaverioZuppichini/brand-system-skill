// [Agent] Ported from the hand-made specimen. The ransom note is split in two: the headline text sits on a 44 px
// monospace grid, and this file glues one cut-out clipping under every letter cell (same rows, columns and 5-step
// colour cycle as the headline's text gradient in punk.ts), each tilted a little so the paste-up looks hand-made.
const cell = 44
const rows = [
	{ col: 0, letters: 4 },
	{ col: 1, letters: 9 },
	{ col: 0, letters: 6 },
	{ col: 5, letters: 4 },
]
const clippings = [
	"bg-[var(--toner)]",
	"bg-[var(--newsprint)]",
	"bg-[var(--fluo-pink)]",
	"bg-[var(--xerox)] outline-2 -outline-offset-2 outline-[var(--toner)]",
	"bg-[var(--xerox)] border-[3px] border-[var(--toner)]",
]
const tilts = ["-rotate-5", "rotate-4 translate-y-1", "-rotate-1 -translate-y-0.5"]
const torn =
	"polygon(0 1%, 22% 0, 41% 1.5%, 63% .3%, 86% 1.2%, 100% 0, 99% 12%, 100.5% 27%, 98.6% 40%, 100% 55%, 98.8% 70%, 100% 86%, 99% 100%, 78% 98.6%, 60% 100%, 37% 98.8%, 18% 100%, 0 99%, .8% 80%, 0 62%, 1% 44%, 0 25%)"

export default function Punk() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div
				className="absolute top-[22px] left-[26px] h-[456px] w-[520px] -rotate-[1.5deg] bg-[var(--xerox)]"
				style={{ clipPath: torn }}
			/>
			{rows.flatMap(({ col, letters }, row) =>
				Array.from({ length: letters }, (_, index) => (
					<span
						key={`${row}-${index}`}
						className={`absolute h-[56px] w-[42px] ${clippings[(col + index + 2 * row) % 5]} ${tilts[index % 3]}`}
						style={{ left: 54 + (col + index) * cell, top: 88 + row * 62 }}
					/>
				)),
			)}
			<div className="absolute top-[22px] left-[20px] h-[26px] w-[90px] -rotate-[38deg] bg-[oklch(0.92_0.02_90/.7)]" />
			<div className="absolute top-[440px] left-[470px] h-[26px] w-[90px] -rotate-[30deg] bg-[oklch(0.92_0.02_90/.7)]" />
			<div className="absolute top-[198px] left-[636px] z-10 h-[26px] w-[90px] rotate-[4deg] bg-[oklch(0.92_0.02_90/.7)]" />
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<path
					d="M610 60 C680 40 740 90 700 150 C690 166 676 178 664 190 M664 190 l2 -24 M664 190 l22 -6"
					fill="none"
					stroke="var(--xerox)"
					strokeWidth="5"
					strokeLinecap="round"
				/>
				<path
					d="M590 452 l150 -12 M596 466 l120 -6"
					stroke="var(--fluo-pink)"
					strokeWidth="6"
					strokeLinecap="round"
				/>
			</svg>
			{/* [Agent] Photocopy grit: fine noise thresholded into hard specks and laid over everything, text included. */}
			<svg className="pointer-events-none absolute inset-0 z-20 size-full opacity-50">
				<filter id="xerox">
					<feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="5" />
					<feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  16 0 0 0 -11.1" />
				</filter>
				<rect width="100%" height="100%" filter="url(#xerox)" />
			</svg>
		</div>
	)
}
