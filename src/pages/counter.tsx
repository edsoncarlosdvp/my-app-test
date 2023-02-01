import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Stock/Slice";
import { RootState } from "../Redux/Store";

export const Counter = () => {
    const dispatch = useDispatch();
    const stock = useSelector((state: RootState) => state.stock)

    const incrementValue = () => {
        dispatch(increment())
    }

    const decrementValue = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h2>{stock.counter}</h2>
            <button onClick={incrementValue}>Incrementa</button>
            <button onClick={decrementValue}>Decrementa</button>
        </div>
    )
}