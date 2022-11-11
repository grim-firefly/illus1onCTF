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
					<div className='row'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio omnis dolorum quae possimus voluptates illo assumenda unde voluptatibus animi ducimus sunt doloremque, quibusdam officia rem a repudiandae reiciendis, consequuntur veritatis!
					</div>
					<Outlet />
				</div>
			</div>



		</>

	);
}
export default Home;