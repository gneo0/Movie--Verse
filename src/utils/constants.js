export const SPLIDE_OPTIONS = {
	interval: 1000,
	pauseOnFocus: true,
	rewind: true,
	arrows: false,
	pagination: true,
	paginationDirection: 'ttb',
	direction: 'ttb',
	height: 720,
	wheel: true,
	waitForTransition: true,
	wheelSleep: 100,
	focusableNodes: 'button',
};

export const movieLists = [
	{
		title: 'Top Rated',
		apiLink:
			'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
	},
	{
		title: 'Popular',
		apiLink: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
	},
	{
		title: 'Now Playing',
		apiLink:
			'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2',
	},
];
