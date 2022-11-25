import React, { useState } from 'react';
import OutlineButton from '../../Common/Button/Outline/Index';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Common/Input/Index';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SelectBox from '../../Common/SelectBox/Index';

const CreateUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('admin');
	const [roleList, setRoleList] = useState([]);
	const navigate = useNavigate();
	const auth = useSelector(state => state.auth)
	useEffect(() => {
		setIsLoading(true)
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
	}, [])

	const handleCreate = () => {
		setIsLoading(true)
		const createUser = async () => {
			const response = await axios.post('/admin/users', {
				name,
				email,
				password,
				role
			});
			return response.data;
		}
		createUser().then(data => {

			setIsLoading(false)
			if (data.status === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'User has been created',
					timer: 1000,
					padding: '3em',
					iconColor: 'var(--bs-primary)',
					timerProgressBar: true,
					showConfirmButton: false,
				}).then(() => {
					navigate('/users')
				})
			}

		}).catch(err => {
			setIsLoading(false)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: err.response.data.message,

			})
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
							<Link to="/users">	<OutlineButton title="List" /></Link>
						</div>

					</div>

					<div className='row justify-content-center py-2'>
						<div className='col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4'>
							<div>
								<Input placeholder="User Name" onChange={(e) => {
									setName(e.target.value)
								}} />
							</div>
							<div className='my-2'>
								<Input placeholder="Email" type="email" onChange={(e) => {
									setEmail(e.target.value)
								}} />
							</div>
							<div className='my-2'>
								<Input placeholder="password" type="password" onChange={(e) => {
									setPassword(e.target.value)
								}} />
							</div>
							<div>
								<SelectBox options={roleList} value="admin" onChange={(e) => setRole(e.target.value)} />
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
export default CreateUser;