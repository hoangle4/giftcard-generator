import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { register } from '../action/auth';
import MyLayOut from '../components/MyLayOut';
const SignUp = ({ isAuthenticated, register }) => {
	const Router = useRouter();
	useEffect(
		() => {
			if (isAuthenticated) {
				Router.push('/');
			}
		},
		[ isAuthenticated ]
	);

	const [ formData, setFromData ] = useState({
		name: '',
		email: '',
		password: ''
	});

	const handleOnInputChange = (e) => setFromData({ ...formData, [e.target.name]: e.target.value });

	const handleSignUp = async (e) => {
		e.preventDefault();
		await register(formData);
		isAuthenticated && setFromData({ ...formData, name: '', email: '', password: '' });
	};

	const { name, email, password } = formData;

	return (
		<MyLayOut>
			<form onSubmit={handleSignUp}>
				<label htmlFor="name">Name</label>
				<input onChange={handleOnInputChange} value={name} type="text" name="name" />
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

export default connect(mapStateToProps, { register })(SignUp);
