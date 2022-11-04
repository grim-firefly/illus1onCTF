import React, { useState } from 'react';
import { TfiUser } from 'react-icons/tfi';
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';

import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import s from './style.module.css';
import formlogo from './../../Assets/Images/illus1onCTF.png';
import { Link } from 'react-router-dom';
import Input from './../../Common/Input/Index';
const Login = () => {
	const [signup, setSignup] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);
	const changeLaout = () => {
		setForgotPassword(false);
		setSignup(!signup);
	}
	const changeForgotPassword = () => {
		setForgotPassword(!forgotPassword);
	}
	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className={`${s.formContainer} col-lg-5 col-md-7 col-sm-10 col-11 col-xl-4 mx-auto`}>
					<div className={`${s.formHeader}`}>
						<img className={`${s.formHeaderLogo}`} src={formlogo} alt="" srcSet="" />
					</div>
					<form action="" method="post" className='' >
						<div className='mb-3'>
							<Input type="text" name="username" placeholder={(!signup || forgotPassword) ? "username or email" : 'username'} icon={TfiUser} />
						</div>
						{signup && <div className='mb-3'>
							<Input type="email" name="email" placeholder="Email" icon={TfiEmail} />
						</div>}
						{!forgotPassword && <div className='mb-3'>
							<Input type="password" name="password" placeholder="Password" icon={RiLockPasswordLine} />
						</div>
						}
						{signup && <div className='mb-3'>
							<Input type="password" name="confim_password" placeholder="Confirm Password" icon={RiLockPasswordFill} />
						</div>
						}
						
						<div className='d-flex justify-content-center mb-3'>
							<button className='btn btn-primary px-5' >{forgotPassword ?'Reset' :(signup ? 'Sign Up' : 'Login')}  </button>

						</div>

						{ (!signup && !forgotPassword) && <div className='d-flex flex-row-reverse'>
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
	);
}
export default Login;