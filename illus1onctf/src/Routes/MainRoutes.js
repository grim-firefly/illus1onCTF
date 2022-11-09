import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './../Pages/Home/Index';
import Dashboard from './../Pages/Dashboard/Index';
import About from './../Pages/About/Index';
import Challenges from './../Pages/Challenges/Challenges';
import Login from './../Pages/Login/Index';
import ChallengeList from './../Pages/Challenges/Components/ChallengeList/Index';
import Contest from './../Pages/Contest/Index';
import Leaderboard from './../Pages/Leaderboard/Index';



const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<About />} />
				<Route path='dashboard' element={<Dashboard />} />
				<Route path='login' element={<Login />} />

				<Route path='challenges' element={<Challenges />}>
					<Route path=':category' element={<Challenges />} />
				</Route>
				<Route path='contest' element={<Contest />} >
				</Route>

				<Route path='contest/:id' element={<h1>I am Contest</h1>} />
				<Route path='leaderboard' element={<Leaderboard />}>
				</Route>

			</Route>
			<Route path='*' element={<Error />} />
		</Routes>
	);
}
export default MainRoutes;