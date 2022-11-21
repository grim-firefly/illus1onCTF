import React, { useRef, useState } from 'react';
import s from './style.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useDropDownHook from './../../Hooks/useDropDownHook';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Store/Features/authSlice';
import axios from 'axios';
const Header = () => {
	const [showLinks, setShowLinks] = React.useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const menuRef = useRef(null);
	const changeVisibity = () => {
		setShowLinks(!showLinks);
	}
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useDropDownHook(menuRef, showLinks, changeVisibity);

	// logout

	const handleLogout = () => {

		setIsLoading(true);
		const logoutUser = async () => {
			const response = await axios.get('/logout', {
				headers: {
					'Authorization': `Bearer ${auth.token}`
				}
			});

			return response.data;
		}
		logoutUser().then((data) => {
			dispatch(logout());
			setIsLoading(false);
			navigate('/login');

		}).catch((err) => {
			setIsLoading(false);
			console.log(err);
		})




	}

	return (

		<nav className={`${s.navbar}`}>
			<div className='container'>

				<div className={`${s.nav}`}>
					<div>
						<Link className={`${s.brand}`} to="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
					</div>

					<div className='d-flex  align-items-center '>
						<div className='d-flex position-relative' ref={menuRef}>
							<div className={` ${showLinks ? `${s.navbar_items_toggler} ${s.navbar_tmp} ` : ''} ${s.navbar_items}`} id="navbaritems">
								{auth.isAuthenticated && <div><NavLink to="dashboard" className={`${s.navLink}`} onClick={() => setShowLinks(false)} >Dashboard</NavLink></div>}
								<div><NavLink to="challenges" onClick={() => setShowLinks(false)} className={`${s.navLink}`}>Challenges</NavLink></div>
								<div><NavLink to="contest" onClick={() => setShowLinks(false)} className={`${s.navLink}`} >Contest</NavLink></div>
								<div><NavLink to="leaderboard" onClick={() => setShowLinks(false)} className={`${s.navLink}`} >LeaderBoard</NavLink></div>
								{!auth.isAuthenticated && <div><NavLink to="login" onClick={() => setShowLinks(false)} className={`${s.navLink}`}>Log In</NavLink></div>}
							</div>
							<button className={`${s.navbar_toggler}`} onClick={changeVisibity} ><FaBars /></button>

						</div>
						{auth.isAuthenticated &&
							<div className='dropdown'>
								<div className={`${s.user_btn}`} type="button" data-bs-toggle="dropdown" id='useroptions' aria-expanded="false">

									<img className={`${s.user_img}`} src="https://secure.gravatar.com/avatar/a9d93a0b0dbbbef556a04eefcfd14079.jpg?s=200&d=robohash&r=x" alt="img" srcSet="" />
								</div>
								<ul className={`dropdown-menu ${s.dropdownMenu}`} aria-labelledby="useroptions" >
									<li><Link to="" className={`dropdown-item ${s.dropdownitem}`} >Profile</Link></li>
									<li><Link to="" className={`dropdown-item ${s.dropdownitem}`} >Hello</Link></li>
									<li><Link to="" onClick={handleLogout} className={`dropdown-item ${s.dropdownitem}`}>Log out</Link></li>
								</ul>
							</div>}

					</div>
				</div>
			</div>


		</nav>

	);
}
export default Header;