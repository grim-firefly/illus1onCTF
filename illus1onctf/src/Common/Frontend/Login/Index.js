import React from 'react';
import Input from './../Common/Input/Index';
import { TfiUser } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import s from './style.module.css';
import formlogo from './../../../Assets/Images/illus1onCTF1.png';
import { Link } from 'react-router-dom';
const Login = () => {
	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className={`${s.formContainer} col-md-4 mx-auto`}>
					<div className={`${s.formHeader}`}>
						<img className={`${s.formHeaderLogo}`} src={formlogo} alt="" srcSet="" />
					</div>
					<form action="" method="post" className='' >
						<div className='mb-3'>
							<Input type="email" name="email" placeholder="Email" icon={TfiUser} />
						</div>
						<div className='mb-3'>
							<Input type="password" name="password" placeholder="Password" icon={RiLockPasswordLine} />
						</div>
						<div className=''>
							<button className='btn btn-primary' >Login</button>

						</div>
						<div className='d-flex flex-row-reverse'>
							<Link className={`${s.fogotpassword}`}>Forgot Password ?</Link>
						</div>

					</form>
					<div>
						<p className={`${s.separator}`}><span className={`${s.separatortext}`}>OR</span></p>
					</div>
					<div className=''>
						<p className={`${s.formFooterText}`}>Don't have an account ? <Link className={`${s.formFooterLink}`}>Sign Up</Link></p>
					</div>
				</div>

			</div>
		</div>
	);
}
export default Login;