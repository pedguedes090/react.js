import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const company = useSelector((state: any) => state.change);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "change" });
  };

  return (
    <div>
      <h2>Company: {company.name}</h2>
      <button onClick={handleChange}>Change</button>
    </div>
  );
}
