import { combineReducers } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer.js';
import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});
