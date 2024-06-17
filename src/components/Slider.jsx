import { useEffect, useRef } from 'react';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { useFetch } from '../hooks/useFetch';
import { SPLIDE_OPTIONS } from '../utils/constants';
import MovieSlide from './MovieSlide';

export default function Slider() {
	const splide = useRef();
	const { data } = useFetch(
		'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
	);
	const { results: movies } = data;

	// useEffect for autoplaying Splide slides
	useEffect(() => {
		const interval = setInterval(() => {
			splide.current.splide.go('>');
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Splide
			ref={splide}
			aria-label="Trending Movies"
			options={SPLIDE_OPTIONS}
			tag="section"
		>
			{movies?.map((movie) => (
				<SplideSlide key={movie.id}>
					<MovieSlide movie={movie} />
				</SplideSlide>
			))}
		</Splide>
	);
}
