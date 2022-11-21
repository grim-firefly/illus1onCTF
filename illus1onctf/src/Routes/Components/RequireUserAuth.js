import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthHook from './../../Hooks/useAuthHook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RequireUserAuth = ({ children }) => {
	const { isAuthenticated, user } = useAuthHook();
	const location = useLocation();
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		// if (isAuthenticated && user.role == "user") {
		// 	return children;
		// }
		// return <Navigate to="/login" state={{ from: location.pathname }} replace />;

	}, [isAuthenticated, user]);
	return children;


}

export default RequireUserAuth;