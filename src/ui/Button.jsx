import styles from './styles/Button.module.css';
import { useNavigate } from 'react-router-dom';

export default function Button({ path, children, onClick, className, ariaLabel }) {
	const navigate = useNavigate();

	const handleClick = () => {
		if (path) navigate(path);
		if (onClick) onClick();
	};

	return (
		<button
			aria-label={ariaLabel ? ariaLabel : children}
			onClick={handleClick}
			className={className ? className : styles.btn}
		>
			{children}
		</button>
	);
}
