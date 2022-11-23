import React, { useState, useEffect } from 'react';
import { TfiUser } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import s from './style.module.css';
import formlogo from './../../Assets/Images/illus1onCTF.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import { PropagateLoader } from 'react-spinners';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../Services/Store/Features/authSlice';
const Login = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isError, setIsError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 400);
	}, []);
	const handleCredentials = () => {
		setIsLoading(true);
		if (email === '' || password === '') {
			setIsError(true);
			setError('Please fill all the fields');
			setIsLoading(false);
			return;
		}
		else {
			setIsError(false);

			if (email && password) {

				const loginUser = async () => {

					const response = await axios.post('/login', {
						email: email,
						password: password,
					});
					return response.data;

				}
				loginUser().then((data) => {
					if (data.status == "success") {
						const token = data.token;
						const user = data.user;
						if (user.role == "admin") {
							dispatch(setAuth({ token, user }));
							setIsLoading(false);
							navigate(location.state?.from || '/dashboard');
						}
						else {
							setIsError(true);
							setError('You are not an admin');
							const logoutUser = async () => {
								const response = await axios.get('/logout', {
									headers: {
										'Authorization': `Bearer ${token}`
									}
								});

								return response.data;
							}
							logoutUser().then((data) => {
								setIsLoading(false);
								navigate('/login');

							}).catch((err) => {
								setIsLoading(false);
								console.log(err);
							})
						}


					}
				}).catch((err) => {
					console.log(err);
					setIsError(true);
					setError(err.response.data.message);
					setIsLoading(false);

				});
			}
		}
	}
	return (<>
		{isLoading &&
			<PropagateLoader cssOverride={{
				position: 'absolute',
				left: '50%',
				top: '30%',
				transform: 'translate(-50%, -30%)',
				zIndex: '1000'
			}} color="var(--bs-primary)" loading={isLoading} speedMultiplier={2} />
		}
		{!isLoading && <div className='container'>
			<div className='row mt-5'>
				<div className={`${s.formContainer} col-lg-5 col-md-7 col-sm-10 col-11 col-xl-4 mx-auto`}>
					<div className={`${s.formHeader}`}>
						<img className={`${s.formHeaderLogo}`} src={formlogo} alt="" srcSet="" />
					</div>
					<form className='' >
						{isError &&
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								{error}
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setIsError(false)}></button>
							</div>}
						<div className='mb-3'>
							<Input type="text" name="username" onChange={(e) => setEmail(e.target.value)} placeholder="email" icon={TfiUser} />
						</div>
						<div className='mb-3'>
							<Input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" icon={RiLockPasswordLine} />
						</div>

						<div className='d-flex justify-content-center mb-3'>
							<button className='btn btn-primary px-5' onClick={(e) => {
								e.preventDefault();
								handleCredentials();
							}} >Login</button>

						</div>



					</form>
					<div className='mt-2'>
						<p className={`${s.separator}`}><span className={`${s.separatortext}`}>OR</span></p>
					</div>

					<div className={`${s.othersLogin}`}>
						<Link to="/" className={`${s.socialmedia}`}><FcGoogle /> </Link>
						<Link to="/" className={`${s.socialmedia}`}><BsFacebook /> </Link>
						<Link to="/" className={`${s.socialmedia}`}><BsGithub /> </Link>
					</div>

				</div>

			</div>
		</div>}
	</>

	);
}
export default Login;