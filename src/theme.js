import { createMuiTheme } from '@material-ui/core/styles'
const CLARO = '#9adcfb'
const MEDIO = '#81d4fa'
const ESCURO = '#5a94af'
const BORDER_RADIUS = 10
export const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			contained: {
				borderRadius: BORDER_RADIUS,
				boxShadow: 'none'
			}
		},
		MuiPaper: {
			rounded: {
				borderRadius: BORDER_RADIUS
			}
		},
		MuiFormLabel: { root: { color: '#000000CC' } },
		MuiOutlinedInput: {
			input: { backgroundColor: CLARO, borderRadius: BORDER_RADIUS }
		},
		MuiTextField: {
			root: {
				'& label.Mui-focused': {
					color: '#000000CC'
				},
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderRadius: BORDER_RADIUS,
						borderColor: '#000000CC'
					},
					'&.Mui-focused fieldset': {
						borderColor: '#000000CC'
					}
				}
			}
		}
	},
	palette: {
		gradientLight: (deg = '0deg') =>
			`linear-gradient(${deg},${MEDIO},${CLARO})`,
		gradientDark: (deg = '0deg') =>
			`linear-gradient(${deg},${ESCURO},${MEDIO})`,
		gradient: (deg = '0deg') => `linear-gradient(${deg},${ESCURO},${CLARO})`,
		primary: {
			light: CLARO,
			main: MEDIO,
			dark: ESCURO,
			contrastText: '#000'
		},
		secondary: {
			light: '#FF9748',
			main: '#F56E1B',
			dark: '#B74F00',
			contrastText: '#fff'
		},
		backgroundColor: '#eee'
	}
})
