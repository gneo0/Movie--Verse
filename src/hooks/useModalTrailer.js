import { useEffect, useState } from 'react';
import { options } from '../api/apiConfig';

export const useModalTrailer = (id) => {
	const [moviePath, setMoviePath] = useState('');
	const [isModalLoading, setIsModalLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function getTrendMoviesTrailer() {
			try {
				setIsModalLoading(true);

				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
					options
				);

				if (!res.ok)
					throw new Error(
						'Something went wrong with the response of modal trailer'
					);

				const { results: movies } = await res.json();

				// Finding the trailer inside of results
				const trailer = movies.find((movie) => movie.type === 'Trailer');

				// Checking if there are not results at all
				if (!movies.length) {
					setIsError(true);
				} else if (trailer) {
					setMoviePath(trailer.key);
				} else {
					// Else just use the first element of data
					setMoviePath(movies[0].key);
				}
			} catch (err) {
				setIsError(true);
			} finally {
				setIsModalLoading(false);
			}
		}
		getTrendMoviesTrailer();
	}, [id]);

	return {
		moviePath,
		isModalLoading,
		isError,
	};
};
