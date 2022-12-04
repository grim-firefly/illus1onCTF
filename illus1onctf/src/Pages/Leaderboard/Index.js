import React, { useState } from 'react';
import Paginator from '../../Common/Paginator';
import Filters from './Components/Filters/Filters';
import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import axios from 'axios';
import { Table } from 'antd';
import Search from 'antd/es/transfer/search';

const Leaderboard = () => {
	const column = [
		{
			title: '#',
			key: 'id',
			render: (text, record, index) => {
				return index + 1;
			}
		}, {
			title: 'Email',
			dataIndex: 'email',
			key: 'id',
			// render: (text, record) => {
			// 	return text ? text.email : 'no email';
			// }

		},
		{
			title: 'Points',
			dataIndex: 'points',
			key: 'id'
		}
	]

	const [scoreList, setScoreList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [total, setTotal] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	useEffect(() => {
		setIsLoading(true);
		const fetchScoreList = async () => {
			const response = await axios.get('/leaderboard', {
				params: {
					search: search
				}
			});
			return response.data;
		}
		fetchScoreList().then(data => {
			setScoreList(data.ScoreList);
			setTotal(data.total);
			setIsLoading(false);
		}).catch(err => {
			console.log(err);
			setIsLoading(false);
		});
	}, [search,page, pageSize]);

	const handleSearch = (value) => {
		setTimeout(() => {
			setSearch(value);
		}, 500);
	}
	return (
		<>
			<div>
				<div className='container'>
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3  mt-2">

							<div className="">
								<Filters handleSearch={handleSearch} />
							</div>

						</div>
						<div className="col-md-7 col-lg-8 col-xl-9 mt-2">

							{/* <ChallengeList handleViewChallenge={handleViewChallenge} /> */}
							<div className='row'>
								<div className='col-12 mt-1'>
									<Table

										columns={column}
										rowSelection={true}
										loading={{
											spinning: isLoading,
											indicator: <PropagateLoader color={"#1B98F5"} />
										}}

										dataSource={scoreList}
										rowKey={record => record.id}

										pagination={{
											total: total,
											showSizeChanger: true,
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

				</div>
			</div>
		</>

	);
}
export default Leaderboard;