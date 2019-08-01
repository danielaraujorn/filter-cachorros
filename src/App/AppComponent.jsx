import React, { useState } from 'react'
import { Header } from './Header'
import { List } from './List'

export const AppComponent = () => {
	const [filter, changeFilter] = useState({})
	const setFilter = obj => changeFilter({ ...filter, ...obj })
	return (
		<>
			<Header filter={filter} setFilter={setFilter} />
			<List filter={filter} />
		</>
	)
}
