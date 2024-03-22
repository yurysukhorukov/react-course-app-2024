import { createSelector } from '@reduxjs/toolkit';

export const getCourses = (state) => state.courses;
export const getAuthors = (state) => state.authors;
export const getUser = (state) => state.user;

export const selectCoursesAndAuthors = createSelector(
	[getCourses, getAuthors],
	(courses, authors) => ({
		courses,
		authors,
	})
);
