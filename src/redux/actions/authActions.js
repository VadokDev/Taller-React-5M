
export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

export const login = () => {
	return {
		type: INCREASE_COUNTER,
		payload: {
			isLogged: true,
		},
	}
}

export const logout = () => {
	return {
		type: INCREASE_COUNTER,
		payload: {
			isLogged: false,
		},
	}
}
