import React from 'react'
import {
	Paper,
	Grid,
	Typography,
	Divider,
	Tooltip,
	Avatar
} from '@material-ui/core'
import PetIcon from '@material-ui/icons/Pets'
import classnames from 'classnames'
import { propTypes } from './propTypes'
import StringMask from 'string-mask'
import { formatDate } from 'utils/formatDate'

const phoneFormat = new StringMask('(00) 00000-0000')

export const ListItemComponent = ({ dog, classes }) => {
	const {
		name = '',
		gender = 'fêmea',
		race = '',
		picture,
		dateOfBirth,
		dateOfLastService,
		castrated = false,
		owner: { name: ownersName = '', phoneNumber: ownersPhone = '' }
	} = dog
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Paper>
				<div className={classnames(classes.padding, classes.header)}>
					<div className={classes.flex}>
						<Avatar alt={name} className={classes.avatar} src={picture}>
							{name[0]}
						</Avatar>
						<div>
							<Typography>{name}</Typography>
							<Typography variant="body2">{race}</Typography>
						</div>
					</div>
					<div>
						{gender === 'fêmea' ? (
							<Tooltip placement="left" title="Fêmea">
								<div>
									<PetIcon className={classes.femaleIcon} />
								</div>
							</Tooltip>
						) : (
							<Tooltip placement="left" title="Macho">
								<div>
									<PetIcon className={classes.maleIcon} />
								</div>
							</Tooltip>
						)}
					</div>
				</div>
				<Divider />
				<div className={classes.padding}>
					<Typography className={classes.infoTitle}>
						<strong>Ultimo atendimento: </strong>
						{formatDate(new Date(dateOfLastService))}
					</Typography>
					<Typography className={classes.infoTitle}>
						<strong>Data de nascimento: </strong>
						{formatDate(new Date(dateOfBirth))}
					</Typography>
					<Typography className={classes.infoTitle}>
						<strong>Sexo: </strong>
						{gender === 'fêmea' ? 'Fêmea' : 'Macho'}
						{castrated && gender === 'fêmea' ? ', Castrada' : ', Castrado'}
					</Typography>
					<Typography className={classes.infoTitle}>
						<strong>Dono: </strong>
						{ownersName}, {phoneFormat.apply(ownersPhone)}
					</Typography>
				</div>
			</Paper>
		</Grid>
	)
}
ListItemComponent.propTypes = propTypes
