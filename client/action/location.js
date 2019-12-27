import { LOCATION_CREATED, LOCATION_FAILED, GET_LOCATIONS, GET_LOCATION } from './types';
import axios from 'axios';
import {setAlert} from './alert';
export const hostName = 'http://localhost:3001';

export const createLocation = (formData) => async dispatch => {

	try {

		const response = await axios.post(hostName + '/api/location', formData);
		dispatch({type:LOCATION_CREATED, payload:response.data});

	} catch (err) {
		console.log(err);
		dispatch({type:LOCATION_FAILED});
	}
};

export const getLocations = () => async dispatch => {

		try {
			const response = await axios.get(hostName + '/api/location');
			dispatch({type:GET_LOCATIONS, payload:response.data});
			dispatch(setAlert('Locations Loaded', 'success', 2000));
		} catch (err) {
			console.log(err);
			dispatch({type:LOCATION_FAILED});
		}
};

export const getLocation = (id) => async dispatch => {

		try {
			const response = await axios.get(hostName + '/api/location/' + id);
			dispatch({type:GET_LOCATION, payload:response.data});
			dispatch(setAlert('Location Loaded', 'success', 2000));
		} catch (err) {
			console.log(err);
			dispatch({type:LOCATION_FAILED});
		}
};
