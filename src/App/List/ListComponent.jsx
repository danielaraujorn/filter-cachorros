import React, { useState, useEffect } from 'react'
import { data } from './data'
import { testFilter } from './testFilter'
import { ListItem } from './ListItem'
import { Container, Grid, TablePagination } from '@material-ui/core'
import { propTypes } from './propTypes'

const selectRowsPerPage = width => {
	switch (width) {
		case 'sm':
			return 6
		case 'xs':
			return 5
		default:
			return 9
	}
}

export const ListComponent = ({ filter, width, language }) => {
	const [page, setPage] = useState(0)
	const dogs = data.filter(testFilter(filter))
	useEffect(() => {
		setPage(0)
	}, [dogs.length])
	const ROWS_PER_PAGE = selectRowsPerPage(width)
	return (
		<Container>
			<Grid container spacing={2}>
				{dogs
					.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
					.map(dog => {
						const { id } = dog
						return <ListItem key={id} dog={dog} />
					})}
			</Grid>
			{dogs.length > ROWS_PER_PAGE && (
				<Grid item xs={12}>
					<TablePagination
						labelDisplayedRows={({ from, to, count }) =>
							`${from}-${to} ${language.of} ${count}`
						}
						labelRowsPerPage={''}
						rowsPerPageOptions={[]}
						component="div"
						count={dogs.length}
						rowsPerPage={ROWS_PER_PAGE}
						page={page}
						onChangePage={(_, newPage) => setPage(newPage)}
					/>
				</Grid>
			)}
		</Container>
	)
}
ListComponent.propTypes = propTypes
