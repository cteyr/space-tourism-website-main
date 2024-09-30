import { createSlice } from "@reduxjs/toolkit";


const initialState = "home"

export const navegateHeadSlice = createSlice({
    name: 'navegateHeader',
    initialState: initialState,
    reducers: {
        changeNavegateHeader: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const {changeNavegateHeader} = navegateHeadSlice.actions
export default navegateHeadSlice.reducer;