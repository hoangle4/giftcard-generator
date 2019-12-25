import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOG_OUT,
	// SET_ALERT,
	CLEAR_PROFILE
} from './types';
import { setAlert } from './alert';
import { setAuthToken } from '../utils';

//Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.getItem('token')) {
		setAuthToken(localStorage.getItem('token'));
	}

	try {
		const result = await axios.get('/api/auth');

		dispatch({ type: USER_LOADED, payload: result.data });
	} catch (error) {
		dispatch({ type: AUTH_ERROR });
	}
};

//Register User

export const register = ({ name, email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	console.log(name);

	const body = JSON.stringify({ name, email, password });
	try {
		const result = await axios.post('/api/users', body, config);
		dispatch({ type: REGISTER_SUCCESS, payload: { token: result.data } });
		dispatch(loadUser());
	} catch (error) {
		const errors = error.response.data.errors;
		console.log(errors);
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: REGISTER_FAIL });
	}
};

export const login = ({ email, password }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email, password });
	try {
		const result = await axios.post('/api/auth', body, config);
		console.log(result);
		dispatch({ type: LOGIN_SUCCESS, payload: { token: result.data } });
		dispatch(loadUser());
		dispatch(setAlert('Login Successful', 'success', 2000));
	} catch (error) {
		const errors = error.response.data.errors;
		console.log(error);
		if (errors) {
			errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
		}
		dispatch({ type: LOGIN_FAIL });
	}
};

//Logout / Clear Profile

export const logout = () => (dispatch) => {
	dispatch({ type: LOG_OUT });
};
