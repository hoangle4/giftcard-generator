import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { login } from '../action/auth';
import MyLayOut from '../components/MyLayOut';
const Login = ({ isAuthenticated, login }) => {
	const Router = useRouter();
	useEffect(
		() => {
			if (isAuthenticated) {
				Router.push('/');
			}
		},
		[ isAuthenticated ]
	);

	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const handleOnInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSignUp = async (e) => {
		e.preventDefault();
		await login(formData);
		isAuthenticated && setFromData({ ...formData, name: '', email: '', password: '' });
	};

	const { email, password } = formData;

	return (
		<MyLayOut>
			<form onSubmit={handleSignUp}>
				<label htmlFor="email">Email</label>
				<input onChange={handleOnInputChange} value={email} type="text" name="email" />
				<label htmlFor="password">Password</label>
				<input onChange={handleOnInputChange} value={password} type="password" name="password" />
				<input type="submit" value="Submit" />
			</form>
		</MyLayOut>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
