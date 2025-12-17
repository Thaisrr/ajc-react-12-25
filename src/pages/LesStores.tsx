import {useAppDispatch, useAppSelector} from "../utils/hooks/useStore.ts";
import {decrement, increment, incrementByAmount, resetCounter} from "../store/CounterSlice.ts";

export const LesStores = () => {
const counter = useAppSelector(state => state.counter);
const dispatch = useAppDispatch();


    return (
        <>
            <h1>Redux</h1>
            <p>Installation : <code>npm i redux react-redux @reduxjs/toolkit</code></p>
            <p>Counter : {counter}</p>
            <p>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(20))}>+20</button>
                <button onClick={() => dispatch(resetCounter())}>reset</button>
            </p>
        </>
    )
}