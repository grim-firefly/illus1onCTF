// import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../Pages/Frontend/Home/Index';
import About from './../Pages/Frontend/About/Index';
export let FrontendRoutes = (
	<Route path='/' element={<Home />}>
		<Route path='about' element={<About />}/>
	</Route>
);