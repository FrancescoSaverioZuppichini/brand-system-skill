// [Agent] The people who build Keep (not its customers in content.ts), for the team, blog bylines, event speakers and
// contact blocks. 24 people so the filterable grid earns its chips, and no department filters down to one person.
export const departments = ["Engineering", "Design", "Product", "Care", "Operations"] as const

export const team: { name: string; role: string; department: (typeof departments)[number]; city: string }[] =
	[
		{ name: "Hanna Vogel", role: "Founder", department: "Product", city: "Lisbon" },
		{ name: "Rui Almeida", role: "Engineering lead", department: "Engineering", city: "Lisbon" },
		{ name: "Sofia Marin", role: "Design lead", department: "Design", city: "Barcelona" },
		{ name: "Kwame Mensah", role: "Head of care", department: "Care", city: "Accra" },
		{ name: "Elif Kaya", role: "Engineer", department: "Engineering", city: "Istanbul" },
		{ name: "Daniel Kim", role: "Engineer", department: "Engineering", city: "Seoul" },
		{ name: "Nora Lindqvist", role: "Product designer", department: "Design", city: "Stockholm" },
		{ name: "Matteo Ricci", role: "Product manager", department: "Product", city: "Milan" },
		{ name: "Aisha Bello", role: "Care engineer", department: "Care", city: "Lagos" },
		{ name: "Lukas Brandt", role: "Engineer", department: "Engineering", city: "Berlin" },
		{ name: "Chloé Martin", role: "Docs writer", department: "Product", city: "Lyon" },
		{ name: "Arjun Mehta", role: "Engineer", department: "Engineering", city: "Pune" },
		{ name: "Yuki Tanaka", role: "Product designer", department: "Design", city: "Tokyo" },
		{ name: "Sam O'Neill", role: "Operations", department: "Operations", city: "Dublin" },
		{ name: "Ingrid Holm", role: "Care engineer", department: "Care", city: "Oslo" },
		{ name: "Pablo Ortega", role: "Engineer", department: "Engineering", city: "Lisbon" },
		{ name: "Zainab Hassan", role: "Data engineer", department: "Engineering", city: "London" },
		{ name: "Felix Wagner", role: "Finance", department: "Operations", city: "Berlin" },
		{ name: "Lea Novak", role: "Researcher", department: "Design", city: "Ljubljana" },
		{ name: "Omar Farouk", role: "Engineer", department: "Engineering", city: "Cairo" },
		{ name: "Clara Dubois", role: "Product manager", department: "Product", city: "Paris" },
		{ name: "Viktor Petrov", role: "Security engineer", department: "Engineering", city: "Sofia" },
		{ name: "Maya Cohen", role: "Care engineer", department: "Care", city: "Lisbon" },
		{ name: "Ben Adeyemi", role: "People", department: "Operations", city: "London" },
	]
