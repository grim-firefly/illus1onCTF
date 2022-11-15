import React from 'react';
import OutlineButton from './../../Common/Button/Outline/Index';
import {  BsSearch } from 'react-icons/bs';
import Input from './../../Common/Input/Index';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
const ShowAllCategory = () => {
	return (
		<div>
			<div className='row align-items-center p-2'>
				<div className='col-2 '>
					<Link to="create">	<OutlineButton title="Add" icon={FaPlus} /></Link>
				</div>
				<div className='offset-xl-7 offset-lg-6 offset-md-5  col-md-5 col-lg-4 col-xl-3 offset-3 col-7'>
					<Input placeholder="Seach" icon={BsSearch} />
				</div>
			</div>
		</div>
	);
}
export default ShowAllCategory;