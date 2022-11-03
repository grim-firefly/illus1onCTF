import React from 'react';
import StatusCard from './Components/StatusCard/Index';

const Dashboard = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-12">
						<div className="row mt-2">
							<div className="col-12 col-lg-6 col-xl-4 ">
								<StatusCard url="/login" heading="Challenges Rank" body={`Solved : 17 / 1700`} footer={`Rank : 1707`} />
							</div>
							<div className="col-12  col-lg-6 col-xl-4 ">
								<StatusCard url="/login" heading="Contest Rank" body={`Participated : 10 Contest`} footer={`Rank : 13`} />

							</div>
							<div className="col-12  col-lg-6 col-xl-4 ">
								<StatusCard url="/login" heading="Contribution Point" body={`Solved : 1700`} footer={`Rank : 3`} />
							</div>

						</div>
					</div>
					<div className="col-xl-4 col-lg-4  col-12 bg-info">
						Hello World
					</div>

				</div>

			</div>
		</div>
	);
}
export default Dashboard;