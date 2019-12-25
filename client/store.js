import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const State = {};

const middleware = [ thunk ];

const store = (initialState = State, options) =>
	createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
