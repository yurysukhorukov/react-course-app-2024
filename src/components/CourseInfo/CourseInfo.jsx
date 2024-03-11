import { Courses } from '../Courses/Courses';
import { useState } from 'react';

export const CourseInfo = (props) => {
	const [toggle, setToggle] = useState(false);

	return toggle === true ? (
		<Courses />
	) : (
		<div className={'courseInfo'}>
			<title>{props.title}</title>
			<p>{props.description}</p>
			<p className={'id'}>
				<b>ID: </b>
				{props.id}
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
			<button onClick={() => setToggle(!toggle)}>BACK</button>
		</div>
	);
};
