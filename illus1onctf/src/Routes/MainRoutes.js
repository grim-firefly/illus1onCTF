import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './../Pages/Frontend/Home/Index';
import Dashboard from './../Pages/Frontend/Dashboard/Index';
import About from './../Pages/Frontend/About/Index';
import Login from './../Common/Frontend/Login/Index';
import Challenges from './../Pages/Frontend/Challenges/Challenges';


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