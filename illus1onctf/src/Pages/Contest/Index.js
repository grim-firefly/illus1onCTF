import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Paginator from '../../Common/Paginator';
import OutlineButton from './../../Common/Button/Outline/Index';
import Filters from './Components/Filters/Filters';

const Contest = () => {
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
							</div>

						</div>
					</div>
				</div>

			</div>
			
		</div>
	);
}
export default Contest;