import React, { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from './../../Common/Header/Index';
import { setAuth } from '../../Store/Features/authSlice';
import { PropagateLoader } from 'react-spinners';

const Home = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		const token = localStorage.getItem('token');
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
					dispatch(setAuth({ user: data.user, token: token }));
					setIsLoading(false);

				}
			}).catch((err) => {
				localStorage.removeItem('token');
				setIsLoading(false);
			});


		}
		else {
			setIsLoading(false);
		}
	}, []);
	return (
		<>
			{isLoading &&
				<PropagateLoader cssOverride={{
					position: 'absolute',
					left: '50%',
					top: '30%',
					transform: 'translate(-50%, -30%)',
					zIndex: '1000'
				}} color="var(--bs-primary)" loading={isLoading} />
			}
			{!isLoading &&
				<>
					<Header />
					<Outlet />
				</>
			}



		</>

	);
}
export default Home;