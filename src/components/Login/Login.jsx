import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { useState } from 'react';

export const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Check if all fields are not empty
		if (email && password) {
			// All fields are filled, proceed with registration logic
			const newUser = {
				password: password,
				email: email,
			};

			const response = await fetch('http://localhost:4000/login', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			if (result.successful) {
				localStorage.setItem(email, result.result);
				console.log('Login successful');
				navigate('/courses');
			} else {
				alert(result.errors);
			}
		} else {
			// Not all fields are filled, display an error message or take appropriate action
			console.log('Please fill in all fields');
			// Set error state for empty fields
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
