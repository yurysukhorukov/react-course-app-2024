import { Button } from '../../common/Button/Button';

export const EmptyCourseList = () => {
	return (
		<div className={'emptyCourseList'}>
			<title>'Course List is Empty'</title>
			<sub>'Please use "Add New Course" button to add your first course'</sub>
			<Button buttonText='ADD NEW COURSE' />
		</div>
	);
};
