import { combineReducers } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer.js';
import { authorsReducer } from './authors/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
});
