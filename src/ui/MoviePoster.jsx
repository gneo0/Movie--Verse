export default function MoviePoster({ movie, className }) {
	return (
		<div className={className}>
			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
						: '/image-not-found.png'
				}
				alt={movie.title}
			/>
		</div>
	);
}
