const heart = "M1 0h2v1h-2zM4 0h2v1h-2zM0 1h7v2h-7zM1 3h5v1h-5zM2 4h3v1h-3zM3 5h1v1h-1z"
const star = "M2 0h1v1h-1zM1 1h3v1h-3zM0 2h5v1h-5zM1 3h3v1h-3zM2 4h1v1h-1z"
const sky = [
	[92, 70],
	[380, 40],
	[452, 120],
	[700, 168],
	[600, 300],
	[744, 260],
	[480, 228],
]

// [Agent] An 8 × 8 coin: brown rim, yellow face, one white shine column. Drawn at a multiple of 8 px so pixels stay square.
function Coin({ className }: { className: string }) {
	return (
		<svg viewBox="0 0 8 8" shapeRendering="crispEdges" className={`absolute w-8 ${className}`}>
			<path
				fill="var(--brown)"
				d="M2 0h4v1h-4zM1 1h1v1h-1zM6 1h1v1h-1zM0 2h1v4h-1zM7 2h1v4h-1zM1 6h1v1h-1zM6 6h1v1h-1zM2 7h4v1h-4z"
			/>
			<path fill="var(--yellow)" d="M2 1h4v1h-4zM1 2h6v4h-6zM2 6h4v1h-4z" />
			<path fill="var(--white)" d="M3 2h1v4h-1z" />
		</svg>
	)
}

// [Agent] Ported from the hand-made specimen: a starry night, a life bar of hearts, a selection cursor by the button, a
// hero sprite, a chest, coins and a grass-and-dirt tile floor. Every sprite is a viewBox in pixel units scaled by an
// integer, with crispEdges, so nothing antialiases. The coin by the number sits above the card.
export default function Pixel() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			{sky.map(([x, y]) => (
				<span key={x} className="absolute size-1 bg-[var(--white)] opacity-55" style={{ left: x, top: y }} />
			))}
			<svg viewBox="0 0 5 5" shapeRendering="crispEdges" className="absolute top-[60px] left-[428px] w-5">
				<path fill="var(--yellow)" d={star} />
			</svg>
			<svg viewBox="0 0 5 5" shapeRendering="crispEdges" className="absolute top-[216px] left-[664px] w-5">
				<path fill="var(--yellow)" d={star} />
			</svg>
			<svg viewBox="0 0 5 5" shapeRendering="crispEdges" className="absolute top-[176px] left-[540px] w-5">
				<path fill="var(--white)" d="M2 0h1v1h-1zM0 2h5v1h-5zM2 4h1v1h-1zM2 1h1v3h-1z" />
			</svg>
			<div className="absolute top-8 left-10 flex gap-2">
				{["--red", "--red", "--panel"].map((color, index) => (
					<svg key={index} viewBox="0 0 7 6" shapeRendering="crispEdges" className="w-7">
						<path fill={`var(${color})`} d={heart} />
						{color === "--red" && <path fill="var(--white)" d="M1 1h1v1h-1z" />}
					</svg>
				))}
			</div>
			<svg viewBox="0 0 5 7" shapeRendering="crispEdges" className="absolute top-[382px] left-10 w-5">
				<path fill="var(--yellow)" d="M0 0h1v7h-1zM1 1h1v5h-1zM2 2h1v3h-1zM3 3h1v1h-1z" />
			</svg>
			<svg viewBox="0 0 12 15" shapeRendering="crispEdges" className="absolute top-[376px] left-[592px] w-12">
				<path fill="var(--red)" d="M4 0h5v1h-5zM3 1h7v1h-7zM2 2h10v1h-10z" />
				<path fill="var(--brown)" d="M3 3h2v1h-2zM3 4h1v1h-1zM2 14h3v1h-3zM7 14h3v1h-3z" />
				<path
					fill="var(--skin)"
					d="M5 3h5v1h-5zM4 4h1v1h-1zM6 4h2v1h-2zM9 4h1v1h-1zM3 5h7v1h-7zM4 6h5v1h-5zM1 9h2v2h-2zM9 9h2v2h-2z"
				/>
				<path fill="var(--night)" d="M5 4h1v1h-1zM8 4h1v1h-1zM3 11h6v1h-6zM3 12h2v2h-2zM7 12h2v2h-2z" />
				<path fill="var(--blue)" d="M3 7h7v1h-7zM2 8h9v1h-9zM3 9h2v1h-2zM7 9h2v1h-2zM4 10h4v1h-4z" />
				<path fill="var(--yellow)" d="M5 9h2v1h-2z" />
			</svg>
			<svg viewBox="0 0 14 10" shapeRendering="crispEdges" className="absolute top-[396px] left-[668px] w-14">
				<path
					fill="var(--brown)"
					d="M2 0h10v1h-10zM1 1h1v1h-1zM12 1h1v1h-1zM0 2h1v7h-1zM13 2h1v7h-1zM1 4h5v1h-5zM8 4h5v1h-5zM1 9h12v1h-12z"
				/>
				<path fill="var(--orange)" d="M2 1h10v1h-10zM1 2h12v2h-12zM1 5h5v4h-5zM8 5h5v4h-5z" />
				<path fill="var(--yellow)" d="M6 4h2v3h-2z" />
			</svg>
			<Coin className="top-[328px] left-[680px]" />
			<Coin className="top-[300px] left-[724px]" />
			<Coin className="z-10 top-[73px] left-[542px]" />
			<svg
				viewBox="0 0 200 16"
				shapeRendering="crispEdges"
				className="absolute bottom-0 left-0 h-16 w-[800px]"
			>
				<defs>
					<pattern id="tile" width="16" height="16" patternUnits="userSpaceOnUse">
						<rect width="16" height="16" fill="var(--dirt)" />
						<path fill="var(--green)" d="M0 0h16v3h-16zM1 3h2v1h-2zM5 3h1v1h-1zM9 3h2v1h-2zM13 3h1v1h-1z" />
						<path fill="oklch(0.85 0.16 140)" d="M0 0h16v1h-16z" />
						<path
							fill="oklch(0.28 0.05 40)"
							d="M4 8h1v1h-1zM11 6h1v1h-1zM7 12h2v1h-2zM13 11h1v1h-1zM2 13h1v1h-1zM0 15h16v1h-16z"
						/>
					</pattern>
				</defs>
				<rect width="200" height="16" fill="url(#tile)" />
			</svg>
		</div>
	)
}
