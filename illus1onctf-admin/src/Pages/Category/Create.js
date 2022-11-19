import React, { useState } from 'react';
import OutlineButton from './../../Common/Button/Outline/Index';
import { Link, useNavigate } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import Checkbox from './../../Common/Checkbox/Index';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from './../../Services/Store/Features/categorySlice';
import { PropagateLoader } from 'react-spinners';

const CreateCategory = () => {
	const [name, setName] = useState('');
	const [is_active, setIs_active] = useState(true);
	const category = useSelector(state => state.category.create);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleCreate = () => {
		dispatch(createCategory({ name, is_active }))

	}
	useEffect(() => {
		if (category.status === 'success') {
			navigate('/categories')
		}
	}, [category.status])
	return (
		<>
			{
				category.isLoading && < PropagateLoader loading={category.isPaginationLoading} color={"#1B98F5"} cssOverride={{
					display: "block",
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: "999999999",
					borderColor: "red",
				}
				} size={25} />
			}
			{!category.isLoading &&

				<div>
					<div className='row p-2'>
						<div className='col-2 '>
							<Link to="/categories">	<OutlineButton title="List" /></Link>
						</div>

					</div>
					<div className='row justify-content-center py-2'>
						<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
							<div>
								<Input placeholder="Category Name" onChange={(e) => {
									setName(e.target.value)
								}} />
							</div>
							<div className='py-2 d-flex flex-row-reverse'>
								<Checkbox label="is Active ?" id="is_active" onChange={(e) => {
									setIs_active(e.target.checked)
								}} />
							</div>
							<div className='py-2 d-flex flex-row-reverse'>
								<OutlineButton title="Create" onClick={handleCreate} />
							</div>
						</div>


					</div>
				</div>
			}

		</>
	);
}
export default CreateCategory;