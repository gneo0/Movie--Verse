import styles from './styles/Loader.module.css';

export default function Loader() {
	return (
		<div className={styles.loaderContainer}>
			<span className={styles.loader}></span>
		</div>
	);
}
