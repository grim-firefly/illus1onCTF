import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Header from './../../Common/Header/Index';


const Home = () => {
	return (
		<>
			<Header/>
			<Outlet />


		</>

	);
}
export default Home;