import { ListItemComponent } from './ListItemComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'

export const ListItem = compose(withStyles(style))(ListItemComponent)
