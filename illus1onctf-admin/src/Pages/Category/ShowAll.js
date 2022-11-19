import React from 'react';
import axios from "axios";
import OutlineButton from './../../Common/Button/Outline/Index';
import { BsSearch } from 'react-icons/bs';
import Input from './../../Common/Input/Index';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from './../../Services/Store/Features/categorySlice';
import { fetchTotalCategory } from './../../Services/Store/Features/categorySlice';
import { PropagateLoader } from 'react-spinners';

const ShowAllCategory = () => {
	const dispatch = useDispatch();
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
							<Link className='btn btn-primary' to="edit" >Edit</Link>
						</div>

					</>
				)
			}

		}
	]

	const category = useSelector(state => state.category)
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	useEffect(() => {
		dispatch(fetchTotalCategory())
	}, [])

	useEffect(() => {
		dispatch(fetchCategory({ page, pageSize }))
	}, [page, pageSize])

	const handleDelete = (record) => {
	}
	const rowSelection = (record) => {
		console.log(record.key);
	}
	return (<>
		{
			category.isPaginationLoading && < PropagateLoader loading={category.isPaginationLoading} color={"#1B98F5"} cssOverride={{
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
		{
			!category.isPaginationLoading &&
			< div >


				<div className='row align-items-center p-2'>
					<div className='col-2 '>
						<Link to="create"><OutlineButton title="Add" Icon={FaPlus} /></Link>
					</div>
					<div className='offset-xl-7 offset-lg-6 offset-md-5  col-md-5 col-lg-4 col-xl-3 offset-3 col-7'>
						<Input placeholder="Seach" icon={BsSearch} />
					</div>
				</div>
				<div >
					<Table
						rowSelection={rowSelection}
						columns={column}
						loading={{
							spinning: category.isLoading,
							indicator: <PropagateLoader color={"#1B98F5"} />
						}}

						dataSource={category.data}
						rowKey={record => record.id}
						pagination={{
							total: category.totalData,
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
		}

	</>

	);
}
export default ShowAllCategory;