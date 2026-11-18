// [Agent] Ported from the hand-made specimen: a Windows 11 bloom wallpaper, a Mica window (almost opaque, tinted by a
// heavy blur of the wallpaper) with caption buttons, a nav rail and a lighter content layer holding two placeholder
// cards, the toast's app icon, and the taskbar with its pinned apps and tray.
const ink = "var(--ink)"

function Mark({ size }: { size: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 16 16">
			<rect x="1" y="1" width="14" height="14" rx="3" fill="var(--communication-blue)" />
			<path d="M5 4v8M5 8l5-4M5 8l5 4" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
		</svg>
	)
}

export default function Fluent() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
				<linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stopColor="oklch(0.88 0.05 230)" />
					<stop offset="1" stopColor="var(--bloom)" />
				</linearGradient>
				<linearGradient id="petal" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stopColor="oklch(0.75 0.13 245)" />
					<stop offset="1" stopColor="oklch(0.4 0.2 262)" />
				</linearGradient>
				<filter id="soften">
					<feGaussianBlur stdDeviation="6" />
				</filter>
				<rect width="800" height="500" fill="url(#wall)" />
				<g filter="url(#soften)" transform="translate(560 300)" opacity=".95" fill="url(#petal)">
					<ellipse rx="70" ry="230" transform="rotate(-60)" />
					<ellipse rx="70" ry="230" transform="rotate(-20)" />
					<ellipse rx="70" ry="230" transform="rotate(20)" />
					<ellipse rx="70" ry="230" transform="rotate(60)" opacity=".85" />
					<ellipse rx="60" ry="200" fill="oklch(0.85 0.08 230)" opacity=".7" />
				</g>
			</svg>
			<div className="absolute top-[22px] left-[30px] h-[406px] w-[590px] overflow-hidden rounded-lg bg-[oklch(0.95_0.012_245/.84)] backdrop-blur-[70px] backdrop-saturate-[1.4] shadow-[0_0_0_1px_oklch(0_0_0/.1),0_10px_32px_oklch(0.2_0.05_250/.28),0_2px_6px_oklch(0_0_0/.12)]">
				<div className="absolute top-0 right-0 flex h-10 *:grid *:w-[46px] *:place-items-center">
					<i>
						<svg width="10" height="10">
							<path d="M0 5.5h10" stroke={ink} />
						</svg>
					</i>
					<i>
						<svg width="10" height="10">
							<rect x=".5" y=".5" width="9" height="9" rx="1.5" fill="none" stroke={ink} />
						</svg>
					</i>
					<i>
						<svg width="10" height="10">
							<path d="M0 0l10 10M10 0L0 10" stroke={ink} />
						</svg>
					</i>
				</div>
				<nav className="absolute top-10 left-0 flex w-[52px] flex-col items-center gap-1 pt-1.5 *:relative *:grid *:h-9 *:w-10 *:place-items-center *:rounded">
					<i>
						<svg width="16" height="16">
							<path d="M1 3.5h14M1 8h14M1 12.5h14" stroke={ink} strokeWidth="1.2" />
						</svg>
					</i>
					<i className="bg-black/5 before:absolute before:top-2.5 before:left-0 before:h-4 before:w-[3px] before:rounded-sm before:bg-[var(--communication-blue)]">
						<svg width="16" height="16">
							<path d="M2 7L8 2l6 5v7H2z" fill="none" stroke={ink} strokeWidth="1.2" strokeLinejoin="round" />
						</svg>
					</i>
					<i>
						<svg width="16" height="16" fill="none" stroke={ink} strokeWidth="1.2">
							<rect x="1.5" y="3" width="13" height="11" rx="2" />
							<path d="M1.5 6.5h13" />
						</svg>
					</i>
					<i>
						<svg width="16" height="16" fill="none" stroke={ink} strokeWidth="1.2">
							<circle cx="8" cy="5.5" r="3" />
							<path d="M2.5 14.5c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" />
						</svg>
					</i>
				</nav>
				<div className="absolute inset-[40px_0_0_52px] rounded-tl-lg bg-white/55 px-8 shadow-[inset_1px_1px_0_oklch(0_0_0/.06)]">
					<div className="mt-[273px] flex gap-2 *:flex *:h-[58px] *:flex-1 *:items-center *:gap-3 *:rounded-lg *:bg-[var(--layer)] *:px-3.5 *:shadow-[0_0_0_1px_var(--stroke),0_1px_2px_oklch(0_0_0/.06)] [&_b]:block [&_b]:h-[7px] [&_b]:rounded [&_b]:bg-[oklch(0.9_0.004_250)]">
						<div>
							<svg width="20" height="20">
								<rect x="2" y="3" width="16" height="14" rx="3" fill="oklch(0.92 0.05 252)" />
								<path
									d="M6 8h8M6 12h5"
									stroke="var(--communication-blue)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
							<span className="flex-1">
								<b className="w-[70%]" />
								<b className="mt-[7px] w-[45%]" />
							</span>
						</div>
						<div>
							<svg width="20" height="20">
								<circle cx="10" cy="10" r="8" fill="oklch(0.92 0.06 150)" />
								<path
									d="M6 10.5l2.6 2.6L14 7.5"
									fill="none"
									stroke="oklch(0.5 0.13 150)"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="flex-1">
								<b className="w-[60%]" />
								<b className="mt-[7px] w-[80%]" />
							</span>
						</div>
					</div>
				</div>
			</div>
			<span className="absolute top-[252px] left-[556px] z-10">
				<Mark size={16} />
			</span>
			<div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center gap-1.5 bg-[oklch(0.95_0.01_245/.78)] backdrop-blur-[40px] backdrop-saturate-[1.4] shadow-[0_-1px_0_oklch(1_0_0/.5)] *:relative *:grid *:size-10 *:place-items-center *:rounded">
				<i>
					<svg width="22" height="22">
						<rect x="1" y="1" width="9.5" height="9.5" rx="1" fill="oklch(0.58 0.16 245)" />
						<rect x="11.5" y="1" width="9.5" height="9.5" rx="1" fill="oklch(0.62 0.15 240)" />
						<rect x="1" y="11.5" width="9.5" height="9.5" rx="1" fill="oklch(0.55 0.15 250)" />
						<rect x="11.5" y="11.5" width="9.5" height="9.5" rx="1" fill="oklch(0.6 0.16 245)" />
					</svg>
				</i>
				<i>
					<svg width="20" height="20">
						<circle cx="8.5" cy="8.5" r="6" fill="none" stroke={ink} strokeWidth="1.6" />
						<path d="M13 13l5 5" stroke={ink} strokeWidth="1.6" />
					</svg>
				</i>
				<i>
					<svg width="22" height="20">
						<path d="M1 4h7l2 2h11v13H1z" fill="oklch(0.85 0.14 85)" />
						<path d="M1 8h20v11H1z" fill="oklch(0.9 0.12 90)" />
					</svg>
				</i>
				<i className="bg-white/60 shadow-[0_0_0_1px_oklch(0_0_0/.05)] after:absolute after:bottom-0.5 after:left-[13px] after:h-[3px] after:w-3.5 after:rounded-sm after:bg-[var(--communication-blue)]">
					<Mark size={22} />
				</i>
				<i>
					<svg width="22" height="22">
						<circle cx="11" cy="11" r="10" fill="oklch(0.62 0.17 155)" />
						<circle cx="11" cy="11" r="4" fill="white" />
					</svg>
				</i>
				<span className="!absolute !inset-y-0 right-3.5 !flex !w-auto items-center gap-2.5">
					<svg width="16" height="14" viewBox="0 0 16 12">
						<path
							d="M8 11.5l2.4-2.6a3.4 3.4 0 0 0-4.8 0zM3.3 6.6a6.6 6.6 0 0 1 9.4 0l1.6-1.7a9 9 0 0 0-12.6 0z"
							fill={ink}
						/>
					</svg>
					<svg width="16" height="14">
						<path d="M1 5h3l4-4v12L4 9H1z" fill={ink} />
						<path d="M11 4a4 4 0 0 1 0 6" fill="none" stroke={ink} strokeWidth="1.3" />
					</svg>
					<svg width="22" height="12">
						<rect x=".5" y=".5" width="19" height="11" rx="2.5" fill="none" stroke={ink} />
						<rect x="2" y="2" width="13" height="8" rx="1.2" fill={ink} />
						<rect x="20.5" y="4" width="1.2" height="4" fill={ink} />
					</svg>
				</span>
			</div>
		</div>
	)
}
