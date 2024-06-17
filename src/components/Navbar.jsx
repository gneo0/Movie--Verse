import styles from './styles/Navbar.module.css';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import NavGenreList from './NavGenreList';
import Button from '../ui/Button';

export default function Navbar() {
	const [navOpened, setNavOpened] = useState(false);
	const handleNavState = () => setNavOpened((isOpened) => !isOpened);

	return (
		<nav className={navOpened ? '' : styles.closeNav}>
			<Button
				ariaLabel={navOpened ? 'Close Navigation' : 'Open Navigation'}
				onClick={handleNavState}
				className={styles.navBtn}
			>
				{navOpened ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
			</Button>
			<div className={styles.navWhite}>
				<div className={styles.moviesGenreList}>
					<p>Movies</p>
					<NavGenreList onNavState={handleNavState} />
				</div>
			</div>
			<div className={styles.navBlack} />
		</nav>
	);
}
