import { CourseCard } from './components/CourseCard/CourseCard';
import {
	AUTHORS_ALL,
	COURSES_ALL,
	formatDate,
	formatTime,
} from '../../constants';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCourses } from '../../store/courses/actions';
import { getAllAuthors } from '../../store/authors/actions';

export const Courses = () => {
	const { courses, authors } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(COURSES_ALL)
			.then((response) => response.json())
			.then((data) => dispatch(getAllCourses(data.result)));

		fetch(AUTHORS_ALL)
			.then((response) => response.json())
			.then((data) => dispatch(getAllAuthors(data.result)));
	}, [dispatch]);

	return (
		<div className={'courses'}>
			{courses.length === 0 ? (
				<EmptyCourseList />
			) : (
				<ul>
					{generateCourses().map((course) => (
						<li key={course.props.id}>{course}</li>
					))}
				</ul>
			)}
			<Link to={'/courses/add'}>
				<Button buttonText='ADD NEW COURSE' />
			</Link>
		</div>
	);

	function generateCourses() {
		let courseCardList = [];
		for (const course of courses) {
			const courseAuthors = generateMockedCourseAuthors(course);
			courseCardList.push(
				<CourseCard
					id={course.id}
					title={course.title}
					description={course.description}
					authors={courseAuthors}
					duration={formatTime(course.duration)}
					creationDate={formatDate(new Date(course.creationDate))}
				/>
			);
		}
		return courseCardList;
	}

	function generateMockedCourseAuthors(course) {
		return authors
			.filter((a) => course.authors.includes(a.id))
			.map((a) => a.name)
			.join(', ');
	}
};
