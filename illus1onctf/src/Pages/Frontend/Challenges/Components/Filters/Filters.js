import React from 'react';
import s from './style.module.css';
import Input from './../../../../../Common/Frontend/Common/Input/Index';
import { BsSearch } from 'react-icons/bs';
import Checkbox from './../../../../../Common/Frontend/Common/Checkbox/Index';
const Filters = () => {
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
				<div className={`${s.filterbodyheading}`}>Category Filter</div>
				<ul>
					<li>Hello </li>
					<li>Hello </li>
					<li>Hello </li>
				</ul>
				

			</div>
		</div>

	);
}
export default Filters;