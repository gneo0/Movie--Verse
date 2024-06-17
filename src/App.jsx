import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
	const location = useLocation();
	
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [location]);
	
	return (
		<>
			<Navbar />
			<Header />

			<main className="pages">
				<Outlet />
			</main>
		</>
	);
}

export default App;
