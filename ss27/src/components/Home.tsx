import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <h1>Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</h1>
    </div>
  );
}
