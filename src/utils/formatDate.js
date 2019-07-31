export const formatDate = date => {
	const month = (date.getMonth() + 1).toString()
	return `${date.getDate()}/${
		month.length === 1 ? '0' + month : month
	}/${date.getFullYear()}`
}
