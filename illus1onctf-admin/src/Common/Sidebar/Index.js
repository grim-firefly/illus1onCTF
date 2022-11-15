import React, { useState } from 'react';
import s from './style.module.css';
import { BiCategory } from 'react-icons/bi';
import { GoThreeBars, GoDashboard } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import { TfiUser } from 'react-icons/tfi';

import { useEffect, useRef } from 'react';
import SidebarItem from './Components/SidebarItems/Index';
import useDropDownHook from './../../Hooks/useDropDownHook';

const sidebaritems = [
	{
		icon: GoDashboard,
		name: "Dashboard",
		url: ""
	},
	{
		icon: BiCategory,
		name: "Category",
		url: "categories"
	},
	{
		name: 'Users',
		icon: TfiUser,
		url: 'login'
	}
]
const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className={`${s.sidebarContainer} ${showMenu ? s.sidebarwidthcontroll : ''}`} >
			<button onClick={() => setShowMenu(!showMenu)} className={`${s.sidebartogglebtn}`}>{showMenu ? <ImCross /> : <GoThreeBars />}</button>
			<div className={`${s.sidebar}`} style={{ width: (showMenu ? '250px' : '') }}>

				{
					sidebaritems.map((item, index) => (
						<SidebarItem key={index} icon={item.icon} name={item.name} url={item.url} />

					))
				}

			</div>
		</div>
	);
}
export default Sidebar;