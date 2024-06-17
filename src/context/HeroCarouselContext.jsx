import { createContext, useContext, useEffect, useState } from 'react';

const HeroCarouselContext = createContext(undefined);

function HeroCarouselProvider({ children }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalTrailerID, setModalTrailerID] = useState(0);

	const handleModalState = () => setModalOpen((isOpen) => !isOpen);

	// Open the ModalTrailer component and display the trailer
	const handleWatchTrailer = (id) => {
		setModalTrailerID(id);
		handleModalState();
	};

	// Functionality to close modal using Esc
	useEffect(() => {
		const handleEscKey = (e) => e.key === 'Escape' && handleModalState();

		document.addEventListener('keydown', handleEscKey);

		return () => document.removeEventListener('keydown', handleEscKey);
	}, []);

	return (
		<HeroCarouselContext.Provider
			value={{
				modalOpen,
				modalTrailerID,
				setModalTrailerID,
				handleModalState,
				handleWatchTrailer,
			}}
		>
			{children}
		</HeroCarouselContext.Provider>
	);
}

const useHeroCarousel = () => {
	const context = useContext(HeroCarouselContext);

	if (context === undefined)
		throw new Error(
			'HeroCarousel context must be used inside HeroCarouselProvider'
		);
	return context;
};

export { HeroCarouselProvider, useHeroCarousel };
