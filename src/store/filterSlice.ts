import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ICountryRegion {
	region: string;
}

// Define the initial state using that type
const initialState: ICountryRegion = {
	region: "All",
};

export const regionSlice = createSlice({
	name: "region",
	initialState,
	reducers: {
		filterAction: (state, action: PayloadAction<string>) => {
			state.region = action.payload;
			console.log(state.region);
		},
	},
});

export const { filterAction } = regionSlice.actions;

export default regionSlice.reducer;
