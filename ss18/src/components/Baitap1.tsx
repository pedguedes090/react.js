import { useReducer } from "react";
function reducer(state: number): number {
    return state + 1;
}
function Baitap1() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={() => dispatch()}>Increase</button>
        </div>
    );
}
export default Baitap1;