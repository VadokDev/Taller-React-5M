
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import authReducer from './reducers/authReducer.js';
import taskReducer from './reducers/taskReducer.js';

const appReducer = combineReducers({
	counterReducer: counterReducer,
	taskReducer: taskReducer,
	authReducer: authReducer,
});

export default createStore(appReducer);