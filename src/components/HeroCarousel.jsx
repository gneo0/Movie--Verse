import styles from './styles/HeroCarousel.module.css';
import { lazy } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { useHeroCarousel } from '../context/HeroCarouselContext';
import Slider from './Slider';
import ModalTrailer from './ModalTrailer';
import { useFetch } from '../hooks/useFetch';
const ErrorMsg = lazy(() => import('../ui/ErrorMsg'));
const Loader = lazy(() => import('../ui/Loader'));

export default function HeroCarousel() {
	const { isLoading, isError } = useFetch(
		'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
	);
	const { modalOpen } = useHeroCarousel();

	useGSAP(() => {
		gsap.from('#heroContainer', {
			opacity: 0,
			scale: 1.01,
			ease: 'power2.inOut',
			delay: 0.3,
		});
	}, []);

	return (
		<>
			<section id="heroContainer" className={styles.heroContainer}>
				{isLoading && <Loader />}
				{isError && (
					<ErrorMsg>Failed to load movies! Try to refresh the page.</ErrorMsg>
				)}

				<span className={styles.span}>Trending Movies</span>
				<Slider />
			</section>
			{modalOpen && <ModalTrailer />}
		</>
	);
}
