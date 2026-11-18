// [Agent] Ported from the hand-made specimen: a polka-dot planet, a striped arch, an orange half sun and a checkerboard
// floor, every object with the same 3 px ink stroke (and the stickers with the same hard shadow), the one rule that
// keeps the collage art-directed. The two plates behind "something" and "keep" give the headline its mixed-object look.
export default function Maximalism() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute *:border-[3px] *:border-[var(--ink)]">
			<div className="top-[-150px] left-[560px] size-[380px] rounded-full [background:radial-gradient(circle,var(--pink)_0_5px,transparent_5.5px)_0_0/24px_24px,var(--cobalt)]" />
			<div className="top-[236px] left-[640px] h-[300px] w-[200px] rounded-t-[100px] [background:repeating-linear-gradient(90deg,var(--lime)_0_12px,var(--purple)_12px_24px)]" />
			<div className="top-[400px] left-[-70px] size-[220px] rounded-full bg-[var(--orange)]" />
			<div className="inset-x-0 bottom-0 h-[22px] !border-x-0 !border-b-0 [background:repeating-conic-gradient(var(--ink)_0_25%,var(--cream)_0_50%)_0_0/22px_22px]" />
			<svg viewBox="0 0 200 40" className="top-[22px] left-[268px] h-10 w-[200px] !border-0">
				<path
					d="M4 20 Q 16 2 29 20 T 54 20 T 79 20 T 104 20 T 129 20 T 154 20 T 179 20 T 196 14"
					fill="none"
					stroke="var(--cobalt)"
					strokeWidth="7"
					strokeLinecap="round"
				/>
			</svg>
			<div className="top-[74px] left-[244px] h-[112px] w-[438px] bg-[var(--cream)] shadow-[6px_6px_0_var(--ink)]" />
			<div className="top-[198px] left-[350px] h-[100px] w-[246px] rotate-3 bg-[var(--orange)] shadow-[6px_6px_0_var(--ink)]" />
			<svg
				viewBox="0 0 100 100"
				className="top-[268px] left-[486px] size-[224px] -rotate-10 !border-0 drop-shadow-[6px_6px_0_var(--ink)]"
			>
				<polygon
					fill="var(--lime)"
					stroke="var(--ink)"
					strokeWidth="1.4"
					strokeLinejoin="round"
					points="50,1 56,13 67,4 69,17 82,12 79,25 93,25 85,36 98,42 87,50 98,58 85,64 93,75 79,75 82,88 69,83 67,96 56,87 50,99 44,87 33,96 31,83 18,88 21,75 7,75 15,64 2,58 13,50 2,42 15,36 7,25 21,25 18,12 31,17 33,4 44,13"
				/>
			</svg>
		</div>
	)
}
