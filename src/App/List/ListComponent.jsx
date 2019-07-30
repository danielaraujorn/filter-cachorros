import React, { useState } from 'react'
import { data } from './data'
import { filterDog } from './filterDog'
import { ListItem } from './ListItem'
import { Container, Grid, TablePagination } from '@material-ui/core'

export const ListComponent = ({ filter }) => {
	const [rowsPerPage, setRowsPerPage] = useState(12)
	const [page, setPage] = useState(0)
	const handleChangeRowsPerPage = ({ target: { value } }) => {
		setRowsPerPage(+value)
		setPage(0)
	}
	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}
	const dogs = data.filter(filterDog(filter))
	console.log(dogs)
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
				<Grid item>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
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
