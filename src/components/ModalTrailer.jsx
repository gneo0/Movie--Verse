import styles from './styles/ModalTrailer.module.css';
import { createPortal } from 'react-dom';

import Loader from '../ui/Loader';
import ErrorMsg from '../ui/ErrorMsg';
import { useModalTrailer } from '../hooks/useModalTrailer';
import { useHeroCarousel } from '../context/HeroCarouselContext';

export default function ModalTrailer() {
	const { modalTrailerID, handleModalState } = useHeroCarousel();
	const { moviePath, isModalLoading, isError } =
		useModalTrailer(modalTrailerID);

	return createPortal(
		<div onClick={handleModalState} className={styles.trailerPlayer}>
			<aside>
				{isModalLoading && <Loader />}
				{!isError ? (
					<iframe
						src={`https://www.youtube.com/embed/${moviePath}`}
						allowFullScreen
					></iframe>
				) : (
					<ErrorMsg>Trailer not found</ErrorMsg>
				)}
			</aside>
		</div>,
		document.body
	);
}
