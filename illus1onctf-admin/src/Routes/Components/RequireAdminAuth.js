import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RequireAdminAuth = ({ children }) => {
	const location = useLocation();
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	if (auth.isAuthenticated && auth.user.role == "admin") {
		return children;
	}
	else {
		return <Navigate to='/' replace />;
	}


}

export default RequireAdminAuth;