import { ListComponent } from './ListComponent'
import withWidth from '@material-ui/core/withWidth'
import { withLanguage } from 'HOC/withLanguage'
import { compose } from 'utils/compose'

export const List = compose(
	withLanguage,
	withWidth()
)(ListComponent)
