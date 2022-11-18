import React from 'react';
import axios from "axios";
import OutlineButton from './../../Common/Button/Outline/Index';
import { BsSearch } from 'react-icons/bs';
import Input from './../../Common/Input/Index';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from './../../Services/Store/Features/categorySlice';

const ShowAllCategory = () => {
	const dispatch = useDispatch();

	const column = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
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
	useEffect(() => {
		dispatch(fetchCategory())
	}, [])

	const handleDelete = (record) => {
	}
	const rowSelection = (record) => {
		console.log(record.key);
	}
	return (
		<div>

			<div className='row align-items-center p-2'>
				<div className='col-2 '>
					<Link to="create"><OutlineButton title="Add" Icon={FaPlus} /></Link>
				</div>
				<div className='offset-xl-7 offset-lg-6 offset-md-5  col-md-5 col-lg-4 col-xl-3 offset-3 col-7'>
					<Input placeholder="Seach" icon={BsSearch} />
				</div>
			</div>
			<div>
				<Table
					rowSelection={rowSelection}
					columns={column}
					// dataSource={data}

				/>
			</div>

		</div>
	);
}
export default ShowAllCategory;