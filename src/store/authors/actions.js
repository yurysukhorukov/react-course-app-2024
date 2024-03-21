import {
	ADD_AUTHOR,
	DELETE_AUTHOR,
	GET_ALL_AUTHORS,
	SAVE_AUTHOR,
} from './types';

export const addAuthorAction = (payload) => ({
	type: ADD_AUTHOR,
	payload,
});
export const deleteAuthorAction = (payload) => ({
	type: DELETE_AUTHOR,
	payload,
});
export const saveAuthorAction = (payload) => ({
	type: SAVE_AUTHOR,
	payload,
});

export const getAllAuthors = (payload) => ({
	type: GET_ALL_AUTHORS,
	payload,
});
