import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
	return (

		<nav className={`${s.navbar}`}>
			<div className='container'>

				<div className={`${s.nav}`}>
					<div>
						<Link className={`${s.brand}`} href="/">illus1on<span className={`${s.logo_end}`}>CTF</span></Link>
					</div>
					<div>
						<Link className={`${s.navLink}`} href="/challenges">Challenges</Link>
						<Link className={`${s.navLink}`} href="/leaderboard">Leaderboard</Link>
						<Link className={`${s.navLink}`} href="/profile">Profile</Link>

					</div>
				</div>
			</div>


		</nav>

	);
}
export default Header;