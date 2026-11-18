const chamfer = "[clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,18px_100%,0_calc(100%-18px))]"

// [Agent] Ported from the hand-made specimen: faint diagonal rain, a glowing magenta rule with a dashed end, the cyan
// ghost under the button, and the acid-yellow ID panel (barcode, vertical katakana, hazard stripes) the number card
// sits on. The SVG filter is the headline's glitch: one thin band of it is shoved sideways and tinted cyan.
export default function Cyberpunk() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:repeating-linear-gradient(104deg,transparent_0_46px,oklch(0.86_0.14_200/.06)_46px_47px),var(--night)]"
		>
			<svg className="absolute size-0">
				<filter id="glitch" x="-5%" y="-5%" width="115%" height="110%" primitiveUnits="objectBoundingBox">
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0.45  0 0 0 0 0.92  0 0 0 0 1  0 0 0 .9 0"
						result="tint"
					/>
					<feOffset in="tint" dx=".018" y=".6" height=".1" result="band" />
					<feMerge>
						<feMergeNode in="SourceGraphic" />
						<feMergeNode in="band" />
					</feMerge>
				</filter>
			</svg>
			<div className="absolute top-[84px] left-10 h-0.5 w-[480px] bg-[var(--magenta)] shadow-[0_0_10px_var(--magenta)]">
				<span className="absolute -top-[5px] right-0 h-3 w-[60px] [background:repeating-linear-gradient(90deg,var(--magenta)_0_4px,transparent_4px_8px)]" />
			</div>
			<div
				className={`absolute top-[358px] left-[46px] h-[43px] w-[223px] bg-[var(--cyan)] opacity-55 ${chamfer}`}
			/>
			<div className="absolute top-[30px] left-[556px] h-[440px] w-[214px] bg-[var(--acid)] [clip-path:polygon(0_0,calc(100%-34px)_0,100%_34px,100%_100%,34px_100%,0_calc(100%-34px))]">
				<svg viewBox="0 0 140 34" className="absolute top-[26px] left-6 h-[34px] w-[120px]">
					<path
						fill="var(--night)"
						d="M0 0h3v34h-3zM6 0h1v34h-1zM10 0h4v34h-4zM17 0h2v34h-2zM22 0h1v34h-1zM26 0h5v34h-5zM34 0h1v34h-1zM38 0h3v34h-3zM44 0h1v34h-1zM48 0h2v34h-2zM53 0h4v34h-4zM60 0h1v34h-1zM64 0h3v34h-3zM70 0h1v34h-1zM74 0h2v34h-2zM79 0h5v34h-5zM87 0h1v34h-1zM91 0h2v34h-2zM96 0h3v34h-3zM102 0h1v34h-1zM106 0h4v34h-4zM113 0h1v34h-1zM117 0h2v34h-2zM122 0h3v34h-3zM128 0h1v34h-1zM132 0h4v34h-4z"
					/>
				</svg>
				<span className="absolute top-[34px] left-[166px] font-['Zen_Kaku_Gothic_New'] text-[40px] leading-none font-black tracking-[.06em] text-[var(--night)] [writing-mode:vertical-rl]">
					キープ
				</span>
				<span className="absolute inset-x-0 top-[380px] h-[26px] [background:repeating-linear-gradient(-45deg,var(--night)_0_12px,var(--acid)_12px_24px)]" />
			</div>
			<div className="pointer-events-none absolute inset-0 z-10 [background:repeating-linear-gradient(oklch(0_0_0/.22)_0_1px,transparent_1px_3px)]" />
		</div>
	)
}
