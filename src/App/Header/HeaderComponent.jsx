import React, { useState } from 'react'
import {
	Container,
	TextField,
	Grid,
	Typography,
	Button,
	Fade,
	MenuItem
} from '@material-ui/core'
import { isWidthUp } from '@material-ui/core/withWidth'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import ossos from '../../ossos-pattern.png'
import NumberFormat from 'react-number-format'
import { OutlinedSelect } from 'Common/OutlinedSelect'
import { genderEnum } from 'utils/genderEnum'

const NumberFormatCustom = ({ inputRef, onChange, ...other }) => {
	return (
		<NumberFormat
			{...other}
			format="(##) #####-####"
			getInputRef={inputRef}
			onValueChange={values => {
				onChange({
					target: {
						value: values.value
					}
				})
			}}
		/>
	)
}

export const HeaderComponent = ({
	classes,
	setFilter,
	width,
	language,
	filter
}) => {
	const [advancedFilter, setAdvancedFilter] = useState(false)
	const { ownersPhone = '', name = '', race = '', gender = '' } = filter
	return (
		<div className={classes.header}>
			<div
				className={classnames(classes.pattern, classes.headerPadding)}
				style={{ backgroundImage: `url(${ossos})`, backgroundSize: '70%' }}
			>
				<Container>
					<Grid item xs={12}>
						<Typography className={classes.headerTitle} variant="body2">
							{language.searchForTheDog}:
						</Typography>
					</Grid>
					<Grid spacing={2} container>
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<TextField
								value={ownersPhone}
								// margin="dense"
								onChange={({ target: { value: ownersPhone } }) =>
									setFilter({ ownersPhone })
								}
								fullWidth
								label={language.ownersPhone}
								variant="outlined"
								InputProps={{
									inputComponent: NumberFormatCustom
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={6} md={4} lg={3}>
							<TextField
								value={name}
								// margin="dense"
								onChange={({ target: { value: name } }) => setFilter({ name })}
								fullWidth
								label={language.dogsName}
								variant="outlined"
							/>
						</Grid>
						{(advancedFilter || isWidthUp('md', width)) && (
							<Fade in={true}>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<TextField
										value={race}
										// margin="dense"
										onChange={({ target: { value: race } }) =>
											setFilter({ race })
										}
										fullWidth
										label={language.race}
										variant="outlined"
									/>
								</Grid>
							</Fade>
						)}
						{(advancedFilter || isWidthUp('lg', width)) && (
							<Fade in={true}>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<OutlinedSelect
										value={gender}
										label={language.gender}
										fullWidth
										// margin="dense"
										onChange={({ target: { value: gender } }) =>
											setFilter({ gender })
										}
									>
										<MenuItem value="">{language.all}</MenuItem>
										<MenuItem value={genderEnum.male}>{language.male}</MenuItem>
										<MenuItem value={genderEnum.female}>
											{language.female}
										</MenuItem>
									</OutlinedSelect>
								</Grid>
							</Fade>
						)}
					</Grid>
				</Container>
			</div>
			{!isWidthUp('lg', width) && (
				<Button
					onClick={() => setAdvancedFilter(!advancedFilter)}
					fullWidth
					style={{ borderRadius: 0 }}
					color="secondary"
					variant="contained"
				>
					{advancedFilter ? language.contractFilters : language.expandFilters}
				</Button>
			)}
		</div>
	)
}
HeaderComponent.propTypes = propTypes
