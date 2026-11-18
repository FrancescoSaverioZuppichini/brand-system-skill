// [Agent] Four blurred blooms low in the frame, then a huge dark ellipse with a lit rim laid over them, so the light
// seems to rise from behind a planet's edge instead of floating as blobs.
export default function Aurora() {
	return (
		<div aria-hidden="true" className="absolute inset-0 overflow-hidden *:absolute *:rounded-[50%]">
			<div className="top-[300px] left-[150px] h-[260px] w-[500px] bg-[var(--violet)] blur-[80px]" />
			<div className="top-[330px] left-[470px] h-[200px] w-[330px] bg-[var(--cyan)] opacity-80 blur-[80px]" />
			<div className="top-[340px] left-5 h-[200px] w-[300px] bg-[var(--pink)] opacity-75 blur-[80px]" />
			<div className="top-[-120px] left-[560px] h-[240px] w-[320px] bg-[var(--violet)] opacity-35 blur-[80px]" />
			<div className="top-[404px] left-[-260px] h-[700px] w-[1320px] bg-[var(--night)] shadow-[0_-1px_0_oklch(0.97_0.01_280/.55),0_-18px_60px_-10px_oklch(0.75_0.13_210/.5),inset_0_24px_60px_-30px_oklch(0.55_0.25_295/.9)]" />
		</div>
	)
}
