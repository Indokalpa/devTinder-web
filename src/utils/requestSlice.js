import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload;
        },
        removeRequests: (state, action) => {
            const newArray = state.filter((r)=> action.payload !== r._id);
            return newArray;
        },
        clearRequests: () => null,
    }
});

export const { addRequests, removeRequests, clearRequests } = requestSlice.actions;
export default requestSlice.reducer;
