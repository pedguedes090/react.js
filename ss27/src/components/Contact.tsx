import React from "react";
import { NavLink } from "react-router-dom";
export default function Contact() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <p>Email:</p>
      <p>SDT</p>
      <p>Link</p>
    </div>
  );
}
