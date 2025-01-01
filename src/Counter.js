import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./state/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())} style={{color: "#000"}}>increment</button>
            <span> </span>
            <button onClick={() => dispatch(decrement())} style={{color: "#000"}}>decrement</button>
            <span> </span>
            <button onClick={() => dispatch(incrementByAmount(10))} style={{color: "#000"}}>incrementByAmount</button>
        </div>
    );
}

export default Counter;