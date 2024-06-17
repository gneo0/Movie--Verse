import styles from './styles/MovieSlide.module.css';
import MovieSlideDetails from './MovieSlideDetails';

export default function MovieSlide({ movie }) {
	return (
		<div className={styles.hero}>
			<img
				src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
				alt={movie.title}
			/>
			<MovieSlideDetails movie={movie} />
		</div>
	);
}
