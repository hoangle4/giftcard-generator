import { GIFT_CREATED, GIFT_FAILED, GET_GIFTS } from '../action/types';
const initialState = {
	gift: {},
	gifts: [],
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GIFT_CREATED:
			return {
				...state,
				loading: false,
				gift: payload
			};
		case GET_GIFTS:
			return {
				...state,
				loading: false,
				gifts: payload
			};
		case GIFT_FAILED:
			return {
				...state,
				loading: false,
				location: {},
				locations: []
			};
		default:
			return state;
	}
}
