import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { getLanguage } from 'language'
import { LanguageContext } from 'Context/LanguageContext'

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<LanguageContext.Provider value={getLanguage()}>
			<App />
		</LanguageContext.Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
)

serviceWorker.unregister()
