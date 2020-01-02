import { GIFT_CREATED, GIFT_FAILED } from '../action/types';
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
