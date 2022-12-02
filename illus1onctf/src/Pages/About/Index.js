import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Carousel from './Components/Carousel/Index';
import s from './style.module.css';
import Service from './Asset/Services.png';
import OutlineButton from './../../Common/Button/Outline/Index';
const About = () => {
	return (
		<>
			<div className="container">

				<Carousel />

			</div>
			<div>
				<section id="about" className="about section-padding bg-white pb-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12 col-12 mt-md-5">
								<div className="about-img">
									<img src={Service} alt="" className="img-fluid" />
								</div>
							</div>
							<div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
								<div className="about-text">
									<h2>We Provide the Best Quality <br /> Services Ever</h2>
									<p>“illus1onCTF” is a fun and addicting way to learn about cyber security. You can earn points by taking part in CTF contests, solving challenges, and taking short lessons to keep your hacking streak going.This will help users learn new and upgraded technology related to cybersecurity. This system also provides an efficient way of managing CTF contests. Organizations can host their contests on our website.</p>
									<OutlineButton title="Learn More"  />

								</div>
							</div>
						</div>
					</div>
				</section>
			</div>




			<section className="services section-padding mt-5 mb-5" id="services">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-header text-center pb-5">
								<h2>Our Services</h2>
								<p>illus1ion CTF Provides</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card text-white text-center bg-dark pb-2">
								<div className="card-body">
									<i className="bi bi-laptop"></i>
									<h3 className="card-title">Learn</h3>
									<p className="lead">Gain knowledge about introductory through advanced level cybersecurity principles in our
										noncompetitive features the picoGym and the picoPrimer.
									</p>
									<OutlineButton title="Read More"  />

								</div>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card text-white text-center bg-dark pb-2">
								<div className="card-body">
									<i className="bi bi-journal"></i>
									<h3 className="card-title">Practice</h3>
									<p className="lead">Build your CTF skills, help yourself advance your personal best score, and prepare for the big show using our mini Competitions to practice.
									</p>
									<OutlineButton title="Read More"  />
								</div>
							</div>
						</div>
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card text-center   text-white  bg-dark pb-2">
								<div className="card-body">
									<i className="bi bi-intersect"></i>
									<h3 className="card-title">Compete</h3>
									<p className="lead">Join the world’s largest free hacking competition where you can compete for cash prizes, specialty
										awards, and a chance to visit Carnegie Mellon University.
									</p>
									<OutlineButton title="Read More"  />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
export default About;