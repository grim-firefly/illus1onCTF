import React, { useRef } from 'react';
import s from './style.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useDropDownHook from './../../Hooks/useDropDownHook';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Services/Store/Features/authSlice';
import axios from 'axios';
const Header = () => {
	const [showLinks, setShowLinks] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const menuRef = useRef(null);
	const changeVisibity = () => {
		setShowLinks(!showLinks);
	}
	useDropDownHook(menuRef, showLinks, changeVisibity);

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
			navigate('/')

		}).catch((err) => {
			setIsLoading(false);
			console.log(err);
		})




	}
	return (

		<nav className={`${s.navbar}`}>

			<div className={`${s.nav}`}>
				<div>

					<Link className={`${s.brand}`} to="dashboard">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
				</div>

				<div className='d-flex  align-items-center '>
					{!auth.isAuthenticated && <div className='d-flex position-relative' >
						<div className={` ${s.navbar_items}`} id="navbaritems">
							<div><NavLink to="" onClick={() => setShowLinks(false)} className={`${s.navLink}`}>Log In</NavLink></div>
						</div>

					</div>
					}
					{auth.isAuthenticated &&
						<div className='dropdown'>
							<div className={`${s.user_btn}`} type="button" data-bs-toggle="dropdown" id='useroptions' aria-expanded="false">

								<img className={`${s.user_img}`} src="https://secure.gravatar.com/avatar/a9d93a0b0dbbbef556a04eefcfd14079.jpg?s=200&d=robohash&r=x" alt="img" srcSet="" />
							</div>
							<ul className={`dropdown-menu ${s.dropdownMenu}`} aria-labelledby="useroptions" >
								<li><Link className={`dropdown-item ${s.dropdownitem}`} >Profile</Link></li>
								<li><Link className={`dropdown-item ${s.dropdownitem}`} >Hello</Link></li>
								<li><Link onClick={handleLogout} className={`dropdown-item ${s.dropdownitem}`}>Log out</Link></li>
							</ul>
						</div>
					}

				</div>
			</div>


		</nav>

	);
}
export default Header;