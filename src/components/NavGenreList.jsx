import styles from './styles/NavGenreList.module.css';
import { useNavigate } from 'react-router-dom';

import Genre from '../ui/Genre';
import { useFetch } from '../hooks/useFetch';

export default function NavGenreList({ onNavState }) {
	const navigate = useNavigate();
	const { data } = useFetch(
		'https://api.themoviedb.org/3/genre/movie/list?language=en'
	);
	const { genres } = data;

	const handleNavigation = (genreName, id) => {
		navigate(`genres/${genreName}/${id}`);
		onNavState();
	};

	return (
		<ul className={styles.genres}>
			{genres?.map((genre) => (
				<Genre key={genre.id} genre={genre} onNavigation={handleNavigation} />
			))}
		</ul>
	);
}
