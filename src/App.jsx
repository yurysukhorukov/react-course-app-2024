import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { useEffect, useState } from 'react';

function App() {
	// const [buttonText, setButtonText] = useState('Login');
	//
	// useEffect(() => {
	// 	const token = localStorage.getItem('token');
	// 	if (token) {
	// 		setButtonText('Logout');
	// 	}
	// }, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='*' element={<Navigate to='/' />} />
				<Route path='/' element={<Courses />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/add' element={<CreateCourse />} />
			</Routes>
		</>
	);
}

export default App;
