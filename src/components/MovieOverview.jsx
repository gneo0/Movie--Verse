import styles from './styles/MovieOverview.module.css';

export default function MovieOverview({ movie }) {
	return (
		<div
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
			}}
			className={styles.movieDetails}
		>
			<h2>{movie.title}</h2>

			{movie.original_title !== movie.title && (
				<small>Original Title: {movie.original_title}</small>
			)}

			{movie.tagline && (
				<small className={styles.tagline}>&ldquo;{movie.tagline}&ldquo;</small>
			)}

			<p className={styles.overview}>{movie.overview}</p>

			{movie.spoken_languages.length > 0 && (
				<div className={styles.languages}>
					<p>Languages spoken:</p>
					{movie.spoken_languages.map((language, i) => (
						<p key={i}>{language.iso_639_1.toUpperCase()}</p>
					))}
				</div>
			)}
		</div>
	);
}
