import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Carousel from './Components/Carousel/Index';

const About = () => {
	return (
		<>
			<div className="container">

				<Carousel />
			</div>

		</>
	);
}
export default About;