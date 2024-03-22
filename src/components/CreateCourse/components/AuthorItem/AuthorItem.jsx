import { Button } from '../../../../common/Button/Button';

export const AuthorItem = (props) => {
	return (
		<div className={'authorItem'}>
			<h5 className='authorName'>{props.name}</h5>
			<Button
				className={props.buttonClass}
				onClick={props.onClick}
				icon={props.icon}
			/>
		</div>
	);
};
