import styles from './styles/MovieSlideDetails.module.css';
import YearRating from '../ui/YearRating';
import Button from '../ui/Button';
import { truncateLargeText } from '../utils/helpers';
import { useHeroCarousel } from '../context/HeroCarouselContext';

export default function MovieSlideDetails({ movie }) {
	const { handleWatchTrailer } = useHeroCarousel();

	return (
		<div className={styles.movieDetails}>
			<h1>{movie.title}</h1>
			<YearRating width="2rem" movie={movie} />
			<p>{truncateLargeText(movie.overview)}</p>

			<div className={styles.movieDetailsButtons}>
				<Button path={`movie/${movie.id}`}>Read More</Button>
				<Button onClick={() => handleWatchTrailer(movie.id)}>
					Watch Trailer
				</Button>
			</div>
		</div>
	);
}
