import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import location from './location';
import gift from './gift';

export default combineReducers({
	alert,
	auth,
	location,
	gift
});
