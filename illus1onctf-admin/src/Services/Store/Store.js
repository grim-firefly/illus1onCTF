import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Features/categorySlice";
export const store = configureStore({
	reducer: {
		category: categoryReducer
	},
});