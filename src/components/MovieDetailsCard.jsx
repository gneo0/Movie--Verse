import styles from './styles/MovieDetailsCard.module.css';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';

import { useLoaderData, useNavigate } from 'react-router-dom';
import MoviePoster from '../ui/MoviePoster';
import MovieOverview from './MovieOverview';
import MovieDetails from './MovieDetails';
import MovieTrailersCont from './MovieTrailersCont';

export default function MovieDetailsCard() {
	const navigate = useNavigate();
	const { movieDetails, movieTrailers } = useLoaderData();

	return (
		<section className={styles.movieDetailsContainer}>
			<button
				aria-label="Go Back"
				onClick={() => navigate(-1)}
				className={styles.goBackBtn}
			>
				<KeyboardReturnRoundedIcon />
			</button>

			<div className={styles.movieDesc}>
				<MoviePoster movie={movieDetails} className={styles.poster} />
				<MovieOverview movie={movieDetails} />
			</div>

			<div className={styles.detailsTrailer}>
				<MovieDetails movie={movieDetails} />
				<MovieTrailersCont movieTrailers={movieTrailers} />
			</div>
		</section>
	);
}
