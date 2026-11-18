import { CreditCard, ShieldCheck, Star } from "lucide-react"

// [Agent] Ported from the hand-made specimen: a navy brand panel with a lime glow, a phone tilted 6° whose screen holds
// the number card (styled in fintech.ts) above four transaction rows, a lime payment card overlapping it, and the trust
// row under the button (security, rating, cards accepted).
export default function Fintech() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-5 left-[440px] h-[460px] w-[340px] overflow-hidden rounded-[28px] [background:radial-gradient(40%_30%_at_20%_85%,oklch(0.88_0.20_128/.25),transparent_70%),radial-gradient(120%_70%_at_80%_10%,var(--twilight),var(--navy)_60%)]">
				<div className="absolute top-[46px] left-[92px] h-[440px] w-[214px] rotate-6 rounded-[36px] bg-[oklch(0.16_0.02_260)] p-2 shadow-[0_30px_60px_oklch(0.10_0.04_260/.6)]">
					<span className="absolute top-4 left-1/2 h-[18px] w-16 -translate-x-1/2 rounded-[10px] bg-[oklch(0.16_0.02_260)]" />
					<div className="flex size-full flex-col gap-2 rounded-[29px] bg-[var(--surface)] px-3.5 pt-[190px]">
						{[0, 1, 2, 3].map((row) => (
							<div
								key={row}
								className="flex items-center gap-2 rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-2"
							>
								<b className="size-[22px] rounded-full bg-[var(--surface)] shadow-[inset_0_0_0_6px_var(--line)]" />
								<s className="h-1.5 flex-1 rounded-[3px] bg-[var(--line)]" />
								<u className="h-1.5 w-[34px] rounded-[3px] bg-[oklch(0.60_0.15_150/.45)]" />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="absolute top-[326px] left-[396px] h-36 w-[228px] -rotate-9 overflow-hidden rounded-[14px] bg-linear-135 from-[var(--lime)] to-[var(--moss)] shadow-[0_1px_2px_oklch(0.25_0.06_260/.08),0_12px_32px_oklch(0.25_0.06_260/.14)]">
				<span className="absolute -top-[70px] -right-[60px] size-[220px] rounded-full border-[26px] border-white/18" />
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="var(--navy)"
					strokeWidth="2"
					strokeLinecap="round"
					className="absolute top-4 left-5 size-[22px]"
				>
					<path d="M8 7c2 3 2 7 0 10M12 4.5c3.5 4.5 3.5 10.5 0 15M16 2c4.7 6 4.7 14 0 20" />
				</svg>
				<span className="absolute top-[46px] left-5 h-[26px] w-[34px] rounded-[6px] bg-linear-135 from-[oklch(0.90_0.03_90)] to-[oklch(0.75_0.04_85)]" />
				<span className="absolute bottom-5 left-5 flex gap-3">
					{[0, 1, 2].map((group) => (
						<span key={group} className="flex gap-[3px]">
							{[0, 1, 2, 3].map((dot) => (
								<i key={dot} className="size-[5px] rounded-full bg-[var(--navy)] opacity-70" />
							))}
						</span>
					))}
				</span>
				<span className="absolute right-[18px] bottom-4 size-7 rounded-full bg-[var(--navy)] shadow-[inset_0_0_0_7px_var(--navy),inset_0_0_0_14px_var(--lime)]" />
			</div>
			<div className="absolute top-[444px] left-[52px] flex items-center gap-3.5 text-[var(--slate)]">
				<ShieldCheck className="size-6" strokeWidth={1.8} />
				<span className="h-[22px] w-px bg-[var(--line)]" />
				<span className="flex gap-[3px]">
					{[0, 1, 2, 3, 4].map((star) => (
						<Star key={star} className="size-4 fill-[var(--green)] text-[var(--green)]" />
					))}
				</span>
				<span className="h-[22px] w-px bg-[var(--line)]" />
				<CreditCard className="size-6" strokeWidth={1.8} />
			</div>
		</div>
	)
}
