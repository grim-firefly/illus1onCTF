import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAuthHook = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	token = props.token ?? localStorage.getItem('token');
	if (token) {
		const fetchUser = async () => {
			const response = await axios.get('/user', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			return response.data;
		}

		fetchUser().then((data) => {
			if (data.status == "success") {
				setUser(data.user)
				setIsAuthenticated(true)
			}
			else {
				localStorage.removeItem('token')
			}
		}).catch((err) => {
			localStorage.removeItem('token');
			setIsAuthenticated(false);
			setUser(null);

		})
	}
	else {
		return { isAuthenticated, user, token };
	}

}
export default useAuthHook;