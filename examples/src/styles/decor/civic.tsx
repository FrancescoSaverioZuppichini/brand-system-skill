// [Agent] The service chrome GOV.UK pages always carry around the content: a phase banner ("Beta" tag over a
// hairline) under the header, and the grey footer strip. The black header itself is the restyled nav.
export default function Civic() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-[66px] right-[30px] left-[30px] border-b border-[var(--rule)] py-[10px] leading-[25px]">
				<span className="inline-block bg-[var(--wash)] px-2 pt-[2px] pb-[3px] text-[16px] leading-5 text-[var(--navy)]">
					Beta
				</span>
			</div>
			<div className="absolute inset-x-0 bottom-0 h-[34px] border-t border-[var(--rule)] bg-[var(--stone)]" />
		</div>
	)
}
