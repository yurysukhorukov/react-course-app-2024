import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setLoggedIn(localStorage.getItem('sukhorukovyury@gmail.com') !== null);
	}, [location.pathname]);

	return (
		<header>
			<Logo />
			{loggedIn && <p>Iurii Sukhorukov</p>}
			<Button buttonText='Login' onClick={() => alert('Hi there!')} />
		</header>
	);
};
