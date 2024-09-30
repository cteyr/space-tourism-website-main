import { createSlice } from "@reduxjs/toolkit";


const initialState = "launch_vehicle_portrait"

export const TechnologySlice = createSlice({
    name: 'crew',
    initialState: initialState,
    reducers: {
        changeTechnologySlice: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const {changeTechnologySlice} = TechnologySlice.actions
export default TechnologySlice.reducer;