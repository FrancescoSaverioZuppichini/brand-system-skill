// [Agent] Ported from the hand-drawn specimen. The flat colour shapes sit slightly off the drawing on purpose (a
// misregistered fill, never a coloured-in outline), and the drawing is one path, one pen stroke: table, vase body, up
// the stem through every leaf loop, back down, and out along the table.
export default function LineArt() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-[26px] left-[440px]"
			width="308"
			height="360"
			viewBox="0 0 360 420"
		>
			<circle cx="214" cy="300" r="62" fill="var(--apricot)" opacity=".75" />
			<ellipse
				cx="112"
				cy="128"
				rx="30"
				ry="14"
				transform="rotate(28 112 128)"
				fill="var(--sage)"
				opacity=".55"
			/>
			<path
				fill="none"
				stroke="var(--ink)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M20 380H140C100 340 100 270 160 230C168 222 166 214 152 206C160 203 170 202 178 204 C172 186 170 172 174 160C150 160 126 150 120 130C140 126 166 138 174 156 C172 140 176 128 182 116C204 120 230 116 240 96C220 92 192 100 184 112 C186 100 188 90 190 80C176 78 156 70 148 52C166 50 186 60 192 76 C196 62 200 52 206 42C204 32 206 24 214 16C218 28 214 38 208 46 C196 90 178 150 184 204C192 202 200 203 208 206C194 214 192 222 200 230 C260 270 260 340 220 380H340"
			/>
		</svg>
	)
}
