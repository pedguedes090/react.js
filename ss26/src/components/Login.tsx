import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [UserInfo] = useState({
    email: "nva@gmail.com",
    password: "12345",
    role: "Admin",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });
  const isAuth = localStorage.getItem("isAuth") || null;
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    if (
      form.email === UserInfo.email &&
      form.password === UserInfo.password &&
      form.role === UserInfo.role
    ) {
      navigate("/account");
    } else {
      console.log("Loi");
    }
    // if (isAuth === "true") {
    //   navigate("/acount");
    // } else {
    //   navigate("/login");
    // }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h1>Dang nhap</h1>
          <input
            type="email"
            placeholder="Nhap email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Nhap mat khau"
            name="password"
            onChange={handleChange}
          />
          <select name="role" value={form.role} onChange={handleChange}>
            <option>--Chon Quyen --</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button onClick={handleLogin}>Dang Nhap</button>
        </div>
      </form>
    </>
  );
}