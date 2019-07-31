export const testFilter = filter => ({
	name = '',
	race = '',
	owner: { phoneNumber: ownersPhone = '' }
}) => {
	const testPhone =
		!filter.ownersPhone ||
		ownersPhone.toString().startsWith(filter.ownersPhone.toString())
	const testName =
		!filter.name || name.toLowerCase().includes(filter.name.toLowerCase())
	const testeRace =
		!filter.race || race.toLowerCase().includes(filter.race.toLowerCase())
	return testName && testeRace && testPhone
}
