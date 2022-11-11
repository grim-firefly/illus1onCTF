import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';
const SidebarItem = (props) => {
	return (
		<div className={`${s.sidebaritems}`}>
			<NavLink className={`${s.link}`} to={props.url}>
				<div className={`${s.linkicon}`}><i><props.icon /></i></div>
				<div className={`${s.linktext}`}>{props.name}</div>
			</NavLink>
		</div>
	);
}
export default SidebarItem;