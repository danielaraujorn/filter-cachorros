import { ListComponent } from './ListComponent'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { compose } from 'utils/compose'
import { style } from './style'

export const List = compose(
	withStyles(style),
	withWidth()
)(ListComponent)
