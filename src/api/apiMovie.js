import { options } from './apiConfig';

export const getGenreId = async (id, num = 1) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${num}&with_genres=${id}`,
		options
	);

	const data = await res.json();
	return data;
};

export const getMovieDetails = async (id) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		options
	);

	const data = await res.json();
	return data;
};

export const getMovieTrailers = async (id) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
		options
	);

	const data = await res.json();
	return data;
};

export const getMovieSearch = async (movieName) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
		options
	);

	const data = await res.json();
	return data;
};
