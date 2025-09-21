import React, { useState } from "react";

export default function Register() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Đăng ký</h2>
        <form className="space-y-4">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Nhập email..."
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Nhập mật khẩu..."
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
