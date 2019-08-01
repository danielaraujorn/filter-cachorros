import { HeaderComponent } from './HeaderComponent'
import { withStyles } from '@material-ui/core/styles'
import { withLanguage } from 'HOC/withLanguage'
import withWidth from '@material-ui/core/withWidth'
import { compose } from 'utils/compose'
import { style } from './style'

export const Header = compose(
	withStyles(style),
	withLanguage,
	withWidth()
)(HeaderComponent)
