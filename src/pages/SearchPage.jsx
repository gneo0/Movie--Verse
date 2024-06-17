import styles from './styles/GenrePage.module.css';
import { useLoaderData, useParams } from 'react-router-dom';

import { getMovieSearch } from '../api/apiMovie';
import MovieList from '../components/MovieList';

export default function SearchPage() {
	const { movieName } = useParams();
	const { results: searchMovies } = useLoaderData();

	return (
		<section className={styles.genreList}>
			<h1 className={styles.genreTitle}>Movies for: {movieName}</h1>
			{!searchMovies.length && (
				<h2>Couldn&apos;t found any movies for {movieName}</h2>
			)}
			<MovieList movies={searchMovies} className={styles.genre} />
		</section>
	);
}

export const loader = async ({ params }) =>
	await getMovieSearch(params.movieName);
