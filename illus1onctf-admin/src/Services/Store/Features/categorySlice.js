import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: [],
	isLoading: false,
	error: null
}

export const fetchCategory = createAsyncThunk('category/fetchCategory', async () => {
	const response = await axios.get('/categories');
	return response.data;
})

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {

	},
	extraReducers: {
		[fetchCategory.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchCategory.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload.categories;
			// console.log(action);
		},
		[fetchCategory.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		}

	}
})


export default categorySlice.reducer

