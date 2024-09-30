import { createSlice } from "@reduxjs/toolkit";


const initialState = "ansari"

export const crewSlice = createSlice({
    name: 'crew',
    initialState: initialState,
    reducers: {
        changeCrewSlice: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const {changeCrewSlice} = crewSlice.actions
export default crewSlice.reducer;