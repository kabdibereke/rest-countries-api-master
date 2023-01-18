import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ICountryName {
	name: string;
}

// Define the initial state using that type
const initialState: ICountryName = {
	name: "",
};

export const countrySlice = createSlice({
	name: "country",
	initialState,
	reducers: {
		incrementByAmount: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
			console.log(state.name);
		},
	},
});

export const { incrementByAmount } = countrySlice.actions;

export default countrySlice.reducer;
