import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = (props) => {
	const handleClick = (e) => {
		if (props.onClick) {
			e.preventDefault();
			props.onClick();
		}
	};
	return (
		<button type={props.type} onClick={handleClick}>
			{props.icon && <FontAwesomeIcon icon={props.icon} />}
			{props.buttonText}
		</button>
	);
};
