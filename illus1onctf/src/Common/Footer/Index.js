import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import s from './style.module.css';
const Footer = () => {
	return (
		<div className={`${s.footer}`}>
			<div className="container">

				<footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top `}>
					<div className="col-md-4 d-flex align-items-center">
						<a className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">

						</a>
						<span className="mb-3 mb-md-0 ">© 2022 illuc1onCTF, Inc</span>
					</div>

					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li className="ms-3"><a href='#'><i><BsFacebook /></i> </a></li>
						<li className="ms-3"><a href='#'><i><BsTwitter /></i> </a></li>
						<li className="ms-3"><a href='#'><i><BsLinkedin /></i> </a></li>
					</ul>
				</footer>
			</div>
		</div>
	);
}
export default Footer;