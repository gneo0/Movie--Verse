import { useEffect, useState } from 'react';

export const useToggleMode = () => {
	// Dynamically getting the isDarkmode state value based from localStorage's theme value
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const storedTheme = localStorage.getItem('theme');
		return storedTheme !== 'dark';
	});

	// Checking if theme value changed
	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			localStorage.setItem('theme', 'dark');
			document.body.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode((isDark) => !isDark);
		document.body.classList.toggle('dark');
		const newTheme = !isDarkMode ? '' : 'dark';
		localStorage.setItem('theme', newTheme);
	};
	return { toggleTheme, isDarkMode };
};
