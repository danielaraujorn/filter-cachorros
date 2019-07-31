import React, { useState } from 'react'
import {
	Container,
	TextField,
	Grid,
	Typography,
	Button,
	Fade
} from '@material-ui/core'
import { isWidthUp } from '@material-ui/core/withWidth'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import ossos from '../../ossos-pattern.png'
import NumberFormat from 'react-number-format'

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

export const HeaderComponent = ({ classes, setFilter, width }) => {
	const [advancedFilter, setAdvancedFilter] = useState(false)
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
								onChange={({ target: { value: ownersPhone } }) =>
									setFilter({ ownersPhone })
								}
								fullWidth
								label="Telefone do dono"
								variant="outlined"
								InputProps={{
									inputComponent: NumberFormatCustom
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={6} md={4} lg={3}>
							<TextField
								margin="dense"
								onChange={({ target: { value: name } }) => setFilter({ name })}
								fullWidth
								label="Nome do animal"
								variant="outlined"
							/>
						</Grid>
						{(advancedFilter || isWidthUp('md', width)) && (
							<Fade in={true}>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<TextField
										margin="dense"
										onChange={({ target: { value: race } }) =>
											setFilter({ race })
										}
										fullWidth
										label="Raça"
										variant="outlined"
									/>
								</Grid>
							</Fade>
						)}
						{(advancedFilter || isWidthUp('lg', width)) && (
							<Fade in={true}>
								<Grid item xs={12} sm={6} md={4} lg={3}>
									<TextField
										margin="dense"
										onChange={({ target: { value: race } }) =>
											setFilter({ race })
										}
										fullWidth
										label="Raça"
										variant="outlined"
									/>
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
					{advancedFilter ? 'contrair filtros' : 'expandir filtros'}
				</Button>
			)}
		</div>
	)
}
HeaderComponent.propTypes = propTypes
