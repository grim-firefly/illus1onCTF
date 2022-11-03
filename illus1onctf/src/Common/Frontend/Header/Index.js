import React, { useRef } from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useDropDownHook from './../../../Hooks/useDropDownHook';
const Header = () => {
	const [showLinks, setShowLinks] = React.useState(false);
	const menuRef = useRef(null);
	const changeVisibity = () => {
		setShowLinks(!showLinks);
	}
	useDropDownHook(menuRef,showLinks,changeVisibity);
	return (

		<nav className={`${s.navbar}`}>
			<div className='container'>
			
				<div className={`${s.nav}`}>
					<div>
						<Link className={`${s.brand}`} href="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
					</div>

					<div className='d-flex  align-items-center '>
						<div className='d-flex position-relative' ref={menuRef}>
							<div className={` ${showLinks ?  `${s.navbar_items_toggler} ${s.navbar_tmp} `:''} ${s.navbar_items}`} id="navbaritems">
								<div><Link to="dashboard" className={`${s.navLink}`} >Dashboard</Link></div>
								<div><Link to="" className={`${s.navLink}`}>Challenges</Link></div>
								<div><Link to="about" className={`${s.navLink}`} >Contest</Link></div>
								<div><Link to="login" className={`${s.navLink}`}>Log In</Link></div>
							</div>
							<button className={`${s.navbar_toggler}`}  onClick={changeVisibity} ><FaBars /></button>

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
			</div>


		</nav>

	);
}
export default Header;