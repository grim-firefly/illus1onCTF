import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Index';
import Home from './../Pages/Home/Index';
import Category from './../Pages/Category/Index';
import ShowAllCategory from './../Pages/Category/ShowAll';
import CreateCategory from './../Pages/Category/Create';
import EditCategory from './../Pages/Category/Edit';
import RequireAdminAuth from './Components/RequireAdminAuth';
import Dashboard from './../Pages/Dashboard/Index';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} >
				<Route index element={<Login />} />
				<Route path="dashboard" element={<RequireAdminAuth><Dashboard /></RequireAdminAuth>} />
				<Route path='categories' element={
					<RequireAdminAuth>
						<Category />
					</RequireAdminAuth>} >
					<Route index element={<ShowAllCategory />} />
					<Route path='create' element={<CreateCategory />} />
					<Route path='edit/:id' element={<EditCategory />} />
				</Route>


			</Route>
		</Routes >
	);
}
export default MainRoutes;