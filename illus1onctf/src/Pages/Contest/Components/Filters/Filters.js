import React, { useState } from 'react';
import s from './style.module.css';
import { BsSearch } from 'react-icons/bs';
import Checkbox from './../../../../Common/Checkbox/Index';
import Input from './../../../../Common/Input/Index';
import OutlineButton from './../../../../Common/Button/Outline/Index';


const lists = [
	"All",
	"Featured",
	"Current",
	"History",
	"Training",
	"Calender",
]



const Filters = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	const handleli = (index) => {
		setActiveCategory(index)
	}
	return (
		<div className={`${s.filters}`}>
			<div className={`${s.filtersHeading}`}>Filters</div>

			<div className={`${s.filterbody}`}>
				<Input type="text" placeholder="Search By Name" name="searchchallenges" icon={BsSearch} />
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Organize a Contest</div>
				<div className={`${s.filterbody} p-0`}>
					<div>
					Want to host a contest on illus1onCTF? Please send us a message and we will get in touch with you.
					</div>
					<div >
						<OutlineButton title="Make a Request" classname="mt-2"/>
					</div>
				</div>
			</div>
			<div className={`${s.filterbody}`}>
				{/* <div className={`${s.filterbodyheading}`}>Type Filter</div> */}
				<ul className={`${s.filterlistgroup}`}>
					{
						lists.map((list, index) => (
							<li key={index} onClick={() => handleli(index)} className={`${activeCategory === index ? s.active : ""}`}>{`${list} (45)`} </li>
						))
					}
				</ul>
			</div>
			
		</div>

	);
}
export default Filters;