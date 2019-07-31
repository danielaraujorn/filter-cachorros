import React, { useState } from 'react'
import { data } from './data'
import { testFilter } from './testFilter'
import { ListItem } from './ListItem'
import { Container, Grid, TablePagination } from '@material-ui/core'
import { propTypes } from './propTypes'

export const ListComponent = ({ filter }) => {
	const [rowsPerPage, setRowsPerPage] = useState(9)
	const [page, setPage] = useState(0)
	const handleChangeRowsPerPage = ({ target: { value } }) => {
		setRowsPerPage(+value)
		setPage(0)
	}
	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}
	const dogs = data.filter(testFilter(filter))
	return (
		<Container>
			<Grid container spacing={2}>
				{dogs
					.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
					.map((dog, index) => {
						const { id = index } = dog
						return <ListItem key={id} dog={dog} />
					})}
			</Grid>
			{dogs.length > rowsPerPage && (
				<Grid item xs={12}>
					<TablePagination
						labelDisplayedRows={({ from, to, count }) =>
							`${from}-${to} de ${count}`
						}
						labelRowsPerPage={'Resultados por página'}
						rowsPerPageOptions={[9, 18]}
						component="div"
						count={dogs.length}
						rowsPerPage={rowsPerPage}
						page={page}
						backIconButtonProps={{
							'aria-label': 'previous page'
						}}
						nextIconButtonProps={{
							'aria-label': 'next page'
						}}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</Grid>
			)}
		</Container>
	)
}
ListComponent.propTypes = propTypes
