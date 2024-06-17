import styles from './styles/MovieDetails.module.css';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function MovieDetails({ movie }) {
	return (
		<div className={styles.details}>
			<div className={styles.rating}>
				<p>
					{movie.vote_average.toFixed(1)}
					<span>
						<StarRoundedIcon />
					</span>
				</p>

				{movie.imdb_id && (
					<Link
						to={`https://www.imdb.com/title/${movie.imdb_id}`}
						target="__blank"
					>
						IMDb
					</Link>
				)}
			</div>

			<div className={styles.smallDetails}>
				{movie.release_date && <p>{movie.release_date.slice(0, 4)} |</p>}
				{movie.runtime && <p>{movie.runtime}mins</p>}
			</div>

			<div className={styles.genres}>
				<p>Genres:</p>
				{movie.genres.length ? (
					<ul className={styles.genreList}>
						{movie.genres.slice(0, 3).map((genre, i) => (
							<li key={i}>{genre.name}</li>
						))}
					</ul>
				) : (
					<p>-</p>
				)}
			</div>

			{movie.homepage && (
				<Link
					className={styles.officialWebsite}
					to={movie.homepage}
					target="_blank"
				>
					Official Website
				</Link>
			)}
		</div>
	);
}
