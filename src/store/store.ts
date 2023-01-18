import { configureStore } from "@reduxjs/toolkit";
import countrySliceReducer from "./searchSlice";
import regionSliceReducer from "./filterSlice";

export const store = configureStore({
	reducer: {
		name: countrySliceReducer,
		region: regionSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
