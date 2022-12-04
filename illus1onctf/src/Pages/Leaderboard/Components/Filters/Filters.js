import React, { useState } from 'react';
import s from './style.module.css';
import { BsSearch } from 'react-icons/bs';
import Checkbox from './../../../../Common/Checkbox/Index';
import Input from './../../../../Common/Input/Index';
import OutlineButton from './../../../../Common/Button/Outline/Index';
import { Link } from 'react-router-dom';


const lists = [
	"Contest Rating",
	"Challenge Points",
]



const Filters = ({ handleSearch }) => {
	const [activeCategory, setActiveCategory] = useState(0);
	const handleli = (index) => {
		setActiveCategory(index)
	}
	return (
		<div className={`${s.filters}`}>
			<div className={`${s.filtersHeading}`}>Filters</div>

			<div className={`${s.filterbody}`}>
				<Input type="text" placeholder="Search By Email" name="searchchallenges" onChange={(e) => handleSearch(e.target.value)} icon={BsSearch} />
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Register in Contest</div>
				<div className={`${s.filterbody} p-0`}>
					<div>
						Not in Leaderboard ? participate in contest and get in Leaderboard.
					</div>
					<div >
						<Link to="/contest"><OutlineButton title="Participate" classname="mt-2" /></Link>
					</div>
				</div>
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Leaderboard According</div>
				<ul className={`${s.filterlistgroup}`}>
					{
						lists.map((list, index) => (
							<li key={index} onClick={() => handleli(index)} className={`${activeCategory === index ? s.active : ""}`}>{`${list} `} </li>
						))
					}
				</ul>
			</div>

		</div>

	);
}
export default Filters;