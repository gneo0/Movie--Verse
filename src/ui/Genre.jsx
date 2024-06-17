import styles from './styles/Genre.module.css';

export default function Genre({ genre, onNavigation }) {
	return (
		<li
			tabIndex="0"
			className={styles.genre}
			onClick={() => onNavigation(genre.name, genre.id)}
		>
			{genre.name}
		</li>
	);
}
