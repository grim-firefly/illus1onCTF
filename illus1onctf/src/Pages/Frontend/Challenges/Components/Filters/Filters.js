import React,{useState} from 'react';
import s from './style.module.css';
import Input from './../../../../../Common/Frontend/Common/Input/Index';
import { BsSearch } from 'react-icons/bs';
import Checkbox from './../../../../../Common/Frontend/Common/Checkbox/Index';


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
	const handleli=(index)=>{
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
				<div className={`${s.filterbodyheading}`}>Category Filter</div>
				<ul className={`${s.filterlistgroup}`}>
					{
						lists.map((list, index) => (
							<li key={index} onClick={() => handleli(index)} className={`${activeCategory === index ? s.active : ""}`}>{`${list} (45)`} </li>
						))
					}


					{/* <li value="0" onClick={(e)=>(console.log(e.target.value))} className={`${activeCategory === 0 && s.active}`}>  All Categories (45) </li>
					<li value="1" onClick={handleli} className={`${activeCategory === 1 && s.active}`}>Web Exploitation (45) </li>
					<li value="2" onClick={handleli} >Web Exploitation (45) </li>
					<li value="3" onClick={handleli}>Web Exploitation (45) </li>
					<li value="4" onClick={handleli}>Web Exploitation (45) </li> */}
				</ul>


			</div>
		</div>

	);
}
export default Filters;