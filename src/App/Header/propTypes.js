import PropTypes from 'prop-types'

export const propTypes = {
	width: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
	filter: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	language: PropTypes.object.isRequired
}
