import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from './../../Common/Header/Index';
import Sidebar from './../../Common/Sidebar/Index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
import { setAuth } from '../../Services/Store/Features/authSlice';

const Home = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
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
					if (data.user.role == "admin") {
						dispatch(setAuth({ user: data.user, token: token }));
						setIsLoading(false);
						navigate('/dashboard');
					}
					else {
						localStorage.removeItem('token');
						setIsLoading(false);
						navigate('/');
					}
				}
			}).catch((err) => {
				console.log(err);
				localStorage.removeItem('token');
				setIsLoading(false);
				navigate('/');

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
				}} color="var(--bs-primary)" loading={isLoading} speedMultiplier={2} />
			}
			{!isLoading &&
				<>
					<Header />

					<div className='d-flex'>
						{auth.isAuthenticated && <Sidebar />}


						<div className='flex-grow-1'>
							<Outlet />

						</div>
					</div>
				</>
			}



		</>

	);
}
export default Home;