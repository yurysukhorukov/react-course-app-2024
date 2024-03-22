export const COURSES_ALL = 'http://localhost:4000/courses/all';
export const AUTHORS_ALL = 'http://localhost:4000/authors/all';
export const COURSES = 'http://localhost:4000/courses';
export const AUTHORS = 'http://localhost:4000/authors';
export const LOGIN_URL = 'http://localhost:4000/login';
export const AUTHORS_ADD = 'http://localhost:4000/authors/add';
export const COURSE_ADD = 'http://localhost:4000/courses/add';
export const HARDCODED_EMAIL = 'admin@email.com';
export const token = localStorage.getItem('token');

export const formatTime = (totalMinutes) => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	const hourHours = hours === 1 ? ' hour' : ' hours';
	return addLeadingZero(hours) + ':' + addLeadingZero(minutes) + hourHours;
};

export const formatDate = (date) => {
	return (
		addLeadingZero(date.getDate()) +
		'.' +
		addLeadingZero(date.getMonth()) +
		'.' +
		date.getFullYear()
	);
};

function addLeadingZero(number) {
	return ('0' + number).slice(-2);
}
