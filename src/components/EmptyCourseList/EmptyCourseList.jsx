import { Button } from '../../common/Button/Button';

export const EmptyCourseList = () => {
	return (
		<div className={'emptyCourseList'}>
			<h2>'Course List is Empty'</h2>
			<sub>'Please use "Add New Course" button to add your first course'</sub>
			<Button buttonText='ADD NEW COURSE' />
		</div>
	);
};
