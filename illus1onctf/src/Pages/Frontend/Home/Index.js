import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import About from './../About/Index';
import Header from './../../../Common/Frontend/Header/Index';

const Home = () => {
	return (
		<>
			<Header />
			<Outlet />


		</>

	);
}
export default Home;