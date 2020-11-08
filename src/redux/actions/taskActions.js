export const ACTION_FETCH = 'ACTION_FETCH';
export const ACTION_UPDATE = 'ACTION_UPDATE';
export const ACTION_CREATE = 'ACTION_CREATE';

export const fetchTasks = (tasks) => {
	return {
		type: ACTION_FETCH,
		payload: {
			tasks: tasks,
		}
	}
}

export const createTask = (task) => {
	return {
		type: ACTION_CREATE,
		payload: {
			task: task,
		}
	}
}

export const updateTask = (taskId, finished) => {
	return {
		type: ACTION_UPDATE,
		payload:{
			id: taskId,
			finished: finished,
		}
	}
}