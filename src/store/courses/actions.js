import {
	ADD_COURSE,
	DELETE_COURSE,
	GET_ALL_COURSES,
	SAVE_COURSES,
} from './types.js';
export const addCourseAction = (payload) => ({
	type: ADD_COURSE,
	payload,
});
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const saveCoursesAction = (payload) => ({
	type: SAVE_COURSES,
	payload,
});

export const getAllCourses = (payload) => ({
	type: GET_ALL_COURSES,
	payload,
});
