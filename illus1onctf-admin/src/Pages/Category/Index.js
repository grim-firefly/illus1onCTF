import React from 'react';
import s from './style.module.css';
import { Outlet } from 'react-router-dom';

const Category = () => {
	return (
		<div className={`${s.container}`}>
			<div className='d-flex  justify-content-center pt-1 align-items-center'>
				<h3>Category</h3>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
}
export default Category;