export const fetchUsers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(json => dispatch({ type: 'FETCH_ALL_USERS', json }))
	}
}