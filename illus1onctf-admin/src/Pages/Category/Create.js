import React, { useState } from 'react';
import OutlineButton from './../../Common/Button/Outline/Index';
import { Link, useNavigate } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import Checkbox from './../../Common/Checkbox/Index';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2'

import axios from 'axios';

const CreateCategory = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState('');
	const [is_active, setIs_active] = useState(true);
	const navigate = useNavigate();
	const handleCreate = () => {

		setIsLoading(true)
		const createCategory = async () => {
			const response = await axios.post('/categories', {
				name,
				is_active
			});
			return response.data;
		}
		createCategory().then(data => {

			if (data.status === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Category has been created',
					timer: 1000,
					padding: '3em',
					timerProgressBar: true,
					fontSize: '1rem',
					showConfirmButton: false,
				}).then(() => {
					navigate('/categories')
				})
			}
			setIsLoading(false)

		})



	}


	return (
		<>
			{
				isLoading && < PropagateLoader loading={isLoading} color={"#1B98F5"} cssOverride={{
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
			{!isLoading &&

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