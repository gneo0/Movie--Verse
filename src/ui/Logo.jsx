import styles from './styles/Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<Link className={styles.logoContainer}>
			<p>Movie</p>
			<span id="verse">Verse</span>
		</Link>
	);
}
