import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangeColor() {
  const state = useSelector((state: any) => state.changeColor);
  const dispatch = useDispatch();

  const handleChangeColor = () => {
    dispatch({ type: "doimau" });
  };

  return (
    <div
      style={{
        backgroundColor: state.name === "sang" ? "white" : "black",
        color: state.name === "sang" ? "black" : "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <input type="checkbox" onClick={handleChangeColor} />
      <h1>{state.name}</h1>
    </div>
  );
}
