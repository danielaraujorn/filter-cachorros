export const style = theme => ({
	header: {
		marginBottom: theme.spacing(2),
		backgroundImage: theme.palette.gradientLight('-15deg')
	},
	pattern: { backgroundSize: '50%' },
	headerPadding: { paddingTop: 24, paddingBottom: 16 },
	headerTitle: {
		marginBottom: theme.spacing(2),
		color: theme.palette.primary.contrastText
	},
	inputFocused: {
		borderColor: 'red'
	}
})
