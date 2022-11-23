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
import User from './../Pages/Users/Index';
import ShowAllUser from '../Pages/Users/ShowAll';
import EditUser from './../Pages/Users/Edit';
import CreateUser from '../Pages/Users/Create';
import Role from '../Pages/Role/Index';
import EditRole from './../Pages/Role/Edit';
import CreateRole from './../Pages/Role/Create';
import ShowAllRole from './../Pages/Role/ShowAll';

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
				<Route path='users' element={
					<RequireAdminAuth>
						<User />
					</RequireAdminAuth>} >
					<Route index element={<ShowAllUser />} />
					<Route path='create' element={<CreateUser />} />
					<Route path='edit/:id' element={<EditUser />} />
				</Route>
				<Route path='roles' element={
					<RequireAdminAuth>
						<Role />
					</RequireAdminAuth>} >
					<Route index element={<ShowAllRole />} />
					<Route path='create' element={<CreateRole />} />
					<Route path='edit/:id' element={<EditRole />} />
				</Route>


			</Route>
		</Routes >
	);
}
export default MainRoutes;