import React from 'react';
import OutlineButton from './../../Common/Button/Outline/Index';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Input from './../../Common/Input/Index';
import Checkbox from './../../Common/Checkbox/Index';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditCategory = () => {
	const { id } = useParams()
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [is_active, setIs_active] = useState(true);
	const auth=useSelector(state=>state.auth)

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			const response = await axios.get(`/admin/categories/${id}`, {
				headers: {
					'Autorization': `Bearer ${auth.token}`,
				}
			});
			return response.data;
		}
		fetchData().then(data => {
			data.category && setName(data.category.name);
			data.category && setIs_active(data.category.is_active);
			setIsLoading(false)
		})

	}, [id])




	const handleUpdate = () => {
		setIsLoading(true)
		const updateData = async () => {
			const response = await axios.put(`/admin/categories`, {
				id,
				name,
				is_active
			}, {
				headers: {
					'Autorization': `Bearer ${auth.token}`,
				}
			});
			return response.data;
		}
		updateData().then(data => {
			setIsLoading(false)
			if (data.status === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Category has been Updated',
					timer: 1000,
					padding: '3em',
					timerProgressBar: true,
					timerProgressBarColor: '#1B98F5',
					fontSize: '1rem',
					showConfirmButton: false,
				}).then(() => {
					navigate('/categories')
				})
			}


		}).catch(error => {
			console.log(error)
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
				}} />
			}

			{!isLoading && name && <div>

				<div className='row p-2'>
					<div className='col-2 '>
						<Link to="/categories">	<OutlineButton title="List" /></Link>
					</div>

				</div>

				<div className='row justify-content-center py-2'>
					<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
						<div>
							<Input placeholder="Category Name" defaultValue={name} onChange={(e) => {
								setName(e.target.value)
							}} />
						</div>
						<div className='py-2 d-flex flex-row-reverse'>
							<Checkbox label="is Active ?" defaultChecked={is_active} onChange={(e) => {
								setIs_active(e.target.checked)
							}} />
						</div>
						<div className='py-2 d-flex flex-row-reverse'>
							<OutlineButton title="Update" onClick={handleUpdate} />
						</div>
					</div>


				</div>
			</div>
			}
		</>

	);
}
export default EditCategory;