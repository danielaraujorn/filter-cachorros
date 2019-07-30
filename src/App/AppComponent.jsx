import React, { useState } from 'react'
import { Header } from './Header'
import { List } from './List'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './theme'

export const AppComponent = () => {
	const [filter, changeFilter] = useState({ nome: '', raca: '' })
	const setFilter = obj => changeFilter({ ...filter, ...obj })
	return (
		<MuiThemeProvider theme={theme}>
			<Header setFilter={setFilter} />
			<List filter={filter} />
		</MuiThemeProvider>
	)
}
