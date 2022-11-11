import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Index';
import Home from './../Pages/Home/Index';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} >
				<Route path='login' element={<Login/>}/>
			</Route>
		</Routes>
	);
}
export default MainRoutes;