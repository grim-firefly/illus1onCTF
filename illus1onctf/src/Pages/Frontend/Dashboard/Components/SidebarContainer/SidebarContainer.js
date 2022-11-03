import React from 'react';
import s from './style.module.css';

const SidebarContainer = (props) => {
	return (
		<div className={`${s.sidecardcontainer} `}>
			<div className={`${s.sidecardHeader}`}>→ {props.title}</div>
			<div className={`${s.sidecardBody}`}>
				{props.children}
			</div>

		</div>
	);
}
export default SidebarContainer;