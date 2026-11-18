// [Agent] Ported from the hand-made specimen: four amorphous blobs, no straight edge anywhere, and the big tangerine one
// gets a face (eyes, smile, berry cheeks) so the shapes read as a friendly character, not decoration.
export default function Blob() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute *:overflow-visible">
			<svg viewBox="-10 25 380 365" className="top-9 left-[420px] w-[372px]">
				<path
					fill="var(--tangerine)"
					d="M359,187 C363,230 335,293 305,324 C276,355 232,385 184,374 C135,364 36,305 15,262 C-6,219 32,154 57,116 C82,79 126,44 164,35 C203,27 255,40 287,66 C320,91 356,144 359,187Z"
				/>
				<g fill="var(--ink)">
					<ellipse cx="160" cy="160" rx="9" ry="13" />
					<ellipse cx="236" cy="156" rx="9" ry="13" />
				</g>
				<path
					d="M168 206 Q 200 236 232 204"
					fill="none"
					stroke="var(--ink)"
					strokeWidth="8"
					strokeLinecap="round"
				/>
				<g fill="var(--berry)" opacity=".35">
					<ellipse cx="128" cy="196" rx="18" ry="10" />
					<ellipse cx="270" cy="190" rx="18" ry="10" />
				</g>
			</svg>
			<svg viewBox="15 5 96 112" className="top-1.5 left-[384px] w-[104px]">
				<path
					fill="var(--berry)"
					d="M109,59 C112,75 107,100 95,108 C84,116 54,117 41,108 C28,100 18,71 17,55 C16,39 23,19 34,12 C44,6 66,6 79,14 C91,22 107,44 109,59Z"
				/>
			</svg>
			<svg viewBox="2 5 76 67" className="top-[404px] left-[290px] w-16">
				<path
					fill="var(--tangerine)"
					d="M76,40 C75,50 57,64 48,68 C38,72 24,71 17,63 C10,55 2,29 8,20 C14,10 41,4 53,7 C64,10 77,30 76,40Z"
				/>
			</svg>
			<svg viewBox="12 -12 211 194" className="top-[300px] left-[456px] w-[280px]">
				<path
					fill="var(--lilac)"
					d="M221,72 C220,99 199,153 175,167 C150,181 99,168 72,156 C45,144 14,121 13,96 C12,70 39,18 67,3 C96,-13 156,-9 182,2 C207,14 222,45 221,72Z"
				/>
			</svg>
		</div>
	)
}
