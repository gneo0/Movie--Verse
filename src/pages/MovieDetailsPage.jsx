import { useParams } from 'react-router-dom';

import { getMovieDetails, getMovieTrailers } from '../api/apiMovie';
import MovieListRow from '../components/MovieListRow';
import MovieDetailsCard from '../components/MovieDetailsCard';

export default function MovieDetailsPage() {
	const { movieId } = useParams();

	return (
		<>
			<MovieDetailsCard />
			<MovieListRow
				list={{
					title: 'You Might Also Like',
					apiLink: `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
				}}
			/>
		</>
	);
}

export const loader = async ({ params }) => {
	const movieDetails = await getMovieDetails(params.movieId);
	const movieTrailers = await getMovieTrailers(params.movieId);
	return { movieDetails, movieTrailers };
};
