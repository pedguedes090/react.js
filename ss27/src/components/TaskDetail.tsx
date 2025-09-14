import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TaskDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const { task } = location.state || {};
  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.des}</p>
      <button onClick={() => navigate(-1)}>Quay lai</button>
    </div>
  );
}
