import {
	ADD_AUTHOR,
	DELETE_AUTHOR,
	GET_ALL_AUTHORS,
	SAVE_AUTHOR,
} from './types';

export const authorsInitialState = [];
export const authorsReducer = (authors = authorsInitialState, action) => {
	switch (action.type) {
		case GET_ALL_AUTHORS:
		case SAVE_AUTHOR:
		case DELETE_AUTHOR:
			return action.payload;
		case ADD_AUTHOR:
			return [...authors, action.payload];
		default:
			return authors;
	}
};
