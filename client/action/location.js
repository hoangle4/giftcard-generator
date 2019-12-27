import { LOCATION_CREATED, LOCATION_FAILED } from './types';
import axios from 'axios';
export const hostName = 'http://localhost:3001';

export const createLocation = (formData) => async dispatch => {

	try {

		const response = await axios.post(hostName + '/api/location', formData);
		dispatch({types:LOCATION_CREATED, payload:response.data});

	} catch (err) {
		console.log(err);
		dispatch({types:LOCATION_FAILED});
	}
};
