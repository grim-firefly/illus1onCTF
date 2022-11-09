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
	useDropDownHook(menuRef,showLinks,changeVisibity);
	return (

		<nav className={`${s.navbar}`}>
			<div className='container'>
			
				<div className={`${s.nav}`}>
					<div>
						<Link className={`${s.brand}`} to="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
					</div>

					<div className='d-flex  align-items-center '>
						<div className='d-flex position-relative' ref={menuRef}>
							<div className={` ${showLinks ?  `${s.navbar_items_toggler} ${s.navbar_tmp} `:''} ${s.navbar_items}`} id="navbaritems">
								<div><NavLink to="dashboard" className={`${s.navLink}`}  onClick={()=>setShowLinks(false)} >Dashboard</NavLink></div>
								<div><NavLink to="challenges"  onClick={()=>setShowLinks(false)} className={`${s.navLink}`}>Challenges</NavLink></div>
								<div><NavLink to="contest" onClick={()=>setShowLinks(false)} className={`${s.navLink}`} >Contest</NavLink></div>
								<div><NavLink to="leaderboard" onClick={()=>setShowLinks(false)} className={`${s.navLink}`} >LeaderBoard</NavLink></div>
								<div><NavLink to="login"  onClick={()=>setShowLinks(false)} className={`${s.navLink}`}>Log In</NavLink></div>
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