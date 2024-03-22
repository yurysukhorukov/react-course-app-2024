import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { useEffect, useState } from 'react';
import { LOGIN_URL, token } from '../../constants';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../store/user/actions';

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			navigate('/courses');
		}
	}, [navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			const newUser = {
				password: password,
				email: email,
			};

			try {
				const response = await fetch(LOGIN_URL, {
					method: 'POST',
					body: JSON.stringify(newUser),
					headers: {
						'Content-type': 'application/json',
						Authorization: token,
					},
				});

				if (!response.ok) {
					const errorResponse = await response.json();
					throw new Error(errorResponse.errors);
				}

				const data = await response.json();
				dispatch(loginUserAction(data));
				localStorage.setItem('token', data.result);

				console.log('Login successful');
				navigate('/courses');
			} catch (err) {
				console.error('Error: ', err.message);
			}
		} else {
			console.log('Please fill in all fields');
			setEmailError(!email);
			setPasswordError(!password);
		}
	};

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div className={`form-group ${emailError ? 'error' : ''}`}>
				<label htmlFor='email'>Email:</label>
				<Input
					type='email'
					id='email'
					value={email}
					placeholder={'type your email'}
					onChange={(e) => {
						setEmail(e.target.value);
						setEmailError(false); // Clear error when user starts typing
					}}
				/>
				{emailError && <p className='error-message'>Email is required.</p>}
			</div>
			<div className={`form-group ${passwordError ? 'error' : ''}`}>
				<label htmlFor='password'>Password:</label>
				<Input
					type='password'
					id='password'
					value={password}
					placeholder={'type your password'}
					onChange={(e) => {
						setPassword(e.target.value);
						setPasswordError(false); // Clear error when user starts typing
					}}
				/>
				{passwordError && (
					<p className='error-message'>Password is required.</p>
				)}
			</div>
			<Button type='submit' buttonText={'Login'} />
			<p>
				If you don't have an account you may
				<Link to={'/registration'}>
					<b> Register</b>
				</Link>
			</p>
		</form>
	);
};
