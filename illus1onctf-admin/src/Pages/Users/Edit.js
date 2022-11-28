import React from 'react';
import OutlineButton from '../../Common/Button/Outline/Index';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Input from '../../Common/Input/Index';
import Checkbox from '../../Common/Checkbox/Index';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import axios from 'axios';
import Swal from 'sweetalert2';
import SelectBox from '../../Common/SelectBox/Index';

const EditUser = () => {
	const { id } = useParams()
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [roleList, setRoleList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const auth = useSelector(state => state.auth)

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			const response = await axios.get(`/admin/users/${id}`);
			return response.data;
		}
		fetchData().then(data => {
			data.user && setName(data.user.name);
			data.user && setEmail(data.user.email);
			data.user && setRole(data.user.role);
			setIsLoading(false)
		}).catch(err => {
			console.log(err);
			setIsLoading(false)
		})

		const fetchRoleList = async () => {
			const response = await axios.get(`/admin/activeroles`);
			return response.data;
		}
		fetchRoleList().then(data => {
			// data.user && setName(data.user.name);
			data.roles && setRoleList(data.roles.map(role => ({ value: role.name, label: role.name })));
			setIsLoading(false)
		}).catch(err => {
			console.log(err);
			setIsLoading(false)
		})


	}, [id])




	const handleUpdate = () => {
		setIsLoading(true)
		const updateData = async () => {
			const response = await axios.put(`/admin/users`, {
				id,
				name,
				email,
				role

			});
			return response.data;
		}
		updateData().then(data => {
			setIsLoading(false)
			if (data.status === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'User has been Updated',
					timer: 1000,
					padding: '3em',
					iconColor: 'var(--bs-primary)',
					timerProgressBar: true,
					showConfirmButton: false,
				}).then(() => {
					navigate('/users')
				})
			}


		}).catch(error => {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.response.data.message,
			})
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
						<Link to="/users">	<OutlineButton title="List" /></Link>
					</div>

				</div>

				<div className='row justify-content-center py-2'>
					<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
						<div>
							<Input placeholder="User Name" defaultValue={name} onBlur={(e) => {
								setName(e.target.value)
							}} />
						</div>
						<div className='my-2'>
							<Input placeholder="Email" defaultValue={email} onBlur={(e) => {
								setEmail(e.target.value)
							}} />
						</div>
						<div>
							{/* <Input placeholder="User Name" defaultValue={name} onChange={(e) => {
								setName(e.target.value)
							}} /> */}
							<SelectBox options={roleList} value={role} onChange={(e) => setRole(e.target.value)} />
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
export default EditUser;