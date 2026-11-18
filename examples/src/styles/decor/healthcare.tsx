// [Agent] Ported from the hand-drawn specimen: a soft flat clinician in a rounded mist panel (standing in for the
// category's smiling-doctor photo), a heartbeat chip, and the three reassurance badges (secure, private, 24/7) that
// sit under the call to action.
export default function Healthcare() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-9 left-[470px] h-[428px] w-[300px] overflow-hidden rounded-[28px] bg-[var(--mist)]">
				<svg width="300" height="428" viewBox="0 0 300 428">
					<g transform="translate(0 -28)">
						<circle cx="160" cy="176" r="118" fill="var(--haze)" />
						<circle cx="160" cy="176" r="84" fill="var(--blush)" />
						<path
							d="M40 470 C 44 330 90 296 160 292 C 230 296 276 330 280 470 Z"
							fill="var(--linen)"
							stroke="var(--haze)"
							strokeWidth="2"
						/>
						<path d="M128 296 L160 360 L192 296 C 180 292 140 292 128 296 Z" fill="var(--teal)" />
						<path
							d="M128 296 L112 312 L150 392 L160 360 Z M192 296 L208 312 L170 392 L160 360 Z"
							fill="oklch(0.95 0.008 200)"
						/>
						<rect x="146" y="246" width="28" height="50" rx="12" fill="oklch(0.74 0.07 55)" />
						<ellipse cx="160" cy="206" rx="46" ry="52" fill="oklch(0.80 0.07 60)" />
						<path
							d="M112 206 C 106 150 140 136 166 140 C 196 144 214 166 208 206 C 204 184 190 172 172 170 C 150 168 124 178 112 206 Z"
							fill="var(--deep)"
						/>
						<circle cx="143" cy="210" r="3.2" fill="var(--deep)" />
						<circle cx="177" cy="210" r="3.2" fill="var(--deep)" />
						<g fill="none" stroke="var(--deep)" strokeLinecap="round">
							<path d="M146 230 q14 11 28 0" strokeWidth="3" />
							<path
								d="M134 300 C 128 336 140 354 156 356 M186 300 C 192 336 178 354 162 356"
								strokeWidth="3.5"
							/>
							<circle cx="210" cy="356" r="9" strokeWidth="3.5" />
							<path d="M159 356 C 170 372 196 376 202 362" strokeWidth="3.5" />
						</g>
					</g>
				</svg>
			</div>
			<div className="absolute top-[66px] left-[650px] flex items-center gap-2 rounded-full bg-[var(--linen)] py-2 pr-3 pl-2 shadow-[0_4px_16px_oklch(0.30_0.05_230/0.10)]">
				<svg width="26" height="26" viewBox="0 0 26 26">
					<circle cx="13" cy="13" r="13" fill="var(--mist)" />
					<path
						d="M6 13.5h3.5l2-4 3 8 2-4H20"
						fill="none"
						stroke="var(--coral)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<i className="block h-1.5 w-[46px] rounded-[3px] bg-[var(--haze)]" />
			</div>
			<div className="absolute top-[404px] left-[52px] flex gap-2.5 *:grid *:size-[38px] *:place-items-center *:rounded-full *:bg-[var(--mist)]">
				<span>
					<svg
						width="18"
						height="20"
						viewBox="0 0 22 24"
						fill="none"
						stroke="var(--teal)"
						strokeWidth="2"
						strokeLinejoin="round"
					>
						<path d="M11 2 3 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z" />
						<path d="m7.5 12 2.5 2.5 4.5-5" strokeLinecap="round" />
					</svg>
				</span>
				<span>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--teal)"
						strokeWidth="2"
						strokeLinecap="round"
					>
						<rect x="5" y="10" width="14" height="11" rx="2" />
						<path d="M8 10V7a4 4 0 0 1 8 0v3" />
					</svg>
				</span>
				<span>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--teal)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="9" />
						<path d="M12 7v5l3 2" />
					</svg>
				</span>
			</div>
		</div>
	)
}
