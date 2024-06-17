import styles from './styles/Header.module.css';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';

import Logo from '../ui/Logo';
import SearchForm from './SearchForm';
import Button from '../ui/Button';
import { useToggleMode } from '../hooks/useToggleMode';

export default function Header() {
	// Used for animation purposes
	const ref = useRef();
	const { toggleTheme, isDarkMode } = useToggleMode();

	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from('#themeInput', {
				opacity: 0,
				y: -20,
				ease: 'circ.out',
			});
			tl.from('p', {
				opacity: 0,
				y: 15,
				ease: 'circ.out',
			});
			tl.from('#verse', {
				opacity: 0,
				x: -20,
				ease: 'elastic.inOut(2,1)',
			});
		},
		{ scope: ref }
	);

	return (
		<header ref={ref}>
			<Logo />
			<div id="themeInput" className={styles.searchModeContainer}>
				<SearchForm />

				<Button
					ariaLabel={!isDarkMode ? 'Light Mode' : 'Dark Mode'}
					onClick={toggleTheme}
					className={styles.toggleMode}
				>
					{!isDarkMode ? <LightModeRoundedIcon /> : <BedtimeRoundedIcon />}
				</Button>
			</div>
		</header>
	);
}
