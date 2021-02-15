//#region IMPORTS
// import '../../commonStyles/positions.scss';
import Container from '@material-ui/core/Container';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import landingPageStyles from './landingPageStyles';
import './landingPageAnimations.scss';
import buttonsInfo from './buttonInfo';
import { v4 as uuidv4 } from 'uuid';
import '../../commonStyles/buttonAnims.scss';
//#endregion

const LandingPage = ({ ...authorData }) => {
	//#region INITILISATION
	//#region STATE
	const [themePalette] = useState(useTheme().palette);
	const [currentDisplayedRole, setCurrentDisplayedRole] = useState('');
	//#endregion
	//#region STYLES
	const styles = landingPageStyles({
		themePrimaryColour: themePalette.primary.main,
		btnBackgroundColour: 'black',
		btnSize: { main: '14px', side: '12px' },
		themeSecondaryColour: themePalette.secondary.main,
	});
	//#endregion
	//#endregion

	//#region CUSTOM METHODS
	const checkIfButtonRedirects = (object) => {
		if (!object.redirect) {
			return (
				<Link to={object.link}>
					<Button variant='contained' className={`${styles.mainBtn} hvr-bob`}>
						{object.text}
					</Button>
				</Link>
			);
		} else {
			return (
				<ExternalLink to={object.link} newTab={true}>
					<Button className={`${styles.sideBtn} hvr-bob`}>{object.text}</Button>
				</ExternalLink>
			);
		}
	};

	const setRandomRole = () => {
		setCurrentDisplayedRole(
			//*Filter to return an array without the previous role and randomly choose from it
			authorData.roles.filter((role) => role !== currentDisplayedRole)[
				Math.floor(Math.random() * authorData.roles.length)
			]
		);
	};
	//#endregion

	return (
		<Container>
			<div className={`${styles.header}`}>
				<Typography variant='h2' align='center' className={`${styles.standOut}`}>
					{authorData.name}
				</Typography>

				<Typography align='center' variant='h5'>
					<div className='subHeading' onAnimationStart={setRandomRole} onAnimationIteration={setRandomRole}>
						{currentDisplayedRole ? currentDisplayedRole : setRandomRole()}
					</div>
				</Typography>

				<Box pt={4} />

				<Grid container direction='row-reverse' alignItems='center' justify='center' spacing={8}>
					{buttonsInfo(authorData.cv, authorData.email).map((button) => {
						return (
							<Grid key={uuidv4()} item>
								{checkIfButtonRedirects(button)}
							</Grid>
						);
					})}
				</Grid>
			</div>
		</Container>
	);
};

export default LandingPage;
