import React from 'react';
import axios from "axios";
import OutlineButton from '../../Common/Button/Outline/Index';
import { BsEye, BsSearch } from 'react-icons/bs';
import Input from '../../Common/Input/Index';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { PropagateLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Modal from './Modal/Index';

const ShowAllChallenges = () => {
	const column = [
		{
			title: 'title',
			dataIndex: 'title',
			key: 'id',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'id',
		}, {
			title: 'points',
			dataIndex: 'points',
			key: 'id',

		},
		{
			title: 'Author',
			dataIndex: 'author_id',
			key: 'id',
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

							<button className='btn btn-primary' data={record} data-id={record.id} data-bs-toggle="modal" data-bs-target="#viewChallengeModal" onClick={handleViewChallenge}><BsEye/></button>

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
	const [challenges, setChallenges] = useState([]);
	const [refresher, setRefresher] = useState(false);
	const [search, setSearch] = useState('');
	const [viewChallenge, setViewChallenge] = React.useState(null);

	const auth = useSelector(state => state.auth)

	const handleViewChallenge = (e) => {
		setViewChallenge(e.currentTarget.dataset.id);
	}

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

					const response = await axios.delete(`/admin/challenges/${record.id}`, {
						headers: {
							'Autorization': `Bearer ${auth.token}`,
						}
					})
					return response.data;
				}
				deleteData().then(data => {
					setIsLoading(false)
					Swal.fire({
						icon: 'success',
						title: 'Deleted!',
						text: 'User has been deleted.',
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

			const response = await axios.get('/challenges', {
				params: {
					page,
					pageSize,
					search
				}
			});
			return response.data;
		}



		fetchData().then(data => {
			setChallenges(data.challenges)
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
				<Modal challenge={viewChallenge} />
				<Table

					columns={column}
					rowSelection={true}
					loading={{
						spinning: isLoading,
						indicator: <PropagateLoader color={"#1B98F5"} />
					}}

					dataSource={challenges}
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
export default ShowAllChallenges;