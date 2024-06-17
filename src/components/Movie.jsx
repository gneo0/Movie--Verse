import styles from './styles/Movie.module.css';
import { useNavigate } from 'react-router-dom';

import YearRating from '../ui/YearRating';
import MoviePoster from '../ui/MoviePoster';

export default function Movie({ movie }) {
	const navigate = useNavigate();

	const handleNavigation = (e) =>
		(e.type === 'click' || e.key === 'Enter') && navigate(`/movie/${movie.id}`);

	return (
		<li
			tabIndex="0"
			onKeyDown={handleNavigation}
			onClick={handleNavigation}
			className={styles.movie}
		>
			<MoviePoster movie={movie} className={styles.poster} />

			<div className={styles.movieDetails}>
				<p className={styles.movieTitle}>{movie.title}</p>
				<YearRating movie={movie}></YearRating>
			</div>
		</li>
	);
}
