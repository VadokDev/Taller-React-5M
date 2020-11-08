import { ACTION_CREATE, ACTION_UPDATE, ACTION_FETCH } from '../actions/taskActions.js';

const initialState = {
	tasks: []
};

const taskReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTION_FETCH:
			return {
				...state,
				tasks: action.payload.tasks,
			};
		case ACTION_CREATE:
			return {
				...state,
				tasks: [...state.tasks, action.payload.task]
			}
		case ACTION_UPDATE:
			return {
				...state,
				tasks: state.tasks.map((v) => v.id == action.payload.id ? {...v, finished: action.payload.finished} : v)
			}
		default:
			return state;
	}
}

export default taskReducer;