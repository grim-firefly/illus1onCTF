import React from 'react';
import OutlineButton from './../../Common/Button/Outline/Index';
import { Link } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import Checkbox from './../../Common/Checkbox/Index';

const EditCategory = () => {
	return (
		<div>
			<div className='row p-2'>
				<div className='col-2 '>
					<Link to="/categories">	<OutlineButton title="List" /></Link>
				</div>

			</div>
			<div className='row justify-content-center py-2'>
				<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
					<div>
						<Input placeholder="Category Name" />
					</div>
					<div className='py-2 d-flex flex-row-reverse'>
						<Checkbox label="is Active ?" />
					</div>
					<div className='py-2 d-flex flex-row-reverse'>
						<OutlineButton title="Create" />
					</div>
				</div>


			</div>
		</div>
	);
}
export default EditCategory;