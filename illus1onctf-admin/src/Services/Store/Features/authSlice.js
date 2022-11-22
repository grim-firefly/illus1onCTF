import { createSlice } from '@reduxjs/toolkit'
import  axios  from 'axios';

const initialState = {
	user: null,
	isAuthenticated: false,
	token: null,

}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload.user;
			state.isAuthenticated = true;
			state.token = action.payload.token;
			localStorage.setItem('token', action.payload.token);
		},
		logout: (state) => {
			localStorage.removeItem('token');
			state.user = null;
			state.isAuthenticated = false;
			state.token = null;
		}
	},
})

// Action creators are generated for each case reducer function
export const { setAuth, logout } = authSlice.actions
export default authSlice.reducer