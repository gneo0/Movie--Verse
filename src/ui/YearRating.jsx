import styles from './styles/YearRating.module.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function YearRating({ movie, width }) {
	return (
		<div style={{ width }} className={styles.yearRating}>
			<p>{movie.release_date ? movie.release_date.slice(0, 4) : '-'}</p>
			<div>
				<p className={styles.rating}>
					{movie.vote_average ? movie.vote_average.toFixed(1) : '-'}
				</p>
				<span className={styles.ratingStar}>
					<StarRoundedIcon />
				</span>
			</div>
		</div>
	);
}
