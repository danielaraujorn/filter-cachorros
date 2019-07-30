import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'

export const ListItemComponent = ({ dog, classes }) => (
	<Grid item xs={12} md={6}>
		<Paper className={classes.paper}>
			<Typography>{dog.nome}</Typography>
		</Paper>
	</Grid>
)
