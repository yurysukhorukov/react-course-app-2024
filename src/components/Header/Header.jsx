import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import { getUserAction, logoutUserAction } from '../../store/user/actions';

export const Header = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const location = useLocation();
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userName = user !== undefined ? user.name : '';

	useEffect(() => {
		dispatch(getUserAction());
	}, [dispatch]);

	useEffect(() => {
		setLoggedIn(localStorage.getItem('token') !== null);
	}, [location.pathname]);

	const logoutUser = () => {
		localStorage.removeItem('token');
		dispatch(logoutUserAction());
		navigate('/login');
	};

	return (
		<header>
			<Logo />
			{loggedIn && <p>{userName}</p>}
			{loggedIn ? (
				<Button buttonText='Logout' onClick={() => logoutUser()} />
			) : (
				<Button buttonText='Login' onClick={() => navigate('/login')} />
			)}
		</header>
	);
};
