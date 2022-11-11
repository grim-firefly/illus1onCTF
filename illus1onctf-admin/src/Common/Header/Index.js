import React, { useRef } from 'react';
import s from './style.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useDropDownHook from './../../Hooks/useDropDownHook';
const Header = () => {
	const [showLinks, setShowLinks] = React.useState(false);
	const menuRef = useRef(null);
	const changeVisibity = () => {
		setShowLinks(!showLinks);
	}
	useDropDownHook(menuRef, showLinks, changeVisibity);
	return (

		<nav className={`${s.navbar}`}>

			<div className={`${s.nav}`}>
				<div>
					<Link className={`${s.brand}`} to="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
				</div>

				<div className='d-flex  align-items-center '>
					<div className='d-flex position-relative' >
						<div className={` ${s.navbar_items}`} id="navbaritems">
							<div><NavLink to="login" onClick={() => setShowLinks(false)} className={`${s.navLink}`}>Log In</NavLink></div>
						</div>

					</div>
					<div className='dropdown'>
						<div className={`${s.user_btn}`} type="button" data-bs-toggle="dropdown" id='useroptions' aria-expanded="false">

							<img className={`${s.user_img}`} src="https://secure.gravatar.com/avatar/a9d93a0b0dbbbef556a04eefcfd14079.jpg?s=200&d=robohash&r=x" alt="img" srcSet="" />
						</div>
						<ul className={`dropdown-menu ${s.dropdownMenu}`} aria-labelledby="useroptions" >
							<li><Link to="" className={`dropdown-item ${s.dropdownitem}`} >Profile</Link></li>
							<li><Link to="" className={`dropdown-item ${s.dropdownitem}`} >Hello</Link></li>
							<li><Link to="" className={`dropdown-item ${s.dropdownitem}`}>Log out</Link></li>
						</ul>
					</div>

				</div>
			</div>


		</nav>

	);
}
export default Header;