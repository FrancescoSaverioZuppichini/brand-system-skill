// [Agent] Ported from the hand-made specimen: a teal desktop with a folder icon, the inactive "Keep" window behind the
// copy (title bar, menu, status bar), the floppy icon of the "Still in use" dialog, and the taskbar. Depth is only the
// Win95 bevel: two rings of 1 px inset shadows, light top-left and dark bottom-right.
const raised =
	"inset -1px -1px var(--pitch), inset 1px 1px var(--light), inset -2px -2px var(--bevel-shadow), inset 2px 2px var(--highlight)"
const sunken =
	"inset -1px -1px var(--highlight), inset 1px 1px var(--bevel-shadow), inset -2px -2px var(--light), inset 2px 2px var(--pitch)"
const well = "inset -1px -1px var(--highlight), inset 1px 1px var(--bevel-shadow)"

export default function RetroOs() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 bg-[var(--desktop)] font-[Pixelify_Sans] text-[15px] leading-none text-[var(--pitch)] [&_svg]:[shape-rendering:crispEdges]"
		>
			<div className="absolute top-7 left-[708px] flex w-[72px] flex-col items-center gap-1 text-sm text-[var(--highlight)]">
				<svg width="34" height="30" viewBox="0 0 17 15">
					<path fill="var(--pitch)" d="M0 2h7v1h9v12H0z" />
					<path fill="oklch(0.92 0.12 95)" d="M1 3h5v1h9v10H1z" />
					<path fill="oklch(0.72 0.15 95)" d="M1 6h14v8H1z" />
					<path fill="oklch(0.95 0.12 100)" d="M1 5h14v1H1z" />
				</svg>
				<span className="bg-[var(--titlebar)] px-0.5 outline-1 outline-[var(--light)] outline-dotted">
					Keep
				</span>
			</div>
			<div
				className="absolute top-[26px] left-[34px] flex h-[332px] w-[460px] flex-col bg-[var(--window)] p-[3px]"
				style={{ boxShadow: raised }}
			>
				<div className="flex h-5 shrink-0 items-center justify-end gap-0.5 pr-0.5 [background:linear-gradient(90deg,var(--bevel-shadow),oklch(0.76_0_0))] *:grid *:h-3.5 *:w-4 *:place-items-center *:bg-[var(--window)] *:text-[11px] *:font-bold">
					<i style={{ boxShadow: raised }}>_</i>
					<i style={{ boxShadow: raised }}>□</i>
					<i className="ml-0.5" style={{ boxShadow: raised }}>
						✕
					</i>
				</div>
				<div className="flex gap-3.5 px-1.5 pt-1 pb-[3px] *:first-letter:underline *:first-letter:underline-offset-2">
					<span>File</span>
					<span>Edit</span>
					<span>View</span>
					<span>Help</span>
				</div>
				<div className="mt-auto flex h-[18px] gap-0.5 *:flex-1">
					<i className="!flex-[3]" style={{ boxShadow: well }} />
					<i style={{ boxShadow: well }} />
				</div>
			</div>
			<svg className="absolute top-[290px] left-[521px] z-10" width="36" height="36" viewBox="0 0 18 18">
				<path fill="var(--pitch)" d="M1 1h16v16H1z" />
				<path fill="var(--bevel-shadow)" d="M2 2h14v14H2z" />
				<path fill="var(--window)" d="M2 2h13v13H2z" />
				<path fill="var(--titlebar)" d="M4 2h10v6H4z" />
				<path fill="var(--highlight)" d="M5 3h8v4H5z" />
				<path fill="var(--pitch)" d="M4 10h10v6H4z" />
				<path fill="var(--window)" d="M10 11h2v4h-2z" />
			</svg>
			<div
				className="absolute inset-x-0 bottom-0 flex h-[30px] items-center gap-1 bg-[var(--window)] px-[3px] text-sm *:flex *:h-[22px] *:items-center *:gap-[5px] *:px-2"
				style={{ boxShadow: "inset 0 1px var(--light), inset 0 2px var(--highlight)" }}
			>
				<span className="!px-1.5 font-bold" style={{ boxShadow: raised }}>
					<svg width="18" height="16" viewBox="0 0 9 8">
						<path fill="oklch(0.63 0.26 29)" d="M1 0h3v3H1z" />
						<path fill="oklch(0.6 0.2 142)" d="M5 0h3v3H5z" />
						<path fill="oklch(0.45 0.31 264)" d="M1 4h3v3H1z" />
						<path fill="oklch(0.88 0.18 95)" d="M5 4h3v3H5z" />
					</svg>
					Start
				</span>
				<span className="w-[150px]" style={{ boxShadow: raised }}>
					Keep
				</span>
				<span
					className="w-[150px] font-bold [background:repeating-conic-gradient(var(--highlight)_0_25%,var(--window)_0_50%)_0_0/2px_2px]"
					style={{ boxShadow: sunken }}
				>
					Still in use
				</span>
				<span className="ml-auto !px-2.5" style={{ boxShadow: well }}>
					4:20 PM
				</span>
			</div>
		</div>
	)
}
