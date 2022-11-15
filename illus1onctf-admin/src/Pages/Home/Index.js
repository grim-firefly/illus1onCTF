import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './../../Common/Header/Index';
import Sidebar from './../../Common/Sidebar/Index';


const Home = () => {
	return (
		<>
			<Header />

			<div className='d-flex'>
				<Sidebar />


				<div className='flex-grow-1'>
					<Outlet />

				</div>
			</div>



		</>

	);
}
export default Home;