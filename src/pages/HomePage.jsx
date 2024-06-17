import HeroCarousel from '../components/HeroCarousel';
import MovieListRow from '../components/MovieListRow';
import { HeroCarouselProvider } from '../context/HeroCarouselContext';
import { movieLists } from '../utils/constants';

export default function HomePage() {
	return (
		<>
			<HeroCarouselProvider>
				<HeroCarousel />
			</HeroCarouselProvider>

			{movieLists.map((list) => (
				<MovieListRow key={list.title} list={list} />
			))}
		</>
	);
}
