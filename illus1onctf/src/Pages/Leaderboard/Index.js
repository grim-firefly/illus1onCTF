import React, { useState } from 'react';
import Paginator from '../../Common/Paginator';
import Filters from './Components/Filters/Filters';
import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

const Leaderboard = () => {

	return (
		<>
			<div>
				<div className='container'>
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3  mt-2">

							<div className="">
								<Filters />
							</div>

						</div>
						<div className="col-md-7 col-lg-8 col-xl-9 mt-2">

							{/* <ChallengeList handleViewChallenge={handleViewChallenge} /> */}
							<div className='row'>
								<div className='col-12 mt-1'>
									{/* <Table

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
											showSizeChanger: true,
											onChange: (page) => {
												setPage(page)
											},
											onShowSizeChange: (current, size) => {
												setPage(current)
												setPageSize(size)
											}
										}}

									/> */}
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