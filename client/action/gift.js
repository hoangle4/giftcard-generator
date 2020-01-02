import { GIFT_CREATED, GIFT_FAILED } from './types';
import axios from 'axios';
import { setAlert } from './alert';
export const hostName = 'http://localhost:3001';

export const createGift = (formData) => async (dispatch) => {
	console.log(formData);
	try {
		const response = await axios.post(hostName + '/api/gift', formData);
		dispatch({ type: GIFT_CREATED, payload: response.data });
		dispatch(setAlert('Gift Created', 'success', 3000));
	} catch (err) {
		console.log(err);
		dispatch({ type: GIFT_FAILED });
	}
};
