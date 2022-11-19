import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: [],
	isLoading: false,
	error: null,
	isPaginationLoading: false,
	create: {
		isLoading: false,
		error: null,
		status: null,
		message: null,
	},
	totalData: 0,
}

export const fetchCategory = createAsyncThunk('category/fetchCategory', async ({ page, pageSize }) => {
	const response = await axios.get('/categories', {
		params: {
			page,
			pageSize
		}
	});
	return response.data;
})

export const fetchTotalCategory = createAsyncThunk('category/fetchTotalCategory', async () => {
	const response = await axios.get('/categories/total');
	return response.data;
})

export const createCategory = createAsyncThunk('category/createCategory', async (data) => {
	const response = await axios.post('/categories', data);
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
		},
		[fetchCategory.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error.message;
		},
		[fetchTotalCategory.pending]: (state) => {
			state.isPaginationLoading = true;
		},
		[fetchTotalCategory.fulfilled]: (state, action) => {
			state.isPaginationLoading = false;
			state.totalData = action.payload.total;
		},
		[fetchTotalCategory.rejected]: (state, action) => {
			state.isPaginationLoading = false;
			state.error = action.error.message;
		},
		[createCategory.pending]: (state) => {
			state.create.isLoading = true;
		},
		[createCategory.fulfilled]: (state, action) => {
			state.create.isLoading = false;
			state.create.status = action.payload.status;
			state.create.message = action.payload.message;
		},
		[createCategory.rejected]: (state, action) => {
			state.create.isLoading = false;
			state.create.status = action.error.status;
			state.error = action.error.message;
		}

	}
})


export default categorySlice.reducer

