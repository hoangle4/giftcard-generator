import axios from 'axios';

export const isMobileDevice = () => {
	return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
};
export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['t-auth-token'] = token;
	} else {
		delete axios.defaults.headers.common['t-auth-token'];
	}
};
