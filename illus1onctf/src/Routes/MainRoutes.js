import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './../Pages/Home/Index';
import Dashboard from './../Pages/Dashboard/Index';
import About from './../Pages/About/Index';
import Challenges from './../Pages/Challenges/Challenges';
import Login from './../Pages/Login/Index';



const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Dashboard />} />
				<Route path='about' element={<About />} />
				<Route path='login' element={<Login />} />
				<Route path='challenges' element={<Challenges />}>

				</Route>
			</Route>
			<Route path='*' element={<Error />} />
		</Routes>
	);
}
export default MainRoutes;