import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice.ts";


const store = configureStore({
    reducer: {
        counter: CounterSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;