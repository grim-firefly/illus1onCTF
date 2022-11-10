import React, { useState } from 'react';
import { TfiUser } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import s from './style.module.css';
import formlogo from './../../Assets/Images/illus1onCTF.png';
import { Link } from 'react-router-dom';
import Input from './../../Common/Input/Index';
const Login = () => {


	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className={`${s.formContainer} col-lg-5 col-md-7 col-sm-10 col-11 col-xl-4 mx-auto`}>
					<div className={`${s.formHeader}`}>
						<img className={`${s.formHeaderLogo}`} src={formlogo} alt="" srcSet="" />
					</div>
					<form action="" method="post" className='' >
						<div className='mb-3'>
							<Input type="text" name="username" placeholder="username or email" icon={TfiUser} />
						</div>
						<div className='mb-3'>
							<Input type="password" name="password" placeholder="Password" icon={RiLockPasswordLine} />
						</div>

						<div className='d-flex justify-content-center mb-3'>
							<button className='btn btn-primary px-5' >Login</button>

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
		</div>
	);
}
export default Login;