import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { token } from './constants';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='*' element={<Navigate to='/' />} />
				<Route path='/' element={<Navigate to='/courses' />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route
					path='/courses/:courseId'
					element={token ? <CourseInfo /> : <Navigate to='/login' />}
				/>
				<Route
					path='/courses'
					element={token ? <Courses /> : <Navigate to='/login' />}
				/>
				<Route
					path='/courses/add'
					element={token ? <CreateCourse /> : <Navigate to='/login' />}
				/>
			</Routes>
		</>
	);
}

export default App;
