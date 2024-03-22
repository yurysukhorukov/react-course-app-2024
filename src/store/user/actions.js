import { LOGIN, LOGOUT, USER_INFO } from './types';

export const getUserAction = () => ({
	type: USER_INFO,
});
export const loginUserAction = (payload) => ({
	type: LOGIN,
	payload,
});
export const logoutUserAction = () => ({
	type: LOGOUT,
});
