import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        incrementByAmount: (state, {payload}: PayloadAction<number>) => state + payload,
        resetCounter: () => 0
    }
})
export const {increment, decrement, incrementByAmount, resetCounter} = counterSlice.actions;
export default counterSlice.reducer;
