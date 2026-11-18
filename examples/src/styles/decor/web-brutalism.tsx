// [Agent] The only art is two default <hr> rules: browser defaults are the whole identity.
export default function WebBrutalism() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-x-2 inset-y-0 *:absolute *:inset-x-0 *:h-px *:bg-[var(--type)]"
		>
			<hr className="top-[30px] m-0 border-0" />
			<hr className="top-[335px] m-0 border-0" />
		</div>
	)
}
