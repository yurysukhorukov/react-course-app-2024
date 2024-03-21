import {
	ADD_COURSE,
	DELETE_COURSE,
	GET_ALL_COURSES,
	SAVE_COURSES,
} from './types';

export const coursesInitialState = [];
export const coursesReducer = (courses = coursesInitialState, action) => {
	switch (action.type) {
		case GET_ALL_COURSES:
		case SAVE_COURSES:
		case DELETE_COURSE:
			return action.payload;
		case ADD_COURSE:
			return [...courses, action.payload];
		default:
			return courses;
	}
};
