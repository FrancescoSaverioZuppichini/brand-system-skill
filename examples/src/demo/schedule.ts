// [Agent] Keep Week, the three-day meetup for teams who look after what they ship: one day per stage of a project,
// three parallel tracks, half-hour slots from 09:00, so the day tabs, the track grid and the day panels agree.
export const event = { name: "Keep Week 2027", place: "Lisbon", dates: "2–4 June 2027" }

export const tracks = ["Main hall", "Workshops", "Clinics"] as const

type Session = { start: string; end: string; title: string; speaker: string; track: (typeof tracks)[number] }

export const days: { name: string; date: string; sessions: Session[] }[] = [
	{
		name: "Plan",
		date: "Wed 2 June",
		sessions: [
			{
				start: "09:00",
				end: "09:30",
				title: "Welcome to Keep Week",
				speaker: "Hanna Vogel, Keep",
				track: "Main hall",
			},
			{
				start: "09:30",
				end: "10:30",
				title: "Plans the next person can read",
				speaker: "Chloé Martin, Keep",
				track: "Main hall",
			},
			{
				start: "09:30",
				end: "11:00",
				title: "Write a one-page plan",
				speaker: "Matteo Ricci, Keep",
				track: "Workshops",
			},
			{
				start: "09:30",
				end: "10:00",
				title: "Bring your roadmap",
				speaker: "Sofia Marin, Keep",
				track: "Clinics",
			},
			{
				start: "10:00",
				end: "11:30",
				title: "Live plan review",
				speaker: "Mei Okafor, Fieldnote",
				track: "Clinics",
			},
			{
				start: "11:00",
				end: "12:00",
				title: "What 1,284 projects taught us about deadlines",
				speaker: "Zainab Hassan, Keep",
				track: "Main hall",
			},
			{
				start: "11:00",
				end: "12:30",
				title: "Scope a project with your client",
				speaker: "Ana Ruiz, Halden",
				track: "Workshops",
			},
			{
				start: "11:30",
				end: "12:30",
				title: "Estimating with owners",
				speaker: "Jonas Lind, Ostra",
				track: "Clinics",
			},
			{
				start: "12:00",
				end: "12:30",
				title: "Ask us anything about planning",
				speaker: "Clara Dubois, Keep",
				track: "Main hall",
			},
		],
	},
	{
		name: "Ship",
		date: "Thu 3 June",
		sessions: [
			{
				start: "09:00",
				end: "10:00",
				title: "Release 1.4: what a checklist caught",
				speaker: "Daniel Kim, Keep",
				track: "Main hall",
			},
			{
				start: "09:30",
				end: "11:00",
				title: "Build a release checklist",
				speaker: "Rui Almeida, Keep",
				track: "Workshops",
			},
			{
				start: "10:30",
				end: "11:30",
				title: "We ship less often now",
				speaker: "Tomás Berg, Northwind",
				track: "Main hall",
			},
			{
				start: "11:00",
				end: "12:00",
				title: "Release review, live",
				speaker: "Priya Shah, Parcel",
				track: "Clinics",
			},
			{
				start: "11:30",
				end: "12:30",
				title: "Migrations without fear",
				speaker: "Elif Kaya, Keep",
				track: "Main hall",
			},
		],
	},
	{
		name: "Care",
		date: "Fri 4 June",
		sessions: [
			{
				start: "09:00",
				end: "10:00",
				title: "How we look after a project for five years",
				speaker: "Rui Almeida, Keep",
				track: "Main hall",
			},
			{
				start: "10:00",
				end: "11:30",
				title: "Hand a project over in an afternoon",
				speaker: "Aisha Bello, Keep",
				track: "Workshops",
			},
			{
				start: "10:30",
				end: "11:30",
				title: "Health checks that don't page anyone",
				speaker: "Viktor Petrov, Keep",
				track: "Main hall",
			},
			{
				start: "11:00",
				end: "12:00",
				title: "Care plan check-up",
				speaker: "Ingrid Holm, Keep",
				track: "Clinics",
			},
			{
				start: "12:00",
				end: "12:30",
				title: "Closing: the yearly review",
				speaker: "Kwame Mensah, Keep",
				track: "Main hall",
			},
		],
	},
]
