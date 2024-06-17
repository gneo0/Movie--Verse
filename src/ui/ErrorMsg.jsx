import styles from './styles/ErrorMsg.module.css';

export default function ErrorMsg({ children, color }) {
	return (
		<h2 className={styles.errorMsg} style={{color}}>
			{children}
		</h2>
	);
}
