import React, { useState } from 'react';
import { TfiUser } from 'react-icons/tfi';
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';

import { FcCdLogo, FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import s from './style.module.css';
import formlogo from './../../Assets/Images/illus1onCTF.png';
import { Link, useNavigate } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import { useEffect } from 'react';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../Store/Features/authSlice';

const Login = () => {
	const [signup, setSignup] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [username, setUsername] = useState('');
	const [error, setError] = useState('');
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);
	const navigate = useNavigate();

	const changeLaout = () => {
		setForgotPassword(false);
		setSignup(!signup);
	}
	const changeForgotPassword = () => {
		setForgotPassword(!forgotPassword);
	}
	const handleCredentials = () => {
		if (signup) {
			setIsLoading(true);
			if (email === '' || password === '' || confirmPassword === '' || username === '') {
				setIsError(true);
				setError('Please fill all the fields');
				return;
			}
			else if (password !== confirmPassword) {
				setIsError(true);
				setError('Passwords do not match');
			}
			else {
				setIsError(false);

				if (email && password && confirmPassword && username) {

					const createUser = async () => {
						const response = await axios.post('/register', {
							email: email,
							password: password,
							confirmPassword: confirmPassword,
							name: username
						});
						return response.data;

					}
					createUser().then((data) => {
						if (data.status == "success") {
							setIsSuccess(true);
							setError(data.message);
							setIsLoading(false);
						}
					}).catch((err) => {
						setIsError(true);
						setError(err.response.data.message);
						setIsLoading(false);
					});


				}


			}
		}
		else if (!signup && !forgotPassword) {
			setIsLoading(true);

			if (email === '' || password === '') {
				setIsError(true);
				setError('Please fill all the fields');
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
							dispatch(setAuth({ token, user }));
							setIsLoading(false);
							navigate('/dashboard');

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
	}

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
							{isSuccess &&
								<div className="alert alert-success alert-dismissible fade show" role="alert">
									{error}
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setIsError(false)}></button>
								</div>}
							<div className='mb-3'>
								{signup && <Input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder='username' icon={TfiUser} />}
							</div>
							<div className='mb-3'>
								<Input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" icon={TfiEmail} />
							</div>
							{!forgotPassword && <div className='mb-3'>
								<Input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" icon={RiLockPasswordLine} />
							</div>
							}
							{signup && <div className='mb-3'>
								<Input type="password" name="confim_password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" icon={RiLockPasswordFill} />
							</div>
							}

							<div className='d-flex justify-content-center mb-3'>
								<button onClick={(e) => {
									e.preventDefault();
									handleCredentials();
								}} className='btn btn-primary px-5' >{forgotPassword ? 'Reset' : (signup ? 'Sign Up' : 'Login')}  </button>

							</div>

							{(!signup && !forgotPassword) && <div className='d-flex flex-row-reverse'>
								<Link className={`${s.fogotpassword}`} onClick={changeForgotPassword}>Forgot Password ?</Link>
							</div>}

						</form>
						<div className={`${(signup || forgotPassword) ? 'mt-4' : 'mt-2'}`}>
							<p className={`${s.separator}`}><span className={`${s.separatortext}`}>OR</span></p>
						</div>

						<div className={`${s.othersLogin}`}>
							<Link to="/" className={`${s.socialmedia}`}><FcGoogle /> </Link>
							<Link to="/" className={`${s.socialmedia}`}><BsFacebook /> </Link>
							<Link to="/" className={`${s.socialmedia}`}><BsGithub /> </Link>
						</div>
						<div className={`${s.reference}`}>
							<p>{signup ? 'Already a User ?' : 'Need an account ?'} <button onClick={changeLaout} className={`${s.formFooterLink}`}>{signup ? 'Log In' : 'Sign Up'}</button></p>
						</div>
					</div>

				</div>
			</div>
			}
		</>
	);
}
export default Login;