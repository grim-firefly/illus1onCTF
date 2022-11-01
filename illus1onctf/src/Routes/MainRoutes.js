import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { BackendRoutes } from './BackendRoutes';
import { FrontendRoutes } from './FrontendRoutes';
import Error from './Components/Error';


const MainRoutes = () => {
	return (
		<Routes>
			{FrontendRoutes}
			{BackendRoutes}
			<Route path='*' element={<Error />} />
		</Routes>
	);
}
export default MainRoutes;