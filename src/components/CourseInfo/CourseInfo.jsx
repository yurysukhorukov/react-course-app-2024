import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from '../../common/Button/Button';

export const CourseInfo = () => {
	const params = useParams();
	const location = useLocation();
	//is that ok to pass props like this?
	const props = location.state.props;

	return (
		<>
			<h2>Course id that came from URL is {params.courseId}</h2>
			<div className={'courseInfo'}>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
				<p className={'id'}>
					<b>ID: </b>
					{params.courseId}
				</p>
				<p className={'duration'}>
					<b>Duration: </b>
					{props.duration}
				</p>
				<p className={'creationDate'}>
					<b>Created: </b>
					<time>{props.creationDate}</time>
				</p>
				<p className={'authors'}>
					<b>Authors: </b>
					{props.authors}
				</p>
				<Link to='/courses'>
					<Button buttonText='BACK' />
				</Link>
			</div>
		</>
	);
};
