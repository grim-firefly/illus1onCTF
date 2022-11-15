import React from 'react';
import s from './style.module.css';
const Category = () => {
	return (
		<div className={`${s.container}`}>
			<div className='d-flex  justify-content-center py-1 align-items-center'>
				<h3>Category</h3>
			</div>
		</div>
	);
}
export default Category;