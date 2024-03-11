import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

export const Header = () => {
	return (
		<header>
			<Logo />
			<Button buttonText='Login' onClick={() => alert('Hi there!')} />
		</header>
	);
};
