import styles from './styles/SearchForm.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function SearchForm() {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = function (e) {
		e.preventDefault();
		if (!searchValue) return;

		navigate(`/search/${searchValue}`);
		setSearchValue('');
	};

	return (
		<form className={styles.search} onSubmit={handleSearch}>
			<input
				type="text"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="Search for movies"
			/>
			<span aria-label="Search" onClick={handleSearch}>
				<SearchRoundedIcon />
			</span>
		</form>
	);
}
