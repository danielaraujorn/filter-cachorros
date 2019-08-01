import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import PropTypes from 'prop-types'
export class OutlinedSelectComponent extends Component {
	static propTypes = {
		label: PropTypes.string,
		...Select.propTypes,
		formControlProps: PropTypes.object,
		inputLabelProps: PropTypes.object,
		inputProps: PropTypes.object
	}
	state = {
		labelWidth: 0
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
		})
	}
	render() {
		const { fullWidth = false } = this.props
		const {
			label = '',
			formControlProps,
			inputLabelProps,
			inputProps,
			children,
			variant = 'outlined',
			...selectProps
		} = this.props
		return (
			<FormControl
				fullWidth={fullWidth}
				variant={variant}
				{...formControlProps}
			>
				<InputLabel
					{...inputLabelProps}
					ref={ref => {
						this.InputLabelRef = ref
					}}
					htmlFor="outlined-age-simple"
					style={{ zIndex: 0 }}
				>
					{label}
				</InputLabel>
				<Select
					{...selectProps}
					input={
						<OutlinedInput
							required
							{...inputProps}
							labelWidth={this.state.labelWidth}
							id="outlined-age-simple"
						/>
					}
				>
					{children}
				</Select>
			</FormControl>
		)
	}
}
