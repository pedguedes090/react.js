import React from "react";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <h1>Giới Thiệu bản than tôi</h1>
      <p>Xin chào tôi là Mai Duy Anh</p>
    </div>
  );
}
