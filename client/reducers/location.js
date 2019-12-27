import {
LOCATION_CREATED, LOCATION_FAILED, GET_LOCATIONS,GET_LOCATION
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
		case GET_LOCATION:
			return {
				...state,
				loading:false,
				location:payload
			}
		case GET_LOCATIONS:
			return {
				...state,
				loading:false,
				locations:payload
			}
		case LOCATION_FAILED:
			return {
				...state,
				loading:false,
				location:{},
				locations:[],
			}
		default:
			return state;
	}
}
