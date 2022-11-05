import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';
import { TfiUser } from 'react-icons/tfi';
import StatusCard from './Components/StatusCard/Index';
import ProgressTracker from './Components/ProgressTracker/ProgressTracker';
import SidebarContainer from './Components/SidebarContainer/SidebarContainer';
import Input from './../../Common/Input/Index';
const Dashboard = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-12">
						<div className="row mt-2">
							<div className="col-12 col-lg-6 col-xl-4 mb-1">
								<StatusCard url="/login" heading="Challenges Rank" body={`Solved : 17 / 1700`} footer={`Rank : 1707`} />
							</div>
							<div className="col-12  col-lg-6 col-xl-4 mb-1">
								<StatusCard url="/login" heading="Contest Rank" body={`Participated : 10 Contest`} footer={`Rank : 13`} />

							</div>
							<div className="col-12  col-lg-6 col-xl-4 mb-1">
								<StatusCard url="/login" heading="Contribution Point" body={`Score : 1700`} footer={`Rank : 3`} />
							</div>

						</div>
						<div className="row mt-2">
							<div className="col-12">

								<ProgressTracker />
							</div>

						</div>


					</div>
					<div className="col-xl-4 col-lg-4  col-12">

						<div className='mt-2'>
							<SidebarContainer title="Pay Attention">
								<h4 className={`${s.sidecardBodyTitle}`}>Before Contest</h4>
								<Link className={`${s.sidecardBodyLink}`}>illus1onCTF Round #832 ( Div. 2)</Link>
								<p className={`${s.sidecardBodyTimer}`}>25:50:54</p>
								<Link className={`btn btn-outline-primary ${s.sidecardBodybtn}`}>Register now</Link>
								<h6 className={`${s.sidecardBodyfooter}`}>*has extra registration</h6>
							</SidebarContainer>
						</div>

						<div className='mt-2'>

							<SidebarContainer title="Find user">
								<div className='px-2 py-2 pb-3'>
									<Input name="username" placeholder="username" icon={TfiUser} />
									<div className='mt-1 d-flex flex-row-reverse'>
										<button className={`btn btn-outline-primary mt-1 ${s.sidecardBodybtn}`}   >Search</button>
									</div>
								</div>

							</SidebarContainer>
						</div>


					</div>




				</div>

			</div>

		</div>
	);
}
export default Dashboard;