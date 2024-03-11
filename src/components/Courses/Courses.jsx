import { CourseCard } from './components/CourseCard/CourseCard';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { Button } from '../../common/Button/Button';
import { useState } from 'react';
import { CourseInfo } from '../CourseInfo/CourseInfo';

export const Courses = (props) => {
	const [toggle, setToggle] = useState(false);
	const [id, setId] = useState(false);
	const [title, setTitle] = useState(false);
	const [description, setDescription] = useState(false);
	const [duration, setDuration] = useState(false);
	const [creationDate, setCreationDate] = useState(false);
	const [authors, setAuthors] = useState(false);

	function setToggleAndCourseInfo(
		id,
		title,
		description,
		authors,
		duration,
		creationDate
	) {
		setToggle(!toggle);
		setId(id);
		setTitle(title);
		setDescription(description);
		setAuthors(authors);
		setDuration(duration);
		setCreationDate(creationDate);
	}

	return toggle === true ? (
		<CourseInfo
			id={id}
			title={title}
			description={description}
			authors={authors}
			duration={duration}
			creationDate={creationDate}
		/>
	) : (
		<div className={'courses'}>
			<ul>{generateCourses(mockedCoursesList, mockedAuthorsList)}</ul>
			<Button buttonText='ADD NEW COURSE' />
		</div>
	);

	function generateCourses(courseList, authorsList) {
		let courseCardList = [];
		for (const course of courseList) {
			const courseAuthors = authorsList
				.filter((a) => course.authors.includes(a.id))
				.map((a) => a.name)
				.join(', ');
			courseCardList.push(
				<CourseCard
					title={course.title}
					description={course.description}
					authors={courseAuthors}
					duration={formatTime(course.duration)}
					creationDate={formatDate(new Date(course.creationDate))}
					onClick={() =>
						setToggleAndCourseInfo(
							course.id,
							course.title,
							course.description,
							course.authors,
							formatTime(course.duration),
							formatDate(new Date(course.creationDate))
						)
					}
				/>
			);
		}
		return courseCardList;
	}

	function formatTime(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		const hourHours = hours === 1 ? ' hour' : ' hours';
		return addLeadingZero(hours) + ':' + addLeadingZero(minutes) + hourHours;
	}

	function formatDate(date) {
		return (
			addLeadingZero(date.getDate()) +
			'.' +
			addLeadingZero(date.getMonth()) +
			'.' +
			date.getFullYear()
		);
	}

	function addLeadingZero(number) {
		return ('0' + number).slice(-2);
	}
};
