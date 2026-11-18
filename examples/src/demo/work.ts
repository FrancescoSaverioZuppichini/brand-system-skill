// [Agent] Projects customers made and still keep with Keep, one per customer in content.ts, for the portfolio blocks.
export const work: {
	title: string
	client: string
	year: number
	line: string
	scene: "place" | "object" | "person"
}[] = [
	{
		title: "Supplier portal",
		client: "Northwind",
		year: 2021,
		line: "In care for five years, no rewrite",
		scene: "place",
	},
	{
		title: "Twelve client sites",
		client: "Halden",
		year: 2021,
		line: "One studio, one care schedule",
		scene: "person",
	},
	{
		title: "Field kit launch",
		client: "Fieldnote",
		year: 2023,
		line: "Hardware and firmware in 14 releases",
		scene: "object",
	},
	{
		title: "Booking app",
		client: "Ostra",
		year: 2022,
		line: "Rebuilt once, reviewed every spring",
		scene: "person",
	},
	{
		title: "Shipping tracker",
		client: "Parcel",
		year: 2024,
		line: "Planned in a week, shipped in six",
		scene: "object",
	},
	{
		title: "Lighting catalogue",
		client: "Lumen & Co",
		year: 2020,
		line: "A printed and online catalogue, kept in sync",
		scene: "place",
	},
	{
		title: "Open-source CLI",
		client: "Tilde",
		year: 2022,
		line: "212 contributors, one owner",
		scene: "object",
	},
	{
		title: "Archive search",
		client: "Marrow",
		year: 2025,
		line: "Forty years of records, searchable",
		scene: "place",
	},
]
