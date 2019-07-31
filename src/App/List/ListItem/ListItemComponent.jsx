import React from 'react'
import { Paper, Grid, Typography, Divider, Tooltip } from '@material-ui/core'
import classnames from 'classnames'
import { propTypes } from './propTypes'
import { Delete, Dashboard } from '@material-ui/icons'

export const ListItemComponent = ({ dog, classes }) => {
	const { name = '', gender = 'fêmea', race = '' } = dog
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Paper>
				<div className={classnames(classes.padding, classes.header)}>
					<div>
						<Typography>{name}</Typography>
					</div>
					<div>
						{gender === 'fêmea' ? (
							<Tooltip placement="left" title="Fêmea">
								<Delete className={classes.maleIcon} fontSize="small" />
							</Tooltip>
						) : (
							<Tooltip placement="left" title="Macho">
								<Dashboard className={classes.femaleIcon} fontSize="small" />
							</Tooltip>
						)}
					</div>
				</div>
				<Divider />
				<div className={classes.padding}>
					<Typography>{race}</Typography>
				</div>
			</Paper>
		</Grid>
	)
}
ListItemComponent.propTypes = propTypes
