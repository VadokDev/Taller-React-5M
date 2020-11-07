
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import authReducer from './reducers/authReducer.js';

const appReducer = combineReducers({
	counterReducer: counterReducer,
	authReducer: authReducer,
});

export default createStore(appReducer);