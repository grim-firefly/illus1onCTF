import React from 'react';
import Paginator from '../../Common/Paginator';
import Filters from './Components/Filters/Filters';

const Leaderboard = () => {
	return (
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
								<Paginator />
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
export default Leaderboard;