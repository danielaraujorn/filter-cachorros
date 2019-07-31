export const testFilter = filter => ({ name, race }) => {
	const testName =
		!filter.name || name.toLowerCase().includes(filter.name.toLowerCase())
	const testeRace =
		!filter.race || race.toLowerCase().includes(filter.race.toLowerCase())
	return testName && testeRace
}
