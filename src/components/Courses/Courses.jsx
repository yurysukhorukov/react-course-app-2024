import { CourseCard } from './components/CourseCard/CourseCard';
import {
	AUTHORS_ALL,
	COURSES_ALL,
	formatDate,
	formatTime,
} from '../../constants';
import { Button } from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCourses } from '../../store/courses/actions';
import { getAllAuthors } from '../../store/authors/actions';
import moment from 'moment';
import { selectCoursesAndAuthors } from '../../selectors';
import { getUserAction } from '../../store/user/actions';

export const Courses = () => {
	const { courses, authors } = useSelector(selectCoursesAndAuthors);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (!token) {
			navigate('/login');
		}
	});

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
					creationDate={formatDate(
						moment(course.creationDate, 'DD/MM/YYYY').toDate()
					)}
				/>
			);
		}
		return courseCardList;
	}

	function generateMockedCourseAuthors(course) {
		return [...authors]
			.filter((a) => course.authors.includes(a.id))
			.map((a) => a.name)
			.join(', ');
	}
};
