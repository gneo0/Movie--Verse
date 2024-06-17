import { useEffect, useState } from 'react';
import { options } from '../api/apiConfig';

export function useFetch(apiUrl) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		(async function getData() {
			try {
				setIsLoading(true);
				const res = await fetch(apiUrl, options);

				if (!res.ok)
					throw new Error('Something went wrong with the response of movies');

				const data = await res.json();
				setData(data);
			} catch (err) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [apiUrl]);

	return { data, isLoading, isError };
}
