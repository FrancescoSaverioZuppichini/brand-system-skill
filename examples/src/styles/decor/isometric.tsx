const faces: [string, string][] = [
	["deck-top", "230.0,57.0 410.1,161.0 230.0,265.0 49.9,161.0"],
	["deck-left", "49.9,174.0 230.0,278.0 230.0,265.0 49.9,161.0"],
	["deck-right", "410.1,174.0 230.0,278.0 230.0,265.0 410.1,161.0"],
	["top", "329.1,20.6 378.6,49.2 329.1,77.8 279.5,49.2"],
	["left", "279.5,158.4 329.1,187.0 329.1,77.8 279.5,49.2"],
	["right", "378.6,158.4 329.1,187.0 329.1,77.8 378.6,49.2"],
	["top", "157.9,93.4 225.5,132.4 157.9,171.4 90.4,132.4"],
	["left", "90.4,148.0 157.9,187.0 157.9,171.4 90.4,132.4"],
	["right", "225.5,148.0 157.9,187.0 157.9,171.4 225.5,132.4"],
	["top", "157.9,64.8 225.5,103.8 157.9,142.8 90.4,103.8"],
	["left", "90.4,119.4 157.9,158.4 157.9,142.8 90.4,103.8"],
	["right", "225.5,119.4 157.9,158.4 157.9,142.8 225.5,103.8"],
	["amber", "157.9,36.2 225.5,75.2 157.9,114.2 90.4,75.2"],
	["amber-left", "90.4,90.8 157.9,129.8 157.9,114.2 90.4,75.2"],
	["amber-right", "225.5,90.8 157.9,129.8 157.9,114.2 225.5,75.2"],
	["amber", "209.7,112.9 218.7,118.1 209.7,123.3 200.7,118.1"],
	["amber-left", "200.7,128.5 209.7,133.7 209.7,123.3 200.7,118.1"],
	["amber-right", "218.7,128.5 209.7,133.7 209.7,123.3 218.7,118.1"],
	["amber", "266.0,114.2 275.0,119.4 266.0,124.6 257.0,119.4"],
	["amber-left", "257.0,129.8 266.0,135.0 266.0,124.6 257.0,119.4"],
	["amber-right", "275.0,129.8 266.0,135.0 266.0,124.6 275.0,119.4"],
	["deck-top", "234.5,163.6 261.5,179.2 234.5,194.8 207.5,179.2"],
	["deck-left", "207.5,210.4 234.5,226.0 234.5,194.8 207.5,179.2"],
	["deck-right", "261.5,210.4 234.5,226.0 234.5,194.8 261.5,179.2"],
	["top", "261.5,194.8 288.5,210.4 261.5,226.0 234.5,210.4"],
	["left", "234.5,226.0 261.5,241.6 261.5,226.0 234.5,210.4"],
	["right", "288.5,226.0 261.5,241.6 261.5,226.0 288.5,210.4"],
	["top", "207.5,194.8 234.5,210.4 207.5,226.0 180.5,210.4"],
	["left", "180.5,226.0 207.5,241.6 207.5,226.0 180.5,210.4"],
	["right", "234.5,226.0 207.5,241.6 207.5,226.0 234.5,210.4"],
	["amber", "234.5,148.0 261.5,163.6 234.5,179.2 207.5,163.6"],
	["amber-left", "207.5,179.2 234.5,194.8 234.5,179.2 207.5,163.6"],
	["amber-right", "261.5,179.2 234.5,194.8 234.5,179.2 261.5,163.6"],
]
const slots = [
	[371.9, 146.7, 335.8, 167.5],
	[371.9, 131.1, 335.8, 151.9],
	[371.9, 115.5, 335.8, 136.3],
	[371.9, 99.9, 335.8, 120.7],
	[371.9, 84.3, 335.8, 105.1],
	[371.9, 68.7, 335.8, 89.5],
]
const leds = [
	[332.5, 166.3],
	[332.5, 150.7],
	[332.5, 135.1],
	[332.5, 119.5],
	[332.5, 103.9],
	[332.5, 88.3],
]
const pipe = "M191.7 138.9 L236.8 112.9 L297.5 148.0"

// [Agent] Ported from the hand-drawn specimen: a platform, a server tower with rack slots and LEDs, a stack of layers
// capped in the accent, a dashed pipe carrying two packets, and a small cube cluster. Each block is three faces of one
// hue (top light, left mid, right dark), depth by face shading only. Faces before the pipe are drawn first so the
// packets sit on top of it.
export default function Isometric() {
	const face = ([fill, points]: [string, string]) => (
		<polygon key={points} points={points} fill={`var(--${fill})`} />
	)
	return (
		<svg
			aria-hidden="true"
			className="absolute top-12 left-[372px]"
			width="420"
			height="323"
			viewBox="40 0 390 300"
		>
			<g stroke="var(--drafting)" strokeWidth=".6" strokeLinejoin="round">
				{faces.slice(0, 15).map(face)}
			</g>
			<g stroke="var(--left)" strokeWidth="2">
				{slots.map(([x1, y1, x2, y2]) => (
					<line key={y1} x1={x1} y1={y1} x2={x2} y2={y2} />
				))}
			</g>
			<g fill="var(--amber)">
				{leds.map(([cx, cy]) => (
					<circle key={cy} cx={cx} cy={cy} r="2.2" />
				))}
			</g>
			<path
				d={pipe}
				fill="none"
				stroke="var(--amber)"
				strokeWidth="4"
				strokeDasharray="2 6"
				strokeLinecap="round"
			/>
			<g stroke="var(--drafting)" strokeWidth=".6" strokeLinejoin="round">
				{faces.slice(15).map(face)}
			</g>
		</svg>
	)
}
