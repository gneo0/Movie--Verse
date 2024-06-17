import Movie from './Movie';

export default function MovieList({ movies, className }) {
	return (
		<ul className={className}>
			{movies.map((movie, i) => (
				<Movie key={i} movie={movie} />
			))}
		</ul>
	);
}
