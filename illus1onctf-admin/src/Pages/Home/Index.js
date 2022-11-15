import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './../../Common/Header/Index';
import Sidebar from './../../Common/Sidebar/Index';


const Home = () => {
	return (
		<>

			<div className='d-flex'>
				<div className="">
					<div>
						<Sidebar />

					</div>


				</div>
				<div className='flex-grow-1'>
					<Header />
					
					<Outlet />
				</div>
			</div>



		</>

	);
}
export default Home;