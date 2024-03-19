import { Link } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';

export const CourseCard = (props) => {
	const id = props.id;
	const title = props.title;
	const description = props.description;
	const authors = props.authors;
	const duration = props.duration;
	const creationDate = props.creationDate;
	return (
		<div className={'course-card'}>
			<h2>{title}</h2>
			<p>{description}</p>
			<p className={'authors'}>
				<b>Authors: </b>
				{authors}
			</p>
			<p className={'duration'}>
				<b>Duration: </b>
				{duration}
			</p>
			<p className={'creationDate'}>
				<b>Created: </b>
				<time>{creationDate}</time>
			</p>
			<Link to={`/courses/${id}`} state={{ props }}>
				<Button buttonText='SHOW COURSE' />
			</Link>
		</div>
	);
};
