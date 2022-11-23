import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RequireUserAuth = ({ children }) => {
	const location = useLocation();
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	if (auth.isAuthenticated && auth.user.role == "user") {
		return children;
	}
	else {
		return <Navigate to='/login' state={{from:location}} replace />;
	}


}

export default RequireUserAuth;