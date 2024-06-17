import styles from './styles/MovieTrailersCont.module.css';
import ErrorMsg from '../ui/ErrorMsg';
import MovieTrailersList from './MovieTrailersList';

export default function MovieTrailersCont({ movieTrailers }) {
	return (
		<div className={styles.trailerContainer}>
			<h3>Trailers & videos</h3>
			<div className={styles.trailers}>
				{movieTrailers.results.length ? (
					<MovieTrailersList trailers={movieTrailers.results} />
				) : (
					<ErrorMsg>Trailers not found</ErrorMsg>
				)}
			</div>
		</div>
	);
}
