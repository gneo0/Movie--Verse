import styles from './styles/MovieListRow.module.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { useFetch } from '../hooks/useFetch';
import Loader from '../ui/Loader';
import ErrorMsg from '../ui/ErrorMsg';
import MovieList from './MovieList';

export default function MovieListRow({ list }) {
	const { data, isLoading, isError } = useFetch(list.apiLink);
	const { results: movies } = data;

	useGSAP(() => {
		if (movies?.length)
			gsap.fromTo(
				'#movieListContainer',
				{
					y: 50,
					opacity: 0,
				},
				{
					opacity: 1,
					y: 0,
					delay: 0.4,
					ease: 'power1.out',
				}
			);
	}, [movies?.length]);

	if (!movies?.length) return;

	return (
		<section id="movieListContainer" className={styles.movieListContainer}>
			<h2 className={styles.movieTitle}>{list.title}</h2>
			{isLoading && <Loader />}
			{isError && (
				<ErrorMsg color="red">
					Couldn&apos;t get top rated movies! Check your internet connection or
					try refreshing your page.
				</ErrorMsg>
			)}
			<MovieList movies={movies} className={styles.movieList} />
		</section>
	);
}
