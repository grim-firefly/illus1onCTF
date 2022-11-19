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

const ShowAllCategory = () => {
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
						<div className=''>

							<button className='btn btn-danger' onClick={() => {
								handleDelete(record)
							}} >Delete</button>
							<Link className='btn btn-primary' to={`edit/${record.id}`} replace={true} >Edit</Link>
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
	const [categories, setCategories] = useState([]);
	const [refresher, setRefresher] = useState(false);
	const [search, setSearch] = useState('');



	// useEffect(() => {
	// 	setIsLoading(true)
	// 	const fetchData = async () => {
	// 		const response = await axios.get('/categories', {
	// 			params: {
	// 				page,
	// 				pageSize
	// 			}
	// 		});
	// 		return response.data;
	// 	}
	// 	fetchData().then(data => {
	// 		setCategories(data.categories)
	// 		setIsLoading(false)
	// 	})
	// }, [page, pageSize, refresher])

	const handleDelete = (record) => {
		setIsLoading(true)
		const deleteData = async () => {

			const response = await axios.delete(`/categories/${record.id}`)
			return response.data;
		}
		deleteData().then(data => {
			setCategories(categories.filter(category => category.id !== record.id))
			// setIsLoading(false)
			setRefresher(!refresher)
		})

	}
	useEffect(() => {
		setIsLoading(true)
		setPage(1)
		const fetchData = async () => {
			const response = await axios.get('/categories', {
				params: {
					page,
					pageSize,
					search
				}
			});
			return response.data;
		}
		fetchData().then(data => {
			setCategories(data.categories)
			setTotalData(data.total)
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
					loading={{
						spinning: isLoading,
						indicator: <PropagateLoader color={"#1B98F5"} />
					}}

					dataSource={categories}
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
export default ShowAllCategory;