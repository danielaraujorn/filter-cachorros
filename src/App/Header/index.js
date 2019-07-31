import { HeaderComponent } from './HeaderComponent'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { compose } from 'utils/compose'
import { style } from './style'

export const Header = compose(
	withStyles(style),
	withWidth()
)(HeaderComponent)
