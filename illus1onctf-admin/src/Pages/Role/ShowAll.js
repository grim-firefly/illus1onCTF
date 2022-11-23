import React from 'react';
import axios from "axios";
import OutlineButton from './../../Common/Button/Outline/Index';
import { BsSearch } from 'react-icons/bs';
import Input from './../../Common/Input/Index';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';

const ShowAllRole = () => {
	const column = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'id',
		},
		{
			title: 'is_active',
			dataIndex: 'is_active',
			key: 'id',
			render: (is_active) => (
				<>
					{is_active ? <span className='badge bg-success'>Active</span> : <span className='badge bg-danger'>Inactive</span>}
				</>
			)
		},
		{
			title: 'Action',
			render: (record) => {
				return (
					<>
						<div className='d-flex gap-1 justify-content-center'>

							<button className='btn btn-danger' onClick={() => {
								handleDelete(record)
							}} ><i><FiTrash /></i></button>
							<Link className='btn btn-warning' to={`edit/${record.id}`} replace={true} ><i><FiEdit /></i></Link>
						</div>

					</>
				)
			}

		}
	]


	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [isLoading, setIsLoading] = useState(false);
	const [totalData, setTotalData] = useState(0);
	const [roles, setRoles] = useState([]);
	const [refresher, setRefresher] = useState(false);
	const [search, setSearch] = useState('');
	const auth = useSelector(state => state.auth)



	const handleDelete = (record) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			iconColor: 'var(--bs-primary)',
			confirmButtonColor: '#1B98F5',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',


		}).then((result) => {
			if (result.isConfirmed) {
				setIsLoading(true)

				const deleteData = async () => {

					const response = await axios.delete(`/admin/roles/${record.id}`, {
						headers: {
							'Autorization': `Bearer ${auth.token}`,
						}
					})
					return response.data;
				}
				deleteData().then(data => {
					setRoles(roles.filter(role => role.id !== record.id))
					setIsLoading(false)
					Swal.fire({
						icon: 'success',
						title: 'Deleted!',
						text: 'Role has been deleted.',
						iconColor: 'var(--bs-primary)',
						showConfirmButton: false,
						timer: 1000

					})
					setRefresher(!refresher)
				}).catch(error => {
					console.log(error)
				})

			}
		})


	}
	useEffect(() => {
		setIsLoading(true)
		setPage(1)
		const fetchData = async () => {

			const response = await axios.get('/admin/roles', {
				params: {
					page,
					pageSize,
					search
				}
			});
			return response.data;
		}



		fetchData().then(data => {
			setRoles(data.roles)
			setTotalData(data.total)
			setIsLoading(false)
		}).catch(error => {
			console.log(error)
			setIsLoading(false)
		})

	}, [search, page, pageSize, refresher])

	const handleSearch = (e) => {
		setTimeout(() => {
			setSearch(e.target.value)
		}, 500)
	}


	return (<>

		<div >

			<div className='row align-items-center p-2'>
				<div className='col-2 '>
					<Link to="create"><OutlineButton title="Add" Icon={FaPlus} /></Link>
				</div>
				<div className='offset-xl-7 offset-lg-6 offset-md-5  col-md-5 col-lg-4 col-xl-3 offset-3 col-7'>
					<Input placeholder="Seach" icon={BsSearch} onChange={handleSearch} />
				</div>
			</div>
			<div className='p-2'>
				<Table

					columns={column}
					rowSelection={true}
					loading={{
						spinning: isLoading,
						indicator: <PropagateLoader color={"#1B98F5"} />
					}}

					dataSource={roles}
					rowKey={record => record.id}
					pagination={{
						total: totalData,
						onChange: (page) => {
							setPage(page)
						},
						onShowSizeChange: (current, size) => {
							setPage(current)
							setPageSize(size)
						}
					}}

				/>
			</div>

		</div >

	</>

	);
}
export default ShowAllRole;