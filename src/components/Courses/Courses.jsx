import { CourseCard } from './components/CourseCard/CourseCard';
import {
	mockedCoursesList,
	formatTime,
	formatDate,
	generateMockedCourseAuthors,
} from '../../constants';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';

export const Courses = () => {
	return (
		<div className={'courses'}>
			{mockedCoursesList.length === 0 ? (
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
		for (const course of mockedCoursesList) {
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
};
