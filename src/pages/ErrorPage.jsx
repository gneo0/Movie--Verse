import styles from './styles/ErrorPage.module.css';
import { useRouteError } from 'react-router-dom';
import Button from '../ui/Button';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<section className={styles.errorPage}>
			<div className={styles.errorText}>
				<h1>Ooops!</h1>
				<div>
					<p>Sorry, an unexpected error has occured.</p>
					<p className={styles.errorMsg}>{error.statusText || error.message}</p>
				</div>
				<Button path={-1}>&larr; Go Back</Button>
			</div>
		</section>
	);
}
