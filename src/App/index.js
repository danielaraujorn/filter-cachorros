import { AppComponent } from './AppComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'

// Components

const App = compose(withStyles(style))(AppComponent)
export default App
