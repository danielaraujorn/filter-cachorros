import { ListComponent } from './ListComponent'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { withLanguage } from 'HOC/withLanguage'
import { compose } from 'utils/compose'
import { style } from './style'

export const List = compose(
	withStyles(style),
	withLanguage,
	withWidth()
)(ListComponent)
