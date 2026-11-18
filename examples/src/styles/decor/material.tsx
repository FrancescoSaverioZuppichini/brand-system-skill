// [Agent] Ported from the hand-made specimen: an M3 navigation rail (FAB, active indicator pill), tonal panes on a tinted
// container with no shadows, the app bar's search and avatar, the Expressive "cookie" badge on the number card, and a
// controls pane (switches on and off, the thick-track slider with its bar handle).
const icon = "var(--neutral-variant-30)"

export default function Material() {
	return (
		<div aria-hidden="true" className="absolute inset-0 bg-[var(--neutral-94)]">
			<nav className="absolute inset-y-0 left-0 flex w-[88px] flex-col items-center gap-3.5 pt-[22px] *:grid *:place-items-center">
				<svg width="24" height="24">
					<path d="M3 6h18M3 12h18M3 18h18" stroke={icon} strokeWidth="2" />
				</svg>
				<i className="mt-1.5 mb-[18px] size-14 rounded-2xl bg-[var(--rose-90)] shadow-[0_1px_3px_oklch(0_0_0/.18),0_4px_8px_oklch(0_0_0/.1)]">
					<svg width="24" height="24">
						<path d="M4 20h4L19 9l-4-4L4 16z" fill="oklch(0.3 0.08 0)" />
					</svg>
				</i>
				<i className="h-8 w-14 rounded-2xl bg-[var(--lilac-90)]">
					<svg width="24" height="24">
						<path d="M3 4h7v7H3zM14 4h7v7h-7zM3 13h7v7H3zM14 13h7v7h-7z" fill="var(--neutral-10)" />
					</svg>
				</i>
				<i className="h-8 w-14">
					<svg width="24" height="24" fill="none" stroke={icon} strokeWidth="2">
						<rect x="3" y="5" width="18" height="15" rx="2" />
						<path d="M3 10h18M8 2v5M16 2v5" />
					</svg>
				</i>
				<i className="h-8 w-14">
					<svg width="24" height="24" fill="none" stroke={icon} strokeWidth="2">
						<circle cx="12" cy="8" r="4" />
						<path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
					</svg>
				</i>
				<i className="h-8 w-14">
					<svg width="24" height="24" fill="none" stroke={icon} strokeWidth="2" strokeLinejoin="round">
						<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
					</svg>
				</i>
			</nav>
			<div className="absolute top-3 left-[88px] h-[476px] w-[468px] rounded-[28px] bg-[var(--neutral-98)]">
				<div className="absolute top-3 right-3 flex items-center gap-2">
					<svg width="40" height="40" viewBox="-8 -8 40 40">
						<circle cx="10" cy="10" r="6" fill="none" stroke="var(--neutral-10)" strokeWidth="2" />
						<path d="M15 15l6 6" stroke="var(--neutral-10)" strokeWidth="2" />
					</svg>
					<span className="mx-1 grid size-8 place-items-center rounded-full bg-[var(--rose-40)] text-sm font-medium text-white">
						K
					</span>
				</div>
			</div>
			{/* [Agent] The cookie: nine circles on a ring plus a fill give the scalloped edge without a long path. */}
			<svg className="absolute top-[26px] left-[708px] z-10" width="64" height="64" viewBox="0 0 100 100">
				<g fill="var(--violet-40)">
					<circle cx="50" cy="50" r="40" />
					{[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
						<circle key={angle} cx="50" cy="16" r="16" transform={`rotate(${angle} 50 50)`} />
					))}
				</g>
				<path
					d="M34 52l11 11 22-24"
					fill="none"
					stroke="white"
					strokeWidth="7"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<div className="absolute top-[296px] left-[568px] flex h-[192px] w-[220px] flex-col gap-[22px] rounded-[28px] bg-[var(--neutral-98)] px-[22px] py-5">
				<div className="flex items-center justify-between">
					<svg width="24" height="24">
						<path
							d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3 3"
							fill="none"
							stroke={icon}
							strokeWidth="2"
						/>
					</svg>
					<span className="relative h-8 w-[52px] rounded-2xl bg-[var(--violet-40)] after:absolute after:top-1 after:right-1 after:size-6 after:rounded-full after:bg-white" />
				</div>
				<div className="flex items-center justify-between">
					<svg width="24" height="24">
						<path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7z" fill="none" stroke={icon} strokeWidth="2" />
					</svg>
					<span className="relative h-8 w-[52px] rounded-2xl bg-[var(--neutral-92)] shadow-[inset_0_0_0_2px_var(--neutral-variant-30)] after:absolute after:top-2 after:left-2 after:size-4 after:rounded-full after:bg-[var(--neutral-variant-30)]" />
				</div>
				<div className="flex h-11 items-center gap-1.5">
					<i className="h-4 w-[92px] rounded-[8px_2px_2px_8px] bg-[var(--violet-40)]" />
					<i className="h-11 w-1 rounded-[2px] bg-[var(--violet-40)]" />
					<i className="h-4 flex-1 rounded-[2px_8px_8px_2px] bg-[var(--lilac-90)]" />
				</div>
			</div>
		</div>
	)
}
