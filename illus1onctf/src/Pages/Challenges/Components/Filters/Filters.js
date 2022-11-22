import React, { useState } from 'react';
import s from './style.module.css';
import { BsSearch } from 'react-icons/bs';
import Checkbox from './../../../../Common/Checkbox/Index';
import Input from './../../../../Common/Input/Index';
import OutlineButton from './../../../../Common/Button/Outline/Index';


const lists = [
	"All Categories",
	"Web Exploitation",
	"Binary exploitation",
	"Web Exploitation",
	"Web Exploitation",
	"Web Exploitation",
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
				<Checkbox label="Hide Solved" id="hidesolved" />
				<Checkbox label="Show Bookmarked Solved" id="showbookmarked" />
			</div>
			<div className={`${s.filterbody}`}>
				<Input type="text" placeholder="Search By Name" name="searchchallenges" icon={BsSearch} />
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Create a Challenge</div>
				<div className={`${s.filterbody} p-0`}>
					<div>
						Want to contribute on illus1onCTF? Please send us a message and we will get in touch with you.
					</div>
					<div >
						<OutlineButton title="Make a Request" classname="mt-2" />
					</div>
				</div>
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Category Filter</div>
				<ul className={`${s.filterlistgroup}`}>
					{
						lists.map((list, index) => (
							<li key={index} onClick={() => handleli(index)} className={`${activeCategory === index ? s.active : ""}`}>{`${list} (45)`} </li>
						))
					}
				</ul>
			</div>
			<div className={`${s.filterbody}`}>
				<div className={`${s.filterbodyheading}`}>Filter By Point</div>
				<div className={`${s.minmax} d-flex flex-row`}>
					<Input type="text" placeholder="Min" name="minpoint" />
					<div className='px-3'>To</div>
					<Input type="text" placeholder="Max" name="maxpont" />

				</div>
			</div>
		</div>

	);
}
export default Filters;