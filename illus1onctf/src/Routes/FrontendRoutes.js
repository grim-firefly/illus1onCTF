// import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../Pages/Frontend/Home/Index';
import About from './../Pages/Frontend/About/Index';
import Login from './../Common/Frontend/Login/Index';
import Dashboard from './../Pages/Frontend/Dashboard/Index';
export let FrontendRoutes = (
	<Route path='/' element={<Home />}>
		<Route index element={<Dashboard />}/>
		<Route path='about' element={<About />}/>
		<Route path='login' element={<Login />}/>
	</Route>
);