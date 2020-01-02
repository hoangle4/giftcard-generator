import { GIFT_CREATED, GIFT_FAILED, GET_GIFTS } from './types';
import axios from 'axios';
import { setAlert } from './alert';
export const hostName = 'http://localhost:3001';

export const createGift = (formData) => async (dispatch) => {
	try {
		const response = await axios.post(hostName + '/api/gift', formData);
		dispatch({ type: GIFT_CREATED, payload: response.data });
		dispatch(setAlert('Gift Created', 'success', 3000));
	} catch (err) {
		console.log(err);
		dispatch({ type: GIFT_FAILED });
	}
};

export const getGifts = (location) => async (dispatch) => {
	try {
		const response = await axios.get(hostName + '/api/gift?location=' + location);
		dispatch({ type: GET_GIFTS, payload: response.data });
		dispatch(setAlert('Gift Loaded', 'success', 3000));
	} catch (err) {
		console.log(err);
		dispatch({ type: GIFT_FAILED });
	}
};
