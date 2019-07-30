import { createMuiTheme } from '@material-ui/core/styles'
const CLARO = '#529EA1'
const MEDIO = '#4B9194'
const ESCURO = '#458587'
export const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			contained: {
				boxShadow: 'none'
			}
		}
	},
	palette: {
		gradientWhite: (deg = '0deg') =>
			`linear-gradient(${deg},#ffffff00,#ffffff22)`,
		gradientLight: (deg = '0deg') =>
			`linear-gradient(${deg},${MEDIO},${CLARO})`,
		gradienteDark: (deg = '0deg') =>
			`linear-gradient(${deg},${ESCURO},${MEDIO})`,
		gradient: (deg = '0deg') => `linear-gradient(${deg},${ESCURO},${CLARO})`,
		primary: {
			light: CLARO,
			main: MEDIO,
			dark: ESCURO,
			contrastText: '#fff'
		},
		secondary: {
			light: '#FF9748',
			main: '#F56E1B',
			dark: '#B74F00',
			contrastText: '#fff'
		}
	}
})
