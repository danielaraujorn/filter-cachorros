import React from 'react'
import {
	Paper,
	Grid,
	Typography,
	Divider,
	Tooltip,
	Avatar,
	IconButton
} from '@material-ui/core'
import PetIcon from '@material-ui/icons/Pets'
import CastratedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import NotCastratedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import classnames from 'classnames'
import { propTypes } from './propTypes'
import StringMask from 'string-mask'
import { formatDate } from 'utils/formatDate'
import { genderEnum } from 'utils/genderEnum'

const phoneFormat = new StringMask('(00) 00000-0000')

export const ListItemComponent = ({ dog, classes, language }) => {
	const {
		name = '',
		gender = genderEnum.female,
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
					<div className={classes.flex}>
						<Tooltip
							enterTouchDelay={10}
							placement="left"
							title={castrated ? language.castrated : language.notCastrated}
						>
							<IconButton size="small">
								{castrated ? (
									<CastratedIcon color="secondary" />
								) : (
									<NotCastratedIcon
										color="disabled"
										style={{ transform: 'rotateZ(45deg)' }}
									/>
								)}
							</IconButton>
						</Tooltip>
						<Tooltip
							enterTouchDelay={10}
							placement="left"
							title={
								gender === genderEnum.female ? language.female : language.male
							}
						>
							<IconButton disableTouchRipple size="small">
								<PetIcon
									className={
										gender === genderEnum.female
											? classes.femaleIcon
											: classes.maleIcon
									}
								/>
							</IconButton>
						</Tooltip>
					</div>
				</div>
				<Divider />
				<div className={classes.padding}>
					<Typography className={classes.infoTitle}>
						<strong>{language.dateOfLastService}: </strong>
						{formatDate(new Date(dateOfLastService))}
					</Typography>
					<Typography className={classes.infoTitle}>
						<strong>{language.dateOfBirth}: </strong>
						{formatDate(new Date(dateOfBirth))}
					</Typography>
					<Typography className={classes.infoTitle}>
						<strong>{language.owner}: </strong>
						{ownersName}, {phoneFormat.apply(ownersPhone)}
					</Typography>
				</div>
			</Paper>
		</Grid>
	)
}
ListItemComponent.propTypes = propTypes
