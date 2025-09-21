import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  const result = useSelector((state: any) => state.random);
  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "Random" });
  };

  return (
    <div>
      <div>{JSON.stringify(result)}</div>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
