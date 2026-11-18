// [Agent] Ported from the hand-made specimen: one light source at the top-left, so every raised shape gets a light
// shadow up-left and a dark one down-right, and pressed shapes get the same pair inset. Here: the two round buttons
// beside the CTA and the dial (raised ring plus its progress arc) that the number's pressed well sits in.
const raised = "shadow-[-4px_-4px_8px_var(--highlight),4px_4px_8px_var(--shade)]"
const pressed = "shadow-[inset_-5px_-5px_10px_var(--highlight),inset_5px_5px_10px_var(--shade)]"

export default function Neumorphism() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<span
				className={`absolute top-[330px] left-[268px] grid size-[52px] place-items-center rounded-full ${raised}`}
			>
				<svg width="20" height="20">
					<path
						d="M10 17s-7-4.2-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 17 8c0 4.8-7 9-7 9z"
						fill="none"
						stroke="var(--pebble)"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<span
				className={`absolute top-[330px] left-[342px] grid size-[52px] place-items-center rounded-full ${pressed}`}
			>
				<svg width="20" height="20">
					<path
						d="M4 10l4 4 8-9"
						fill="none"
						stroke="var(--cobalt)"
						strokeWidth="2.4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<svg
				className="absolute top-[123px] left-[523px] size-[190px] rounded-full shadow-[-8px_-8px_16px_var(--highlight),8px_8px_16px_var(--shade)]"
				viewBox="0 0 190 190"
			>
				<circle
					cx="95"
					cy="95"
					r="84"
					fill="none"
					stroke="var(--cobalt)"
					strokeWidth="6"
					strokeLinecap="round"
					strokeDasharray="380 528"
					transform="rotate(-90 95 95)"
				/>
			</svg>
		</div>
	)
}
