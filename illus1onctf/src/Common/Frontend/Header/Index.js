import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
const Header = () => {
	const [showLinks, setShowLinks] = React.useState(false);
	const changeVisibity = () => {
		setShowLinks(!showLinks);
	}
	return (

		<nav className={`${s.navbar}`}>
			<div className='container'>
			
				<div className={`${s.nav}`}>
					<div>
						<Link className={`${s.brand}`} href="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
					</div>

					<div className='d-flex  align-items-center '>
						<div className='d-flex position-relative'>
							<div className={` ${showLinks ?  `${s.navbar_items_toggler} ${s.navbar_tmp} `:''} ${s.navbar_items}`} id="navbaritems">
								<div><Link className={`${s.navLink}`} href="/challenges">Dashboard</Link></div>
								<div><Link className={`${s.navLink}`} href="/challenges">Challenges</Link></div>
								<div><Link className={`${s.navLink}`} href="/leaderboard">Contest</Link></div>
								<div><Link className={`${s.navLink}`} href="/profile">Log In</Link></div>
							</div>
							<button className={`${s.navbar_toggler}`}  onClick={changeVisibity} ><FaBars /></button>

						</div>
						<div className='dropdown'>
							<div className={`${s.user_btn}`} type="button" data-bs-toggle="dropdown" id='useroptions' aria-expanded="false">

								<img className={`${s.user_img}`} src="https://secure.gravatar.com/avatar/a9d93a0b0dbbbef556a04eefcfd14079.jpg?s=200&d=robohash&r=x" alt="img" srcSet="" />
							</div>
							<ul className={`dropdown-menu ${s.dropdownMenu}`} aria-labelledby="useroptions" >
								<li><a className={`dropdown-item ${s.dropdownitem}`} href="#">Profile</a></li>
								<li><a className={`dropdown-item ${s.dropdownitem}`} href="#">Hello</a></li>
								<li><a className={`dropdown-item ${s.dropdownitem}`} href="#">Log out</a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>


		</nav>

	);
}
export default Header;