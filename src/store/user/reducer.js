import { LOGIN, LOGOUT } from './types';

const userInitialState = {
	name: null,
	token: null,
	email: null,
};

export const userReducer = (user = userInitialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				name: action.payload.user.name,
				token: action.payload.result,
				email: action.payload.user.email,
			};
		case LOGOUT:
			return {};
		default:
			return user;
	}
};
