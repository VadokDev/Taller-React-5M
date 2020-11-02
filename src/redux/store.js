
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';

const appReducer = combineReducers({
	counterReducer: counterReducer,
});

export default createStore(appReducer);