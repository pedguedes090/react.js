import React from "react";
import { NavLink } from "react-router-dom";

export default function Home2() {
  return (
    <>
      <NavLink
        to={"/home2"}
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/product2"}
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Product
      </NavLink>
      <NavLink
        to={"/detail2"}
        className={({ isActive }) => (isActive ? "bg-red-500" : "")}
      >
        Detail
      </NavLink>
      <h1>Day la Home</h1>
    </>
  );
}
