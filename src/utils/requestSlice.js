import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload;
        },
        removerRequest: (state, action) => {
            const newArray = state.filter(r=> action.payload !== r._id);
            return newArray;
        }
    }
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;