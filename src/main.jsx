import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './ui/Loader.jsx';
import { loader as genreLoader } from './pages/GenrePage.jsx';
import { loader as movieLoader } from './pages/MovieDetailsPage.jsx';
import { loader as searchLoader } from './pages/SearchPage.jsx';

const GenrePage = lazy(() => import('./pages/GenrePage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<Loader />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: 'genres/:genreName/:genreId',
				element: (
					<Suspense fallback={<Loader />}>
						<GenrePage />
					</Suspense>
				),
				loader: genreLoader,
			},
			{
				path: 'movie/:movieId',
				element: (
					<Suspense fallback={<Loader />}>
						<MovieDetailsPage />
					</Suspense>
				),
				loader: movieLoader,
			},
			{
				path: 'search/:movieName',
				element: (
					<Suspense fallback={<Loader />}>
						<SearchPage />
					</Suspense>
				),
				loader: searchLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
