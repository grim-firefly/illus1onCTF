import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Index';
import Home from './../Pages/Home/Index';
import Category from './../Pages/Category/Index';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} >
				<Route path='login' element={<Login />} />
				<Route path='categories' element={<Category />} />
			</Route>
		</Routes>
	);
}
export default MainRoutes;