import React from 'react'
import { Container, Paper, TextField, Grid } from '@material-ui/core'
import { propTypes } from './propTypes'

export const HeaderComponent = ({ classes, setFilter }) => {
	return (
		<div className={classes.header}>
			<Container>
				<Paper className={classes.paper}>
					<Grid spacing={2} container>
						<Grid item>
							<TextField
								onChange={({ target: { value: nome } }) => setFilter({ nome })}
								fullWidth
								label="Nome do pet"
								variant="outlined"
								autoFocus
							/>
						</Grid>
						<Grid item>
							<TextField
								onChange={({ target: { value: raca } }) => setFilter({ raca })}
								fullWidth
								label="Raça"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}
HeaderComponent.propTypes = propTypes
