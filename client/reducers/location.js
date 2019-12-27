import {
LOCATION_CREATED, LOCATION_FAILED
} from '../action/types';
const initialState = {
	location: {},
	locations:[],
	loading: true,
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOCATION_CREATED:
			return {
				...state,
				loading: false,
				location: payload
			};
		default:
			return state;
	}
}
