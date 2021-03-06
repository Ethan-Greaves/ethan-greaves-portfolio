import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		color: theme.palette.secondary.main,
		textTransform: 'uppercase',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100vh',
	},

	standOut: {
		color: theme.palette.primary.main,
		fontWeight: 600,
	},

	arrow: {
		transitionTimingFunction: 'linear',
		color: theme.palette.primary.main,
		position: 'absolute',
		bottom: 0,
		left: '50%',
		marginBottom: '1.5em',
	},
}));

export default useStyles;
