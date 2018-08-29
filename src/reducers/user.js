import { combineReducers } from 'redux';

const user = (state = { users: [] }, action) => {
	switch (action.type) {
		case 'FETCH_ALL_USERS':
			return {
				...state,
				users: action.json
			};
		default:
			return state;
	}
};

export default combineReducers({
	user
});