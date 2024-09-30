import { createSlice } from "@reduxjs/toolkit";


const initialState = "Moon"

export const destinationSlice = createSlice({
    name: 'destination',
    initialState: initialState,
    reducers: {
        changeDestinationNavegate: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const {changeDestinationNavegate} = destinationSlice.actions
export default destinationSlice.reducer;