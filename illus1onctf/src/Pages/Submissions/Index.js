import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { PropagateLoader } from 'react-spinners';
import s from './style.module.css';
import { render } from '@testing-library/react';
const Submissions = () => {
	const [submissions, setSubmissions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [total, setTotal] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	useEffect(() => {
		setIsLoading(true);
		const fetchSubmissions = async () => {
			const response = await axios.get('/submissions', {
				params: {
					page,
					pageSize
				}
			});
			return response.data;
		}
		fetchSubmissions().then(data => {
			setSubmissions(data.submissions);
			setTotal(data.total);
			console.log(data);
			setIsLoading(false);
		}).catch(err => {
			console.log(err);
			setIsLoading(false);
		});

	}, [page, pageSize]);
	const column = [
		{
			title: 'title',
			dataIndex: 'challenges',
			key: 'id',
			render: (text, record) => {
				return text ? text.title : 'no title';
			}
		}, {
			title: 'flag',
			dataIndex: 'flag',
			key: 'id',

		},
		{
			title: 'solved',
			dataIndex: 'solved',
			key: 'id',
			render: (solved) => {
				return solved == 'correct' ? <span className='badge bg-success'>correct</span> : <span className='badge bg-danger'>Wrong</span>;
			}
		},
		{
			title: 'Submission',
			dataIndex: 'created_at',
			key: 'id'
		}
	]
	return (
		<>	{
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
			{!isLoading && <div>
				<div className="container">
					<div className={s.submissions}>
						<h1 className={`${s.heading}`}>
							My Submissions
						</h1>
						<div className='p-2'>
							<Table

								columns={column}
								rowSelection={true}
								loading={{
									spinning: isLoading,
									indicator: <PropagateLoader color={"#1B98F5"} />
								}}

								dataSource={submissions}
								rowKey={record => record.id}
								pagination={{
									total: total,
									onChange: (page) => {
										setPage(page)
									},
									defaultCurrent: page,
									showSizeChanger: true,
									defaultPageSize: pageSize,
									onShowSizeChange: (current, size) => {
										setPage(current)
										setPageSize(size)
									}
								}}

							/>
						</div>
					</div>
				</div>

			</div>
			}
		</>
	);
}
export default Submissions;