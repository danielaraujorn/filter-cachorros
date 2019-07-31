import React, { useState } from 'react'
import { Header } from './Header'
import { List } from './List'

export const AppComponent = () => {
	const [filter, changeFilter] = useState({ name: '', race: '' })
	const setFilter = obj => changeFilter({ ...filter, ...obj })
	return (
		<>
			<Header setFilter={setFilter} />
			<List filter={filter} />
		</>
	)
}
