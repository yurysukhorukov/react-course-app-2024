import { Link } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { COURSES } from '../../../../constants';
import { deleteCourseAction } from '../../../../store/courses/actions';

export const CourseCard = (props) => {
	const { courses } = useSelector((state) => state);
	const dispatch = useDispatch();

	const id = props.id;
	const title = props.title;
	const description = props.description;
	const authors = props.authors;
	const duration = props.duration;
	const creationDate = props.creationDate;
	const deleteCourse = () => {
		fetch(`${COURSES}/${id}`, { method: 'DELETE' })
			.then((response) => response.json)
			.then((data) => dispatch(deleteCourseAction(data)));
	};
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
			<Button
				icon='fa-solid fa-pencil'
				onClick={() => alert('No action yet')}
			/>
			<Button icon='fa-solid fa-trash' onClick={deleteCourse} />
		</div>
	);
};
