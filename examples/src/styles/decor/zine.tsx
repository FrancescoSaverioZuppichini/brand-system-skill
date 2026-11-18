import { useLayoutEffect, useState } from "react"

type Tile = { x: number; y: number; width: number; height: number; index: number }

// [Agent] Ransom-note headline with live text: once the fonts are in, every letter of the real headline is measured
// (a Range per character) and gets its own scrap of paper behind it, rotated and coloured by its index. Inverse scraps
// are a white sheet laid over the letter in difference mode, which turns the black letter white and its scrap black.
function measure() {
	const frame = document.querySelector("[data-part=frame]")?.getBoundingClientRect()
	const headline = document.querySelector("[data-part=headline]")
	if (!frame || !headline) return []
	const tiles: Tile[] = []
	const walker = document.createTreeWalker(headline, NodeFilter.SHOW_TEXT)
	const range = document.createRange()
	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		for (let i = 0; i < (node.textContent ?? "").length; i++) {
			if (!node.textContent?.[i].trim()) continue
			range.setStart(node, i)
			range.setEnd(node, i + 1)
			const box = range.getBoundingClientRect()
			tiles.push({
				x: box.left - frame.left,
				y: box.top - frame.top,
				width: box.width,
				height: box.height,
				index: tiles.length,
			})
		}
	}
	return tiles
}

const inverse = (index: number) => index % 4 === 1
// [Agent] A highlighter scrap never touches an inverse one: the difference sheet would turn its overlap blue.
const paper = (index: number) =>
	inverse(index)
		? "var(--scrap)"
		: (index % 5 === 2 || index % 7 === 4) && !inverse(index - 1) && !inverse(index + 1)
			? "var(--highlighter)"
			: index % 3 === 0
				? "var(--smear)"
				: "var(--scrap)"
const place = ({ x, y, width, height, index }: Tile, pad = 5) => ({
	left: x - pad,
	top: y + ((index * 13) % 7) - 3,
	width: width + pad * 2,
	height,
	transform: `rotate(${((index * 37) % 11) - 5}deg)`,
})

export default function Zine() {
	const [tiles, setTiles] = useState<Tile[]>([])
	// [Agent] Measure again whenever a font finishes loading: fonts.ready can resolve before the style's fonts were even
	// requested, and the letters move when the real faces replace the fallback.
	useLayoutEffect(() => {
		const update = () => setTiles(measure())
		document.fonts.ready.then(update)
		document.fonts.addEventListener("loadingdone", update)
		return () => document.fonts.removeEventListener("loadingdone", update)
	}, [])
	return (
		<div aria-hidden="true" className="absolute inset-0">
			{tiles.map((tile) => (
				<span
					key={tile.index}
					className="absolute shadow-[0_1px_0_var(--grey)]"
					style={{ ...place(tile), background: paper(tile.index) }}
				/>
			))}
			{tiles
				.filter((tile) => inverse(tile.index))
				.map((tile) => (
					<span
						key={tile.index}
						className="absolute z-10 bg-white mix-blend-difference"
						style={place(tile, 2)}
					/>
				))}
			<svg className="absolute top-[58px] left-10 h-3.5 w-[200px]" viewBox="0 0 200 14">
				<path
					d="M2 9 C40 3 90 12 140 6 S190 7 198 4"
					fill="none"
					stroke="var(--toner)"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</svg>
			<svg
				className="absolute top-[352px] left-[286px] h-[90px] w-[220px] overflow-visible"
				viewBox="0 0 220 90"
			>
				<path
					d="M214 10 C170 70 90 84 22 62 M22 62 l18 -14 M22 62 l20 8"
					fill="none"
					stroke="var(--toner)"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span className="absolute top-[146px] left-1.5 h-[30px] w-1 rounded-[1px] bg-[var(--grey)] shadow-[1px_0_0_oklch(0.4_0_0)]" />
			<span className="absolute top-[316px] left-1.5 h-[30px] w-1 rounded-[1px] bg-[var(--grey)] shadow-[1px_0_0_oklch(0.4_0_0)]" />
			<span className="absolute top-[238px] left-[220px] z-10 h-6 w-[86px] -rotate-6 bg-[oklch(0.9_0.02_90/0.72)] [clip-path:polygon(3%_0,97%_6%,100%_40%,96%_100%,2%_94%,0_55%)]" />
			<span className="absolute top-[238px] left-[600px] z-10 h-6 w-[86px] rotate-[8deg] bg-[oklch(0.9_0.02_90/0.72)] [clip-path:polygon(3%_0,97%_6%,100%_40%,96%_100%,2%_94%,0_55%)]" />
			{/* [Agent] Photocopier toner: noise thresholded to sparse specks, two drum streaks, and dark edges where the lid
			    did not close. */}
			<svg className="pointer-events-none absolute inset-0 z-20 size-full mix-blend-multiply">
				<filter id="toner">
					<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="3" />
					<feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 18 -13.9" />
				</filter>
				<rect width="100%" height="100%" filter="url(#toner)" />
			</svg>
			<div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(transparent_118px,oklch(0.15_0_0/0.08)_118px_120px,transparent_120px_431px,oklch(0.15_0_0/0.1)_431px_434px,transparent_434px)] shadow-[inset_0_0_70px_oklch(0.15_0_0/0.28),inset_0_0_8px_oklch(0.15_0_0/0.5)] mix-blend-multiply" />
		</div>
	)
}
