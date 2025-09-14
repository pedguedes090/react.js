import React from "react";
import { NavLink } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  des: string;
}

const task: Data[] = [
  {
    id: 1,
    name: "Hoc React Router",
    des: "Lam quen voi route",
  },
  {
    id: 2,
    name: "Hoc Tail wind",
    des: "Lam quen voi Tail wind",
  },
  {
    id: 3,
    name: "Hoan thanh BTVN",
    des: "Day git",
  },
];

export default function TaskList() {
  return (
    <>
      <h1>Danh sach cong viec</h1>

      {task.map((u) => (
        <div key={u.id}>
          <h2>{u.name}</h2>
          <p>{u.des}</p>
          <NavLink to={`/taskdetail/${u.id}`} state={{ task: u }}>
            Xem chi tiet
          </NavLink>
        </div>
      ))}
    </>
  );
}
