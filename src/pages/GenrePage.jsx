import styles from './styles/GenrePage.module.css';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { getGenreId } from '../api/apiMovie';
import Button from '../ui/Button';
import MovieList from '../components/MovieList';

export default function GenrePage() {
	const { genreName, genreId } = useParams();
	const { results: initialMovies } = useLoaderData();

	const [currentPage, setCurrentPage] = useState(1);

	// Checking if the user navigates to another genre then
	// set currentPage state to its initial state
	useEffect(() => setCurrentPage(1), [genreId]);

	const handleLoadMore = async () => {
		const nextPage = currentPage + 1;
		const data = await getGenreId(genreId, nextPage);
		initialMovies.push(...data.results);
		setCurrentPage(nextPage);
	};

	return (
		<section className={styles.genreList}>
			<h1 className={styles.genreTitle}>{genreName} Movies</h1>
			<MovieList movies={initialMovies} className={styles.genre} />
			<Button onClick={handleLoadMore}>Load more</Button>
		</section>
	);
}

export const loader = async ({ params }) => await getGenreId(params.genreId);
