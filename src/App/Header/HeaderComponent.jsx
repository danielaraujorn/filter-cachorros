import React from 'react'
import { Container, TextField, Grid, Typography } from '@material-ui/core'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import ossos from '../../ossos-pattern.png'

export const HeaderComponent = ({ classes, setFilter }) => {
	return (
		<div className={classes.header}>
			<div
				className={classnames(classes.pattern, classes.headerPadding)}
				style={{ backgroundImage: `url(${ossos})`, backgroundSize: '70%' }}
			>
				<Container>
					<Grid item xs={12}>
						<Typography className={classes.headerTitle} variant="body2">
							Procure pelo animal:
						</Typography>
					</Grid>
					<Grid spacing={2} container>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<TextField
								margin="dense"
								onChange={({ target: { value: name } }) => setFilter({ name })}
								fullWidth
								label="Nome do animal"
								variant="outlined"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<TextField
								margin="dense"
								onChange={({ target: { value: race } }) => setFilter({ race })}
								fullWidth
								label="Raça"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	)
}
HeaderComponent.propTypes = propTypes
